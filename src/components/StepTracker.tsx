'use client';

import { useEffect, useState, useCallback } from 'react';

export interface Step {
  id: string;
  number: number;
  title: string;
}

interface StepTrackerProps {
  steps: Step[];
}

export function StepTracker({ steps }: StepTrackerProps) {
  const [activeStep, setActiveStep] = useState<string>(steps[0]?.id || '');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  // Use IntersectionObserver to track which step is visible
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const stepElements: Map<string, Element> = new Map();

    steps.forEach((step) => {
      const element = document.getElementById(step.id);
      if (element) {
        stepElements.set(step.id, element);
      }
    });

    // Create observer for each step
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the topmost visible step
      let topmostVisibleStep: string | null = null;
      let topmostY = Infinity;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          if (rect.top < topmostY && rect.top >= -100) {
            topmostY = rect.top;
            topmostVisibleStep = entry.target.id;
          }
        }
      });

      if (topmostVisibleStep) {
        setActiveStep(topmostVisibleStep);
        
        // Mark all steps before the active step as completed
        const activeIndex = steps.findIndex((s) => s.id === topmostVisibleStep);
        if (activeIndex > 0) {
          const newCompleted = new Set<string>();
          for (let i = 0; i < activeIndex; i++) {
            newCompleted.add(steps[i].id);
          }
          setCompletedSteps(newCompleted);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-80px 0px -50% 0px',
    });

    stepElements.forEach((element) => {
      observer.observe(element);
    });

    observers.push(observer);

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [steps]);

  const handleStepClick = useCallback((stepId: string) => {
    const element = document.getElementById(stepId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        className="hidden md:block sticky top-24 w-48 shrink-0 self-start"
        aria-label="Steps navigation"
      >
        <ol className="space-y-2">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const isCompleted = completedSteps.has(step.id);

            return (
              <li key={step.id}>
                <button
                  onClick={() => handleStepClick(step.id)}
                  className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                        : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'
                    }`}
                  >
                    {isCompleted ? (
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </span>
                  <span className="text-sm font-medium truncate">{step.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Mobile pill - fixed at bottom */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-neutral-900 dark:bg-neutral-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <span className="text-sm font-medium">
            Step {steps.findIndex((s) => s.id === activeStep) + 1} of {steps.length}
          </span>
          <span className="text-neutral-400">|</span>
          <span className="text-sm text-neutral-300 truncate max-w-[120px]">
            {steps.find((s) => s.id === activeStep)?.title}
          </span>
        </div>
      </div>
    </>
  );
}
