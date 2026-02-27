"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LastSyncedTimestamp } from "@/components/LastSyncedTimestamp";
import { VersionBadge } from "@/components/VersionBadge";
import Link from "next/link";
import { manifest } from "@/data";
import type { Agent } from "@/data/types";

// Valid categories for filtering
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
  testers: "Write and run tests for different parts of your codebase.",
  orchestrators: "Coordinate other agents and manage workflows.",
  utilities: "Standalone tools for debugging, cleanup, and documentation.",
};

const CATEGORY_COLORS: Record<Agent["category"], { bg: string; text: string; border: string }> = {
  critics: {
    bg: "bg-amber-100 dark:bg-amber-950",
    text: "text-amber-800 dark:text-amber-200",
    border: "border-amber-200 dark:border-amber-800",
  },
  developers: {
    bg: "bg-blue-100 dark:bg-blue-950",
    text: "text-blue-800 dark:text-blue-200",
    border: "border-blue-200 dark:border-blue-800",
  },
  testers: {
    bg: "bg-green-100 dark:bg-green-950",
    text: "text-green-800 dark:text-green-200",
    border: "border-green-200 dark:border-green-800",
  },
  orchestrators: {
    bg: "bg-purple-100 dark:bg-purple-950",
    text: "text-purple-800 dark:text-purple-200",
    border: "border-purple-200 dark:border-purple-800",
  },
  utilities: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
    border: "border-slate-200 dark:border-slate-700",
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

function ModeBadge({ mode }: { mode: Agent["mode"] }) {
  if (mode === "primary") {
    return (
      <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-950 dark:text-violet-200">
        Primary
      </span>
    );
  }
  return null;
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/reference/agents/${agent.slug}`}
      className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
          {agent.name}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          <ModeBadge mode={agent.mode} />
          <CategoryBadge category={agent.category} />
        </div>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
        {agent.description}
      </p>
    </Link>
  );
}

function PrimaryAgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/reference/agents/${agent.slug}`}
      className="group block rounded-xl border-2 border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 transition-all hover:border-violet-300 hover:shadow-lg dark:border-violet-800 dark:from-violet-950/50 dark:to-neutral-900 dark:hover:border-violet-700"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
          {agent.name}
        </h3>
        <span className="inline-flex shrink-0 items-center rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">
          Primary
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
        {agent.description}
      </p>
    </Link>
  );
}

function AgentsPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Agent["category"] | "all">(() =>
    getInitialCategory(categoryParam)
  );
  const [showPrimaryOnly, setShowPrimaryOnly] = useState(false);

  const filteredAgents = useMemo(() => {
    return manifest.agents.filter((agent) => {
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

      // Filter by primary only
      if (showPrimaryOnly && agent.mode !== "primary") {
        return false;
      }

      return true;
    });
  }, [search, selectedCategory, showPrimaryOnly]);

  // Primary agents for the special section
  const primaryAgents = useMemo(() => {
    return manifest.agents
      .filter((agent) => agent.mode === "primary")
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

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

  // Check if we should show the primary section (not filtering by category or primary only)
  const showPrimarySection = selectedCategory === "all" && !showPrimaryOnly;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
                  Agents
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <VersionBadge version={manifest.version} />
                  <LastSyncedTimestamp timestamp={manifest.generatedAt} />
                </div>
              </div>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-400">
                Browse all {manifest.counts.agents} agents in the toolkit.{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  {manifest.counts.primaryAgents} primary agents
                </span>{" "}
                and{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {manifest.counts.subagents} specialized sub-agents
                </span>
                .
              </p>
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
                placeholder="Search agents..."
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

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Agent["category"] | "all")}
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                <option value="all">All categories</option>
                <option value="critics">Critics ({manifest.categories.critics})</option>
                <option value="developers">Developers ({manifest.categories.developers})</option>
                <option value="testers">Testers ({manifest.categories.testers})</option>
                <option value="orchestrators">Orchestrators ({manifest.categories.orchestrators})</option>
                <option value="utilities">Utilities ({manifest.categories.utilities})</option>
              </select>

              {/* Primary only toggle */}
              <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <input
                  type="checkbox"
                  checked={showPrimaryOnly}
                  onChange={(e) => setShowPrimaryOnly(e.target.checked)}
                  className="h-4 w-4 rounded border-neutral-300 text-violet-600 focus:ring-violet-500 dark:border-neutral-600 dark:bg-neutral-800"
                />
                Primary only
              </label>
            </div>
          </div>

          {/* Results count */}
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Showing {filteredAgents.length} of {manifest.counts.agents} agents
          </p>
        </div>
      </section>

      {/* Agent List */}
      <section className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {selectedCategory === "all" ? (
            // Grouped view
            <div className="space-y-12">
              {/* Primary Agents Section */}
              {showPrimarySection && primaryAgents.length > 0 && (
                <div>
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                        Primary Agents
                      </h2>
                      <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-950 dark:text-violet-200">
                        Core
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      The main orchestrators that drive the agent system. Start here.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {primaryAgents.map((agent) => (
                      <PrimaryAgentCard key={agent.slug} agent={agent} />
                    ))}
                  </div>
                </div>
              )}

              {/* Category Groups */}
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
          ) : (
            // Flat view for single category
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
                No agents found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("all");
                  setShowPrimaryOnly(false);
                }}
                className="mt-4 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Understanding Agents CTA */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            New to agents?
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Learn how agents work, the difference between primary and sub-agents, and how they
            communicate with each other.
          </p>
          <Link
            href="/concepts/agents"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
          >
            Understanding Agents
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function AgentsPage() {
  return (
    <Suspense fallback={<AgentsPageSkeleton />}>
      <AgentsPageContent />
    </Suspense>
  );
}

function AgentsPageSkeleton() {
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
