"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LastSyncedTimestamp } from "@/components/LastSyncedTimestamp";
import { VersionBadge } from "@/components/VersionBadge";
import Link from "next/link";
import { manifest, getSkillCategory, getSkillCategoryCounts } from "@/data";
import type { Skill, SkillCategory } from "@/data/types";

// Valid categories for filtering
const VALID_CATEGORIES: SkillCategory[] = ["workflow", "content", "project", "meta", "utilities"];

// Category display configuration
const CATEGORY_LABELS: Record<SkillCategory, string> = {
  workflow: "Workflow",
  content: "Content",
  project: "Project",
  meta: "Meta",
  utilities: "Utilities",
};

const CATEGORY_DESCRIPTIONS: Record<SkillCategory, string> = {
  workflow: "Skills that define build and development workflows",
  content: "Skills for generating marketing copy, documentation, and support articles",
  project: "Skills for project setup, bootstrapping, and configuration",
  meta: "Skills that generate other skills (meta-skills)",
  utilities: "Utility skills for screenshots, CVE checking, and other tools",
};

const CATEGORY_COLORS: Record<SkillCategory, { bg: string; text: string }> = {
  workflow: {
    bg: "bg-violet-100 dark:bg-violet-950",
    text: "text-violet-800 dark:text-violet-200",
  },
  content: {
    bg: "bg-emerald-100 dark:bg-emerald-950",
    text: "text-emerald-800 dark:text-emerald-200",
  },
  project: {
    bg: "bg-blue-100 dark:bg-blue-950",
    text: "text-blue-800 dark:text-blue-200",
  },
  meta: {
    bg: "bg-purple-100 dark:bg-purple-950",
    text: "text-purple-800 dark:text-purple-200",
  },
  utilities: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
};

function getInitialCategory(param: string | null): SkillCategory | "all" {
  if (!param) return "all";

  // Check if it's a valid category
  if (VALID_CATEGORIES.includes(param as SkillCategory)) {
    return param as SkillCategory;
  }

  // Legacy aliases for backwards compatibility
  if (param === "regular") return "all"; // Old filter
  if (param === "meta") return "meta";

  return "all";
}

function CategoryBadge({ category }: { category: SkillCategory }) {
  const colors = CATEGORY_COLORS[category];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const category = getSkillCategory(skill);

  return (
    <Link
      href={`/reference/skills/${skill.slug}`}
      className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
          {skill.name}
        </h3>
        <CategoryBadge category={category} />
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
        {skill.description}
      </p>
      {skill.triggers.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500">
            Triggers:
          </p>
          <div className="mt-1 flex flex-wrap gap-1">
            {skill.triggers.slice(0, 3).map((trigger, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {trigger}
              </span>
            ))}
            {skill.triggers.length > 3 && (
              <span className="text-xs text-neutral-500 dark:text-neutral-500">
                +{skill.triggers.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}

export function SkillsPageContent() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  // Get initial category from URL params
  const categoryParam = searchParams.get("category") || searchParams.get("type");
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">(() =>
    getInitialCategory(categoryParam)
  );

  // Get skill category counts
  const categoryCounts = useMemo(() => getSkillCategoryCounts(), []);

  const filteredSkills = useMemo(() => {
    return manifest.skills.filter((skill) => {
      // Filter by search
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesName = skill.name.toLowerCase().includes(searchLower);
        const matchesDescription = skill.description.toLowerCase().includes(searchLower);
        const matchesTriggers = skill.triggers.some((t) =>
          t.toLowerCase().includes(searchLower)
        );
        if (!matchesName && !matchesDescription && !matchesTriggers) return false;
      }

      // Filter by category
      if (selectedCategory !== "all") {
        const skillCategory = getSkillCategory(skill);
        if (skillCategory !== selectedCategory) return false;
      }

      return true;
    });
  }, [search, selectedCategory]);

  // Group filtered skills by category
  const groupedSkills = useMemo(() => {
    const groups: Record<SkillCategory, Skill[]> = {
      workflow: [],
      content: [],
      project: [],
      meta: [],
      utilities: [],
    };

    filteredSkills.forEach((skill) => {
      const category = getSkillCategory(skill);
      groups[category].push(skill);
    });

    // Sort each group alphabetically
    Object.values(groups).forEach((group) => {
      group.sort((a, b) => a.name.localeCompare(b.name));
    });

    return groups;
  }, [filteredSkills]);

  const categoryOrder: SkillCategory[] = ["workflow", "content", "project", "meta", "utilities"];

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
                  Skills
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <VersionBadge version={manifest.version} />
                  <LastSyncedTimestamp timestamp={manifest.generatedAt} />
                </div>
              </div>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-400">
                Browse all {manifest.counts.skills} skills in the toolkit.{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  {categoryCounts.workflow} workflow
                </span>
                ,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {categoryCounts.content} content
                </span>
                ,{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {categoryCounts.project} project
                </span>
                ,{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  {categoryCounts.meta} meta
                </span>
                , and{" "}
                <span className="text-slate-600 dark:text-slate-400">
                  {categoryCounts.utilities} utility
                </span>{" "}
                skills.
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
                placeholder="Search skills or triggers..."
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
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as SkillCategory | "all")}
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                <option value="all">All categories ({manifest.counts.skills})</option>
                <option value="workflow">Workflow ({categoryCounts.workflow})</option>
                <option value="content">Content ({categoryCounts.content})</option>
                <option value="project">Project ({categoryCounts.project})</option>
                <option value="meta">Meta ({categoryCounts.meta})</option>
                <option value="utilities">Utilities ({categoryCounts.utilities})</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Showing {filteredSkills.length} of {manifest.counts.skills} skills
          </p>
        </div>
      </section>

      {/* Skills List */}
      <section className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {selectedCategory === "all" ? (
            // Grouped view by category
            <div className="space-y-12">
              {categoryOrder.map((category) => {
                const skills = groupedSkills[category];
                if (skills.length === 0) return null;

                return (
                  <div key={category}>
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                        {CATEGORY_LABELS[category]}{" "}
                        <span className="text-neutral-500 dark:text-neutral-400">
                          ({skills.length})
                        </span>
                      </h2>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {CATEGORY_DESCRIPTIONS[category]}
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {skills.map((skill) => (
                        <SkillCard key={skill.slug} skill={skill} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Flat view for single category
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSkills
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((skill) => (
                  <SkillCard key={skill.slug} skill={skill} />
                ))}
            </div>
          )}

          {/* Empty state */}
          {filteredSkills.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No skills found matching your filters.
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

      {/* Understanding Skills CTA */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            New to skills?
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Learn how skills work, when they&apos;re loaded, and how they help agents perform
            specialized tasks.
          </p>
          <Link
            href="/concepts/skills"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
          >
            Understanding Skills
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
