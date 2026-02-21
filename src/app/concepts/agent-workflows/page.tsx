import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const primaryAgents = [
  {
    name: "@planner",
    role: "Project planning and PRD management",
    responsibilities: [
      "Bootstrap new projects with stack detection",
      "Create and refine PRDs (Product Requirements Documents)",
      "Manage the PRD registry and lifecycle states",
      "Queue toolkit updates when discovering missing stack support",
    ],
  },
  {
    name: "@builder",
    role: "Feature implementation orchestrator",
    responsibilities: [
      "Build features from PRDs or ad-hoc requests",
      "Orchestrate implementation agents (developer, tester, critic)",
      "Apply project updates queued by @toolkit",
      "Queue toolkit updates when discovering workflow gaps",
    ],
  },
  {
    name: "@toolkit",
    role: "AI toolkit maintenance",
    responsibilities: [
      "Maintain agents, skills, templates, and scaffolds",
      "Process toolkit update requests from other agents",
      "Queue project updates when schema or patterns change",
      "Keep toolkit-structure.json and documentation in sync",
    ],
  },
];

const updateQueues = [
  {
    name: "pending-updates/",
    direction: "Any agent → @toolkit",
    purpose: "Toolkit improvement requests discovered during work",
    description:
      "When any agent discovers a gap in the toolkit — a missing pattern, outdated guidance, or needed enhancement — it writes a request file here instead of modifying toolkit files directly.",
    workflow: [
      "Agent discovers toolkit gap during normal work",
      "Agent writes structured request to pending-updates/",
      "Agent notifies user: 'Queued toolkit update for @toolkit'",
      "@toolkit presents pending requests at session start",
      "User reviews each request and approves/rejects",
      "@toolkit applies approved changes and commits",
    ],
  },
  {
    name: "project-updates/",
    direction: "@toolkit → @builder",
    purpose: "Project changes required by toolkit updates",
    description:
      "When toolkit changes require updates to existing projects — schema migrations, new required fields, or pattern changes — @toolkit queues instructions here for @builder to apply.",
    workflow: [
      "@toolkit makes a change that affects project structure",
      "@toolkit writes update instructions for each affected project",
      "@builder presents pending updates when user selects a project",
      "User chooses to apply, defer, or skip each update",
      "@builder delegates to @developer to apply the changes",
      "@builder deletes the update file after successful application",
    ],
  },
];

const valueProps = [
  {
    title: "Self-Improving System",
    description:
      "Agents don't just follow instructions — they identify gaps and queue improvements. Your toolkit gets better every time you use it.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
  },
  {
    title: "You Stay in Control",
    description:
      "Every update is queued, not applied. You review, approve, modify, or reject changes on your schedule.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Separation of Concerns",
    description:
      "Agents stay in their lane. Implementation agents don't modify the toolkit; toolkit agents don't touch your code.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Asynchronous Collaboration",
    description:
      "Queue an idea now, address it later. Keep your flow while building a backlog of improvements.",
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
  },
];

const governanceCritics = [
  {
    name: "workflow-enforcement-critic",
    description:
      "Verifies mandatory toolkit post-change workflow artifacts and completion reporting",
    purpose: "Ensures agents follow required workflows after making changes",
  },
  {
    name: "handoff-contract-critic",
    description:
      "Checks builder/planner/toolkit routing contracts for ownership contradictions and scope drift",
    purpose: "Prevents agents from stepping outside their defined responsibilities",
  },
  {
    name: "update-schema-critic",
    description:
      "Validates project-updates file structure, required frontmatter, and required workflow sections",
    purpose: "Ensures update files are properly formatted for reliable processing",
  },
  {
    name: "policy-testability-critic",
    description:
      "Flags non-testable MUST/CRITICAL/NEVER rules and suggests enforceable rewrites",
    purpose: "Keeps policy rules concrete and verifiable rather than aspirational",
  },
];

