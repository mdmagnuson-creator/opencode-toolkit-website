"use client";

/**
 * HybridChangelog - Client component for runtime changelog enhancement (US-003, US-004, US-005, US-006)
 * 
 * Architecture:
 *   - Receives baseline (SSR) data as initial state for instant render
 *   - Attempts runtime fetch from GitHub on mount
 *   - Shows loading indicator during fetch
 *   - Merges runtime toolkit data with website entries
 *   - Shows stale/fallback messaging when applicable
 *   - Provides manual refresh control
 *   - Instruments outcomes for debugging
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { mergeChangelogs } from "@/data";
import { fetchToolkitChangelog, clearCache, trackOutcome, type FetchOutcome } from "@/lib/changelog-fetcher";
import type { ChangelogDayWithSource } from "@/data/types";

interface HybridChangelogProps {
  /** Baseline changelog (SSR data) for instant render */
  baselineChangelog: ChangelogDayWithSource[];
  /** Render function for changelog content */
  children: (props: {
    changelog: ChangelogDayWithSource[];
    isLoading: boolean;
    outcome: FetchOutcome | null;
    lastUpdated: Date | null;
    isStale: boolean;
    onRefresh: () => void;
    isRefreshing: boolean;
  }) => React.ReactNode;
}

export function HybridChangelog({ baselineChangelog, children }: HybridChangelogProps) {
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
        setChangelog(baselineChangelog);
        setIsStale(true);
      }
    } catch (error) {
      // Should not happen as fetchToolkitChangelog handles errors internally
      console.error('[HybridChangelog] Unexpected error:', error);
      trackOutcome('failure');
      setOutcome('failure');
      setChangelog(baselineChangelog);
      setIsStale(true);
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

  return (
    <>
      {children({
        changelog,
        isLoading: isLoading && !initialFetchDone.current,
        outcome,
        lastUpdated,
        isStale,
        onRefresh: handleRefresh,
        isRefreshing,
      })}
    </>
  );
}

// ============================================================================
// Status Components (US-004)
// ============================================================================

interface StatusBannerProps {
  outcome: FetchOutcome | null;
  isStale: boolean;
  lastUpdated: Date | null;
  onRefresh: () => void;
  isRefreshing: boolean;
}

export function ChangelogStatusBanner({
  outcome,
  isStale,
  lastUpdated,
  onRefresh,
  isRefreshing,
}: StatusBannerProps) {
  // Don't show banner for successful fresh data
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

  // Loading state (shouldn't normally show this as we have baseline data)
  return null;
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

// ============================================================================
// Loading Indicator (US-004)
// ============================================================================

export function ChangelogLoadingIndicator() {
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
// Utilities
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
