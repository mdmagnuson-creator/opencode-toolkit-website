import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCombinedChangelog } from "@/data";
import { ChangelogClient } from "./ChangelogClient";
import { REPO_BASE, RELEASES_URL } from "@/config/urls";

export const metadata: Metadata = {
  title: "Changelog | AI Toolkit",
  description: "Recent updates and changes to the AI Toolkit and documentation website.",
};

// Baseline changelog from build-time data (SSR)
const baselineChangelog = getCombinedChangelog();

export default function ChangelogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
      <Breadcrumbs />

      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white">
          Changelog
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Recent updates and changes to the AI Toolkit and this documentation website.
          Stay informed about new agents, skills, and improvements to your development workflow.
        </p>
      </div>

      {/* Client component handles hybrid changelog with runtime enhancement */}
      <ChangelogClient baselineChangelog={baselineChangelog} />

      {/* Footer info */}
      <div className="mt-12 rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
        <h3 className="mb-2 font-medium text-neutral-900 dark:text-white">
          About This Changelog
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This changelog combines changes from two sources:{" "}
          <span className="font-medium text-violet-600 dark:text-violet-400">Toolkit</span> entries
          come from the{" "}
          <a
            href={REPO_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            ai-toolkit repository
          </a>
          , while{" "}
          <span className="font-medium text-amber-600 dark:text-amber-400">Website</span> entries
          track documentation site improvements. Toolkit data is refreshed from GitHub on page load
          (cached for 15 minutes). Use the refresh button to force an update.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a
            href={`${REPO_BASE}/commits/main`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Toolkit commit history
          </a>
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Toolkit releases
          </a>
        </div>
      </div>
    </main>
  );
}
