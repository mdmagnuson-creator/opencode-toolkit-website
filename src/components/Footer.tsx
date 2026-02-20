import Link from "next/link";

const footerLinks = {
  learn: {
    title: "Learn",
    links: [
      { name: "Getting Started", href: "/getting-started" },
      { name: "Concepts", href: "/concepts" },
      { name: "The Workflow Loop", href: "/concepts/workflow" },
    ],
  },
  reference: {
    title: "Reference",
    links: [
      { name: "Agents", href: "/agents" },
      { name: "Skills", href: "/skills" },
      { name: "Scaffolds", href: "/scaffolds" },
      { name: "Agent Templates", href: "/agent-templates" },
      { name: "MCP Servers", href: "/mcp" },
      { name: "Automations", href: "/automations" },
    ],
  },
  concepts: {
    title: "Concepts",
    links: [
      { name: "Understanding Agents", href: "/concepts/agents" },
      { name: "Understanding Skills", href: "/concepts/skills" },
      { name: "Project Setup", href: "/concepts/projects" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Changelog", href: "/changelog" },
      { name: "GitHub", href: "https://github.com/opencode-ai/ai-toolkit" },
      { name: "OpenCode", href: "https://opencode.ai" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                      >
                        {link.name}
                        <span className="ml-1 text-xs">↗</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-neutral-900 dark:text-white">
              AI Toolkit
            </span>
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              for opencode
            </span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Agentic development made simple
          </p>
        </div>
      </div>
    </footer>
  );
}
