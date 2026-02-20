#!/usr/bin/env npx tsx
/**
 * Generate toolkit manifest from a local ai-toolkit directory or GitHub
 *
 * Usage:
 *   Local mode:
 *     npx tsx scripts/generate-manifest.ts <toolkit-path>
 *     npx tsx scripts/generate-manifest.ts ~/.config/opencode
 *
 *   GitHub mode:
 *     npx tsx scripts/generate-manifest.ts --github
 *     TOOLKIT_REPO=owner/repo GITHUB_TOKEN=xxx npx tsx scripts/generate-manifest.ts --github
 *
 * This script reads agents, skills, scaffolds, and agent-templates from the
 * specified toolkit directory (or GitHub repo) and generates
 * src/data/toolkit-manifest.json.
 *
 * Environment variables (GitHub mode):
 *   TOOLKIT_REPO   - GitHub repo in "owner/repo" format (default: mdmagnuson-creator/ai-toolkit)
 *   GITHUB_TOKEN   - GitHub personal access token for API authentication (required for rate limits)
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// ============================================================================
// Configuration
// ============================================================================

const DEFAULT_REPO = "mdmagnuson-creator/ai-toolkit";
const GITHUB_API_BASE = "https://api.github.com";

// Output location
const OUTPUT_PATH = path.join(
  process.cwd(),
  "src/data/toolkit-manifest.json"
);

// Sample data location (for local dev fallback)
const SAMPLE_DATA_PATH = path.join(
  process.cwd(),
  "src/data/sample-manifest.json"
);

// ============================================================================
// Types
// ============================================================================

interface Agent {
  slug: string;
  name: string;
  description: string;
  mode: "primary" | "subagent";
  category: string;
  content: string;
}

interface Skill {
  slug: string;
  name: string;
  description: string;
  triggers: string[];
  isMeta: boolean;
  content: string;
}

interface Scaffold {
  slug: string;
  name: string;
  description: string;
  files: string[];
}

interface AgentTemplate {
  slug: string;
  name: string;
  description: string;
  category: string;
  appliesTo: string[];
  generates: string;
  content: string;
}

interface ChangelogEntry {
  type: "feat" | "fix" | "refactor" | "docs" | "chore";
  description: string;
  scope?: string;
}

interface ChangelogDay {
  date: string;
  displayDate: string;
  changes: ChangelogEntry[];
}

interface ToolkitManifest {
  generatedAt: string;
  syncedAt: string;
  toolkitCommit: string;
  counts: {
    agents: number;
    primaryAgents: number;
    subagents: number;
    skills: number;
    metaSkills: number;
    scaffolds: number;
    agentTemplates: number;
  };
  categories: {
    critics: number;
    developers: number;
    testers: number;
    other: number;
  };
  templateCategories: string[];
  agents: Agent[];
  skills: Skill[];
  scaffolds: Scaffold[];
  agentTemplates: AgentTemplate[];
  changelog: ChangelogDay[];
}

// GitHub API types
interface GitHubContentItem {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: "file" | "dir" | "symlink" | "submodule";
}

interface GitHubConfig {
  repo: string;
  token: string | undefined;
}

// ============================================================================
// Parsing Utilities
// ============================================================================

/**
 * Parse YAML-like frontmatter from markdown content
 */
function parseFrontmatter(content: string): {
  frontmatter: Record<string, unknown>;
  body: string;
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterStr = match[1];
  const body = match[2];

  // Simple YAML parser for our use case
  const frontmatter: Record<string, unknown> = {};
  const lines = frontmatterStr.split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value: unknown = line.slice(colonIndex + 1).trim();

      // Remove quotes
      if (
        typeof value === "string" &&
        value.startsWith('"') &&
        value.endsWith('"')
      ) {
        value = value.slice(1, -1);
      }

      // Handle booleans
      if (value === "true") value = true;
      if (value === "false") value = false;

      // Handle numbers
      if (
        typeof value === "string" &&
        !isNaN(parseFloat(value)) &&
        value !== ""
      ) {
        value = parseFloat(value);
      }

      frontmatter[key] = value;
    }
  }

  return { frontmatter, body };
}

/**
 * Categorize an agent based on its name and description
 */
