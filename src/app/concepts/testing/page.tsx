import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";

const PAGE_SECTIONS = [
  { id: "architecture", label: "Architecture Overview" },
  { id: "tester-orchestrator", label: "Tester Orchestrator" },
  { id: "operational-modes", label: "Operational Modes" },
  { id: "rigor-profiles", label: "Testing Rigor Profiles" },
  { id: "story-intensity", label: "Per-Story Test Intensity" },
  { id: "test-flow", label: "Test Flow Automation" },
  { id: "layer-deep-dive", label: "Layer Deep Dive" },
  { id: "unit-test-specialists", label: "Unit Test Specialists" },
  { id: "e2e-testing-system", label: "E2E Testing System" },
  { id: "quality-patterns", label: "E2E Quality Patterns" },
  { id: "qa-adversarial", label: "QA & Adversarial Testing" },
  { id: "mutation-testing", label: "Mutation Testing" },
];

export default function TestingConceptPage() {
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
            Testing System Architecture
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            The toolkit includes 10 specialized testing agents organized into
            layers. An orchestrator routes to unit test specialists, E2E testers,
            and QA agents—each optimized for different testing needs.
          </p>

          {/* Quick Navigation */}
          <div className="mt-10">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Jump to
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="#architecture"
                className="group flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3 transition-all hover:border-green-300 hover:bg-green-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-green-700 dark:hover:bg-green-950"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
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
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-neutral-900 group-hover:text-green-700 dark:text-neutral-100 dark:group-hover:text-green-300">
                  Architecture Overview
                </span>
              </a>

              <a
                href="#test-flow"
                className="group flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3 transition-all hover:border-indigo-300 hover:bg-indigo-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-indigo-700 dark:hover:bg-indigo-950"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400">
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
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-neutral-900 group-hover:text-indigo-700 dark:text-neutral-100 dark:group-hover:text-indigo-300">
                  Test Flow Automation
                </span>
              </a>

              <a
                href="#quality-patterns"
                className="group flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3 transition-all hover:border-pink-300 hover:bg-pink-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-pink-700 dark:hover:bg-pink-950"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-400">
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
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-neutral-900 group-hover:text-pink-700 dark:text-neutral-100 dark:group-hover:text-pink-300">
                  E2E Quality Patterns
                </span>
              </a>

              <a
                href="#mutation-testing"
                className="group flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3 transition-all hover:border-sky-300 hover:bg-sky-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-sky-700 dark:hover:bg-sky-950"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-400">
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
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-neutral-900 group-hover:text-sky-700 dark:text-neutral-100 dark:group-hover:text-sky-300">
                  Mutation Testing
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section id="architecture" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
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
      <section id="tester-orchestrator" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
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
      <section id="operational-modes" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
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

              {/* Visual Audit Mode */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                    <svg
                      className="h-5 w-5 text-purple-600 dark:text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      Visual Audit Mode
                    </h3>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-400">
                      Full-site UX sweeps that systematically check every page for visual
                      inconsistencies, accessibility issues, and design system violations.
                      Can also perform targeted post-fix re-checks after issues are resolved.
                    </p>
                    <div className="mt-4 rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
                      <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
                        Example:
                      </p>
                      <p className="mt-1 font-mono text-sm text-purple-800 dark:text-purple-200">
                        &quot;Run visual audit on all pages&quot; → tester
                        crawls site, captures screenshots, flags inconsistent
                        spacing, broken dark mode, and accessibility violations
                      </p>
                    </div>
                    <div className="mt-4 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        When to use:
                      </p>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        After major UI refactors, before releases, when verifying
                        design system compliance, or for targeted re-checks after
                        fixing visual bugs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Rigor Profiles */}
      <section id="rigor-profiles" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Testing Rigor Profiles
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            When starting a PRD, you select a testing rigor profile that controls
            baseline behavior for test generation, critic strictness, and quality
            checks throughout the entire PRD lifecycle.
          </p>

          {/* Profile Selection */}
          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
              Profile Selection at PRD Start
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              When you select a PRD to work on, Builder prompts you to choose a
              testing rigor level. This choice is persisted in{" "}
              <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-700">
                builder-state.json
              </code>{" "}
              and used throughout the PRD.
            </p>
            <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
              <p className="text-neutral-400"># PRD start prompt</p>
              <p className="mt-2">
                <span className="text-green-400">Select testing rigor:</span>
              </p>
              <p className="mt-1">
                <span className="text-blue-400">[R]</span> Rapid — speed-first, skip auto-generation
              </p>
              <p>
                <span className="text-blue-400">[S]</span> Standard — balanced default (recommended)
              </p>
              <p>
                <span className="text-blue-400">[T]</span> Strict — high confidence, quality checks
              </p>
              <p>
                <span className="text-blue-400">[C]</span> Compliance — no bypass on failures
              </p>
            </div>
          </div>

          {/* Profile Comparison Table */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Profile Comparison
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Each profile configures baseline test behavior for the PRD:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                <thead className="bg-neutral-50 dark:bg-neutral-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Profile
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Auto-Generate
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Critic Mode
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Quality Checks
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Policy
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-amber-100 px-1.5 py-0.5 text-sm font-medium text-amber-900 dark:bg-amber-900 dark:text-amber-100">
                        rapid
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-red-600 dark:text-red-400">false</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      fast
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-red-600 dark:text-red-400">false</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Speed-first
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                        standard
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-green-600 dark:text-green-400">true</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      balanced
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-red-600 dark:text-red-400">false</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Balanced default
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-sm font-medium text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                        strict
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-green-600 dark:text-green-400">true</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      strict
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-green-600 dark:text-green-400">true</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      High confidence
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-red-100 px-1.5 py-0.5 text-sm font-medium text-red-900 dark:bg-red-900 dark:text-red-100">
                        compliance
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-green-600 dark:text-green-400">true</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      strict
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="text-green-600 dark:text-green-400">true</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      No bypass allowed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Profile Resolution */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Profile Resolution Order
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              The effective rigor profile is resolved in this order (highest priority first):
            </p>
            <ol className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  1
                </span>
                <div>
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                    builder-state.json → activePrd.testingRigor
                  </code>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Selected at PRD start, overrides project default
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  2
                </span>
                <div>
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                    project.json → testing.rigorProfile
                  </code>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Project-level default rigor setting
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-400 text-xs font-semibold text-white dark:bg-neutral-600">
                  3
                </span>
                <div>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Fallback: standard
                  </span>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Used when no explicit setting is found
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* When to Use Each */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                Use Rapid When...
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-amber-800 dark:text-amber-200">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400">•</span>
                  Prototyping or exploring an approach
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400">•</span>
                  Speed matters more than coverage
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400">•</span>
                  You&apos;ll write tests manually later
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-950">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                Use Standard When...
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  Normal feature development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  Want auto-generated tests without overhead
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  Default choice for most work
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-800 dark:bg-purple-950">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                Use Strict When...
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-purple-800 dark:text-purple-200">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  Critical features (auth, payments)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  Need quality checks (a11y, visual)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  Want extra confidence before release
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-semibold text-red-900 dark:text-red-100">
                Use Compliance When...
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-red-800 dark:text-red-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  Regulated environments (healthcare, finance)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  All checks must pass, no exceptions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  Audit trail requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Per-Story Test Intensity */}
      <section id="story-intensity" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Per-Story Test Intensity
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            Not all user stories need the same level of testing. Planner assigns
            a{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
              testIntensity
            </code>{" "}
            to each story, and Builder can reassess at runtime based on what it
            discovers during implementation.
          </p>

          {/* Intensity Levels */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Intensity Levels
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Each intensity level controls per-story test generation and execution:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                <thead className="bg-neutral-50 dark:bg-neutral-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Intensity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Unit Tests
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      E2E Tests
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                      Quality Checks
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-900 dark:bg-green-900 dark:text-green-100">
                        low
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Skip unless strict/compliance rigor
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Skip
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Skip
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-blue-100 px-1.5 py-0.5 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                        medium
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Generate &amp; run per story
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Defer to PRD completion
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Skip
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-amber-100 px-1.5 py-0.5 text-sm font-medium text-amber-900 dark:bg-amber-900 dark:text-amber-100">
                        high
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Generate &amp; run per story
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Generate &amp; queue per story
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Skip
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-3">
                      <code className="rounded bg-red-100 px-1.5 py-0.5 text-sm font-medium text-red-900 dark:bg-red-900 dark:text-red-100">
                        critical
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Generate &amp; run per story
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Generate &amp; queue per story
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                      Force quality checks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Assessment Sources */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Story Assessment Sources
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              The{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">
                testing.storyAssessment.source
              </code>{" "}
              setting in project.json controls who determines effective test intensity:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <code className="rounded bg-violet-100 px-2 py-0.5 text-sm font-semibold text-violet-900 dark:bg-violet-900 dark:text-violet-100">
                    planner
                  </code>
                </div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  Planner&apos;s assignment is final. Builder cannot escalate or
                  downgrade intensity.
                </p>
                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
                  Use when: Planning process is thorough and trusted.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <code className="rounded bg-blue-100 px-2 py-0.5 text-sm font-semibold text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                    builder
                  </code>
                </div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  Builder determines intensity at runtime based on implementation
                  complexity discovered.
                </p>
                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
                  Use when: Implementation often reveals surprises.
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-950">
                <div className="flex items-center gap-2">
                  <code className="rounded bg-green-100 px-2 py-0.5 text-sm font-semibold text-green-900 dark:bg-green-900 dark:text-green-100">
                    hybrid
                  </code>
                  <span className="text-xs text-green-700 dark:text-green-400">
                    (recommended)
                  </span>
                </div>
                <p className="mt-3 text-sm text-green-800 dark:text-green-200">
                  Planner sets baseline, Builder may escalate (not downgrade) based
                  on runtime signals.
                </p>
                <p className="mt-2 text-xs text-green-700 dark:text-green-400">
                  Use when: Want planning guidance with runtime flexibility.
                </p>
              </div>
            </div>
          </div>

          {/* Configuration Example */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Configuration
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Configure story assessment policy in your project.json:
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                docs/project.json
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`{
  "testing": {
    "rigorProfile": "standard",
    "storyAssessment": {
      "source": "hybrid",
      "allowDowngrade": false
    }
  }
}`}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              When{" "}
              <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
                allowDowngrade: false
              </code>
              , Builder can only escalate intensity (e.g., from{" "}
              <code className="text-xs">low</code> to{" "}
              <code className="text-xs">medium</code>), never reduce it.
            </p>
          </div>

          {/* State Tracking */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              State Tracking
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Builder tracks both planned and effective intensity in builder-state.json:
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                docs/builder-state.json
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`{
  "activePrd": {
    "prdSlug": "feature-auth",
    "testingRigor": "standard",
    "storyAssessments": {
      "US-001": {
        "planned": "low",
        "effective": "medium",
        "escalatedReason": "Discovered auth logic complexity"
      },
      "US-002": {
        "planned": "high",
        "effective": "high"
      }
    }
  }
}`}</code>
              </pre>
            </div>
          </div>

          {/* Link to test-flow */}
          <div className="mt-8 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950">
            <p className="text-sm text-indigo-800 dark:text-indigo-200">
              <strong>Canonical Reference:</strong> Per-story test behavior is
              defined in the{" "}
              <Link
                href="/skills/test-flow"
                className="font-medium underline hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                test-flow skill
              </Link>
              . The test-flow skill maps intensity levels to concrete unit/E2E
              generation actions and handles runtime escalation.
            </p>
          </div>
        </div>
      </section>

      {/* Test Flow Automation */}
      <section id="test-flow" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Test Flow Automation
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The{" "}
            <code className="rounded bg-indigo-100 px-1.5 py-0.5 font-mono text-sm text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100">
              test-flow
            </code>{" "}
            skill automates the entire test lifecycle—from generation through
            execution to failure handling. It coordinates between the builder
            workflow and testing agents to ensure quality gates are met.
          </p>

          {/* Automatic Test Generation Triggers */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Automatic Test Generation Triggers
            </h3>
            <p className="mt-4 text-neutral-700 dark:text-neutral-400">
              Tests are automatically generated at specific points in the
              workflow, without requiring manual intervention:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {/* PRD Mode */}
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
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h4 className="mt-4 font-semibold text-blue-900 dark:text-blue-100">
                  After Each Story
                </h4>
                <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                  In PRD mode, tests are automatically generated after each user
                  story completes. Unit tests run immediately; E2E tests are
                  queued.
                </p>
              </div>

              {/* Ad-hoc Mode */}
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-800 dark:bg-purple-950">
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
                <h4 className="mt-4 font-semibold text-purple-900 dark:text-purple-100">
                  On Request
                </h4>
                <p className="mt-2 text-sm text-purple-800 dark:text-purple-200">
                  In ad-hoc mode, tests are generated when explicitly requested
                  or after all ad-hoc todos complete. User chooses when to run
                  E2E.
                </p>
              </div>

              {/* Full Suite Mode */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-950">
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="mt-4 font-semibold text-green-900 dark:text-green-100">
                  Coverage Gaps
                </h4>
                <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                  During full suite mode, tests are generated for any untested
                  code paths identified through coverage analysis.
                </p>
              </div>
            </div>
          </div>

          {/* The Fix Loop Mechanism */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              The Fix Loop Mechanism
            </h3>
            <p className="mt-4 text-neutral-700 dark:text-neutral-400">
              When tests fail, the test-flow skill automatically attempts to fix
              the issues—up to 3 times before deferring to human review:
            </p>

            {/* Fix Loop Diagram */}
            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex flex-col items-center space-y-4">
                {/* Run Tests */}
                <div className="flex w-full max-w-xs items-center justify-center rounded-lg border-2 border-indigo-300 bg-indigo-50 px-4 py-3 dark:border-indigo-700 dark:bg-indigo-950">
                  <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                    Run Tests
                  </span>
                </div>

                {/* Arrow */}
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

                {/* Decision */}
                <div className="flex w-full max-w-xs items-center justify-center rounded-lg border-2 border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-700 dark:bg-amber-950">
                  <span className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                    Tests Pass?
                  </span>
                </div>

                {/* Two branches */}
                <div className="flex w-full max-w-lg justify-center gap-8">
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
                        Analyze Failures
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
                        @developer fixes
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
                    <div className="rounded-lg border-2 border-amber-300 bg-amber-50 px-4 py-2 dark:border-amber-700 dark:bg-amber-950">
                      <span className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                        Attempts &lt; 3?
                      </span>
                    </div>
                    <div className="mt-2 flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="mb-1 text-xs font-medium text-green-600 dark:text-green-400">
                          Yes
                        </span>
                        <div className="rounded bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-700">
                          ↑ Retry
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="mb-1 text-xs font-medium text-red-600 dark:text-red-400">
                          No
                        </span>
                        <div className="rounded-lg border-2 border-orange-300 bg-orange-50 px-3 py-1 dark:border-orange-700 dark:bg-orange-950">
                          <span className="text-xs font-semibold text-orange-900 dark:text-orange-100">
                            Defer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation callout */}
              <div className="mt-6 rounded-lg bg-white p-4 dark:bg-neutral-800">
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  <strong>Why max 3 attempts?</strong> This prevents infinite
                  loops while giving the AI enough chances to resolve common
                  issues. Complex problems that require human insight are
                  properly escalated rather than endlessly retried.
                </p>
              </div>
            </div>
          </div>

          {/* E2E Test Deferral */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              E2E Test Deferral
            </h3>
            <p className="mt-4 text-neutral-700 dark:text-neutral-400">
              Not all tests need to pass immediately. The test-flow skill uses
              different blocking behaviors for unit vs E2E tests:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Unit Tests - Blocking */}
              <div className="rounded-xl border border-red-200 bg-white p-5 dark:border-red-800 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400">
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
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Unit Tests: Blocking
                  </h4>
                </div>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                  Unit tests <strong>must pass</strong> before a story can be
                  marked complete. Failures block progress and trigger the fix
                  loop.
                </p>
                <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-950">
                  <p className="text-xs text-red-800 dark:text-red-200">
                    Story completion requires all unit tests green
                  </p>
                </div>
              </div>

              {/* E2E Tests - Deferrable */}
              <div className="rounded-xl border border-green-200 bg-white p-5 dark:border-green-800 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    E2E Tests: Deferrable
                  </h4>
                </div>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                  E2E tests can be <strong>deferred</strong> to PRD completion.
                  They&apos;re queued and run together before creating the PR.
                </p>
                <div className="mt-4 rounded-lg bg-green-50 p-3 dark:bg-green-950">
                  <p className="text-xs text-green-800 dark:text-green-200">
                    All deferred E2E tests run before final PR
                  </p>
                </div>
              </div>
            </div>

            {/* Tracking in builder-state.json */}
            <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
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
                    Tracking in builder-state.json
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    Deferred tests are tracked in the builder state file,
                    ensuring they&apos;re never forgotten:
                  </p>
                  <div className="mt-4 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                    <pre className="overflow-x-auto text-sm">
                      <code className="text-neutral-700 dark:text-neutral-300">
{`{
  "pendingTests": {
    "e2e": {
      "generated": [
        "e2e/login-flow.spec.ts",
        "e2e/checkout.spec.ts"
      ],
      "status": "pending",
      "deferredTo": "prd-completion"
    }
  }
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration with Tester Agent */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Integration with Tester Agent
            </h3>
            <p className="mt-4 text-neutral-700 dark:text-neutral-400">
              The test-flow skill acts as a coordinator between the builder
              workflow and the tester agent hierarchy:
            </p>

            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="space-y-4">
                {/* Builder triggers test-flow */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-950">
                    <code className="text-xs font-semibold text-blue-900 dark:text-blue-100">
                      builder
                    </code>
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
                  <div className="flex h-10 items-center rounded-lg border-2 border-indigo-300 bg-indigo-50 px-3 dark:border-indigo-700 dark:bg-indigo-950">
                    <code className="text-xs font-semibold text-indigo-900 dark:text-indigo-100">
                      test-flow skill
                    </code>
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950">
                    <code className="text-xs font-semibold text-green-900 dark:text-green-100">
                      tester
                    </code>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pl-14">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      1.
                    </span>{" "}
                    Builder loads test-flow skill during PRD mode
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      2.
                    </span>{" "}
                    test-flow determines when to generate/run tests
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      3.
                    </span>{" "}
                    test-flow invokes @tester for test generation
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      4.
                    </span>{" "}
                    tester routes to specialists (react-tester, jest-tester,
                    etc.)
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      5.
                    </span>{" "}
                    test-flow manages pendingTests state in builder-state.json
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Link to full skill page */}
          <div className="mt-8">
            <Link
              href="/skills/test-flow"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              View full test-flow skill documentation
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

      {/* Layer Details */}
      <section id="layer-deep-dive" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
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
      <section id="unit-test-specialists" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
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
      <section id="e2e-testing-system" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
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

              {/* Authentication Setup */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
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
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Authentication in E2E Tests
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      For authenticated test runs, use{" "}
                      <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-700">
                        globalSetup
                      </code>{" "}
                      with shared{" "}
                      <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-700">
                        storageState
                      </code>
                      . This authenticates once at suite start and shares the session
                      across all tests.
                    </p>

                    {/* Recommended Pattern */}
                    <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                      <p className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-300">
                        Recommended: globalSetup + storageState
                      </p>
                      <pre className="mt-2 overflow-x-auto text-sm">
                        <code className="text-green-800 dark:text-green-200">
{`// playwright.config.ts
export default defineConfig({
  globalSetup: './tests/global-setup.ts',
  use: {
    storageState: './tests/.auth/user.json',
  },
});

// tests/global-setup.ts
async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('/login');
  await page.fill('#email', process.env.TEST_USER);
  await page.fill('#password', process.env.TEST_PASS);
  await page.click('button[type="submit"]');
  await page.context().storageState({
    path: './tests/.auth/user.json'
  });
  await browser.close();
}`}
                        </code>
                      </pre>
                    </div>

                    {/* Anti-pattern Warning */}
                    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                      <p className="text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-300">
                        Anti-pattern: per-suite beforeAll auth
                      </p>
                      <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                        Avoid authenticating in each test file&apos;s{" "}
                        <code className="rounded bg-red-100 px-1 dark:bg-red-900">beforeAll</code>.
                        This triggers multiple login requests per test run, which:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                        <li>• <strong>Rate limit risk</strong> — Auth providers may throttle or block</li>
                        <li>• <strong>Slower runs</strong> — Login flow repeated N times</li>
                        <li>• <strong>Flaky tests</strong> — Network timing issues multiply</li>
                      </ul>
                      <pre className="mt-3 overflow-x-auto text-sm">
                        <code className="text-red-800 dark:text-red-200">
{`// ❌ Don't do this for default user flows
test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto('/login');
  await page.fill('#email', user);
  // Runs for every test file!
});`}
                        </code>
                      </pre>
                    </div>

                    <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
                      <strong>Exception:</strong> Per-suite auth is appropriate when testing
                      <em> different</em> user roles or permission levels that need distinct sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QA & Adversarial Testing */}
      <section id="qa-adversarial" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            QA &amp; Adversarial Testing
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            Beyond correctness testing, the toolkit includes a dedicated QA
            layer for exploratory, adversarial testing. These agents actively
            try to break your application—finding edge cases, race conditions,
            and unexpected behaviors that scripted tests miss.
          </p>

          {/* QA Workflow Diagram */}
          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              QA Testing Workflow
            </h3>

            <div className="mt-6 space-y-4">
              {/* Step 1: QA Coordinator */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                  1
                </div>
                <div className="flex-1 rounded-lg border-2 border-orange-300 bg-orange-50 px-4 py-3 dark:border-orange-700 dark:bg-orange-950">
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                      qa
                    </code>
                    <span className="rounded bg-orange-200 px-1.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-800 dark:text-orange-200">
                      coordinates
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-orange-700 dark:text-orange-400">
                    Dispatches exploratory testing tasks, prioritizes test areas
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

              {/* Step 2: QA Explorer */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700 dark:bg-red-900 dark:text-red-300">
                  2
                </div>
                <div className="flex-1 rounded-lg border-2 border-red-300 bg-red-50 px-4 py-3 dark:border-red-700 dark:bg-red-950">
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-semibold text-red-900 dark:text-red-100">
                      qa-explorer
                    </code>
                    <span className="rounded bg-red-200 px-1.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-800 dark:text-red-200">
                      explores
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                    Autonomously browses the app, tries edge cases, finds bugs
                  </p>
                </div>
              </div>

              {/* Arrow with browser-use */}
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
                <div className="rounded-lg bg-violet-100 px-3 py-1.5 dark:bg-violet-900">
                  <code className="text-xs font-medium text-violet-700 dark:text-violet-300">
                    browser-use CLI
                  </code>
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  (autonomous browsing)
                </span>
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
                    Bug Findings
                  </code>
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  (screenshots + reproduction steps)
                </span>
              </div>

              {/* Step 3: QA Browser Tester */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                  3
                </div>
                <div className="flex-1 rounded-lg border-2 border-teal-300 bg-teal-50 px-4 py-3 dark:border-teal-700 dark:bg-teal-950">
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                      qa-browser-tester
                    </code>
                    <span className="rounded bg-teal-200 px-1.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-800 dark:text-teal-200">
                      converts
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-teal-700 dark:text-teal-400">
                    Turns bug findings into permanent Playwright regression
                    tests
                  </p>
                </div>
              </div>

              {/* Final output */}
              <div className="flex justify-center pl-14 pt-2">
                <div className="rounded-lg border-2 border-green-300 bg-green-50 px-4 py-2 dark:border-green-700 dark:bg-green-950">
                  <span className="text-sm font-semibold text-green-900 dark:text-green-100">
                    Regression Tests in e2e/
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* QA Agent Cards */}
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              QA Testing Agents
            </h3>

            {/* qa coordinator */}
            <div className="rounded-xl border border-orange-200 bg-white p-6 dark:border-orange-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white">
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
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        qa
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        QA Coordinator
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    The central coordinator for all QA and exploratory testing.
                    Dispatches testing tasks to specialists, manages testing
                    sessions, and prioritizes which areas of the application
                    need the most attention.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Dispatch Mechanism */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Dispatch Mechanism
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Routes to qa-explorer or qa-browser-tester
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Based on testing phase and objectives
                  </p>
                </div>

                {/* Invoked By */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Typically Invoked By
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    builder, developer, or manual request
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      Exploratory testing session management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      Test area prioritization based on risk
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      Dispatches to explorer or browser-tester
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      Aggregates findings across sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      Tracks bug discovery and resolution
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      Coordinates with E2E testing workflow
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/qa"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
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

            {/* qa-explorer */}
            <div className="rounded-xl border border-red-200 bg-white p-6 dark:border-red-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
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
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        qa-explorer
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Adversarial Testing Agent
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    Uses the browser-use CLI to autonomously browse and interact
                    with your application like a real user—but with an
                    adversarial mindset. Tries edge cases, rapid interactions,
                    unusual inputs, and unexpected navigation patterns to find
                    bugs.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Primary Tool */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Primary Tool
                  </p>
                  <div className="mt-2">
                    <code className="rounded bg-violet-100 px-2 py-1 text-sm font-medium text-violet-900 dark:bg-violet-900 dark:text-violet-100">
                      browser-use CLI
                    </code>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Required dependency for autonomous browsing
                  </p>
                </div>

                {/* Output */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Output
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Bug findings with screenshots
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Includes reproduction steps for each issue
                  </p>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Autonomous browser navigation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Edge case input testing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Rapid interaction sequences
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Unusual navigation patterns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Screenshot capture on failures
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Reproduction step documentation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/qa-explorer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
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

            {/* qa-browser-tester */}
            <div className="rounded-xl border border-teal-200 bg-white p-6 dark:border-teal-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600 text-white">
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
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        qa-browser-tester
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Bug-to-Test Converter
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-700 dark:text-neutral-400">
                    Takes bug findings from qa-explorer and converts them into
                    permanent Playwright regression tests. Ensures that once a
                    bug is found, it can never silently regress—the test will
                    catch it.
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Input */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Input
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Bug findings from qa-explorer
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Screenshots and reproduction steps
                  </p>
                </div>

                {/* Output */}
                <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Output
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <code className="rounded bg-teal-100 px-2 py-1 text-sm font-medium text-teal-900 dark:bg-teal-900 dark:text-teal-100">
                      *.spec.ts
                    </code>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      regression tests
                    </span>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="rounded-lg bg-neutral-50 p-4 sm:col-span-2 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Key Capabilities
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      Converts bug reports to Playwright tests
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      Extracts reproduction steps automatically
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      Generates reliable test selectors
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      Adds appropriate assertions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      Integrates with existing E2E suite
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      Prevents silent regressions
                    </li>
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6">
                <Link
                  href="/agents/qa-browser-tester"
                  className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
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

          {/* Browser-Use CLI Callout */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Browser-Use CLI Dependency
            </h3>

            <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white">
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
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-violet-900 dark:text-violet-100">
                    External Dependency: browser-use
                  </p>
                  <p className="mt-2 text-sm text-violet-800 dark:text-violet-200">
                    The{" "}
                    <code className="rounded bg-violet-200 px-1 py-0.5 text-xs dark:bg-violet-800">
                      qa-explorer
                    </code>{" "}
                    agent relies on the{" "}
                    <strong>browser-use CLI</strong>—an external tool that
                    enables AI agents to control a real browser autonomously.
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      <span className="text-sm text-violet-800 dark:text-violet-200">
                        <strong>Real browser control:</strong> Navigates pages,
                        clicks elements, fills forms, and simulates real user
                        behavior
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      <span className="text-sm text-violet-800 dark:text-violet-200">
                        <strong>AI-driven exploration:</strong> The agent
                        decides what to try next based on what it sees, enabling
                        truly autonomous testing
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      <span className="text-sm text-violet-800 dark:text-violet-200">
                        <strong>Beyond scripted tests:</strong> Can discover
                        issues that predefined test scripts would never think to
                        check
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-violet-100 p-3 dark:bg-violet-900">
                    <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">
                      Note
                    </p>
                    <p className="mt-1 text-sm text-violet-700 dark:text-violet-300">
                      The browser-use CLI must be installed separately. See the{" "}
                      <a
                        href="https://github.com/browser-use/browser-use"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline hover:no-underline"
                      >
                        browser-use documentation
                      </a>{" "}
                      for installation instructions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Adversarial Testing */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Why Adversarial Testing?
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400">
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
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <h4 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-50">
                  Finds Edge Cases
                </h4>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Tests combinations and scenarios that developers didn&apos;t
                  anticipate—unusual inputs, rapid sequences, boundary
                  conditions.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400">
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <h4 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-50">
                  Simulates Real Users
                </h4>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Real users don&apos;t follow happy paths. They click randomly,
                  navigate unexpectedly, and use the app in ways you never
                  imagined.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
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
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h4 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-50">
                  Permanent Protection
                </h4>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Every bug found becomes a regression test. Once discovered,
                  that issue can never silently return to your codebase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E2E Quality Patterns */}
      <section id="quality-patterns" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <svg
                className="h-5 w-5 text-pink-600 dark:text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              E2E Quality Patterns
            </h2>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Quality testing goes beyond basic assertions. The{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
              e2e-quality
            </code>{" "}
            skill provides specialized patterns for catching visual glitches,
            performance issues, layout shifts, and intermediate bad states that
            users experience but traditional tests miss.
          </p>

          {/* When to use quality patterns */}
          <div className="mt-8 rounded-xl border border-pink-200 bg-pink-50 p-6 dark:border-pink-900/50 dark:bg-pink-950/30">
            <h3 className="font-semibold text-pink-900 dark:text-pink-100">
              When to Use Quality Patterns
            </h3>
            <p className="mt-2 text-sm text-pink-800 dark:text-pink-200">
              Use these patterns when you need to verify the <em>experience</em>{" "}
              of using your UI, not just the final state. Basic assertions check
              &quot;does this element exist?&quot; — quality patterns check
              &quot;did the user see a flash of wrong content?&quot;,
              &quot;did the layout jump?&quot;, &quot;was it fast enough?&quot;
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white/60 p-3 dark:bg-neutral-900/60">
                <p className="text-sm font-medium text-pink-900 dark:text-pink-100">
                  ✓ Use quality patterns for:
                </p>
                <ul className="mt-1 space-y-1 text-xs text-pink-700 dark:text-pink-300">
                  <li>• Loading states that shouldn&apos;t flash</li>
                  <li>• Drag-and-drop interactions</li>
                  <li>• Animations and transitions</li>
                  <li>• Performance-critical pages</li>
                  <li>• Layout-sensitive components</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white/60 p-3 dark:bg-neutral-900/60">
                <p className="text-sm font-medium text-pink-900 dark:text-pink-100">
                  ✗ Basic assertions suffice for:
                </p>
                <ul className="mt-1 space-y-1 text-xs text-pink-700 dark:text-pink-300">
                  <li>• Form validation messages</li>
                  <li>• Navigation between pages</li>
                  <li>• Simple CRUD operations</li>
                  <li>• Static content verification</li>
                  <li>• API response checks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pattern 1: assertNeverAppears */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600 dark:bg-pink-900/50 dark:text-pink-400">
                1
              </span>
              assertNeverAppears
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Verifies that an element never appears during an action — catches
              flickers, loading state flashes, and momentary error displays that
              users see but final-state assertions miss.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                flicker-test.spec.ts
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`// Watch for skeleton flash during cached navigation
await assertNeverAppears(
  page,
  '[data-testid="skeleton"]',
  async () => {
    await page.click('[data-testid="cached-link"]');
    await page.waitForSelector('[data-testid="content"]');
  },
  { checkInterval: 16 } // Check every frame (~60fps)
);

// Ensure error toast doesn't flash during successful submit
await assertNeverAppears(
  page,
  '[data-testid="error-toast"]',
  async () => {
    await page.click('[data-testid="submit-button"]');
    await page.waitForSelector('[data-testid="success-message"]');
  }
);`}</code>
              </pre>
            </div>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
              <strong>Use when:</strong> Testing cached navigations, optimistic
              updates, or any action where intermediate states shouldn&apos;t be
              visible.
            </p>
          </div>

          {/* Pattern 2: withPerformanceBudget */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600 dark:bg-pink-900/50 dark:text-pink-400">
                2
              </span>
              withPerformanceBudget
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Enforces performance constraints as test assertions. Fails the
              test if an action exceeds time or memory budgets — catches
              performance regressions before they reach production.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                performance.spec.ts
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`// Dashboard must load within 2 seconds
await withPerformanceBudget(
  page,
  { timeout: 2000 },
  async () => {
    await page.goto('/dashboard');
    await page.waitForSelector('[data-testid="dashboard-loaded"]');
  }
);

// Search should respond within 500ms with reasonable memory
await withPerformanceBudget(
  page,
  { timeout: 500, maxHeapUsage: 50 * 1024 * 1024 }, // 50MB
  async () => {
    await page.fill('[data-testid="search"]', 'query');
    await page.waitForSelector('[data-testid="results"]');
  }
);`}</code>
              </pre>
            </div>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
              <strong>Use when:</strong> Protecting critical user journeys from
              performance regressions, especially after optimization work.
            </p>
          </div>

          {/* Pattern 3: assertNoLayoutShift */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600 dark:bg-pink-900/50 dark:text-pink-400">
                3
              </span>
              assertNoLayoutShift
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Captures element positions before and after an action, failing if
              any tracked element moved unexpectedly. Prevents the frustrating
              experience of clicking a button that jumps away.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                layout-shift.spec.ts
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`// Verify ad loading doesn't shift article content
await assertNoLayoutShift(
  page,
  ['article', '.sidebar', '.cta-button'], // Elements to track
  async () => {
    // Wait for lazy-loaded ad to appear
    await page.waitForSelector('[data-testid="ad-loaded"]');
  }
);

// Ensure image loading doesn't shift text below
await assertNoLayoutShift(
  page,
  ['.hero-text', '.nav-button'],
  async () => {
    await page.waitForSelector('img[data-loaded="true"]');
  },
  { tolerance: 2 } // Allow 2px variance for subpixel rendering
);`}</code>
              </pre>
            </div>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
              <strong>Use when:</strong> Testing pages with lazy-loaded content,
              images without dimensions, or dynamic elements that could push
              other content around.
            </p>
          </div>

          {/* Pattern 4: assertStableRender */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600 dark:bg-pink-900/50 dark:text-pink-400">
                4
              </span>
              assertStableRender
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Monitors an element&apos;s content over time, failing if it
              changes unexpectedly. Catches React hydration mismatches,
              flickering values, and components that re-render with different
              content.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                stable-render.spec.ts
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`// Price shouldn't flicker between different values
await assertStableRender(
  page,
  '[data-testid="price"]',
  { duration: 1000 } // Watch for 1 second
);

// Dashboard metrics should stabilize after load
await page.waitForSelector('[data-testid="dashboard-ready"]');
await assertStableRender(
  page,
  '[data-testid="total-revenue"]',
  { 
    duration: 500,
    allowedChanges: 1 // Allow one update, then must stabilize
  }
);`}</code>
              </pre>
            </div>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
              <strong>Use when:</strong> Testing SSR hydration, real-time data
              displays, or any component where content flickering would confuse
              users.
            </p>
          </div>

          {/* Pattern 5: measureCLS */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600 dark:bg-pink-900/50 dark:text-pink-400">
                5
              </span>
              measureCLS
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Measures Cumulative Layout Shift using the browser&apos;s
              Performance Observer API. Returns the actual CLS score for
              assertions or reporting — essential for Core Web Vitals
              compliance.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                cls-measurement.spec.ts
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`// Measure CLS during full page lifecycle
const cls = await measureCLS(page, async () => {
  await page.goto('/article');
  await page.waitForLoadState('networkidle');
  // Wait for all lazy content
  await page.waitForTimeout(2000);
});

// Google's "Good" threshold is < 0.1
expect(cls).toBeLessThan(0.1);

// For stricter pages, use tighter threshold
const checkoutCLS = await measureCLS(page, async () => {
  await page.goto('/checkout');
  await page.waitForSelector('[data-testid="checkout-ready"]');
});
expect(checkoutCLS).toBeLessThan(0.05);`}</code>
              </pre>
            </div>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
              <strong>Use when:</strong> Monitoring Core Web Vitals, testing
              pages with ads or dynamic content, or after any layout-related
              changes.
            </p>
          </div>

          {/* Pattern 6: assertStateStability */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600 dark:bg-pink-900/50 dark:text-pink-400">
                6
              </span>
              assertStateStability
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Verifies that once a desired state is reached, it doesn&apos;t
              regress. Catches race conditions where success briefly appears
              then reverts to loading or error states.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                state-stability.spec.ts
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`// Once saved, the button shouldn't revert to "saving..."
await assertStateStability(
  page,
  '[data-testid="save-button"]',
  {
    desiredState: { text: 'Saved' },
    forbiddenStates: [{ text: 'Saving...' }, { text: 'Save' }],
    duration: 2000
  }
);

// Verify successful state persists after form submit
await page.click('[data-testid="submit"]');
await assertStateStability(
  page,
  '[data-testid="status"]',
  {
    desiredState: { attribute: 'data-status', value: 'success' },
    forbiddenStates: [
      { attribute: 'data-status', value: 'loading' },
      { attribute: 'data-status', value: 'error' }
    ],
    duration: 3000
  }
);`}</code>
              </pre>
            </div>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
              <strong>Use when:</strong> Testing async operations, optimistic
              updates with server reconciliation, or any action with multiple
              state transitions.
            </p>
          </div>

          {/* Pattern 7: expectMutualExclusivity */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600 dark:bg-pink-900/50 dark:text-pink-400">
                7
              </span>
              expectMutualExclusivity
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Asserts that certain UI states never coexist — catches impossible
              states like showing both a loading spinner and loaded content, or
              both success and error messages simultaneously.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                mutual-exclusivity.spec.ts
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`// Loading and content should never appear together
await expectMutualExclusivity(
  page,
  ['[data-testid="loading"]', '[data-testid="content"]'],
  async () => {
    await page.goto('/dashboard');
    await page.waitForSelector('[data-testid="content"]');
  }
);

// Success and error toasts are mutually exclusive
await expectMutualExclusivity(
  page,
  [
    '[data-testid="success-toast"]',
    '[data-testid="error-toast"]',
    '[data-testid="warning-toast"]'
  ],
  async () => {
    await page.click('[data-testid="submit"]');
    await page.waitForSelector('[data-testid*="toast"]');
  }
);`}</code>
              </pre>
            </div>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
              <strong>Use when:</strong> Testing state machines, loading/error
              states, or any UI with states that should be mutually exclusive.
            </p>
          </div>

          {/* Link to full skill documentation */}
          <div className="mt-10 rounded-xl border border-neutral-200 bg-gradient-to-r from-pink-50 to-neutral-50 p-6 dark:border-neutral-700 dark:from-pink-950/30 dark:to-neutral-900">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900/50">
                <svg
                  className="h-5 w-5 text-pink-600 dark:text-pink-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Full Skill Documentation
                </h4>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  The{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                    e2e-quality
                  </code>{" "}
                  skill includes implementation details, helper functions, and
                  integration guidance. Load it with{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                    Loading skill: e2e-quality
                  </code>{" "}
                  or see the full documentation.
                </p>
                <Link
                  href="/skills/e2e-quality"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                >
                  View e2e-quality skill documentation
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
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
        </div>
      </section>

      {/* Mutation Testing Pattern */}
      <section id="mutation-testing" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30">
              <svg
                className="h-5 w-5 text-sky-600 dark:text-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Mutation Testing Pattern
            </h2>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            The 3-step mutation testing pattern ensures state changes are truly
            persisted, not just optimistically displayed. This pattern catches
            bugs at three distinct verification stages—from immediate UI feedback
            to permanent data persistence.
          </p>

          {/* Overview Callout */}
          <div className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-900/50 dark:bg-sky-950/30">
            <h3 className="font-semibold text-sky-900 dark:text-sky-100">
              Why Three Stages?
            </h3>
            <p className="mt-2 text-sm text-sky-800 dark:text-sky-200">
              Single-assertion tests only verify the final state. But users
              experience the full journey: they click a button, see it respond,
              wait for completion, and expect the change to survive a refresh.
              The 3-step pattern tests what users actually experience—catching
              bugs that final-state tests miss.
            </p>
          </div>

          {/* The Three Stages Visual */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              The Three Verification Stages
            </h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {/* Stage 1: Immediate State */}
              <div className="rounded-xl border-2 border-sky-200 bg-white p-5 dark:border-sky-800 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    1
                  </span>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Immediate State
                  </h4>
                </div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  Assert <strong>right after the action</strong>. Verifies the
                  UI responds immediately to user input.
                </p>
                <div className="mt-4 rounded-lg bg-sky-50 p-3 dark:bg-sky-950/50">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
                    Catches
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-sky-800 dark:text-sky-200">
                    <li>• Action handler bugs</li>
                    <li>• Validation errors</li>
                    <li>• Event binding issues</li>
                    <li>• Missing optimistic updates</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Example
                  </p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                    &quot;After clicking save, button shows &apos;Saving...&apos;&quot;
                  </p>
                </div>
              </div>

              {/* Stage 2: Stable State */}
              <div className="rounded-xl border-2 border-sky-200 bg-white p-5 dark:border-sky-800 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    2
                  </span>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Stable State
                  </h4>
                </div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  Assert <strong>after async operations settle</strong>. Verifies
                  the operation completed successfully.
                </p>
                <div className="mt-4 rounded-lg bg-sky-50 p-3 dark:bg-sky-950/50">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
                    Catches
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-sky-800 dark:text-sky-200">
                    <li>• Async bugs</li>
                    <li>• Race conditions</li>
                    <li>• Optimistic UI mismatches</li>
                    <li>• API error handling</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Example
                  </p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                    &quot;After save completes, success toast appears&quot;
                  </p>
                </div>
              </div>

              {/* Stage 3: Persistence */}
              <div className="rounded-xl border-2 border-sky-200 bg-white p-5 dark:border-sky-800 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    3
                  </span>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Persistence
                  </h4>
                </div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  Assert <strong>after page reload or re-fetch</strong>. Verifies
                  the change was actually persisted.
                </p>
                <div className="mt-4 rounded-lg bg-sky-50 p-3 dark:bg-sky-950/50">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
                    Catches
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-sky-800 dark:text-sky-200">
                    <li>• Persistence bugs</li>
                    <li>• Cache issues</li>
                    <li>• Serialization problems</li>
                    <li>• Database transaction failures</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Example
                  </p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                    &quot;After reload, the saved data is still there&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Code Example */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Complete Pattern Example
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Here&apos;s a full Playwright test demonstrating all three verification
              stages for a profile update flow:
            </p>

            <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                mutation-test.spec.ts
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`test('saving profile updates persists', async ({ page }) => {
  // Setup: Navigate to the profile page
  await page.goto('/profile');
  await page.waitForSelector('[name="bio"]');

  // === Stage 1: Immediate State ===
  // Assert right after the action
  await page.fill('[name="bio"]', 'New bio text');
  await page.click('button:text("Save")');
  
  // Verify the button shows loading state immediately
  await expect(page.locator('button:text("Save")'))
    .toHaveAttribute('aria-busy', 'true');
  
  // Verify optimistic update appears in form
  await expect(page.locator('[name="bio"]'))
    .toHaveValue('New bio text');

  // === Stage 2: Stable State ===
  // Assert after async operations settle
  await expect(page.locator('[role="alert"]'))
    .toHaveText('Profile saved');
  
  await expect(page.locator('button:text("Save")'))
    .not.toHaveAttribute('aria-busy', 'true');
  
  // Verify the form still shows the correct value
  await expect(page.locator('[name="bio"]'))
    .toHaveValue('New bio text');

  // === Stage 3: Persistence ===
  // Assert after page reload or re-fetch
  await page.reload();
  await page.waitForSelector('[name="bio"]');
  
  // Verify the saved data survived the refresh
  await expect(page.locator('[name="bio"]'))
    .toHaveValue('New bio text');
});`}</code>
              </pre>
            </div>
          </div>

          {/* Why Each Stage Matters */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Why Each Stage Matters
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Each stage catches a different category of bugs. Skipping any stage
              leaves blind spots in your test coverage:
            </p>

            <div className="mt-6 space-y-4">
              {/* Stage 1 importance */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-400">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Immediate State catches UX failures
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      If Stage 1 fails, users don&apos;t know their action registered.
                      They might click again, causing duplicate submissions. Or they
                      might think the app is broken and leave. Common bugs: missing
                      onClick handlers, broken form bindings, disabled state not
                      applying.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stage 2 importance */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-400">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Stable State catches async failures
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      If Stage 2 fails, the optimistic update showed success but the
                      server rejected it. Or a race condition caused the UI to revert.
                      Users see a &quot;success&quot; that disappears. Common bugs: unhandled
                      API errors, race conditions in state updates, missing error
                      boundaries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stage 3 importance */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-400">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      Persistence catches data loss
                    </h4>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      If Stage 3 fails, everything looked correct but the data was
                      never actually saved. Users think their work is safe, but
                      refreshing the page reveals it&apos;s gone. Common bugs: cache-only
                      updates without API calls, transaction rollbacks, serialization
                      errors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Examples */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              More Pattern Examples
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              The 3-step pattern applies to any mutation operation. Here are
              additional examples:
            </p>

            {/* Delete operation example */}
            <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                delete-item.spec.ts — Delete operation
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`test('deleting an item removes it permanently', async ({ page }) => {
  // Stage 1: Immediate - item starts fading/strikethrough
  await page.click('[data-testid="delete-item-1"]');
  await expect(page.locator('[data-testid="item-1"]'))
    .toHaveClass(/deleting/);

  // Stage 2: Stable - item is removed from list
  await expect(page.locator('[data-testid="item-1"]'))
    .not.toBeVisible();
  await expect(page.locator('[data-testid="toast"]'))
    .toHaveText('Item deleted');

  // Stage 3: Persistence - item stays gone after reload
  await page.reload();
  await expect(page.locator('[data-testid="item-1"]'))
    .not.toBeVisible();
});`}</code>
              </pre>
            </div>

            {/* Create operation example */}
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                create-task.spec.ts — Create operation
              </div>
              <pre className="overflow-x-auto bg-neutral-50 p-4 text-sm dark:bg-neutral-900">
                <code className="text-neutral-800 dark:text-neutral-200">{`test('creating a task adds it to the list', async ({ page }) => {
  // Stage 1: Immediate - new task appears optimistically
  await page.fill('[data-testid="new-task"]', 'Buy groceries');
  await page.click('[data-testid="add-task"]');
  await expect(page.locator('text=Buy groceries')).toBeVisible();
  await expect(page.locator('[data-testid="add-task"]'))
    .toBeDisabled(); // Prevent double-submit

  // Stage 2: Stable - task gets permanent ID, button re-enabled
  await expect(page.locator('[data-testid="add-task"]'))
    .toBeEnabled();
  const task = page.locator('text=Buy groceries');
  await expect(task).toHaveAttribute('data-id', /.+/); // Has server ID

  // Stage 3: Persistence - task survives page refresh
  await page.reload();
  await expect(page.locator('text=Buy groceries')).toBeVisible();
});`}</code>
              </pre>
            </div>
          </div>

          {/* When to Apply callout */}
          <div className="mt-10 rounded-xl border border-sky-200 bg-gradient-to-r from-sky-50 to-neutral-50 p-6 dark:border-sky-900/50 dark:from-sky-950/30 dark:to-neutral-900">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/50">
                <svg
                  className="h-5 w-5 text-sky-600 dark:text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  When to Apply This Pattern
                </h4>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Use the 3-step mutation testing pattern for any operation that
                  modifies data: creates, updates, deletes, settings changes,
                  form submissions, and user preference updates. Skip it only
                  for read-only operations like navigation and search.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                    CRUD operations
                  </span>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                    Form submissions
                  </span>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                    Settings changes
                  </span>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                    User preferences
                  </span>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                    File uploads
                  </span>
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
                The Agent Loop
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
