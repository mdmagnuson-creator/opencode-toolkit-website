import { redirect } from 'next/navigation';
import { manifest } from '@/data';

// Generate static params for all skills for static export
export async function generateStaticParams() {
  return manifest.skills.map((skill) => ({
    slug: skill.slug,
  }));
}

// Server-side redirect to new reference URL
export default async function SkillSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/reference/skills/${slug}`);
}
