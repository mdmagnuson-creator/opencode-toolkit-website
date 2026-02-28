import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CodeBlockWithCopy } from "@/components/CodeBlockWithCopy";
import { OnThisPageNav } from "@/components/OnThisPageNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Human in the Loop | yo, go",
  description: "How humans work with AI agents in yo, go. Learn operating modes for Planner, Builder, and Toolkit agents, plus multi-session coordination patterns.",
  openGraph: {
    title: "The Human in the Loop | yo, go",
    description: "How humans work with AI agents in yo, go. Learn operating modes for Planner, Builder, and Toolkit agents, plus multi-session coordination patterns.",
    images: ["/og/concepts-human-loop.png"],
  },
};

const PAGE_SECTIONS = [
  { id: "planner", label: "Working with Planner" },
  { id: "builder", label: "Working with Builder" },
  { id: "toolkit", label: "Working with Toolkit" },
  { id: "multi-session", label: "Multi-Session Coordination" },
  { id: "loops", label: "End-to-End Operating Loops" },
  { id: "agent-resilience", label: "Agent Resilience" },
  { id: "quick-start", label: "Quick Start Examples" },
];

export default function HumanWorkModesPage() {
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
            The Human in the Loop (you)
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
                  Review Planner&apos;s definition of done
                </h4>
                <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                  Planner authors acceptance criteria for each story. Review them
                  for specificity—push back on vague criteria like &quot;works well&quot;
                  and ask for measurable outcomes like &quot;Response time under 200ms&quot;.
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

      {/* Working with Builder Section */}
      <section
        id="builder"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
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
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                Working with Builder
              </h2>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Execute PRDs or handle ad-hoc tasks
              </p>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-8 text-neutral-700 dark:text-neutral-400">
            Builder is your implementation partner. Give it a ready PRD and it
            works through each story systematically. Give it a direct task and
            it handles it immediately. Builder orchestrates specialist agents,
            runs quality gates, and commits working code.
          </p>

          {/* Two Operating Modes */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Two Operating Modes
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Builder operates in two distinct modes depending on what you need.
              Choose the right mode to get the best results.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {/* PRD Mode */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
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
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-blue-900 dark:text-blue-100">
                  PRD Mode
                </h4>
                <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                  For implementing features from a ready PRD. Builder picks up
                  stories in priority order, implements each one, runs tests,
                  commits changes, and marks stories as complete.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-blue-700 dark:text-blue-300">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
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
                    <span>Systematic story-by-story execution</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-blue-700 dark:text-blue-300">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
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
                    <span>Auto-generates tests after each story</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-blue-700 dark:text-blue-300">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
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
                    <span>Tracks progress in prd.json</span>
                  </div>
                </div>
              </div>

              {/* Ad-hoc Mode */}
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-white">
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
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-purple-900 dark:text-purple-100">
                  Ad-hoc Mode
                </h4>
                <p className="mt-2 text-sm text-purple-800 dark:text-purple-200">
                  For quick fixes, one-off tasks, and direct requests. No PRD
                  needed—just describe what you need and Builder handles it
                  immediately with a batch/verify/ship workflow.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-purple-700 dark:text-purple-300">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
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
                    <span>Immediate execution</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-purple-700 dark:text-purple-300">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
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
                    <span>Tests on request or after completion</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-purple-700 dark:text-purple-300">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
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
                    <span>Great for bug fixes and refactoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use Each Mode */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              When to Use Each Mode
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="pb-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">
                      Task
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">
                      Mode
                    </th>
                    <th className="pb-3 font-semibold text-neutral-900 dark:text-neutral-50">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Multi-story feature</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        PRD
                      </span>
                    </td>
                    <td className="py-3">
                      Structured execution with progress tracking
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Quick bug fix</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Ad-hoc
                      </span>
                    </td>
                    <td className="py-3">No planning overhead for simple changes</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Code refactoring</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Ad-hoc
                      </span>
                    </td>
                    <td className="py-3">Technical work with implicit requirements</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">New user flow</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        PRD
                      </span>
                    </td>
                    <td className="py-3">Complex feature needing structured stories</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Add a new API endpoint</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Ad-hoc
                      </span>
                    </td>
                    <td className="py-3">Single-task, clear scope</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Launch a new feature</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        PRD
                      </span>
                    </td>
                    <td className="py-3">
                      Multiple stories, acceptance criteria needed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* The Update Flow */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              The Update Flow
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Builder participates in a continuous improvement cycle. When
              specialist agents discover gaps or toolkit changes require project
              updates, the update flow keeps everything in sync.
            </p>

            {/* Update Flow Diagram */}
            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex flex-col space-y-4">
                {/* Step 1 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    1
                  </div>
                  <div className="flex-1 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-950">
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Agent discovers a gap or improvement
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="h-5 w-5 text-neutral-400 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    2
                  </div>
                  <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 dark:border-amber-800 dark:bg-amber-950">
                    <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      Queues update in{" "}
                      <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs dark:bg-amber-900">
                        pending-updates/
                      </code>
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="h-5 w-5 text-neutral-400 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    3
                  </div>
                  <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 dark:border-amber-800 dark:bg-amber-950">
                    <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      @toolkit reviews and applies toolkit changes
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="h-5 w-5 text-neutral-400 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    4
                  </div>
                  <div className="flex-1 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-950">
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      @builder applies project updates when you work
                    </span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  <strong className="text-neutral-900 dark:text-neutral-200">
                    You stay in control:
                  </strong>{" "}
                  Updates are queued, not applied automatically. You review,
                  approve, defer, or skip each update when Builder presents
                  them.
                </p>
              </div>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Expected Outcomes
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Here&apos;s what you can expect when working with Builder in each
              mode:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                  PRD Mode Outcomes
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>Each story implemented and committed separately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>Unit tests auto-generated after each story</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>E2E tests queued for affected UI areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>Progress tracked in prd.json and progress.txt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>Feature branch ready for PR when complete</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                  Ad-hoc Mode Outcomes
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-purple-800 dark:text-purple-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                    <span>Task completed and committed quickly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                    <span>Tests generated on request or at completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                    <span>Quality gates still enforced (lint, typecheck)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                    <span>No PRD overhead for simple changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                    <span>Ready to push or create PR immediately</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practical Prompts */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Practical Prompts for Builder Sessions
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Here are copy-ready prompts for common Builder scenarios:
            </p>

            <div className="mt-6 space-y-4">
              {/* PRD Mode: Start */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    PRD Mode
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Starting implementation of a ready PRD
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-blue-400">@builder</span>{" "}
                  <span className="text-neutral-400">
                    Start implementing docs/prd.json. Begin with the first
                    incomplete story.
                  </span>
                </div>
              </div>

              {/* PRD Mode: Continue */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    PRD Mode
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Continuing work on the next story
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-blue-400">@builder</span>{" "}
                  <span className="text-neutral-400">
                    Continue with the PRD. Pick up where we left off.
                  </span>
                </div>
              </div>

              {/* Ad-hoc: Bug Fix */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Ad-hoc
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Fixing a bug without a PRD
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-blue-400">@builder</span>{" "}
                  <span className="text-neutral-400">
                    Fix the login form validation—it&apos;s allowing empty email
                    addresses through.
                  </span>
                </div>
              </div>

              {/* Ad-hoc: Refactoring */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Ad-hoc
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Quick refactoring task
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-blue-400">@builder</span>{" "}
                  <span className="text-neutral-400">
                    Extract the date formatting logic in UserProfile into a
                    shared utility.
                  </span>
                </div>
              </div>

              {/* Ad-hoc: New Endpoint */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Ad-hoc
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Adding a new API endpoint
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-blue-400">@builder</span>{" "}
                  <span className="text-neutral-400">
                    Add a GET /api/users/me endpoint that returns the current
                    user&apos;s profile.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="mt-12">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                Pro Tips for Working with Builder
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>
                    <strong>Let it commit:</strong> Builder commits after each
                    story/task. This creates clean, reviewable history.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>
                    <strong>Check progress.txt:</strong> Builder logs learnings
                    here. Read it to see patterns it discovered.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>
                    <strong>Quality gates are automatic:</strong> Lint and
                    typecheck run before commits. Don&apos;t worry about broken
                    code sneaking through.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>
                    <strong>Start with PRD mode:</strong> For anything beyond a
                    one-liner, PRD mode gives you better tracking and
                    traceability.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Toolkit Section */}
      <section
        id="toolkit"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white">
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                Working with Toolkit
              </h2>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Evolve agents, skills, and scaffolds safely
              </p>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-8 text-neutral-700 dark:text-neutral-400">
            Toolkit operates at a different level than Planner and Builder.
            While those agents work within a specific project, Toolkit manages
            the shared infrastructure—agents, skills, scaffolds, and data
            files—that all projects use. Changes here ripple across every
            project that uses the toolkit.
          </p>

          {/* The Key Distinction */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              The Key Distinction: Toolkit vs Project
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Understanding which level you&apos;re working at prevents
              confusion and keeps changes in the right place.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Project Level */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
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
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-blue-900 dark:text-blue-100">
                  Project Level
                </h4>
                <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                  Changes that affect one project. Features, bug fixes,
                  refactoring—all handled by @planner and @builder.
                </p>
                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-blue-700 dark:text-blue-300">
                    Uses
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-blue-700 dark:text-blue-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <code className="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-900">
                        docs/prd.json
                      </code>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <code className="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-900">
                        docs/project.json
                      </code>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <code className="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-900">
                        docs/progress.txt
                      </code>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Toolkit Level */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
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
                <h4 className="mt-4 text-lg font-semibold text-amber-900 dark:text-amber-100">
                  Toolkit Level
                </h4>
                <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
                  Changes that affect all projects. Agent behavior, skill
                  definitions, scaffold templates—handled by @toolkit.
                </p>
                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                    Manages
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-amber-700 dark:text-amber-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs dark:bg-amber-900">
                        agents/*.md
                      </code>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs dark:bg-amber-900">
                        skills/*/SKILL.md
                      </code>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs dark:bg-amber-900">
                        scaffolds/*
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What Toolkit Changes */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              What Toolkit Changes
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Toolkit owns the &quot;meta&quot; layer—the definitions that
              control how agents behave across all projects.
            </p>

            <div className="mt-6 space-y-4">
              {/* Agents */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Agents
                    </h4>
                    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-400">
                      The instruction sets that define how each agent thinks and
                      acts. Located in{" "}
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">
                        agents/*.md
                      </code>
                      . Changes here affect all projects using that agent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Skills
                    </h4>
                    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-400">
                      Specialized workflows agents can load on demand. Located
                      in{" "}
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">
                        skills/*/SKILL.md
                      </code>
                      . Add new skills for patterns that agents encounter
                      repeatedly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scaffolds */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m0 4.5L2.25 12l4.179-2.25m11.142 4.5L12 12.75l5.571-3m0 4.5l4.179-2.25-4.179-2.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Scaffolds
                    </h4>
                    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-400">
                      Templates for new projects. Located in{" "}
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">
                        scaffolds/*
                      </code>
                      . Defines project structure, dependencies, and
                      configuration for different stacks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Files */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Data Files
                    </h4>
                    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-400">
                      Configuration and reference data. Located in{" "}
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">
                        data/*.json
                      </code>
                      . Detection rules, triggers, and lookup tables that agents
                      consult.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use Each */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              When to Use Toolkit vs Project Flows
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="pb-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">
                      Scenario
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
                    <td className="py-3 pr-4">Fix a bug in your app</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Builder
                      </span>
                    </td>
                    <td className="py-3">Project-specific change</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">
                      Improve how Builder handles tests
                    </td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Toolkit
                      </span>
                    </td>
                    <td className="py-3">Changes agent behavior globally</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Plan a new feature</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                        Planner
                      </span>
                    </td>
                    <td className="py-3">Project-specific requirements</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">
                      Add a new skill for form handling
                    </td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Toolkit
                      </span>
                    </td>
                    <td className="py-3">Reusable across projects</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Add project-specific docs</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Builder
                      </span>
                    </td>
                    <td className="py-3">Lives in project repo</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Update scaffold templates</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Toolkit
                      </span>
                    </td>
                    <td className="py-3">Affects new project creation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Rule of thumb:</strong> If your change affects only the
                current project, use @planner or @builder. If it affects how
                agents work across all projects, use @toolkit.
              </p>
            </div>
          </div>

          {/* The Pending-Updates Handoff Flow */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              The Pending-Updates Handoff Flow
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Project agents can&apos;t modify toolkit files directly. Instead,
              they queue requests that @toolkit reviews and applies. This keeps
              toolkit changes intentional and coordinated.
            </p>

            {/* Flow Diagram */}
            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex flex-col space-y-4">
                {/* Step 1 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    1
                  </div>
                  <div className="flex-1 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-950">
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      @builder discovers a toolkit gap while working
                    </span>
                    <p className="mt-1 text-xs text-blue-700 dark:text-blue-300">
                      Example: &quot;This project uses Playwright but there&apos;s
                      no E2E skill&quot;
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="h-5 w-5 text-neutral-400 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    2
                  </div>
                  <div className="flex-1 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-950">
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      @builder writes request to{" "}
                      <code className="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-900">
                        pending-updates/
                      </code>
                    </span>
                    <p className="mt-1 text-xs text-blue-700 dark:text-blue-300">
                      File format:{" "}
                      <code className="font-mono">
                        YYYY-MM-DD-agent-description.md
                      </code>
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="h-5 w-5 text-neutral-400 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>

                {/* Step 3 - Different color for toolkit */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                    3
                  </div>
                  <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 dark:border-amber-800 dark:bg-amber-950">
                    <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      You invoke @toolkit to review pending updates
                    </span>
                    <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">
                      @toolkit shows queued requests and asks what to do with
                      each
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="h-5 w-5 text-neutral-400 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                    4
                  </div>
                  <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 dark:border-amber-800 dark:bg-amber-950">
                    <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      @toolkit applies approved changes to toolkit repo
                    </span>
                    <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">
                      Updates agents, skills, or scaffolds; archives the request
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="h-5 w-5 text-neutral-400 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>

                {/* Step 5 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                    5
                  </div>
                  <div className="flex-1 rounded-lg border border-green-200 bg-green-50 px-4 py-2 dark:border-green-800 dark:bg-green-950">
                    <span className="text-sm font-medium text-green-900 dark:text-green-100">
                      All projects get improved agents on next session
                    </span>
                    <p className="mt-1 text-xs text-green-700 dark:text-green-300">
                      Changes propagate automatically via toolkit config
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  <strong className="text-neutral-900 dark:text-neutral-200">
                    Why this indirection?
                  </strong>{" "}
                  Toolkit changes are high-impact. This flow ensures you review
                  each change before it affects all projects, preventing
                  accidental regressions.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Prompts */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Practical Prompts for Toolkit Sessions
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Here are copy-ready prompts for common Toolkit scenarios:
            </p>

            <div className="mt-6 space-y-4">
              {/* Review pending updates */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    Review
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Reviewing and applying queued updates
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-amber-400">@toolkit</span>{" "}
                  <span className="text-neutral-400">
                    Review pending updates. Show me what&apos;s queued and let me
                    decide what to apply.
                  </span>
                </div>
              </div>

              {/* Add a new skill */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    New Skill
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Creating a new skill for a common pattern
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-amber-400">@toolkit</span>{" "}
                  <span className="text-neutral-400">
                    Create a skill for [pattern name]. It should help agents
                    [what the skill enables]. Use [project] as a reference.
                  </span>
                </div>
              </div>

              {/* Update an agent */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    Agent Update
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Improving an agent&apos;s behavior
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-amber-400">@toolkit</span>{" "}
                  <span className="text-neutral-400">
                    Update @builder to [describe the behavior change]. This
                    fixes [problem observed in projects].
                  </span>
                </div>
              </div>

              {/* Add a new scaffold */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    Scaffold
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Creating a scaffold for a new stack
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-amber-400">@toolkit</span>{" "}
                  <span className="text-neutral-400">
                    Create a scaffold for [stack name]. Base it on [existing
                    scaffold] but add [modifications].
                  </span>
                </div>
              </div>

              {/* Audit toolkit */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    Audit
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Checking toolkit coverage for a project
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                  <span className="text-amber-400">@toolkit</span>{" "}
                  <span className="text-neutral-400">
                    Audit toolkit coverage for [project path]. What skills or
                    agents are missing for its stack?
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="mt-12">
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                Pro Tips for Working with Toolkit
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-amber-800 dark:text-amber-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span>
                    <strong>Batch your reviews:</strong> Let updates accumulate
                    for a few days, then review them together for context.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span>
                    <strong>Test on one project first:</strong> After toolkit
                    changes, run a project through @builder to verify the change
                    works as expected.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span>
                    <strong>Document skill triggers:</strong> Good skills have
                    clear trigger phrases so agents know when to load them.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span>
                    <strong>Keep agents focused:</strong> Resist adding too much
                    to a single agent. If behavior gets complex, extract it to a
                    skill.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Website Sync Modes */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Website Sync Modes
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              When Toolkit makes changes that affect documentation websites (like this one),
              it uses configurable sync modes to determine how updates are handled. The mode
              is resolved from your local overrides file, with a safe public default.
            </p>

            {/* Mode Resolution */}
            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Mode Resolution
              </h4>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
                Toolkit checks{" "}
                <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-xs font-mono dark:bg-neutral-700">
                  .local/toolkit-overrides.json
                </code>{" "}
                for your configured sync mode. If not present, the public default{" "}
                <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-xs font-mono dark:bg-neutral-700">
                  disabled
                </code>{" "}
                is used.
              </p>

              <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-100 dark:bg-neutral-800">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-neutral-900 dark:text-neutral-100">
                        Mode
                      </th>
                      <th className="px-4 py-2 text-left font-medium text-neutral-900 dark:text-neutral-100">
                        Behavior
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-neutral-900">
                    <tr className="border-t border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3">
                        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">
                          disabled
                        </code>
                        <span className="ml-2 rounded bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                          default
                        </span>
                      </td>
                      <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                        No website sync. Toolkit makes local changes only.
                      </td>
                    </tr>
                    <tr className="border-t border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3">
                        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">
                          owner-managed
                        </code>
                      </td>
                      <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                        Toolkit owner has direct access. Syncs changes to linked website projects.
                      </td>
                    </tr>
                    <tr className="border-t border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3">
                        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">
                          queue-file
                        </code>
                      </td>
                      <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                        Writes sync requests to a queue file for later processing.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Local Overrides */}
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                Configuring Local Overrides
              </h4>
              <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
                Create{" "}
                <code className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-xs dark:bg-amber-900">
                  .local/toolkit-overrides.json
                </code>{" "}
                in your toolkit directory to configure sync behavior:
              </p>
              <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                <pre>{`{
  "websiteSync": {
    "mode": "owner-managed",
    "projectId": "opencode-toolkit-website"
  }
}`}</pre>
              </div>
              <p className="mt-3 text-sm text-amber-700 dark:text-amber-300">
                The{" "}
                <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs dark:bg-amber-900">
                  websiteSync.projectId
                </code>{" "}
                identifies which website project to sync with when running in{" "}
                <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs dark:bg-amber-900">
                  owner-managed
                </code>{" "}
                mode. This file is gitignored and stays local to your machine.
              </p>
            </div>

            {/* Important Note */}
            <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Note:</strong> The public toolkit defaults to{" "}
                <code className="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-900">
                  disabled
                </code>{" "}
                to ensure safe out-of-the-box behavior. Only toolkit maintainers with direct
                website access should configure{" "}
                <code className="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-900">
                  owner-managed
                </code>{" "}
                or{" "}
                <code className="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-900">
                  queue-file
                </code>{" "}
                modes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Session Coordination Section */}
      <section
        id="multi-session"
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
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                Multi-Session Coordination
              </h2>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                What you need to do when running parallel sessions
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-8 text-neutral-700 dark:text-neutral-400">
            Running multiple AI sessions in parallel accelerates large projects, but requires
            you to make a few decisions and monitor progress. Here&apos;s what you need to know
            as the human operator.
          </p>

          {/* Decision Points */}
          <div className="mt-8 rounded-xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-900/20">
            <h3 className="font-semibold text-violet-900 dark:text-violet-100">
              Your Decision Points
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-violet-800 dark:text-violet-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Enable multi-session:</strong> Set{" "}
                  <code className="rounded bg-violet-200 px-1.5 py-0.5 text-xs dark:bg-violet-800">
                    agents.multiSession: true
                  </code>{" "}
                  in <code className="rounded bg-violet-200 px-1.5 py-0.5 text-xs dark:bg-violet-800">
                    project.json
                  </code>. Only enable this if you plan to run concurrent sessions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Assign PRDs to sessions:</strong> When starting each session,
                  tell it which PRD to work on. Agents will auto-claim but you decide the assignment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Release stale locks:</strong> If a session crashes, its lock lingers.
                  Check <code className="rounded bg-violet-200 px-1.5 py-0.5 text-xs dark:bg-violet-800">session-locks.json</code>{" "}
                  and delete entries older than 10 minutes to unblock other sessions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Resolve merge conflicts:</strong> If agents can&apos;t auto-resolve
                  conflicts during rebase, you&apos;ll need to step in. Keep PRDs small and independent to minimize this.
                </span>
              </li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <h4 className="font-semibold text-green-900 dark:text-green-100">Do</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-green-800 dark:text-green-200">
                <li>• Keep PRDs focused (5–10 stories max)</li>
                <li>• Assign non-overlapping PRDs to sessions</li>
                <li>• Check session-locks.json periodically</li>
                <li>• Let agents finish before switching PRDs</li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-semibold text-red-900 dark:text-red-100">Don&apos;t</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-red-800 dark:text-red-200">
                <li>• Don&apos;t edit files an agent session is working on</li>
                <li>• Don&apos;t manually force-merge without rebasing</li>
                <li>• Don&apos;t run sessions on the same PRD simultaneously</li>
                <li>• Don&apos;t ignore stuck sessions—release their locks</li>
              </ul>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="mt-6 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
            <p className="text-sm text-neutral-700 dark:text-neutral-400">
              <strong className="text-neutral-900 dark:text-neutral-200">
                Quick check:
              </strong>{" "}
              Run <code className="rounded bg-neutral-200 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-700">cat docs/session-locks.json</code>{" "}
              to see active locks. If a session&apos;s <code className="rounded bg-neutral-200 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-700">lastHeartbeat</code>{" "}
              is stale, remove that entry to release the lock.
            </p>
          </div>
        </div>
      </section>

      {/* End-to-End Operating Loops Section */}
      <section
        id="loops"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
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
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                End-to-End Operating Loops
              </h2>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Repeatable workflows from idea to shipped change
              </p>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-8 text-neutral-700 dark:text-neutral-400">
            These loops give you a predictable path from idea to production.
            Each loop defines clear handoff points between agents and explicit
            completion criteria so you always know where you are and what&apos;s
            next.
          </p>

          {/* Loop 1: New Feature Loop */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                1
              </span>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                New Feature Loop
              </h3>
            </div>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Use this loop when building a new capability that requires planning,
              multiple stories, and structured implementation.
            </p>

            {/* Feature Loop Steps */}
            <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950">
              <div className="space-y-6">
                {/* Step 1: Plan */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white">
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
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">
                        Plan with @planner
                      </h4>
                      <span className="rounded bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                        Start Here
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-emerald-800 dark:text-emerald-200">
                      Describe your feature idea. Planner creates a draft PRD
                      with user stories and acceptance criteria.
                    </p>
                    <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
                      <span className="text-violet-400">@planner</span>{" "}
                      <span className="text-neutral-400">
                        I want to add user notifications. Users should get
                        in-app and email alerts for mentions.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handoff arrow */}
                <div className="flex items-center gap-4 pl-14">
                  <svg
                    className="h-5 w-5 text-emerald-400 dark:text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    Handoff: PRD marked ready
                  </span>
                </div>

                {/* Step 2: Build */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
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
                  <div className="flex-1">
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">
                      Implement with @builder
                    </h4>
                    <p className="mt-1 text-sm text-emerald-800 dark:text-emerald-200">
                      Builder picks up stories in priority order. Each story
                      gets implemented, tested, and committed. Repeat until all
                      stories pass.
                    </p>
                    <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
                      <span className="text-blue-400">@builder</span>{" "}
                      <span className="text-neutral-400">
                        Implement docs/prd.json. Start with the first story.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handoff arrow - optional toolkit */}
                <div className="flex items-center gap-4 pl-14">
                  <svg
                    className="h-5 w-5 text-emerald-400 dark:text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    Optional Handoff: Builder queues toolkit gaps
                  </span>
                </div>

                {/* Step 3: Toolkit (optional) */}
                <div className="flex items-start gap-4 rounded-lg border border-dashed border-amber-300 bg-amber-50/50 p-4 dark:border-amber-700 dark:bg-amber-950/50">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-600 text-white">
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
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                        Apply toolkit updates (if queued)
                      </h4>
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Optional
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                      If Builder discovered missing agents or skills, review and
                      apply them before your next feature.
                    </p>
                    <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
                      <span className="text-amber-400">@toolkit</span>{" "}
                      <span className="text-neutral-400">
                        Review pending updates and apply approved changes.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handoff arrow - completion */}
                <div className="flex items-center gap-4 pl-14">
                  <svg
                    className="h-5 w-5 text-emerald-400 dark:text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    Completion: All stories pass, PR ready
                  </span>
                </div>

                {/* Step 4: Ship */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
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
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">
                        Ship
                      </h4>
                      <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                        Done
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-emerald-800 dark:text-emerald-200">
                      Review PR, merge to main, deploy. PRD is archived
                      automatically.
                    </p>
                  </div>
                </div>
              </div>

              {/* Completion Criteria */}
              <div className="mt-6 rounded-lg bg-emerald-100 p-4 dark:bg-emerald-900">
                <h5 className="font-semibold text-emerald-900 dark:text-emerald-100">
                  Loop Complete When:
                </h5>
                <ul className="mt-2 space-y-1.5 text-sm text-emerald-800 dark:text-emerald-200">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    All stories in prd.json have <code className="rounded bg-emerald-200 px-1 py-0.5 font-mono text-xs dark:bg-emerald-800">passes: true</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    All tests pass (unit + E2E if applicable)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    PR merged to main branch
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    PRD archived to docs/prds/archive/
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Loop 2: Quick Fix Loop */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                2
              </span>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                Quick Fix Loop
              </h3>
            </div>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Use this loop for bug fixes, small improvements, and one-off tasks
              that don&apos;t warrant full planning.
            </p>

            {/* Quick Fix Loop Steps */}
            <div className="mt-8 rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
              <div className="space-y-6">
                {/* Step 1: Fix */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white">
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
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                        Fix directly with @builder (ad-hoc mode)
                      </h4>
                      <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Start Here
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-purple-800 dark:text-purple-200">
                      Describe the problem or task. Builder implements
                      immediately without a PRD.
                    </p>
                    <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
                      <span className="text-blue-400">@builder</span>{" "}
                      <span className="text-neutral-400">
                        The submit button doesn&apos;t disable during form
                        submission. Fix it to prevent double-clicks.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handoff arrow */}
                <div className="flex items-center gap-4 pl-14">
                  <svg
                    className="h-5 w-5 text-purple-400 dark:text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wide text-purple-600 dark:text-purple-400">
                    Builder implements + commits
                  </span>
                </div>

                {/* Step 2: Verify */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white">
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
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                      Verify the fix
                    </h4>
                    <p className="mt-1 text-sm text-purple-800 dark:text-purple-200">
                      Check in browser or ask Builder to add a regression test.
                      Quality gates (lint, typecheck) run automatically.
                    </p>
                    <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
                      <span className="text-blue-400">@builder</span>{" "}
                      <span className="text-neutral-400">
                        Add a test to prevent this bug from recurring.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handoff arrow - completion */}
                <div className="flex items-center gap-4 pl-14">
                  <svg
                    className="h-5 w-5 text-purple-400 dark:text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wide text-purple-600 dark:text-purple-400">
                    Completion: Fix verified, ready to push
                  </span>
                </div>

                {/* Step 3: Ship */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
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
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                        Ship
                      </h4>
                      <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                        Done
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-purple-800 dark:text-purple-200">
                      Push directly or create a quick PR. No PRD cleanup needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Completion Criteria */}
              <div className="mt-6 rounded-lg bg-purple-100 p-4 dark:bg-purple-900">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100">
                  Loop Complete When:
                </h5>
                <ul className="mt-2 space-y-1.5 text-sm text-purple-800 dark:text-purple-200">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    Fix implemented and committed
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    Quality gates pass (lint, typecheck)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    Changes pushed or PR created
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Loop 3: Toolkit Sync Loop */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                3
              </span>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                Toolkit Sync Loop
              </h3>
            </div>
            <p className="mt-3 text-neutral-700 dark:text-neutral-400">
              Use this loop periodically to apply queued improvements and keep
              your toolkit evolving based on real project learnings.
            </p>

            {/* Toolkit Sync Loop Steps */}
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
              <div className="space-y-6">
                {/* Step 1: Review */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-600 text-white">
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                        Review pending updates with @toolkit
                      </h4>
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Start Here
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                      See what gaps Builder discovered across your projects.
                      Approve, defer, or skip each update.
                    </p>
                    <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
                      <span className="text-amber-400">@toolkit</span>{" "}
                      <span className="text-neutral-400">
                        Show me pending updates. What&apos;s queued?
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handoff arrow */}
                <div className="flex items-center gap-4 pl-14">
                  <svg
                    className="h-5 w-5 text-amber-400 dark:text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400">
                    Decision: Approve changes to apply
                  </span>
                </div>

                {/* Step 2: Apply */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-600 text-white">
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
                  <div className="flex-1">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                      Apply approved changes
                    </h4>
                    <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                      Toolkit updates agents, skills, or scaffolds. Archived
                      requests are moved to pending-updates/archive/.
                    </p>
                    <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
                      <span className="text-amber-400">@toolkit</span>{" "}
                      <span className="text-neutral-400">
                        Apply the email skill update and the builder test
                        improvement. Skip the rest for now.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handoff arrow */}
                <div className="flex items-center gap-4 pl-14">
                  <svg
                    className="h-5 w-5 text-amber-400 dark:text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400">
                    Verify: Test changes on a project
                  </span>
                </div>

                {/* Step 3: Verify */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
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
                  <div className="flex-1">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                      Test on a project with @builder
                    </h4>
                    <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                      Run Builder on a project to verify the toolkit changes
                      work as expected before they affect all your work.
                    </p>
                    <div className="mt-3 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100">
                      <span className="text-blue-400">@builder</span>{" "}
                      <span className="text-neutral-400">
                        Run the test suite to verify the toolkit changes didn&apos;t break anything.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handoff arrow - completion */}
                <div className="flex items-center gap-4 pl-14">
                  <svg
                    className="h-5 w-5 text-amber-400 dark:text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400">
                    Completion: Toolkit updated, verified working
                  </span>
                </div>

                {/* Step 4: Done */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
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
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                        Sync complete
                      </h4>
                      <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                        Done
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                      All projects now benefit from the improved agents, skills,
                      and scaffolds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Completion Criteria */}
              <div className="mt-6 rounded-lg bg-amber-100 p-4 dark:bg-amber-900">
                <h5 className="font-semibold text-amber-900 dark:text-amber-100">
                  Loop Complete When:
                </h5>
                <ul className="mt-2 space-y-1.5 text-sm text-amber-800 dark:text-amber-200">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    Pending updates reviewed (applied, deferred, or skipped)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    Toolkit changes committed
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
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
                    Changes verified on at least one project
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Loop Summary Table */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Choosing the Right Loop
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="pb-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">
                      Situation
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">
                      Loop
                    </th>
                    <th className="pb-3 font-semibold text-neutral-900 dark:text-neutral-50">
                      Agents Involved
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Multi-story feature</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                        New Feature
                      </span>
                    </td>
                    <td className="py-3">Planner → Builder (→ Toolkit)</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Bug fix or quick improvement</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Quick Fix
                      </span>
                    </td>
                    <td className="py-3">Builder only</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Refactoring with clear scope</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Quick Fix
                      </span>
                    </td>
                    <td className="py-3">Builder only</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-3 pr-4">Improving agent behavior</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Toolkit Sync
                      </span>
                    </td>
                    <td className="py-3">Toolkit → Builder (verify)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Weekly maintenance</td>
                    <td className="py-3 pr-4">
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Toolkit Sync
                      </span>
                    </td>
                    <td className="py-3">Toolkit → Builder (verify)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="mt-12">
            <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-950">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">
                Pro Tips for Operating Loops
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>
                    <strong>Don&apos;t mix loops:</strong> If a quick fix grows complex,
                    pause and start a New Feature loop with proper planning.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>
                    <strong>Batch Toolkit Syncs:</strong> Don&apos;t sync after every
                    feature. Let 3-5 updates accumulate for context.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>
                    <strong>Check progress.txt first:</strong> Before starting any loop,
                    read the Codebase Patterns section to avoid repeating mistakes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>
                    <strong>Trust the completion criteria:</strong> A loop isn&apos;t done
                    until all criteria are met. Partial completion leads to drift.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Resilience Section */}
      <section
        id="agent-resilience"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Agent Resilience
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            Agents are designed to handle real-world interruptions gracefully. Whether a network hiccup cuts a session short or the AI provider temporarily limits requests, agents save their state and resume cleanly — without losing work or requiring you to start over.
          </p>

          {/* Rate Limit Handling */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Rate Limit Handling
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              When the AI provider temporarily limits requests (HTTP 429), agents detect it immediately and pause gracefully instead of retrying in a loop.
            </p>
            <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <ol className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-900 dark:bg-amber-900 dark:text-amber-100">1</span>
                  <span><strong>Detect the limit</strong> — Agent identifies the 429 response and stops making new requests immediately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-900 dark:bg-amber-900 dark:text-amber-100">2</span>
                  <span><strong>Save state</strong> — Current task description, last action, and context anchor are written to <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-700">builder-state.json</code> before stopping.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-900 dark:bg-amber-900 dark:text-amber-100">3</span>
                  <span><strong>Notify you</strong> — A clear message shows what was in progress, what was saved, and how to resume after waiting a few minutes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-900 dark:bg-amber-900 dark:text-amber-100">4</span>
                  <span><strong>Resume cleanly</strong> — When you return, the agent reads saved state and continues from where it left off.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Session Resumability */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Session Resumability
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Builder tracks a <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">currentTask</code> in <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">builder-state.json</code> throughout every session. If a session ends unexpectedly — power loss, network drop, or a browser close — the next session starts by reading this state and offering to resume exactly where work stopped.
            </p>
            <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">What is saved per task:</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Task description and which story or ad-hoc todo was active</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Last completed action (e.g., &quot;committed US-003, about to start US-004&quot;)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Context anchor — a short summary of what the agent knew at pause time</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Rate limit timestamp, if that was the reason for stopping</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tool Error Recovery */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Tool Error Recovery
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Transient errors — network timeouts, brief disconnects — are retried automatically once before escalating. Rate limits are never auto-retried; they always pause and notify you.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                <thead className="bg-neutral-50 dark:bg-neutral-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">Error Type</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">Behavior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-neutral-900 dark:text-neutral-100">429 Rate Limit</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Save state, notify, pause — no auto-retry</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-neutral-900 dark:text-neutral-100">499 / Timeout</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Retry once automatically, then ask you</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-neutral-900 dark:text-neutral-100">Network drop</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Retry once automatically, then ask you</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-neutral-900 dark:text-neutral-100">Sub-agent failure</td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">Check partial work, retry with context, report after 2 failures</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Commit Gate */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Commit Gate
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Builder will not commit code for a completed story if the required post-change checks have not passed. This prevents half-finished work from landing in your codebase silently.
            </p>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950">
              <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Required before any commit:</p>
              <ul className="mt-3 space-y-2 text-sm text-amber-800 dark:text-amber-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span>Typecheck must pass (<code className="rounded bg-amber-100 px-1 py-0.5 text-xs dark:bg-amber-900">tsc --noEmit</code>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span>Unit tests must pass (if story has <code className="rounded bg-amber-100 px-1 py-0.5 text-xs dark:bg-amber-900">testIntensity &gt; low</code>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span>Story status in PRD JSON updated to <code className="rounded bg-amber-100 px-1 py-0.5 text-xs dark:bg-amber-900">passes: true</code></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Prompts Section */}
      <section
        id="quick-start"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
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
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                Quick Start Prompts
              </h2>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Copy-ready prompts to start working with each agent
              </p>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-8 text-neutral-700 dark:text-neutral-400">
            Click the copy button on any prompt below to start a session with
            the right agent. Replace bracketed placeholders with your specific
            details.
          </p>

          {/* Planner Prompts */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
                <svg
                  className="h-4 w-4"
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
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Planner
              </h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Use these prompts to plan features and create PRDs.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Start planning a new feature
                </p>
                <CodeBlockWithCopy code="@planner I want to add [feature]. The main user goal is [what they accomplish]. Key constraints: [any limitations]." />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Refine an existing draft PRD
                </p>
                <CodeBlockWithCopy code="@planner Review the draft PRD at docs/prds/[name].json. Add edge cases for [specific area] and tighten the acceptance criteria." />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Mark a PRD as ready for implementation
                </p>
                <CodeBlockWithCopy code="@planner The PRD looks good. Mark it ready and copy to docs/prd.json." />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Split a story that&apos;s too large
                </p>
                <CodeBlockWithCopy code="@planner US-[number] has too many acceptance criteria. Break it into smaller, focused stories." />
              </div>
            </div>
          </div>

          {/* Builder Prompts */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg
                  className="h-4 w-4"
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
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Builder
              </h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Use these prompts for PRD implementation and ad-hoc tasks.
            </p>

            <div className="mt-6 space-y-4">
              {/* PRD Mode Prompts */}
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                  PRD Mode
                </span>
                <div className="mt-3 space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-blue-900 dark:text-blue-100">
                      Start implementing a ready PRD
                    </p>
                    <CodeBlockWithCopy code="@builder Implement docs/prd.json. Start with the first incomplete story." />
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-blue-900 dark:text-blue-100">
                      Continue with the next story
                    </p>
                    <CodeBlockWithCopy code="@builder Continue with the PRD. Pick up the next incomplete story." />
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-blue-900 dark:text-blue-100">
                      Implement a specific story
                    </p>
                    <CodeBlockWithCopy code="@builder Implement US-[number] from the current PRD." />
                  </div>
                </div>
              </div>

              {/* Ad-hoc Mode Prompts */}
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-300">
                  Ad-hoc Mode
                </span>
                <div className="mt-3 space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-purple-900 dark:text-purple-100">
                      Fix a bug
                    </p>
                    <CodeBlockWithCopy code="@builder Fix [describe the bug]. It happens when [trigger condition]." />
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-purple-900 dark:text-purple-100">
                      Add a quick feature
                    </p>
                    <CodeBlockWithCopy code="@builder Add [small feature]. It should [expected behavior]." />
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-purple-900 dark:text-purple-100">
                      Refactor code
                    </p>
                    <CodeBlockWithCopy code="@builder Refactor [component/function]. Extract [what to extract] into a shared utility." />
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-purple-900 dark:text-purple-100">
                      Add tests for existing code
                    </p>
                    <CodeBlockWithCopy code="@builder Add unit tests for [file or component]. Cover the main flows and edge cases." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toolkit Prompts */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600 text-white">
                <svg
                  className="h-4 w-4"
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
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Toolkit
              </h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Use these prompts to evolve agents, skills, and scaffolds.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Review pending updates from projects
                </p>
                <CodeBlockWithCopy code="@toolkit Review pending updates. Show what's queued and let me decide what to apply." />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Create a new skill
                </p>
                <CodeBlockWithCopy code="@toolkit Create a skill for [pattern]. It should help agents [what it enables]. Reference [project] for examples." />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Update agent behavior
                </p>
                <CodeBlockWithCopy code="@toolkit Update @builder to [behavior change]. This addresses [problem observed]." />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Audit toolkit coverage for a project
                </p>
                <CodeBlockWithCopy code="@toolkit Audit toolkit coverage for [project path]. What skills or agents are missing?" />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Create a new scaffold template
                </p>
                <CodeBlockWithCopy code="@toolkit Create a scaffold for [stack]. Base it on [existing scaffold] with [modifications]." />
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-12">
            <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">
                Prompt Tips
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                  <span>
                    <strong>Be specific:</strong> &quot;Fix the login form&quot;
                    is better than &quot;fix the bug&quot;.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                  <span>
                    <strong>Include context:</strong> Mention file paths, user
                    flows, or error messages when relevant.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                  <span>
                    <strong>State constraints:</strong> If something should NOT
                    change, say so upfront.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                  <span>
                    <strong>Use the right agent:</strong> Planning goes to
                    @planner, implementation to @builder, toolkit changes to
                    @toolkit.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
