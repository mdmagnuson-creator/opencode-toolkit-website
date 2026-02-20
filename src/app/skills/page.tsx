"use client";

import { useState, useMemo } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { manifest } from "@/data";
import type { Skill } from "@/data/types";

function SkillTypeBadge({ isMeta }: { isMeta: boolean }) {
  if (isMeta) {
    return (
      <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-950 dark:text-purple-200">
        Meta-Skill
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200">
      Skill
    </span>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
          {skill.name}
        </h3>
        <SkillTypeBadge isMeta={skill.isMeta} />
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

export default function SkillsPage() {
  const [search, setSearch] = useState("");
  const [skillType, setSkillType] = useState<"all" | "regular" | "meta">("all");

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

      // Filter by type
      if (skillType === "regular" && skill.isMeta) return false;
      if (skillType === "meta" && !skill.isMeta) return false;

      return true;
    });
  }, [search, skillType]);

  const regularSkills = useMemo(
    () => filteredSkills.filter((s) => !s.isMeta).sort((a, b) => a.name.localeCompare(b.name)),
    [filteredSkills]
  );

  const metaSkills = useMemo(
    () => filteredSkills.filter((s) => s.isMeta).sort((a, b) => a.name.localeCompare(b.name)),
    [filteredSkills]
  );

  const regularCount = manifest.skills.filter((s) => !s.isMeta).length;
  const metaCount = manifest.skills.filter((s) => s.isMeta).length;

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
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
                Skills
              </h1>
              <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-400">
                Browse all {manifest.counts.skills} skills in the toolkit.{" "}
                <span className="text-blue-600 dark:text-blue-400">{regularCount} core skills</span>{" "}
                and{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  {metaCount} meta-skills
                </span>{" "}
                that generate project-specific patterns.
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

            {/* Type filter */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={skillType}
                onChange={(e) => setSkillType(e.target.value as "all" | "regular" | "meta")}
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                <option value="all">All skills ({manifest.counts.skills})</option>
                <option value="regular">Core skills ({regularCount})</option>
                <option value="meta">Meta-skills ({metaCount})</option>
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
          {skillType === "all" ? (
            // Grouped view
            <div className="space-y-12">
              {/* Core Skills */}
              {regularSkills.length > 0 && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                      Core Skills{" "}
                      <span className="text-neutral-500 dark:text-neutral-400">
                        ({regularSkills.length})
                      </span>
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Reusable instruction sets that agents load on-demand for specific tasks.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {regularSkills.map((skill) => (
                      <SkillCard key={skill.slug} skill={skill} />
                    ))}
                  </div>
                </div>
              )}

              {/* Meta Skills */}
              {metaSkills.length > 0 && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                      Meta-Skills{" "}
                      <span className="text-neutral-500 dark:text-neutral-400">
                        ({metaSkills.length})
                      </span>
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Skills that generate project-specific skills based on your stack and
                      configuration.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {metaSkills.map((skill) => (
                      <SkillCard key={skill.slug} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Flat view
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSkills.map((skill) => (
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
                  setSkillType("all");
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
            Learn how skills work, when they&apos;re loaded, and the difference between core
            skills and meta-skills.
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
