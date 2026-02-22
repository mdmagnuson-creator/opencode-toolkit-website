import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const concepts = [
  {
    name: "Agents",
    href: "/concepts/agents",
    description:
      "AI-powered specialists that perform development tasks autonomously. Primary agents orchestrate work; sub-agents handle specific domains.",
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
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    name: "Agent Workflows",
    href: "/concepts/agent-workflows",
    description:
      "How agents communicate through asynchronous update queues. A self-improving system where agents discover gaps and queue improvements — all under your control.",
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
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    name: "Skills",
    href: "/concepts/skills",
    description:
      "Loadable instruction sets for complex workflows. Agents invoke skills on-demand to handle specialized tasks like migrations, screenshots, or PRD creation.",
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
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    name: "Project Configuration",
    href: "/concepts/projects",
    description:
      "The project.json file tells agents about your tech stack, conventions, and integrations. It enables context-aware assistance.",
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
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    name: "PRDs & Planning",
    href: "/concepts/workflow",
    description:
      "Product Requirements Documents guide multi-step development. Learn how agents use PRDs to understand what to build and track progress through user stories.",
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    name: "Scaffolds & Templates",
    href: "/scaffolds",
    description:
      "Pre-built project structures that bootstrap new codebases with best practices. Start a project with the right patterns from day one.",
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
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
      </svg>
    ),
  },
  {
    name: "Multi-Session Coordination",
    href: "/concepts/agent-workflows",
    description:
      "How multiple agent sessions work together without conflicts. Learn about session locks, update queues, and branch management for parallel work.",
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
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    name: "Testing System",
    href: "/concepts/testing",
    description:
      "How the multi-layered testing architecture works. Unit test specialists, E2E testing, QA/adversarial testing, and three operating modes for different needs.",
    subLinks: [
      { name: "Architecture Overview", href: "/concepts/testing#architecture" },
      { name: "Test Flow Automation", href: "/concepts/testing#test-flow" },
      { name: "E2E Quality Patterns", href: "/concepts/testing#quality-patterns" },
      { name: "Mutation Testing", href: "/concepts/testing#mutation-testing" },
    ],
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
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    name: "The Human in the Loop (you)",
    href: "/concepts/the-human-in-the-loop",
    description:
      "Practical collaboration workflows for working with Planner, Builder, and Toolkit. Learn when to use each agent and how to move from idea to shipped change.",
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
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    name: "Roadmap",
    href: "/concepts/roadmap",
    description:
      "Upcoming features and draft PRDs. See what's being planned including dynamic verbosity modes for token optimization.",
    subLinks: [
      { name: "PRD 004: Verbosity Modes", href: "/concepts/roadmap#prd-004" },
    ],
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
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
    ),
  },
];

export default function ConceptsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            The Big Picture
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Understand how all the pieces of the AI toolkit fit together. This
            conceptual overview is designed for technical people who want to
            grasp the mental model before diving into specifics.
          </p>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            System Architecture
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The toolkit organizes AI capabilities into a layered system where
            each piece has a clear purpose.
          </p>

          {/* Diagram */}
          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="space-y-6">
              {/* Layer 1: You */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
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
                  You
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

              {/* Layer 2: Primary Agents */}
              <div>
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                  Primary Agents
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["@planner", "@builder", "@toolkit"].map((agent) => (
                    <span
                      key={agent}
                      className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200"
                    >
                      {agent}
                    </span>
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

              {/* Layer 3: Sub-agents */}
              <div>
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                  Sub-Agents (Specialists)
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "react-dev",
                    "go-dev",
                    "frontend-critic",
                    "security-critic",
                    "tester",
                    "...",
                  ].map((agent) => (
                    <span
                      key={agent}
                      className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {agent}
                    </span>
                  ))}
                </div>
              </div>

              {/* Side by side: Skills + Project Context */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700" />
                <span className="text-xs text-neutral-500 dark:text-neutral-500">
                  powered by
                </span>
                <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Skills */}
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                  <p className="text-sm font-medium text-green-900 dark:text-green-200">
                    Skills
                  </p>
                  <p className="mt-1 text-xs text-green-700 dark:text-green-400">
                    On-demand workflows loaded when needed (migrations, PRDs,
                    screenshots...)
                  </p>
                </div>

                {/* Project Config */}
                <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
                  <p className="text-sm font-medium text-purple-900 dark:text-purple-200">
                    Project Context
                  </p>
                  <p className="mt-1 text-xs text-purple-700 dark:text-purple-400">
                    project.json, CONVENTIONS.md, PRDs that guide agent behavior
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            How It All Works Together
          </h2>

          <div className="mt-8 space-y-6 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            <p>
              <strong className="text-neutral-900 dark:text-neutral-200">
                You&apos;re always in control.
              </strong>{" "}
              The three primary agents—<code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">@planner</code>,{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">@builder</code>, and{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">@toolkit</code>—are
              orchestrators that understand your requests and delegate work to
              specialized sub-agents. You choose which agent to invoke, review
              outputs, and approve changes.
            </p>

            <p>
              <strong className="text-neutral-900 dark:text-neutral-200">
                Planner
              </strong>{" "}
              helps you turn ideas into structured PRDs with user stories.{" "}
              <strong className="text-neutral-900 dark:text-neutral-200">
                Builder
              </strong>{" "}
              executes those PRDs by delegating to domain-specific sub-agents—a
              React developer for components, a security critic for
              vulnerability checks, a tester for test coverage.{" "}
              <strong className="text-neutral-900 dark:text-neutral-200">
                Toolkit
              </strong>{" "}
              maintains and evolves the agent system itself.
            </p>

            <p>
              When agents encounter complex, multi-step workflows, they load{" "}
              <strong className="text-neutral-900 dark:text-neutral-200">
                skills
              </strong>
              . A skill is a detailed instruction set—like a recipe—that guides
              the agent through tasks that benefit from explicit structure:
              database migrations, screenshot capture, merge conflict
              resolution.
            </p>

            <p>
              All of this is informed by your{" "}
              <strong className="text-neutral-900 dark:text-neutral-200">
                project context
              </strong>
              . The <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">project.json</code> file tells agents
              about your tech stack, coding conventions, and active PRDs. This
              ensures agents produce code that fits your codebase—not generic
              boilerplate.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Cards */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Explore Each Concept
          </h2>
          <p className="mt-4 text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
            Dive deeper into how each piece of the system works.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) => (
              <div
                key={concept.name}
                className="group rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
              >
                <Link href={concept.href}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-700">
                      {concept.icon}
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      {concept.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {concept.description}
                  </p>
                </Link>
                {"subLinks" in concept && concept.subLinks && (
                  <div className="mt-4 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                      Quick Links
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {concept.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                <Link
                  href={concept.href}
                  className="mt-4 flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-200"
                >
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
