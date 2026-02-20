"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure CSS is ready, then trigger animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    // Delayed fade in for stats
    const statsTimer = setTimeout(() => setStatsVisible(true), 600);
    return () => {
      clearTimeout(timer);
      clearTimeout(statsTimer);
    };
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-24 sm:px-8 lg:px-12">
      <div
        className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            Open Source
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-50">
          An Agent System for{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            opencode
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-800 sm:text-xl dark:text-neutral-300">
          57 specialized agents working together to build software.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {/* Primary CTA */}
          <a
            href="#getting-started"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-neutral-900 px-8 text-base font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 sm:w-auto dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-offset-neutral-900"
          >
            Get Started
          </a>

          {/* Secondary CTA */}
          <a
            href="#"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-8 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 sm:w-auto dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:ring-offset-neutral-900"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-10 sm:gap-8 dark:border-neutral-800 transition-all duration-700 ease-out ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-neutral-50">
              57
            </p>
            <p className="mt-1 text-xs text-neutral-800 sm:text-sm dark:text-neutral-400">
              Agents
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-neutral-50">
              16
            </p>
            <p className="mt-1 text-xs text-neutral-800 sm:text-sm dark:text-neutral-400">
              Skills
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-neutral-50">
              4
            </p>
            <p className="mt-1 text-xs text-neutral-800 sm:text-sm dark:text-neutral-400">
              Primary Agents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
