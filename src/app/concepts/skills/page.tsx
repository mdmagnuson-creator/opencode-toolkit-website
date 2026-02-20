import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getRegularSkills } from "@/data";

export default function SkillsConceptPage() {
  const regularSkills = getRegularSkills();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Understanding Project Skills
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Skills are loadable instruction sets that give agents specialized
            knowledge for complex, multi-step workflows. Unlike agents, skills
            are loaded on-demand—activated when needed, not always running.
          </p>

          {/* Meta-skills callout */}
          <div className="mt-8 rounded-xl border-2 border-purple-200 bg-purple-50 p-5 dark:border-purple-800 dark:bg-purple-950/50">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 dark:text-purple-100">
                  Looking for Meta-Skills?
                </h3>
                <p className="mt-1 text-sm text-purple-800 dark:text-purple-200">
                  Meta-skills are a special category that <strong>generate project-specific skills</strong> based on your stack.
                </p>
                <Link
                  href="/concepts/meta-skills"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-100"
                >
                  Learn about Meta-Skills
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills vs Agents */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Skills vs Agents
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            While both provide AI capabilities, they serve different purposes:
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Agents */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Agents
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neutral-400">•</span>
                  <span>Autonomous entities that take actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neutral-400">•</span>
                  <span>Have their own system prompts and personalities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neutral-400">•</span>
                  <span>Invoked via <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">@agent</code> or Task tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-neutral-400">•</span>
                  <span>Run in separate sessions with fresh context</span>
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                  Skills
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-green-800 dark:text-green-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600 dark:text-green-400">•</span>
                  <span>Instruction sets that augment agent capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600 dark:text-green-400">•</span>
                  <span>Provide step-by-step workflows for specific tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600 dark:text-green-400">•</span>
                  <span>Loaded into the current session when triggered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600 dark:text-green-400">•</span>
                  <span>Can include bundled scripts and templates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              <strong>Think of it this way:</strong> An agent is like a specialist
              you hire. A skill is like a detailed recipe that specialist follows
              for a particular task.
            </p>
          </div>
        </div>
      </section>

      {/* When Skills Are Loaded */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            When Skills Are Loaded
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Skills are loaded dynamically based on context or explicit triggers:
          </p>

          <div className="mt-8 space-y-6">
            {/* Trigger phrases */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Trigger Phrases
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  Each skill defines trigger phrases that activate it. When the agent
                  detects these phrases in your request, it loads the relevant skill.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    &ldquo;create a prd&rdquo;
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    &ldquo;fix merge conflicts&rdquo;
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    &ldquo;take screenshot&rdquo;
                  </span>
                </div>
              </div>
            </div>

            {/* Context-aware loading */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Context-Aware Loading
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  Some skills are loaded automatically based on what the agent encounters.
                  When resolving merge conflicts, the merge-conflicts skill is automatically available.
                </p>
              </div>
            </div>

            {/* Explicit invocation */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Explicit Loading
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  Agents can explicitly load skills using the Skill tool when they need
                  specialized instructions for a task.
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-purple-400">skill</span>(name: <span className="text-green-400">&quot;prd&quot;</span>)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Skills */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Available Skills ({regularSkills.length})
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            These skills provide specialized workflows for common development tasks:
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {regularSkills.map((skill) => (
              <div
                key={skill.slug}
                className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                  {skill.slug}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 line-clamp-2 dark:text-neutral-400">
                  {skill.description.split('.')[0]}
                </p>
                {skill.triggers && skill.triggers.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {skill.triggers.slice(0, 2).map((trigger, i) => (
                      <span
                        key={i}
                        className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      >
                        {trigger}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse All Skills CTA */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="/skills?type=regular"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Browse Project Skills
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/concepts/meta-skills"
              className="inline-flex items-center gap-2 rounded-lg border border-purple-300 bg-purple-50 px-6 py-3 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-950 dark:text-purple-300 dark:hover:bg-purple-900"
            >
              Learn About Meta-Skills
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
