import { Breadcrumbs } from "@/components/Breadcrumbs";
import { manifest } from "@/data";
import { REPO_BASE } from "@/config/urls";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scaffolds | yo, go",
  description: "Project scaffold templates for yo, go. Start new projects with Next.js + Prisma, Next.js + Supabase, or Go + Chi + PostgreSQL boilerplate.",
};

// Define stack info for each scaffold
const SCAFFOLD_DETAILS: Record<
  string,
  {
    description: string;
    stack: string[];
    features: string[];
    useCase: string;
  }
> = {
  "go-chi-postgres": {
    description:
      "A production-ready Go API template using Chi router and PostgreSQL with migrations.",
    stack: ["Go", "Chi Router", "PostgreSQL", "Docker", "Make"],
    features: [
      "JWT authentication middleware",
      "Database migrations with golang-migrate",
      "Health check endpoints",
      "Structured logging",
      "Docker Compose for local development",
      "Environment-based configuration",
    ],
    useCase: "Backend APIs, microservices, data-heavy applications",
  },
  "nextjs-prisma": {
    description:
      "A full-stack Next.js template with Prisma ORM and NextAuth authentication.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "NextAuth", "Tailwind CSS"],
    features: [
      "NextAuth.js authentication",
      "Prisma ORM with migrations",
      "Tailwind CSS styling",
      "TypeScript throughout",
      "Shadcn UI components",
      "ESLint + Prettier configured",
    ],
    useCase: "Full-stack web apps, SaaS products, authenticated dashboards",
  },
  "nextjs-supabase": {
    description:
      "A full-stack Next.js template with Supabase for auth, database, and realtime.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
      "Supabase authentication (email, OAuth)",
      "Supabase PostgreSQL database",
      "Server-side Supabase client",
      "Middleware for auth protection",
      "Tailwind CSS styling",
      "TypeScript throughout",
    ],
    useCase: "Full-stack web apps, SaaS products, realtime applications",
  },
};

function ScaffoldCard({
  scaffold,
}: {
  scaffold: { slug: string; name: string; files: string[] };
}) {
  const details = SCAFFOLD_DETAILS[scaffold.slug] || {
    description: `Project scaffold with ${scaffold.files.length} files`,
    stack: [],
    features: [],
    useCase: "",
  };

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {scaffold.name}
          </h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">{details.description}</p>
        </div>
        <a
          href={`${REPO_BASE}/tree/main/scaffolds/${scaffold.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-200"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          Source
        </a>
      </div>

      {/* Stack */}
      {details.stack.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Stack
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {details.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      {details.features.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Included
          </p>
          <ul className="mt-2 space-y-1">
            {details.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Use Case */}
      {details.useCase && (
        <div className="mt-4 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-medium text-neutral-700 dark:text-neutral-300">Best for: </span>
            {details.useCase}
          </p>
        </div>
      )}

      {/* Files count */}
      <div className="mt-4 border-t border-neutral-100 pt-4 dark:border-neutral-800">
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          {scaffold.files.length} template files
        </p>
      </div>
    </div>
  );
}

export default function ScaffoldsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Project Scaffolds
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 dark:text-neutral-400">
            Start new projects quickly with pre-configured templates. Each scaffold includes the
            full stack setup, authentication patterns, and conventions already configured for the
            agent system.
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="border-t border-neutral-200 px-6 py-12 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            How to Use
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Use the <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">project-scaffold</code> skill
            to generate a new project from any scaffold:
          </p>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@builder</span>{" "}
            <span className="text-neutral-400">scaffold a new project using nextjs-prisma</span>
          </div>

          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
            The agent will prompt you for project name and configuration, then generate all files
            with your settings interpolated.
          </p>
        </div>
      </section>

      {/* Scaffolds List */}
      <section className="border-t border-neutral-200 px-6 py-12 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            Available Scaffolds{" "}
            <span className="text-neutral-500 dark:text-neutral-400">
              ({manifest.counts.scaffolds})
            </span>
          </h2>

          <div className="mt-8 space-y-6">
            {manifest.scaffolds.map((scaffold) => (
              <ScaffoldCard key={scaffold.slug} scaffold={scaffold} />
            ))}
          </div>
        </div>
      </section>

      {/* Creating Your Own */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Creating Your Own Scaffold
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Scaffolds are just directories with Handlebars templates. To create your own:
          </p>

          <ol className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                1
              </span>
              <p className="text-neutral-700 dark:text-neutral-400">
                Create a directory in <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">scaffolds/your-scaffold-name/</code>
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                2
              </span>
              <p className="text-neutral-700 dark:text-neutral-400">
                Add a <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">scaffold.yaml</code> defining the prompts
                and variables
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                3
              </span>
              <p className="text-neutral-700 dark:text-neutral-400">
                Add template files in <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">files/</code> using <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">.hbs</code> extension
                for files that need variable interpolation
              </p>
            </li>
          </ol>

          <div className="mt-8 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Pro tip:</strong> Include an <code className="rounded bg-blue-100 px-1 py-0.5 text-xs dark:bg-blue-900">AGENTS.md</code> in your
              scaffold so new projects start with agent-friendly documentation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
