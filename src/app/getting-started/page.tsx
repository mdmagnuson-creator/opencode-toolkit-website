import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { manifest } from '@/data';
import { getInstallCommand } from '@/config/urls';
import { GettingStartedClient } from './GettingStartedClient';

export const metadata = {
  title: 'Getting Started | yo, go',
  description: 'Set up and start building with yo, go for agentic development.',
  openGraph: {
    title: 'Getting Started | yo, go',
    description: 'Set up and start building with yo, go for agentic development.',
    images: ['/og/getting-started.png'],
  },
};

// Define the steps for the step tracker
const steps = [
  { id: 'step-1', number: 1, title: 'Install opencode' },
  { id: 'step-2', number: 2, title: 'Connect a provider' },
  { id: 'step-3', number: 3, title: 'Install the toolkit' },
  { id: 'step-4', number: 4, title: 'Go to your project' },
  { id: 'step-5', number: 5, title: 'Launch opencode' },
  { id: 'step-6', number: 6, title: 'Select or add project' },
  { id: 'step-7', number: 7, title: 'Bootstrap new projects' },
  { id: 'step-8', number: 8, title: 'Define your first PRD' },
];

export default function GettingStartedPage() {
  const installCommand = getInstallCommand();
  const opencodeInstallCommand = 'curl -fsSL https://opencode.ai/install.sh | bash';

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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

        {/* Two-column layout: sidebar + content */}
        <div className="flex gap-8">
          {/* Client component handles step tracker and interactive content */}
          <GettingStartedClient
            steps={steps}
            opencodeInstallCommand={opencodeInstallCommand}
            toolkitInstallCommand={installCommand}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 my-16" />

        {/* After Setup Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            After Setup
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            You&apos;re ready to build. Here&apos;s what happens next.
          </p>
        </div>

        {/* Starting Your First Project */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Starting Your First Project
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            When you invoke a primary agent, it will guide you through project setup automatically.
          </p>

          <div className="space-y-8">
            {/* Step 6: Project selection */}
            <section id="step-6" className="scroll-mt-24">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                6. Select or add a project
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
            </section>

            {/* Step 7: Bootstrap */}
            <section id="step-7" className="scroll-mt-24">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                7. Bootstrap new projects
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                When you select &quot;Add New Project&quot;, the agent uses a streamlined quick intake flow:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
                <li>Enter your project name and a brief description (paste text, images, or a spec)</li>
                <li>Optionally provide a GitHub repo URL to clone</li>
                <li>Auto-detect your tech stack from the codebase or create from a <Link href="/reference/scaffolds" className="text-blue-600 hover:underline dark:text-blue-400">scaffold</Link></li>
                <li>Generate <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">docs/project.json</code> with your configuration</li>
                <li>Create <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">docs/CONVENTIONS.md</code> with coding patterns</li>
                <li>Set up the PRD registry for tracking features</li>
              </ul>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                After bootstrap, the agent automatically offers to create your first PRD with architecture options — so you can start building right away.
              </p>
            </section>

            {/* Step 8: First PRD */}
            <section id="step-8" className="scroll-mt-24">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                8. Define your first PRD
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
            </section>
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
              href="/reference/agents/builder"
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
              href="/reference/agents/planner"
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
              href="/reference/agents/e2e-reviewer"
              className="group rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-400"
            >
              <code className="rounded bg-purple-100 px-2 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">@e2e-reviewer</code>
              <h3 className="mt-2 font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Review E2E Tests
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Identifies UI areas changed by a PR and delegates E2E test writing to specialist agents.
              </p>
            </Link>
            <Link
              href="/reference/agents/toolkit"
              className="group rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-400"
            >
              <code className="rounded bg-orange-100 px-2 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">@toolkit</code>
              <h3 className="mt-2 font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Extend the Toolkit
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Modify agents, skills, and scaffolds in yo, go itself.
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
              href="/reference/agents"
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
              href="/reference/skills"
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
            <Link
              href="/concepts/authentication"
              className="group rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-400"
            >
              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Authentication →
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Configure auth for E2E tests and authenticated screenshots
              </p>
            </Link>
            <Link
              href="/concepts/testing"
              className="group rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-blue-400"
            >
              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Testing →
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Unit tests, E2E tests, and Electron desktop testing
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
