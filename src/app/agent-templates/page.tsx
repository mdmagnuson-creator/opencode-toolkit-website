import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { manifest } from "@/data";

export const metadata: Metadata = {
  title: "Agent Templates | yo, go",
  description: "Create project-specific agents from templates for backend, frontend, testing, and more.",
};

function CodeBlock({ code, language = "markdown" }: { code: string; language?: string }) {
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

// Group templates by category from manifest data
function groupTemplatesByCategory(templates: typeof manifest.agentTemplates) {
  const categories: Record<string, typeof templates> = {};

  for (const template of templates) {
    const cat = template.category || "other";
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(template);
  }

  return categories;
}

// Category display names and descriptions
const categoryInfo: Record<string, { title: string; description: string }> = {
  backend: { title: "Backend", description: "Server-side implementation agents for various frameworks" },
  frontend: { title: "Frontend", description: "UI implementation agents for component libraries" },
  testing: { title: "Testing", description: "Test implementation agents for different frameworks" },
  critics: { title: "Critics", description: "Code review agents for specific languages" },
  styling: { title: "Styling", description: "UI styling agents for CSS frameworks" },
};

// Render categories in this order
const categoryOrder = ["backend", "frontend", "testing", "critics", "styling"];

function TemplateCard({ template }: { template: typeof manifest.agentTemplates[0] }) {
  // Filter empty strings from appliesTo
  const validAppliesTo = template.appliesTo.filter(Boolean);

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-start justify-between">
        <h4 className="font-medium text-neutral-900 dark:text-white">{template.name}</h4>
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
          {template.category}/{template.slug}.md
        </code>
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{template.description}</p>
      {validAppliesTo.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-neutral-500 dark:text-neutral-500">Applies to:</span>
          {validAppliesTo.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
        <span>Generates:</span>
        <code className="rounded bg-green-100 px-1.5 py-0.5 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          {template.generates}
        </code>
      </div>
    </div>
  );
}

export default function AgentTemplatesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
      <Breadcrumbs />

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white">
          Agent Templates
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Templates for generating project-specific agents that understand your stack,
          conventions, and patterns.
        </p>
      </div>

      {/* What are Agent Templates */}
      <section className="mb-12">
        <SectionHeading id="overview">What are Agent Templates?</SectionHeading>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-neutral-700 dark:text-neutral-300">
            Agent templates are parameterized agent definitions that get customized for your
            specific project. Instead of using generic agents, templates generate
            <strong> project-specific agents</strong> that:
          </p>
          <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>Understand your exact framework and libraries (e.g., Chi vs Gin, React vs Vue)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>Follow your project&apos;s conventions from <code>docs/CONVENTIONS.md</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>Know your directory structure and file organization</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>Use your database, testing, and deployment patterns</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How Templates Work */}
      <section className="mb-12">
        <SectionHeading id="how-it-works">How Templates Work</SectionHeading>
        
        <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-neutral-900 dark:text-white">Template Structure</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Templates live in <code className="rounded bg-neutral-200 px-1 dark:bg-neutral-800">~/.config/opencode/agent-templates/</code> organized by category.
                Each template has frontmatter metadata and a parameterized agent definition.
              </p>
            </div>
          </div>
        </div>

        <h3 className="mb-3 text-lg font-medium text-neutral-800 dark:text-neutral-200">Template Frontmatter</h3>
        <CodeBlock language="yaml" code={`---
template: backend/go-chi
description: Go Chi router web service patterns
applies_to:
  frameworks: [go-chi, chi]
  language: go
generates: backend-dev.md
---`} />
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          The frontmatter declares when the template applies and what agent file it generates.
        </p>

        <h3 className="mb-3 mt-8 text-lg font-medium text-neutral-800 dark:text-neutral-200">Template Variables</h3>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          Templates use Handlebars-style placeholders that get filled in during generation:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="py-2 pr-4 text-left font-medium text-neutral-900 dark:text-white">Variable</th>
                <th className="py-2 text-left font-medium text-neutral-900 dark:text-white">Source</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-neutral-300">
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4"><code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">{`{{AGENT_NAME}}`}</code></td>
                <td className="py-2">Agent file name (e.g., &quot;Backend Dev&quot;)</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4"><code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">{`{{PROJECT_NAME}}`}</code></td>
                <td className="py-2">From <code>project.json</code></td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4"><code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">{`{{PROJECT.commands.test}}`}</code></td>
                <td className="py-2">Project-specific test command</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4"><code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">{`{{CONVENTIONS.errorHandling}}`}</code></td>
                <td className="py-2">From <code>CONVENTIONS.md</code></td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">{`{{#if PROJECT.database.type == 'postgres'}}`}</code></td>
                <td className="py-2">Conditional sections based on project config</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Template to Agent Example */}
      <section className="mb-12">
        <SectionHeading id="transformation">Template → Agent Transformation</SectionHeading>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          When a project is bootstrapped, templates matching the project&apos;s stack are rendered
          into project-specific agents stored in <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">docs/agents/</code>.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">Template (generic)</h4>
            <CodeBlock language="markdown" code={`# {{AGENT_NAME}}: Go Chi Agent

You are an agent for **{{PROJECT_NAME}}**.

## Commands

- Test: \`{{PROJECT.commands.test || 'go test ./...'}}\`
- Lint: \`{{PROJECT.commands.lint || 'golangci-lint run'}}\`

{{#if CONVENTIONS.errorHandling}}
## Error Handling
Follow patterns from CONVENTIONS.md.
{{else}}
## Error Handling
Use standard Go error wrapping.
{{/if}}`} />
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">Generated Agent (specific)</h4>
            <CodeBlock language="markdown" code={`# Backend Dev: Go Chi Agent

You are an agent for **MyApp**.

## Commands

- Test: \`make test\`
- Lint: \`make lint\`

## Error Handling
Follow patterns from CONVENTIONS.md.`} />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20">
          <div className="flex gap-3">
            <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm text-green-800 dark:text-green-400">
              The generated agent knows your project name, uses your Makefile commands, and references
              your conventions - no generic guessing.
            </p>
          </div>
        </div>
      </section>

      {/* When to Use Templates */}
      <section className="mb-12">
        <SectionHeading id="when-to-use">When to Use Templates</SectionHeading>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20">
            <h3 className="flex items-center gap-2 font-medium text-green-900 dark:text-green-300">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Use Templates When:
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-green-800 dark:text-green-400">
              <li>• Starting a new project with known stack</li>
              <li>• Your framework has specific patterns</li>
              <li>• You have strong conventions to enforce</li>
              <li>• Multiple projects share similar stacks</li>
            </ul>
          </div>
          
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-800/50">
            <h3 className="flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-200">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Use Generic Agents When:
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Exploring or prototyping quickly</li>
              <li>• Working with unusual/custom stacks</li>
              <li>• Project is small or single-use</li>
              <li>• No strong conventions needed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Available Templates */}
      <section className="mb-12">
        <SectionHeading id="available-templates">
          Available Templates{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            ({manifest.counts.agentTemplates})
          </span>
        </SectionHeading>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Templates are organized by category in <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">~/.config/opencode/agent-templates/</code>:
        </p>

        <div className="space-y-8">
          {(() => {
            const groupedTemplates = groupTemplatesByCategory(manifest.agentTemplates);
            return categoryOrder.map((categoryKey) => {
              const templates = groupedTemplates[categoryKey];
              if (!templates || templates.length === 0) return null;
              const info = categoryInfo[categoryKey] || { title: categoryKey, description: "" };

              return (
                <div key={categoryKey}>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                    {info.title}
                  </h3>
                  <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                    {info.description}
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {templates.map((template) => (
                      <TemplateCard key={template.slug} template={template} />
                    ))}
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </section>

      {/* Creating Custom Templates */}
      <section className="mb-12">
        <SectionHeading id="custom-templates">Creating Custom Templates</SectionHeading>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          You can create custom templates for your organization&apos;s specific patterns:
        </p>

        <ol className="space-y-4 text-neutral-700 dark:text-neutral-300">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">1</span>
            <div>
              <strong>Create the template file</strong>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Add a new <code>.md</code> file in the appropriate category folder under <code>agent-templates/</code>
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">2</span>
            <div>
              <strong>Add frontmatter</strong>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Define <code>template</code>, <code>applies_to</code>, and <code>generates</code> fields
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">3</span>
            <div>
              <strong>Write the agent instructions</strong>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Use template variables to reference project-specific values
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">4</span>
            <div>
              <strong>Bootstrap a project to test</strong>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Run <code>opencode bootstrap</code> and verify the generated agent
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <a href="/automations" className="group flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
          <svg className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Automations</span>
        </a>
        <a href="/changelog" className="group flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
          <span>Changelog</span>
          <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </main>
  );
}
