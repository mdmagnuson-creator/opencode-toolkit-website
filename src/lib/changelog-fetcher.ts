/**
 * Runtime changelog fetcher for hybrid changelog system
 * 
 * HYBRID ARCHITECTURE CONTRACT (US-001):
 * 
 * Baseline Sources (build-time):
 *   - toolkit-manifest.json → changelog (bundled at build)
 *   - website-changelog.ts → website entries (bundled at build)
 * 
 * Runtime Source:
 *   - GitHub raw URL for toolkit-structure.json → changelog entries
 * 
 * Precedence Rules:
 *   1. If runtime fetch succeeds → use runtime toolkit data + website entries
 *   2. If runtime fetch fails but cache exists and is within TTL → use cached data
 *   3. If runtime fetch fails and no valid cache → fallback to baseline
 * 
 * TTL: 15 minutes (900000ms) default
 */

import type { ChangelogDay, ChangelogEntry, ChangelogEntryType } from '@/data/types';
import { REPO_RAW_BASE, REPO_OWNER, REPO_NAME } from '@/config/urls';

// ============================================================================
// Configuration
// ============================================================================

const TOOLKIT_CHANGELOG_URL = `${REPO_RAW_BASE}/toolkit-structure.json`;
const GITHUB_COMMITS_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits`;

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
  data: ChangelogDay[];
}

export interface FetchResult {
  outcome: FetchOutcome;
  data: ChangelogDay[] | null;
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
}

interface ChangelogDayWithHash {
  date: string;
  displayDate: string;
  changes: ChangelogEntryWithHash[];
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

function formatDisplayDate(dateStr: string): string {
  try {
    const date = new Date(dateStr + 'T00:00:00Z');
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });
  } catch {
    return dateStr;
  }
}

/**
 * Normalize changelog to include hashes for deduplication
 */
function normalizeChangelogWithHashes(raw: ToolkitStructureChangelog): ChangelogDayWithHash[] {
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
 */
async function fetchRecentCommits(): Promise<ChangelogDayWithHash[]> {
  const sinceDate = new Date();
  sinceDate.setDate(sinceDate.getDate() - RECENT_COMMITS_WINDOW_DAYS);
  
  const params = new URLSearchParams({
    since: sinceDate.toISOString(),
    per_page: '100', // Max allowed
  });
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout (faster than main fetch)
  
  try {
    const response = await fetch(`${GITHUB_COMMITS_API_URL}?${params.toString()}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      // 403 could be rate limit, 404 could be repo not found
      logOutcome('stale-cache', `GitHub API returned ${response.status}, skipping recent commits`);
      return [];
    }
    
    const commits = await response.json() as GitHubCommit[];
    
    if (!Array.isArray(commits)) {
      return [];
    }
    
    // Group commits by date and parse conventional commit messages
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
      
      const dateStr = commitDate.split('T')[0]; // YYYY-MM-DD
      
      const entry: ChangelogEntryWithHash = {
        type: validateChangelogType(parsed.type),
        description: parsed.description,
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
  } catch (error) {
    clearTimeout(timeoutId);
    const errorMessage = error instanceof Error ? error.message : String(error);
    logOutcome('stale-cache', `GitHub API fetch failed: ${errorMessage}`);
    return [];
  }
}

// ============================================================================
// Merge & Deduplicate
// ============================================================================

/**
 * Merge toolkit-structure changelog with recent GitHub commits.
 * Deduplication strategy:
 * 1. If both have hash, match by hash
 * 2. Otherwise, match by date + type + description similarity
 */
