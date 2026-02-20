import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { manifest } from '@/data';

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

        {/* Steps - matches homepage exactly */}
        <div className="space-y-8 mb-16">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              1
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Download opencode
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
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
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              2
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Connect GitHub
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                Link your GitHub account to opencode. This enables agents to
                read repositories, create branches, and manage pull requests
                on your behalf.
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
                Upgrade to GitHub Copilot Pro+
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                For best results, upgrade to GitHub Copilot Pro+ (or use your
                own API keys). This gives agents access to the most capable
                models—critical for complex coding tasks.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              4
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Run the setup script
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                Open a terminal and run the toolkit installer:
              </p>
              <div className="mt-4 rounded-lg bg-neutral-900 p-4 dark:bg-neutral-800">
                <pre className="text-sm text-neutral-100 overflow-x-auto"><code>{`curl -fsSL https://raw.githubusercontent.com/mdmagnuson-creator/ai-toolkit/main/install.sh | bash`}</code></pre>
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
            Once the toolkit is installed, you can bootstrap any project to work with the agent system.
          </p>

          <div className="space-y-8">
            {/* Bootstrap step */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Bootstrap an existing project
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Navigate to your project directory and open opencode:
              </p>
              <div className="rounded-lg bg-neutral-900 p-4 dark:bg-neutral-800 mb-4">
                <pre className="text-sm text-neutral-100 overflow-x-auto"><code>{`cd ~/code/my-project
opencode`}</code></pre>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Then tell the agent:
              </p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
                <p className="font-mono text-sm text-blue-800 dark:text-blue-200">
                  &quot;Bootstrap this project&quot;
                </p>
              </div>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                The agent will:
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
                <li>Auto-detect your tech stack (framework, database, testing, etc.)</li>
                <li>Ask clarifying questions for anything it can&apos;t detect</li>
                <li>Generate <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">docs/project.json</code> with your configuration</li>
                <li>Create <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">docs/CONVENTIONS.md</code> with coding patterns</li>
                <li>Set up the PRD registry for tracking features</li>
              </ul>
            </div>

            {/* Or start fresh */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Or start a new project from a scaffold
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Use a scaffold to generate a complete project template with best practices baked in:
              </p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950 mb-4">
                <p className="font-mono text-sm text-blue-800 dark:text-blue-200">
                  &quot;Scaffold a new project using nextjs-supabase&quot;
                </p>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">
                Check out the <Link href="/scaffolds" className="text-blue-600 hover:underline dark:text-blue-400">available scaffolds</Link> to see what&apos;s included.
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
                The Workflow Loop →
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Learn the build-review-ship development cycle
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