function categorizeAgent(name: string, description: string): string {
  const lowerName = name.toLowerCase();
  const lowerDesc = description.toLowerCase();

  if (lowerName.includes("critic") || lowerName.includes("reviewer")) {
    return "critics";
  }
  if (
    lowerName.includes("dev") ||
    lowerDesc.includes("implement") ||
    lowerDesc.includes("write code")
  ) {
    return "developers";
  }
  if (lowerName.includes("test") || lowerDesc.includes("test")) {
    return "testers";
  }
  return "other";
}

/**
 * Convert slug to display name
 */
function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Extract trigger phrases from skill description
 */
function extractTriggers(description: string): string[] {
  const triggerMatch = description.match(/Triggers on:\s*(.+?)\.?$/);
  if (triggerMatch) {
    return triggerMatch[1].split(",").map((t) => t.trim());
  }
  return [];
}

// Changelog cutoff timestamp - only show changes committed after this Unix timestamp.
// This filters out pre-release commits and internal development history.
const CHANGELOG_START_TIMESTAMP = 1771621916;

/**
 * Parse a conventional commit message
 */
function parseCommitMessage(
  message: string
): { type: ChangelogEntry["type"]; scope?: string; description: string } | null {
  // Match conventional commit format: type(scope): description or type: description
  const match = message.match(
    /^(feat|fix|refactor|docs|chore)(?:\(([^)]+)\))?:\s*(.+)$/i
  );

  if (!match) {
    return null;
  }

  return {
    type: match[1].toLowerCase() as ChangelogEntry["type"],
    scope: match[2] || undefined,
    description: match[3],
  };
}

/**
 * Format date for display
 * Note: We parse YYYY-MM-DD manually to avoid timezone issues.
 * Using `new Date("2026-02-20")` interprets it as UTC midnight,
 * which can shift to the previous day when converted to local time.
 */
function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day); // month is 0-indexed
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ============================================================================
// GitHub API Utilities
// ============================================================================

/**
 * Sleep for a given number of milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch with retry logic and exponential backoff for rate limiting
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries: number = 3
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const response = await fetch(url, options);

    // Success
    if (response.ok) {
      return response;
    }

    // Rate limited - wait and retry
    if (response.status === 403 || response.status === 429) {
      const retryAfter = response.headers.get("Retry-After");
      const rateLimitReset = response.headers.get("X-RateLimit-Reset");

      let waitTime: number;

      if (retryAfter) {
        waitTime = parseInt(retryAfter, 10) * 1000;
      } else if (rateLimitReset) {
        const resetTime = parseInt(rateLimitReset, 10) * 1000;
        waitTime = Math.max(resetTime - Date.now(), 1000);
      } else {
        // Exponential backoff: 1s, 2s, 4s
        waitTime = Math.pow(2, attempt) * 1000;
      }

      console.warn(
        `Rate limited (attempt ${attempt + 1}/${maxRetries}). Waiting ${Math.round(waitTime / 1000)}s...`
      );
      await sleep(waitTime);
      continue;
    }

    // Not found - don't retry
    if (response.status === 404) {
      throw new Error(`Not found: ${url}`);
    }

    // Other error - store and maybe retry
    lastError = new Error(
      `GitHub API error: ${response.status} ${response.statusText}`
    );

    if (attempt < maxRetries - 1) {
      const waitTime = Math.pow(2, attempt) * 1000;
      console.warn(
        `Request failed (attempt ${attempt + 1}/${maxRetries}). Retrying in ${waitTime / 1000}s...`
      );
      await sleep(waitTime);
    }
  }

  throw lastError || new Error("Request failed after max retries");
}

/**
 * Build headers for GitHub API requests
 */
function buildGitHubHeaders(token: string | undefined): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "opencode-toolkit-website",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

/**
 * List contents of a directory in a GitHub repo
 */
async function listGitHubDirectory(
  config: GitHubConfig,
  dirPath: string
): Promise<GitHubContentItem[]> {
  const url = `${GITHUB_API_BASE}/repos/${config.repo}/contents/${dirPath}`;
  const headers = buildGitHubHeaders(config.token);

  const response = await fetchWithRetry(url, { headers });
  const data = await response.json();

  // Directory contents are returned as an array
  if (!Array.isArray(data)) {
    throw new Error(`Expected array for directory contents at ${dirPath}`);
  }

  return data as GitHubContentItem[];
}

