import { Suspense } from "react";
import { SkillsPageContent } from "./SkillsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills Reference | yo, go",
  description: "Browse all 44 skills in yo, go. Authentication, testing, PRD workflows, screenshots, and more. Skills extend agent capabilities with specialized knowledge.",
  openGraph: {
    title: "Skills Reference | yo, go",
    description: "Browse all 44 skills in yo, go. Authentication, testing, PRD workflows, screenshots, and more. Skills extend agent capabilities with specialized knowledge.",
    images: ["/og/reference-skills.png"],
  },
};

export default function SkillsPage() {
  return (
    <Suspense fallback={<SkillsPageSkeleton />}>
      <SkillsPageContent />
    </Suspense>
  );
}

function SkillsPageSkeleton() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="h-5 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <div className="h-12 w-48 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mt-4 h-6 w-96 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </section>

      {/* Filters skeleton */}
      <section className="border-t border-neutral-200 px-6 py-6 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-4">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-10 w-40 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      </section>

      {/* Skills grid skeleton */}
      <section className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-32 animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
