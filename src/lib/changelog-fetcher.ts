/**
 * Runtime changelog fetcher for hybrid changelog system
 * 
 * HYBRID ARCHITECTURE CONTRACT:
 * 
 * Build-time Sources (primary, from scripts/sync-changelog.ts):
 *   - changelog.json → combined toolkit + website commits
 *   - Generated during CI with GITHUB_TOKEN for private repo access
 *   - Website commits are ALWAYS available in build-time data
 * 
 * Runtime Sources (enhancement for real-time updates):
 *   - GitHub raw URL for toolkit-structure.json → changelog entries
 *   - GitHub API for toolkit repo commits (recent, public)
 *   - GitHub API for website repo commits (optional, usually 404 for private repo)
 * 
 * Precedence Rules:
 *   1. Build-time changelog.json is the baseline (includes website commits)
 *   2. Runtime fetch enhances with commits since last build
 *   3. If runtime fetch fails → use build-time data (already complete)
 *   4. If cache exists → use cached data
 * 
 * Website Commits:
 *   - Primary source: Build-time changelog.json (authenticated at build)
 *   - Runtime fetch: Optional enhancement (usually fails for private repo - expected)
 * 
 * TTL: 15 minutes (900000ms) default
 */

import type { ChangelogEntry, ChangelogEntryType, ChangelogSource } from '@/data/types';
import { REPO_RAW_BASE, REPO_OWNER, REPO_NAME, WEBSITE_REPO_OWNER, WEBSITE_REPO_NAME } from '@/config/urls';

// ============================================================================
// Configuration
// ============================================================================

const TOOLKIT_CHANGELOG_URL = `${REPO_RAW_BASE}/toolkit-structure.json`;
const GITHUB_TOOLKIT_COMMITS_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits`;
const GITHUB_WEBSITE_COMMITS_API_URL = `https://api.github.com/repos/${WEBSITE_REPO_OWNER}/${WEBSITE_REPO_NAME}/commits`;

const CACHE_KEY = 'toolkit-changelog-cache';
const DEFAULT_TTL_MS = 15 * 60 * 1000; // 15 minutes

// How many days of recent commits to fetch from GitHub API
const RECENT_COMMITS_WINDOW_DAYS = 7;

// ============================================================================
// Types
// ============================================================================

export type FetchOutcome = 'success' | 'stale-cache' | 'fallback' | 'failure';

export interface CachedChangelog {
  timestamp: number;
  data: ChangelogDayWithSource[];
}

export interface FetchResult {
  outcome: FetchOutcome;
  data: ChangelogDayWithSource[] | null;
  cachedAt?: number;
  error?: string;
}

interface ToolkitStructureChangelog {
  changelog?: {
    generatedFrom?: string;
    entries?: Array<{
      date: string;
      changes: Array<{
        type: string;
        description: string;
        scope?: string;
        hash?: string;
      }>;
    }>;
  };
}

// GitHub API commit response types
interface GitHubCommitAuthor {
  name: string;
  email: string;
  date: string;
}

interface GitHubCommit {
  sha: string;
  commit: {
    author: GitHubCommitAuthor;
    committer: GitHubCommitAuthor;
    message: string;
  };
}

// Internal type for changelog entries with hash for deduplication
interface ChangelogEntryWithHash extends ChangelogEntry {
  hash?: string;
  source?: ChangelogSource;
}

interface ChangelogDayWithHash {
  date: string;
  displayDate: string;
  changes: ChangelogEntryWithHash[];
}

// Re-export from types for consumers - entries WITH source tagging
export interface ChangelogEntryWithSource extends ChangelogEntry {
  source: ChangelogSource;
}

export interface ChangelogDayWithSource {
  date: string;
  displayDate: string;
  changes: ChangelogEntryWithSource[];
}

// ============================================================================
// Validation & Normalization (US-002)
// ============================================================================

const VALID_CHANGELOG_TYPES = new Set<ChangelogEntryType>([
  'feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'style', 'perf', 'ci', 'build'
]);