/**
 * Fetch raw file content from GitHub
 */
async function fetchGitHubFile(
  config: GitHubConfig,
  filePath: string
): Promise<string> {
  const url = `${GITHUB_API_BASE}/repos/${config.repo}/contents/${filePath}`;
  const headers = {
    ...buildGitHubHeaders(config.token),
    Accept: "application/vnd.github.raw",
  };

  const response = await fetchWithRetry(url, { headers });
  return response.text();
}

/**
 * Check if a path exists in the GitHub repo
 */
async function gitHubPathExists(
  config: GitHubConfig,
  filePath: string
): Promise<boolean> {
  const url = `${GITHUB_API_BASE}/repos/${config.repo}/contents/${filePath}`;
  const headers = buildGitHubHeaders(config.token);

  try {
    const response = await fetch(url, { headers });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Fetch the latest commit SHA from the repository
 */
async function fetchLatestCommitSHA(config: GitHubConfig): Promise<string> {
  const url = `${GITHUB_API_BASE}/repos/${config.repo}/commits?per_page=1`;
  const headers = buildGitHubHeaders(config.token);

  try {
    const response = await fetchWithRetry(url, { headers });
    const commits = await response.json();

    if (Array.isArray(commits) && commits.length > 0 && commits[0].sha) {
      // Return short SHA (7 characters)
      return commits[0].sha.substring(0, 7);
    }
    return "unknown";
  } catch (error) {
    console.warn(`Could not fetch latest commit SHA: ${error}`);
    return "unknown";
  }
}

// GitHub commit type for API response
interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    committer: {
      date: string;
    };
  };
}

/**
 * Read changelog from GitHub commits
 */
async function readChangelogFromGitHub(
  config: GitHubConfig
): Promise<ChangelogDay[]> {
  const changelog: ChangelogDay[] = [];

  try {
    const url = `${GITHUB_API_BASE}/repos/${config.repo}/commits?per_page=50`;
    const headers = buildGitHubHeaders(config.token);

    const response = await fetchWithRetry(url, { headers });
    const commits: GitHubCommit[] = await response.json();

    if (!Array.isArray(commits)) {
      console.warn("Unexpected response format for commits");
      return changelog;
    }

    const changesByDate: Map<string, ChangelogEntry[]> = new Map();

    for (const commit of commits) {
      const commitDate = new Date(commit.commit.committer.date);
      const timestamp = Math.floor(commitDate.getTime() / 1000);

      // Filter out commits before the cutoff timestamp
      if (timestamp < CHANGELOG_START_TIMESTAMP) continue;

      const message = commit.commit.message.split("\n")[0]; // Get first line
      const parsed = parseCommitMessage(message);
      if (!parsed) continue; // Skip non-conventional commits

      const date = commitDate.toISOString().split("T")[0]; // YYYY-MM-DD format

      if (!changesByDate.has(date)) {
        changesByDate.set(date, []);
      }

      changesByDate.get(date)!.push({
        type: parsed.type,
        description: parsed.description,
        scope: parsed.scope,
      });
    }

    // Convert to array, sorted by date descending
    const sortedDates = Array.from(changesByDate.keys()).sort().reverse();

    for (const date of sortedDates) {
      changelog.push({
        date,
        displayDate: formatDate(date),
        changes: changesByDate.get(date)!,
      });
    }
  } catch (error) {
    console.warn(`Could not read changelog from GitHub: ${error}`);
  }

  return changelog;
}

// ============================================================================
// GitHub Readers
// ============================================================================

/**
 * Read all agents from GitHub
 */
