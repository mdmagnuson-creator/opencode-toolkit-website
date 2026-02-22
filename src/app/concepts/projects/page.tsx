import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";

const PAGE_SECTIONS = [
  { id: "docs-directory", label: "The docs/ Directory" },
  { id: "project-json", label: "project.json" },
  { id: "conventions-md", label: "CONVENTIONS.md" },
  { id: "prds", label: "PRDs" },
  { id: "session-locks", label: "Session Locks" },
  { id: "bootstrapping", label: "Bootstrapping" },
];

export default function ProjectsConceptPage() {
  return (
    <main className="min-h-screen">
      {/* On This Page Navigation */}
      <OnThisPageNav sections={PAGE_SECTIONS} />

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Project Toolkit Structure
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            The AI toolkit automatically creates a{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">docs/</code>{" "}
            directory in your project when you first interact with it. This page
            explains what each file does and why it exists.
          </p>
        </div>
      </section>

      {/* The docs/ Directory */}
      <section id="docs-directory" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            The docs/ Directory
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Each project has a <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">docs/</code>{" "}
            directory that contains all project-specific configuration for the agent system:
          </p>

          <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 font-mono text-sm dark:border-neutral-700 dark:bg-neutral-900">
            <div className="space-y-1">
              <p className="text-neutral-500 dark:text-neutral-500">your-project/</p>
              <p className="text-neutral-700 dark:text-neutral-300">├── docs/</p>
              <p className="pl-4 text-neutral-700 dark:text-neutral-300">
                ├── <span className="text-blue-600 dark:text-blue-400">project.json</span>
                <span className="ml-4 font-sans text-xs text-neutral-500">← Project configuration</span>
              </p>
              <p className="pl-4 text-neutral-700 dark:text-neutral-300">
                ├── <span className="text-blue-600 dark:text-blue-400">CONVENTIONS.md</span>
                <span className="ml-4 font-sans text-xs text-neutral-500">← Coding conventions</span>
              </p>
              <p className="pl-4 text-neutral-700 dark:text-neutral-300">
                ├── <span className="text-green-600 dark:text-green-400">prds/</span>
                <span className="ml-4 font-sans text-xs text-neutral-500">← Product requirements</span>
              </p>
              <p className="pl-8 text-neutral-500 dark:text-neutral-500">
                ├── prd-feature-name.json
              </p>
              <p className="pl-4 text-neutral-700 dark:text-neutral-300">
                ├── <span className="text-purple-600 dark:text-purple-400">skills/</span>
                <span className="ml-4 font-sans text-xs text-neutral-500">← Project-specific skills</span>
              </p>
              <p className="pl-4 text-neutral-700 dark:text-neutral-300">
                └── <span className="text-orange-600 dark:text-orange-400">session-locks.json</span>
                <span className="ml-4 font-sans text-xs text-neutral-500">← Multi-session coordination</span>
              </p>
              <p className="text-neutral-500 dark:text-neutral-500">├── src/</p>
              <p className="text-neutral-500 dark:text-neutral-500">└── ...</p>
            </div>
          </div>
        </div>
      </section>

      {/* project.json */}
      <section id="project-json" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            project.json
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            This is the main configuration file that tells agents about your project:
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-900 dark:border-neutral-700">
            <pre className="p-6 text-sm leading-relaxed text-neutral-100">
{`{
  "name": "My SaaS App",
  "description": "A multi-tenant SaaS application",
  
  // Tech stack info for context-aware code generation
  "stack": {
    "frontend": "react",
    "backend": "node",
    "database": "postgres",
    "hosting": "vercel"
  },
  
  // Features that enable specific behaviors
  "features": {
    "authentication": true,
    "multiTenant": true,
    "api": true,
    "email": true
  },
  
  // Quality gates that must pass before commits
  "qualityGates": {
    "lint": "npm run lint",
    "typecheck": "npm run typecheck",
    "test": "npm run test"
  },
  
  // Integration-specific configurations
  "integrations": {
    "stripe": true,
    "resend": true
  },
  
  // Agent behavior configuration
  "agents": {
    "trunkMode": "pr-based"  // "pr-based" (default) or "branchless"
  }
}`}
            </pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Stack Info</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Tells agents which frameworks and languages you use, so they generate
                appropriate code patterns.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Features</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Boolean flags that unlock specific agent behaviors and enable
                project-specific skill generation.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Quality Gates</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Commands that agents must run and pass before committing changes.
                Ensures code quality is maintained.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Integrations</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Third-party services your project uses. Agents can generate
                integration-specific code patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONVENTIONS.md */}
      <section id="conventions-md" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            CONVENTIONS.md
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            A markdown file describing your team&apos;s coding conventions. Agents read
            this to understand how to write code that fits your codebase:
          </p>

          <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="prose prose-neutral prose-sm max-w-none dark:prose-invert">
              <h3 className="text-base font-semibold">Example conventions to document:</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
                <li>File naming patterns (PascalCase for components, kebab-case for routes)</li>
                <li>Component structure and patterns (functional vs class components)</li>
                <li>State management approach (React Query, Zustand, etc.)</li>
                <li>Styling conventions (Tailwind classes, CSS-in-JS, design tokens)</li>
                <li>Testing patterns (what to test, naming conventions)</li>
                <li>Error handling approaches</li>
                <li>API design patterns (REST conventions, error responses)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Tip:</strong> The more specific your conventions, the more
              consistent agent-generated code will be. Include examples!
            </p>
          </div>
        </div>
      </section>

      {/* PRDs */}
      <section id="prds" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            PRDs (Product Requirements)
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            PRDs are JSON files in <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">docs/prds/</code>{" "}
            that define features as a series of user stories:
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-900 dark:border-neutral-700">
            <pre className="p-6 text-sm leading-relaxed text-neutral-100">
{`{
  "project": "My SaaS App",
  "branchName": "feature/dark-mode",
  "description": "Add dark mode support",
  "userStories": [
    {
      "id": "US-001",
      "title": "Theme toggle component",
      "description": "User can toggle theme",
      "acceptanceCriteria": [
        "Toggle button in header",
        "Persists preference to localStorage"
      ],
      "priority": 1,
      "passes": false  // ← Agents update this!
    }
  ]
}`}
            </pre>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">
                ✓
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                <strong>passes: true/false</strong> — Agents update this as they complete
                each story, giving you progress visibility.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                →
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                <strong>Priority order</strong> — Stories are implemented in priority
                order, so dependencies are respected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Locks */}
      <section id="session-locks" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Session Locks
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            The <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">session-locks.json</code>{" "}
            file prevents conflicts when multiple agent sessions work on the same project:
          </p>

          <div className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100">
              How Session Locks Work
            </h3>
            <div className="mt-4 space-y-3 text-sm text-orange-800 dark:text-orange-200">
              <p>
                • When an agent starts working on a PRD, it acquires a lock
              </p>
              <p>
                • Other agents see the lock and either wait or work on different PRDs
              </p>
              <p>
                • When work is complete (PR merged or abandoned), the lock is released
              </p>
              <p>
                • This enables parallel work without merge conflicts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bootstrapping */}
      <section id="bootstrapping" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Bootstrapping
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            When you first use the toolkit with a project, it automatically detects
            your tech stack and creates the initial configuration files. You can also
            explicitly trigger this using the{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">project-bootstrap</code>{" "}
            skill:
          </p>

          <div className="mt-8 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@builder</span>{" "}
            <span className="text-neutral-400">bootstrap this project for the agent system</span>
          </div>

          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            The agent analyzes your codebase, detects frameworks and patterns,
            and generates an initial <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">project.json</code>{" "}
            and <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">CONVENTIONS.md</code>.
          </p>
        </div>
      </section>
    </main>
  );
}
