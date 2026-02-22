"use client";

/**
 * ChangelogClient - Client component for hybrid changelog (US-003, US-004, US-005, US-006)
 * 
 * Receives baseline SSR data and enhances with runtime GitHub fetch.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { mergeChangelogs } from "@/data";
import { fetchToolkitChangelog, clearCache, trackOutcome, type FetchOutcome } from "@/lib/changelog-fetcher";
import type { ChangelogEntryWithSource, ChangelogDayWithSource, ChangelogSource, ChangelogEntryType } from "@/data/types";
import { REPO_BASE } from "@/config/urls";

// ============================================================================
// Badge Components
// ============================================================================

function TypeBadge({ type }: { type: ChangelogEntryType }) {
  const styles: Record<ChangelogEntryType, string> = {
    feat: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    fix: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    refactor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    docs: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    chore: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400",
    test: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
    style: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    perf: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    ci: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    build: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  };

  const labels: Record<ChangelogEntryType, string> = {
    feat: "Feature",
    fix: "Fix",
    refactor: "Refactor",
    docs: "Docs",
    chore: "Chore",
    test: "Test",
    style: "Style",
    perf: "Perf",
    ci: "CI",
    build: "Build",
  };

  return (
    <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${styles[type]}`}>
      {labels[type]}
    </span>
  );
}

function ScopeBadge({ scope }: { scope: string }) {
  return (
    <span className="shrink-0 rounded-md bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
      {scope}
    </span>
  );
}

function SourceBadge({ source }: { source: ChangelogSource }) {
  const styles: Record<ChangelogSource, string> = {
    toolkit: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    website: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  };

  const labels: Record<ChangelogSource, string> = {
    toolkit: "Toolkit",
    website: "Website",
  };

  return (
    <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${styles[source]}`}>
      {labels[source]}
    </span>
  );
}

// ============================================================================
// Changelog Entry Components
// ============================================================================

function ChangeItem({ change }: { change: ChangelogEntryWithSource }) {
  return (
    <li className="flex items-start gap-3 py-2">
      <div className="flex shrink-0 items-center gap-1.5">
        <SourceBadge source={change.source} />
        <TypeBadge type={change.type} />
      </div>
      <span className="flex-1 text-neutral-700 dark:text-neutral-300">{change.description}</span>
      {change.scope && <ScopeBadge scope={change.scope} />}
    </li>
  );
}

function DaySection({ day }: { day: ChangelogDayWithSource }) {
  const featCount = day.changes.filter((c) => c.type === "feat").length;
  const fixCount = day.changes.filter((c) => c.type === "fix").length;
  const toolkitCount = day.changes.filter((c) => c.source === "toolkit").length;
  const websiteCount = day.changes.filter((c) => c.source === "website").length;

  return (
    <section className="scroll-mt-24 rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {day.displayDate}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {day.changes.length} changes
            {featCount > 0 && ` • ${featCount} new features`}
            {fixCount > 0 && ` • ${fixCount} fixes`}
          </p>
          <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
            {toolkitCount > 0 && <span className="text-violet-600 dark:text-violet-400">{toolkitCount} toolkit</span>}
            {toolkitCount > 0 && websiteCount > 0 && " · "}
            {websiteCount > 0 && <span className="text-amber-600 dark:text-amber-400">{websiteCount} website</span>}
          </p>
        </div>
        <time
          dateTime={day.date}
          className="text-sm text-neutral-500 dark:text-neutral-400"
        >
          {day.date}
        </time>
      </div>
      <ul className="divide-y divide-neutral-100 px-6 dark:divide-neutral-800">
        {day.changes.map((change, i) => (
          <ChangeItem key={i} change={change} />
        ))}
      </ul>
    </section>
  );
}

function EmptyChangelogState() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-12 text-center dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
        <svg className="h-8 w-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h2 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
        No changelog entries yet
      </h2>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Changelog data will appear here once the toolkit manifest is updated with recent changes.
      </p>
      <a
        href={`${REPO_BASE}/commits/main`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        View commits on GitHub
      </a>
    </div>
  );
}

// ============================================================================
// Status Components (US-004)
// ============================================================================

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

interface RefreshButtonProps {
  onClick: () => void;
  isRefreshing: boolean;
  variant: 'success' | 'warning' | 'neutral';
}

function RefreshButton({ onClick, isRefreshing, variant }: RefreshButtonProps) {
  const colorClasses = {
    success: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300',
    warning: 'text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300',
    neutral: 'text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300',
  };

  return (
    <button
      onClick={onClick}
      disabled={isRefreshing}
      className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${colorClasses[variant]} disabled:opacity-50`}
      title="Refresh changelog data"
    >
      <svg
        className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      {isRefreshing ? 'Refreshing...' : 'Refresh'}
    </button>
  );
}

function ChangelogStatusBanner({
  outcome,
  isStale,
  lastUpdated,
  onRefresh,
  isRefreshing,
}: {
  outcome: FetchOutcome | null;
  isStale: boolean;
  lastUpdated: Date | null;
  onRefresh: () => void;
  isRefreshing: boolean;
}) {
  // Success with fresh data
  if (outcome === 'success' && !isStale) {
    return (
      <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-sm dark:border-green-800/50 dark:bg-green-900/20">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-700 dark:text-green-300">
            Live data
            {lastUpdated && (
              <span className="ml-1 text-green-600 dark:text-green-400">
                · {formatRelativeTime(lastUpdated)}
              </span>
            )}
          </span>
        </div>
        <RefreshButton onClick={onRefresh} isRefreshing={isRefreshing} variant="success" />
      </div>
    );
  }

  // Stale cache warning
  if (outcome === 'stale-cache' || isStale) {
    return (
      <div className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm dark:border-amber-800/50 dark:bg-amber-900/20">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="text-amber-700 dark:text-amber-300">
            Using cached data
            {lastUpdated && (
              <span className="ml-1 text-amber-600 dark:text-amber-400">
                · from {formatRelativeTime(lastUpdated)}
              </span>
            )}
          </span>
        </div>
        <RefreshButton onClick={onRefresh} isRefreshing={isRefreshing} variant="warning" />
      </div>
    );
  }

  // Fallback mode
  if (outcome === 'fallback' || outcome === 'failure') {
    return (
      <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-neutral-600 dark:text-neutral-300">
            Showing build-time data
            <span className="ml-1 text-neutral-500 dark:text-neutral-400">
              · runtime refresh unavailable
            </span>
          </span>
        </div>
        <RefreshButton onClick={onRefresh} isRefreshing={isRefreshing} variant="neutral" />
      </div>
    );
  }

  return null;
}

function ChangelogLoadingIndicator() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm dark:border-blue-800/50 dark:bg-blue-900/20">
      <svg
        className="h-4 w-4 animate-spin text-blue-600 dark:text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="text-blue-700 dark:text-blue-300">
        Checking for latest updates...
      </span>
    </div>
  );
}

// ============================================================================
// Main Client Component
// ============================================================================

interface ChangelogClientProps {
  baselineChangelog: ChangelogDayWithSource[];
}

export function ChangelogClient({ baselineChangelog }: ChangelogClientProps) {
  const [changelog, setChangelog] = useState<ChangelogDayWithSource[]>(baselineChangelog);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [outcome, setOutcome] = useState<FetchOutcome | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isStale, setIsStale] = useState(false);
  const initialFetchDone = useRef(false);

  // Perform runtime fetch
  const doFetch = useCallback(async (forceRefresh: boolean = false) => {
    if (forceRefresh) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    try {
      const result = await fetchToolkitChangelog({ forceRefresh });
      
      // Track outcome for instrumentation (US-006)
      trackOutcome(result.outcome);
      setOutcome(result.outcome);
      
      if (result.data) {
        // Merge runtime toolkit data with website entries (US-003)
        const merged = mergeChangelogs(result.data);
        setChangelog(merged);
        setLastUpdated(result.cachedAt ? new Date(result.cachedAt) : new Date());
        setIsStale(result.outcome === 'stale-cache');
      } else {
        // Fallback to baseline (US-004)
        // Use isStale: false for fallback - this is a neutral state, not a warning
        setChangelog(baselineChangelog);
        setIsStale(false);
      }
    } catch (error) {
      console.error('[ChangelogClient] Unexpected error:', error);
      trackOutcome('failure');
      setOutcome('failure');
      setChangelog(baselineChangelog);
      // failure is a neutral fallback state, not a stale-cache warning
      setIsStale(false);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [baselineChangelog]);

  // Initial fetch on mount
  useEffect(() => {
    if (!initialFetchDone.current) {
      initialFetchDone.current = true;
      doFetch(false);
    }
  }, [doFetch]);

  // Manual refresh handler (US-005)
  const handleRefresh = useCallback(() => {
    clearCache();
    doFetch(true);
  }, [doFetch]);

  const hasChangelog = changelog && changelog.length > 0;
  
  const totalChanges = hasChangelog 
    ? changelog.reduce((sum, day) => sum + day.changes.length, 0)
    : 0;
  const totalFeatures = hasChangelog
    ? changelog.reduce(
        (sum, day) => sum + day.changes.filter((c) => c.type === "feat").length,
        0
      )
    : 0;

  return (
    <>
      {/* Status banner (US-004, US-005) */}
      <div className="mb-6">
        {isLoading && !initialFetchDone.current ? (
          <ChangelogLoadingIndicator />
        ) : (
          <ChangelogStatusBanner
            outcome={outcome}
            isStale={isStale}
            lastUpdated={lastUpdated}
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
          />
        )}
      </div>

      {!hasChangelog ? (
        <EmptyChangelogState />
      ) : (
        <>
          {/* Stats */}
          <div className="mb-8 flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {totalChanges} total changes
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {totalFeatures} new features
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last {changelog.length} days
            </span>
          </div>

          {/* Legend */}
          <div className="mb-8 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="mb-4">
              <h3 className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Sources
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <SourceBadge source="toolkit" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">AI Toolkit repository changes</span>
                </div>
                <div className="flex items-center gap-2">
                  <SourceBadge source="website" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">Documentation website changes</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Change Types
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <TypeBadge type="feat" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">New feature or capability</span>
                </div>
                <div className="flex items-center gap-2">
                  <TypeBadge type="fix" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">Bug fix or correction</span>
                </div>
                <div className="flex items-center gap-2">
                  <TypeBadge type="refactor" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">Code improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <TypeBadge type="docs" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">Documentation update</span>
                </div>
              </div>
            </div>
          </div>

          {/* Changelog entries */}
          <div className="space-y-8">
            {changelog.map((day) => (
              <DaySection key={day.date} day={day} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
