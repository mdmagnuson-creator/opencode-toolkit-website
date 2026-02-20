"use client";

interface Step {
  id: string;
  label: string;
  icon: string;
  description: string;
  isLoop?: boolean;
}

interface Phase {
  id: string;
  name: string;
  agent: string;
  agentIcon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    id: "plan",
    name: "Plan",
    agent: "@project-planner",
    agentIcon: "P",
    color: "bg-blue-500 dark:bg-blue-600",
    borderColor: "border-blue-200 dark:border-blue-800",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    steps: [
      {
        id: "bootstrap",
        label: "Bootstrap",
        icon: "🚀",
        description: "New project or existing codebase",
      },
      {
        id: "draft",
        label: "Draft PRD",
        icon: "📝",
        description: "Describe the feature in plain language",
      },
      {
        id: "qa",
        label: "Q&A",
        icon: "💬",
        description: "Clarify with lettered options",
      },
      {
        id: "ready",
        label: "Ready",
        icon: "✅",
        description: "PRD approved and ready for build",
      },
    ],
  },
  {
    id: "build",
    name: "Build",
    agent: "@builder → @ralph",
    agentIcon: "B",
    color: "bg-emerald-500 dark:bg-emerald-600",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    steps: [
      {
        id: "claim",
        label: "Claim",
        icon: "🎯",
        description: "Lock PRD, create branch",
      },
      {
        id: "implement",
        label: "Implement",
        icon: "⚡",
        description: "@ralph writes code for each story",
        isLoop: true,
      },
      {
        id: "review",
        label: "Review",
        icon: "🔍",
        description: "@critic checks code quality",
        isLoop: true,
      },
      {
        id: "iterate",
        label: "Iterate",
        icon: "🔄",
        description: "Fix issues and repeat until clean",
        isLoop: true,
      },
    ],
  },
  {
    id: "test",
    name: "Test",
    agent: "@tester → @critic",
    agentIcon: "T",
    color: "bg-amber-500 dark:bg-amber-600",
    borderColor: "border-amber-200 dark:border-amber-800",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    steps: [
      {
        id: "unit",
        label: "Unit Tests",
        icon: "🧪",
        description: "@tester adds test coverage",
      },
      {
        id: "e2e",
        label: "E2E Tests",
        icon: "🎭",
        description: "@playwright-dev writes end-to-end tests",
      },
      {
        id: "quality-gates",
        label: "Quality Gates",
        icon: "🚦",
        description: "Typecheck, lint, build must pass",
      },
      {
        id: "verify",
        label: "Verify",
        icon: "✓",
        description: "All checks green",
      },
    ],
  },
  {
    id: "ship",
    name: "Ship",
    agent: "@builder → @felix",
    agentIcon: "S",
    color: "bg-violet-500 dark:bg-violet-600",
    borderColor: "border-violet-200 dark:border-violet-800",
    bgColor: "bg-violet-50 dark:bg-violet-950/30",
    steps: [
      {
        id: "pr",
        label: "Create PR",
        icon: "🔀",
        description: "Push branch and open pull request",
      },
      {
        id: "watch",
        label: "Watch CI",
        icon: "👁️",
        description: "@felix monitors the build",
      },
      {
        id: "merge",
        label: "Merge",
        icon: "🎉",
        description: "Ship to production",
      },
      {
        id: "archive",
        label: "Archive",
        icon: "📦",
        description: "PRD marked complete, cleanup runs",
      },
    ],
  },
];

export function TheLoop() {
  return (
    <section
      id="the-loop"
      className="border-t border-neutral-200 px-6 py-24 sm:px-8 lg:px-12 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            The Process
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            The Loop
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
            From idea to shipped feature — and back again. Every feature follows
            this cycle.
          </p>
        </div>

        {/* Vertical Phases */}
        <div className="relative mt-12">
          {/* Connecting Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-emerald-400 via-amber-400 to-violet-400 sm:left-8" />

          <div className="space-y-8">
            {phases.map((phase, phaseIndex) => (
              <div key={phase.id} className="relative">
                {/* Phase Card */}
                <div
                  className={`ml-12 rounded-xl border-2 ${phase.borderColor} ${phase.bgColor} p-5 sm:ml-16 sm:p-6`}
                >
                  {/* Phase Number Badge (on the line) */}
                  <div
                    className={`absolute left-0 flex h-12 w-12 items-center justify-center rounded-full ${phase.color} text-lg font-bold text-white shadow-lg sm:left-2 sm:h-14 sm:w-14 sm:text-xl`}
                  >
                    {phaseIndex + 1}
                  </div>

                  {/* Phase Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                        {phase.name}
                      </h3>
                      <p className="mt-0.5 font-mono text-sm text-neutral-600 dark:text-neutral-400">
                        {phase.agent}
                      </p>
                    </div>
                    {phase.id === "build" && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                        iterates
                      </span>
                    )}
                  </div>

                  {/* Steps Grid */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {phase.steps.map((step) => (
                      <div
                        key={step.id}
                        className={`flex items-start gap-3 rounded-lg bg-white/70 p-3 dark:bg-neutral-900/50 ${
                          step.isLoop
                            ? "ring-1 ring-emerald-300 dark:ring-emerald-700"
                            : ""
                        }`}
                      >
                        <span className="text-xl">{step.icon}</span>
                        <div className="min-w-0">
                          <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {step.label}
                          </p>
                          <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Loop indicator for Build phase */}
                  {phase.id === "build" && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <span>Implement → Review → Iterate until all stories pass</span>
                    </div>
                  )}
                </div>

                {/* Arrow to next phase */}
                {phaseIndex < phases.length - 1 && (
                  <div className="ml-12 flex h-8 items-center sm:ml-16">
                    <svg
                      className="h-5 w-5 text-neutral-400 dark:text-neutral-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop Back Indicator */}
          <div className="mt-10 rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-5 dark:border-amber-700 dark:bg-amber-950/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🐛</span>
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-300">
                  Bugs feed back into the loop
                </h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                  Issues discovered in production automatically become new PRDs,
                  restarting the cycle. The loop never really ends — it's
                  continuous improvement.
                </p>
              </div>
              <svg
                className="h-8 w-8 flex-shrink-0 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
