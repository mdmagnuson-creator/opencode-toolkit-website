import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { manifest, getSkillCategory } from "@/data";
import type { Skill, SkillCategory } from "@/data/types";
import { SkillContent } from "./SkillContent";
import { SkillAvatar } from "@/components/SkillAvatar";
import { resolveContent } from "@/lib/content-resolver";
import { DownloadMarkdownButton } from "@/components/DownloadMarkdownButton";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { ViewSourceLink } from "@/components/ViewSourceLink";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  workflow: "Workflow",
  content: "Content",
  project: "Project",
  meta: "Meta",
  utilities: "Utilities",
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

// Generate static params for all skills
export function generateStaticParams() {
  return manifest.skills.map((skill) => ({
    slug: skill.slug,
  }));
}

// Generate metadata for each skill page
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const skill = manifest.skills.find((s) => s.slug === slug);
    if (!skill) {
      return { title: "Skill Not Found" };
    }
    return {
      title: `${skill.name} | Yo Go`,
      description: skill.description,
    };
  });
}

function getRelatedSkills(skill: Skill): Skill[] {
  // Get other skills in the same category, excluding current skill
  const skillCategory = getSkillCategory(skill);
  return manifest.skills
    .filter((s) => getSkillCategory(s) === skillCategory && s.slug !== skill.slug)
    .slice(0, 3);
}

// Get adjacent skills for prev/next navigation
// Order: Alphabetically by name within each category
function getAdjacentSkills(skill: Skill): { prev: Skill | null; next: Skill | null } {
  const sortedSkills = [...manifest.skills].sort((a, b) => a.name.localeCompare(b.name));

  const currentIndex = sortedSkills.findIndex((s) => s.slug === skill.slug);
  
  return {
    prev: currentIndex > 0 ? sortedSkills[currentIndex - 1] : null,
    next: currentIndex < sortedSkills.length - 1 ? sortedSkills[currentIndex + 1] : null,
  };
}

// Generate breadcrumb items for the skill
function getBreadcrumbItems(skill: Skill, category: SkillCategory) {
  return [
    { name: "Home", href: "/" },
    { name: "Reference", href: "/reference" },
    { name: "Skills", href: "/reference/skills" },
    { name: CATEGORY_LABELS[category], href: `/reference/skills?category=${category}` },
    { name: skill.name, href: `/reference/skills/${skill.slug}` },
  ];
}

// Get the toolkit path for a skill
function getSkillPath(skill: Skill): string {
  if (skill.isMeta) {
    return `skills/meta/${skill.slug}/SKILL.md`;
  }
  return `skills/${skill.slug}/SKILL.md`;
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = manifest.skills.find((s) => s.slug === slug);

  if (!skill) {
    notFound();
  }

  const category = getSkillCategory(skill);
  const relatedSkills = getRelatedSkills(skill);
  const categoryColors = CATEGORY_COLORS[category];
  const breadcrumbItems = getBreadcrumbItems(skill, category);
  const { prev, next } = getAdjacentSkills(skill);
  const skillPath = getSkillPath(skill);

  // Resolve content from manifest, local toolkit, or GitHub
  const resolvedContent = await resolveContent("skill", slug, skill.content);
  const hasSkillContent = resolvedContent.trim().length > 0;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-12 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="flex items-center gap-2">
              <ViewSourceLink type="skill" slug={slug} isMeta={skill.isMeta} />
              <CopyLinkButton />
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            {/* Skill Avatar */}
            <SkillAvatar skill={skill} size="xl" className="shrink-0" />

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
                  {skill.name}
                </h1>
                <div className="flex items-center gap-2 pt-2">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${categoryColors.bg} ${categoryColors.text}`}
                  >
                    {CATEGORY_LABELS[category]}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-lg leading-7 text-neutral-700 dark:text-neutral-400">
                {skill.description}
              </p>

              {/* Skill Path */}
              <div className="mt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Toolkit Path
                </h2>
                <div className="mt-2">
                  <code className="inline-flex items-center rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-mono text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {skillPath}
                  </code>
                </div>
              </div>

              {/* Triggers */}
              {skill.triggers.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Trigger Phrases
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {skill.triggers.map((trigger, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-lg bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        &ldquo;{trigger}&rdquo;
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                    Say any of these phrases to load this skill.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Content */}
      {hasSkillContent && (
        <section className="border-t border-neutral-200 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 dark:border-neutral-800">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex justify-end">
              <DownloadMarkdownButton
                content={resolvedContent}
                filename={`${slug}.md`}
              />
            </div>
            <SkillContent content={resolvedContent} />
          </div>
        </section>
      )}

      {/* Related Skills */}
      {relatedSkills.length > 0 && (
        <section className="border-t border-neutral-200 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 dark:border-neutral-800">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Related {CATEGORY_LABELS[category]} Skills
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedSkills.map((related) => (
                <Link
                  key={related.slug}
                  href={`/reference/skills/${related.slug}`}
                  className="group block rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
                >
                  <h3 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
                    {related.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Previous/Next Navigation */}
      {(prev || next) && (
        <section className="border-t border-neutral-200 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 dark:border-neutral-800">
          <div className="mx-auto max-w-4xl">
            <nav className="flex items-stretch justify-between gap-4" aria-label="Skill navigation">
              {/* Previous Skill */}
              {prev ? (
                <Link
                  href={`/reference/skills/${prev.slug}`}
                  className="group flex flex-1 flex-col items-start rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
                >
                  <span className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                    <ChevronLeftIcon className="h-4 w-4" />
                    Previous
                  </span>
                  <span className="mt-1 font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
                    {prev.name}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {/* Next Skill */}
              {next ? (
                <Link
                  href={`/reference/skills/${next.slug}`}
                  className="group flex flex-1 flex-col items-end rounded-xl border border-neutral-200 bg-white p-4 text-right transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
                >
                  <span className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                    Next
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                  <span className="mt-1 font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
                    {next.name}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </nav>
          </div>
        </section>
      )}
    </main>
  );
}
