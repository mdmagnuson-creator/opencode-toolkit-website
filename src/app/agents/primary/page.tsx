'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AgentsPrimaryRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/reference/agents/primary');
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-400">Redirecting...</p>
    </div>
  );
}
