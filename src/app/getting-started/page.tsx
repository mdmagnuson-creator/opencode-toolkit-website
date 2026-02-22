import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CopyButton } from '@/components/CopyButton';
import { manifest } from '@/data';
import { getInstallCommand } from '@/config/urls';

export const metadata = {
  title: 'Getting Started | AI Toolkit',
  description: 'Step-by-step guide to setting up and using the AI Toolkit for agentic development.',
};

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumbs />
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Getting Started
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Get up and running in a few minutes.
          </p>
        </div>

        {/* Steps - 3 step process */}
        <div className="space-y-8 mb-16">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              1
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Install OpenCode
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                Get the OpenCode desktop app for your platform. It&apos;s the
                AI-native code editor that powers the agent system.
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
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              2
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Connect Provider
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                Open the OpenCode command palette with{" "}
                <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  Ctrl+P
                </kbd>
                , type{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  provider
                </code>
                , and select{" "}
                <strong>&quot;Connect Provider&quot;</strong>. Then choose how
                you want to connect to a model.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              3
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Run the setup script
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                Open a terminal and run the toolkit installer:
              </p>
              <div className="mt-4 rounded-lg bg-neutral-900 dark:bg-neutral-800">
                <div className="flex items-start gap-2 p-3 sm:p-4">
                  <pre className="min-w-0 flex-1 overflow-x-auto text-xs leading-relaxed text-neutral-100 sm:text-sm">
                    <code className="block whitespace-pre-wrap break-all sm:whitespace-pre sm:break-normal">{getInstallCommand()}</code>
                  </pre>
                  <CopyButton text={getInstallCommand()} />
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                This installs agents, skills, and scaffolds to{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  ~/.config/opencode/
                </code>
                . After that, you&apos;re ready to start using{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  @planner
                </code>
                ,{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  @builder
                </code>
                , and the rest of the agent system.
              </p>
              <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800/50">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Note:</strong> When piped to bash, the installer reads prompts from{" "}
                  <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800/80">/dev/tty</code>{" "}
                  so you can answer yes/no questions interactively. In non-interactive environments (like CI), 
                  prompts default to <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800/80">n</code> (no) for safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 mb-16" />

        {/* Starting Your First Project */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Starting Your First Project
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Once the toolkit is installed, open opencode and invoke any primary agent. The agent will immediately ask you to select or add a project.
          </p>

          <div className="space-y-8">
            {/* Step 1: Select a primary agent */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                1. Open opencode and select a primary agent
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Launch opencode and press{" "}
                <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  Tab
                </kbd>
                {" "}to open the agent selector. Choose a primary agent like{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">Planner</code>,{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">Builder</code>, or{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">Toolkit</code>, then start chatting.
              </p>
            </div>

            {/* Step 2: Project selection */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                2. Select or add a project
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                The agent immediately shows you a project selection table:
              </p>
              <div className="rounded-lg bg-neutral-900 p-4 dark:bg-neutral-800 mb-4">
                <pre className="text-sm text-neutral-100 overflow-x-auto"><code>{`═══════════════════════════════════════════════════════════════
                     SELECT PROJECT
═══════════════════════════════════════════════════════════════

  #   Project                    Agent System
  1   My Web App                 ✅ Yes
  2   API Service                ✅ Yes
  3   New Project                ❌ No

  0   ➕ Add New Project

Which project? _`}</code></pre>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">
                Select an existing project by number, or choose <strong>0</strong> to add a new one.
              </p>
            </div>

            {/* Step 3: Bootstrap */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                3. Bootstrap new projects
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                When you select &quot;Add New Project&quot;, the agent uses a streamlined quick intake flow:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
                <li>Enter your project name and a brief description (paste text, images, or a spec)</li>
                <li>Optionally provide a GitHub repo URL to clone</li>
                <li>Auto-detect your tech stack from the codebase or create from a <Link href="/scaffolds" className="text-blue-600 hover:underline dark:text-blue-400">scaffold</Link></li>
                <li>Generate <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">docs/project.json</code> with your configuration</li>
                <li>Create <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">docs/CONVENTIONS.md</code> with coding patterns</li>
                <li>Set up the PRD registry for tracking features</li>
              </ul>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                After bootstrap, the agent automatically offers to create your first PRD with architecture options — so you can start building right away.
              </p>
            </div>

            {/* Step 4: First PRD */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                4. Define your first PRD
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                After setup, the agent immediately kicks off PRD creation. You&apos;ll define:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
                <li>Feature scope and user stories</li>
                <li>Architecture decisions (database schema, API design, etc.)</li>
                <li>Acceptance criteria for each story</li>
              </ul>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                Once the PRD is ready, hand off to{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">@builder</code>{" "}
                to start implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Project Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Project Structure After Setup
          </h2>
          <div className="rounded-lg bg-neutral-900 p-6 dark:bg-neutral-800">
            <pre className="text-sm text-neutral-100 overflow-x-auto"><code>{`your-project/
├── docs/
│   ├── project.json          # Project configuration
│   ├── CONVENTIONS.md        # Coding patterns & style guide
│   ├── prd-registry.json     # Tracks all PRDs
│   ├── prds/                 # Active PRDs
│   └── completed/            # Finished PRDs
├── src/                      # Your application code
└── ...`}</code></pre>
          </div>
        </section>

        {/* Key Agents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            Key Agents to Know
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/agents/builder"
              className="group rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-400"
            >
              <code className="rounded bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">@builder</code>
              <h3 className="mt-2 font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Build Features
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Implement PRDs, write code, run tests, and ship features end-to-end.
              </p>
            </Link>
            <Link
              href="/agents/planner"
              className="group rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-400"
            >
              <code className="rounded bg-green-100 px-2 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">@planner</code>
              <h3 className="mt-2 font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Plan Work
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Create PRDs, prioritize features, and coordinate multi-session work.
              </p>
            </Link>
            <Link
              href="/agents/e2e-tester"
              className="group rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-400"
            >
              <code className="rounded bg-purple-100 px-2 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">@e2e-tester</code>
              <h3 className="mt-2 font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Test End-to-End
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Run and maintain Playwright E2E tests for your application.
              </p>
            </Link>
            <Link
              href="/agents/toolkit"
              className="group rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-400"
            >
              <code className="rounded bg-orange-100 px-2 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">@toolkit</code>
              <h3 className="mt-2 font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Extend the Toolkit
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Modify agents, skills, and scaffolds in the AI Toolkit itself.
              </p>
            </Link>
          </div>
        </section>

        {/* Learn More */}
        <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Learn More
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/concepts"
              className="group rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-400"
            >
              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Concepts →
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Understand how agents, skills, and projects work together
              </p>
            </Link>
            <Link
              href="/agents"
              className="group rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-400"
            >
              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Browse Agents →
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Explore all {manifest.counts.agents} agents and their capabilities
              </p>
            </Link>
            <Link
              href="/skills"
              className="group rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-400"
            >
              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Browse Skills →
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                See the specialized skills that extend agent capabilities
              </p>
            </Link>
            <Link
              href="/concepts/workflow"
              className="group rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-400"
            >
              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                The Agent Loop →
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Learn the Plan-Build-Test-Ship development cycle
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
