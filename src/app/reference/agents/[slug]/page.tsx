import { redirect, notFound } from "next/navigation";
import { manifest } from "@/data";

/**
 * Legacy agent route - redirects to new nested URL structure.
 * 
 * Old: /reference/agents/builder
 * New: /reference/agents/primary/builder (for primary agents)
 *      /reference/agents/sub/critic (for sub-agents)
 */

// Generate static params for all agents (for redirect handling)
export function generateStaticParams() {
  return manifest.agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export default async function LegacyAgentRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = manifest.agents.find((a) => a.slug === slug);

  if (!agent) {
    notFound();
  }

  // Redirect to the new nested URL structure
  const category = agent.mode === "primary" ? "primary" : "sub";
  redirect(`/reference/agents/${category}/${slug}`);
}
