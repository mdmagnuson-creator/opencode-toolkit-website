"use client";

import { useSyncExternalStore, useMemo } from "react";

interface LastSyncedTimestampProps {
  timestamp: string;
  className?: string;
}

function getRelativeTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffDays > 0) {
    return rtf.format(-diffDays, "day");
  } else if (diffHours > 0) {
    return rtf.format(-diffHours, "hour");
  } else if (diffMins > 0) {
    return rtf.format(-diffMins, "minute");
  } else {
    return "just now";
  }
}

function formatFullDate(timestamp: string): string {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);
}

// Custom hook to subscribe to time updates (every minute)
function useCurrentMinute() {
  return useSyncExternalStore(
    (callback) => {
      const interval = setInterval(callback, 60000);
      return () => clearInterval(interval);
    },
    () => Math.floor(Date.now() / 60000), // Current minute as a number
    () => 0 // Server snapshot: stable value to avoid hydration mismatch
  );
}

export function LastSyncedTimestamp({ timestamp, className = "" }: LastSyncedTimestampProps) {
  // Subscribe to minute updates to trigger re-renders
  const currentMinute = useCurrentMinute();

  // Compute relative time based on current minute (forces recalculation when minute changes)
  const relativeTime = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _minute = currentMinute; // Dependency to trigger recalculation
    return getRelativeTime(timestamp);
  }, [timestamp, currentMinute]);

  // Full date only needs to be computed once
  const fullDate = useMemo(() => formatFullDate(timestamp), [timestamp]);

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 ${className}`}
      title={fullDate}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Updated {relativeTime}</span>
    </span>
  );
}
