/**
 * Extract data from the ai-toolkit repo to generate toolkit-manifest.json
 * 
 * This script reads all agents, skills, scaffolds, templates, and git history from
 * either the local ai-toolkit repo or clones it during CI builds.
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// Configuration
const TOOLKIT_PATH = process.env.TOOLKIT_PATH || path.join(process.env.HOME || '', '.config/opencode');
const AI_TOOLKIT_GIT_PATH = process.env.AI_TOOLKIT_GIT_PATH || path.join(process.env.HOME || '', 'code/ai-toolkit');
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/toolkit-manifest.json');

interface Agent {
  slug: string;
  name: string;
  description: string;
  mode: 'primary' | 'subagent';
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
  type: 'feat' | 'fix' | 'refactor' | 'docs' | 'chore';
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

/**
 * Parse YAML-like frontmatter from markdown content
 */
function parseFrontmatter(content: string): { frontmatter: Record<string, unknown>; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterStr = match[1];
  const body = match[2];

  // Simple YAML parser for our use case
  const frontmatter: Record<string, unknown> = {};
  const lines = frontmatterStr.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value: unknown = line.slice(colonIndex + 1).trim();
      
      // Remove quotes
      if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      
      // Handle booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      // Handle numbers
      if (typeof value === 'string' && !isNaN(parseFloat(value)) && value !== '') {
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

  if (lowerName.includes('critic') || lowerName.includes('reviewer')) {
    return 'critics';
  }
  if (lowerName.includes('dev') || lowerDesc.includes('implement') || lowerDesc.includes('write code')) {
    return 'developers';
  }
  if (lowerName.includes('test') || lowerDesc.includes('test')) {
    return 'testers';
  }
  return 'other';
}

/**
 * Convert slug to display name
 */
function slugToName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Extract trigger phrases from skill description
 */
function extractTriggers(description: string): string[] {
  const triggerMatch = description.match(/Triggers on:\s*(.+?)\.?$/);
  if (triggerMatch) {
    return triggerMatch[1].split(',').map(t => t.trim());
  }
  return [];
}

/**
 * Read all agents from the toolkit
 */
function readAgents(): Agent[] {
  const agentsDir = path.join(TOOLKIT_PATH, 'agents');
  const agents: Agent[] = [];

  if (!fs.existsSync(agentsDir)) {
    console.warn(`Agents directory not found: ${agentsDir}`);
    return agents;
  }

  const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(agentsDir, file), 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);

    const agent: Agent = {
      slug,
      name: slugToName(slug),
      description: (frontmatter.description as string) || '',
      mode: (frontmatter.mode as 'primary' | 'subagent') || 'subagent',
      category: categorizeAgent(slug, (frontmatter.description as string) || ''),
      content: body.trim(),
    };

    agents.push(agent);
  }

  return agents.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Read all skills from the toolkit
 */
