#!/usr/bin/env npx tsx
/**
 * Transform toolkit-structure.json to toolkit-manifest.json format
 *
 * This script reads the fetched toolkit-structure.json and transforms it
 * to match the website's expected toolkit-manifest.json schema.
 *
 * Category mappings:
 *   - primary → special display (shown as Primary Agents section)
 *   - critics → Critics
 *   - implementation → Developers
 *   - testing → Testers
 *   - operational → Split into Orchestrators (other) + Utilities (other)
 *
 * Operational split logic:
 *   - Orchestrators: agents that coordinate other agents (qa, tester, critic, e2e-reviewer, prd-impact-analyzer)
 *   - Utilities: standalone tools (debugger, wall-e, session-status, docs-writer, etc.)
 */

import * as fs from 'fs';
import * as path from 'path';

// ============================================================================
// Input/Output Paths
// ============================================================================

const STRUCTURE_PATH = path.join(process.cwd(), 'src/data/toolkit-structure.json');
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/toolkit-manifest.json');

// ============================================================================
// Types - Input (toolkit-structure.json)
// ============================================================================

interface StructureAgent {
  name: string;
  file: string;
  description: string;
}

interface StructureCategory {
  description: string;
  agents: StructureAgent[];
}

interface StructureSkill {
  name: string;
  path: string;
  description: string;
}

interface StructureSkillCategory {
  description: string;
  skills: StructureSkill[];
}

interface StructureScaffold {
  name: string;
  path: string;
  description: string;
}

interface StructureAgentTemplateCategory {
  name: string;
  file: string;
}

interface StructureChangelogEntry {
  type: string;
  description: string;
  scope?: string;
  hash: string;
}

interface StructureChangelogDay {
  date: string;
  changes: StructureChangelogEntry[];
}

interface ToolkitStructure {
  version: string;
  generatedAt: string;
  repository: string;
  agents: {
    total: number;
    categories: Record<string, StructureCategory>;
  };
  skills: {
    total: number;
    categories: Record<string, StructureSkillCategory>;
  };
  scaffolds: {
    total: number;
    items: StructureScaffold[];
  };
  templates: {
    agentTemplates: {
      description: string;
      categories: Record<string, StructureAgentTemplateCategory[]>;
    };
  };
  changelog: {
    generatedFrom: string;
    entries: StructureChangelogDay[];
  };
}

// ============================================================================
// Types - Output (toolkit-manifest.json)
// ============================================================================

interface Agent {
  slug: string;
  name: string;
  description: string;
  mode: 'primary' | 'subagent';
  category: 'critics' | 'developers' | 'testers' | 'orchestrators' | 'utilities';
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

type ChangelogEntryType = 'feat' | 'fix' | 'chore' | 'docs' | 'refactor' | 'test' | 'style' | 'perf' | 'ci' | 'build';

const VALID_CHANGELOG_TYPES: ReadonlySet<string> = new Set<ChangelogEntryType>([
  'feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'style', 'perf', 'ci', 'build'
]);

function validateChangelogType(type: string): ChangelogEntryType {
  return VALID_CHANGELOG_TYPES.has(type) ? (type as ChangelogEntryType) : 'chore';
}

interface ChangelogEntry {
  type: ChangelogEntryType;
  description: string;
  scope?: string;
}

interface ChangelogDay {
  date: string;
  displayDate: string;
  changes: ChangelogEntry[];
}

interface ToolkitManifest {
  version: string;
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
    orchestrators: number;
    utilities: number;
  };
  templateCategories: string[];
  agents: Agent[];
  skills: Skill[];
  scaffolds: Scaffold[];
  agentTemplates: AgentTemplate[];
  changelog: ChangelogDay[];
}

// ============================================================================
// Transform Utilities
// ============================================================================

/**
 * Convert slug to display name (e.g., "aws-dev" -> "Aws Dev")
 */
function slugToName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Extract trigger phrases from skill description
 */
function extractTriggers(description: string): string[] {
  const triggerMatch = description.match(/Triggers on:\s*(.+?)\.?$/);
  if (triggerMatch) {
    return triggerMatch[1].split(',').map((t) => t.trim());
  }
  return [];
}

/**
 * Format date for display (e.g., "2026-02-21" -> "February 21, 2026")
 */
