import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow | yo, go",
  description: "The four-phase development workflow: Plan, Build, Test, Ship. Learn how yo, go agents coordinate through PRDs, trunk-based git, and multi-session collaboration.",
};

const PAGE_SECTIONS = [
  { id: "four-phases", label: "The Four Phases" },
  { id: "plan", label: "Plan" },
  { id: "build", label: "Build" },
  { id: "test", label: "Test" },
  { id: "ship", label: "Ship" },
  { id: "trunk-based", label: "Trunk-Based Git Workflow" },
  { id: "multi-session", label: "Multi-Session Coordination" },
  { id: "best-practices", label: "Best Practices" },
];

export default function WorkflowConceptPage() {
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
            The Agent Loop
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            The development lifecycle with AI agents follows four phases:
            Plan, Build, Test, and Ship. Each phase has clear ownership between
            you and the agents, ensuring productive collaboration with predictable outcomes.
          </p>
        </div>
      </section>

      {/* Visual Loop Diagram */}
      <section id="four-phases" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            The Four Phases
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Every feature flows through this loop. The key insight: <strong>you stay in control</strong> of
            what gets built, while agents handle the implementation details.
          </p>

          {/* Loop Diagram */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Plan */}
            <div className="relative rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
              <div className="absolute -top-3 left-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                1. PLAN
              </div>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-violet-900 dark:text-violet-100">Define Requirements</h3>
              <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                Create PRDs with clear user stories and acceptance criteria.
              </p>
            </div>

            {/* Build */}
            <div className="relative rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
              <div className="absolute -top-3 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                2. BUILD
              </div>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-blue-900 dark:text-blue-100">Implement Features</h3>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                Agents write code, commit changes, and track progress.
              </p>
            </div>

            {/* Test */}
            <div className="relative rounded-xl border-2 border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
              <div className="absolute -top-3 left-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                3. TEST
              </div>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-amber-900 dark:text-amber-100">Verify Quality</h3>
              <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
                Run quality gates, tests, and code review.
              </p>
            </div>

            {/* Ship */}
            <div className="relative rounded-xl border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <div className="absolute -top-3 left-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                4. SHIP
              </div>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-green-900 dark:text-green-100">Deploy Changes</h3>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                Create PR, merge to main, and deploy.
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-violet-400 dark:bg-violet-600" />
              <span className="text-neutral-600 dark:text-neutral-400">Plan Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-blue-400 dark:bg-blue-600" />
              <span className="text-neutral-600 dark:text-neutral-400">Build Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-amber-400 dark:bg-amber-600" />
              <span className="text-neutral-600 dark:text-neutral-400">Test Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-green-400 dark:bg-green-600" />
              <span className="text-neutral-600 dark:text-neutral-400">Ship Phase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1: Plan */}
      <section id="plan" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-lg font-semibold text-white">
              1
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Plan
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-50">
                <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">You</span>
                Ownership
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Describe the feature you want at a high level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Review and refine generated user stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Review Planner-authored acceptance criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Mark the PRD as ready for implementation</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-50">
                <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">Agent</span>
                @planner
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Generate structured PRD with user stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Define acceptance criteria for each story</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Order stories by dependency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Suggest branch name and scope boundaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Identify credential/service access requirements</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-violet-400">@planner</span>{" "}
            <span className="text-neutral-400">I want to add dark mode support. Users should toggle between light/dark themes, and their preference should persist.</span>
          </div>

          <div className="mt-6 rounded-lg bg-violet-50 p-4 dark:bg-violet-950">
            <p className="text-sm text-violet-800 dark:text-violet-200">
              <strong>Completion:</strong> PRD is saved to <code className="rounded bg-violet-100 px-1 dark:bg-violet-900">docs/prd.json</code> with
              status &quot;ready&quot; and all stories have clear acceptance criteria.
            </p>
          </div>

          {/* Credential Planning */}
          <div className="mt-8 rounded-xl border border-violet-200 bg-white p-6 dark:border-violet-800 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              Credential Planning
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              When your feature requires API keys, secrets, or third-party service access,
              the Planner captures this in the PRD&apos;s <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">credentialRequirements</code> section:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="flex items-center gap-2">
                  <code className="rounded bg-green-100 px-2 py-1 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                    upfront
                  </code>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Credentials are requested before building begins. Use when the
                  feature cannot be implemented without the service integration.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <code className="rounded bg-amber-100 px-2 py-1 text-sm font-semibold text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  after-initial-build
                </code>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Build starts with stubbed integration code. Credentials are requested
                  before the story that first requires them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Build */}
      <section id="build" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
              2
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Build
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-50">
                <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">You</span>
                Ownership
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Kick off implementation with @builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Monitor progress in <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">progress.txt</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Answer clarifying questions if any arise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Let agent complete stories without interruption</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-50">
                <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">Agent</span>
                @builder
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Create/checkout the feature branch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Implement stories in priority order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Delegate to specialist sub-agents as needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Commit after each completed story</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@builder</span>{" "}
            <span className="text-neutral-400">Implement docs/prd.json. Start with the first incomplete story.</span>
          </div>

          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Completion:</strong> Each story is committed with <code className="rounded bg-blue-100 px-1 dark:bg-blue-900">passes: true</code> in the PRD,
              and <code className="rounded bg-blue-100 px-1 dark:bg-blue-900">progress.txt</code> documents learnings.
            </p>
          </div>

          {/* Credential Prompts */}
          <div className="mt-8 rounded-xl border border-blue-200 bg-white p-6 dark:border-blue-800 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              Credential Readiness Prompts
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Builder checks credential requirements at key moments during implementation:
            </p>
            <div className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-400">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  1
                </div>
                <p>
                  <strong>At PRD start:</strong> If credentials are marked <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">upfront</code>,
                  Builder prompts for them before implementing any stories.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  2
                </div>
                <p>
                  <strong>At story boundaries:</strong> For <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">after-initial-build</code> timing,
                  Builder prompts when reaching a story that lists <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">requiredCredentials</code>.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-blue-800 dark:text-blue-200">
              This ensures you&apos;re not interrupted mid-implementation for credentials you don&apos;t have ready yet.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 3: Test */}
      <section id="test" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-lg font-semibold text-white">
              3
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Test
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-50">
                <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">You</span>
                Ownership
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Review code changes manually if desired</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Test in browser for UI changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Request critic review for deeper analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Decide if changes meet your standards</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-50">
                <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">Agent</span>
                @builder + critics
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Run quality gates (lint, typecheck, tests)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Generate unit tests for new code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Queue E2E tests for UI changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Fix any issues before proceeding</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-amber-400">@critic</span>{" "}
            <span className="text-neutral-400">Review the changes on this branch for security and performance issues.</span>
          </div>

          <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Completion:</strong> All quality gates pass (lint, typecheck, tests), critic feedback is addressed,
              and you&apos;re confident in the changes.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 4: Ship */}
      <section id="ship" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-lg font-semibold text-white">
              4
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Ship
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-50">
                <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">You</span>
                Ownership
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Approve the PR for merge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Verify deployment succeeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Confirm feature works in production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400">•</span>
                  <span>Archive the completed PRD</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-50">
                <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">Agent</span>
                @builder
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Create PR with summary of all changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>List implemented user stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Include testing notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Move PRD to <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">docs/completed/</code></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-green-400">@builder</span>{" "}
            <span className="text-neutral-400">Create a PR for this branch with a summary of all changes.</span>
          </div>

          <div className="mt-6 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Completion:</strong> PR is merged to <code className="rounded bg-green-100 px-1 dark:bg-green-900">main</code>,
              feature branch is deleted, and PRD is archived.
            </p>
          </div>
        </div>
      </section>

      {/* Trunk-Based Workflow */}
      <section id="trunk-based" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Trunk-Based Git Workflow
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            The toolkit follows a <strong>trunk-based development</strong> model. All work flows
            through short-lived feature branches that merge directly to <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">main</code>.
          </p>

          {/* Workflow Diagram */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-24 items-center justify-center rounded-lg bg-green-100 font-mono text-sm font-semibold text-green-900 dark:bg-green-950 dark:text-green-200">
                  main
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-500">← Integration branch (always deployable)</span>
              </div>
              <div className="ml-8 flex items-center gap-2">
                <svg className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-xs text-neutral-500">branch off</span>
              </div>
              <div className="ml-8 flex items-center gap-4">
                <div className="flex h-10 w-48 items-center justify-center rounded-lg bg-blue-100 font-mono text-sm font-semibold text-blue-900 dark:bg-blue-950 dark:text-blue-200">
                  feature/dark-mode
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-500">← Short-lived feature branch</span>
              </div>
              <div className="ml-8 flex items-center gap-2">
                <svg className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-xs text-neutral-500">PR & merge</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-24 items-center justify-center rounded-lg bg-green-100 font-mono text-sm font-semibold text-green-900 dark:bg-green-950 dark:text-green-200">
                  main
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-500">← Feature merged, branch deleted</span>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <h3 className="font-semibold text-green-900 dark:text-green-100">Do</h3>
              <ul className="mt-3 space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Branch from <code className="rounded bg-green-100 px-1 dark:bg-green-900">main</code> for all features</li>
                <li>• Keep branches short-lived (hours to days)</li>
                <li>• Merge via PR after review passes</li>
                <li>• Delete branches after merge</li>
              </ul>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h3 className="font-semibold text-red-900 dark:text-red-100">Don&apos;t</h3>
              <ul className="mt-3 space-y-2 text-sm text-red-800 dark:text-red-200">
                <li>• Don&apos;t use long-lived <code className="rounded bg-red-100 px-1 dark:bg-red-900">develop</code> branches</li>
                <li>• Don&apos;t create <code className="rounded bg-red-100 px-1 dark:bg-red-900">release/*</code> branches</li>
                <li>• Don&apos;t let branches diverge for weeks</li>
                <li>• Don&apos;t stack multiple features on one branch</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Why trunk-based?</strong> Smaller, more frequent merges reduce integration pain.
              Feature flags handle incomplete features in production. This matches how agents work —
              each PRD produces one branch with focused, reviewable changes.
            </p>
          </div>

          {/* Trunk Mode Configuration */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              Trunk Mode Configuration
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Control how Builder handles branching via the{" "}
              <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-xs dark:bg-neutral-700">
                agents.trunkMode
              </code>{" "}
              setting in your project.json:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="flex items-center gap-2">
                  <code className="rounded bg-violet-100 px-2 py-1 text-sm font-semibold text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                    pr-based
                  </code>
                  <span className="rounded bg-neutral-200 px-1.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-600 dark:text-neutral-300">
                    default
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Builder creates feature branches and opens PRs for review before merging.
                  Standard workflow for teams with code review requirements.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <code className="rounded bg-violet-100 px-2 py-1 text-sm font-semibold text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                  branchless
                </code>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Builder commits directly to trunk (main/master). Ideal for solo developers
                  or projects with strong CI gates that catch issues automatically.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
              <p className="text-neutral-400">{/* comment syntax */}{"//"} project.json</p>
              <p className="mt-1">{`{`}</p>
              <p className="ml-4">{`"agents": {`}</p>
              <p className="ml-8">
                <span className="text-green-400">&quot;trunkMode&quot;</span>
                <span className="text-neutral-400">: </span>
                <span className="text-amber-400">&quot;branchless&quot;</span>
                <span className="text-neutral-400"> {"//"} or &quot;pr-based&quot; (default)</span>
              </p>
              <p className="ml-4">{`}`}</p>
              <p>{`}`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Session Coordination */}
      <section id="multi-session" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Multi-Session Coordination
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            When multiple agents or sessions work on the same codebase, the toolkit uses
            <strong> locks</strong>, <strong>heartbeats</strong>, and <strong>PRD claiming</strong> to
            prevent conflicts and enable seamless resumption.
          </p>

          {/* Mechanics */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              How Session Locks Work
            </h3>
            <div className="mt-4 space-y-4 text-sm text-neutral-700 dark:text-neutral-400">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                  1
                </div>
                <p>
                  <strong>Claim:</strong> When a session starts work on a PRD, it writes a lock entry to{" "}
                  <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-xs dark:bg-neutral-700">session-locks.json</code>{" "}
                  with session ID, timestamp, and claimed PRD path.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  2
                </div>
                <p>
                  <strong>Heartbeat:</strong> Active sessions update their heartbeat timestamp every few minutes.
                  If a session crashes or is abandoned, the stale heartbeat (10+ min old) signals that the lock can be reclaimed.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  3
                </div>
                <p>
                  <strong>Conflict avoidance:</strong> Other sessions check for locks before claiming a PRD.
                  If locked, they report who holds it and suggest waiting or picking a different PRD.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">
                  4
                </div>
                <p>
                  <strong>Release:</strong> When a PRD is completed (PR created or merged), the lock is released
                  and the entry is removed from the lock file.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Resumable Sessions</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Each story&apos;s <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">passes</code> flag
                is persisted in the PRD. When you resume, the agent reads this state and continues from the
                first incomplete story—no manual tracking needed.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Merge Queue</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                When multiple PRDs complete in parallel, they enter a merge queue. Each branch rebases from
                trunk before merging, ensuring clean integration without conflicts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Best Practices
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <h3 className="font-semibold text-green-900 dark:text-green-100">Do</h3>
              <ul className="mt-3 space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Start with clear, specific acceptance criteria</li>
                <li>• Review PRD stories before implementation begins</li>
                <li>• Let agents complete stories before interrupting</li>
                <li>• Use critics for systematic code review</li>
                <li>• Keep PRDs focused (5-15 stories max)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h3 className="font-semibold text-red-900 dark:text-red-100">Don&apos;t</h3>
              <ul className="mt-3 space-y-2 text-sm text-red-800 dark:text-red-200">
                <li>• Don&apos;t skip quality gates to save time</li>
                <li>• Don&apos;t give vague requirements (&quot;make it better&quot;)</li>
                <li>• Don&apos;t ignore critic feedback</li>
                <li>• Don&apos;t combine unrelated features in one PRD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
