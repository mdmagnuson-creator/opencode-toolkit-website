import Link from "next/link";
import manifest from "@/data/toolkit-manifest.json";
import { getCommitUrl } from "@/config/urls";

/**
 * Format a date as a relative time string (e.g., "2 hours ago", "3 days ago")
 */
function formatRelativeTime(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);

  if (diffSeconds < 60) {
    return "just now";
  } else if (diffMinutes < 60) {
    return `${diffMinutes} ${diffMinutes === 1 ? "minute" : "minutes"} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
  } else {
    return `${diffWeeks} ${diffWeeks === 1 ? "week" : "weeks"} ago`;
  }
}

const footerLinks = {
  concepts: {
    title: "Concepts",
    links: [
      { name: "Overview", href: "/concepts" },
      { name: "Understanding Agents", href: "/concepts/agents" },
      { name: "Agent Workflows", href: "/concepts/agent-workflows" },
      { name: "Meta-Skills", href: "/concepts/meta-skills" },
      { name: "Project Skills", href: "/concepts/skills" },
      { name: "Project Toolkit Structure", href: "/concepts/projects" },
      { name: "The Agent Loop", href: "/concepts/workflow" },
      { name: "The Human in the Loop (you)", href: "/concepts/the-human-in-the-loop" },
    ],
  },
  reference: {
    title: "Reference",
    links: [
      { name: "Primary Agents", href: "/agents/primary" },
      { name: "Sub-Agents", href: "/agents/sub" },
      { name: "Meta-Skills", href: "/skills?type=meta" },
      { name: "Skills", href: "/skills?type=regular" },
      { name: "Scaffolds", href: "/scaffolds" },
      { name: "Agent Templates", href: "/agent-templates" },
      { name: "MCP Servers", href: "/mcp" },
      { name: "Automations", href: "/automations" },
    ],
  },
  gettingStarted: {
    title: "Getting Started",
    links: [
      { name: "Quick Start", href: "/getting-started" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "GitHub", href: "https://github.com/opencode-ai/ai-toolkit" },
      { name: "OpenCode", href: "https://opencode.ai" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                      >
                        {link.name}
                        <span className="ml-1 text-xs">↗</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-neutral-900 dark:text-white">
              AI Toolkit
            </span>
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              for opencode
            </span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Agentic development made simple
          </p>
        </div>

        {/* Sync Info */}
        <div className="mt-6 flex justify-center">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Last synced: {formatRelativeTime(manifest.syncedAt)}{" "}
            {manifest.toolkitCommit && manifest.toolkitCommit !== "local" ? (
              <>
                (
                <a
                  href={getCommitUrl(manifest.toolkitCommit)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                  {manifest.toolkitCommit}
                </a>
                )
              </>
            ) : (
              <span className="font-mono">({manifest.toolkitCommit})</span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