function mergeAndDedupeChangelogs(
  structureChangelog: ChangelogDayWithHash[],
  recentCommits: ChangelogDayWithHash[]
): ChangelogDay[] {
  // Build a set of known hashes from structure changelog
  const knownHashes = new Set<string>();
  for (const day of structureChangelog) {
    for (const change of day.changes) {
      if (change.hash) {
        knownHashes.add(change.hash);
      }
    }
  }
  
  // Build a set of "fingerprints" for entries without hashes (for fuzzy dedupe)
  const knownFingerprints = new Set<string>();
  for (const day of structureChangelog) {
    for (const change of day.changes) {
      // Fingerprint: date + type + normalized description
      const fingerprint = `${day.date}|${change.type}|${change.description.toLowerCase().trim()}`;
      knownFingerprints.add(fingerprint);
    }
  }
  
  // Merge into a single day map
  const dayMap = new Map<string, ChangelogDayWithHash>();
  
  // First, add all structure changelog entries
  for (const day of structureChangelog) {
    dayMap.set(day.date, {
      date: day.date,
      displayDate: day.displayDate,
      changes: [...day.changes],
    });
  }
  
  // Then, add new entries from recent commits (deduplicated)
  for (const day of recentCommits) {
    const existing = dayMap.get(day.date);
    
    for (const change of day.changes) {
      // Skip if hash is already known
      if (change.hash && knownHashes.has(change.hash)) {
        continue;
      }
      
      // Skip if fingerprint matches (fuzzy dedupe)
      const fingerprint = `${day.date}|${change.type}|${change.description.toLowerCase().trim()}`;
      if (knownFingerprints.has(fingerprint)) {
        continue;
      }
      
      // This is a new entry, add it
      if (existing) {
        existing.changes.push(change);
      } else {
        dayMap.set(day.date, {
          date: day.date,
          displayDate: formatDisplayDate(day.date),
          changes: [change],
        });
      }
      
      // Track to avoid adding duplicates from same batch
      if (change.hash) {
        knownHashes.add(change.hash);
      }
      knownFingerprints.add(fingerprint);
    }
  }
  
  // Sort by date descending and strip hashes from output
  return Array.from(dayMap.values())
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((day) => ({
      date: day.date,
      displayDate: day.displayDate,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      changes: day.changes.map(({ hash: _hash, ...rest }) => rest),
    }));
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

function setCache(data: ChangelogDay[]): void {
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
    
    // Fetch both toolkit-structure changelog and recent commits in parallel
    const [structureResponse, recentCommits] = await Promise.all([
      fetch(TOOLKIT_CHANGELOG_URL, {
        signal: controller.signal,
        cache: 'no-store', // Always fetch fresh from network
      }),
      fetchRecentCommits(), // This has its own timeout and error handling
    ]);
    
    clearTimeout(timeoutId);
    
    if (!structureResponse.ok) {
      // HTTP 404 is a permanent error - resource definitively doesn't exist
      // Skip stale cache and go directly to fallback (neutral state)
      if (structureResponse.status === 404) {
        // Even if structure file is missing, we might have recent commits
        if (recentCommits.length > 0) {
          const merged = mergeAndDedupeChangelogs([], recentCommits);
          setCache(merged);
          logOutcome('success', `Fetched ${merged.length} changelog days from recent commits only`);
          return {
            outcome: 'success',
            data: merged,
            cachedAt: Date.now(),
          };
        }
        
        const errorMessage = `HTTP 404: Resource not found`;
        logOutcome('fallback', `Permanent error (404), using baseline: ${errorMessage}`);
        return {
          outcome: 'fallback',
          data: null,
          error: errorMessage,
        };
      }
      throw new Error(`HTTP ${structureResponse.status}: ${structureResponse.statusText}`);
    }
    
    const raw = await structureResponse.json() as ToolkitStructureChangelog;
    const structureChangelog = normalizeChangelogWithHashes(raw);
    
    // Merge structure changelog with recent commits
    const merged = mergeAndDedupeChangelogs(structureChangelog, recentCommits);
    
    if (merged.length === 0) {
      throw new Error('No valid changelog entries in response');
    }
    
    // Cache the successful result
    setCache(merged);
    
    const newFromCommits = recentCommits.reduce((sum, day) => sum + day.changes.length, 0);
    logOutcome('success', `Fetched ${merged.length} changelog days (${newFromCommits} from recent commits)`);
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
