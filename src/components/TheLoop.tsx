"use client";

import { useRef, useEffect, useState } from "react";

interface Step {
  id: string;
  label: string;
  icon: string;
  description: string;
  isLoop?: boolean;
}

interface Phase {
  id: string;
  name: string;
  agent: string;
  agentIcon: string;
  color: string;
  darkColor: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    id: "plan",
    name: "Plan",
    agent: "@project-planner",
    agentIcon: "P",
    color: "bg-blue-500",
    darkColor: "dark:bg-blue-600",
    steps: [
      {
        id: "bootstrap",
        label: "Bootstrap",
        icon: "🚀",
        description: "New project or existing codebase",
      },
      {
        id: "draft",
        label: "Draft PRD",
        icon: "📝",
        description: "Describe the feature",
      },
      {
        id: "qa",
        label: "Q&A",
        icon: "💬",
        description: "Clarify with lettered options",
      },
      {
        id: "ready",
        label: "Ready",
        icon: "✅",
        description: "PRD approved for build",
      },
    ],
  },
  {
    id: "build",
    name: "Build",
    agent: "@builder → @ralph",
    agentIcon: "B",
    color: "bg-emerald-500",
    darkColor: "dark:bg-emerald-600",
    steps: [
      {
        id: "claim",
        label: "Claim",
        icon: "🎯",
        description: "Lock PRD, create branch",
      },
      {
        id: "implement",
        label: "Implement",
        icon: "⚡",
        description: "@ralph writes code",
        isLoop: true,
      },
      {
        id: "review",
        label: "Review",
        icon: "🔍",
        description: "@critic checks quality",
        isLoop: true,
      },
      {
        id: "iterate",
        label: "Iterate",
        icon: "🔄",
        description: "Fix issues, repeat",
        isLoop: true,
      },
    ],
  },
  {
    id: "test",
    name: "Test",
    agent: "@tester → @critic",
    agentIcon: "T",
    color: "bg-amber-500",
    darkColor: "dark:bg-amber-600",
    steps: [
      {
        id: "unit",
        label: "Unit Tests",
        icon: "🧪",
        description: "@tester adds coverage",
        isLoop: true,
      },
      {
        id: "e2e",
        label: "E2E Tests",
        icon: "🎭",
        description: "End-to-end tests via @playwright-dev",
        isLoop: true,
      },
      {
        id: "quality-gates",
        label: "Quality Gates",
        icon: "🚦",
        description: "Typecheck, lint, build",
      },
      {
        id: "human-script",
        label: "Human Test Script",
        icon: "📋",
        description: "Auto-generates QA checklist for manual testing",
      },
    ],
  },
  {
    id: "ship",
    name: "Ship",
    agent: "@builder → @felix",
    agentIcon: "S",
    color: "bg-violet-500",
    darkColor: "dark:bg-violet-600",
    steps: [
      {
        id: "pr",
        label: "Create PR",
        icon: "🔀",
        description: "Push and open PR",
      },
      {
        id: "watch",
        label: "Watch CI",
        icon: "👁️",
        description: "@felix monitors build",
      },
      {
        id: "merge",
        label: "Merge",
        icon: "🎉",
        description: "Ship to production",
      },
      {
        id: "archive",
        label: "Archive",
        icon: "📦",
        description: "PRD completed, cleanup",
      },
    ],
  },
];

export function TheLoop() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const phaseWidth = container.scrollWidth / phases.length;
      const newPhase = Math.round(scrollLeft / phaseWidth);
      setActivePhase(Math.min(newPhase, phases.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPhase = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsScrolling(true);
    const phaseWidth = container.scrollWidth / phases.length;
    container.scrollTo({
      left: phaseWidth * index,
      behavior: "smooth",
    });
    setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <section
      id="the-loop"
      className="border-t border-neutral-200 py-24 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            The Process
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            The Loop
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-400">
            From idea to shipped feature — and back again. Every feature follows
            this cycle.
          </p>
        </div>

        {/* Phase Indicators */}
        <div className="mt-10 flex justify-center gap-2 sm:gap-4">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => scrollToPhase(index)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activePhase === index
                  ? `${phase.color} ${phase.darkColor} text-white shadow-lg`
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              <span className="hidden sm:inline">{phase.name}</span>
              <span className="sm:hidden">{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-hide sm:gap-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {phases.map((phase, phaseIndex) => (
            <div
              key={phase.id}
              className="min-w-[85vw] flex-shrink-0 snap-center sm:min-w-[400px] lg:min-w-[350px]"
            >
              {/* Phase Card */}
              <div className="h-full rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                {/* Phase Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${phase.color} ${phase.darkColor} text-lg font-bold text-white shadow-lg`}
                  >
                    {phase.agentIcon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {phase.name}
                    </h3>
                    <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400">
                      {phase.agent}
                    </p>
                  </div>
                </div>

                {/* Steps */}
                <div className="relative space-y-4">
                  {/* Vertical Line */}
                  <div className="absolute left-5 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-700" />

                  {phase.steps.map((step, stepIndex) => (
                    <div key={step.id} className="relative flex gap-4">
                      {/* Step Icon */}
                      <div
                        className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white text-lg dark:bg-neutral-900 ${
                          step.isLoop
                            ? "border-emerald-400 dark:border-emerald-500"
                            : "border-neutral-300 dark:border-neutral-600"
                        }`}
                      >
                        {step.icon}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                            {step.label}
                          </h4>
                          {step.isLoop && (
                            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                              loops
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Loop Indicator for Build Phase */}
                  {phase.id === "build" && (
                    <div className="ml-5 mt-2 flex items-center gap-2 rounded-lg border border-dashed border-emerald-300 bg-emerald-50 px-3 py-2 dark:border-emerald-700 dark:bg-emerald-900/20">
                      <span className="text-lg">🔄</span>
                      <span className="text-sm text-emerald-700 dark:text-emerald-400">
                        Repeat until all stories pass
                      </span>
                    </div>
                  )}

                  {/* Loop Indicator for Test Phase */}
                  {phase.id === "test" && (
                    <div className="ml-5 mt-2 flex items-center gap-2 rounded-lg border border-dashed border-emerald-300 bg-emerald-50 px-3 py-2 dark:border-emerald-700 dark:bg-emerald-900/20">
                      <span className="text-lg">🔄</span>
                      <span className="text-sm text-emerald-700 dark:text-emerald-400">
                        Retry up to 3 times, then stop for human review
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bug Feedback Loop */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-dashed border-amber-300 bg-amber-50 px-5 py-3 dark:border-amber-600 dark:bg-amber-900/20">
            <span className="text-2xl">🐛</span>
            <div>
              <p className="font-medium text-amber-800 dark:text-amber-300">
                Bugs feed back into the loop
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Discovered issues become new PRDs automatically
              </p>
            </div>
            <svg
              className="h-6 w-6 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        </div>

        {/* Scroll Hint (mobile) */}
        <div className="mt-4 flex justify-center sm:hidden">
          <p className="flex items-center gap-1 text-sm text-neutral-500">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
            Swipe to explore
          </p>
        </div>
      </div>
    </section>
  );
}
