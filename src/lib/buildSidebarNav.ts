/**
 * Transforms toolkit-structure.json into sidebar navigation structure.
 * 
 * This utility generates navigation data at module load time (not runtime),
 * ensuring the sidebar stays in sync with the toolkit structure automatically.
 */

import toolkitStructure from '@/data/toolkit-structure.json';

// ============================================================================
// Types
// ============================================================================

export interface NavItem {
  slug: string;
  name: string;
  description?: string;
}

export interface SubCategory {
  name: string;
  items: NavItem[];
  count: number;
}

export interface TopCategory {
  id: string;
  name: string;
  href: string;
  subcategories: SubCategory[];
  totalCount: number;
}

export interface SidebarNavData {
  agents: TopCategory;
  skills: TopCategory;
  scaffolds: TopCategory;
  agentTemplates: TopCategory;
}

// ============================================================================
// Category Configurations
// ============================================================================

// Agent categories from toolkit-structure.json with display labels
const AGENT_CATEGORY_CONFIG: Record<string, { label: string; order: number }> = {
  primary: { label: 'Primary', order: 0 },
  implementation: { label: 'Implementation', order: 1 },
  testing: { label: 'Testing', order: 2 },
  critics: { label: 'Critics', order: 3 },
  operational: { label: 'Operational', order: 4 },
};

// Skill categories from toolkit-structure.json with display labels
const SKILL_CATEGORY_CONFIG: Record<string, { label: string; order: number }> = {
  workflow: { label: 'Workflow', order: 0 },
  content: { label: 'Content', order: 1 },
  project: { label: 'Project', order: 2 },
  meta: { label: 'Meta', order: 3 },
  utilities: { label: 'Utilities', order: 4 },
};

// Agent template categories with display labels
const TEMPLATE_CATEGORY_CONFIG: Record<string, { label: string; order: number }> = {
  backend: { label: 'Backend', order: 0 },
  frontend: { label: 'Frontend', order: 1 },
  styling: { label: 'Styling', order: 2 },
  testing: { label: 'Testing', order: 3 },
  critics: { label: 'Critics', order: 4 },
};

// ============================================================================
// Slug Utilities
// ============================================================================

/**
 * Converts a name to a URL slug.
 * e.g., "aws-dev" -> "aws-dev", "Builder" -> "builder"
 */
function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Converts a slug or filename to a display name.
 * e.g., "aws-dev" -> "Aws Dev", "go-chi-postgres" -> "Go Chi Postgres"
 */
