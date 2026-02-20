"use client";

import { useState, useMemo } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { manifest } from "@/data";
import type { Agent } from "@/data/types";

const CATEGORY_LABELS: Record<Agent["category"], string> = {
  critics: "Critics",
  developers: "Developers",
  testers: "Testers",
  other: "Other",
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
      className="group block rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-violet-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-violet-600"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
              {agent.name}
            </h3>
            <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-950 dark:text-violet-200">
              Primary
            </span>
          </div>
          <CategoryBadge category={agent.category} />
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {agent.description}
      </p>
    </Link>
  );
}

export default function PrimaryAgentsPage() {
  const [search, setSearch] = useState("");

  const primaryAgents = useMemo(() => {
    return manifest.agents.filter((agent) => agent.mode === "primary");
  }, []);

  const filteredAgents = useMemo(() => {
    if (!search) return primaryAgents;
    
    const searchLower = search.toLowerCase();
    return primaryAgents.filter((agent) => {
      const matchesName = agent.name.toLowerCase().includes(searchLower);
      const matchesDescription = agent.description.toLowerCase().includes(searchLower);
      return matchesName || matchesDescription;
    });
  }, [primaryAgents, search]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Primary Agents
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-400">
            Entry points to the agent system. These are the agents you invoke directly &mdash; they orchestrate sub-agents to complete complex tasks.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-800">
              <span className="text-2xl font-semibold text-violet-600 dark:text-violet-400">
                {primaryAgents.length}
              </span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Primary Agents
              </span>
            </div>
            <Link
              href="/agents/sub"
              className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
            >
              <span className="text-2xl font-semibold text-neutral-600 dark:text-neutral-400">
                {manifest.counts.subagents}
              </span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Sub-Agents →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="border-t border-neutral-200 px-6 py-6 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search primary agents..."
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
        </div>
      </section>

      {/* Agent List */}
      <section className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.slug} agent={agent} />
            ))}
          </div>

          {/* Empty state */}
          {filteredAgents.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No primary agents found matching &ldquo;{search}&rdquo;.
              </p>
              <button
                onClick={() => setSearch("")}
                className="mt-4 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How Primary Agents Work */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            How Primary Agents Work
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800/50">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                User-Invoked
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                You start conversations with primary agents directly. They understand your intent and break down complex tasks.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800/50">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                Orchestrators
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Primary agents delegate specialized work to sub-agents, coordinating the overall workflow.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800/50">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                Context Aware
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                They read your project configuration and conventions, then pass relevant context to sub-agents.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800/50">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                Quality Gates
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                They run tests, linting, and type checking before completing work to ensure quality.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/concepts/agents"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
            >
              Learn more about agents
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
