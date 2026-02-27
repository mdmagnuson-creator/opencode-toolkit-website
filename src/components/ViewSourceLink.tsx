"use client";

import { REPO_BASE } from "@/config/urls";

type ResourceType = "agent" | "skill" | "scaffold" | "agent-template";

interface ViewSourceLinkProps {
  type: ResourceType;
  slug: string;
  /** For meta-skills that are in skills/meta/ directory */
  isMeta?: boolean;
  /** For agent templates that need category path */
  category?: string;
  className?: string;
}

/**
 * Builds the GitHub URL for viewing a resource source file.
 *
 * Agents: `{repoUrl}/blob/main/agents/{slug}.md`
 * Skills: `{repoUrl}/tree/main/skills/{slug}` (directory for SKILL.md + resources)
 * Meta-Skills: `{repoUrl}/tree/main/skills/meta/{slug}`
 * Scaffolds: `{repoUrl}/tree/main/scaffolds/{slug}`
 * Agent Templates: `{repoUrl}/blob/main/agent-templates/{category}/{slug}.md`
 */
function getSourceUrl(
  type: ResourceType,
  slug: string,
  isMeta?: boolean,
  category?: string
): string {
  switch (type) {
    case "agent":
      return `${REPO_BASE}/blob/main/agents/${slug}.md`;
    case "skill":
      if (isMeta) {
        return `${REPO_BASE}/tree/main/skills/meta/${slug}`;
      }
      return `${REPO_BASE}/tree/main/skills/${slug}`;
    case "scaffold":
      return `${REPO_BASE}/tree/main/scaffolds/${slug}`;
    case "agent-template":
      if (!category) {
        throw new Error("category is required for agent-template type");
      }
      return `${REPO_BASE}/blob/main/agent-templates/${category}/${slug}.md`;
    default:
      throw new Error(`Unknown resource type: ${type}`);
  }
}

export function ViewSourceLink({
  type,
  slug,
  isMeta,
  category,
  className = "",
}: ViewSourceLinkProps) {
  const sourceUrl = getSourceUrl(type, slug, isMeta, category);

  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:ring-offset-neutral-900 ${className}`}
      aria-label="View source on GitHub"
      title="View source on GitHub"
    >
      {/* GitHub Icon */}
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>View source</span>
    </a>
  );
}
