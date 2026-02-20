import type { ToolkitManifest } from './types';
import manifestData from './toolkit-manifest.json';

export const manifest = manifestData as ToolkitManifest;

export function getAgentsByCategory(category: 'critics' | 'developers' | 'testers' | 'other') {
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
