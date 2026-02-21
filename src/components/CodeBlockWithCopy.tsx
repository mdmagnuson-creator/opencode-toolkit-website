'use client';

import { CopyButton } from './CopyButton';

interface CodeBlockWithCopyProps {
  code: string;
  className?: string;
}

export function CodeBlockWithCopy({ code, className = '' }: CodeBlockWithCopyProps) {
  return (
    <div className={`rounded-lg bg-neutral-900 dark:bg-neutral-800 ${className}`}>
      <div className="flex items-start gap-2 p-3">
        <pre className="min-w-0 flex-1 overflow-x-auto text-xs leading-relaxed text-neutral-100 sm:text-sm">
          <code className="block whitespace-pre-wrap break-all sm:whitespace-pre sm:break-normal">{code}</code>
        </pre>
        <CopyButton text={code} className="shrink-0" />
      </div>
    </div>
  );
}
