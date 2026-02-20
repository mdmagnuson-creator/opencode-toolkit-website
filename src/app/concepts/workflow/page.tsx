import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function WorkflowConceptPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            The Workflow Loop
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Understand the typical development workflow with AI agents — from
            planning a feature to shipping it. This loop combines human judgment
            with agent execution for productive development.
          </p>
        </div>
      </section>

      {/* Visual Flowchart */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            The Build-Review-Ship Loop
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Every feature follows this loop. The key insight: <strong>you stay in control</strong> of
            what gets built, while agents handle the implementation details.
          </p>

          {/* Flowchart Diagram */}
          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Row 1: Plan Phase */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-40 items-center justify-center rounded-xl bg-violet-100 px-4 text-center font-medium text-violet-900 dark:bg-violet-950 dark:text-violet-200">
                    <span>1. Create PRD</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">You + Planner</p>
                </div>
                <div className="text-2xl text-neutral-400">→</div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-40 items-center justify-center rounded-xl bg-violet-100 px-4 text-center font-medium text-violet-900 dark:bg-violet-950 dark:text-violet-200">
                    <span>2. Review Stories</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">You approve</p>
                </div>
                <div className="text-2xl text-neutral-400">→</div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-40 items-center justify-center rounded-xl bg-blue-100 px-4 text-center font-medium text-blue-900 dark:bg-blue-950 dark:text-blue-200">
                    <span>3. Implement</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">Builder Agent</p>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-end pr-20">
                <div className="my-4 text-2xl text-neutral-400">↓</div>
              </div>

              {/* Row 2: Build Phase */}
              <div className="flex flex-row-reverse items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-40 items-center justify-center rounded-xl bg-green-100 px-4 text-center font-medium text-green-900 dark:bg-green-950 dark:text-green-200">
                    <span>6. Ship It!</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">Merge PR</p>
                </div>
                <div className="text-2xl text-neutral-400">←</div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-40 items-center justify-center rounded-xl bg-amber-100 px-4 text-center font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                    <span>5. Code Review</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">You + Critics</p>
                </div>
                <div className="text-2xl text-neutral-400">←</div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-40 items-center justify-center rounded-xl bg-blue-100 px-4 text-center font-medium text-blue-900 dark:bg-blue-950 dark:text-blue-200">
                    <span>4. Quality Gates</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">Tests + Lint</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-violet-400 dark:bg-violet-600" />
              <span className="text-neutral-600 dark:text-neutral-400">Planning Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-blue-400 dark:bg-blue-600" />
              <span className="text-neutral-600 dark:text-neutral-400">Build Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-amber-400 dark:bg-amber-600" />
              <span className="text-neutral-600 dark:text-neutral-400">Review Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-green-400 dark:bg-green-600" />
              <span className="text-neutral-600 dark:text-neutral-400">Ship Phase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Create PRD */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
              1
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Create PRD
            </h2>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Every feature starts with a Product Requirements Document. You describe what you
            want at a high level, and the planner helps break it into user stories:
          </p>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@planner</span>{" "}
            <span className="text-neutral-400">I want to add dark mode support to the app. Users should be able to toggle between light and dark themes, and their preference should persist.</span>
          </div>

          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            The planner generates a structured PRD with:
          </p>

          <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="text-violet-600 dark:text-violet-400">•</span>
              <span><strong>User stories</strong> — Small, implementable pieces</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600 dark:text-violet-400">•</span>
              <span><strong>Acceptance criteria</strong> — What &quot;done&quot; looks like</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600 dark:text-violet-400">•</span>
              <span><strong>Priority order</strong> — Dependencies respected</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600 dark:text-violet-400">•</span>
              <span><strong>Branch name</strong> — For tracking work</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Step 2: Review Stories */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
              2
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Review Stories
            </h2>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Before implementation begins, you review the generated stories. This is your
            chance to:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Refine Scope</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Remove stories that aren&apos;t needed or add missing ones.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Adjust Priority</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Reorder stories so dependencies are built first.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Clarify Criteria</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Add specific details to acceptance criteria.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Pro tip:</strong> The more specific your acceptance criteria, the better
              the implementation. Include edge cases and specific behaviors you care about.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3: Implement */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              3
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Implement
            </h2>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Hand off to the builder agent. It reads the PRD and implements each story in
            priority order:
          </p>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@builder</span>{" "}
            <span className="text-neutral-400">implement the dark mode PRD</span>
          </div>

          <p className="mt-6 text-neutral-700 dark:text-neutral-400">
            The builder agent:
          </p>

          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-900 dark:bg-blue-900 dark:text-blue-200">
                a
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                <strong>Creates/checks out the branch</strong> specified in the PRD
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-900 dark:bg-blue-900 dark:text-blue-200">
                b
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                <strong>Works through stories</strong> in priority order, delegating to specialist sub-agents
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-900 dark:bg-blue-900 dark:text-blue-200">
                c
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                <strong>Updates the PRD</strong> marking <code className="rounded bg-neutral-800 px-1 py-0.5 text-xs">passes: true</code> as each story is completed
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-900 dark:bg-blue-900 dark:text-blue-200">
                d
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                <strong>Commits as it goes</strong> — small, focused commits for each story
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Quality Gates */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              4
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Quality Gates
            </h2>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Before marking a story as complete, agents must pass the quality gates defined
            in your <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">project.json</code>:
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-900 dark:border-neutral-700">
            <pre className="p-6 text-sm leading-relaxed text-neutral-100">
{`"qualityGates": {
  "lint": "npm run lint",
  "typecheck": "npm run typecheck",
  "test": "npm run test"
}`}
            </pre>
          </div>

          <div className="mt-6 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Automatic enforcement:</strong> Agents run these commands after each story
              and fix any issues before proceeding. If tests fail, they debug and fix.
            </p>
          </div>
        </div>
      </section>

      {/* Step 5: Code Review */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-semibold text-white">
              5
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Code Review
            </h2>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            When implementation is complete, review the changes. You can:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Review Yourself</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Read the code, test in browser, check for edge cases.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Use Critic Agents</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Run specialized critics for security, performance, accessibility, etc.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@critic</span>{" "}
            <span className="text-neutral-400">review the changes on this branch</span>
          </div>

          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            The critic agent routes to appropriate specialists (frontend-critic, security-critic,
            etc.) based on the files changed.
          </p>
        </div>
      </section>

      {/* Step 6: Ship It */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
              6
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Ship It!
            </h2>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            When you&apos;re happy with the changes, create a PR and merge:
          </p>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@builder</span>{" "}
            <span className="text-neutral-400">create a PR for this branch</span>
          </div>

          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            The builder creates a well-formatted PR with:
          </p>

          <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">•</span>
              <span>Summary of all changes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">•</span>
              <span>List of user stories implemented</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400">•</span>
              <span>Testing notes</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Multi-Session Coordination */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Multi-Session Coordination
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Large features often span multiple work sessions. The toolkit handles this
            with <strong>session locks</strong> and <strong>PRD tracking</strong>:
          </p>

          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              Scenario: Two developers, one feature
            </h3>
            <div className="mt-4 space-y-4 text-sm text-neutral-700 dark:text-neutral-400">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                  1
                </div>
                <p>
                  <strong>Alice</strong> starts working on the dark mode PRD. Her agent acquires
                  a session lock.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  2
                </div>
                <p>
                  <strong>Bob</strong> asks his agent to work on the same PRD. Agent sees the lock
                  and reports that Alice is working on it.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  3
                </div>
                <p>
                  <strong>Bob</strong> can either wait, or work on a different PRD.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">
                  4
                </div>
                <p>
                  When <strong>Alice</strong> creates a PR, the lock is released. Bob can now
                  continue if needed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Resumable Work</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                If you stop mid-feature, the PRD tracks which stories are done. Next session
                picks up where you left off.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">No Conflicts</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Session locks prevent two agents from editing the same files simultaneously,
                avoiding merge conflicts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
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
