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
            Set up the AI Toolkit and start building with agentic development in minutes.
          </p>
        </div>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Prerequisites
          </h2>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">✓</span>
                <div>
                  <span className="font-medium text-neutral-900 dark:text-white">OpenCode CLI</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">The AI-powered development environment. Install from <a href="https://opencode.ai" className="text-blue-600 hover:underline dark:text-blue-400">opencode.ai</a></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">✓</span>
                <div>
                  <span className="font-medium text-neutral-900 dark:text-white">Git</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Version control for your projects</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">✓</span>
                <div>
                  <span className="font-medium text-neutral-900 dark:text-white">GitHub Account</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Required for repository access. <a href="https://github.com/features/copilot" className="text-blue-600 hover:underline dark:text-blue-400">GitHub Copilot Pro+</a> recommended for access to the best models.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">✓</span>
                <div>
                  <span className="font-medium text-neutral-900 dark:text-white">LLM Provider</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">GitHub Copilot Pro+ (recommended, works out of the box), <a href="https://zen.ai" className="text-blue-600 hover:underline dark:text-blue-400">Zen</a> (alternative provider), or direct API keys (OpenAI, Anthropic, etc.)</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Step 1 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">1</span>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Install the AI Toolkit
            </h2>
          </div>
          <div className="ml-14">
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Clone the AI Toolkit repository to your local config directory:
            </p>
            <div className="rounded-lg bg-neutral-900 p-4 dark:bg-neutral-800">
              <pre className="text-sm text-neutral-100 overflow-x-auto"><code>{`git clone https://github.com/opencode-ai/ai-toolkit.git ~/.config/opencode`}</code></pre>
            </div>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              This installs the agents, skills, scaffolds, and configuration files that power the toolkit.
            </p>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">2</span>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Bootstrap Your First Project
            </h2>
          </div>
          <div className="ml-14">
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Navigate to your project directory and use the project-bootstrap skill to set up agent system integration:
            </p>
            <div className="rounded-lg bg-neutral-900 p-4 dark:bg-neutral-800">
              <pre className="text-sm text-neutral-100 overflow-x-auto"><code>{`cd ~/code/my-project
opencode`}</code></pre>
            </div>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              Then tell the agent:
            </p>
            <div className="mt-2 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
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
        </section>

        {/* Step 3 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">3</span>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Create Your First PRD
            </h2>
          </div>
          <div className="ml-14">
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              PRDs (Product Requirements Documents) are how you communicate what you want to build. Create one by telling the agent:
            </p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
              <p className="font-mono text-sm text-blue-800 dark:text-blue-200">
                &quot;Create a PRD for user authentication with email/password login&quot;
              </p>
            </div>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              The agent will use the <Link href="/skills/prd" className="text-blue-600 hover:underline dark:text-blue-400">prd skill</Link> to:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
              <li>Break down your request into user stories</li>
              <li>Define acceptance criteria for each story</li>
              <li>Identify dependencies and technical considerations</li>
              <li>Save the PRD to <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">docs/prds/</code></li>
            </ul>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">4</span>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Start Building
            </h2>
          </div>
          <div className="ml-14">
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              With your project configured and PRD ready, tell the agent to start implementation:
            </p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
              <p className="font-mono text-sm text-blue-800 dark:text-blue-200">
                &quot;Implement the first user story from prd-auth&quot;
              </p>
            </div>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              The agent will:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-neutral-600 dark:text-neutral-300">
              <li>Read the user story and acceptance criteria</li>
              <li>Write code following your project conventions</li>
              <li>Run quality gates (typecheck, lint, tests)</li>
              <li>Request code review from critic agents</li>
              <li>Commit changes when everything passes</li>
            </ul>
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
│   ├── ARCHITECTURE.md       # System overview (optional)
│   ├── prd-registry.json     # Tracks all PRDs
│   ├── session-locks.json    # Multi-session coordination
│   ├── prds/                 # Active PRDs
│   ├── drafts/               # PRDs in progress
│   └── completed/            # Finished PRDs
├── src/                      # Your application code
└── ...`}</code></pre>
          </div>
        </section>

        {/* Key Workflows */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            Key Workflows
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Planning Session</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Use the planner agent to create and refine PRDs, prioritize features, and coordinate work.
              </p>
              <code className="text-xs text-blue-600 dark:text-blue-400">@project-planner</code>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Building Session</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Use the builder agent to implement user stories, write code, and ship features.
              </p>
              <code className="text-xs text-blue-600 dark:text-blue-400">@builder</code>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Code Review</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Critic agents automatically review code for best practices, security, and consistency.
              </p>
              <code className="text-xs text-blue-600 dark:text-blue-400">@critic</code>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Testing</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Tester agents write and maintain tests for your code changes.
              </p>
              <code className="text-xs text-blue-600 dark:text-blue-400">@tester</code>
            </div>
          </div>
        </section>

        {/* New Project */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Starting a New Project
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Want to start fresh? Use a scaffold to generate a complete project template:
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950 mb-4">
            <p className="font-mono text-sm text-blue-800 dark:text-blue-200">
              &quot;Scaffold a new project using nextjs-prisma&quot;
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300">
            Check out the <Link href="/scaffolds" className="text-blue-600 hover:underline dark:text-blue-400">available scaffolds</Link> to see what&apos;s included in each template.
          </p>
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
