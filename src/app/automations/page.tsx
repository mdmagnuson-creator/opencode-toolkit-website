'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AutomationsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/reference/automations');
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-400">Redirecting...</p>
    </div>
  );
}
