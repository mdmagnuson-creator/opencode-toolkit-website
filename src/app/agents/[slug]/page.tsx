import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { manifest } from "@/data";
import type { Agent } from "@/data/types";
import { AgentContent } from "./AgentContent";
import { AgentAvatar } from "@/components/AgentAvatar";
import { resolveContent } from "@/lib/content-resolver";
import { DownloadMarkdownButton } from "@/components/DownloadMarkdownButton";

const CATEGORY_LABELS: Record<Agent["category"], string> = {
  critics: "Critics",
  developers: "Developers",
  testers: "Testers",
  orchestrators: "Orchestrators",
  utilities: "Utilities",
};

const CATEGORY_COLORS: Record<Agent["category"], { bg: string; text: string }> = {
  critics: {
    bg: "bg-amber-100 dark:bg-amber-950",
    text: "text-amber-800 dark:text-amber-200",
  },
  developers: {
    bg: "bg-blue-100 dark:bg-blue-950",
    text: "text-blue-800 dark:text-blue-200",
  },
  testers: {
    bg: "bg-green-100 dark:bg-green-950",
    text: "text-green-800 dark:text-green-200",
  },
  orchestrators: {
    bg: "bg-purple-100 dark:bg-purple-950",
    text: "text-purple-800 dark:text-purple-200",
  },
  utilities: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
  },
};

// Generate static params for all agents
export function generateStaticParams() {
  return manifest.agents.map((agent) => ({
    slug: agent.slug,
  }));
}

// Generate metadata for each agent page
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to await the params in Next.js 15
  return params.then(({ slug }) => {
    const agent = manifest.agents.find((a) => a.slug === slug);
    if (!agent) {
      return { title: "Agent Not Found" };
    }
    return {
      title: `${agent.name} | AI Toolkit`,
      description: agent.description,
    };
  });
}

function getRelatedAgents(agent: Agent): Agent[] {
  // Get other agents in the same category, excluding current agent
  return manifest.agents
    .filter((a) => a.category === agent.category && a.slug !== agent.slug)
    .slice(0, 3);
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = manifest.agents.find((a) => a.slug === slug);

  if (!agent) {
    notFound();
  }

  const relatedAgents = getRelatedAgents(agent);
  const categoryColors = CATEGORY_COLORS[agent.category];

  // Resolve content from manifest, local toolkit, or GitHub
  const resolvedContent = await resolveContent("agent", slug, agent.content);
  const hasAgentContent = resolvedContent.trim().length > 0;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-12 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <Breadcrumbs />
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            {/* Agent Avatar */}
            <AgentAvatar agent={agent} size="xl" className="shrink-0" />

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
                  {agent.name}
                </h1>
                <div className="flex items-center gap-2 pt-2">
                  {agent.mode === "primary" && (
                    <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-800 dark:bg-violet-950 dark:text-violet-200">
                      Primary Agent
                    </span>
                  )}
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${categoryColors.bg} ${categoryColors.text}`}
                  >
                    {CATEGORY_LABELS[agent.category]}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-lg leading-7 text-neutral-700 dark:text-neutral-400">
                {agent.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Content */}
      {hasAgentContent && (
        <section className="border-t border-neutral-200 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 dark:border-neutral-800">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex justify-end">
              <DownloadMarkdownButton
                content={resolvedContent}
                filename={`${slug}.md`}
              />
            </div>
            <AgentContent content={resolvedContent} />
          </div>
        </section>
      )}

      {/* Related Agents */}
      {relatedAgents.length > 0 && (
        <section className="border-t border-neutral-200 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 dark:border-neutral-800">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Related {CATEGORY_LABELS[agent.category]}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedAgents.map((related) => (
                <Link
                  key={related.slug}
                  href={`/agents/${related.slug}`}
                  className="group block rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
                >
                  <h3 className="font-semibold text-neutral-900 group-hover:text-violet-600 dark:text-neutral-50 dark:group-hover:text-violet-400">
                    {related.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
