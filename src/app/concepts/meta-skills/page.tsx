import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";
import { getMetaSkills } from "@/data";

const PAGE_SECTIONS = [
  { id: "what-makes-different", label: "What Makes Meta-Skills Different" },
  { id: "how-they-work", label: "How Meta-Skills Work" },
  { id: "available-meta-skills", label: "Available Meta-Skills" },
  { id: "when-to-use", label: "When to Use Meta-Skills" },
];

export const metadata = {
  title: "Meta-Skills | yo, go",
  description: "Meta-skills generate project-specific patterns based on your stack and configuration.",
};

export default function MetaSkillsConceptPage() {
  const metaSkills = getMetaSkills();

  return (
    <main className="min-h-screen">
      {/* On This Page Navigation */}
      <OnThisPageNav sections={PAGE_SECTIONS} />

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Understanding Meta-Skills
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Meta-skills are a special category of skills that <strong>generate project-specific skills</strong> based on your tech stack and configuration. Instead of providing generic instructions, they analyze your project and create tailored workflows.
          </p>
        </div>
      </section>

      {/* What Makes Meta-Skills Different */}
      <section id="what-makes-different" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            What Makes Meta-Skills Different
          </h2>
          
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Regular Skills */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Project Skills
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neutral-400">•</span>
                  <span>Generic workflows that work for any project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neutral-400">•</span>
                  <span>Loaded and executed immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neutral-400">•</span>
                  <span>Examples: PRD creation, merge conflicts, screenshots</span>
                </li>
              </ul>
            </div>

            {/* Meta-Skills */}
            <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                  Meta-Skills
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-purple-800 dark:text-purple-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600 dark:text-purple-400">•</span>
                  <span>Generate project-specific skills tailored to your stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600 dark:text-purple-400">•</span>
                  <span>Analyze your project.json and codebase first</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600 dark:text-purple-400">•</span>
                  <span>Output: A custom skill file saved to your project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Meta-Skills Work */}
      <section id="how-they-work" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            How Meta-Skills Work
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            When you invoke a meta-skill, it goes through a generation process:
          </p>

          <div className="mt-8 space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Read Project Configuration
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  The meta-skill reads your <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">project.json</code> to understand your tech stack — database type, authentication method, API patterns, UI framework, etc.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Analyze Existing Patterns
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  It examines your existing codebase to understand how you&apos;ve implemented similar patterns before — your naming conventions, file organization, and coding style.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Ask Clarifying Questions
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  If there are ambiguities or choices to be made, the meta-skill will ask you questions to ensure the generated skill matches your preferences.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Generate Tailored Skill
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  Finally, it generates a customized skill file and saves it to <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">docs/skills/</code> in your project. This skill can then be used by any agent working on your project.
                </p>
              </div>
            </div>
          </div>

          {/* Example output */}
          <div className="mt-8 rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950/50">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100">
              Example: auth-skill-generator
            </h4>
            <p className="mt-2 text-sm text-purple-800 dark:text-purple-200">
              If your project uses Supabase Auth with Next.js App Router, the auth-skill-generator might create:
            </p>
            <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
              <div className="text-neutral-500"># docs/skills/auth-flow/SKILL.md</div>
              <div className="mt-2">
                <span className="text-purple-400">## Authentication Patterns</span>
              </div>
              <div className="mt-1 text-neutral-400">
                - Use `createServerClient()` from @supabase/ssr<br />
                - Protect routes with middleware at `middleware.ts`<br />
                - Store session in cookies, not localStorage<br />
                - Redirect to /login on 401...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Meta-Skills */}
      <section id="available-meta-skills" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Available Meta-Skills ({metaSkills.length})
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            These meta-skills can generate project-specific patterns for your codebase:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {metaSkills.map((skill) => (
              <Link
                key={skill.slug}
                href={`/reference/skills/${skill.slug}`}
                className="group rounded-xl border border-purple-200 bg-purple-50 p-5 transition-all hover:border-purple-300 hover:shadow-md dark:border-purple-800 dark:bg-purple-950/50 dark:hover:border-purple-700"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded bg-purple-200 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-800 dark:text-purple-200">
                    meta
                  </span>
                  <h3 className="font-semibold text-purple-900 group-hover:text-purple-700 dark:text-purple-100 dark:group-hover:text-purple-50">
                    {skill.name}
                  </h3>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-purple-700 dark:text-purple-300">
                  {skill.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use Meta-Skills */}
      <section id="when-to-use" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            When to Use Meta-Skills
          </h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                ✅ New project setup
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                After bootstrapping a project, run relevant meta-skills to generate patterns for your stack.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                ✅ Adding new capabilities
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                When you add authentication, payments, or email to your project, generate the corresponding skill.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                ✅ Onboarding new team members
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Generated skills document your project&apos;s patterns, helping new developers understand conventions.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                ✅ Ensuring consistency
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Skills encode your patterns so agents follow them consistently across the codebase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Ready to generate skills for your project?
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Browse the available meta-skills and start generating project-specific patterns.
          </p>
          <Link
            href="/reference/skills?type=meta"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-700"
          >
            Browse Meta-Skills
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
