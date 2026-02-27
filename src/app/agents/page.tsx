'use client';

import { Suspense } from 'react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function AgentsRedirectInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const params = searchParams.toString();
    const newUrl = params ? `/reference/agents?${params}` : '/reference/agents';
    router.replace(newUrl);
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-400">Redirecting...</p>
    </div>
  );
}

export default function AgentsRedirect() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-neutral-600 dark:text-neutral-400">Redirecting...</p>
      </div>
    }>
      <AgentsRedirectInner />
    </Suspense>
  );
}
