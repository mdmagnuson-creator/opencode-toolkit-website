import { CodeBlockWithCopy } from "@/components/CodeBlockWithCopy";
import { Hero } from "@/components/Hero";
import { TheLoop } from "@/components/TheLoop";
import { manifest, getPrimaryAgents, getRegularSkills } from "@/data";
import { getInstallCommand } from "@/config/urls";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "yo, go — AI Agents for Software Development",
  description: "64 specialized AI agents working together to build software. Plan features with PRDs, implement with Builder, and ship production-ready code. An agent system for opencode.",
  openGraph: {
    title: "yo, go — AI Agents for Software Development",
    description: "64 specialized AI agents working together to build software. Plan features with PRDs, implement with Builder, and ship production-ready code.",
    images: ["/og/home.png"],
  },
};

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

      {/* What's New Section */}
      <section className="border-t border-neutral-200 px-6 py-12 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                What&apos;s New
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Latest additions to the toolkit</span>
            </div>
            <a href="/changelog" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
              View all changes →
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Authentication System */}
            <a href="/concepts/authentication" className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                {/* Lock icon */}
                <svg className="h-4 w-4 text-blue-700 dark:text-blue-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900 dark:text-neutral-50">Authentication System</h3>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Agents authenticate to your app to test protected pages.</p>
            </a>
            {/* Electron Desktop Testing */}
            <a href="/concepts/testing#electron-testing" className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                {/* Desktop icon */}
                <svg className="h-4 w-4 text-purple-700 dark:text-purple-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900 dark:text-neutral-50">Electron Desktop Testing</h3>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">E2E tests for Electron apps using the Playwright Electron API.</p>
            </a>
            {/* Agent Resilience */}
            <a href="/concepts/the-human-in-the-loop#agent-resilience" className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900">
                {/* Shield icon */}
                <svg className="h-4 w-4 text-amber-700 dark:text-amber-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900 dark:text-neutral-50">Agent Resilience</h3>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Rate limit handling, session resumability, and auto-retry.</p>
            </a>
            {/* Vectorized Search */}
            <a href="/concepts/vectorization" className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:bg-neutral-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                {/* Magnifying glass / search icon */}
                <svg className="h-4 w-4 text-emerald-700 dark:text-emerald-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900 dark:text-neutral-50">Vectorized Search</h3>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Semantic code search with 49% fewer retrieval failures.</p>
            </a>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section
        id="what-is-it"
        className="border-t border-neutral-200 px-6 py-24 sm:py-32 lg:py-40 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Agents that act
          </h2>

          <div className="mt-8 space-y-6 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8 dark:text-neutral-400">
            <p>
              Traditional AI assistants respond once and stop. An{" "}
              <strong className="text-neutral-900 dark:text-neutral-200">agentic</strong> AI
              is different—it takes action. It reads files, runs commands,
              browses the web, and iterates until the work is done.
            </p>

            <p>
              This toolkit includes{" "}
              <strong className="text-neutral-900 dark:text-neutral-200">{counts.agents} specialized agents</strong>.
              Some write code. Some review it. Some run tests or deploy
              infrastructure. Primary agents call on specialists as needed—expert
              help, orchestrated automatically.
            </p>

            <p>
              A team of focused collaborators. Your ideas, realized.
            </p>
          </div>

          <div className="mt-8">
            <Link 
              href="/concepts/agents" 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Explore agents →
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Agents Section */}
      <section
        id="primary-agents"
        className="border-t border-neutral-200 px-6 py-24 sm:py-32 lg:py-40 sm:px-8 lg:px-12 dark:border-neutral-800"
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
              href="/reference/agents" 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              View all agents →
            </Link>
          </div>
        </div>
      </section>

      {/* The Human in the Loop (you) Section */}
      <section
        id="human-in-the-loop"
        className="border-t border-neutral-200 px-6 py-24 sm:py-32 lg:py-40 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-50">
              The Human in the Loop (you)
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-700 sm:text-base dark:text-neutral-400">
              You guide the direction. Agents handle the execution.
            </p>
          </div>

          {/* Role Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {/* Planner */}
            <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-50">
                Shape the Vision
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Work with @planner to refine requirements. You decide what gets built and how.
              </p>
            </div>

            {/* Builder */}
            <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-50">
                Review Progress
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                @builder implements your PRD. You verify, steer corrections, and approve commits.
              </p>
            </div>

            {/* Toolkit */}
            <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-50">
                Evolve the System
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Improve agents over time via @toolkit. You approve changes that ripple across projects.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/concepts/the-human-in-the-loop" 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Explore human-agent collaboration →
            </Link>
          </div>
        </div>
      </section>

      {/* The Loop - Workflow Process */}
      <TheLoop />

      {/* Agent Categories Section */}
      <section
        id="agent-categories"
        className="border-t border-neutral-200 px-6 py-24 sm:py-32 lg:py-40 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              {counts.agents} Agents
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Specialists on Call
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
              When primary agents need focused expertise, specialists step in
              automatically.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {/* Critics */}
            <Link 
              href="/reference/agents?category=critics"
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
              href="/reference/agents?category=developers"
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
              href="/reference/agents?category=testers"
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
              href="/reference/agents?category=orchestrators"
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
              href="/reference/agents?category=utilities"
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
              href="/reference/agents" 
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
        className="border-t border-neutral-200 px-6 py-24 sm:py-32 lg:py-40 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              {counts.skills} Skills
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Workflows That Load When Needed
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
              Skills are specialized instruction sets for complex, multi-step
              work. Agents load them on-demand—situational expertise, not
              always-on overhead.
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
                href="/reference/skills" 
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
        className="border-t border-neutral-200 px-6 py-24 sm:py-32 lg:py-40 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
              Set Up in Minutes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
              Three steps. Then you&apos;re building.
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
                  Grab OpenCode
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-400">
                  The AI-native code editor that powers the agent system.
                  Download it for your platform.
                </p>
                <a
                  href="https://opencode.ai/download"
                  className="mt-4 inline-flex h-11 min-w-[44px] items-center justify-center rounded-lg bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-offset-neutral-900"
                >
                  Download OpenCode
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
                  Pick a Provider
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-400">
                  Open the command palette with{" "}
                  <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs sm:text-sm dark:bg-neutral-800">
                    Ctrl+P
                  </kbd>
                  , type{" "}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs sm:text-sm dark:bg-neutral-800">
                    provider
                  </code>
                  , and connect to your model of choice.
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
                  Run the Installer
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-400">
                  One command. Everything changes.
                </p>
                <CodeBlockWithCopy
                  code={getInstallCommand()}
                  className="mt-3"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/getting-started" 
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Full setup guide →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
