'use client';

import { Suspense } from 'react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function SkillsRedirectInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const params = searchParams.toString();
    const newUrl = params ? `/reference/skills?${params}` : '/reference/skills';
    router.replace(newUrl);
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-400">Redirecting...</p>
    </div>
  );
}

export default function SkillsRedirect() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-neutral-600 dark:text-neutral-400">Redirecting...</p>
      </div>
    }>
      <SkillsRedirectInner />
    </Suspense>
  );
}
