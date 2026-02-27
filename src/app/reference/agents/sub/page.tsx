"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LastSyncedTimestamp } from "@/components/LastSyncedTimestamp";
import { VersionBadge } from "@/components/VersionBadge";
import Link from "next/link";
import { manifest } from "@/data";
import type { Agent } from "@/data/types";

const VALID_CATEGORIES: Agent["category"][] = ["critics", "developers", "testers", "orchestrators", "utilities"];

// Legacy category aliases for backwards compatibility
const CATEGORY_ALIASES: Record<string, Agent["category"]> = {
  other: "utilities", // Map old "other" to "utilities"
};

function getInitialCategory(param: string | null): Agent["category"] | "all" {
  if (!param) return "all";
  
  // Check if it's a valid category
  if (VALID_CATEGORIES.includes(param as Agent["category"])) {
    return param as Agent["category"];
  }
  
  // Check for legacy aliases
  if (param in CATEGORY_ALIASES) {
    return CATEGORY_ALIASES[param];
  }
  
  return "all";
}

const CATEGORY_LABELS: Record<Agent["category"], string> = {
  critics: "Critics",
  developers: "Developers",
  testers: "Testers",
  orchestrators: "Orchestrators",
  utilities: "Utilities",
};

const CATEGORY_DESCRIPTIONS: Record<Agent["category"], string> = {
  critics: "Review code for specific concerns — security, performance, accessibility, and more.",
  developers: "Write code in specific languages or frameworks.",
  testers: "A multi-layered testing system: the tester orchestrator routes to unit specialists (jest-tester, react-tester, go-tester), E2E agents handle UI testing, and QA agents perform adversarial exploration.",
  orchestrators: "Coordinate other agents and manage workflows.",
  utilities: "Standalone tools for debugging, cleanup, and documentation.",
};

// Tester functional groups for specialized display
type TesterGroup = "orchestrator" | "unit" | "e2e" | "qa" | "other";

const TESTER_GROUPS: Record<TesterGroup, { label: string; description: string; slugs: string[] }> = {
  orchestrator: {
    label: "Orchestrator",
    description: "Routes test requests to the appropriate specialist agents",
    slugs: ["tester"],
  },
  unit: {
    label: "Unit Specialists",
    description: "Write unit tests for specific languages and frameworks",
    slugs: ["jest-tester", "react-tester", "go-tester"],
  },
  e2e: {
    label: "E2E Testing",
    description: "Write and manage end-to-end UI tests with Playwright",
    slugs: ["e2e-playwright"],
  },
  qa: {
    label: "QA & Adversarial",
    description: "Find bugs through exploratory testing and convert findings to regression tests",
    slugs: ["qa", "qa-explorer", "qa-browser-tester"],
  },
  other: {
    label: "Supporting",
    description: "Additional testing infrastructure and coordination",
    slugs: ["merge-coordinator"],
  },
};

const TESTER_GROUP_ORDER: TesterGroup[] = ["orchestrator", "unit", "e2e", "qa", "other"];

// Cross-references for tester agents
const TESTER_CROSS_REFS: Record<string, { label: string; refs: string[] }> = {
  tester: { label: "Routes to", refs: ["jest-tester", "react-tester", "go-tester"] },
  qa: { label: "Coordinates", refs: ["qa-explorer", "qa-browser-tester"] },
  "qa-explorer": { label: "Reports to", refs: ["qa"] },
  "qa-browser-tester": { label: "Works with", refs: ["qa-explorer"] },
};

const CATEGORY_COLORS: Record<Agent["category"], { bg: string; text: string }> = {
  critics: {
    bg: "bg-amber-100 dark:bg-amber-950",
    text: "text-amber-800 dark:text-amber-200",
  },
  developers: {
    bg: "bg-blue-100 dark:bg-blue-950",
    text: "text-blue-800 dark:text-blue-200",
  },
  testers: {
    bg: "bg-green-100 dark:bg-green-950",
    text: "text-green-800 dark:text-green-200",
  },
  orchestrators: {
    bg: "bg-purple-100 dark:bg-purple-950",
    text: "text-purple-800 dark:text-purple-200",
  },
  utilities: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
};

function CategoryBadge({ category }: { category: Agent["category"] }) {
  const colors = CATEGORY_COLORS[category];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}

function AgentCard({ agent, showCrossRefs = false }: { agent: Agent; showCrossRefs?: boolean }) {
  const crossRef = showCrossRefs ? TESTER_CROSS_REFS[agent.slug] : null;
  
  return (
    <Link
      href={`/reference/agents/${agent.slug}`}
      className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
          {agent.name}
        </h3>
        <CategoryBadge category={agent.category} />
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
        {agent.description}
      </p>
      {crossRef && (
        <p className="mt-3 text-xs text-green-700 dark:text-green-400">
          <span className="font-medium">{crossRef.label}:</span>{" "}
          {crossRef.refs.join(", ")}
        </p>
      )}
    </Link>
  );
}

function SubAgentsPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Agent["category"] | "all">(() =>
    getInitialCategory(categoryParam)
  );

  const subAgents = useMemo(() => {
    return manifest.agents.filter((agent) => agent.mode === "subagent");
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<Agent["category"], number> = {
      critics: 0,
      developers: 0,
      testers: 0,
      orchestrators: 0,
      utilities: 0,
    };
    subAgents.forEach((agent) => {
      counts[agent.category]++;
    });
    return counts;
  }, [subAgents]);

  const filteredAgents = useMemo(() => {
    return subAgents.filter((agent) => {
      // Filter by search
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesName = agent.name.toLowerCase().includes(searchLower);
        const matchesDescription = agent.description.toLowerCase().includes(searchLower);
        if (!matchesName && !matchesDescription) return false;
      }

      // Filter by category
      if (selectedCategory !== "all" && agent.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [subAgents, search, selectedCategory]);

  const groupedAgents = useMemo(() => {
    const groups: Record<Agent["category"], Agent[]> = {
      critics: [],
      developers: [],
      testers: [],
      orchestrators: [],
      utilities: [],
    };

    filteredAgents.forEach((agent) => {
      groups[agent.category].push(agent);
    });

    // Sort each group alphabetically
    Object.values(groups).forEach((group) => {
      group.sort((a, b) => a.name.localeCompare(b.name));
    });

    return groups;
  }, [filteredAgents]);

  const categoryOrder: Agent["category"][] = ["critics", "developers", "testers", "orchestrators", "utilities"];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
              Sub-Agents
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <VersionBadge version={manifest.version} />
              <LastSyncedTimestamp timestamp={manifest.generatedAt} />
            </div>
          </div>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-400">
            Specialized workers that handle specific tasks. Primary agents delegate work to these sub-agents based on what needs to be done.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <Link
              href="/reference/agents/primary"
              className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
            >
              <span className="text-2xl font-semibold text-neutral-600 dark:text-neutral-400">
                {manifest.counts.primaryAgents}
              </span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                ← Primary Agents
              </span>
            </Link>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-800">
              <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                {subAgents.length}
              </span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Sub-Agents
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-t border-neutral-200 px-6 py-6 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1 sm:max-w-md">
              <input
                type="text"
                placeholder="Search sub-agents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 pl-10 text-sm text-neutral-900 placeholder-neutral-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-400 dark:focus:border-violet-500"
              />
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Agent["category"] | "all")}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            >
              <option value="all">All categories</option>
              <option value="critics">Critics ({categoryCounts.critics})</option>
              <option value="developers">Developers ({categoryCounts.developers})</option>
              <option value="testers">Testers ({categoryCounts.testers})</option>
              <option value="orchestrators">Orchestrators ({categoryCounts.orchestrators})</option>
              <option value="utilities">Utilities ({categoryCounts.utilities})</option>
            </select>
          </div>

          {/* Results count */}
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Showing {filteredAgents.length} of {subAgents.length} sub-agents
          </p>
        </div>
      </section>

      {/* Agent List */}
      <section className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {selectedCategory === "all" ? (
            // Grouped view
            <div className="space-y-12">
              {categoryOrder.map((category) => {
                const agents = groupedAgents[category];
                if (agents.length === 0) return null;

                return (
                  <div key={category}>
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                        {CATEGORY_LABELS[category]}{" "}
                        <span className="text-neutral-500 dark:text-neutral-400">
                          ({agents.length})
                        </span>
                      </h2>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {CATEGORY_DESCRIPTIONS[category]}
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {agents.map((agent) => (
                        <AgentCard key={agent.slug} agent={agent} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : selectedCategory === "testers" ? (
            // Grouped view for testers category
            <div className="space-y-10">
              {/* Link to Testing Concepts page */}
              <Link
                href="/concepts/testing"
                className="inline-flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 transition-colors hover:bg-green-100 dark:border-green-800 dark:bg-green-950 dark:text-green-200 dark:hover:bg-green-900"
              >
                <span>📖</span>
                <span>Learn about the testing system architecture →</span>
              </Link>

              {TESTER_GROUP_ORDER.map((groupKey) => {
                const group = TESTER_GROUPS[groupKey];
                const groupAgents = filteredAgents.filter((agent) =>
                  group.slugs.includes(agent.slug)
                );
                if (groupAgents.length === 0) return null;

                return (
                  <div key={groupKey}>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        {group.label}{" "}
                        <span className="text-neutral-500 dark:text-neutral-400">
                          ({groupAgents.length})
                        </span>
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {group.description}
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {groupAgents.map((agent) => (
                        <AgentCard key={agent.slug} agent={agent} showCrossRefs />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Flat view for other single categories
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAgents.map((agent) => (
                <AgentCard key={agent.slug} agent={agent} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {filteredAgents.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No sub-agents found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("all");
                }}
                className="mt-4 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Understanding Sub-Agents CTA */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            How sub-agents work
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Sub-agents are specialists. They&apos;re invoked by primary agents when specific expertise is needed &mdash; 
            code review, testing, documentation, and more.
          </p>
          <Link
            href="/concepts/agents#sub-agents"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
          >
            Learn about sub-agents
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function SubAgentsPage() {
  return (
    <Suspense fallback={<SubAgentsPageSkeleton />}>
      <SubAgentsPageContent />
    </Suspense>
  );
}

function SubAgentsPageSkeleton() {
  return (
    <main className="min-h-screen">
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="h-5 w-24 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <div className="h-12 w-48 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mt-4 h-6 w-96 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </section>
    </main>
  );
}