function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Map structure category to manifest category
 *
 * Category mappings:
 *   - primary → Primary (mode: 'primary', various categories based on agent function)
 *   - critics → Critics
 *   - implementation → Developers
 *   - testing → Testers
 *   - operational → Split into Orchestrators + Utilities
 *
 * Operational split logic:
 *   - Orchestrators: agents that coordinate other agents (qa, tester, critic, e2e-reviewer, prd-impact-analyzer, prd, felix)
 *   - Utilities: standalone tools (debugger, wall-e, session-status, docs-writer, screenshot-maintainer, tools-writer, support-article-writer)
 */

// Agents in the operational category that coordinate other agents
const ORCHESTRATOR_AGENTS = new Set([
  'qa',
  'tester',
  'critic',
  'e2e-reviewer',
  'prd-impact-analyzer',
  'prd',
  'felix',
]);

function mapCategory(
  structureCategory: string,
  agentSlug?: string
): 'critics' | 'developers' | 'testers' | 'orchestrators' | 'utilities' {
  // Agents with 'critic' in their slug are always critics regardless of structure category
  if (agentSlug && agentSlug.toLowerCase().includes('critic')) {
    return 'critics';
  }
  switch (structureCategory) {
    case 'primary':
      // Primary agents get categorized based on their function
      // For simplicity, we'll put them in 'developers' since they orchestrate development
      return 'developers';
    case 'critics':
      return 'critics';
    case 'implementation':
      return 'developers';
    case 'testing':
      return 'testers';
    case 'operational':
      // Split operational into orchestrators and utilities based on agent slug
      if (agentSlug && ORCHESTRATOR_AGENTS.has(agentSlug)) {
        return 'orchestrators';
      }
      return 'utilities';
    default:
      return 'utilities';
  }
}

/**
 * Determine if an agent is primary mode
 */
function isPrimaryAgent(structureCategory: string): boolean {
  return structureCategory === 'primary';
}

/**
 * Extract commit SHA from changelog (use the most recent commit's hash)
 */
function extractCommitSha(changelog: StructureChangelogDay[]): string {
  if (changelog.length > 0 && changelog[0].changes.length > 0) {
    return changelog[0].changes[0].hash || 'unknown';
  }
  return 'unknown';
}

// ============================================================================
// Transform Functions
// ============================================================================

/**
 * Transform agents from structure format to manifest format
 */
