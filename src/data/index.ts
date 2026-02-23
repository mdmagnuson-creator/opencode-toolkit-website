import type { ToolkitManifest, Skill, SkillCategory, ChangelogDay, ChangelogDayWithSource, ChangelogSource } from './types';
import manifestData from './toolkit-manifest.json';

export const manifest = manifestData as ToolkitManifest;

/**
 * BASELINE CHANGELOG FUNCTION (build-time only)
 * 
 * Converts baseline toolkit changelog (from manifest) to source-tagged format.
 * Used for SSR/static rendering as initial state before runtime fetch.
 * 
 * NOTE: This does NOT include website entries. Website entries are now fetched
 * at runtime from GitHub API alongside toolkit entries.
 * 
 * @returns Baseline changelog with toolkit source tags
 */
export function getCombinedChangelog(): ChangelogDayWithSource[] {
  return manifest.changelog.map((day: ChangelogDay) => ({
    date: day.date,
    displayDate: day.displayDate,
    changes: day.changes.map(change => ({
      ...change,
      source: 'toolkit' as ChangelogSource,
    })),
  }));
}

/**
 * Legacy merge function - kept for compatibility but simplified.
 * 
 * Since runtime fetcher now returns ChangelogDayWithSource[] directly with
 * both toolkit and website entries pre-merged, this function is only used
 * as a pass-through for type compatibility in consumers.
 * 
 * @param changelog - Already source-tagged changelog from runtime fetcher
 * @returns Same changelog (already has source tags from fetcher)
 */
export function mergeChangelogs(changelog: ChangelogDay[]): ChangelogDayWithSource[] {
  // The runtime fetcher now returns data with source tags already applied.
  // This function is kept for backwards compatibility with consumers that
  // expect to call mergeChangelogs(result.data).
  // 
  // If the input already has source tags, pass through as-is.
  // If not (legacy baseline data), tag as toolkit.
  return changelog.map((day: ChangelogDay) => ({
    date: day.date,
    displayDate: day.displayDate,
    changes: day.changes.map(change => ({
      ...change,
      // Use existing source if present, otherwise default to toolkit
      source: ('source' in change ? (change as { source: ChangelogSource }).source : 'toolkit') as ChangelogSource,
    })),
  }));
}

/**
 * Get baseline toolkit changelog (build-time data).
 * Used as fallback when runtime fetch is unavailable.
 */
export function getBaselineToolkitChangelog(): ChangelogDay[] {
  return manifest.changelog;
}

export function getAgentsByCategory(category: 'critics' | 'developers' | 'testers' | 'orchestrators' | 'utilities') {
  return manifest.agents.filter(a => a.category === category);
}

export function getPrimaryAgents() {
  return manifest.agents.filter(a => a.mode === 'primary');
}

export function getSubagents() {
  return manifest.agents.filter(a => a.mode === 'subagent');
}

export function getRegularSkills() {
  return manifest.skills.filter(s => !s.isMeta);
}

export function getMetaSkills() {
  return manifest.skills.filter(s => s.isMeta);
}

/**
 * Derives the category for a skill based on its properties.
 * Categories: workflow, content, project, meta, utilities
 */
export function getSkillCategory(skill: Skill): SkillCategory {
  // If skill has explicit category, use it
  if (skill.category) {
    return skill.category;
  }

  // Meta-skills go in meta category
  if (skill.isMeta) {
    return 'meta';
  }

  const slug = skill.slug.toLowerCase();
  const desc = skill.description.toLowerCase();

  // Workflow skills
  if (
    slug.includes('workflow') ||
    slug.includes('prd') ||
    slug === 'builder-state' ||
    slug === 'multi-session' ||
    slug === 'test-flow' ||
    slug === 'merge-conflicts' ||
    slug === 'post-completion' ||
    slug === 'e2e-quality'
  ) {
    return 'workflow';
  }

  // Content skills
  if (
    slug.includes('copy') ||
    slug.includes('marketing') ||
    slug === 'public-page' ||
    desc.includes('marketing') ||
    desc.includes('documentation')
  ) {
    return 'content';
  }

  // Project skills
  if (
    slug.includes('project') ||
    slug.includes('bootstrap') ||
    slug.includes('scaffold') ||
    slug === 'agent-audit' ||
    slug === 'agent-onboard' ||
    slug === 'stack-advisor' ||
    slug === 'spec-analyzer'
  ) {
    return 'project';
  }

  // Utilities (default for remaining skills)
  return 'utilities';
}

/**
 * Gets skills grouped by category with counts
 */
export function getSkillsByCategory(): Record<SkillCategory, Skill[]> {
  const groups: Record<SkillCategory, Skill[]> = {
    workflow: [],
    content: [],
    project: [],
    meta: [],
    utilities: [],
  };

  manifest.skills.forEach((skill) => {
    const category = getSkillCategory(skill);
    groups[category].push(skill);
  });

  // Sort each group alphabetically
  Object.values(groups).forEach((group) => {
    group.sort((a, b) => a.name.localeCompare(b.name));
  });

  return groups;
}

/**
 * Gets skill category counts
 */
export function getSkillCategoryCounts(): Record<SkillCategory, number> {
  const groups = getSkillsByCategory();
  return {
    workflow: groups.workflow.length,
    content: groups.content.length,
    project: groups.project.length,
    meta: groups.meta.length,
    utilities: groups.utilities.length,
  };
}
