import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "MCP Servers | AI Toolkit",
  description: "Model Context Protocol (MCP) servers extend opencode with external tools like browser automation, documentation lookup, and more.",
};

function CodeBlock({ code, language = "json" }: { code: string; language?: string }) {
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

function SubHeading({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h3 id={id} className="group mb-3 scroll-mt-24 text-xl font-medium text-neutral-800 dark:text-neutral-200">
      <a href={`#${id}`} className="flex items-center gap-2">
        {children}
        <span className="text-neutral-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-neutral-600">
          #
        </span>
      </a>
    </h3>
  );
}

function FeatureCard({
  title,
  description,
  type,
  example,
}: {
  title: string;
  description: string;
  type: "local" | "remote";
  example: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {title}
        </h3>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
          type === "local"
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
        }`}>
          {type}
        </span>
      </div>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">{description}</p>
      <CodeBlock code={example} />
    </div>
  );
}

export default function McpPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
      <Breadcrumbs />

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white">
          MCP Servers
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Model Context Protocol (MCP) servers extend opencode with external tools
          for browser automation, documentation lookup, database access, and more.
        </p>
      </div>

      {/* What is MCP */}
      <section className="mb-12">
        <SectionHeading id="what-is-mcp">What is MCP?</SectionHeading>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            The <strong>Model Context Protocol (MCP)</strong> is an open standard for connecting
            AI models to external tools and data sources. Created by Anthropic, it provides a
            standardized way for AI assistants to access capabilities like:
          </p>
          <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span><strong>Browser automation</strong> - Control browsers for testing, screenshots, and web scraping</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span><strong>Documentation lookup</strong> - Access up-to-date library docs and code examples</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span><strong>Database access</strong> - Query and modify databases safely</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span><strong>File system operations</strong> - Read and write files in sandboxed environments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span><strong>API integrations</strong> - Connect to third-party services and APIs</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Server Types */}
      <section className="mb-12">
        <SectionHeading id="server-types">Server Types</SectionHeading>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          opencode supports two types of MCP servers:
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Local Servers</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              Run as a local process on your machine. You provide a command and opencode
              starts the server automatically. Good for tools that need access to local
              files or system resources.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Remote Servers</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              Connect to a hosted MCP server via URL. No local installation needed.
              The server may require OAuth authentication for secure access.
            </p>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="mb-12">
        <SectionHeading id="configuration">Configuration</SectionHeading>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          MCP servers are configured in your <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">~/.config/opencode/opencode.json</code> file
          under the <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">mcp</code> key.
        </p>

        <SubHeading id="local-server-config">Local Server Configuration</SubHeading>
        <CodeBlock code={`{
  "mcp": {
    "playwright": {
      "type": "local",
      "command": [
        "npx",
        "@playwright/mcp@latest",
        "--headless",
        "--caps=vision,pdf,test"
      ],
      "env": {
        "DEBUG": "true"
      },
      "enabled": true,
      "timeout": 10000
    }
  }
}`} />
        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p><strong>type</strong>: Must be <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">&quot;local&quot;</code> for local servers</p>
          <p><strong>command</strong>: Array of command and arguments to start the server</p>
          <p><strong>env</strong>: Optional environment variables to set</p>
          <p><strong>enabled</strong>: Set to <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">true</code> to auto-start on launch</p>
          <p><strong>timeout</strong>: Request timeout in milliseconds (default: 5000)</p>
        </div>

        <SubHeading id="remote-server-config">Remote Server Configuration</SubHeading>
        <CodeBlock code={`{
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp",
      "enabled": true,
      "oauth": {
        "clientId": "your-client-id",
        "scopes": ["read", "write"]
      }
    }
  }
}`} />
        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p><strong>type</strong>: Must be <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">&quot;remote&quot;</code> for remote servers</p>
          <p><strong>url</strong>: The MCP server endpoint URL</p>
          <p><strong>oauth</strong>: Optional OAuth configuration (set to <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">false</code> to disable auto-detection)</p>
        </div>
      </section>

      {/* Popular MCP Servers */}
      <section className="mb-12">
        <SectionHeading id="popular-servers">Popular MCP Servers</SectionHeading>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Here are some commonly used MCP servers that work well with the AI Toolkit:
        </p>

        <div className="space-y-6">
          <FeatureCard
            title="Playwright"
            description="Browser automation for testing, screenshots, and web scraping. Supports vision capabilities for analyzing page content."
            type="local"
            example={`"playwright": {
  "type": "local",
  "command": [
    "npx",
    "@playwright/mcp@latest",
    "--headless",
    "--caps=vision,pdf,test,tracing"
  ],
  "enabled": true
}`}
          />

          <FeatureCard
            title="Context7"
            description="Up-to-date documentation lookup for libraries and frameworks. Provides code examples and API references."
            type="remote"
            example={`"context7": {
  "type": "remote",
  "url": "https://mcp.context7.com/mcp",
  "enabled": true
}`}
          />

          <FeatureCard
            title="GitHub"
            description="GitHub integration for repository management, issues, pull requests, and code search."
            type="remote"
            example={`"github": {
  "type": "remote",
  "url": "https://api.github.com/mcp",
  "oauth": {
    "clientId": "your-github-app-id",
    "scopes": ["repo", "read:org"]
  },
  "enabled": true
}`}
          />
        </div>
      </section>

      {/* OAuth Authentication */}
      <section className="mb-12">
        <SectionHeading id="oauth">OAuth Authentication</SectionHeading>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          Some remote MCP servers require OAuth authentication. opencode handles the OAuth
          flow automatically when configured.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-900/20">
          <div className="flex gap-3">
            <svg className="h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-medium text-amber-900 dark:text-amber-300">OAuth Flow</h3>
              <p className="mt-1 text-sm text-amber-800 dark:text-amber-400">
                When you first use an OAuth-protected MCP server, opencode will open a browser
                window for authentication. After authorizing, the credentials are stored securely
                and reused for future sessions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
          <p>To configure OAuth:</p>
          <ol className="ml-4 list-decimal space-y-2 pl-2">
            <li>Add the <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">oauth</code> configuration to your server entry</li>
            <li>Specify the <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">clientId</code> from your OAuth application</li>
            <li>List the required <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">scopes</code> for the server</li>
            <li>Run opencode - it will prompt for authentication on first use</li>
          </ol>
        </div>
      </section>

      {/* Using MCP Tools */}
      <section className="mb-12">
        <SectionHeading id="using-tools">Using MCP Tools</SectionHeading>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          Once an MCP server is connected, its tools become available to agents automatically.
          Agents can discover and use these tools based on their capabilities.
        </p>

        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
          <h3 className="mb-3 font-medium text-neutral-900 dark:text-white">Example: Using Playwright</h3>
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            With Playwright MCP enabled, agents can take screenshots, interact with pages, and run E2E tests:
          </p>
          <div className="rounded-lg bg-white p-4 dark:bg-neutral-900">
            <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
              <span className="text-blue-600 dark:text-blue-400">User:</span> Take a screenshot of https://example.com
            </p>
            <p className="mt-2 font-mono text-sm text-neutral-800 dark:text-neutral-200">
              <span className="text-green-600 dark:text-green-400">Agent:</span> I&apos;ll use Playwright to capture that screenshot...
            </p>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-12">
        <SectionHeading id="troubleshooting">Troubleshooting</SectionHeading>
        
        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-medium text-neutral-900 dark:text-white">Server not connecting</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Check that <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">enabled: true</code> is set
              and the command/URL is correct. For local servers, ensure the required packages are installed.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-medium text-neutral-900 dark:text-white">Timeout errors</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Increase the <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">timeout</code> value
              in your configuration. Default is 5000ms (5 seconds).
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h3 className="font-medium text-neutral-900 dark:text-white">OAuth issues</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Clear stored credentials and re-authenticate. Check that your OAuth application
              has the correct redirect URLs configured.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <a href="/scaffolds" className="group flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
          <svg className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Scaffolds</span>
        </a>
        <a href="/automations" className="group flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
          <span>Automations</span>
          <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </main>
  );
}
