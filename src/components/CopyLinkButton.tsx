"use client";

import { useState, useCallback } from "react";
import { LinkIcon, CheckIcon } from "@heroicons/react/24/outline";

interface CopyLinkButtonProps {
  className?: string;
}

export function CopyLinkButton({ className = "" }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: prompt user to copy manually
      window.prompt("Copy this link:", url);
    }
  }, []);

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:ring-offset-neutral-900 ${className}`}
      aria-label={copied ? "Copied!" : "Copy link to clipboard"}
      title={copied ? "Copied!" : "Copy link"}
    >
      {copied ? (
        <>
          <CheckIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <LinkIcon className="h-4 w-4" />
          <span>Copy link</span>
        </>
      )}
    </button>
  );
}
