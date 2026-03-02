import { redirect, notFound } from 'next/navigation';
import { manifest } from '@/data';

// Generate static params for all agents for static export
export async function generateStaticParams() {
  return manifest.agents.map((agent) => ({
    slug: agent.slug,
  }));
}

// Server-side redirect to new nested reference URL
export default async function AgentSlugRedirect({
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
