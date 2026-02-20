"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { manifest } from "@/data";
import type { Agent } from "@/data/types";

const VALID_CATEGORIES: Agent["category"][] = ["critics", "developers", "testers", "other"];

function getInitialCategory(param: string | null): Agent["category"] | "all" {
  if (param && VALID_CATEGORIES.includes(param as Agent["category"])) {
    return param as Agent["category"];
  }
  return "all";
}

const CATEGORY_LABELS: Record<Agent["category"], string> = {
  critics: "Critics",
  developers: "Developers",
  testers: "Testers",
  other: "Other",
};

const CATEGORY_DESCRIPTIONS: Record<Agent["category"], string> = {
  critics: "Review code for specific concerns — security, performance, accessibility, and more.",
  developers: "Write code in specific languages or frameworks.",
  testers: "Write and run tests for different parts of your codebase.",
  other: "Specialized agents for workflows, orchestration, and utilities.",
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
  other: {
    bg: "bg-purple-100 dark:bg-purple-950",
    text: "text-purple-800 dark:text-purple-200",
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

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/agents/${agent.slug}`}
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
      other: 0,
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
      other: [],
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

  const categoryOrder: Agent["category"][] = ["critics", "developers", "testers", "other"];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Sub-Agents
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-400">
            Specialized workers that handle specific tasks. Primary agents delegate work to these sub-agents based on what needs to be done.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <Link
              href="/agents/primary"
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
              <option value="other">Other ({categoryCounts.other})</option>
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