function readSkills(): Skill[] {
  const skillsDir = path.join(TOOLKIT_PATH, 'skills');
  const skills: Skill[] = [];

  if (!fs.existsSync(skillsDir)) {
    console.warn(`Skills directory not found: ${skillsDir}`);
    return skills;
  }

  const dirs = fs.readdirSync(skillsDir, { withFileTypes: true })
    .filter(d => d.isDirectory());

  for (const dir of dirs) {
    // Special handling for 'meta' directory - contains meta-skills as subdirectories
    if (dir.name === 'meta') {
      const metaSkillsDir = path.join(skillsDir, 'meta');
      const metaDirs = fs.readdirSync(metaSkillsDir, { withFileTypes: true })
        .filter(d => d.isDirectory());

      for (const metaDir of metaDirs) {
        const metaSkillFile = path.join(metaSkillsDir, metaDir.name, 'SKILL.md');
        if (!fs.existsSync(metaSkillFile)) continue;

        const metaContent = fs.readFileSync(metaSkillFile, 'utf-8');
        const { frontmatter: metaFm, body: metaBody } = parseFrontmatter(metaContent);

        skills.push({
          slug: metaDir.name,
          name: (metaFm.name as string) || slugToName(metaDir.name),
          description: (metaFm.description as string) || '',
          triggers: extractTriggers((metaFm.description as string) || ''),
          isMeta: true,
          content: metaBody.trim(),
        });
      }
      continue; // Skip to next directory
    }

    const skillFile = path.join(skillsDir, dir.name, 'SKILL.md');
    if (!fs.existsSync(skillFile)) continue;

    const content = fs.readFileSync(skillFile, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);

    skills.push({
      slug: dir.name,
      name: (frontmatter.name as string) || slugToName(dir.name),
      description: (frontmatter.description as string) || '',
      triggers: extractTriggers((frontmatter.description as string) || ''),
      isMeta: false,
      content: body.trim(),
    });
  }

  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Read all scaffolds from the toolkit
 */
function readScaffolds(): Scaffold[] {
  const scaffoldsDir = path.join(TOOLKIT_PATH, 'scaffolds');
  const scaffolds: Scaffold[] = [];

  if (!fs.existsSync(scaffoldsDir)) {
    console.warn(`Scaffolds directory not found: ${scaffoldsDir}`);
    return scaffolds;
  }

  const dirs = fs.readdirSync(scaffoldsDir, { withFileTypes: true })
    .filter(d => d.isDirectory());

  for (const dir of dirs) {
    const scaffoldPath = path.join(scaffoldsDir, dir.name);
    
    // Get all files in scaffold recursively
    const files: string[] = [];
    function walkDir(currentPath: string, relativePath: string = '') {
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
    let description = '';
    const readmePath = path.join(scaffoldPath, 'README.md');
    if (fs.existsSync(readmePath)) {
      const readme = fs.readFileSync(readmePath, 'utf-8');
      // Get first paragraph
      const firstPara = readme.split('\n\n')[0].replace(/^#.*\n/, '').trim();
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
function readAgentTemplates(): AgentTemplate[] {
  const templatesDir = path.join(TOOLKIT_PATH, 'agent-templates');
  const templates: AgentTemplate[] = [];

  if (!fs.existsSync(templatesDir)) {
    console.warn(`Agent templates directory not found: ${templatesDir}`);
    return templates;
  }

  const categoryDirs = fs.readdirSync(templatesDir, { withFileTypes: true })
    .filter(d => d.isDirectory());

  for (const categoryDir of categoryDirs) {
    const categoryPath = path.join(templatesDir, categoryDir.name);
    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace('.md', '');
      const content = fs.readFileSync(path.join(categoryPath, file), 'utf-8');
      const { frontmatter, body } = parseFrontmatter(content);

      // Parse applies_to which can be a string or array
      let appliesTo: string[] = [];
      const appliesRaw = frontmatter.applies_to;
      if (typeof appliesRaw === 'string') {
        appliesTo = appliesRaw.split(',').map(s => s.trim());
      } else if (Array.isArray(appliesRaw)) {
        appliesTo = appliesRaw.map(String);
      }

      templates.push({
        slug,
        name: slugToName(slug),
        description: (frontmatter.description as string) || '',
        category: categoryDir.name,
        appliesTo,
        generates: (frontmatter.generates as string) || '',
        content: body.trim(),
      });
    }
  }

  return templates.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Parse a conventional commit message
 */
function parseCommitMessage(message: string): { type: ChangelogEntry['type']; scope?: string; description: string } | null {
  // Match conventional commit format: type(scope): description or type: description
  const match = message.match(/^(feat|fix|refactor|docs|chore)(?:\(([^)]+)\))?:\s*(.+)$/i);
  
  if (!match) {
    return null;
  }

  return {
    type: match[1].toLowerCase() as ChangelogEntry['type'],
    scope: match[2] || undefined,
    description: match[3],
  };
}

/**
 * Format date for display
 */
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Changelog cutoff timestamp - only show changes committed after this Unix timestamp.
// This filters out pre-release commits and internal development history.
const CHANGELOG_START_TIMESTAMP = 1771621916;

/**
 * Read git changelog from the ai-toolkit repo
 */
function readChangelog(): ChangelogDay[] {
  const changelog: ChangelogDay[] = [];

  // Check if git repo exists
  if (!fs.existsSync(path.join(AI_TOOLKIT_GIT_PATH, '.git'))) {
    console.warn(`Git repository not found at: ${AI_TOOLKIT_GIT_PATH}`);
    return changelog;
  }

  try {
    // Get last 50 commits with Unix timestamp for filtering
    const gitLog = execSync(
      'git log --oneline -50 --format="%H|%at|%ad|%s" --date=short',
      { cwd: AI_TOOLKIT_GIT_PATH, encoding: 'utf-8' }
    );

    const commits = gitLog.trim().split('\n').filter(Boolean);
    const changesByDate: Map<string, ChangelogEntry[]> = new Map();

    for (const commit of commits) {
      const [, timestamp, date, message] = commit.split('|');
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
    const sortedDates = Array.from(changesByDate.keys())
      .sort()
      .reverse();
    
    for (const date of sortedDates) {
      changelog.push({
        date,
        displayDate: formatDate(date),
        changes: changesByDate.get(date)!,
      });
    }
  } catch (error) {
    console.warn('Failed to read git log:', error);
  }

  return changelog;
}

/**
 * Main function
 */
function main() {
  console.log(`Extracting toolkit data from: ${TOOLKIT_PATH}`);
  console.log(`Git repository path: ${AI_TOOLKIT_GIT_PATH}`);

  const agents = readAgents();
  const skills = readSkills();
  const scaffolds = readScaffolds();
  const agentTemplates = readAgentTemplates();
  const changelog = readChangelog();

  const primaryAgents = agents.filter(a => a.mode === 'primary');
  const subagents = agents.filter(a => a.mode === 'subagent');
  const metaSkills = skills.filter(s => s.isMeta);

  const categories = {
    critics: agents.filter(a => a.category === 'critics').length,
    developers: agents.filter(a => a.category === 'developers').length,
    testers: agents.filter(a => a.category === 'testers').length,
    other: agents.filter(a => a.category === 'other').length,
  };

  // Get unique template categories
  const templateCategories = [...new Set(agentTemplates.map(t => t.category))].sort();

  const manifest: ToolkitManifest = {
    generatedAt: new Date().toISOString(),
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

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));

  console.log(`Generated ${OUTPUT_PATH}`);
  console.log(`  Agents: ${agents.length} (${primaryAgents.length} primary, ${subagents.length} sub-agents)`);
  console.log(`  Skills: ${skills.length} (${metaSkills.length} meta-skills)`);
  console.log(`  Scaffolds: ${scaffolds.length}`);
  console.log(`  Agent Templates: ${agentTemplates.length} (categories: ${templateCategories.join(', ')})`);
  console.log(`  Changelog: ${changelog.length} days of changes`);
  console.log(`  Categories: Critics ${categories.critics}, Developers ${categories.developers}, Testers ${categories.testers}, Other ${categories.other}`);
}

main();