function transformAgents(structure: ToolkitStructure): Agent[] {
  const agents: Agent[] = [];

  for (const [categoryKey, category] of Object.entries(structure.agents.categories)) {
    for (const agent of category.agents) {
      agents.push({
        slug: agent.name,
        name: slugToName(agent.name),
        description: agent.description,
        mode: isPrimaryAgent(categoryKey) ? 'primary' : 'subagent',
        category: mapCategory(categoryKey, agent.name),
        // Content would need to be fetched separately if needed
        // For now, we use description as placeholder
        content: '',
      });
    }
  }

  return agents.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Transform skills from structure format to manifest format
 */
function transformSkills(structure: ToolkitStructure): Skill[] {
  const skills: Skill[] = [];

  for (const [categoryKey, category] of Object.entries(structure.skills.categories)) {
    const isMeta = categoryKey === 'meta';

    for (const skill of category.skills) {
      skills.push({
        slug: skill.name,
        name: slugToName(skill.name),
        description: skill.description,
        triggers: extractTriggers(skill.description),
        isMeta,
        content: '',
      });
    }
  }

  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Transform scaffolds from structure format to manifest format
 */
function transformScaffolds(structure: ToolkitStructure): Scaffold[] {
  return structure.scaffolds.items
    .map((scaffold) => ({
      slug: scaffold.name,
      name: slugToName(scaffold.name),
      description: scaffold.description,
      // Files would need to be fetched separately
      files: [],
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Transform agent templates from structure format to manifest format
 */
function transformAgentTemplates(structure: ToolkitStructure): AgentTemplate[] {
  const templates: AgentTemplate[] = [];

  const agentTemplates = structure.templates?.agentTemplates;
  if (!agentTemplates) {
    return templates;
  }

  for (const [categoryKey, categoryTemplates] of Object.entries(agentTemplates.categories)) {
    if (!Array.isArray(categoryTemplates)) continue;

    for (const template of categoryTemplates) {
      const slug = template.name.replace('.md', '');
      templates.push({
        slug,
        name: slugToName(slug),
        description: '',
        category: categoryKey,
        appliesTo: [],
        generates: '',
        content: '',
      });
    }
  }

  return templates.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Transform changelog from structure format to manifest format
 */
function transformChangelog(structure: ToolkitStructure): ChangelogDay[] {
  if (!structure.changelog?.entries) {
    return [];
  }

  return structure.changelog.entries.map((day) => ({
    date: day.date,
    displayDate: formatDate(day.date),
    changes: day.changes.map((change) => ({
      type: validateChangelogType(change.type),
      description: change.description,
      scope: change.scope,
    })),
  }));
}

/**
 * Get unique template categories
 */
function getTemplateCategories(templates: AgentTemplate[]): string[] {
  const categories = new Set(templates.map((t) => t.category));
  return Array.from(categories).sort();
}

// ============================================================================
// Main Transform Function
// ============================================================================

/**
 * Transform toolkit-structure.json to toolkit-manifest.json format
 */
function transformStructureToManifest(structure: ToolkitStructure): ToolkitManifest {
  const agents = transformAgents(structure);
  const skills = transformSkills(structure);
  const scaffolds = transformScaffolds(structure);
  const agentTemplates = transformAgentTemplates(structure);
  const changelog = transformChangelog(structure);

  // Calculate counts
  const primaryAgents = agents.filter((a) => a.mode === 'primary');
  const subagents = agents.filter((a) => a.mode === 'subagent');
  const metaSkills = skills.filter((s) => s.isMeta);

  // Calculate category counts
  const categories = {
    critics: agents.filter((a) => a.category === 'critics').length,
    developers: agents.filter((a) => a.category === 'developers').length,
    testers: agents.filter((a) => a.category === 'testers').length,
    orchestrators: agents.filter((a) => a.category === 'orchestrators').length,
    utilities: agents.filter((a) => a.category === 'utilities').length,
  };

  const now = new Date().toISOString();
  const toolkitCommit = extractCommitSha(structure.changelog?.entries || []);

  return {
    version: structure.version || '0.0.0',
    generatedAt: structure.generatedAt || now,
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
    templateCategories: getTemplateCategories(agentTemplates),
    agents,
    skills,
    scaffolds,
    agentTemplates,
    changelog,
  };
}

// ============================================================================
// Main
// ============================================================================

async function main(): Promise<void> {
  console.log('Transforming toolkit-structure.json to toolkit-manifest.json...\n');

  // Check if source file exists
  if (!fs.existsSync(STRUCTURE_PATH)) {
    console.error(`Error: Source file not found: ${STRUCTURE_PATH}`);
    console.error('\nRun the fetch script first:');
    console.error('  npx tsx scripts/fetch-toolkit-manifest.ts');
    process.exit(1);
  }

  // Read the structure file
  const structureContent = fs.readFileSync(STRUCTURE_PATH, 'utf-8');
  const parsed: unknown = JSON.parse(structureContent);

  // Validate required top-level fields exist
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    !('version' in parsed) ||
    !('generatedAt' in parsed) ||
    !('agents' in parsed) ||
    !('skills' in parsed) ||
    !('scaffolds' in parsed) ||
    !('templates' in parsed) ||
    !('changelog' in parsed)
  ) {
    console.error('Error: Malformed toolkit-structure.json');
    console.error('Missing required fields: version, generatedAt, agents, skills, scaffolds, templates, changelog');
    process.exit(1);
  }

  const structure = parsed as ToolkitStructure;

  console.log(`Source: ${STRUCTURE_PATH}`);
  console.log(`Version: ${structure.version}`);
  console.log(`Generated: ${structure.generatedAt}\n`);

  // Transform to manifest format
  const manifest = transformStructureToManifest(structure);

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the manifest
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));

  // Print summary
  console.log(`Output: ${OUTPUT_PATH}`);
  console.log(`  Agents: ${manifest.counts.agents} (${manifest.counts.primaryAgents} primary, ${manifest.counts.subagents} sub-agents)`);
  console.log(`  Skills: ${manifest.counts.skills} (${manifest.counts.metaSkills} meta-skills)`);
  console.log(`  Scaffolds: ${manifest.counts.scaffolds}`);
  console.log(`  Agent Templates: ${manifest.counts.agentTemplates}`);
  console.log(`  Changelog: ${manifest.changelog.length} days`);
  console.log(`  Categories: Critics ${manifest.categories.critics}, Developers ${manifest.categories.developers}, Testers ${manifest.categories.testers}, Orchestrators ${manifest.categories.orchestrators}, Utilities ${manifest.categories.utilities}`);
  console.log('\n✅ Transform complete');
}

main().catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});
