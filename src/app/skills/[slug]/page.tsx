import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { manifest } from "@/data";
import type { Skill } from "@/data/types";
import { SkillContent } from "./SkillContent";
import { SkillAvatar } from "@/components/SkillAvatar";
import { resolveContent } from "@/lib/content-resolver";
import { DownloadMarkdownButton } from "@/components/DownloadMarkdownButton";

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
  // Get other skills of the same type (meta or regular)
  return manifest.skills
    .filter((s) => s.isMeta === skill.isMeta && s.slug !== skill.slug)
    .slice(0, 3);
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

  const relatedSkills = getRelatedSkills(skill);

  // Resolve content from manifest, local toolkit, or GitHub
  const resolvedContent = await resolveContent("skill", slug, skill.content);
  const hasSkillContent = resolvedContent.trim().length > 0;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-12 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <Breadcrumbs />
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            {/* Skill Avatar */}
            <SkillAvatar skill={skill} size="xl" className="shrink-0" />

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
                  {skill.name}
                </h1>
                {skill.isMeta ? (
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-950 dark:text-purple-200">
                    Meta-Skill
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                    Skill
                  </span>
                )}
              </div>

              <p className="mt-4 text-lg leading-7 text-neutral-700 dark:text-neutral-400">
                {skill.description}
              </p>

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
              Related {skill.isMeta ? "Meta-Skills" : "Skills"}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedSkills.map((related) => (
                <Link
                  key={related.slug}
                  href={`/skills/${related.slug}`}
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
    </main>
  );
}
