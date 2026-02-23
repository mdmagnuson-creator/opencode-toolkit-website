import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";

const PAGE_SECTIONS = [
  { id: "draft-prds", label: "Draft PRDs" },
  { id: "status-legend", label: "Status Legend" },
];

const draftPrds = [
  {
    id: "PRD-004",
    name: "Dynamic Output Verbosity Modes",
    status: "draft",
    priority: "high",
    effort: "medium",
    impact: "high",
    summary:
      "Introduce dynamic output verbosity controls so agents minimize token usage on happy paths while preserving debugging quality when tasks fail.",
    modes: [
      {
        name: "lean",
        description:
          "One-line status for routine operations. No log streaming. Minimal file read windows.",
      },
      {
        name: "balanced",
        description:
          "Concise success output. Short failure reason and key evidence. Expand only when needed. This is the default mode.",
      },
      {
        name: "debug",
        description:
          "Full or near-full logs and read windows. Deep diagnostics for investigation.",
      },
    ],
    keyFeatures: [
      "Static defaults by operation type (dev-server: lean, build/test: balanced)",
      "Automatic escalation on failure signals (non-zero exit, timeout, repeated failure)",
      "Task-based routing without expensive meta-reasoning",
      "Bounded evidence in escalation unless explicitly in debug mode",
    ],
    tickets: {
      total: 43,
      phases: [
        { name: "Core Infrastructure", count: 8, ids: "V-001 to V-008" },
        { name: "Agent Integration", count: 12, ids: "V-009 to V-020" },
        { name: "Tool Modifications", count: 10, ids: "V-021 to V-030" },
        { name: "Monitoring & Metrics", count: 8, ids: "V-031 to V-038" },
        { name: "Documentation & Rollout", count: 5, ids: "V-039 to V-043" },
      ],
    },
    successMetrics: [
      "30% reduction in average tokens per successful task",
      "No degradation in task completion rate",
      "Maintained or improved diagnostic quality on failures",
    ],
  },
  {
    id: "PRD-005",
    name: "Integration Provisioning Automation",
    status: "draft",
    priority: "high",
    effort: "low",
    impact: "high",
    summary:
      "Lightweight automation for integration skill provisioning. Planner adds integration skill tasks when integrations are detected, Builder creates missing integration skills during build, and Builder always queues toolkit promotion updates for newly created integration skills.",
    modes: [
      {
        name: "detect",
        description:
          "Planner identifies integration needs during PRD creation and adds skill provisioning tasks.",
      },
      {
        name: "provision",
        description:
          "Builder creates missing integration skills during build when needed, using meta-skill generators.",
      },
      {
        name: "promote",
        description:
          "Builder queues toolkit updates for newly created skills; Toolkit reviews and promotes mature patterns.",
      },
    ],
    keyFeatures: [
      "Planner adds integration skill tasks when integrations are detected in PRDs",
      "Builder creates missing integration skills during build using meta-skill generators",
      "Builder always queues toolkit promotion updates for newly created integration skills",
      "Lightweight workflow with no blocking dependencies between stories",
      "Integration registry tracking available meta-skills and their triggers",
    ],
    tickets: {
      total: 12,
      phases: [
        { name: "Planner Detection", count: 3, ids: "IP-001 to IP-003" },
        { name: "Builder Provisioning", count: 5, ids: "IP-004 to IP-008" },
        { name: "Promotion Queue", count: 2, ids: "IP-009 to IP-010" },
        { name: "Documentation", count: 2, ids: "IP-011 to IP-012" },
      ],
    },
    successMetrics: [
      "Integration skills created during the same build session they're needed",
      "All new integration skills automatically queued for toolkit promotion review",
      "50% reduction in repetitive integration setup across projects",
    ],
  },
];

export default function RoadmapPage() {
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
            Roadmap
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Upcoming features and draft PRDs being planned for the AI toolkit.
            These represent active design work that may change before
            implementation.
          </p>
        </div>
      </section>

      {/* Draft PRDs */}
      <section id="draft-prds" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Draft PRDs
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            PRDs in draft status are being actively designed. Implementation
            tickets have been scoped but work has not yet begun.
          </p>

          <div className="mt-10 space-y-8">
            {draftPrds.map((prd) => (
              <div
                key={prd.id}
                id={prd.id.toLowerCase()}
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        {prd.status}
                      </span>
                      <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                        {prd.id}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                      {prd.name}
                    </h3>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <div className="text-center">
                      <div className="font-medium text-neutral-500 dark:text-neutral-400">
                        Priority
                      </div>
                      <div className="mt-1 font-semibold text-neutral-900 dark:text-neutral-100">
                        {prd.priority}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-neutral-500 dark:text-neutral-400">
                        Effort
                      </div>
                      <div className="mt-1 font-semibold text-neutral-900 dark:text-neutral-100">
                        {prd.effort}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-neutral-500 dark:text-neutral-400">
                        Impact
                      </div>
                      <div className="mt-1 font-semibold text-neutral-900 dark:text-neutral-100">
                        {prd.impact}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                  {prd.summary}
                </p>

                {/* Verbosity Modes */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Verbosity Modes
                  </h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {prd.modes.map((mode) => (
                      <div
                        key={mode.name}
                        className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-800"
                      >
                        <div className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          {mode.name}
                        </div>
                        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                          {mode.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Features
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {prd.keyFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-400"
                      >
                        <span className="text-blue-600 dark:text-blue-400">
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Implementation Checklist */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Implementation Checklist
                  </h4>
                  <div className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <div className="text-sm text-neutral-700 dark:text-neutral-400">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {prd.tickets.total} tickets
                      </span>{" "}
                      across {prd.tickets.phases.length} phases:
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {prd.tickets.phases.map((phase) => (
                        <div
                          key={phase.name}
                          className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-xs dark:bg-neutral-900"
                        >
                          <span className="text-neutral-700 dark:text-neutral-300">
                            {phase.name}
                          </span>
                          <span className="font-mono text-neutral-500 dark:text-neutral-400">
                            {phase.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Success Metrics
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {prd.successMetrics.map((metric, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-400"
                      >
                        <span className="text-green-600 dark:text-green-400">
                          ✓
                        </span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Legend */}
      <section id="status-legend" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Status Legend
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                draft
              </span>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Being designed. Implementation tickets scoped but not started.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                in-progress
              </span>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Active implementation underway. Some tickets completed.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                shipped
              </span>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Fully implemented and available in the toolkit.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                deferred
              </span>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Planned but postponed. May be revisited later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
