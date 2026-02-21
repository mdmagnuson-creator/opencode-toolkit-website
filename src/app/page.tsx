import { AgentRelationshipDiagram } from "@/components/AgentRelationshipDiagram";
import { Hero } from "@/components/Hero";
import { TheLoop } from "@/components/TheLoop";
import { manifest, getPrimaryAgents, getRegularSkills } from "@/data";
import Link from "next/link";

export default function Home() {
  const { counts, categories } = manifest;
  const primaryAgents = getPrimaryAgents();
  const skills = getRegularSkills().slice(0, 8); // Show first 8 skills
  const remainingSkillsCount = manifest.counts.skills - 8;

  return (
    <main className="min-h-screen">
      <Hero counts={{
        agents: counts.agents,
        skills: counts.skills,
        metaSkills: counts.metaSkills,
        primaryAgents: counts.primaryAgents,
      }} />

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
              <strong className="text-neutral-900 dark:text-neutral-200">{counts.agents} specialized agents</strong>,
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

          <div className="mt-8">
            <Link 
              href="/concepts/agents" 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Learn more about agents →
            </Link>
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
            {primaryAgents.map((agent) => (
              <div
                key={agent.slug}
                className="group relative rounded-xl border-2 border-neutral-200 bg-white p-5 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md sm:p-6 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-base font-semibold text-white sm:h-12 sm:w-12 sm:text-lg dark:bg-neutral-100 dark:text-neutral-900">
                    {agent.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                      @{agent.slug}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
                      {agent.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/agents" 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              View all agents →
            </Link>
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
              {counts.agents} Agents
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Specialist Categories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
              Sub-agents that get delegated to automatically when primary agents
              need specialized help.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {/* Critics */}
            <Link 
              href="/agents?category=critics"
              className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 transition-all hover:shadow-md hover:border-neutral-300 cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                {categories.critics}
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Critics
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Review code for correctness, security, style, and best
                practices.
              </p>
            </Link>

            {/* Developers */}
            <Link 
              href="/agents?category=developers"
              className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 transition-all hover:shadow-md hover:border-neutral-300 cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                {categories.developers}
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Developers
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Implement features across different languages and frameworks.
              </p>
            </Link>

            {/* Testers */}
            <Link 
              href="/agents?category=testers"
              className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 transition-all hover:shadow-md hover:border-neutral-300 cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                {categories.testers}
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Testers
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Write and run unit tests, integration tests, and E2E tests.
              </p>
            </Link>

            {/* Orchestrators */}
            <Link 
              href="/agents?category=orchestrators"
              className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 transition-all hover:shadow-md hover:border-neutral-300 cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                {categories.orchestrators}
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Orchestrators
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Coordinate other agents and manage workflows.
              </p>
            </Link>

            {/* Utilities */}
            <Link 
              href="/agents?category=utilities"
              className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 transition-all hover:shadow-md hover:border-neutral-300 cursor-pointer dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
            >
              <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
                {categories.utilities}
              </p>
              <h3 className="mt-1 text-sm font-medium text-neutral-900 sm:text-base dark:text-neutral-50">
                Utilities
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm dark:text-neutral-400">
                Debugging, docs, cleanup, and specialized tools.
              </p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/agents" 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Browse all agents →
            </Link>
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
              {counts.skills} Skills
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
            {skills.map((skill) => (
              <div
                key={skill.slug}
                className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50"
              >
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {skill.slug}
                </p>
                <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-400 line-clamp-2">
                  {skill.description.split('.')[0]}
                </p>
              </div>
            ))}
          </div>

          {remainingSkillsCount > 0 && (
            <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-500">
              <Link 
                href="/skills" 
                className="font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                View all {counts.skills} skills →
              </Link>
            </p>
          )}
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
                  Open a terminal and run the installer:
                </p>
                <div className="mt-3 rounded-lg bg-neutral-900 p-3 dark:bg-neutral-800">
                  <pre className="text-xs sm:text-sm text-neutral-100 overflow-x-auto"><code>{`curl -fsSL https://raw.githubusercontent.com/mdmagnuson-creator/ai-toolkit/main/install.sh | bash`}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/getting-started" 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Full getting started guide →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
