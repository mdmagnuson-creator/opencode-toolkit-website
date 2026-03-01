'use client';

import { ReactNode } from 'react';

interface TerminalMockupProps {
  children: ReactNode;
  title?: string;
}

export function TerminalMockup({ children, title = 'Terminal' }: TerminalMockupProps) {
  return (
    <div className="rounded-lg bg-neutral-900 dark:bg-neutral-800 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-neutral-400">{title}</span>
      </div>
      <div className="p-4">
        <pre className="text-sm text-neutral-100 overflow-x-auto">{children}</pre>
      </div>
    </div>
  );
}
