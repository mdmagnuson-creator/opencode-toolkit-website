import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function TestingConceptPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Testing System Architecture
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            The toolkit includes 10 specialized testing agents organized into
            layers. An orchestrator routes to unit test specialists, E2E testers,
            and QA agents—each optimized for different testing needs.
          </p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Testing Agent Hierarchy
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The testing system is organized into four layers, each handling
            different aspects of quality assurance.
          </p>

          {/* Architecture Diagram */}
          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="space-y-6">
              {/* Layer 1: Orchestrator */}
              <div>
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                  Orchestrator Layer
                </p>
                <div className="flex justify-center">
                  <div className="rounded-lg border-2 border-green-300 bg-green-50 px-6 py-3 dark:border-green-700 dark:bg-green-950">
                    <div className="text-center">
                      <code className="text-sm font-semibold text-green-900 dark:text-green-100">
                        tester
                      </code>
                      <p className="mt-1 text-xs text-green-700 dark:text-green-400">
                        Routes to specialists based on file patterns
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
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

              {/* Layer 2: Unit Test Specialists */}
              <div>
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                  Unit Test Specialists
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { name: "jest-tester", desc: "Backend JS/TS" },
                    { name: "react-tester", desc: "React + RTL" },
                    { name: "go-tester", desc: "Go testify" },
                  ].map((agent) => (
                    <div
                      key={agent.name}
                      className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-950"
                    >
                      <code className="text-sm font-medium text-blue-900 dark:text-blue-200">
                        {agent.name}
                      </code>
                      <p className="mt-0.5 text-xs text-blue-700 dark:text-blue-400">
                        {agent.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
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

              {/* Layer 3: E2E Testing */}
              <div>
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                  E2E Testing Layer
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { name: "e2e-playwright", desc: "Writes E2E tests" },
                    { name: "e2e-reviewer", desc: "Identifies test gaps" },
                    { name: "playwright-dev", desc: "Automation tasks" },
                    { name: "e2e-tester", desc: "Runs full suites" },
                  ].map((agent) => (
                    <div
                      key={agent.name}
                      className="rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 dark:border-purple-800 dark:bg-purple-950"
                    >
                      <code className="text-sm font-medium text-purple-900 dark:text-purple-200">
                        {agent.name}
                      </code>
                      <p className="mt-0.5 text-xs text-purple-700 dark:text-purple-400">
                        {agent.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
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

              {/* Layer 4: QA/Adversarial */}
              <div>
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                  QA / Adversarial Layer
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { name: "qa", desc: "Coordinates testing" },
                    { name: "qa-explorer", desc: "Finds bugs adversarially" },
                    { name: "qa-browser-tester", desc: "Bug → regression test" },
                  ].map((agent) => (
                    <div
                      key={agent.name}
                      className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 dark:border-orange-800 dark:bg-orange-950"
                    >
                      <code className="text-sm font-medium text-orange-900 dark:text-orange-200">
                        {agent.name}
                      </code>
                      <p className="mt-0.5 text-xs text-orange-700 dark:text-orange-400">
                        {agent.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Tester Orchestrator Works */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            How the Tester Orchestrator Works
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The{" "}
            <code className="rounded bg-green-100 px-1.5 py-0.5 font-mono text-sm text-green-900 dark:bg-green-900 dark:text-green-100">
              tester
            </code>{" "}
            agent is the central coordinator for all test generation. It receives
            test requests, analyzes which files need testing, and delegates to
            the appropriate specialist agents.
          </p>

          {/* Process Steps */}
          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                The Orchestration Process
              </h3>
              <ol className="mt-4 space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-50">
                      Receive Test Request
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      The orchestrator receives a request to generate tests—either
                      from a workflow automation or a direct user request.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-50">
                      Analyze Files
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Examines file extensions, import patterns, and project
                      structure to determine which specialist to invoke.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-50">
                      Route to Specialists
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Delegates test generation to the appropriate agent(s) based
                      on file patterns and project configuration.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                    4
                  </span>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-50">
                      Run & Verify
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Executes the generated tests and handles failures through
                      the retry loop (up to 3 attempts).
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Routing Logic Table */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Routing Logic
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              The orchestrator uses file patterns to determine which specialist
              agent handles each file:
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                <thead className="bg-neutral-50 dark:bg-neutral-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300"
                    >
                      File Pattern
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300"
                    >
                      Routes To
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300"
                    >
                      Test Framework
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                        *.tsx
                      </code>
                      ,{" "}
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                        *.jsx
                      </code>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                        react-tester
                      </code>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      React Testing Library + Jest
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                        *.ts
                      </code>
                      ,{" "}
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                        *.js
                      </code>{" "}
                      <span className="text-xs text-neutral-500">(backend)</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                        jest-tester
                      </code>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Jest
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                        *.go
                      </code>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                        go-tester
                      </code>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Go testing + testify
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                        *.py
                      </code>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                        python-tester
                      </code>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      pytest
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Test Loop Diagram */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Test Loop &amp; Retry Handling
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              When tests fail, the orchestrator attempts to fix and retry—up to 3
              times before deferring:
            </p>
            <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex flex-col items-center space-y-4">
                {/* Run Tests */}
                <div className="flex w-full max-w-xs items-center justify-center rounded-lg border-2 border-green-300 bg-green-50 px-4 py-3 dark:border-green-700 dark:bg-green-950">
                  <span className="text-sm font-semibold text-green-900 dark:text-green-100">
                    Run Tests
                  </span>
                </div>

                {/* Arrow with diamond */}
                <div className="flex flex-col items-center">
                  <svg
                    className="h-6 w-6 text-neutral-400 dark:text-neutral-600"
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

                {/* Decision Diamond */}
                <div className="flex w-full max-w-xs items-center justify-center rounded-lg border-2 border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-700 dark:bg-amber-950">
                  <span className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                    Tests Pass?
                  </span>
                </div>

                {/* Two branches */}
                <div className="flex w-full max-w-md justify-center gap-8">
                  {/* Pass branch */}
                  <div className="flex flex-col items-center">
                    <span className="mb-2 text-xs font-medium text-green-600 dark:text-green-400">
                      Yes
                    </span>
                    <div className="rounded-lg border-2 border-green-300 bg-green-50 px-4 py-2 dark:border-green-700 dark:bg-green-950">
                      <span className="text-sm font-semibold text-green-900 dark:text-green-100">
                        Done ✓
                      </span>
                    </div>
                  </div>

                  {/* Fail branch */}
                  <div className="flex flex-col items-center">
                    <span className="mb-2 text-xs font-medium text-red-600 dark:text-red-400">
                      No
                    </span>
                    <div className="rounded-lg border-2 border-red-300 bg-red-50 px-4 py-2 dark:border-red-700 dark:bg-red-950">
                      <span className="text-sm font-semibold text-red-900 dark:text-red-100">
                        Analyze & Fix
                      </span>
                    </div>
                    <svg
                      className="my-2 h-6 w-6 text-neutral-400 dark:text-neutral-600"
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
                    <div className="rounded-lg border-2 border-blue-300 bg-blue-50 px-4 py-2 dark:border-blue-700 dark:bg-blue-950">
                      <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                        Retry (max 3×)
                      </span>
                    </div>
                    <svg
                      className="my-2 h-6 w-6 text-neutral-400 dark:text-neutral-600"
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
                    <div className="rounded-lg border-2 border-orange-300 bg-orange-50 px-4 py-2 dark:border-orange-700 dark:bg-orange-950">
                      <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                        Defer to Human
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="mt-6 rounded-lg bg-white p-4 dark:bg-neutral-800">
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  <strong>Max 3 attempts:</strong> If tests still fail after 3
                  fix attempts, the orchestrator defers to human review rather
                  than continuing indefinitely. This prevents infinite loops and
                  ensures complex issues get proper attention.
                </p>
              </div>
            </div>
          </div>

          {/* Link to full agent page */}
          <div className="mt-8">
            <Link
              href="/agents/tester"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              View full tester agent documentation
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tester Modes */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Three Operational Modes
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The tester orchestrator operates in different modes depending on
            context. Each mode optimizes for different testing scenarios.
          </p>

          <div className="mt-10 space-y-6">
            {/* Story Mode */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
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
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    Story Mode
                  </h3>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                    Used during PRD implementation. After each user story is
                    completed, tests are automatically generated to cover the new
                    functionality.
                  </p>
                  <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Example:
                    </p>
                    <p className="mt-1 font-mono text-sm text-blue-800 dark:text-blue-200">
                      &quot;When builder completes US-003, tester automatically
                      generates tests for all changed files in that story&quot;
                    </p>
                  </div>
                  <div className="mt-4 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      When to use:
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Building features from PRDs—tests are generated as part of
                      the workflow after each story completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad-hoc Mode */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white">
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
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    Ad-hoc Mode
                  </h3>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                    For direct test requests outside of PRD workflows. Scopes
                    testing to specific files for fast, targeted coverage.
                  </p>
                  <div className="mt-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
                    <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
                      Example:
                    </p>
                    <p className="mt-1 font-mono text-sm text-purple-800 dark:text-purple-200">
                      &quot;Write tests for UserProfile.tsx&quot; → tester scopes
                      to just that component and routes to react-tester
                    </p>
                  </div>
                  <div className="mt-4 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      When to use:
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Quick fixes, bug patches, or when you just need tests for
                      specific files without running a full workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Suite Mode */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    Full Suite Mode
                  </h3>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                    Comprehensive test generation and execution across the entire
                    codebase. Identifies coverage gaps and ensures all critical
                    paths are tested.
                  </p>
                  <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">
                      Example:
                    </p>
                    <p className="mt-1 font-mono text-sm text-green-800 dark:text-green-200">
                      &quot;Run all tests with coverage analysis&quot; → tester
                      executes entire suite, identifies untested code, generates
                      coverage report
                    </p>
                  </div>
                  <div className="mt-4 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      When to use:
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Before major releases, when bootstrapping test coverage, or
                      for periodic quality audits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layer Details */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Layer Deep Dive
          </h2>

          <div className="mt-10 space-y-12">
            {/* Orchestrator */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  Orchestrator Layer
                </h3>
              </div>
              <div className="mt-4 pl-11">
                <p className="text-neutral-700 dark:text-neutral-400">
                  The{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                    tester
                  </code>{" "}
                  agent is the main entry point for all testing tasks. It analyzes
                  file patterns and routes to the appropriate specialist:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    <span>
                      <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
                        *.tsx
                      </code>{" "}
                      /{" "}
                      <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
                        *.jsx
                      </code>{" "}
                      → routes to <strong>react-tester</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    <span>
                      <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
                        *.ts
                      </code>{" "}
                      /{" "}
                      <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
                        *.js
                      </code>{" "}
                      (backend) → routes to <strong>jest-tester</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    <span>
                      <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
                        *.go
                      </code>{" "}
                      → routes to <strong>go-tester</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Unit Test Specialists */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  Unit Test Specialists
                </h3>
              </div>
              <div className="mt-4 pl-11">
                <p className="text-neutral-700 dark:text-neutral-400">
                  Language-specific agents that understand testing idioms and best
                  practices for each stack.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      jest-tester
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Backend JS/TS testing with Jest. Handles Node.js services,
                      utilities, and API logic.
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      react-tester
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      React Testing Library. Tests components, hooks, and UI
                      interactions.
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      go-tester
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Go testing with testify and httptest for handlers and
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* E2E Testing */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  E2E Testing Layer
                </h3>
              </div>
              <div className="mt-4 pl-11">
                <p className="text-neutral-700 dark:text-neutral-400">
                  End-to-end testing using Playwright. Tests complete user flows
                  through the browser.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      e2e-playwright
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Writes Playwright E2E tests for user flows, forms, and
                      critical paths.
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      e2e-reviewer
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Reviews UI changes and identifies areas needing E2E
                      coverage.
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      playwright-dev
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Implements Playwright automation tasks, fixtures, and
                      utilities.
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      e2e-tester
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Runs full E2E test suites and reports results. Primary
                      agent for E2E execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QA Layer */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white">
                  4
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  QA / Adversarial Layer
                </h3>
              </div>
              <div className="mt-4 pl-11">
                <p className="text-neutral-700 dark:text-neutral-400">
                  Exploratory testing that finds bugs through adversarial
                  thinking—testing edge cases, unusual inputs, and unexpected user
                  behaviors.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      qa
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Coordinates exploratory testing sessions and prioritizes
                      what to test.
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      qa-explorer
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Uses browser-use CLI to actively explore the app and find
                      bugs.
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <code className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      qa-browser-tester
                    </code>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Converts bug findings into Playwright regression tests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Test Specialists */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Unit Test Specialists
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            Each specialist agent is optimized for a specific language and testing
            framework, understanding the idioms and best practices unique to that
            stack.
          </p>

          {/* Specialist Cards */}
          <div className="mt-10 space-y-6">
            {/* jest-tester */}
            <div className="rounded-xl border border-blue-200 bg-white p-6 dark:border-blue-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
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
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        jest-tester
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Backend JavaScript/TypeScript Testing
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    Generates comprehensive Jest tests for Node.js services,
                    utilities, API routes, and backend logic. Understands async
                    patterns, mocking strategies, and TypeScript typing.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* File Patterns */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    File Patterns
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <code className="rounded bg-blue-100 px-2 py-1 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                      *.ts
                    </code>
                    <code className="rounded bg-blue-100 px-2 py-1 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                      *.js
                    </code>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      (backend only)
                    </span>
                  </div>
                </div>

                {/* Framework */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Testing Framework
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Jest
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Module mocking with jest.mock()
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Spy functions and mock implementations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Async/await and Promise testing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Coverage reporting with thresholds
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Snapshot testing for data structures
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Timer mocking (setTimeout, setInterval)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/jest-tester"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View full agent documentation
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* react-tester */}
            <div className="rounded-xl border border-purple-200 bg-white p-6 dark:border-purple-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
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
                          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        react-tester
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        React Component Testing
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    Generates tests for React components using React Testing
                    Library. Focuses on testing user interactions and behavior
                    rather than implementation details.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* File Patterns */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    File Patterns
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <code className="rounded bg-purple-100 px-2 py-1 text-sm font-medium text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                      *.tsx
                    </code>
                    <code className="rounded bg-purple-100 px-2 py-1 text-sm font-medium text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                      *.jsx
                    </code>
                  </div>
                </div>

                {/* Framework */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Testing Framework
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    React Testing Library + Jest
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      User event simulation (click, type, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Accessible queries (getByRole, getByLabelText)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Async rendering with waitFor/findBy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Custom hooks testing with renderHook
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Component snapshot testing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Context and provider mocking
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/react-tester"
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  View full agent documentation
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* go-tester */}
            <div className="rounded-xl border border-cyan-200 bg-white p-6 dark:border-cyan-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600 text-white">
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
                          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        go-tester
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Go Testing
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    Generates idiomatic Go tests using the standard library testing
                    package, testify assertions, and httptest for HTTP handlers.
                    Follows Go testing conventions and table-driven test patterns.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* File Patterns */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    File Patterns
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <code className="rounded bg-cyan-100 px-2 py-1 text-sm font-medium text-cyan-900 dark:bg-cyan-900 dark:text-cyan-100">
                      *.go
                    </code>
                  </div>
                </div>

                {/* Framework */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Testing Framework
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Go testing + testify + httptest
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      Table-driven tests with subtests
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      Testify assertions (assert, require)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      HTTP handler testing with httptest
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      Mock interfaces with testify/mock
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      Parallel test execution (t.Parallel)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      Benchmark testing support
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/go-tester"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  View full agent documentation
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Override System */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Project-Specific Overrides
            </h3>
            <p className="mt-4 text-neutral-700 dark:text-neutral-400">
              Projects can override global testers with project-specific versions
              to customize testing behavior, add custom utilities, or enforce
              project conventions.
            </p>

            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
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
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    How it works
                  </p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    Place a custom tester definition in your project&apos;s{" "}
                    <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-xs font-medium dark:bg-neutral-700">
                      docs/agents/
                    </code>{" "}
                    directory. The toolkit will use your project version instead
                    of the global agent.
                  </p>

                  {/* Example structure */}
                  <div className="mt-4 rounded-lg bg-white p-4 dark:bg-neutral-800">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                      Example: Override jest-tester
                    </p>
                    <pre className="mt-3 overflow-x-auto text-sm">
                      <code className="text-neutral-700 dark:text-neutral-300">
{`your-project/
├── docs/
│   └── agents/
│       └── jest-tester.md   ← Overrides global
├── src/
│   └── ...
└── package.json`}
                      </code>
                    </pre>
                  </div>

                  {/* Use cases */}
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                      Common Use Cases
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>
                          Custom test utilities or helpers unique to your project
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>
                          Project-specific mocking patterns (e.g., mock your auth
                          layer)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>
                          Enforcing team conventions (naming, structure, coverage
                          thresholds)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>
                          Integration with project-specific testing infrastructure
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Priority note */}
            <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <div className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">
                    Override Priority
                  </p>
                  <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
                    Project agents in{" "}
                    <code className="rounded bg-blue-100 px-1 py-0.5 text-xs dark:bg-blue-900">
                      docs/agents/
                    </code>{" "}
                    take priority over global toolkit agents. This applies to all
                    agent types, not just testers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E2E Testing System */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            E2E Testing System
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The toolkit includes a complete end-to-end testing pipeline using
            Playwright. Four specialized agents work together to identify test
            gaps, write comprehensive tests, and run full browser-based test
            suites.
          </p>

          {/* E2E Workflow Diagram */}
          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              E2E Testing Workflow
            </h3>

            <div className="mt-6 space-y-4">
              {/* Step 1: UI Changes */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                  1
                </div>
                <div className="flex-1 rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 dark:border-neutral-600 dark:bg-neutral-800">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    UI Changes Made
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Code changes to components, pages, or user flows
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-14">
                <svg
                  className="h-6 w-6 text-neutral-400 dark:text-neutral-600"
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

              {/* Step 2: e2e-reviewer */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                  2
                </div>
                <div className="flex-1 rounded-lg border-2 border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-700 dark:bg-amber-950">
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                      e2e-reviewer
                    </code>
                    <span className="rounded bg-amber-200 px-1.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-800 dark:text-amber-200">
                      analyzes
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                    Reviews git diff, identifies UI areas needing E2E coverage
                  </p>
                </div>
              </div>

              {/* Arrow with output */}
              <div className="flex items-center gap-4 pl-14">
                <svg
                  className="h-6 w-6 shrink-0 text-neutral-400 dark:text-neutral-600"
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
                <div className="rounded-lg bg-neutral-200 px-3 py-1.5 dark:bg-neutral-700">
                  <code className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    e2e-areas.json
                  </code>
                </div>
              </div>

              {/* Step 3: e2e-playwright */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  3
                </div>
                <div className="flex-1 rounded-lg border-2 border-purple-300 bg-purple-50 px-4 py-3 dark:border-purple-700 dark:bg-purple-950">
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                      e2e-playwright
                    </code>
                    <span className="rounded bg-purple-200 px-1.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                      writes
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-purple-700 dark:text-purple-400">
                    Reads manifest, writes comprehensive Playwright tests
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-14">
                <svg
                  className="h-6 w-6 text-neutral-400 dark:text-neutral-600"
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

              {/* Step 4: e2e-tester */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                  4
                </div>
                <div className="flex-1 rounded-lg border-2 border-green-300 bg-green-50 px-4 py-3 dark:border-green-700 dark:bg-green-950">
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-semibold text-green-900 dark:text-green-100">
                      e2e-tester
                    </code>
                    <span className="rounded bg-green-200 px-1.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-800 dark:text-green-200">
                      runs
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-green-700 dark:text-green-400">
                    Executes full E2E suite, generates failure reports
                  </p>
                </div>
              </div>

              {/* Two outcome branches */}
              <div className="flex justify-center gap-8 pl-14 pt-2">
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-xs font-medium text-green-600 dark:text-green-400">
                    Pass
                  </span>
                  <div className="rounded-lg border-2 border-green-300 bg-green-50 px-3 py-2 dark:border-green-700 dark:bg-green-950">
                    <span className="text-sm font-semibold text-green-900 dark:text-green-100">
                      Ready to ship
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-xs font-medium text-red-600 dark:text-red-400">
                    Fail
                  </span>
                  <div className="rounded-lg border-2 border-red-300 bg-red-50 px-3 py-2 dark:border-red-700 dark:bg-red-950">
                    <span className="text-sm font-semibold text-red-900 dark:text-red-100">
                      Draft PRD created
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* E2E Agent Cards */}
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              E2E Testing Agents
            </h3>

            {/* e2e-reviewer */}
            <div className="rounded-xl border border-amber-200 bg-white p-6 dark:border-amber-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
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
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        e2e-reviewer
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Test Gap Analyzer
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    Analyzes git diffs to identify UI areas that need E2E test
                    coverage. Creates a structured manifest of test requirements
                    for other agents to consume.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Primary Output */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Primary Output
                  </p>
                  <div className="mt-2">
                    <code className="rounded bg-amber-100 px-2 py-1 text-sm font-medium text-amber-900 dark:bg-amber-900 dark:text-amber-100">
                      e2e-areas.json
                    </code>
                  </div>
                </div>

                {/* Invoked By */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Typically Invoked By
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    builder, developer, or workflow automation
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Git diff analysis for changed UI components
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Identifies user flows affected by changes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Detects forms, modals, and interactive elements
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Prioritizes critical paths for testing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Structured JSON manifest generation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Integration with existing test coverage
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/e2e-reviewer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                >
                  View full agent documentation
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* e2e-playwright */}
            <div className="rounded-xl border border-purple-200 bg-white p-6 dark:border-purple-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
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
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        e2e-playwright
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        E2E Test Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    Reads the e2e-areas.json manifest and writes comprehensive
                    Playwright E2E tests for each identified area. Generates
                    tests that cover user flows, forms, and critical paths.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Test Output */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Test Output
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <code className="rounded bg-purple-100 px-2 py-1 text-sm font-medium text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                      *.spec.ts
                    </code>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      in e2e/ or tests/
                    </span>
                  </div>
                </div>

                {/* Framework */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Testing Framework
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Playwright Test
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Page object pattern for maintainability
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Form submission and validation tests
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Navigation and routing verification
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Authentication flow testing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Visual regression with screenshots
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Multi-browser testing support
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/e2e-playwright"
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  View full agent documentation
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* playwright-dev */}
            <div className="rounded-xl border border-indigo-200 bg-white p-6 dark:border-indigo-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
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
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        playwright-dev
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Playwright Automation Specialist
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    General-purpose Playwright implementation agent for custom
                    automation tasks, fixtures, and utilities. Can be invoked
                    directly for Playwright-specific work outside the standard
                    E2E workflow.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Use Cases */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Common Use Cases
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                    <li>Custom test fixtures</li>
                    <li>Shared page objects</li>
                    <li>Helper utilities</li>
                  </ul>
                </div>

                {/* Direct Invocation */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Invocation
                  </p>
                  <div className="mt-2">
                    <code className="rounded bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100">
                      @playwright-dev
                    </code>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    Can be invoked directly for Playwright tasks
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Custom fixture development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Reusable page object classes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Test data factories
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      API mocking and interception
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Browser context configuration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Parallel test orchestration
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/playwright-dev"
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  View full agent documentation
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* e2e-tester */}
            <div className="rounded-xl border border-green-200 bg-white p-6 dark:border-green-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
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
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        e2e-tester
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        E2E Suite Runner
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    The primary agent for running full E2E test suites. Executes
                    all Playwright tests, generates detailed failure reports, and
                    creates draft PRDs for any failures that need fixing.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* On Failure */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    On Test Failure
                  </p>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Creates draft PRD for fix
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Failures are tracked and queued for resolution
                  </p>
                </div>

                {/* Dev Server */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Execution Environment
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Uses dev server for testing
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Tests run against local development server
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Full test suite execution
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Parallel browser testing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Detailed failure reports with screenshots
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Automatic draft PRD generation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Retry logic for flaky tests
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      CI/CD integration support
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/e2e-tester"
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                >
                  View full agent documentation
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Key Concepts
            </h3>

            <div className="mt-6 space-y-4">
              {/* e2e-areas.json */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
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
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      The e2e-areas.json Manifest
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      A structured JSON file that describes which UI areas need
                      E2E test coverage. Created by{" "}
                      <code className="rounded bg-amber-100 px-1 py-0.5 text-xs dark:bg-amber-900">
                        e2e-reviewer
                      </code>{" "}
                      and consumed by{" "}
                      <code className="rounded bg-purple-100 px-1 py-0.5 text-xs dark:bg-purple-900">
                        e2e-playwright
                      </code>
                      .
                    </p>
                    <div className="mt-4 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                      <pre className="overflow-x-auto text-sm">
                        <code className="text-neutral-700 dark:text-neutral-300">
{`{
  "areas": [
    {
      "name": "Login Flow",
      "priority": "critical",
      "paths": ["/login", "/forgot-password"],
      "interactions": ["form-submit", "validation"]
    },
    {
      "name": "Dashboard Navigation",
      "priority": "high",
      "paths": ["/dashboard/*"],
      "interactions": ["nav-click", "search"]
    }
  ]
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Failures → Draft PRDs */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
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
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Failures Become Draft PRDs
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      When E2E tests fail, the{" "}
                      <code className="rounded bg-green-100 px-1 py-0.5 text-xs dark:bg-green-900">
                        e2e-tester
                      </code>{" "}
                      automatically generates a draft PRD describing the issue.
                      This ensures failures are tracked and queued for
                      resolution rather than being lost.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="rounded-lg bg-red-50 px-3 py-2 dark:bg-red-950">
                        <span className="text-sm font-medium text-red-900 dark:text-red-100">
                          Test Failure
                        </span>
                      </div>
                      <svg
                        className="h-5 w-5 text-neutral-400"
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
                      <div className="rounded-lg bg-blue-50 px-3 py-2 dark:bg-blue-950">
                        <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                          Draft PRD Created
                        </span>
                      </div>
                      <svg
                        className="h-5 w-5 text-neutral-400"
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
                      <div className="rounded-lg bg-green-50 px-3 py-2 dark:bg-green-950">
                        <span className="text-sm font-medium text-green-900 dark:text-green-100">
                          Fixed in Next Sprint
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dev Server */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
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
                        d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Using the Dev Server for E2E Tests
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      E2E tests run against your local development server,
                      configured via{" "}
                      <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-700">
                        project.json
                      </code>
                      . The{" "}
                      <code className="rounded bg-green-100 px-1 py-0.5 text-xs dark:bg-green-900">
                        e2e-tester
                      </code>{" "}
                      manages starting and stopping the server automatically.
                    </p>
                    <div className="mt-4 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                        From project.json
                      </p>
                      <pre className="mt-2 overflow-x-auto text-sm">
                        <code className="text-neutral-700 dark:text-neutral-300">
{`"apps": {
  "web": {
    "devPort": 3000,
    "framework": "nextjs"
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Testing Fits Into Workflows */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Testing in the Workflow
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Here&apos;s how testing agents integrate with the broader toolkit
            workflow:
          </p>

          {/* Workflow diagram */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    <code className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                      @builder
                    </code>{" "}
                    completes a feature
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Implementation is done, code is ready for testing
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-4">
                <svg
                  className="h-6 w-6 text-neutral-400"
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
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    <code className="rounded bg-green-100 px-1.5 py-0.5 font-mono text-sm text-green-900 dark:bg-green-900 dark:text-green-100">
                      tester
                    </code>{" "}
                    orchestrator is invoked
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Analyzes changed files and determines which specialists to
                    call
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-4">
                <svg
                  className="h-6 w-6 text-neutral-400"
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
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Specialists generate tests
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-700">
                      react-tester
                    </code>
                    ,{" "}
                    <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-700">
                      jest-tester
                    </code>
                    , etc. write tests for their domains
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-4">
                <svg
                  className="h-6 w-6 text-neutral-400"
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
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                  4
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    Tests run and verify
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    If tests pass, feature is ready. If they fail, issues are
                    reported back.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center pl-4">
                <svg
                  className="h-6 w-6 text-neutral-400"
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
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
                  5
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    E2E tests run (if configured)
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    <code className="rounded bg-purple-100 px-1 py-0.5 text-xs text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                      e2e-tester
                    </code>{" "}
                    runs full browser tests for complete coverage
                  </p>
                </div>
              </div>
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
              href="/concepts/agents"
              className="group rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Understanding Agents
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Learn how agents work together and how testing agents fit into
                the broader system.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-200">
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
              </div>
            </Link>

            <Link
              href="/concepts/workflow"
              className="group rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                The Workflow Loop
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                See how testing fits into the build-test-commit workflow during
                PRD implementation.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-200">
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
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