function validateChangelogType(type: string): ChangelogEntryType {
  return VALID_CHANGELOG_TYPES.has(type as ChangelogEntryType)
    ? (type as ChangelogEntryType)
    : 'chore';
}

/**
 * Convert a Date to a local YYYY-MM-DD string.
 * Used for grouping commits by the viewer's local day.
 */
function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Format display date for server-side rendering.
 * Uses a neutral format that works for SSR. Client will re-format with locale.
 */
function formatDisplayDate(dateStr: string): string {
  try {
    // Parse as local date (YYYY-MM-DD treated as local midnight)
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

/**
 * Normalize changelog to include hashes for deduplication
 */
function normalizeChangelogWithHashes(raw: ToolkitStructureChangelog, source: ChangelogSource): ChangelogDayWithHash[] {
  const entries = raw?.changelog?.entries;
  
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries
    .filter((day): day is NonNullable<typeof day> => 
      day !== null && 
      typeof day === 'object' && 
      typeof day.date === 'string' &&
      Array.isArray(day.changes)
    )
    .map((day) => ({
      date: day.date,
      displayDate: formatDisplayDate(day.date),
      changes: day.changes
        .filter((c): c is NonNullable<typeof c> => 
          c !== null && 
          typeof c === 'object' && 
          typeof c.description === 'string'
        )
        .map((change) => ({
          type: validateChangelogType(change.type || 'chore'),
          description: change.description,
          source,
          ...(change.scope ? { scope: change.scope } : {}),
          ...(change.hash ? { hash: change.hash } : {}),
        })),
    }))
    .filter((day) => day.changes.length > 0);
}

// ============================================================================
// Conventional Commit Parser
// ============================================================================

/**
 * Parse a conventional commit message into type, scope, and description.
 * 
 * Formats supported:
 * - "type(scope): description" → { type, scope, description }
 * - "type: description" → { type, description }
 * - "type(scope)!: description" → { type, scope, description } (breaking change marker stripped)
 * - Anything else → null
 */
export function parseConventionalCommit(message: string): { type: string; scope?: string; description: string } | null {
  // Match: type(scope)!?: description OR type!?: description
  // Conventional commit regex: ^(\w+)(\([\w\-]+\))?!?:\s*(.+)$
  const match = message.match(/^(\w+)(?:\(([\w\-]+)\))?!?:\s*(.+)$/);
  
  if (!match) {
    return null;
  }
  
  const [, type, scope, description] = match;
  
  // Check if this is a valid changelog type
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
// GitHub Commits Fetcher
// ============================================================================

/**
 * Fetch recent commits from GitHub API (public, unauthenticated).
 * Returns commits from the last N days.
 * 
 * Note: Unauthenticated requests are rate-limited to 60/hour per IP.
 * This is acceptable for browser-side fetching with caching.
 * 
 * Used for toolkit repo (public).
 */
async function fetchRecentToolkitCommits(): Promise<ChangelogDayWithHash[]> {
  const sinceDate = new Date();
  sinceDate.setDate(sinceDate.getDate() - RECENT_COMMITS_WINDOW_DAYS);
  
  const params = new URLSearchParams({
    since: sinceDate.toISOString(),
    per_page: '100', // Max allowed
  });
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout (faster than main fetch)
  
  try {
    const response = await fetch(`${GITHUB_TOOLKIT_COMMITS_API_URL}?${params.toString()}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      // 403 could be rate limit, 404 could be repo not found
      logOutcome('stale-cache', `GitHub API (toolkit) returned ${response.status}, skipping recent commits`);
      return [];
    }
    
    const commits = await response.json() as GitHubCommit[];
    
    if (!Array.isArray(commits)) {
      return [];
    }
    
    return processGitHubCommits(commits, 'toolkit');
  } catch (error) {
    clearTimeout(timeoutId);
    const errorMessage = error instanceof Error ? error.message : String(error);
    logOutcome('stale-cache', `GitHub API (toolkit) fetch failed: ${errorMessage}`);
    return [];
  }
}

/**
 * Fetch recent website commits directly from GitHub API (public, unauthenticated).
 * Returns commits from the last N days.
 * 
 * IMPORTANT: This is an OPTIONAL enhancement. Website commits are primarily
 * available from build-time changelog.json (fetched with GITHUB_TOKEN in CI).
 * 
 * For private repos, this will return 404 - that's expected behavior.
 * The build-time data already contains website commits.
 * 
 * Graceful degradation:
 * - 404: Repo is private - returns empty (expected, build-time data has commits)
 * - 403: Rate limited - returns empty (partial success allowed)
 * - Other errors: Returns empty (partial success allowed)
 */
async function fetchRecentWebsiteCommits(): Promise<ChangelogDayWithHash[]> {
  const sinceDate = new Date();
  sinceDate.setDate(sinceDate.getDate() - RECENT_COMMITS_WINDOW_DAYS);
  
  const params = new URLSearchParams({
    since: sinceDate.toISOString(),
    per_page: '100', // Max allowed
  });
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout (faster than main fetch)
  
  try {
    const response = await fetch(`${GITHUB_WEBSITE_COMMITS_API_URL}?${params.toString()}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      // 403 could be rate limit, 404 could be repo not found or private
      if (response.status === 404) {
        logOutcome('stale-cache', 'Website commits: repo not found or private, skipping');
      } else if (response.status === 403) {
        logOutcome('stale-cache', 'Website commits: rate limited, skipping');
      } else {
        logOutcome('stale-cache', `GitHub API (website) returned ${response.status}, skipping`);
      }
      return [];
    }
    
    const commits = await response.json() as GitHubCommit[];
    
    if (!Array.isArray(commits)) {
      return [];
    }
    
    return processGitHubCommits(commits, 'website');
  } catch (error) {
    clearTimeout(timeoutId);
    const errorMessage = error instanceof Error ? error.message : String(error);
    logOutcome('stale-cache', `GitHub API (website) fetch failed: ${errorMessage}`);
    return [];
  }
}

/**
 * Process GitHub commits into changelog format.
 * Shared by toolkit and website commit fetchers.
 */
function processGitHubCommits(commits: GitHubCommit[], source: ChangelogSource): ChangelogDayWithHash[] {
  const dayMap = new Map<string, ChangelogDayWithHash>();
  
  for (const commit of commits) {
    const message = commit.commit?.message;
    if (!message) continue;
    
    // Only parse first line (title)
    const title = message.split('\n')[0];
    const parsed = parseConventionalCommit(title);
    
    if (!parsed) {
      // Not a conventional commit, skip
      continue;
    }
    
    // Get date from commit (use author date, not committer date)
    const commitDate = commit.commit?.author?.date;
    if (!commitDate) continue;
    
    // Convert to local date string (YYYY-MM-DD in viewer's timezone)
    // This ensures commits group by the day as seen by the user
    const dateStr = getLocalDateString(new Date(commitDate));
    
    const entry: ChangelogEntryWithHash = {
      type: validateChangelogType(parsed.type),
      description: parsed.description,
      source,
      ...(parsed.scope ? { scope: parsed.scope } : {}),
      hash: commit.sha?.substring(0, 7), // Short hash for deduplication
    };
    
    const existing = dayMap.get(dateStr);
    if (existing) {
      existing.changes.push(entry);
    } else {
      dayMap.set(dateStr, {
        date: dateStr,
        displayDate: formatDisplayDate(dateStr),
        changes: [entry],
      });
    }
  }
  
  // Sort by date descending
  return Array.from(dayMap.values()).sort((a, b) => b.date.localeCompare(a.date));
}

// ============================================================================
// Merge & Deduplicate
// ============================================================================

/**
 * Create a source-scoped fingerprint for deduplication.
 * Fingerprint includes source to avoid accidentally deduping across sources.
 */
function createFingerprint(source: ChangelogSource, date: string, type: string, description: string): string {
  return `${source}|${date}|${type}|${description.toLowerCase().trim()}`;
}

/**
 * Create a source-scoped hash key for deduplication.
 */
function createHashKey(source: ChangelogSource, hash: string): string {
  return `${source}|${hash}`;
}

/**
 * Merge multiple changelog sources with deduplication.
 * Deduplication is ONLY done within same source (toolkit vs toolkit, website vs website).
 * Same description from different sources is kept (not deduped across sources).
 */
function mergeAndDedupeChangelogs(
  ...sources: ChangelogDayWithHash[][]
): ChangelogDayWithSource[] {
  // Track known hashes BY SOURCE to avoid deduping across sources
  const knownHashes = new Set<string>();
  
  // Track fingerprints BY SOURCE for entries without hashes
  const knownFingerprints = new Set<string>();
  
  // Merge into a single day map
  const dayMap = new Map<string, ChangelogDayWithSource>();
  
  for (const sourceData of sources) {
    for (const day of sourceData) {
      for (const change of day.changes) {
        const source = change.source || 'toolkit';
        
        // Check for duplicate by hash (within same source)
        if (change.hash) {
          const hashKey = createHashKey(source, change.hash);
          if (knownHashes.has(hashKey)) {
            continue;
          }
          knownHashes.add(hashKey);
        }
        
        // Check for duplicate by fingerprint (within same source)
        const fingerprint = createFingerprint(source, day.date, change.type, change.description);
        if (knownFingerprints.has(fingerprint)) {
          continue;
        }
        knownFingerprints.add(fingerprint);
        
        // Create entry without hash for output
        const entry: ChangelogEntryWithSource = {
          type: change.type,
          description: change.description,
          source,
          ...(change.scope ? { scope: change.scope } : {}),
        };
        
        const existing = dayMap.get(day.date);
        if (existing) {
          existing.changes.push(entry);
        } else {
          dayMap.set(day.date, {
            date: day.date,
            displayDate: formatDisplayDate(day.date),
            changes: [entry],
          });
        }
      }
    }
  }
  
  // Sort by date descending
  return Array.from(dayMap.values())
    .sort((a, b) => b.date.localeCompare(a.date));
}

// ============================================================================
// Cache Operations (US-005)
// ============================================================================

function getCache(): CachedChangelog | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const parsed = JSON.parse(cached) as CachedChangelog;
    
    // Validate cache structure
    if (
      typeof parsed.timestamp !== 'number' ||
      !Array.isArray(parsed.data)
    ) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    
    return parsed;
  } catch {
    // Invalid cache, clear it
    try {
      localStorage.removeItem(CACHE_KEY);
    } catch {
      // Ignore storage errors
    }
    return null;
  }
}

function setCache(data: ChangelogDayWithSource[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    const cache: CachedChangelog = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Ignore storage errors (quota exceeded, etc.)
  }
}

function isCacheValid(cache: CachedChangelog, ttlMs: number = DEFAULT_TTL_MS): boolean {
  return Date.now() - cache.timestamp < ttlMs;
}

export function clearCache(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch {
    // Ignore storage errors
  }
}

// ============================================================================
// Runtime Fetcher (US-002)
// ============================================================================

export async function fetchToolkitChangelog(
  options: { forceRefresh?: boolean; ttlMs?: number } = {}
): Promise<FetchResult> {
  const { forceRefresh = false, ttlMs = DEFAULT_TTL_MS } = options;
  
  // Get existing cache for potential fallback use
  const existingCache = getCache();
  
  // Network-first strategy: Always attempt fetch to get latest commits.
  // Cache is used as fallback on network failure, not as a short-circuit.
  // The forceRefresh flag now only affects logging (cache is never used to skip fetch).
  if (forceRefresh) {
    logOutcome('success', 'Force refresh requested - fetching from network');
  }
  
  // Attempt runtime fetch
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
    
    // Fetch all sources in parallel:
    // 1. toolkit-structure.json (baseline changelog)
    // 2. Recent commits from toolkit repo (direct GitHub API - public repo)
    // 3. Recent commits from website repo (via internal API route - supports private repo)
    const [structureResponse, toolkitRecentCommits, websiteRecentCommits] = await Promise.all([
      fetch(TOOLKIT_CHANGELOG_URL, {
        signal: controller.signal,
        cache: 'no-store', // Always fetch fresh from network
      }),
      fetchRecentToolkitCommits(),
      fetchRecentWebsiteCommits(),
    ]);
    
    clearTimeout(timeoutId);
    
    // Handle toolkit structure response
    let structureChangelog: ChangelogDayWithHash[] = [];
    let structureFailed = false;
    
    if (!structureResponse.ok) {
      if (structureResponse.status === 404) {
        // HTTP 404 is a permanent error - resource doesn't exist
        logOutcome('stale-cache', 'toolkit-structure.json not found (404), using commits only');
        structureFailed = true;
      } else {
        throw new Error(`HTTP ${structureResponse.status}: ${structureResponse.statusText}`);
      }
    } else {
      const raw = await structureResponse.json() as ToolkitStructureChangelog;
      structureChangelog = normalizeChangelogWithHashes(raw, 'toolkit');
    }
    
    // Determine if we have any usable data
    const hasToolkitData = structureChangelog.length > 0 || toolkitRecentCommits.length > 0;
    const hasWebsiteData = websiteRecentCommits.length > 0;
    
    if (!hasToolkitData && !hasWebsiteData) {
      // No data from any source
      if (structureFailed) {
        // Structure file missing and no commits - fallback
        const errorMessage = 'No changelog data available from any source';
        logOutcome('fallback', errorMessage);
        return {
          outcome: 'fallback',
          data: null,
          error: errorMessage,
        };
      }
      throw new Error('No valid changelog entries in response');
    }
    
    // Merge all sources with deduplication
    const merged = mergeAndDedupeChangelogs(
      structureChangelog,
      toolkitRecentCommits,
      websiteRecentCommits
    );
    
    if (merged.length === 0) {
      throw new Error('No valid changelog entries after merge');
    }
    
    // Cache the successful result
    setCache(merged);
    
    const toolkitCommitCount = toolkitRecentCommits.reduce((sum, day) => sum + day.changes.length, 0);
    const websiteCommitCount = websiteRecentCommits.reduce((sum, day) => sum + day.changes.length, 0);
    logOutcome('success', `Fetched ${merged.length} changelog days (${toolkitCommitCount} toolkit commits, ${websiteCommitCount} website commits)`);
    
    return {
      outcome: 'success',
      data: merged,
      cachedAt: Date.now(),
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    // Network failed - use cache as fallback (stale-cache) if available
    // For transient errors (timeouts, network issues), stale cache provides resilience
    if (existingCache) {
      const isWithinTtl = isCacheValid(existingCache, ttlMs);
      logOutcome('stale-cache', `Network failed, using ${isWithinTtl ? 'valid' : 'stale'} cache: ${errorMessage}`);
      return {
        outcome: 'stale-cache',
        data: existingCache.data,
        cachedAt: existingCache.timestamp,
        error: errorMessage,
      };
    }
    
    // No cache available - signal fallback needed
    logOutcome('fallback', `Network failed, no cache: ${errorMessage}`);
    return {
      outcome: 'fallback',
      data: null,
      error: errorMessage,
    };
  }
}

// ============================================================================
// Instrumentation (US-006)
// ============================================================================

function logOutcome(outcome: FetchOutcome, message: string): void {
  const prefix = `[changelog-fetcher][${outcome}]`;
  
  if (process.env.NODE_ENV === 'development') {
    switch (outcome) {
      case 'success':
        console.log(`${prefix} ${message}`);
        break;
      case 'stale-cache':
      case 'fallback':
        // Non-fatal: baseline data can still render
        console.warn(`${prefix} ${message}`);
        break;
      case 'failure':
        // True failure: unrecoverable state
        console.error(`${prefix} ${message}`);
        break;
    }
  }
}

// Track outcomes for analytics (lightweight instrumentation)
export function trackOutcome(outcome: FetchOutcome): void {
  if (typeof window === 'undefined') return;
  
  // Store outcome counts in sessionStorage for debugging
  try {
    const key = `changelog-outcome-${outcome}`;
    const count = parseInt(sessionStorage.getItem(key) || '0', 10);
    sessionStorage.setItem(key, String(count + 1));
  } catch {
    // Ignore storage errors
  }
}