async function readAgentsFromGitHub(config: GitHubConfig): Promise<Agent[]> {
  const agents: Agent[] = [];

  try {
    const items = await listGitHubDirectory(config, "agents");
    const mdFiles = items.filter(
      (item) => item.type === "file" && item.name.endsWith(".md")
    );

    for (const file of mdFiles) {
      const slug = file.name.replace(".md", "");
      const content = await fetchGitHubFile(config, file.path);
      const { frontmatter, body } = parseFrontmatter(content);

      const agent: Agent = {
        slug,
        name: slugToName(slug),
        description: (frontmatter.description as string) || "",
        mode: (frontmatter.mode as "primary" | "subagent") || "subagent",
        category: categorizeAgent(
          slug,
          (frontmatter.description as string) || ""
        ),
        content: body.trim(),
      };

      agents.push(agent);
    }
  } catch (error) {
    console.warn(`Could not read agents from GitHub: ${error}`);
  }

  return agents.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Read all skills from GitHub
 */
async function readSkillsFromGitHub(config: GitHubConfig): Promise<Skill[]> {
  const skills: Skill[] = [];

  try {
    const items = await listGitHubDirectory(config, "skills");
    const dirs = items.filter((item) => item.type === "dir");

    for (const dir of dirs) {
      // Special handling for 'meta' directory - contains meta-skills as subdirectories
      if (dir.name === "meta") {
        const metaDirs = await listGitHubDirectory(config, "skills/meta");
        const metaSubDirs = metaDirs.filter((item) => item.type === "dir");

        for (const metaDir of metaSubDirs) {
          const skillFilePath = `skills/meta/${metaDir.name}/SKILL.md`;
          const exists = await gitHubPathExists(config, skillFilePath);
          if (!exists) continue;

          const content = await fetchGitHubFile(config, skillFilePath);
          const { frontmatter, body } = parseFrontmatter(content);

          skills.push({
            slug: metaDir.name,
            name: (frontmatter.name as string) || slugToName(metaDir.name),
            description: (frontmatter.description as string) || "",
            triggers: extractTriggers((frontmatter.description as string) || ""),
            isMeta: true,
            content: body.trim(),
          });
        }
        continue;
      }

      const skillFilePath = `skills/${dir.name}/SKILL.md`;
      const exists = await gitHubPathExists(config, skillFilePath);
      if (!exists) continue;

      const content = await fetchGitHubFile(config, skillFilePath);
      const { frontmatter, body } = parseFrontmatter(content);

      skills.push({
        slug: dir.name,
        name: (frontmatter.name as string) || slugToName(dir.name),
        description: (frontmatter.description as string) || "",
        triggers: extractTriggers((frontmatter.description as string) || ""),
        isMeta: false,
        content: body.trim(),
      });
    }
  } catch (error) {
    console.warn(`Could not read skills from GitHub: ${error}`);
  }

  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * List files recursively in a GitHub directory
 */
async function listGitHubFilesRecursive(
  config: GitHubConfig,
  dirPath: string
): Promise<string[]> {
  const files: string[] = [];

  const items = await listGitHubDirectory(config, dirPath);

  for (const item of items) {
    if (item.type === "file") {
      // Get relative path from the scaffold root
      const relativePath = item.path.split("/").slice(2).join("/");
      files.push(relativePath);
    } else if (item.type === "dir") {
      const subFiles = await listGitHubFilesRecursive(config, item.path);
      files.push(...subFiles);
    }
  }

  return files;
}

/**
 * Read all scaffolds from GitHub
 */
async function readScaffoldsFromGitHub(
  config: GitHubConfig
): Promise<Scaffold[]> {
  const scaffolds: Scaffold[] = [];

  try {
    const items = await listGitHubDirectory(config, "scaffolds");
    const dirs = items.filter((item) => item.type === "dir");

    for (const dir of dirs) {
      const scaffoldPath = `scaffolds/${dir.name}`;

      // Get all files recursively
      const files = await listGitHubFilesRecursive(config, scaffoldPath);

      // Try to read README for description
      let description = "";
      const readmePath = `${scaffoldPath}/README.md`;
      const readmeExists = await gitHubPathExists(config, readmePath);

      if (readmeExists) {
        const readme = await fetchGitHubFile(config, readmePath);
        const firstPara = readme.split("\n\n")[0].replace(/^#.*\n/, "").trim();
        description = firstPara;
      }

      scaffolds.push({
        slug: dir.name,
        name: slugToName(dir.name),
        description,
        files,
      });
    }
  } catch (error) {
    console.warn(`Could not read scaffolds from GitHub: ${error}`);
  }

  return scaffolds.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Read all agent templates from GitHub
 */
async function readAgentTemplatesFromGitHub(
  config: GitHubConfig
): Promise<AgentTemplate[]> {
  const templates: AgentTemplate[] = [];

  try {
    const categoryItems = await listGitHubDirectory(config, "agent-templates");
    const categoryDirs = categoryItems.filter((item) => item.type === "dir");

    for (const categoryDir of categoryDirs) {
      const categoryPath = `agent-templates/${categoryDir.name}`;
      const fileItems = await listGitHubDirectory(config, categoryPath);
      const mdFiles = fileItems.filter(
        (item) => item.type === "file" && item.name.endsWith(".md")
      );

      for (const file of mdFiles) {
        const slug = file.name.replace(".md", "");
        const content = await fetchGitHubFile(config, file.path);
        const { frontmatter, body } = parseFrontmatter(content);

        // Parse applies_to which can be a string or array
        let appliesTo: string[] = [];
        const appliesRaw = frontmatter.applies_to;
        if (typeof appliesRaw === "string") {
          appliesTo = appliesRaw.split(",").map((s) => s.trim());
        } else if (Array.isArray(appliesRaw)) {
          appliesTo = appliesRaw.map(String);
        }

        templates.push({
          slug,
          name: slugToName(slug),
          description: (frontmatter.description as string) || "",
          category: categoryDir.name,
          appliesTo,
          generates: (frontmatter.generates as string) || "",
          content: body.trim(),
        });
      }
    }
  } catch (error) {
    console.warn(`Could not read agent templates from GitHub: ${error}`);
  }

  return templates.sort((a, b) => a.name.localeCompare(b.name));
}

// ============================================================================
// Readers
// ============================================================================

/**
 * Read all agents from the toolkit
 */
function readAgents(toolkitPath: string): Agent[] {
  const agentsDir = path.join(toolkitPath, "agents");
  const agents: Agent[] = [];

  if (!fs.existsSync(agentsDir)) {
    console.warn(`Agents directory not found: ${agentsDir}`);
    return agents;
  }

  const files = fs.readdirSync(agentsDir).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const slug = file.replace(".md", "");
    const content = fs.readFileSync(path.join(agentsDir, file), "utf-8");
    const { frontmatter, body } = parseFrontmatter(content);

    const agent: Agent = {
      slug,
      name: slugToName(slug),
      description: (frontmatter.description as string) || "",
      mode: (frontmatter.mode as "primary" | "subagent") || "subagent",
      category: categorizeAgent(slug, (frontmatter.description as string) || ""),
      content: body.trim(),
    };

    agents.push(agent);
  }

  return agents.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Read all skills from the toolkit
 */
function readSkills(toolkitPath: string): Skill[] {
  const skillsDir = path.join(toolkitPath, "skills");
  const skills: Skill[] = [];

  if (!fs.existsSync(skillsDir)) {
    console.warn(`Skills directory not found: ${skillsDir}`);
    return skills;
  }

  const dirs = fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  for (const dir of dirs) {
    // Special handling for 'meta' directory - contains meta-skills as subdirectories
    if (dir.name === "meta") {
      const metaSkillsDir = path.join(skillsDir, "meta");
      const metaDirs = fs
        .readdirSync(metaSkillsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory());

      for (const metaDir of metaDirs) {
        const metaSkillFile = path.join(
          metaSkillsDir,
          metaDir.name,
          "SKILL.md"
        );
        if (!fs.existsSync(metaSkillFile)) continue;

        const metaContent = fs.readFileSync(metaSkillFile, "utf-8");
        const { frontmatter: metaFm, body: metaBody } =
          parseFrontmatter(metaContent);

        skills.push({
          slug: metaDir.name,
          name: (metaFm.name as string) || slugToName(metaDir.name),
          description: (metaFm.description as string) || "",
          triggers: extractTriggers((metaFm.description as string) || ""),
          isMeta: true,
          content: metaBody.trim(),
        });
      }
      continue; // Skip to next directory
    }

    const skillFile = path.join(skillsDir, dir.name, "SKILL.md");
    if (!fs.existsSync(skillFile)) continue;

    const content = fs.readFileSync(skillFile, "utf-8");
    const { frontmatter, body } = parseFrontmatter(content);

    skills.push({
      slug: dir.name,
      name: (frontmatter.name as string) || slugToName(dir.name),
      description: (frontmatter.description as string) || "",
      triggers: extractTriggers((frontmatter.description as string) || ""),
      isMeta: false,
      content: body.trim(),
    });
  }

  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Read all scaffolds from the toolkit
 */
function readScaffolds(toolkitPath: string): Scaffold[] {
  const scaffoldsDir = path.join(toolkitPath, "scaffolds");
  const scaffolds: Scaffold[] = [];

  if (!fs.existsSync(scaffoldsDir)) {
    console.warn(`Scaffolds directory not found: ${scaffoldsDir}`);
    return scaffolds;
  }

  const dirs = fs
    .readdirSync(scaffoldsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  for (const dir of dirs) {
    const scaffoldPath = path.join(scaffoldsDir, dir.name);

    // Get all files in scaffold recursively
    const files: string[] = [];
    function walkDir(currentPath: string, relativePath: string = "") {
      const entries = fs.readdirSync(currentPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(currentPath, entry.name);
        const relPath = path.join(relativePath, entry.name);
        if (entry.isDirectory()) {
          walkDir(fullPath, relPath);
        } else {
          files.push(relPath);
        }
      }
    }
    walkDir(scaffoldPath);

    // Try to read README or description
    let description = "";
    const readmePath = path.join(scaffoldPath, "README.md");
    if (fs.existsSync(readmePath)) {
      const readme = fs.readFileSync(readmePath, "utf-8");
      // Get first paragraph
      const firstPara = readme.split("\n\n")[0].replace(/^#.*\n/, "").trim();
      description = firstPara;
    }

    scaffolds.push({
      slug: dir.name,
      name: slugToName(dir.name),
      description,
      files,
    });
  }

  return scaffolds.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Read all agent templates from the toolkit
 */
function readAgentTemplates(toolkitPath: string): AgentTemplate[] {
  const templatesDir = path.join(toolkitPath, "agent-templates");
  const templates: AgentTemplate[] = [];

  if (!fs.existsSync(templatesDir)) {
    console.warn(`Agent templates directory not found: ${templatesDir}`);
    return templates;
  }

  const categoryDirs = fs
    .readdirSync(templatesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  for (const categoryDir of categoryDirs) {
    const categoryPath = path.join(templatesDir, categoryDir.name);
    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(".md", "");
      const content = fs.readFileSync(path.join(categoryPath, file), "utf-8");
      const { frontmatter, body } = parseFrontmatter(content);

      // Parse applies_to which can be a string or array
      let appliesTo: string[] = [];
      const appliesRaw = frontmatter.applies_to;
      if (typeof appliesRaw === "string") {
        appliesTo = appliesRaw.split(",").map((s) => s.trim());
      } else if (Array.isArray(appliesRaw)) {
        appliesTo = appliesRaw.map(String);
      }

      templates.push({
        slug,
        name: slugToName(slug),
        description: (frontmatter.description as string) || "",
        category: categoryDir.name,
        appliesTo,
        generates: (frontmatter.generates as string) || "",
        content: body.trim(),
      });
    }
  }

  return templates.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Read git changelog from the local toolkit directory
 */
function readChangelog(toolkitPath: string): ChangelogDay[] {
  const changelog: ChangelogDay[] = [];

  // Check if git repo exists
  if (!fs.existsSync(path.join(toolkitPath, ".git"))) {
    console.warn(`Git repository not found at: ${toolkitPath}`);
    return changelog;
  }

  try {
    // Get last 50 commits with Unix timestamp for filtering
    const gitLog = execSync(
      'git log --oneline -50 --format="%H|%at|%ad|%s" --date=short',
      { cwd: toolkitPath, encoding: "utf-8" }
    );

    const commits = gitLog.trim().split("\n").filter(Boolean);
    const changesByDate: Map<string, ChangelogEntry[]> = new Map();

    for (const commit of commits) {
      const [, timestamp, date, message] = commit.split("|");
      if (!timestamp || !date || !message) continue;

      // Filter out commits before the cutoff timestamp
      if (parseInt(timestamp, 10) < CHANGELOG_START_TIMESTAMP) continue;

      const parsed = parseCommitMessage(message);
      if (!parsed) continue; // Skip non-conventional commits

      if (!changesByDate.has(date)) {
        changesByDate.set(date, []);
      }

      changesByDate.get(date)!.push({
        type: parsed.type,
        description: parsed.description,
        scope: parsed.scope,
      });
    }

    // Convert to array, sorted by date descending
    const sortedDates = Array.from(changesByDate.keys()).sort().reverse();

    for (const date of sortedDates) {
      changelog.push({
        date,
        displayDate: formatDate(date),
        changes: changesByDate.get(date)!,
      });
    }
  } catch (error) {
    console.warn("Failed to read git log:", error);
  }

  return changelog;
}

// ============================================================================
// Main
// ============================================================================

function printUsage() {
  console.log(`
Usage:
  Local mode:   npx tsx scripts/generate-manifest.ts <toolkit-path>
  GitHub mode:  npx tsx scripts/generate-manifest.ts --github

Arguments:
  toolkit-path  Path to the ai-toolkit directory (e.g., ~/.config/opencode)
  --github      Fetch toolkit data from GitHub instead of local path

Environment variables (GitHub mode):
  TOOLKIT_REPO   GitHub repo in "owner/repo" format (default: ${DEFAULT_REPO})
  GITHUB_TOKEN   GitHub personal access token for API authentication (recommended)

Examples:
  Local mode:
    npx tsx scripts/generate-manifest.ts ~/.config/opencode
    npx tsx scripts/generate-manifest.ts /path/to/ai-toolkit

  GitHub mode:
    npx tsx scripts/generate-manifest.ts --github
    TOOLKIT_REPO=owner/repo GITHUB_TOKEN=ghp_xxx npx tsx scripts/generate-manifest.ts --github

The script will generate src/data/toolkit-manifest.json with all agents,
skills, scaffolds, and agent templates from the toolkit.
`);
}

/**
 * Build manifest from toolkit data
 */
function buildManifest(
  agents: Agent[],
  skills: Skill[],
  scaffolds: Scaffold[],
  agentTemplates: AgentTemplate[],
  changelog: ChangelogDay[],
  toolkitCommit: string
): ToolkitManifest {
  const primaryAgents = agents.filter((a) => a.mode === "primary");
  const subagents = agents.filter((a) => a.mode === "subagent");
  const metaSkills = skills.filter((s) => s.isMeta);

  const categories = {
    critics: agents.filter((a) => a.category === "critics").length,
    developers: agents.filter((a) => a.category === "developers").length,
    testers: agents.filter((a) => a.category === "testers").length,
    other: agents.filter((a) => a.category === "other").length,
  };

  const templateCategories = [
    ...new Set(agentTemplates.map((t) => t.category)),
  ].sort();

  const now = new Date().toISOString();

  return {
    generatedAt: now,
    syncedAt: now,
    toolkitCommit,
    counts: {
      agents: agents.length,
      primaryAgents: primaryAgents.length,
      subagents: subagents.length,
      skills: skills.length,
      metaSkills: metaSkills.length,
      scaffolds: scaffolds.length,
      agentTemplates: agentTemplates.length,
    },
    categories,
    templateCategories,
    agents,
    skills,
    scaffolds,
    agentTemplates,
    changelog,
  };
}

/**
 * Write manifest to file and log summary
 */
function writeManifest(manifest: ToolkitManifest): void {
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));

  console.log(`Generated ${OUTPUT_PATH}`);
  console.log(
    `  Agents: ${manifest.counts.agents} (${manifest.counts.primaryAgents} primary, ${manifest.counts.subagents} sub-agents)`
  );
  console.log(
    `  Skills: ${manifest.counts.skills} (${manifest.counts.metaSkills} meta-skills)`
  );
  console.log(`  Scaffolds: ${manifest.counts.scaffolds}`);
  console.log(
    `  Agent Templates: ${manifest.counts.agentTemplates} (categories: ${manifest.templateCategories.join(", ")})`
  );
  console.log(`  Changelog: ${manifest.changelog.length} days of changes`);
  console.log(
    `  Categories: Critics ${manifest.categories.critics}, Developers ${manifest.categories.developers}, Testers ${manifest.categories.testers}, Other ${manifest.categories.other}`
  );
}

/**
 * Check if running in CI environment
 */
function isCI(): boolean {
  return Boolean(process.env.CI || process.env.GITHUB_ACTIONS);
}

/**
 * Copy sample manifest to output location for local development
 */
function copySampleData(): void {
  if (!fs.existsSync(SAMPLE_DATA_PATH)) {
    console.error(`Error: Sample data not found at ${SAMPLE_DATA_PATH}`);
    process.exit(1);
  }

  const sampleData = fs.readFileSync(SAMPLE_DATA_PATH, "utf-8");
  
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(OUTPUT_PATH, sampleData);
  
  console.warn(
    "⚠️  Using sample data. Run scripts/generate-manifest.ts ~/.config/opencode for full data."
  );
  console.log(`Copied sample data to ${OUTPUT_PATH}`);
}

/**
 * Run in local mode - read from filesystem
 */
function runLocalMode(toolkitPath: string): void {
  // Expand ~ to home directory
  if (toolkitPath.startsWith("~")) {
    toolkitPath = toolkitPath.replace("~", process.env.HOME || "");
  }

  // Resolve to absolute path
  toolkitPath = path.resolve(toolkitPath);

  // Handle missing toolkit path
  if (!fs.existsSync(toolkitPath)) {
    // In CI, fail fast - CI should use --github mode
    if (isCI()) {
      console.error(`Error: Toolkit path does not exist: ${toolkitPath}`);
      console.error("CI should use --github mode to fetch from GitHub.");
      process.exit(1);
    }
    
    // In local development, fall back to sample data
    console.log(`Toolkit path does not exist: ${toolkitPath}`);
    copySampleData();
    return;
  }

  console.log(`Generating manifest from local path: ${toolkitPath}`);

  // Read all toolkit data
  const agents = readAgents(toolkitPath);
  const skills = readSkills(toolkitPath);
  const scaffolds = readScaffolds(toolkitPath);
  const agentTemplates = readAgentTemplates(toolkitPath);
  const changelog = readChangelog(toolkitPath);

  // For local mode, use "local" as the commit
  const manifest = buildManifest(agents, skills, scaffolds, agentTemplates, changelog, "local");
  writeManifest(manifest);
}

/**
 * Run in GitHub mode - fetch from GitHub API
 */
async function runGitHubMode(): Promise<void> {
  const repo = process.env.TOOLKIT_REPO || DEFAULT_REPO;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn(
      "Warning: GITHUB_TOKEN not set. Unauthenticated requests are limited to 60/hour."
    );
    console.warn(
      "Set GITHUB_TOKEN environment variable for higher rate limits (5,000/hour).\n"
    );
  }

  const config: GitHubConfig = { repo, token };

  console.log(`Generating manifest from GitHub: ${repo}`);
  console.log(`Authenticated: ${token ? "yes" : "no"}\n`);

  // Fetch all toolkit data from GitHub
  console.log("Fetching agents...");
  const agents = await readAgentsFromGitHub(config);
  console.log(`  Found ${agents.length} agents`);

  console.log("Fetching skills...");
  const skills = await readSkillsFromGitHub(config);
  console.log(`  Found ${skills.length} skills`);

  console.log("Fetching scaffolds...");
  const scaffolds = await readScaffoldsFromGitHub(config);
  console.log(`  Found ${scaffolds.length} scaffolds`);

  console.log("Fetching agent templates...");
  const agentTemplates = await readAgentTemplatesFromGitHub(config);
  console.log(`  Found ${agentTemplates.length} agent templates`);

  console.log("Fetching changelog...");
  const changelog = await readChangelogFromGitHub(config);
  console.log(`  Found ${changelog.length} days of changes`);

  console.log("Fetching latest commit SHA...");
  const toolkitCommit = await fetchLatestCommitSHA(config);
  console.log(`  Commit: ${toolkitCommit}\n`);

  // Build and write manifest
  const manifest = buildManifest(agents, skills, scaffolds, agentTemplates, changelog, toolkitCommit);
  writeManifest(manifest);
}

async function main(): Promise<void> {
  // Parse command line arguments
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    printUsage();
    process.exit(0);
  }

  // Check for GitHub mode
  if (args.includes("--github")) {
    await runGitHubMode();
    return;
  }

  // Local mode requires a path argument
  if (args.length === 0) {
    printUsage();
    process.exit(1);
  }

  runLocalMode(args[0]);
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exit(1);
});
