"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { manifest } from "@/data";
import type { Agent, Skill, Scaffold } from "@/data/types";

interface SearchResult {
  type: "agent" | "skill" | "scaffold" | "page";
  title: string;
  description: string;
  href: string;
  category?: string;
}

// Static pages to include in search
// Note: Descriptions use dynamic counts from manifest
function buildStaticPages(): SearchResult[] {
  return [
    {
      type: "page",
      title: "Home",
      description: "AI Toolkit for opencode - landing page",
      href: "/",
    },
    {
      type: "page",
      title: "Getting Started",
      description: "Install opencode and configure the AI Toolkit in 4 simple steps",
      href: "/getting-started",
    },
    {
      type: "page",
      title: "Concepts Overview",
      description: "The big picture - how opencode and AI Toolkit work together",
      href: "/concepts",
    },
    {
      type: "page",
      title: "Understanding Agents",
      description: "Primary agents vs sub-agents, how they work together",
      href: "/concepts/agents",
    },
    {
      type: "page",
      title: "Understanding Skills",
      description: "On-demand capabilities loaded when needed",
      href: "/concepts/skills",
    },
    {
      type: "page",
      title: "Project Toolkit Structure",
      description: "Configure your project with project.json and CONVENTIONS.md",
      href: "/concepts/projects",
    },
    {
      type: "page",
      title: "The Agent Loop",
      description: "The Plan-Build-Test-Ship development cycle",
      href: "/concepts/workflow",
    },
    {
      type: "page",
      title: "All Agents",
      description: `Browse all ${manifest.counts.agents} agents - critics, developers, testers, and more`,
      href: "/agents",
    },
    {
      type: "page",
      title: "All Skills",
      description: `Browse all ${manifest.counts.skills} skills - regular and meta-skills`,
      href: "/skills",
    },
    {
      type: "page",
      title: "Scaffolds",
      description: "Project templates for Go, Next.js, and more",
      href: "/scaffolds",
    },
    {
      type: "page",
      title: "MCP Servers",
      description: "Model Context Protocol servers for external tools and integrations",
      href: "/mcp",
    },
    {
      type: "page",
      title: "Automations",
      description: "GitHub Actions workflows for CI triage, PRD generation, and more",
      href: "/automations",
    },
    {
      type: "page",
      title: "Agent Templates",
      description: "Framework-specific agent patterns with Handlebars variables",
      href: "/agent-templates",
    },
    {
      type: "page",
      title: "Changelog",
      description: "Recent updates and changes to the AI Toolkit",
      href: "/changelog",
    },
  ];
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [...buildStaticPages()];

  // Add agents
  manifest.agents.forEach((agent: Agent) => {
    results.push({
      type: "agent",
      title: agent.name,
      description: agent.description,
      href: `/agents/${agent.slug}`,
      category: agent.category,
    });
  });

  // Add skills
  manifest.skills.forEach((skill: Skill) => {
    results.push({
      type: "skill",
      title: skill.name,
      description: skill.description,
      href: `/skills/${skill.slug}`,
      category: skill.isMeta ? "meta" : "regular",
    });
  });

  // Add scaffolds
  manifest.scaffolds.forEach((scaffold: Scaffold) => {
    results.push({
      type: "scaffold",
      title: scaffold.name,
      description: scaffold.description || `Project scaffold with ${scaffold.files.length} files`,
      href: `/scaffolds#${scaffold.slug}`,
    });
  });

  return results;
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  
  return parts.map((part, i) => 
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 dark:bg-yellow-900 text-inherit rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function getTypeIcon(type: SearchResult["type"]) {
  switch (type) {
    case "agent":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "skill":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "scaffold":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "page":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
  }
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    
    return searchIndex
      .filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const descMatch = item.description.toLowerCase().includes(lowerQuery);
        const categoryMatch = item.category?.toLowerCase().includes(lowerQuery);
        return titleMatch || descMatch || categoryMatch;
      })
      .sort((a, b) => {
        // Prioritize title matches
        const aTitle = a.title.toLowerCase().includes(lowerQuery);
        const bTitle = b.title.toLowerCase().includes(lowerQuery);
        if (aTitle && !bTitle) return -1;
        if (!aTitle && bTitle) return 1;
        
        // Then prioritize exact matches
        const aExact = a.title.toLowerCase() === lowerQuery;
        const bExact = b.title.toLowerCase() === lowerQuery;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        return 0;
      })
      .slice(0, 10);
  }, [query, searchIndex]);

  // Group results by type
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {
      page: [],
      agent: [],
      skill: [],
      scaffold: [],
    };
    
    results.forEach((result) => {
      groups[result.type].push(result);
    });
    
    return groups;
  }, [results]);

  const flatResults = useMemo(() => {
    return [
      ...groupedResults.page,
      ...groupedResults.agent,
      ...groupedResults.skill,
      ...groupedResults.scaffold,
    ];
  }, [groupedResults]);

  const handleSelect = useCallback((result: SearchResult) => {
    router.push(result.href);
    setQuery("");
    setSelectedIndex(0);
    onClose();
  }, [router, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, flatResults.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (flatResults[selectedIndex]) {
          handleSelect(flatResults[selectedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setQuery("");
        setSelectedIndex(0);
        onClose();
        break;
    }
  }, [flatResults, selectedIndex, handleSelect, onClose]);

  // Focus input when modal opens and reset state when it closes
  useEffect(() => {
    if (isOpen) {
      // Use requestAnimationFrame to defer the focus to next frame
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Handle closing the modal - reset state via callback
  const handleClose = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  // Reset selection when query changes via input handler
  const handleQueryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  }, []);

  // Scroll selected item into view
  useEffect(() => {
    const container = resultsRef.current;
    if (!container) return;
    
    const selected = container.querySelector("[data-selected=true]");
    if (selected) {
      selected.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  // Global keyboard shortcut
  useEffect(() => {
    function handleGlobalKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!isOpen) {
          // This will be handled by parent component
        }
      }
    }
    
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-xl mx-4 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-900">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-neutral-200 px-4 dark:border-neutral-700">
          <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
            placeholder="Search agents, skills, scaffolds, pages..."
            className="flex-1 bg-transparent py-4 text-neutral-900 placeholder-neutral-400 outline-none dark:text-white"
          />
          <kbd className="hidden rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 sm:inline-block dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="p-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
              <p>Start typing to search...</p>
              <p className="mt-2 text-xs">
                Search across {manifest.agents.length} agents, {manifest.skills.length} skills, and {manifest.scaffolds.length} scaffolds
              </p>
            </div>
          ) : flatResults.length === 0 ? (
            <div className="p-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="p-2">
              {Object.entries(groupedResults).map(([type, items]) => {
                if (items.length === 0) return null;
                
                const typeLabels: Record<string, string> = {
                  page: "Pages",
                  agent: "Agents",
                  skill: "Skills",
                  scaffold: "Scaffolds",
                };
                
                return (
                  <div key={type}>
                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {typeLabels[type]}
                    </div>
                    {items.map((result) => {
                      const index = flatResults.indexOf(result);
                      const isSelected = index === selectedIndex;
                      
                      return (
                        <button
                          key={result.href}
                          data-selected={isSelected}
                          onClick={() => handleSelect(result)}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                            isSelected
                              ? "bg-blue-50 dark:bg-blue-900/30"
                              : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                          }`}
                        >
                          <div className={`flex h-8 w-8 items-center justify-center rounded-md ${
                            isSelected
                              ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                              : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
                          }`}>
                            {getTypeIcon(result.type)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="truncate font-medium text-neutral-900 dark:text-white">
                                {highlightMatch(result.title, query)}
                              </span>
                              {result.category && (
                                <span className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                                  {result.category}
                                </span>
                              )}
                            </div>
                            <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                              {highlightMatch(result.description, query)}
                            </p>
                          </div>
                          {isSelected && (
                            <kbd className="shrink-0 rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                              Enter
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-2 text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-neutral-300 bg-neutral-100 px-1.5 py-0.5 dark:border-neutral-600 dark:bg-neutral-800">↑</kbd>
              <kbd className="rounded border border-neutral-300 bg-neutral-100 px-1.5 py-0.5 dark:border-neutral-600 dark:bg-neutral-800">↓</kbd>
              <span className="ml-1">to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-neutral-300 bg-neutral-100 px-1.5 py-0.5 dark:border-neutral-600 dark:bg-neutral-800">Enter</kbd>
              <span className="ml-1">to select</span>
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-neutral-300 bg-neutral-100 px-1.5 py-0.5 dark:border-neutral-600 dark:bg-neutral-800">Esc</kbd>
            <span className="ml-1">to close</span>
          </span>
        </div>
      </div>
    </div>
  );
}
