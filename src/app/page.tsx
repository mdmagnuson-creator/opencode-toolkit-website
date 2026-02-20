import { AgentRelationshipDiagram } from "@/components/AgentRelationshipDiagram";
import { Header } from "@/components/Header";
import { TheLoop } from "@/components/TheLoop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              Open Source
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-50">
            An Agent System for{" "}
            <span className="text-neutral-700 dark:text-neutral-300">
              opencode
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-800 sm:text-xl dark:text-neutral-300">
            57 specialized agents working together to build software.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {/* Primary CTA */}
            <a
              href="#getting-started"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-neutral-900 px-8 text-base font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 sm:w-auto dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-offset-neutral-900"
            >
              Get Started
            </a>

            {/* Secondary CTA */}
            <a
              href="#"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-8 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 sm:w-auto dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:ring-offset-neutral-900"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-10 sm:gap-8 dark:border-neutral-800">
            <div>
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-neutral-50">
                57
              </p>
              <p className="mt-1 text-xs text-neutral-800 sm:text-sm dark:text-neutral-400">
                Agents
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-neutral-50">
                16
              </p>
              <p className="mt-1 text-xs text-neutral-800 sm:text-sm dark:text-neutral-400">
                Skills
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-neutral-50">
                4
              </p>
              <p className="mt-1 text-xs text-neutral-800 sm:text-sm dark:text-neutral-400">
                Primary Agents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section
        id="what-is-it"
        className="border-t border-neutral-200 px-6 py-24 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            What is an agent system?
          </h2>

          <div className="mt-8 space-y-6 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8 dark:text-neutral-400">
            <p>
              Traditional AI assistants wait for you to type, respond once, and
              stop. An <strong className="text-neutral-900 dark:text-neutral-200">agentic</strong> AI
              is different—it can take actions on your behalf. It reads files,
              runs commands, browses the web, and iterates on its own work until
              the job is done.
            </p>

            <p>
              This toolkit gives you a collection of{" "}
              <strong className="text-neutral-900 dark:text-neutral-200">57 specialized agents</strong>,
              each designed for a specific development task. Some write code.
              Some review it. Some run tests or deploy infrastructure. When you
              work with a primary agent, it automatically calls on specialists
              as needed—so you get expert help without managing each step
              yourself.
            </p>

            <p>
              Think of it as a team of focused collaborators, ready to help you
              build software faster and more reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Agents Section */}
      <section
        id="primary-agents"
        className="border-t border-neutral-200 px-6 py-24 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Primary Agents
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
              These are the entry points to the system. Start a conversation
              with any of them, and they&apos;ll orchestrate specialists as
              needed.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
            {/* @builder */}
            <div className="group relative rounded-xl border-2 border-neutral-200 bg-white p-5 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md sm:p-6 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-base font-semibold text-white sm:h-12 sm:w-12 sm:text-lg dark:bg-neutral-100 dark:text-neutral-900">
                  B
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                    @builder
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
                    Claims PRDs and orchestrates the full build-review-ship
                    cycle.
                  </p>
                </div>
              </div>
            </div>

            {/* @ralph */}
            <div className="group relative rounded-xl border-2 border-neutral-200 bg-white p-5 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md sm:p-6 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-base font-semibold text-white sm:h-12 sm:w-12 sm:text-lg dark:bg-neutral-100 dark:text-neutral-900">
                  R
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                    @ralph
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
                    Implements user stories one at a time with focused,
                    autonomous coding.
                  </p>
                </div>
              </div>
            </div>

            {/* @project-planner */}
            <div className="group relative rounded-xl border-2 border-neutral-200 bg-white p-5 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md sm:p-6 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-base font-semibold text-white sm:h-12 sm:w-12 sm:text-lg dark:bg-neutral-100 dark:text-neutral-900">
                  P
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                    @project-planner
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
                    Creates and refines PRDs, manages project backlog.
                  </p>
                </div>
              </div>
            </div>

            {/* @toolkit */}
            <div className="group relative rounded-xl border-2 border-neutral-200 bg-white p-5 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md sm:p-6 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-base font-semibold text-white sm:h-12 sm:w-12 sm:text-lg dark:bg-neutral-100 dark:text-neutral-900">
                  T
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                    @toolkit
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
                    Maintains the agent system itself, adds new agents and
                    skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Relationship Diagram */}
      <section
        id="architecture"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-50">
              How It Works
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-700 sm:text-base dark:text-neutral-400">
              Primary agents orchestrate specialists—you talk to one, and it
              coordinates the rest.
            </p>
          </div>

          <AgentRelationshipDiagram />
        </div>
      </section>

      {/* The Loop - Workflow Process */}
      <TheLoop />

      {/* Agent Categories Section */}
      <section
        id="agent-categories"
        className="border-t border-neutral-200 px-6 py-24 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              57 Agents
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Specialist Categories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
              Sub-agents that get delegated to automatically when primary agents
              need specialized help.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {/* Critics */}
            <div className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                22
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Critics
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Review code for correctness, security, style, and best
                practices.
              </p>
            </div>

            {/* Developers */}
            <div className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                9
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Developers
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Implement features across different languages and frameworks.
              </p>
            </div>

            {/* Testers */}
            <div className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                5
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Testers
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Write and run unit tests, integration tests, and E2E tests.
              </p>
            </div>

            {/* Other */}
            <div className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                21
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Other
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Specialized agents for docs, QA, debugging, infrastructure, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section
        id="skills"
        className="border-t border-neutral-200 px-6 py-24 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              16 Skills
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              On-Demand Workflows
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
              Skills are specialized instruction sets that agents load on-demand
              for complex, multi-step workflows. Unlike agents, skills provide
              situational expertise—loaded when needed, not always active.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                prd
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400">
                Generate Product Requirements Documents
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                project-bootstrap
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400">
                Initialize projects with stack detection
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                merge-conflicts
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400">
                Resolve git merge conflicts
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                cve
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400">
                Investigate security vulnerabilities
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                screenshot
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400">
                Capture authenticated screenshots
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                marketing-copy
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400">
                Generate marketing content from docs
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                public-page
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400">
                Build landing pages and legal pages
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                e2e-quality
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400">
                Advanced E2E testing patterns
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-500">
            Plus 8 more specialized workflows
          </p>
        </div>
      </section>

      {/* Getting Started Section */}
      <section
        id="getting-started"
        className="border-t border-neutral-200 px-6 py-24 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Getting Started
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
              Get up and running in a few minutes.
            </p>
          </div>

          <div className="mt-12 space-y-6 sm:space-y-8">
            {/* Step 1 */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base dark:bg-neutral-100 dark:text-neutral-900">
                1
              </div>
              <div className="min-w-0 pt-0.5 sm:pt-1">
                <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                  Download opencode
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-400">
                  Get the opencode desktop app for your platform. It&apos;s the
                  AI-native code editor that powers the agent system.
                </p>
                <a
                  href="https://opencode.ai/download"
                  className="mt-4 inline-flex h-11 min-w-[44px] items-center justify-center rounded-lg bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-offset-neutral-900"
                >
                  Download opencode
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base dark:bg-neutral-100 dark:text-neutral-900">
                2
              </div>
              <div className="min-w-0 pt-0.5 sm:pt-1">
                <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                  Connect GitHub
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-400">
                  Link your GitHub account to opencode. This enables agents to
                  read repositories, create branches, and manage pull requests
                  on your behalf.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base dark:bg-neutral-100 dark:text-neutral-900">
                3
              </div>
              <div className="min-w-0 pt-0.5 sm:pt-1">
                <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                  Upgrade to GitHub Copilot Pro+
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-400">
                  For best results, upgrade to GitHub Copilot Pro+ (or use your
                  own API keys). This gives agents access to the most capable
                  models—critical for complex coding tasks.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-3 sm:gap-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base dark:bg-neutral-100 dark:text-neutral-900">
                4
              </div>
              <div className="min-w-0 pt-0.5 sm:pt-1">
                <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                  Run the setup script
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-400">
                  Open opencode and run the toolkit installer. It configures
                  agents, skills, and scaffolds in your environment. After that,
                   you&apos;re ready to start using{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs sm:text-sm dark:bg-neutral-800">
                    @builder
                  </code>
                  ,{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs sm:text-sm dark:bg-neutral-800">
                    @ralph
                  </code>
                  , and the rest of the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-6 py-10 sm:py-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
            <p className="text-sm text-neutral-600 dark:text-neutral-500">
              Built with{" "}
              <a
                href="https://opencode.ai"
                className="inline-flex min-h-[44px] items-center underline underline-offset-2 transition-colors hover:text-neutral-700 dark:hover:text-neutral-300"
              >
                opencode
              </a>
            </p>

            <a
              href="#"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View source on GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
