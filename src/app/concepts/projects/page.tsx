import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | yo, go",
  description: "Project structure and configuration in yo, go. Learn about the docs/ directory, project.json manifest, CONVENTIONS.md, PRDs, and project bootstrapping.",
  openGraph: {
    title: "Projects | yo, go",
    description: "Project structure and configuration in yo, go. Learn about the docs/ directory, project.json manifest, CONVENTIONS.md, PRDs, and project bootstrapping.",
    images: ["/og/concepts-projects.png"],
  },
};

const PAGE_SECTIONS = [
  { id: "docs-directory", label: "The docs/ Directory" },
  { id: "project-json", label: "project.json" },
  { id: "multi-platform-apps", label: "Multi-Platform Apps" },
  { id: "git-configuration", label: "Git Configuration" },
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
  
  // Path configuration
  "codeRoot": ".",           // Root of source code (default: ".")
  "toolkitPath": "docs/",    // Where toolkit files live (default: "docs/")
  
  // Tech stack info for context-aware code generation
  "stack": {
    "frontend": "react",
    "backend": "node",
    "database": "postgres",
    "hosting": "vercel"
  },
  
  // Development server configuration
  "devServer": {
    "startCommand": "npm run dev",
    "port": 3000,            // Set to null if no dev server needed
    "readyPattern": "Ready"
  },
  
  // Environment-specific overrides
  "environments": {
    "local": { "baseUrl": "http://localhost:3000" },
    "staging": { "baseUrl": "https://staging.myapp.com" }
  },
  
  // Features that enable specific behaviors
  "features": {
    "authentication": true,
    "multiTenant": true,
    "api": true,
    "email": true
  },
  
  // Authentication configuration for E2E testing
  "authentication": {
    "provider": "supabase",   // supabase | nextauth | custom
    "method": "email-password",
    "loginUrl": "/login",
    "credentials": {
      "email": "test@example.com",
      "password": "env:TEST_PASSWORD"  // Use env: prefix for secrets
    }
  },
  
  // Quality gates that must pass before commits
  "qualityGates": {
    "lint": "npm run lint",
    "typecheck": "npm run typecheck",
    "test": "npm run test"
  },
  
  // Git workflow configuration
  "git": {
    "autoCommit": true,      // Set to false for manual commit control
    "autoPush": true,
    "trunkMode": "pr-based"  // "pr-based" (default) or "branchless"
  },
  
  // Integration-specific configurations
  "integrations": {
    "stripe": true,
    "resend": true
  },
  
  // Agent behavior configuration
  "agents": {
    "multiSession": false    // Enable multi-session coordination
  },
  
  // Planning considerations passed through to PRDs
  "planning": {
    "considerations": {
      // Project-level guidance for the Planner agent
    }
  }
}`}
            </pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Path Configuration</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">codeRoot</code> and{" "}
                <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">toolkitPath</code> tell
                agents where to find your source code and toolkit files.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Stack Info</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Tells agents which frameworks and languages you use, so they generate
                appropriate code patterns.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Dev Server</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Configure how to start your dev server. Set{" "}
                <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">port: null</code> for
                projects without a dev server (CLI tools, libraries).
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Environments</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Define environment-specific settings like base URLs for local,
                staging, and production testing.
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
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Authentication</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Configure how E2E tests authenticate. See the{" "}
                <a href="/concepts/authentication" className="text-blue-600 hover:underline dark:text-blue-400">Authentication</a>{" "}
                page for details.
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
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Git Configuration</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Control commit behavior with{" "}
                <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">autoCommit</code> and{" "}
                <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">autoPush</code>. See{" "}
                <a href="#git-configuration" className="text-blue-600 hover:underline dark:text-blue-400">Git Configuration</a>{" "}
                below.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Integrations</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Third-party services your project uses. Agents can generate
                integration-specific code patterns.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Planning Considerations</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                The <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">planning.considerations</code> object
                passes project-level guidance through to PRDs. Planner uses this for
                consistent architectural decisions across features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Platform Apps */}
      <section id="multi-platform-apps" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Multi-Platform Apps
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Projects with multiple deployment targets (web app, Electron desktop, mobile) use the{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">apps[]</code>{" "}
            array to configure each platform independently:
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-900 dark:border-neutral-700">
            <pre className="p-6 text-sm leading-relaxed text-neutral-100">
{`{
  "name": "My Cross-Platform App",
  
  // Multiple app targets
  "apps": [
    {
      "name": "web",
      "type": "web",
      "devServer": {
        "startCommand": "npm run dev",
        "port": 3000,
        "readyPattern": "Ready"
      },
      "baseUrl": "http://localhost:3000"
    },
    {
      "name": "desktop",
      "type": "electron",
      "devServer": {
        "startCommand": "npm run electron:dev",
        "port": null,  // Electron doesn't use a port
        "readyPattern": "Electron ready"
      },
      "electron": {
        "executablePath": "dist/MyApp-darwin-arm64/MyApp.app",
        "devLaunchArgs": [".", "--no-sandbox"]
      }
    }
  ]
}`}
            </pre>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">Web App Entry</h3>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                Standard web apps use <code className="rounded bg-blue-100 px-1 text-xs dark:bg-blue-900">type: &quot;web&quot;</code>.
                E2E tests run via Playwright against the dev server URL.
              </p>
            </div>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100">Electron App Entry</h3>
              <p className="mt-2 text-sm text-purple-800 dark:text-purple-200">
                Desktop apps use <code className="rounded bg-purple-100 px-1 text-xs dark:bg-purple-900">type: &quot;electron&quot;</code>.
                The <code className="rounded bg-purple-100 px-1 text-xs dark:bg-purple-900">electron.executablePath</code> points
                to the built app, while <code className="rounded bg-purple-100 px-1 text-xs dark:bg-purple-900">devLaunchArgs</code>{" "}
                configures development mode. See the{" "}
                <a href="/concepts/testing#electron-desktop-testing" className="text-purple-600 hover:underline dark:text-purple-400">
                  Electron Desktop Testing
                </a>{" "}
                section for details.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
            <h3 className="font-semibold text-amber-900 dark:text-amber-100">
              When to Use apps[] vs Top-Level devServer
            </h3>
            <div className="mt-4 space-y-3 text-sm text-amber-800 dark:text-amber-200">
              <p>
                • <strong>Single platform:</strong> Use top-level <code className="rounded bg-amber-100 px-1 text-xs dark:bg-amber-900">devServer</code>{" "}
                config (simpler)
              </p>
              <p>
                • <strong>Multiple platforms:</strong> Use <code className="rounded bg-amber-100 px-1 text-xs dark:bg-amber-900">apps[]</code>{" "}
                array for independent configuration
              </p>
              <p>
                • Agents automatically detect which target to use based on the test being run
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Git Configuration */}
      <section id="git-configuration" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Git Configuration
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Control how agents handle git commits with the{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">git</code>{" "}
            configuration block:
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-900 dark:border-neutral-700">
            <pre className="p-6 text-sm leading-relaxed text-neutral-100">
{`{
  "git": {
    "autoCommit": true,     // Agents create commits automatically
    "autoPush": true,       // Push commits to remote after creating
    "trunkMode": "pr-based" // "pr-based" or "branchless"
  }
}`}
            </pre>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                autoCommit: true <span className="text-xs font-normal text-neutral-500">(default)</span>
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Agents create commits after completing each story or unit of work. This is the
                standard mode for fully autonomous operation.
              </p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-950">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100">
                autoCommit: false
              </h3>
              <p className="mt-2 text-sm text-orange-800 dark:text-orange-200">
                Agents stage changes but do not commit. Use this when you want to:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-orange-800 dark:text-orange-200">
                <li>• Review all changes before committing</li>
                <li>• Combine multiple agent work sessions into a single commit</li>
                <li>• Use your own commit message format</li>
                <li>• Run additional validation before committing</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
            <h3 className="font-semibold text-green-900 dark:text-green-100">
              Identity Lock Protection
            </h3>
            <p className="mt-2 text-sm text-green-800 dark:text-green-200">
              When agents commit, they verify the git identity matches the configured user
              to prevent accidental commits under the wrong identity. This is especially
              important in multi-machine setups where git config may differ between machines.
            </p>
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

          {/* Collaborative Refinement Callout */}
          <div className="mt-8 rounded-xl border-2 border-green-300 bg-green-50 p-6 dark:border-green-700 dark:bg-green-950">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-lg text-white">
                💬
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                  Refine Conventions Collaboratively with @toolkit
                </h3>
                <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                  You don&apos;t have to write <code className="rounded bg-green-100 px-1 py-0.5 font-mono text-xs dark:bg-green-900">CONVENTIONS.md</code> alone! 
                  Ask <code className="rounded bg-green-100 px-1 py-0.5 font-mono text-xs dark:bg-green-900">@toolkit</code> to 
                  analyze your codebase and help you refine conventions together. The more specific your conventions, 
                  the more consistent agent-generated code will be.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-green-700 dark:text-green-300">
                    Example prompts:
                  </p>
                  <div className="space-y-2 rounded-lg bg-neutral-900 p-3 font-mono text-xs text-neutral-100 dark:bg-neutral-950">
                    <p><span className="text-blue-400">@toolkit</span> review my CONVENTIONS.md and suggest improvements based on my codebase</p>
                    <p><span className="text-blue-400">@toolkit</span> add error handling conventions based on how we handle errors in src/</p>
                    <p><span className="text-blue-400">@toolkit</span> document our component patterns from the existing components</p>
                  </div>
                </div>
              </div>
            </div>
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
            When you add a new project, the agent uses a streamlined quick intake flow 
            that gets you from zero to building in minutes:
          </p>

          {/* Quick intake flow */}
          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">1. Quick Intake</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Provide your project name and context — paste text descriptions, images, 
                or specs directly. The agent extracts requirements from whatever you give it.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">2. Optional GitHub Clone</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                If you have an existing repo, provide the GitHub URL and the agent clones it 
                before detection. Otherwise, start fresh or use a scaffold.
              </p>
              <div className="mt-4 rounded-lg bg-neutral-900 p-3 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                <span className="text-neutral-500">GitHub URL (optional):</span>{" "}
                <span className="text-blue-400">https://github.com/org/my-project</span>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">3. Stack Detection + Setup</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                The agent auto-detects your tech stack and generates{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">project.json</code>{" "}
                and{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">CONVENTIONS.md</code>.
                Agent system setup is assumed by default.
              </p>
            </div>

            <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <h3 className="font-semibold text-green-900 dark:text-green-100">4. Automatic PRD Kickoff</h3>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                After setup, the agent immediately transitions to PRD creation — defining your 
                first feature scope with architecture options. No separate step needed.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
            You can also explicitly trigger bootstrap using the{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">project-bootstrap</code>{" "}
            skill:
          </p>

          <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@planner</span>{" "}
            <span className="text-neutral-400">add a new project</span>
          </div>
        </div>
      </section>
    </main>
  );
}
