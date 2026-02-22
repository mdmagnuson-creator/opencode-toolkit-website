import { promises as fs } from "fs";
import path from "path";
import toolkitStructure from "@/data/toolkit-structure.json";

const LOCAL_TOOLKIT_PATH = path.join(process.env.HOME || "~", "code", "ai-toolkit");
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/opencode-ai/ai-toolkit/main";

interface AgentEntry {
  name: string;
  file: string;
  description: string;
}

interface SkillEntry {
  name: string;
  path: string;
  description: string;
}

/**
 * Resolves the source path for an agent by looking up its name in toolkit-structure.json.
 * Falls back to `agents/${slug}.md` if not found.
 */
function resolveAgentPath(slug: string): string {
  const categories = toolkitStructure.agents.categories;
  for (const category of Object.values(categories)) {
    const agent = (category.agents as AgentEntry[]).find((a) => a.name === slug);
    if (agent) {
      return agent.file;
    }
  }
  // Safe fallback
  return `agents/${slug}.md`;
}

/**
 * Resolves the source path for a skill by looking up its name in toolkit-structure.json.
 * Falls back to `skills/${slug}/SKILL.md` if not found.
 */
function resolveSkillPath(slug: string): string {
  const categories = toolkitStructure.skills.categories;
  for (const category of Object.values(categories)) {
    const skill = (category.skills as SkillEntry[]).find((s) => s.name === slug);
    if (skill) {
      // path field may or may not include trailing slash
      const basePath = skill.path.endsWith("/") ? skill.path : `${skill.path}/`;
      return `${basePath}SKILL.md`;
    }
  }
  // Safe fallback
  return `skills/${slug}/SKILL.md`;
}

/**
 * Resolves content for an agent or skill by checking:
 * 1. Manifest content (if non-empty, return immediately)
 * 2. Local toolkit checkout at ~/code/ai-toolkit/
 * 3. GitHub raw content as fallback
 * 
 * @param type - "agent" or "skill"
 * @param slug - The agent/skill slug (e.g., "builder", "prd")
 * @param manifestContent - The content from toolkit-manifest.json
 * @returns The resolved markdown content, or empty string on failure
 */
export async function resolveContent(
  type: "agent" | "skill",
  slug: string,
  manifestContent: string
): Promise<string> {
  // Return manifest content if it exists and is non-empty
  if (manifestContent && manifestContent.trim().length > 0) {
    return manifestContent;
  }

  // Resolve path using toolkit-structure.json metadata
  const relativePath =
    type === "agent" ? resolveAgentPath(slug) : resolveSkillPath(slug);

  const localPath = path.join(LOCAL_TOOLKIT_PATH, relativePath);
  const githubUrl = `${GITHUB_RAW_BASE}/${relativePath}`;

  // Try local file first
  try {
    const content = await fs.readFile(localPath, "utf-8");
    if (content.trim().length > 0) {
      return content;
    }
  } catch {
    // Local file doesn't exist or can't be read, continue to fallback
  }

  // Try GitHub raw content as fallback
  try {
    const response = await fetch(githubUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (response.ok) {
      const content = await response.text();
      if (content.trim().length > 0) {
        return content;
      }
    }
  } catch {
    // GitHub fetch failed, return empty
  }

  // All sources failed
  return "";
}