function toDisplayName(name: string): string {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ============================================================================
// Agent Navigation Builder
// ============================================================================

function buildAgentNav(): TopCategory {
  const subcategories: SubCategory[] = [];
  const categories = toolkitStructure.agents.categories as Record<string, { description: string; agents: Array<{ name: string; file: string; description: string }> }>;
  
  // Process each category in defined order
  const sortedCategories = Object.entries(categories)
    .filter(([key]) => key in AGENT_CATEGORY_CONFIG)
    .sort(([a], [b]) => AGENT_CATEGORY_CONFIG[a].order - AGENT_CATEGORY_CONFIG[b].order);

  for (const [categoryKey, categoryData] of sortedCategories) {
    const config = AGENT_CATEGORY_CONFIG[categoryKey];
    
    const items: NavItem[] = categoryData.agents
      .map(agent => ({
        slug: toSlug(agent.name),
        name: toDisplayName(agent.name),
        description: agent.description,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    subcategories.push({
      name: config.label,
      items,
      count: items.length,
    });
  }

  return {
    id: 'agents',
    name: 'Agents',
    href: '/reference/agents',
    subcategories,
    totalCount: toolkitStructure.agents.total,
  };
}

// ============================================================================
// Skill Navigation Builder
// ============================================================================

function buildSkillNav(): TopCategory {
  const subcategories: SubCategory[] = [];
  const categories = toolkitStructure.skills.categories as Record<string, { description: string; skills: Array<{ name: string; path: string; description: string }> }>;
  
  // Process each category in defined order
  const sortedCategories = Object.entries(categories)
    .filter(([key]) => key in SKILL_CATEGORY_CONFIG)
    .sort(([a], [b]) => SKILL_CATEGORY_CONFIG[a].order - SKILL_CATEGORY_CONFIG[b].order);

  for (const [categoryKey, categoryData] of sortedCategories) {
    const config = SKILL_CATEGORY_CONFIG[categoryKey];
    
    const items: NavItem[] = categoryData.skills
      .map(skill => ({
        slug: toSlug(skill.name),
        name: toDisplayName(skill.name),
        description: skill.description,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    subcategories.push({
      name: config.label,
      items,
      count: items.length,
    });
  }

  return {
    id: 'skills',
    name: 'Skills',
    href: '/reference/skills',
    subcategories,
    totalCount: toolkitStructure.skills.total,
  };
}

// ============================================================================
// Scaffold Navigation Builder
// ============================================================================

function buildScaffoldNav(): TopCategory {
  const items: NavItem[] = toolkitStructure.scaffolds.items
    .map(scaffold => ({
      slug: toSlug(scaffold.name),
      name: toDisplayName(scaffold.name),
      description: (scaffold as { description?: string }).description,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Scaffolds are a flat list under a single "Templates" subcategory
  return {
    id: 'scaffolds',
    name: 'Scaffolds',
    href: '/reference/scaffolds',
    subcategories: [{
      name: 'Templates',
      items,
      count: items.length,
    }],
    totalCount: toolkitStructure.scaffolds.total,
  };
}

// ============================================================================
// Agent Templates Navigation Builder
// ============================================================================

function buildAgentTemplateNav(): TopCategory {
  const subcategories: SubCategory[] = [];
  const templateCategories = toolkitStructure.templates.agentTemplates.categories as Record<string, Array<{ name: string; file: string; description: string }>>;
  
  // Process each category in defined order, then any remaining alphabetically
  const knownCategories = Object.entries(templateCategories)
    .filter(([key]) => key in TEMPLATE_CATEGORY_CONFIG)
    .sort(([a], [b]) => TEMPLATE_CATEGORY_CONFIG[a].order - TEMPLATE_CATEGORY_CONFIG[b].order);

  const unknownCategories = Object.entries(templateCategories)
    .filter(([key]) => !(key in TEMPLATE_CATEGORY_CONFIG))
    .sort(([a], [b]) => a.localeCompare(b));

  const allCategories = [...knownCategories, ...unknownCategories];

  let totalCount = 0;

  for (const [categoryKey, templates] of allCategories) {
    const config = TEMPLATE_CATEGORY_CONFIG[categoryKey] || { label: toDisplayName(categoryKey) };
    
    const items: NavItem[] = templates
      .map(template => ({
        slug: toSlug(template.name),
        name: toDisplayName(template.name),
        description: template.description,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    totalCount += items.length;

    subcategories.push({
      name: typeof config === 'object' ? config.label : config,
      items,
      count: items.length,
    });
  }

  return {
    id: 'agent-templates',
    name: 'Agent Templates',
    href: '/reference/agent-templates',
    subcategories,
    totalCount,
  };
}

// ============================================================================
// Main Export
// ============================================================================

/**
 * Builds complete sidebar navigation data from toolkit-structure.json.
 * 
 * This is executed at module load time, ensuring:
 * - Navigation regenerates on each build (not runtime)
 * - Sidebar stays in sync with toolkit structure automatically
 * - Type-safe navigation data with counts at each level
 */
export function buildSidebarNav(): SidebarNavData {
  return {
    agents: buildAgentNav(),
    skills: buildSkillNav(),
    scaffolds: buildScaffoldNav(),
    agentTemplates: buildAgentTemplateNav(),
  };
}

/**
 * Pre-built navigation data.
 * Generated at module load time for optimal performance.
 */
export const sidebarNavData = buildSidebarNav();

/**
 * Returns navigation as an array of TopCategory for iteration.
 * Includes icon mappings that must be provided by the consumer.
 */
export function getSidebarCategories(): TopCategory[] {
  return [
    sidebarNavData.agents,
    sidebarNavData.skills,
    sidebarNavData.scaffolds,
    sidebarNavData.agentTemplates,
  ];
}
