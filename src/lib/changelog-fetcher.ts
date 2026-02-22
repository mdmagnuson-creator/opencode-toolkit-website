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

import type { ChangelogDay, ChangelogEntryType } from '@/data/types';
import { REPO_RAW_BASE } from '@/config/urls';

// ============================================================================
// Configuration
// ============================================================================

const TOOLKIT_CHANGELOG_URL = `${REPO_RAW_BASE}/toolkit-structure.json`;

const CACHE_KEY = 'toolkit-changelog-cache';
const DEFAULT_TTL_MS = 15 * 60 * 1000; // 15 minutes

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

function normalizeChangelog(raw: ToolkitStructureChangelog): ChangelogDay[] {
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
        })),
    }))
    .filter((day) => day.changes.length > 0);
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
  
  // Check cache first (unless force refresh)
  if (!forceRefresh) {
    const cache = getCache();
    if (cache && isCacheValid(cache, ttlMs)) {
      logOutcome('success', 'Cache hit - returning cached data');
      return {
        outcome: 'success',
        data: cache.data,
        cachedAt: cache.timestamp,
      };
    }
  }
  
  // Attempt runtime fetch
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
    
    const response = await fetch(TOOLKIT_CHANGELOG_URL, {
      signal: controller.signal,
      cache: 'no-store', // Always fetch fresh from network
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      // HTTP 404 is a permanent error - resource definitively doesn't exist
      // Skip stale cache and go directly to fallback (neutral state)
      if (response.status === 404) {
        const errorMessage = `HTTP 404: Resource not found`;
        logOutcome('fallback', `Permanent error (404), using baseline: ${errorMessage}`);
        return {
          outcome: 'fallback',
          data: null,
          error: errorMessage,
        };
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const raw = await response.json() as ToolkitStructureChangelog;
    const normalized = normalizeChangelog(raw);
    
    if (normalized.length === 0) {
      throw new Error('No valid changelog entries in response');
    }
    
    // Cache the successful result
    setCache(normalized);
    
    logOutcome('success', `Fetched ${normalized.length} changelog days`);
    return {
      outcome: 'success',
      data: normalized,
      cachedAt: Date.now(),
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    // Try stale cache for transient errors (timeouts, network issues)
    const staleCache = getCache();
    if (staleCache) {
      logOutcome('stale-cache', `Network failed, using stale cache: ${errorMessage}`);
      return {
        outcome: 'stale-cache',
        data: staleCache.data,
        cachedAt: staleCache.timestamp,
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
