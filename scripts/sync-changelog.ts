#!/usr/bin/env npx tsx
/**
 * Build-time changelog sync script
 * 
 * Fetches recent commits from both repositories at build time:
 * - Toolkit repo (public): no authentication needed
 * - Website repo (private): requires GITHUB_TOKEN
 * 
 * Outputs combined changelog to src/data/changelog.json for static consumption.
 * 
 * Environment variables:
 * - GITHUB_TOKEN: Optional. Required for private website repo access.
 *   - In GitHub Actions: automatically available as secrets.GITHUB_TOKEN
 *   - Locally: export GITHUB_TOKEN=ghp_... or run without (website commits skipped)
 * 
 * Usage:
 *   npx tsx scripts/sync-changelog.ts
 *   GITHUB_TOKEN=ghp_xxx npx tsx scripts/sync-changelog.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// ============================================================================
// Configuration
// ============================================================================

const TOOLKIT_REPO_OWNER = 'mdmagnuson-creator';
const TOOLKIT_REPO_NAME = 'yo-go';
const WEBSITE_REPO_OWNER = 'mdmagnuson-creator';
const WEBSITE_REPO_NAME = 'opencode-toolkit-website';

const GITHUB_API_BASE = 'https://api.github.com';
const TOOLKIT_COMMITS_URL = `${GITHUB_API_BASE}/repos/${TOOLKIT_REPO_OWNER}/${TOOLKIT_REPO_NAME}/commits`;
const WEBSITE_COMMITS_URL = `${GITHUB_API_BASE}/repos/${WEBSITE_REPO_OWNER}/${WEBSITE_REPO_NAME}/commits`;

// How many days of commits to fetch
const COMMITS_WINDOW_DAYS = 30;

// Output path
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/changelog.json');

// ============================================================================
// Types
// ============================================================================

type ChangelogSource = 'toolkit' | 'website';

type ChangelogEntryType = 'feat' | 'fix' | 'chore' | 'docs' | 'refactor' | 'test' | 'style' | 'perf' | 'ci' | 'build';

interface ChangelogEntry {
  type: ChangelogEntryType;
  description: string;
  scope?: string;
  source: ChangelogSource;
  hash?: string;
}

interface ChangelogDay {
  date: string;
  displayDate: string;
  changes: ChangelogEntry[];
}

interface ChangelogOutput {
  generatedAt: string;
  sources: {
    toolkit: {
      fetched: boolean;
      commitCount: number;
      error?: string;
    };
    website: {
      fetched: boolean;
      commitCount: number;
      error?: string;
      tokenAvailable: boolean;
    };
  };
  changelog: ChangelogDay[];
}

interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
}

// ============================================================================
// Conventional Commit Parser
// ============================================================================

const VALID_CHANGELOG_TYPES = new Set<ChangelogEntryType>([
  'feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'style', 'perf', 'ci', 'build'
]);

function parseConventionalCommit(message: string): { type: string; scope?: string; description: string } | null {
  // Match: type(scope)!?: description OR type!?: description
  const match = message.match(/^(\w+)(?:\(([\w\-]+)\))?!?:\s*(.+)$/);
  
  if (!match) {
    return null;
  }
  
  const [, type, scope, description] = match;
  
  if (!VALID_CHANGELOG_TYPES.has(type.toLowerCase() as ChangelogEntryType)) {
    return null;
  }
  
  return {
    type: type.toLowerCase(),
    ...(scope ? { scope } : {}),
    description: description.trim(),
  };
}

// ============================================================================
// Date Utilities
// ============================================================================

function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// ============================================================================
// GitHub API Fetcher
// ============================================================================

interface CommitWithDate extends ChangelogEntry {
  date: string;
}

async function fetchCommitsWithDates(
  url: string,
  source: ChangelogSource,
  token?: string
): Promise<{ success: boolean; commits: CommitWithDate[]; error?: string }> {
  const sinceDate = new Date();
  sinceDate.setDate(sinceDate.getDate() - COMMITS_WINDOW_DAYS);
  
  const params = new URLSearchParams({
    since: sinceDate.toISOString(),
    per_page: '100',
  });
  
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'opencode-toolkit-website-build',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  try {
    console.log(`  Fetching ${source} commits...`);
    
    const response = await fetch(`${url}?${params.toString()}`, { headers });
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      return {
        success: false,
        commits: [],
        error: `HTTP ${response.status}: ${response.statusText}${errorText ? ` - ${errorText.slice(0, 100)}` : ''}`,
      };
    }
    
    const data = await response.json() as unknown;
    
    if (!Array.isArray(data)) {
      return {
        success: false,
        commits: [],
        error: 'Invalid response format: expected array',
      };
    }
    
    const commits: CommitWithDate[] = [];
    
    for (const item of data) {
      const commit = item as GitHubCommit;
      const message = commit.commit?.message;
      if (!message) continue;
      
      const title = message.split('\n')[0];
      const parsed = parseConventionalCommit(title);
      
      if (!parsed) continue;
      
      const commitDate = commit.commit?.author?.date;
      if (!commitDate) continue;
      
      const dateStr = getLocalDateString(new Date(commitDate));
      
      commits.push({
        type: parsed.type as ChangelogEntryType,
        description: parsed.description,
        source,
        date: dateStr,
        ...(parsed.scope ? { scope: parsed.scope } : {}),
        hash: commit.sha?.substring(0, 7),
      });
    }
    
    console.log(`  ✓ Found ${commits.length} conventional commits from ${source}`);
    
    return {
      success: true,
      commits,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      commits: [],
      error: errorMessage,
    };
  }
}

function mergeCommitsWithDates(
  toolkitCommits: CommitWithDate[],
  websiteCommits: CommitWithDate[],
  baselineChangelog: ChangelogDay[]
): ChangelogDay[] {
  const seen = new Set<string>();
  const dayMap = new Map<string, ChangelogEntry[]>();
  
  const addEntry = (dateStr: string, entry: ChangelogEntry, hash?: string) => {
    const fingerprint = hash 
      ? `${entry.source}|${hash}`
      : `${entry.source}|${dateStr}|${entry.type}|${entry.description.toLowerCase()}`;
    
    if (seen.has(fingerprint)) return;
    seen.add(fingerprint);
    
    // Entry is already clean (no hash in output)
    const existing = dayMap.get(dateStr);
    if (existing) {
      existing.push(entry);
    } else {
      dayMap.set(dateStr, [entry]);
    }
  };
  
  // Add API commits (most recent)
  for (const commit of toolkitCommits) {
    addEntry(commit.date, {
      type: commit.type,
      description: commit.description,
      source: commit.source,
      ...(commit.scope ? { scope: commit.scope } : {}),
    }, commit.hash);
  }
  
  for (const commit of websiteCommits) {
    addEntry(commit.date, {
      type: commit.type,
      description: commit.description,
      source: commit.source,
      ...(commit.scope ? { scope: commit.scope } : {}),
    }, commit.hash);
  }
  
  // Add baseline changelog entries (toolkit only, from manifest)
  for (const day of baselineChangelog) {
    for (const change of day.changes) {
      addEntry(day.date, {
        ...change,
        source: 'toolkit',
      });
    }
  }
  
  // Sort each day's changes by type priority (feat > fix > refactor > docs > others)
  // This intersperses toolkit and website entries instead of grouping by source
  const typePriority: Record<ChangelogEntryType, number> = {
    feat: 0,
    fix: 1,
    refactor: 2,
    perf: 3,
    docs: 4,
    test: 5,
    style: 6,
    build: 7,
    ci: 8,
    chore: 9,
  };
  
  for (const [, changes] of dayMap.entries()) {
    changes.sort((a, b) => {
      // Primary sort: by type priority
      const typeDiff = typePriority[a.type] - typePriority[b.type];
      if (typeDiff !== 0) return typeDiff;
      // Secondary sort: alphabetically by description for stability
      return a.description.localeCompare(b.description);
    });
  }
  
  // Convert to sorted array (days sorted by date descending)
  const result: ChangelogDay[] = Array.from(dayMap.entries())
    .map(([date, changes]) => ({
      date,
      displayDate: formatDisplayDate(date),
      changes,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
  
  return result;
}

// ============================================================================
// Main
// ============================================================================

async function main(): Promise<void> {
  console.log('🔄 Syncing changelog from GitHub...\n');
  
  const token = process.env.GITHUB_TOKEN;
  const tokenAvailable = !!token;
  
  console.log(`GitHub token: ${tokenAvailable ? 'available ✓' : 'not set (website commits will be skipped)'}`);
  console.log(`Fetching commits from last ${COMMITS_WINDOW_DAYS} days\n`);
  
  // Fetch toolkit commits (public repo, no token needed but can use it for higher rate limits)
  const toolkitResult = await fetchCommitsWithDates(TOOLKIT_COMMITS_URL, 'toolkit', token);
  
  // Fetch website commits (private repo, requires token)
  let websiteResult: { success: boolean; commits: CommitWithDate[]; error?: string };
  if (tokenAvailable) {
    websiteResult = await fetchCommitsWithDates(WEBSITE_COMMITS_URL, 'website', token);
  } else {
    websiteResult = {
      success: false,
      commits: [],
      error: 'GITHUB_TOKEN not set - website commits skipped',
    };
    console.log('  ⚠ Website commits skipped (no token)');
  }
  
  // Load baseline changelog from toolkit-manifest.json if it exists
  let baselineChangelog: ChangelogDay[] = [];
  const manifestPath = path.join(process.cwd(), 'src/data/toolkit-manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      baselineChangelog = manifest.changelog || [];
      console.log(`\n  ✓ Loaded ${baselineChangelog.length} days from baseline manifest`);
    } catch (err) {
      console.warn(`  ⚠ Could not load baseline manifest: ${err}`);
    }
  }
  
  // Merge all sources
  const changelog = mergeCommitsWithDates(
    toolkitResult.commits,
    websiteResult.commits,
    baselineChangelog
  );
  
  // Build output
  const output: ChangelogOutput = {
    generatedAt: new Date().toISOString(),
    sources: {
      toolkit: {
        fetched: toolkitResult.success,
        commitCount: toolkitResult.commits.length,
        ...(toolkitResult.error ? { error: toolkitResult.error } : {}),
      },
      website: {
        fetched: websiteResult.success,
        commitCount: websiteResult.commits.length,
        tokenAvailable,
        ...(websiteResult.error ? { error: websiteResult.error } : {}),
      },
    },
    changelog,
  };
  
  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write output
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  
  // Summary
  const totalChanges = changelog.reduce((sum, day) => sum + day.changes.length, 0);
  const toolkitChanges = changelog.reduce(
    (sum, day) => sum + day.changes.filter(c => c.source === 'toolkit').length,
    0
  );
  const websiteChanges = changelog.reduce(
    (sum, day) => sum + day.changes.filter(c => c.source === 'website').length,
    0
  );
  
  console.log('\n📊 Summary:');
  console.log(`  Output: ${OUTPUT_PATH}`);
  console.log(`  Days: ${changelog.length}`);
  console.log(`  Total changes: ${totalChanges}`);
  console.log(`    Toolkit: ${toolkitChanges}`);
  console.log(`    Website: ${websiteChanges}`);
  console.log('\n✅ Changelog sync complete');
}

main().catch((error) => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
