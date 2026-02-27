import { redirect } from 'next/navigation';
import { manifest } from '@/data';

// Generate static params for all agents for static export
export async function generateStaticParams() {
  return manifest.agents.map((agent) => ({
    slug: agent.slug,
  }));
}

// Server-side redirect to new reference URL
export default async function AgentSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/reference/agents/${slug}`);
}
