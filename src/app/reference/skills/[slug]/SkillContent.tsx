"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { stripFrontmatter } from "@/lib/markdown";

interface SkillContentProps {
  content: string;
}

export function SkillContent({ content }: SkillContentProps) {
  const renderedContent = stripFrontmatter(content);

  return (
    <div className="prose prose-neutral prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:leading-8 prose-ul:my-4 prose-ol:my-4 prose-li:my-2 prose-li:leading-7 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100 prose-code:rounded prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-neutral-800 prose-pre:bg-neutral-900 prose-pre:px-5 prose-pre:py-4 prose-pre:border prose-pre:border-neutral-200 dark:prose-pre:border-neutral-700 prose-a:text-violet-600 dark:prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{renderedContent}</ReactMarkdown>
    </div>
  );
}