export default function AgentWorkflowsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Architecture
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Agent Workflows & Communication
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            How agents communicate and coordinate through asynchronous update queues.
            A message-passing architecture where agents stay loosely coupled while
            enabling cross-agent collaboration — all under your control.
          </p>
        </div>
      </section>

      {/* Value Props Grid */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Key Principles
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            The toolkit uses a message-passing architecture that keeps agents independent
            while enabling continuous improvement.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  {prop.icon}
                </div>
                <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-50">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Agents */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            The Three Primary Agents
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            These are the entry-point agents you invoke directly. Each has a distinct role
            and communicates with others through the update queue system.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {primaryAgents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-blue-100 px-3 py-1.5 font-mono text-sm font-semibold text-blue-900 dark:bg-blue-950 dark:text-blue-200">
                    {agent.name}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-200">
                  {agent.role}
                </p>
                <ul className="mt-4 space-y-2">
                  {agent.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Communication Flow
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Agents communicate through file-based update queues. This keeps them loosely
            coupled while enabling cross-agent collaboration.
          </p>

          {/* Visual Diagram */}
          <div className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="min-w-[600px] space-y-8">
              {/* User Control Banner */}
              <div className="rounded-lg bg-neutral-900 px-4 py-3 text-center text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
                USER CONTROL — Reviews, approves, rejects, or escalates all updates
              </div>

              {/* Primary Agents Row */}
              <div className="flex items-center justify-center gap-8">
                {primaryAgents.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex h-20 w-28 flex-col items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-center dark:border-blue-800 dark:bg-blue-950"
                  >
                    <span className="font-mono text-sm font-semibold text-blue-900 dark:text-blue-200">
                      {agent.name}
                    </span>
                    <span className="mt-1 text-xs text-blue-700 dark:text-blue-400">
                      {agent.role.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Arrows to pending-updates */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-px bg-neutral-400 dark:bg-neutral-600" />
                  <span className="text-xs text-neutral-500">queue updates</span>
                  <div className="h-8 w-px bg-neutral-400 dark:bg-neutral-600" />
                </div>
              </div>

              {/* pending-updates queue */}
              <div className="mx-auto max-w-md rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
                <div className="text-center">
                  <span className="font-mono text-sm font-semibold text-amber-900 dark:text-amber-200">
                    pending-updates/
                  </span>
                  <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
                    Any agent → @toolkit
                  </p>
                </div>
              </div>

              {/* Arrow to toolkit */}
              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-neutral-400 dark:text-neutral-600"
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

              {/* @toolkit processes */}
              <div className="mx-auto flex items-center gap-4">
                <div className="flex h-16 w-28 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
                  <span className="font-mono text-sm font-semibold text-blue-900 dark:text-blue-200">
                    @toolkit
                  </span>
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-500">
                  Reviews & applies
                </span>
              </div>

              {/* Arrow to project-updates */}
              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-neutral-400 dark:text-neutral-600"
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

              {/* project-updates queue */}
              <div className="mx-auto max-w-md rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                <div className="text-center">
                  <span className="font-mono text-sm font-semibold text-green-900 dark:text-green-200">
                    project-updates/
                  </span>
                  <p className="mt-1 text-xs text-green-700 dark:text-green-400">
                    @toolkit → @builder
                  </p>
                </div>
              </div>

              {/* Arrow to builder */}
              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-neutral-400 dark:text-neutral-600"
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

              {/* @builder applies */}
              <div className="mx-auto flex items-center gap-4">
                <div className="flex h-16 w-28 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
                  <span className="font-mono text-sm font-semibold text-blue-900 dark:text-blue-200">
                    @builder
                  </span>
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-500">
                  Applies to projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Update Queues Detail */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Update Queues
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            File-based message queues enable cross-agent communication without tight coupling.
          </p>

          <div className="mt-10 space-y-8">
            {updateQueues.map((queue) => (
              <div
                key={queue.name}
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-neutral-100 px-3 py-1.5 font-mono text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
                    {queue.name}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                    {queue.direction}
                  </span>
                </div>

                <p className="mt-3 font-medium text-neutral-900 dark:text-neutral-200">
                  {queue.purpose}
                </p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {queue.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
                    Workflow
                  </h4>
                  <ol className="mt-3 space-y-2">
                    {queue.workflow.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-900 dark:bg-blue-900 dark:text-blue-200">
                          {i + 1}
                        </span>
                        <span className="text-neutral-600 dark:text-neutral-400">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>

          {/* User Control Callout */}
          <div className="mt-8 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>User Control:</strong> Users can review requests, ask clarifying questions,
              modify the scope, or reject updates entirely. Nothing is applied automatically.
            </p>
          </div>

          {/* Project Update File Format */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Project Update File Format
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Each project update file requires YAML frontmatter with a{" "}
              <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">scope</code>{" "}
              field indicating what type of work is required.
            </p>

            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                project-updates/my-project/2026-02-21-migrate-to-capabilities.md
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`---
scope: implementation
date: 2026-02-21
priority: normal
breaking: false
---

# Update: Migrate 'features' to 'capabilities'

## What to change
Rename the \`features\` field to \`capabilities\` in project.json.

## Steps
1. Open docs/project.json
2. Rename \`features\` key to \`capabilities\`
3. Run npm run typecheck to verify

## Verification
- \`npm run typecheck\` passes
- No references to old field name remain`}</code>
              </pre>
            </div>

            {/* Scope Values */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
                Required Scope Values
              </h4>
              <div className="mt-3 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                  <thead className="bg-neutral-50 dark:bg-neutral-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                        Scope
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                        Handled By
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-3">
                        <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                          implementation
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                        @builder
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                        Code changes only — file edits, config updates, migrations
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-3">
                        <code className="rounded bg-violet-100 px-1.5 py-0.5 text-sm font-medium text-violet-900 dark:bg-violet-900 dark:text-violet-100">
                          planning
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                        @planner
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                        PRD/documentation changes, architecture decisions
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-3">
                        <code className="rounded bg-amber-100 px-1.5 py-0.5 text-sm font-medium text-amber-900 dark:bg-amber-900 dark:text-amber-100">
                          mixed
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                        Both
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                        Requires both planning and implementation work
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Startup Behavior */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Builder Startup Behavior
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            When @builder starts a session, it performs optional file checks to determine
            current work state. Missing files are expected and handled gracefully.
          </p>

          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              Startup Sequence
            </h3>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  1
                </span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Check docs directory listing
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    List <code className="rounded bg-neutral-200 px-1 dark:bg-neutral-700">docs/</code> contents
                    to see what files exist before attempting reads.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  2
                </span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Read builder-state.json (if present)
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Only read <code className="rounded bg-neutral-200 px-1 dark:bg-neutral-700">docs/builder-state.json</code> if
                    it appears in the listing. A missing file is normal — it means no prior session state.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  3
                </span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Load PRD and project context
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Read <code className="rounded bg-neutral-200 px-1 dark:bg-neutral-700">docs/prd.json</code> and{" "}
                    <code className="rounded bg-neutral-200 px-1 dark:bg-neutral-700">docs/project.json</code> to
                    understand current work and project configuration.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  4
                </span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Present workflow dashboard
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Show the interactive dashboard with workflow options:{" "}
                    <strong>P</strong> (PRD), <strong>A</strong> (Ad-hoc), <strong>U</strong> (Updates), <strong>E</strong> (E2E tests).
                    Wait for user selection before proceeding.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  5
                </span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Start dev server (after workflow selection)
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Check dev server health and start it if needed. This happens <strong>after</strong> the user
                    selects a workflow, not immediately on session start.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Why check first?</strong> Attempting to read a missing file triggers an error.
              By listing the directory first, the builder knows which files exist and avoids
              unnecessary error handling for expected missing state.
            </p>
          </div>

          {/* Dev Server Timing */}
          <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">
              Dev Server Check Timing
            </h3>
            <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
              Dev server checks are <strong>deferred until workflow selection</strong> — after the user
              chooses P, A, U, or E. This avoids blocking the dashboard while waiting for
              a server that may not be needed (e.g., for documentation-only updates).
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 dark:bg-neutral-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                  Correct
                </p>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                  Load state → Show dashboard → User selects workflow → Check/start dev server → Execute workflow
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-neutral-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-400">
                  Avoid
                </p>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                  Load state → Check/start dev server → Show dashboard (blocks user while server starts)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Todo Synchronization Contract */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Todo Synchronization
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            All three primary agents maintain a synchronization contract between OpenCode&apos;s right-panel todos
            and persistent state files. This enables session resumability across restarts.
          </p>

          {/* Sync Contract */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              Synchronization Contract
            </h3>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
                  1
                </span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Restore on startup
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Each agent checks for its state file and replays
                    all stored todos to the OpenCode right panel using{" "}
                    <code className="rounded bg-neutral-200 px-1 dark:bg-neutral-700">todowrite</code>.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
                  2
                </span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Sync during work
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    When creating, updating, or completing todos in the UI, immediately persist
                    the change to the agent&apos;s state file with status and priority.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
                  3
                </span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Clean up on completion
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    When a workflow completes (PRD shipped, ad-hoc finished, update applied), clear the relevant
                    todos from both the UI and persistent state.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Agent State Files */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Agent State Files
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Each primary agent persists todos to its own state file:
            </p>

            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                <thead className="bg-neutral-50 dark:bg-neutral-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Agent
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      State File
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                        @builder
                      </code>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-neutral-600 dark:text-neutral-400">
                      &lt;project&gt;/docs/builder-state.json
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-violet-100 px-1.5 py-0.5 text-sm font-medium text-violet-900 dark:bg-violet-900 dark:text-violet-100">
                        @planner
                      </code>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-neutral-600 dark:text-neutral-400">
                      &lt;project&gt;/docs/planner-state.json
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-amber-100 px-1.5 py-0.5 text-sm font-medium text-amber-900 dark:bg-amber-900 dark:text-amber-100">
                        @toolkit
                      </code>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-neutral-600 dark:text-neutral-400">
                      ~/.config/opencode/.tmp/toolkit-state.json
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Builder Flows */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Builder Todo Flows
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  PRD Workflow (P)
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    One todo per user story
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    Reference ID: Story ID (US-###)
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Ad-hoc Workflow (A)
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    One todo per decomposed task
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    Reference ID: adhoc-###
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Pending Updates (U)
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    One todo per update file
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    Reference ID: Update filename
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Deferred E2E (E)
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    One todo per queued E2E test
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    Reference ID: E2E file path
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Planner Flows */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Planner Todo Flows
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Draft Refinement (D)
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    One todo per refinement task/question batch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    Reference ID: draft-&lt;slug&gt;-task-###
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  New PRD (N)
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    One todo per creation step
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    Reference ID: new-prd-&lt;slug&gt;-step-###
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Move to Ready (R)
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    One todo per PRD moved
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    Reference ID: prd-&lt;slug&gt;
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Planning Updates (U)
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    One todo per planning update file
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400">•</span>
                    Reference ID: Update filename
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Toolkit Flows */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Toolkit Todo Flows
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Pending Updates
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    One todo per pending update file
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    Ref: pending-update filename
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Direct Requests
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    One todo per user request task
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    Ref: toolkit-task-###
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Post-Change Workflow
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    One todo per mandatory step
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    Ref: postchange-step-###
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* uiTodos Schema */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              uiTodos Schema (builder-state.json)
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              The <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">uiTodos</code> object
              in builder-state.json stores the current todo state.
            </p>

            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                docs/builder-state.json
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`{
  "lastActivity": "2026-02-21T15:30:00Z",
  "currentPrd": "feature-auth",
  "currentStory": "US-003",
  "uiTodos": {
    "items": [
      {
        "id": "todo-1",
        "content": "Implement login form validation",
        "status": "in_progress",
        "priority": "high",
        "createdAt": "2026-02-21T14:00:00Z"
      },
      {
        "id": "todo-2",
        "content": "Add password reset flow",
        "status": "pending",
        "priority": "medium",
        "createdAt": "2026-02-21T14:05:00Z"
      }
    ],
    "syncedAt": "2026-02-21T15:30:00Z"
  }
}`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Why persist todos?</strong> Sessions can be interrupted at any time.
              By persisting todo state, each primary agent can restore exactly where work left off —
              including in-progress items the user was tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Escalation to PRD */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Escalation to PRD
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Simple fixes stay simple. Complex changes become proper PRDs with planning
            and decomposition.
          </p>

          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              When to escalate:
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-violet-600 dark:text-violet-400">•</span>
                Update requires multiple coordinated changes across the toolkit
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 dark:text-violet-400">•</span>
                Update introduces new concepts that need documentation and testing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 dark:text-violet-400">•</span>
                Update affects multiple agents or skills in complex ways
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 dark:text-violet-400">•</span>
                User requests formal planning for a queued update
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <p className="text-neutral-400"># Example: &quot;Add Rust support&quot; is too complex for a simple update</p>
            <p className="mt-2">
              <span className="text-blue-400">@planner</span>{" "}
              <span className="text-neutral-400">create a PRD from the pending Rust support request</span>
            </p>
          </div>

          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            The original pending update is deleted (superseded by PRD), and @builder
            implements through the normal PRD workflow.
          </p>
        </div>
      </section>

      {/* Governance Critics */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Governance Critics
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            These specialized critics ensure the agent system maintains consistency
            and follows established contracts. They&apos;re invoked automatically during
            toolkit changes.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {governanceCritics.map((critic) => (
              <div
                key={critic.name}
                className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <Link
                  href={`/agents/${critic.name}`}
                  className="group flex items-center gap-2"
                >
                  <span className="rounded bg-amber-100 px-2 py-0.5 font-mono text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                    @{critic.name}
                  </span>
                  <svg
                    className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {critic.description}
                </p>
                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
                  <strong>Purpose:</strong> {critic.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Real-World Examples
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Continuous Toolkit Evolution
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                You&apos;re building a feature when @developer mentions it doesn&apos;t have guidance
                for a pattern you&apos;re using. It queues an update. Next week, @toolkit
                presents the queue — 5 improvements discovered organically. You review
                and approve them. Your toolkit just got better without any dedicated
                &quot;maintenance time.&quot;
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Schema Migrations at Scale
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                @toolkit updates the project.json schema to add a new required field.
                It automatically queues migration instructions for all 12 of your projects.
                As you work on each project, @builder offers to apply the migration.
                No project gets left behind; no project is forced to update before you&apos;re ready.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Team Knowledge Capture
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                A team member discovers a gotcha with the database library. They tell
                @developer to queue a toolkit update. @toolkit adds it to the coding
                conventions. Now every future implementation — by any team member —
                benefits from that knowledge. Institutional memory, automated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Concepts */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Related Concepts
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/concepts/workflow"
              className="group rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                The Workflow Loop
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Understand the build-review-ship cycle for implementing features.
              </p>
              <span className="mt-4 flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-200">
                Learn more
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/concepts/agents"
              className="group rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Understanding Agents
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Deep dive into primary vs sub-agents and how they specialize.
              </p>
              <span className="mt-4 flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-200">
                Learn more
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Related Skills */}
          <h3 className="mt-10 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Related Skills
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Link
              href="/skills/builder-state"
              className="group rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <h4 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
                Builder State
              </h4>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                Manage builder session state for resumability and heartbeat.
              </p>
            </Link>

            <Link
              href="/skills/prd-workflow"
              className="group rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <h4 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
                PRD Workflow
              </h4>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                Build features from PRDs with story tracking and state transitions.
              </p>
            </Link>

            <Link
              href="/skills/adhoc-workflow"
              className="group rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <h4 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
                Adhoc Workflow
              </h4>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                Handle direct requests and one-off tasks without PRD overhead.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
