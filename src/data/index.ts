import type { ToolkitManifest, Skill, SkillCategory, ChangelogDay, ChangelogDayWithSource, ChangelogSource } from './types';
import manifestData from './toolkit-manifest.json';
import { websiteChangelog } from './website-changelog';

export const manifest = manifestData as ToolkitManifest;

/**
 * Merges toolkit and website changelogs into a single timeline,
 * sorted by date descending. Entries from the same day are combined.
 */
export function getCombinedChangelog(): ChangelogDayWithSource[] {
  const toolkitChangelog = manifest.changelog;
  
  // Create a map of date -> merged day
  const dayMap = new Map<string, ChangelogDayWithSource>();
  
  // Add toolkit entries
  toolkitChangelog.forEach((day: ChangelogDay) => {
    const existing = dayMap.get(day.date);
    const changesWithSource = day.changes.map(change => ({
      ...change,
      source: 'toolkit' as ChangelogSource,
    }));
    
    if (existing) {
      existing.changes.push(...changesWithSource);
    } else {
      dayMap.set(day.date, {
        date: day.date,
        displayDate: day.displayDate,
        changes: changesWithSource,
      });
    }
  });
  
  // Add website entries
  websiteChangelog.forEach((day: ChangelogDay) => {
    const existing = dayMap.get(day.date);
    const changesWithSource = day.changes.map(change => ({
      ...change,
      source: 'website' as ChangelogSource,
    }));
    
    if (existing) {
      existing.changes.push(...changesWithSource);
    } else {
      dayMap.set(day.date, {
        date: day.date,
        displayDate: day.displayDate,
        changes: changesWithSource,
      });
    }
  });
  
  // Sort by date descending
  const sortedDays = Array.from(dayMap.values()).sort((a, b) => 
    b.date.localeCompare(a.date)
  );
  
  return sortedDays;
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
