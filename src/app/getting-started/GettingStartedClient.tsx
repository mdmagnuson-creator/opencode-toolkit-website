'use client';

import { CopyButton } from '@/components/CopyButton';
import { CodeBlockWithCopy } from '@/components/CodeBlockWithCopy';
import { StepTracker, Step } from '@/components/StepTracker';
import { TerminalMockup } from '@/components/TerminalMockup';

interface GettingStartedClientProps {
  steps: Step[];
  opencodeInstallCommand: string;
  toolkitInstallCommand: string;
}

export function GettingStartedClient({
  steps,
  opencodeInstallCommand,
  toolkitInstallCommand,
}: GettingStartedClientProps) {
  return (
    <>
      {/* Step tracker sidebar */}
      <StepTracker steps={steps} />

      {/* Main content */}
      <div className="flex-1 min-w-0 space-y-12">
        {/* Step 1: Install opencode */}
        <section id="step-1" className="scroll-mt-24">
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              1
            </div>
            <div className="pt-1 flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Install opencode
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                Run this command in your terminal to install opencode:
              </p>
              <div className="mt-4">
                <CodeBlockWithCopy code={opencodeInstallCommand} />
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                This downloads and installs opencode — a terminal-based AI coding tool — onto your computer.
              </p>
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-900/20">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>macOS users:</strong> After installation completes, open a new terminal window to ensure opencode is available in your PATH.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Connect a provider */}
        <section id="step-2" className="scroll-mt-24">
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              2
            </div>
            <div className="pt-1 flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Connect a provider
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                A provider is the AI service that powers opencode. Think of it like connecting opencode to a brain.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                We recommend{' '}
                <a
                  href="https://github.com/features/copilot/plans"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Copilot Pro+
                </a>{' '}
                for the best experience. It provides access to Claude and GPT models with high rate limits.
              </p>

              <div className="mt-6">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Launch opencode in your terminal:
                </h4>
                <CodeBlockWithCopy code="opencode" />
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Then run the connect command:
                </h4>
                <CodeBlockWithCopy code="/connect" />
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-3">
                  You&apos;ll see a provider selection screen:
                </h4>
                <TerminalMockup title="opencode">
                  <code>{`┌─ Connect Provider ────────────────────────────────────┐
│                                                       │
│  Select a provider:                                   │
│                                                       │
│  ▸ GitHub Copilot         Recommended                 │
│    Anthropic API          Requires API key            │
│    OpenAI API             Requires API key            │
│    AWS Bedrock            Requires AWS credentials    │
│    Google Vertex          Requires GCP credentials    │
│                                                       │
│  ↑/↓: Navigate  Enter: Select  Esc: Cancel           │
│                                                       │
└───────────────────────────────────────────────────────┘`}</code>
                </TerminalMockup>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-3">
                  For GitHub Copilot, you&apos;ll authenticate via device flow:
                </h4>
                <TerminalMockup title="opencode">
                  <code>{`┌─ GitHub Device Authentication ────────────────────────┐
│                                                       │
│  To authenticate with GitHub Copilot:                 │
│                                                       │
│  1. Open: https://github.com/login/device             │
│                                                       │
│  2. Enter code: ABCD-1234                             │
│                                                       │
│  Waiting for authentication...                        │
│                                                       │
└───────────────────────────────────────────────────────┘`}</code>
                </TerminalMockup>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                  Open the URL in your browser, enter the code shown, and authorize access. Once complete, opencode will confirm the connection.
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800/50">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Tip:</strong> After connecting, type{' '}
                  <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-700">/models</code>{' '}
                  to see available models, then{' '}
                  <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-700">/exit</code>{' '}
                  to quit and continue setup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Install the yo, go toolkit */}
        <section id="step-3" className="scroll-mt-24">
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              3
            </div>
            <div className="pt-1 flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Install the yo, go toolkit
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                This installs the agents, skills, and project templates that make opencode work for structured software development.
              </p>
              <div className="mt-4">
                <CodeBlockWithCopy code={toolkitInstallCommand} />
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                This installs agents, skills, and scaffolds to{' '}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  ~/.config/opencode/
                </code>
                . After that, you&apos;re ready to start using{' '}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  @planner
                </code>
                ,{' '}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
                  @builder
                </code>
                , and the rest of the agent system.
              </p>
              <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800/50">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Note:</strong> When piped to bash, the installer reads prompts from{' '}
                  <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800/80">/dev/tty</code>{' '}
                  so you can answer yes/no questions interactively. In non-interactive environments (like CI), 
                  prompts default to <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800/80">n</code> (no) for safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Go to your project folder */}
        <section id="step-4" className="scroll-mt-24">
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              4
            </div>
            <div className="pt-1 flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Go to your project folder
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                opencode works inside your project. You need to point your terminal at the folder you want to work on.
              </p>
              <div className="mt-4">
                <CodeBlockWithCopy code="cd ~/code/your-project" />
              </div>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                Replace <code className="text-neutral-600 dark:text-neutral-400">your-project</code> with your project folder name.
              </p>
              
              <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Starting from scratch?</strong> Create a new project folder:
                </p>
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <code className="flex-1 rounded bg-blue-100 px-3 py-2 text-sm text-blue-900 dark:bg-blue-900/40 dark:text-blue-100">
                      mkdir ~/code/my-project && cd ~/code/my-project
                    </code>
                    <CopyButton text="mkdir ~/code/my-project && cd ~/code/my-project" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Launch opencode */}
        <section id="step-5" className="scroll-mt-24">
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-base font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
              5
            </div>
            <div className="pt-1 flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Launch opencode
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                Start opencode from your project directory:
              </p>
              <div className="mt-4">
                <CodeBlockWithCopy code="opencode" />
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-3">
                  You&apos;ll see the opencode TUI:
                </h4>
                <TerminalMockup title="opencode">
                  <code>{`┌─ opencode ─────────────────────────────────────────────┐
│                                                        │
│  Welcome to opencode                                   │
│                                                        │
│  Model: claude-sonnet-4-20250514                       │
│  Provider: GitHub Copilot                              │
│                                                        │
│  Type a message or invoke an agent with @              │
│                                                        │
│  > _                                                   │
│                                                        │
└────────────────────────────────────────────────────────┘`}</code>
                </TerminalMockup>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Select an agent
                </h4>
                <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-400 mb-4">
                  Press <kbd className="rounded bg-neutral-200 px-2 py-1 text-sm font-mono dark:bg-neutral-700">Tab</kbd> to open the agent selector, pick an agent (like <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">@planner</code> or <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">@builder</code>), then type your message.
                </p>

                <TerminalMockup title="opencode">
                  <code>{`┌─ opencode ─────────────────────────────────────────────┐
│                                                        │
│  ┌─ Select Agent ────────────────────────────────────┐ │
│  │ ▸ @planner      Plan features and create PRDs     │ │
│  │   @builder      Build and ship code               │ │
│  │   @toolkit      Manage the agent toolkit          │ │
│  │   @e2e-reviewer Review and write E2E tests        │ │
│  └───────────────────────────────────────────────────┘ │
│                                                        │
│  > @planner _                                          │
│                                                        │
└────────────────────────────────────────────────────────┘`}</code>
                </TerminalMockup>

                <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                  For a simple first interaction, select <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">@planner</code>, type <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">yo</code>, and press Enter.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-3">
                  What happens next
                </h4>
                <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-400 mb-4">
                  When you invoke a primary agent like <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">@planner</code>, it will ask you to select or register a project:
                </p>
                <div className="rounded-lg bg-neutral-900 p-4 dark:bg-neutral-800">
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
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                  Select an existing project or add a new one. The agent will then bootstrap project configuration and guide you through creating your first PRD.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
