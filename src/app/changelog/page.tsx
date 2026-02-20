import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { manifest } from "@/data";
import type { ChangelogEntry, ChangelogDay } from "@/data/types";

export const metadata: Metadata = {
  title: "Changelog | AI Toolkit",
  description: "Recent updates and changes to the AI Toolkit for opencode.",
};

// Use data from the manifest (auto-generated from git commits)
const changelog: ChangelogDay[] = manifest.changelog;

function TypeBadge({ type }: { type: ChangelogEntry["type"] }) {
  const styles = {
    feat: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    fix: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    refactor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    docs: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    chore: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400",
  };

  const labels = {
    feat: "Feature",
    fix: "Fix",
    refactor: "Refactor",
    docs: "Docs",
    chore: "Chore",
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

function ChangeItem({ change }: { change: ChangelogEntry }) {
  return (
    <li className="flex items-start gap-3 py-2">
      <TypeBadge type={change.type} />
      <span className="flex-1 text-neutral-700 dark:text-neutral-300">{change.description}</span>
      {change.scope && <ScopeBadge scope={change.scope} />}
    </li>
  );
}

function DaySection({ day }: { day: ChangelogDay }) {
  const featCount = day.changes.filter((c) => c.type === "feat").length;
  const fixCount = day.changes.filter((c) => c.type === "fix").length;

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

export default function ChangelogPage() {
  const totalChanges = changelog.reduce((sum, day) => sum + day.changes.length, 0);
  const totalFeatures = changelog.reduce(
    (sum, day) => sum + day.changes.filter((c) => c.type === "feat").length,
    0
  );

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
      <Breadcrumbs />

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white">
          Changelog
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Recent updates and changes to the AI Toolkit. Stay informed about new agents, 
          skills, and improvements to your development workflow.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400">
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
      </div>

      {/* Legend */}
      <div className="mb-8 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
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

      {/* Filter hint */}
      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Showing changes from the last {changelog.length} days
        </p>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          <span className="rounded border border-neutral-200 bg-white px-2 py-1 font-mono text-xs dark:border-neutral-700 dark:bg-neutral-800">
            auto-updated
          </span>
          {" "}on build
        </div>
      </div>

      {/* Changelog entries */}
      <div className="space-y-8">
        {changelog.map((day) => (
          <DaySection key={day.date} day={day} />
        ))}
      </div>

      {/* Footer info */}
      <div className="mt-12 rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
        <h3 className="mb-2 font-medium text-neutral-900 dark:text-white">
          About This Changelog
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This changelog is automatically generated from git commits in the{" "}
          <a
            href="https://github.com/opencode-ai/ai-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            ai-toolkit repository
          </a>
          . Changes are categorized using conventional commit prefixes (feat, fix, refactor, docs, chore).
          The changelog is refreshed on each website build.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/opencode-ai/ai-toolkit/commits/main"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View full commit history
          </a>
          <a
            href="https://github.com/opencode-ai/ai-toolkit/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            View releases
          </a>
        </div>
      </div>
    </main>
  );
}
