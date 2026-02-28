import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vectorization | yo, go",
  description: "Semantic search for your codebase and database schemas. Learn how agents use vector embeddings to find relevant code, understand patterns, and navigate large codebases.",
};

const PAGE_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How It Works" },
  { id: "setup", label: "Setup Guide" },
  { id: "configuration", label: "Configuration" },
  { id: "commands", label: "CLI Commands" },
  { id: "agent-integration", label: "Agent Integration" },
  { id: "database-indexing", label: "Database Indexing" },
  { id: "costs", label: "Cost Estimates" },
];

export default function VectorizationPage() {
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
            Semantic Search & Vectorization
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Enable agents to search your codebase semantically using AI
            embeddings. Ask &quot;How does authentication work?&quot; instead of
            grep-ing for &quot;auth&quot;.
          </p>

          {/* Key Benefits */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800 dark:bg-cyan-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <p className="mt-3 text-sm font-semibold text-cyan-900 dark:text-cyan-100">
                Semantic Search
              </p>
              <p className="mt-1 text-xs text-cyan-700 dark:text-cyan-400">
                Natural language queries across code, docs, and database
                schemas
              </p>
            </div>

            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <p className="mt-3 text-sm font-semibold text-purple-900 dark:text-purple-100">
                49% Fewer Failures
              </p>
              <p className="mt-1 text-xs text-purple-700 dark:text-purple-400">
                Contextual Retrieval improves search accuracy
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <p className="mt-3 text-sm font-semibold text-green-900 dark:text-green-100">
                Database Aware
              </p>
              <p className="mt-1 text-xs text-green-700 dark:text-green-400">
                Agents understand your schema and config tables
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        id="overview"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            What is Vectorization?
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            Vectorization converts your codebase into embeddings—numerical
            representations that capture meaning—and stores them in a local
            vector database (LanceDB). This enables semantic search: finding
            code by meaning rather than exact text matching.
          </p>

          {/* Traditional vs Semantic Search */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950">
              <h3 className="flex items-center gap-2 font-semibold text-red-900 dark:text-red-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Traditional Search (grep)
              </h3>
              <div className="mt-4 space-y-3 text-sm text-red-800 dark:text-red-200">
                <p>
                  <code className="rounded bg-red-100 px-1.5 py-0.5 dark:bg-red-900">
                    grep -r &quot;auth&quot;
                  </code>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-red-700 dark:text-red-300">
                  <li>Finds &quot;auth&quot;, &quot;authenticate&quot;, &quot;authorization&quot;</li>
                  <li>Misses &quot;login&quot;, &quot;session&quot;, &quot;JWT&quot;, &quot;token&quot;</li>
                  <li>No understanding of what you actually need</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <h3 className="flex items-center gap-2 font-semibold text-green-900 dark:text-green-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Semantic Search
              </h3>
              <div className="mt-4 space-y-3 text-sm text-green-800 dark:text-green-200">
                <p>
                  <code className="rounded bg-green-100 px-1.5 py-0.5 dark:bg-green-900">
                    &quot;How does authentication work?&quot;
                  </code>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-green-700 dark:text-green-300">
                  <li>Finds auth middleware, JWT verification</li>
                  <li>Finds login handlers and session management</li>
                  <li>Finds architecture docs explaining the flow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            How It Works
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The vectorization system uses a hybrid approach combining vector
            similarity search with BM25 keyword matching for optimal results.
          </p>

          {/* Architecture Diagram */}
          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
            <div className="space-y-6">
              {/* Step 1: Chunking */}
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-semibold text-white">
                  1
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                    AST Chunking
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Code is split into semantic chunks using Tree-sitter—functions,
                    classes, methods, and exports are kept intact.
                  </p>
                  <div className="mt-3 rounded-lg bg-neutral-100 p-3 font-mono text-xs dark:bg-neutral-800">
                    <span className="text-neutral-500">1,247 files →</span>{" "}
                    <span className="text-cyan-600 dark:text-cyan-400">
                      8,453 chunks
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg
                  className="h-6 w-6 text-neutral-400 dark:text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>

              {/* Step 2: Contextual Retrieval */}
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
                  2
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Contextual Retrieval (Optional)
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Claude Haiku adds a brief description to each chunk explaining
                    its role in the codebase. This improves retrieval by 49%.
                  </p>
                  <div className="mt-3 rounded-lg border border-purple-200 bg-purple-50 p-3 text-xs dark:border-purple-800 dark:bg-purple-950">
                    <p className="italic text-purple-700 dark:text-purple-300">
                      &quot;This function is the main authentication middleware. It
                      extracts the JWT token from the Authorization header and
                      verifies it...&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg
                  className="h-6 w-6 text-neutral-400 dark:text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>

              {/* Step 3: Embedding */}
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                  3
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Embedding & Storage
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Chunks are converted to vectors using OpenAI&apos;s
                    text-embedding-3-small model and stored in LanceDB alongside a
                    BM25 keyword index.
                  </p>
                  <div className="mt-3 flex gap-4">
                    <div className="rounded-lg bg-green-100 px-3 py-2 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                      Vector Index: 38MB
                    </div>
                    <div className="rounded-lg bg-blue-100 px-3 py-2 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      BM25 Index: 4MB
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg
                  className="h-6 w-6 text-neutral-400 dark:text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>

              {/* Step 4: Hybrid Search */}
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm font-semibold text-white">
                  4
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Hybrid Search
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Queries combine semantic similarity (70%) with keyword matching
                    (30%) for best results. Agents automatically use this via the{" "}
                    <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-700">
                      semantic_search
                    </code>{" "}
                    tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section
        id="setup"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Setup Guide
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            Enable vectorization for your project in a few steps.
          </p>

          {/* Prerequisites */}
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
            <h3 className="flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-100">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              Prerequisites
            </h3>
            <div className="mt-4 space-y-3 text-sm text-amber-800 dark:text-amber-200">
              <div className="flex items-center gap-3">
                <span className="rounded bg-amber-200 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-800 dark:text-amber-100">
                  Required
                </span>
                <code className="text-amber-900 dark:text-amber-100">
                  OPENAI_API_KEY
                </code>
                <span className="text-amber-700 dark:text-amber-300">
                  — for embeddings
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                  Optional
                </span>
                <code className="text-amber-900 dark:text-amber-100">
                  ANTHROPIC_API_KEY
                </code>
                <span className="text-amber-700 dark:text-amber-300">
                  — for Contextual Retrieval
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                  Optional
                </span>
                <code className="text-amber-900 dark:text-amber-100">
                  DATABASE_URL
                </code>
                <span className="text-amber-700 dark:text-amber-300">
                  — for database schema indexing
                </span>
              </div>
            </div>
          </div>

          {/* Setup Options */}
          <div className="mt-10 space-y-6">
            {/* Option 1: During Bootstrap */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    During Project Bootstrap
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    When you bootstrap a new project with{" "}
                    <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">
                      @planner
                    </code>
                    , you&apos;ll be prompted to enable vectorization.
                  </p>
                  <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                    <p className="text-neutral-400"># Bootstrap prompt</p>
                    <p className="mt-2 text-green-400">
                      Enable semantic search (vectorization)?
                    </p>
                    <p className="text-blue-400">[Y] Yes — recommended</p>
                    <p className="text-blue-400">[N] No — use grep/glob only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2: Manual Setup */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Manual Setup (Existing Projects)
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    Run the vectorize init command from your project root:
                  </p>
                  <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                    <p className="text-neutral-400">
                      # Initialize vectorization
                    </p>
                    <p className="mt-1">
                      <span className="text-green-400">$</span> npx
                      @yo-go/vectorize init
                    </p>
                    <p className="mt-4 text-neutral-400"># Or via Builder</p>
                    <p className="mt-1">
                      <span className="text-green-400">$</span> @builder enable
                      vectorization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Init Does */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              What{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-base dark:bg-neutral-800">
                vectorize init
              </code>{" "}
              Does
            </h3>
            <ol className="mt-4 space-y-3">
              {[
                "Checks for required API keys in environment",
                "Adds vectorization section to project.json",
                "Creates .vectorindex/ directory (gitignored)",
                "Scans codebase and creates initial index",
                "Installs git post-commit hook for automatic updates",
                "Optionally indexes database schema",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-medium text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                    {i + 1}
                  </span>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section
        id="configuration"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Configuration Reference
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The vectorization config lives in{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
              docs/project.json
            </code>
            :
          </p>

          {/* Config Code Block */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
            <pre className="bg-neutral-900 p-6 text-sm text-neutral-100 dark:bg-neutral-950">
              <code>{`{
  "vectorization": {
    "enabled": true,
    "storage": "local",
    "embeddingModel": "openai",
    "contextualRetrieval": "auto",
    
    "codebase": {
      "include": ["src/**", "lib/**", "docs/**"],
      "exclude": ["node_modules/**", "dist/**", "*.test.ts"],
      "chunkStrategy": "ast"
    },
    
    "database": {
      "enabled": true,
      "connection": "env:DATABASE_URL",
      "type": "postgres",
      "schema": {
        "include": ["public.*"],
        "exclude": ["public.migrations"]
      },
      "configTables": [
        {
          "table": "public.pricing_tiers",
          "description": "Subscription pricing and feature limits",
          "sampleRows": 10
        }
      ]
    },
    
    "search": {
      "hybridWeight": 0.7,
      "topK": 20
    },
    
    "refresh": {
      "onGitChange": true,
      "onSessionStart": true,
      "maxAge": "24h"
    }
  }
}`}</code>
            </pre>
          </div>

          {/* Config Options Table */}
          <div className="mt-10 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
              <thead className="bg-neutral-50 dark:bg-neutral-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Option
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                <tr>
                  <td className="whitespace-nowrap px-4 py-3">
                    <code className="text-sm">contextualRetrieval</code>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    auto
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    Enable contextual descriptions. &quot;auto&quot; = enabled if
                    ANTHROPIC_API_KEY set
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3">
                    <code className="text-sm">hybridWeight</code>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    0.7
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    Weight for semantic vs keyword search (0.7 = 70% semantic)
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3">
                    <code className="text-sm">topK</code>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    20
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    Number of results to return per query
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3">
                    <code className="text-sm">maxAge</code>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    24h
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    How old the index can be before prompting for refresh
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3">
                    <code className="text-sm">onGitChange</code>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    true
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    Auto-refresh index after git commits via post-commit hook
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CLI Commands */}
      <section
        id="commands"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            CLI Commands
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            The vectorize CLI provides commands to manage your index.
          </p>

          <div className="mt-10 space-y-6">
            {/* init command */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                vectorize init
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Initialize vectorization for the current project. Creates config,
                builds initial index, installs git hooks.
              </p>
              <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                <span className="text-green-400">$</span> vectorize init
              </div>
            </div>

            {/* refresh command */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                vectorize refresh
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Rebuild the vector index. Use{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
                  --full
                </code>{" "}
                for complete rebuild.
              </p>
              <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                <p>
                  <span className="text-green-400">$</span> vectorize refresh
                  <span className="text-neutral-500">
                    {" "}
                    # incremental (only changed files)
                  </span>
                </p>
                <p className="mt-1">
                  <span className="text-green-400">$</span> vectorize refresh
                  --full
                  <span className="text-neutral-500"> # full rebuild</span>
                </p>
              </div>
            </div>

            {/* search command */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                vectorize search &lt;query&gt;
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Test semantic search from the command line.
              </p>
              <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                <span className="text-green-400">$</span> vectorize search
                &quot;How does user authentication work?&quot;
              </div>
            </div>

            {/* status command */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                vectorize status
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Show index statistics, health, and storage usage.
              </p>
              <div className="mt-4 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
                <span className="text-green-400">$</span> vectorize status
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Integration */}
      <section
        id="agent-integration"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Agent Integration
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            When vectorization is enabled, agents automatically gain access to
            the{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
              semantic_search
            </code>{" "}
            tool.
          </p>

          {/* How Agents Use It */}
          <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">
              How Agents Use Semantic Search
            </h3>
            <div className="mt-4 space-y-4 text-sm text-blue-800 dark:text-blue-200">
              <p>
                Before implementing a feature, agents search for existing
                patterns:
              </p>
              <div className="rounded-lg bg-blue-100 p-4 font-mono text-xs dark:bg-blue-900">
                <p className="text-blue-600 dark:text-blue-400">
                  // @builder implementing auth feature
                </p>
                <p className="mt-2">
                  Before implementing, let me search for existing patterns:
                </p>
                <p className="mt-2 text-blue-900 dark:text-blue-100">
                  semantic_search(&quot;How is authentication implemented?&quot;)
                </p>
                <p className="mt-2 text-blue-700 dark:text-blue-300">
                  → Found middleware in src/auth/middleware.ts
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  → Found provider in src/auth/providers/supabase.ts
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  → Found architecture docs explaining the flow
                </p>
                <p className="mt-2 text-blue-600 dark:text-blue-400">
                  Now I can implement consistently with existing patterns.
                </p>
              </div>
            </div>
          </div>

          {/* Tool Signature */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Tool Signature
            </h3>
            <div className="mt-4 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
              <pre className="bg-neutral-900 p-6 text-sm text-neutral-100 dark:bg-neutral-950">
                <code>{`semantic_search({
  query: string,           // Natural language query
  filters?: {
    filePatterns?: string[], // e.g., ["src/auth/**", "*.ts"]
    languages?: string[],    // e.g., ["typescript", "python"]
    contentType?: "code" | "schema" | "config" | "docs"
  },
  topK?: number            // Override default (20)
})

// Returns
{
  results: [
    {
      content: string,      // Chunk content
      filePath: string,     // e.g., "src/auth/middleware.ts"
      lineRange: [45, 89],  // Start and end lines
      language: string,     // e.g., "typescript"
      score: number,        // Relevance score (0-1)
      type: "code" | "schema" | "config" | "docs"
    }
  ],
  indexAge: string,         // e.g., "2 hours ago"
  queryTime: number         // Milliseconds
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Database Indexing */}
      <section
        id="database-indexing"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Database Indexing
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            Vectorization can index your database schema and configuration data,
            giving agents full awareness of your data model and config-driven behaviors.
          </p>

          {/* Why Database Context Matters */}
          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
            <h3 className="flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-100">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              Why This Matters
            </h3>
            <p className="mt-3 text-sm text-amber-800 dark:text-amber-200">
              Many applications have <strong>configuration-driven behavior</strong> where
              rendering, logic, and features are determined by database values, not just code.
              Without access to this data, agents can only see the &quot;how&quot; (code) but not the
              &quot;what&quot; (the actual configurations that drive behavior).
            </p>
            <p className="mt-3 text-sm text-amber-700 dark:text-amber-300">
              By indexing config tables, agents understand not just your schema structure,
              but the actual settings, rules, and configurations that make your application
              work the way it does.
            </p>
          </div>

          {/* What Gets Indexed */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                Schema Extraction
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                The database structure itself — what tables exist and how they relate.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Table names and descriptions
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Column names, types, constraints
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Foreign key relationships
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Indexes and table comments
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100">
                Config Data Extraction
              </h3>
              <p className="mt-2 text-sm text-purple-700 dark:text-purple-300">
                Actual row data from configuration tables — the values that drive behavior.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-purple-700 dark:text-purple-300">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Sample rows from designated tables
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Table descriptions for context
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Configurable row limits per table
                </li>
              </ul>
            </div>
          </div>

          {/* Config-Driven Behavior Explanation */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Understanding Config-Driven Behavior
            </h3>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              In many applications, code is generic and behavior is determined by database
              configurations. Agents need access to this data to understand how your
              application actually works.
            </p>

            {/* Examples Grid */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Feature Flags
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  feature_flags
                </p>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Which features are enabled, for which users/tiers, rollout percentages
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Pricing & Limits
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  pricing_tiers, subscription_limits
                </p>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Plan names, prices, quotas, feature access by tier
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Permissions
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  roles, permissions, role_permissions
                </p>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  What each role can do, permission hierarchies
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Dynamic Forms
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  form_definitions, field_configs
                </p>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Form fields, validation rules, conditional logic stored in DB
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Workflows
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  workflow_steps, state_machines
                </p>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  State transitions, approval chains, automation rules
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  UI Configuration
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  menu_items, dashboard_widgets
                </p>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Navigation structure, layout configs, theme settings
                </p>
              </div>
            </div>
          </div>

          {/* Code vs Data Example */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Example: Code Alone Isn&apos;t Enough
            </h3>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {/* Code side */}
              <div>
                <p className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  The code is generic:
                </p>
                <div className="overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm dark:bg-neutral-950">
                  <pre className="text-neutral-100">
                    <code>{`function canAccessFeature(user, featureKey) {
  const tier = user.subscriptionTier;
  const tierConfig = await db.pricing_tiers
    .findOne({ name: tier });
  
  return tierConfig.features
    .includes(featureKey);
}`}</code>
                  </pre>
                </div>
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                  Without config data, an agent doesn&apos;t know what tiers exist or what
                  features each tier includes.
                </p>
              </div>

              {/* Data side */}
              <div>
                <p className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  The config data explains behavior:
                </p>
                <div className="overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm dark:bg-neutral-950">
                  <pre className="text-neutral-100">
                    <code>{`-- pricing_tiers (indexed)
| name       | features                    |
|------------|----------------------------|
| free       | ["basic_search"]           |
| pro        | ["basic_search", "api",    |
|            |  "export", "webhooks"]     |
| enterprise | ["*"]                       |`}</code>
                  </pre>
                </div>
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                  Now an agent knows: &quot;API access requires Pro tier, Enterprise gets
                  everything.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Configuration Example */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Configuring Config Tables
            </h3>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              Designate which tables contain configuration data in your{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">
                project.json
              </code>
              :
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
              <pre className="bg-neutral-900 p-6 text-sm text-neutral-100 dark:bg-neutral-950">
                <code>{`{
  "vectorization": {
    "database": {
      "enabled": true,
      "configTables": [
        {
          "table": "public.pricing_tiers",
          "description": "Subscription pricing and feature limits",
          "sampleRows": 10
        },
        {
          "table": "public.feature_flags",
          "description": "Feature toggles and rollout config",
          "sampleRows": 50
        },
        {
          "table": "public.roles",
          "description": "User roles and permission sets",
          "sampleRows": 20
        },
        {
          "table": "public.workflow_states",
          "description": "State machine definitions for approval flows",
          "sampleRows": 30
        }
      ]
    }
  }
}`}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              Each config table is indexed with its description and sample rows, making
              the data searchable alongside your code.
            </p>
          </div>

          {/* Agent Query Examples */}
          <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">
              How Agents Use Config Data
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  Agent query:
                </p>
                <p className="mt-1 text-sm font-medium text-blue-900 dark:text-blue-100">
                  &quot;What features are available on the Pro plan?&quot;
                </p>
                <p className="mt-2 text-xs text-blue-700 dark:text-blue-300">
                  → Returns pricing_tiers row for Pro with features array
                </p>
              </div>

              <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  Agent query:
                </p>
                <p className="mt-1 text-sm font-medium text-blue-900 dark:text-blue-100">
                  &quot;How does the approval workflow work?&quot;
                </p>
                <p className="mt-2 text-xs text-blue-700 dark:text-blue-300">
                  → Returns workflow_states showing state transitions + code that implements them
                </p>
              </div>

              <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  Agent query:
                </p>
                <p className="mt-1 text-sm font-medium text-blue-900 dark:text-blue-100">
                  &quot;What permissions does the editor role have?&quot;
                </p>
                <p className="mt-2 text-xs text-blue-700 dark:text-blue-300">
                  → Returns roles and role_permissions data for &quot;editor&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimates */}
      <section
        id="costs"
        className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Cost Estimates
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg dark:text-neutral-400">
            Initial indexing costs are one-time. Incremental updates cost ~1% of
            full index per commit.
          </p>

          {/* Cost Table */}
          <div className="mt-10 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
              <thead className="bg-neutral-50 dark:bg-neutral-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Codebase Size
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Files
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Chunks
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Embedding
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Contextual
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-700 dark:bg-neutral-900">
                <tr>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Small
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    500
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    3k
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    ~$0.01
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    ~$1.50
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-green-600 dark:text-green-400">
                    ~$1.51
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Medium
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    2k
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    12k
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    ~$0.02
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    ~$6.00
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-green-600 dark:text-green-400">
                    ~$6.02
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Large
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    10k
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    60k
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    ~$0.10
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                    ~$30.00
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-amber-600 dark:text-amber-400">
                    ~$30.10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cost Reduction Tips */}
          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
            <h3 className="font-semibold text-green-900 dark:text-green-100">
              Reduce Costs
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                Disable Contextual Retrieval:{" "}
                <code className="rounded bg-green-100 px-1 py-0.5 text-xs dark:bg-green-900">
                  contextualRetrieval: &quot;never&quot;
                </code>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                Reduce include patterns to essential directories only
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                Run{" "}
                <code className="rounded bg-green-100 px-1 py-0.5 text-xs dark:bg-green-900">
                  vectorize init --dry-run
                </code>{" "}
                to see estimates before committing
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-50">
            Related
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/reference/skills/vectorize"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
              Vectorize Skill Reference
            </Link>
            <Link
              href="/concepts/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
            >
              Project Configuration
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
