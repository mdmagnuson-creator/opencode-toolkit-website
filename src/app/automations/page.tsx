import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Automations | AI Toolkit",
  description: "Go CLI tools for CI triage, PRD generation, and release notes automation.",
};

function CodeBlock({ code, language = "yaml" }: { code: string; language?: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100 dark:bg-neutral-950">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

function SectionHeading({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="group mb-4 scroll-mt-24 text-2xl font-semibold text-neutral-900 dark:text-white">
      <a href={`#${id}`} className="flex items-center gap-2">
        {children}
        <span className="text-neutral-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-neutral-600">
          #
        </span>
      </a>
    </h2>
  );
}

interface AutomationCardProps {
  name: string;
  description: string;
  triggers: string[];
  workflow: string;
  features: string[];
}

function AutomationCard({ name, description, triggers, workflow, features }: AutomationCardProps) {
  return (
    <div id={name.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-24 rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="border-b border-neutral-200 p-6 dark:border-neutral-800">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          {name}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {triggers.map((trigger) => (
            <span
              key={trigger}
              className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            >
              {trigger}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Features:</h4>
          <ul className="mt-2 space-y-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Workflow Configuration:
        </h4>
        <CodeBlock code={workflow} />
      </div>
    </div>
  );
}

const automations: AutomationCardProps[] = [
  {
    name: "CI Triage",
    description: "Automatically analyze CI failures and provide actionable summaries. When a workflow fails, this automation examines logs, identifies the root cause, and posts a comment with fix suggestions.",
    triggers: ["workflow_run.completed", "check_run.completed"],
    features: [
      "Parses build logs to identify failure patterns",
      "Distinguishes between flaky tests, dependency issues, and code errors",
      "Posts a PR comment with root cause analysis",
      "Suggests specific fixes based on error patterns",
      "Links to relevant documentation when applicable",
    ],
    workflow: `name: CI Triage
on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]

jobs:
  triage:
    if: \${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Download logs
        uses: actions/download-artifact@v4
        with:
          name: build-logs
          
      - name: Analyze failure
        uses: opencode-ai/ci-triage@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          opencode-api-key: \${{ secrets.OPENCODE_API_KEY }}
          
      - name: Post analysis
        uses: actions/github-script@v7
        with:
          script: |
            const analysis = require('./triage-report.json');
            github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.payload.workflow_run.pull_requests[0]?.number,
              body: analysis.summary
            });`,
  },
  {
    name: "PRD Generator",
    description: "Generate Product Requirements Documents from issue descriptions. When an issue is labeled as a feature request, this automation creates a structured PRD with user stories, acceptance criteria, and technical considerations.",
    triggers: ["issues.labeled", "issues.opened"],
    features: [
      "Extracts requirements from issue description",
      "Generates user stories with acceptance criteria",
      "Identifies technical dependencies and risks",
      "Creates milestone and task breakdown",
      "Outputs to docs/prds/ in your repository",
    ],
    workflow: `name: PRD Generator
on:
  issues:
    types: [labeled, opened]

jobs:
  generate-prd:
    if: contains(github.event.issue.labels.*.name, 'feature-request')
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Generate PRD
        uses: opencode-ai/prd-generator@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          opencode-api-key: \${{ secrets.OPENCODE_API_KEY }}
          issue-number: \${{ github.event.issue.number }}
          output-path: docs/prds/
          
      - name: Create PR with PRD
        uses: peter-evans/create-pull-request@v6
        with:
          title: "docs: Add PRD for #\${{ github.event.issue.number }}"
          body: |
            Generated PRD for issue #\${{ github.event.issue.number }}
            
            Please review the requirements and user stories.
          branch: prd/issue-\${{ github.event.issue.number }}
          commit-message: "docs: generate PRD for issue #\${{ github.event.issue.number }}"`,
  },
  {
    name: "Release Notes",
    description: "Automatically generate release notes from merged PRs and commits. Creates well-formatted changelogs organized by category (features, fixes, improvements) when a release is published.",
    triggers: ["release.published", "workflow_dispatch"],
    features: [
      "Collects all merged PRs since last release",
      "Categorizes changes by PR labels or commit prefixes",
      "Generates markdown changelog with contributor credits",
      "Optionally updates CHANGELOG.md in your repo",
      "Supports conventional commits format",
    ],
    workflow: `name: Release Notes
on:
  release:
    types: [published]
  workflow_dispatch:
    inputs:
      tag:
        description: 'Release tag'
        required: true

jobs:
  generate-notes:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
          
      - name: Generate release notes
        uses: opencode-ai/release-notes@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          opencode-api-key: \${{ secrets.OPENCODE_API_KEY }}
          tag: \${{ github.event.release.tag_name || inputs.tag }}
          categories: |
            feat: Features
            fix: Bug Fixes
            docs: Documentation
            perf: Performance
            refactor: Refactoring
            
      - name: Update release
        uses: softprops/action-gh-release@v1
        with:
          body_path: release-notes.md
          tag_name: \${{ github.event.release.tag_name || inputs.tag }}`,
  },
];

export default function AutomationsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
      <Breadcrumbs />

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white">
          Automations
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Go CLI tools that bring AI-powered automation to your development workflow.
          Run them locally, integrate into your CI pipelines, or use with GitHub Actions.
        </p>
      </div>

      {/* Quick Links */}
      <section className="mb-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {automations.map((automation) => (
            <a
              key={automation.name}
              href={`#${automation.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-lg border border-neutral-200 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-neutral-800 dark:hover:border-blue-800 dark:hover:bg-blue-900/10"
            >
              <h3 className="font-medium text-neutral-900 dark:text-white">{automation.name}</h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {automation.triggers.join(", ")}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-12">
        <SectionHeading id="getting-started">Getting Started</SectionHeading>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-neutral-700 dark:text-neutral-300">
            Each automation is a standalone Go CLI tool. You can run them locally or integrate them into CI:
          </p>
          
          <h4 className="mt-6 text-lg font-medium text-neutral-900 dark:text-white">Local Usage</h4>
          <ol className="mt-4 space-y-3 text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">1</span>
              <span>Clone the <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">ai-toolkit</code> repository and navigate to the automation directory</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">2</span>
              <span>Build the tool with <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">go build</code> or run directly with <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">go run .</code></span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">3</span>
              <span>Set required environment variables (see each automation&apos;s documentation)</span>
            </li>
          </ol>

          <h4 className="mt-6 text-lg font-medium text-neutral-900 dark:text-white">CI Integration</h4>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            The example workflows below show how to wrap each CLI tool in a GitHub Action. Adapt the workflow YAML to match your CI environment.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-900/20">
          <div className="flex gap-3">
            <svg className="h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-medium text-amber-900 dark:text-amber-300">Required Configuration</h3>
              <p className="mt-1 text-sm text-amber-800 dark:text-amber-400">
                Most automations require a <code className="rounded bg-amber-100 px-1 dark:bg-amber-900/50">GITHUB_TOKEN</code> for repository access
                and an AI provider API key. Check each tool&apos;s README for specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Cards */}
      <section className="mb-12">
        <SectionHeading id="available-automations">Available Automations</SectionHeading>
        <div className="space-y-8">
          {automations.map((automation) => (
            <AutomationCard key={automation.name} {...automation} />
          ))}
        </div>
      </section>

      {/* Customization */}
      <section className="mb-12">
        <SectionHeading id="customization">Customization</SectionHeading>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          All automations can be customized to fit your workflow:
        </p>
        
        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-medium text-neutral-900 dark:text-white">Trigger conditions</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Modify the <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">on:</code> section to change when the workflow runs.
              Filter by branches, paths, or other conditions.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-medium text-neutral-900 dark:text-white">Action inputs</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Each action accepts configuration inputs. Check the action&apos;s README for all available options.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-medium text-neutral-900 dark:text-white">Combining automations</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Chain multiple automations together using workflow outputs or by triggering workflows from other workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <a href="/mcp" className="group flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
          <svg className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>MCP Servers</span>
        </a>
        <a href="/agent-templates" className="group flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
          <span>Agent Templates</span>
          <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </main>
  );
}
