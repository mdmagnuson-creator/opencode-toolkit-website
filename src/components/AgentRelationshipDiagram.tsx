"use client";

export function AgentRelationshipDiagram() {
  const primaryAgents = [
    { initial: "B", name: "bildr" },
    { initial: "R", name: "ralph" },
    { initial: "P", name: "planner" },
    { initial: "T", name: "toolkit" },
  ];

  const subCategories = [
    { name: "Critics", count: 22 },
    { name: "Developers", count: 9 },
    { name: "Testers", count: 5 },
    { name: "Other", count: 21 },
  ];

  return (
    <div className="py-12">
      {/* Primary Agents Row */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 shadow-sm sm:gap-3 sm:px-6 dark:border-neutral-600 dark:bg-neutral-800">
          {primaryAgents.map((agent, index) => (
            <div key={agent.name} className="flex items-center gap-2 sm:gap-3">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900 text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base dark:bg-neutral-100 dark:text-neutral-900">
                  {agent.initial}
                </div>
                <span className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  @{agent.name}
                </span>
              </div>
              {index < primaryAgents.length - 1 && (
                <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Connecting Arrow */}
      <div className="flex justify-center py-4">
        <div className="flex flex-col items-center">
          <div className="h-8 w-px bg-neutral-400 dark:bg-neutral-500" />
          <svg
            className="h-3 w-3 text-neutral-400 dark:text-neutral-500"
            fill="currentColor"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path d="M6 12L0 6h12L6 12z" />
          </svg>
          <span className="mt-2 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            delegates to
          </span>
        </div>
      </div>

      {/* Sub-agent Categories Row */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-3 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-4 py-3 sm:gap-4 sm:px-6 dark:border-neutral-600 dark:bg-neutral-800/50">
          {subCategories.map((category, index) => (
            <div key={category.name} className="flex items-center gap-3 sm:gap-4">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-neutral-900 sm:text-xl dark:text-neutral-100">
                  {category.count}
                </span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400">
                  {category.name}
                </span>
              </div>
              {index < subCategories.length - 1 && (
                <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
