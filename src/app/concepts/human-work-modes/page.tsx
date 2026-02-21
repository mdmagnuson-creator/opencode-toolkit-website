import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function HumanWorkModesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Human-in-the-Loop Modes
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Working with AI agents is a collaboration, not a handoff. This guide
            explains how to work effectively with Planner, Builder, and Toolkit
            to move from idea to shipped change.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            What You&apos;ll Learn
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Each primary agent has a distinct purpose. Understanding when and how
            to use each one helps you accomplish goals efficiently.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {/* Planner */}
            <div className="rounded-xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-800 dark:bg-violet-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-violet-900 dark:text-violet-100">
                Planner
              </h3>
              <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                Turn ideas into implementation-ready PRDs. Refine scope, clarify
                requirements, and break features into user stories.
              </p>
            </div>

            {/* Builder */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-blue-900 dark:text-blue-100">
                Builder
              </h3>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                Execute PRDs or handle ad-hoc tasks. Implements features, runs
                quality gates, and commits working code.
              </p>
            </div>

            {/* Toolkit */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-amber-900 dark:text-amber-100">
                Toolkit
              </h3>
              <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
                Evolve agents, skills, and scaffolds safely. Handles toolkit-level
                changes that affect how all agents behave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Planner Section */}
      <section
        id="planner"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                Working with Planner
              </h2>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Turn ideas into implementation-ready PRDs
              </p>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-8 text-neutral-700 dark:text-neutral-400">
            Planner is your partner for requirements engineering. You bring the
            vision; Planner helps structure it into clear, testable user
            stories. The goal is always a PRD that Builder can execute without
            ambiguity.
          </p>

          {/* The Draft-to-Ready Journey */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              The Draft-to-Ready Journey
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Most features go through a refinement loop before they&apos;re
              ready for implementation. Here&apos;s what that looks like:
            </p>

            {/* Journey Steps */}
            <div className="mt-8 space-y-6">
              {/* Step 1: Draft */}
              <div className="relative pl-8 before:absolute before:left-3 before:top-10 before:h-[calc(100%+1.5rem)] before:w-px before:bg-violet-200 dark:before:bg-violet-800">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                  1
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Create a Draft PRD
                </h4>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                  Start by describing your feature at a high level. Planner
                  generates a draft PRD with user stories, acceptance criteria,
                  and a suggested branch name. Draft PRDs live in{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">
                    docs/prds/
                  </code>{" "}
                  with status &quot;draft&quot;.
                </p>
              </div>

              {/* Step 2: Refine */}
              <div className="relative pl-8 before:absolute before:left-3 before:top-10 before:h-[calc(100%+1.5rem)] before:w-px before:bg-violet-200 dark:before:bg-violet-800">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                  2
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Refine Requirements
                </h4>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                  Review the draft with Planner. Challenge assumptions, add edge
                  cases, and tighten acceptance criteria. This is where you
                  catch scope creep before implementation begins.
                </p>
              </div>

              {/* Step 3: Clarify */}
              <div className="relative pl-8 before:absolute before:left-3 before:top-10 before:h-[calc(100%+1.5rem)] before:w-px before:bg-violet-200 dark:before:bg-violet-800">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                  3
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Clarify Scope
                </h4>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                  Explicitly call out what&apos;s in scope and what&apos;s not.
                  This prevents Builder from over-building and keeps PRDs
                  focused on one coherent set of changes.
                </p>
              </div>

              {/* Step 4: Ready */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                  4
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Mark as Ready
                </h4>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                  When you&apos;re confident the PRD is complete, mark it ready.
                  The file moves to{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">
                    docs/prd.json
                  </code>{" "}
                  (or stays in{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">
                    docs/prds/
                  </code>{" "}
                  with status &quot;ready&quot;). Builder can now pick it up.
                </p>
              </div>
            </div>
          </div>

          {/* Draft Refinement Tips */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Draft Refinement Tips
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                <h4 className="font-semibold text-violet-900 dark:text-violet-100">
                  Challenge the stories
                </h4>
                <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                  Ask &quot;What if this story fails?&quot; and &quot;What edge
                  cases does this miss?&quot; Planner can add error handling and
                  boundary conditions.
                </p>
              </div>
              <div className="rounded-lg border border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                <h4 className="font-semibold text-violet-900 dark:text-violet-100">
                  Split large stories
                </h4>
                <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                  If a story has more than 4-5 acceptance criteria, it&apos;s
                  probably too big. Ask Planner to break it into smaller pieces.
                </p>
              </div>
              <div className="rounded-lg border border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                <h4 className="font-semibold text-violet-900 dark:text-violet-100">
                  Define &quot;done&quot; clearly
                </h4>
                <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                  Vague criteria like &quot;works well&quot; lead to ambiguous
                  implementations. Be specific: &quot;Response time under
                  200ms&quot;.
                </p>
              </div>
              <div className="rounded-lg border border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950">
                <h4 className="font-semibold text-violet-900 dark:text-violet-100">
                  Check dependencies
                </h4>
                <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                  Ensure stories are ordered so dependencies are built first.
                  Ask Planner to reorder if the sequence doesn&apos;t make
                  sense.
                </p>
              </div>
            </div>
          </div>

          {/* Clarifying Scope */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Clarifying Scope
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              A good PRD explicitly states boundaries. When refining with
              Planner, address these questions:
            </p>

            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-green-700 dark:text-green-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    In Scope
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                    <li>• What features are included?</li>
                    <li>• Which user flows are covered?</li>
                    <li>• What quality bars must be met?</li>
                    <li>• Which platforms/browsers are supported?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-red-700 dark:text-red-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Out of Scope
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                    <li>• What&apos;s explicitly excluded?</li>
                    <li>• What&apos;s deferred to future PRDs?</li>
                    <li>• What edge cases won&apos;t be handled?</li>
                    <li>• What existing behavior stays unchanged?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-violet-50 p-4 dark:bg-violet-950">
              <p className="text-sm text-violet-800 dark:text-violet-200">
                <strong>Pro tip:</strong> Add a &quot;Non-Goals&quot; section to
                your PRD. This prevents Builder from implementing features you
                didn&apos;t ask for and keeps the scope tight.
              </p>
            </div>
          </div>

          {/* Practical Prompts */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Practical Prompts for Planning Sessions
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Here are copy-ready prompts for common planning scenarios:
            </p>

            <div className="mt-6 space-y-4">
              {/* Prompt 1: Start a new feature */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                    New Feature
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Starting a planning session for a new feature
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-violet-400">@planner</span>{" "}
                  <span className="text-neutral-400">
                    I want to add [feature description]. The main user goal is
                    [what the user wants to accomplish]. Key constraints:
                    [constraints if any].
                  </span>
                </div>
              </div>

              {/* Prompt 2: Refine a draft */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    Refine Draft
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Continuing to refine an existing draft PRD
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-violet-400">@planner</span>{" "}
                  <span className="text-neutral-400">
                    Review the draft PRD at docs/prds/[prd-name].json. I have
                    concerns about [specific stories or criteria]. Can we refine
                    those?
                  </span>
                </div>
              </div>

              {/* Prompt 3: Add edge cases */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Edge Cases
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Adding error handling and edge cases to stories
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-violet-400">@planner</span>{" "}
                  <span className="text-neutral-400">
                    For US-[number] in the current PRD, what edge cases are we
                    missing? Add acceptance criteria for error states and
                    boundary conditions.
                  </span>
                </div>
              </div>

              {/* Prompt 4: Scope check */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
                    Scope Check
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Verifying scope boundaries before marking ready
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-violet-400">@planner</span>{" "}
                  <span className="text-neutral-400">
                    Review the scope of this PRD. Is anything missing that
                    should be included? Is anything included that should be
                    deferred? Add explicit non-goals if needed.
                  </span>
                </div>
              </div>

              {/* Prompt 5: Mark ready */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    Mark Ready
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Finalizing and activating a PRD for implementation
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-violet-400">@planner</span>{" "}
                  <span className="text-neutral-400">
                    The PRD looks good. Mark it as ready and copy it to
                    docs/prd.json so Builder can start implementation.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use Planner vs Builder */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              When to Use Planner vs Builder
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="pb-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">
                      Situation
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">
                      Agent
                    </th>
                    <th className="pb-3 font-semibold text-neutral-900 dark:text-neutral-50">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">
                      New multi-story feature
                    </td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                        Planner
                      </span>
                    </td>
                    <td className="py-3">
                      Needs requirements breakdown before code
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">
                      Quick bug fix
                    </td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Builder
                      </span>
                    </td>
                    <td className="py-3">
                      Scope is already clear, just needs implementation
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">
                      Uncertain requirements
                    </td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                        Planner
                      </span>
                    </td>
                    <td className="py-3">
                      Need to explore and clarify before building
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">
                      Existing PRD ready
                    </td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Builder
                      </span>
                    </td>
                    <td className="py-3">
                      Planning done, time to execute
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      Refactoring with defined scope
                    </td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Builder
                      </span>
                    </td>
                    <td className="py-3">
                      Technical change, requirements are implicit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon: Builder and Toolkit sections */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-700 dark:bg-neutral-900">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
              <svg
                className="h-6 w-6 text-neutral-600 dark:text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Builder &amp; Toolkit Guides Coming Soon
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Detailed workflows for Builder (PRD mode and ad-hoc tasks) and
              Toolkit (evolving agents and skills) are being developed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
