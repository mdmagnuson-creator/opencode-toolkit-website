import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { VersionBadge } from "@/components/VersionBadge";
import { LastSyncedTimestamp } from "@/components/LastSyncedTimestamp";
import { manifest } from "@/data";

// Category card data with icons, descriptions, and links
const CATEGORIES = [
  {
    title: "Agents",
    description:
      "AI agents that implement, review, and test your code. Primary agents orchestrate work while sub-agents specialize in specific tasks.",
    href: "/reference/agents",
    counts: [
      { label: "Primary", value: manifest.counts.primaryAgents },
      { label: "Sub-agents", value: manifest.counts.subagents },
    ],
    totalCount: manifest.counts.agents,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "violet",
  },
  {
    title: "Skills",
    description:
      "On-demand instructions that agents load for specific workflows. Skills provide specialized knowledge for tasks like authentication, testing, or deployments.",
    href: "/reference/skills",
    counts: [
      { label: "Skills", value: manifest.counts.skills - manifest.counts.metaSkills },
      { label: "Meta-skills", value: manifest.counts.metaSkills },
    ],
    totalCount: manifest.counts.skills,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    color: "amber",
  },
  {
    title: "Scaffolds",
    description:
      "Project templates to bootstrap new applications quickly. Each scaffold includes pre-configured authentication, database setup, and agent-friendly documentation.",
    href: "/reference/scaffolds",
    counts: [{ label: "Templates", value: manifest.counts.scaffolds }],
    totalCount: manifest.counts.scaffolds,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Agent Templates",
    description:
      "Parameterized agent definitions that generate project-specific agents. Templates customize agents to understand your exact stack and conventions.",
    href: "/reference/agent-templates",
    counts: [{ label: "Templates", value: manifest.counts.agentTemplates }],
    totalCount: manifest.counts.agentTemplates,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
        />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Automations",
    description:
      "Pre-configured workflows for common development tasks. Automations chain multiple agents together to handle complex operations end-to-end.",
    href: "/reference/automations",
    counts: [],
    totalCount: null,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    color: "rose",
  },
  {
    title: "MCP Servers",
    description:
      "Model Context Protocol servers that provide tools and capabilities to AI agents. MCP servers extend what agents can do.",
    href: "/reference/mcp",
    counts: [],
    totalCount: null,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    color: "cyan",
  },
];

// Color variants for category cards
const COLOR_VARIANTS: Record<
  string,
  {
    bg: string;
    border: string;
    iconBg: string;
    iconColor: string;
    hoverBorder: string;
  }
> = {
  violet: {
    bg: "bg-white dark:bg-neutral-900",
    border: "border-violet-200 dark:border-violet-800/50",
    iconBg: "bg-violet-100 dark:bg-violet-950",
    iconColor: "text-violet-600 dark:text-violet-400",
    hoverBorder: "hover:border-violet-300 dark:hover:border-violet-700",
  },
  amber: {
    bg: "bg-white dark:bg-neutral-900",
    border: "border-amber-200 dark:border-amber-800/50",
    iconBg: "bg-amber-100 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400",
    hoverBorder: "hover:border-amber-300 dark:hover:border-amber-700",
  },
  green: {
    bg: "bg-white dark:bg-neutral-900",
    border: "border-green-200 dark:border-green-800/50",
    iconBg: "bg-green-100 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400",
    hoverBorder: "hover:border-green-300 dark:hover:border-green-700",
  },
  blue: {
    bg: "bg-white dark:bg-neutral-900",
    border: "border-blue-200 dark:border-blue-800/50",
    iconBg: "bg-blue-100 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
    hoverBorder: "hover:border-blue-300 dark:hover:border-blue-700",
  },
  rose: {
    bg: "bg-white dark:bg-neutral-900",
    border: "border-rose-200 dark:border-rose-800/50",
    iconBg: "bg-rose-100 dark:bg-rose-950",
    iconColor: "text-rose-600 dark:text-rose-400",
    hoverBorder: "hover:border-rose-300 dark:hover:border-rose-700",
  },
  cyan: {
    bg: "bg-white dark:bg-neutral-900",
    border: "border-cyan-200 dark:border-cyan-800/50",
    iconBg: "bg-cyan-100 dark:bg-cyan-950",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    hoverBorder: "hover:border-cyan-300 dark:hover:border-cyan-700",
  },
};

function CategoryCard({
  category,
}: {
  category: (typeof CATEGORIES)[number];
}) {
  const colors = COLOR_VARIANTS[category.color];

  return (
    <Link
      href={category.href}
      className={`group block rounded-xl border p-6 transition-all hover:shadow-lg ${colors.bg} ${colors.border} ${colors.hoverBorder}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconColor}`}
        >
          {category.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
              {category.title}
            </h3>
            {category.totalCount !== null && (
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                {category.totalCount}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
            {category.description}
          </p>
          {category.counts.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {category.counts.map((count) => (
                <span
                  key={count.label}
                  className="text-xs text-neutral-500 dark:text-neutral-500"
                >
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    {count.value}
                  </span>{" "}
                  {count.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <svg
          className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-violet-500 dark:text-neutral-600 dark:group-hover:text-violet-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}

function QuickStat({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    violet: "text-violet-600 dark:text-violet-400",
    blue: "text-blue-600 dark:text-blue-400",
    amber: "text-amber-600 dark:text-amber-400",
    green: "text-green-600 dark:text-green-400",
  };

  return (
    <div className="text-center">
      <div className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</div>
      <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{label}</div>
    </div>
  );
}

export default function ReferencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <Breadcrumbs />
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
                  Developer Reference
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <VersionBadge version={manifest.version} />
                  <LastSyncedTimestamp timestamp={manifest.syncedAt || manifest.generatedAt} />
                </div>
              </div>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-400">
                Complete reference documentation for the yo-go agent toolkit. Browse agents,
                skills, scaffolds, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-6 py-8 sm:px-8 lg:px-12 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <QuickStat label="Agents" value={manifest.counts.agents} color="violet" />
            <QuickStat label="Skills" value={manifest.counts.skills} color="amber" />
            <QuickStat label="Scaffolds" value={manifest.counts.scaffolds} color="green" />
            <QuickStat
              label="Templates"
              value={manifest.counts.agentTemplates}
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            Browse by Category
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Agent Categories Overview */}
      <section className="border-t border-neutral-200 px-6 py-12 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            Agent Categories
          </h2>
          <p className="mb-6 text-neutral-600 dark:text-neutral-400">
            Agents are organized by their primary function. Each category specializes in a
            different aspect of the development workflow.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(manifest.categories).map(([category, count]) => (
              <Link
                key={category}
                href={`/reference/agents?category=${category}`}
                className="group flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
              >
                <div>
                  <h3 className="font-medium capitalize text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
                    {category}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-500">
                    {count} {count === 1 ? "agent" : "agents"}
                  </p>
                </div>
                <svg
                  className="h-5 w-5 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-violet-500 dark:text-neutral-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            New to yo-go?
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Start with the concepts guide to understand how agents, skills, and the toolkit work
            together.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/concepts/agents"
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
            >
              Understanding Agents
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/concepts/skills"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            >
              How Skills Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
