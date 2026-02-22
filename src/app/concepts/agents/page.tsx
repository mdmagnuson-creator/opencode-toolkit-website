import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";
import { manifest, getPrimaryAgents, getAgentsByCategory } from "@/data";

const PAGE_SECTIONS = [
  { id: "primary-vs-sub-agents", label: "Primary vs Sub-Agents" },
  { id: "how-agents-are-invoked", label: "How Agents Are Invoked" },
  { id: "delegation-pattern", label: "The Delegation Pattern" },
  { id: "agent-communication", label: "How Agents Communicate" },
  { id: "agent-categories", label: "Agent Categories" },
];

export default function AgentsConceptPage() {
  const primaryAgents = getPrimaryAgents();
  const critics = getAgentsByCategory("critics").slice(0, 6);
  const developers = getAgentsByCategory("developers").slice(0, 6);

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
            Understanding Agents
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Agents are AI-powered specialists that perform development tasks
            autonomously. They read code, make changes, run commands, and
            iterate until the job is done.
          </p>
        </div>
      </section>

      {/* Primary vs Sub-Agents */}
      <section id="primary-vs-sub-agents" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Primary Agents vs Sub-Agents
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Primary Agents */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                  Primary Agents ({manifest.counts.primaryAgents})
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-blue-800 dark:text-blue-200">
                These are the <strong>entry points</strong> to the system. You start
                conversations with primary agents, and they orchestrate the work.
              </p>
              <ul className="mt-4 space-y-2">
                {primaryAgents.map((agent) => (
                  <li key={agent.slug} className="flex items-start gap-2 text-sm text-blue-700 dark:text-blue-300">
                    <code className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-xs dark:bg-blue-900">
                      @{agent.slug}
                    </code>
                    <span className="line-clamp-1">{agent.description.split('.')[0]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-Agents */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-600 text-white dark:bg-neutral-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Sub-Agents ({manifest.counts.subagents})
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                Specialists that are <strong>delegated to</strong> by primary agents.
                You don&apos;t usually invoke them directly—they&apos;re called when needed.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {[...critics.slice(0, 3), ...developers.slice(0, 3)].map((agent) => (
                  <span
                    key={agent.slug}
                    className="rounded bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {agent.slug}
                  </span>
                ))}
                <span className="rounded bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-500">
                  +{manifest.counts.subagents - 6} more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Agents Are Invoked */}
      <section id="how-agents-are-invoked" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            How Agents Are Invoked
          </h2>

          <div className="mt-8 space-y-8">
            {/* Method 1: Direct invocation */}
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Direct Invocation
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  Start a conversation with a primary agent using the{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">@</code>{" "}
                  prefix:
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-blue-400">@builder</span>{" "}
                  <span className="text-neutral-400">Add a dark mode toggle to the settings page</span>
                </div>
              </div>
            </div>

            {/* Method 2: Delegation */}
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Automatic Delegation
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  Primary agents automatically delegate to specialists using the{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">Task</code>{" "}
                  tool. When @builder needs React work done, it invokes{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">react-dev</code>.
                  When code review is needed, it calls{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">critic</code>.
                </p>
              </div>
            </div>

            {/* Method 3: Proactive triggers */}
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Proactive Triggers
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                  Some agents are triggered automatically based on context. For example,
                  the{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">critic</code>{" "}
                  agent runs after significant code changes to catch issues early.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Delegation Pattern */}
      <section id="delegation-pattern" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            The Delegation Pattern
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Here&apos;s how a typical task flows through the agent system:
          </p>

          {/* Delegation flow diagram */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    You ask <code className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">@builder</code> to implement a feature
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    &ldquo;Add user profile editing to the settings page&rdquo;
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-4">
                <svg className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    <code className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">@builder</code> delegates to <code className="rounded bg-purple-100 px-1.5 py-0.5 font-mono text-sm text-purple-900 dark:bg-purple-900 dark:text-purple-100">react-dev</code>
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    The specialist implements the React components
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-4">
                <svg className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    <code className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">@builder</code> delegates to <code className="rounded bg-orange-100 px-1.5 py-0.5 font-mono text-sm text-orange-900 dark:bg-orange-900 dark:text-orange-100">critic</code>
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Code is reviewed for quality, security, and best practices
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-4">
                <svg className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                  4
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    <code className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">@builder</code> delegates to <code className="rounded bg-green-100 px-1.5 py-0.5 font-mono text-sm text-green-900 dark:bg-green-900 dark:text-green-100">tester</code>
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Tests are written and run to verify the implementation
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-4">
                <svg className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Work complete—ready for your review
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    @builder reports back with a summary of what was done
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Communication */}
      <section id="agent-communication" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            How Agents Communicate
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Agents communicate through <strong>files and conventions</strong>, not direct
            API calls. This makes the system transparent and debuggable.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Task Tool
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                Primary agents use the Task tool to spawn sub-agent sessions with
                specific prompts. The sub-agent works autonomously and returns results.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                File Artifacts
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                Agents communicate context through files: PRDs define requirements,
                session locks prevent conflicts, and code changes are visible in git.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Project Context
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                All agents read{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">project.json</code>{" "}
                and{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">CONVENTIONS.md</code>{" "}
                to understand your codebase.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Tool Results
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                Each tool call returns results that agents use to decide next steps.
                Read, Write, Edit, Bash, and more—all produce visible outputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Categories */}
      <section id="agent-categories" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Agent Categories
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Sub-agents are organized by their specialty:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                {manifest.categories.critics}
              </p>
              <h3 className="mt-1 font-medium text-neutral-900 dark:text-neutral-50">
                Critics
              </h3>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                Review code quality, security, accessibility, and best practices.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                {manifest.categories.developers}
              </p>
              <h3 className="mt-1 font-medium text-neutral-900 dark:text-neutral-50">
                Developers
              </h3>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                Implement features in React, Go, Python, Java, and more.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                {manifest.categories.testers}
              </p>
              <h3 className="mt-1 font-medium text-neutral-900 dark:text-neutral-50">
                Testers
              </h3>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                Write unit tests, integration tests, and E2E tests.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                {manifest.categories.orchestrators}
              </p>
              <h3 className="mt-1 font-medium text-neutral-900 dark:text-neutral-50">
                Orchestrators
              </h3>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                Coordinate other agents and manage workflows.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                {manifest.categories.utilities}
              </p>
              <h3 className="mt-1 font-medium text-neutral-900 dark:text-neutral-50">
                Utilities
              </h3>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                Debugging, docs, cleanup, and specialized tools.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Browse All {manifest.counts.agents} Agents
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
