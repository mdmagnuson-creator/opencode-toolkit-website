"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserGroupIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  DocumentDuplicateIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getSidebarCategories, type TopCategory as NavTopCategory, type NavItem } from "@/lib/buildSidebarNav";

// Extended type with icon for rendering
interface TopCategory extends NavTopCategory {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Icon mapping for each category
const CATEGORY_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  agents: UserGroupIcon,
  skills: SparklesIcon,
  scaffolds: Square3Stack3DIcon,
  "agent-templates": DocumentDuplicateIcon,
};

// Search result types
interface SearchMatch {
  item: NavItem;
  categoryId: string;
  categoryName: string;
  subcategoryName: string;
  href: string;
  score: number;
  matchType: 'name' | 'description' | 'category';
  matchedText?: string;
}

// Helper to compute path-based expansions
function computePathExpansions(
  pathname: string,
  categories: TopCategory[]
): { l1: Set<string>; l2: Set<string> } {
  const l1 = new Set<string>();
  const l2 = new Set<string>();

  categories.forEach((cat) => {
    if (pathname.startsWith(cat.href)) {
      l1.add(cat.id);
      cat.subcategories.forEach((subcat) => {
        const subcatKey = `${cat.id}-${subcat.name}`;
        subcat.items.forEach((item) => {
          if (pathname === `${cat.href}/${item.slug}`) {
            l2.add(subcatKey);
          }
        });
      });
    }
  });

  return { l1, l2 };
}

// Search scoring function
function scoreMatch(query: string, item: NavItem, categoryName: string, subcategoryName: string): SearchMatch | null {
  const queryLower = query.toLowerCase();
  let score = 0;
  let matchType: 'name' | 'description' | 'category' = 'name';
  let matchedText: string | undefined;

  // Check name match (weight: 1.0)
  const nameLower = item.name.toLowerCase();
  if (nameLower.includes(queryLower)) {
    // Exact match gets higher score
    if (nameLower === queryLower) {
      score += 2.0;
    } else if (nameLower.startsWith(queryLower)) {
      score += 1.5;
    } else {
      score += 1.0;
    }
    matchType = 'name';
  }

  // Check description match (weight: 0.5)
  const descriptionLower = (item.description || '').toLowerCase();
  if (descriptionLower.includes(queryLower)) {
    score += 0.5;
    if (matchType !== 'name' || score < 1.0) {
      matchType = 'description';
      // Extract snippet around match
      const matchIndex = descriptionLower.indexOf(queryLower);
      const start = Math.max(0, matchIndex - 20);
      const end = Math.min(item.description!.length, matchIndex + queryLower.length + 30);
      matchedText = (start > 0 ? '...' : '') + 
                   item.description!.slice(start, end) + 
                   (end < item.description!.length ? '...' : '');
    }
  }

  // Check category/subcategory match (weight: 0.3)
  const catLower = categoryName.toLowerCase();
  const subcatLower = subcategoryName.toLowerCase();
  if (catLower.includes(queryLower) || subcatLower.includes(queryLower)) {
    score += 0.3;
    if (score === 0.3) {
      matchType = 'category';
    }
  }

  return score > 0 ? { item, categoryId: '', categoryName, subcategoryName, href: '', score, matchType, matchedText } : null;
}

// Highlight matching text in a string
function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query || query.length < 2) return text;
  
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  const matchIndex = textLower.indexOf(queryLower);
  
  if (matchIndex === -1) return text;
  
  const before = text.slice(0, matchIndex);
  const match = text.slice(matchIndex, matchIndex + query.length);
  const after = text.slice(matchIndex + query.length);
  
  return (
    <>
      {before}
      <mark className="bg-yellow-200 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-100 rounded px-0.5">
        {match}
      </mark>
      {after}
    </>
  );
}

export function ReferenceSidebar() {
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Build navigation structure from toolkit-structure.json via buildSidebarNav utility
  // Navigation data is generated at module load time, not runtime
  const categories: TopCategory[] = useMemo(() => {
    const navCategories = getSidebarCategories();
    return navCategories.map((cat) => ({
      ...cat,
      icon: CATEGORY_ICONS[cat.id] || UserGroupIcon,
    }));
  }, []);

  // Search results
  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return null;
    
    const results: SearchMatch[] = [];
    
    categories.forEach((category) => {
      category.subcategories.forEach((subcat) => {
        subcat.items.forEach((item) => {
          const match = scoreMatch(searchQuery, item, category.name, subcat.name);
          if (match) {
            match.categoryId = category.id;
            match.href = `${category.href}/${item.slug}`;
            results.push(match);
          }
        });
      });
    });
    
    // Sort by score (highest first)
    return results.sort((a, b) => b.score - a.score);
  }, [searchQuery, categories]);

  // When searching, group results by category for display
  const groupedSearchResults = useMemo(() => {
    if (!searchResults) return null;
    
    const grouped: Record<string, {
      category: TopCategory;
      subcategories: Record<string, SearchMatch[]>;
    }> = {};
    
    searchResults.forEach((match) => {
      if (!grouped[match.categoryId]) {
        const category = categories.find(c => c.id === match.categoryId)!;
        grouped[match.categoryId] = { category, subcategories: {} };
      }
      if (!grouped[match.categoryId].subcategories[match.subcategoryName]) {
        grouped[match.categoryId].subcategories[match.subcategoryName] = [];
      }
      grouped[match.categoryId].subcategories[match.subcategoryName].push(match);
    });
    
    return grouped;
  }, [searchResults, categories]);

  // User-toggled state (explicit user actions)
  // Stores sections that have been explicitly collapsed
  const [collapsedL1, setCollapsedL1] = useState<Set<string>>(new Set());
  const [collapsedL2, setCollapsedL2] = useState<Set<string>>(new Set());
  // Stores sections that have been explicitly expanded
  const [manuallyExpandedL1, setManuallyExpandedL1] = useState<Set<string>>(new Set());
  const [manuallyExpandedL2, setManuallyExpandedL2] = useState<Set<string>>(new Set());

  // Compute path-based auto-expansions
  const pathExpansions = useMemo(
    () => computePathExpansions(pathname, categories),
    [pathname, categories]
  );

  // Effective expanded state = (path-based OR manually expanded) AND NOT collapsed
  const isL1Expanded = useCallback(
    (id: string) => {
      if (collapsedL1.has(id)) return false;
      return pathExpansions.l1.has(id) || manuallyExpandedL1.has(id);
    },
    [collapsedL1, pathExpansions.l1, manuallyExpandedL1]
  );

  const isL2Expanded = useCallback(
    (key: string) => {
      if (collapsedL2.has(key)) return false;
      return pathExpansions.l2.has(key) || manuallyExpandedL2.has(key);
    },
    [collapsedL2, pathExpansions.l2, manuallyExpandedL2]
  );

  const toggleL1 = useCallback((id: string) => {
    // Determine current effective state
    const currentlyExpanded =
      (pathExpansions.l1.has(id) || manuallyExpandedL1.has(id)) && !collapsedL1.has(id);

    if (currentlyExpanded) {
      // Collapse it
      setCollapsedL1((prev) => new Set([...prev, id]));
      setManuallyExpandedL1((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    } else {
      // Expand it
      setManuallyExpandedL1((prev) => new Set([...prev, id]));
      setCollapsedL1((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  }, [pathExpansions.l1, manuallyExpandedL1, collapsedL1]);

  const toggleL2 = useCallback((key: string) => {
    // Determine current effective state
    const currentlyExpanded =
      (pathExpansions.l2.has(key) || manuallyExpandedL2.has(key)) && !collapsedL2.has(key);

    if (currentlyExpanded) {
      // Collapse it
      setCollapsedL2((prev) => new Set([...prev, key]));
      setManuallyExpandedL2((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    } else {
      // Expand it
      setManuallyExpandedL2((prev) => new Set([...prev, key]));
      setCollapsedL2((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }
  }, [pathExpansions.l2, manuallyExpandedL2, collapsedL2]);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  }, []);

  // Keyboard shortcut: "/" to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only activate if in reference section and not already focused on an input
      if (!pathname.startsWith('/reference')) return;
      if (e.key !== '/') return;
      
      const activeElement = document.activeElement;
      const isInputFocused = activeElement?.tagName === 'INPUT' || 
                            activeElement?.tagName === 'TEXTAREA' ||
                            (activeElement as HTMLElement)?.isContentEditable;
      
      if (!isInputFocused) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [pathname]);

  const isSearching = searchQuery.length >= 2;
  const hasResults = searchResults && searchResults.length > 0;

  return (
    <nav aria-label="Reference navigation" className="space-y-1">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        Developer Reference
      </h2>

      {/* Search Input */}
      <div className="relative mb-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-4 w-4 text-neutral-400 dark:text-neutral-500" />
        </div>
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search... (press /)"
          className="w-full rounded-md border border-neutral-200 bg-white py-2 pl-9 pr-9 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
          aria-label="Search reference"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
            aria-label="Clear search"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isSearching && !hasResults && (
        <div className="rounded-md border border-neutral-200 bg-neutral-50 p-4 text-center text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-400">
          No results found for &ldquo;{searchQuery}&rdquo;
        </div>
      )}

      {isSearching && hasResults && groupedSearchResults && (
        <div className="space-y-1">
          {Object.entries(groupedSearchResults).map(([categoryId, { category, subcategories }]) => {
            const Icon = category.icon;
            return (
              <div key={categoryId} className="mb-1">
                {/* Category header - always expanded in search mode */}
                <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{category.name}</span>
                </div>

                {/* Subcategories */}
                <div className="ml-3 mt-1 space-y-0.5 border-l border-neutral-200 pl-3 dark:border-neutral-700">
                  {Object.entries(subcategories).map(([subcatName, matches]) => (
                    <div key={subcatName}>
                      <div className="px-2 py-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {subcatName}
                      </div>
                      
                      {/* Items */}
                      <div className="ml-3 mt-0.5 space-y-0.5 border-l border-neutral-200 pl-3 dark:border-neutral-700">
                        {matches.map((match) => {
                          const isActive = pathname === match.href;
                          return (
                            <Link
                              key={match.href}
                              href={match.href}
                              className={`block rounded-md px-2 py-1 text-sm transition-colors ${
                                isActive
                                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:text-neutral-200"
                              }`}
                            >
                              <div>{highlightMatch(match.item.name, searchQuery)}</div>
                              {match.matchType === 'description' && match.matchedText && (
                                <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500 line-clamp-1">
                                  {highlightMatch(match.matchedText, searchQuery)}
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Normal Navigation (when not searching) */}
      {!isSearching && categories.map((category) => {
        const expanded = isL1Expanded(category.id);
        const Icon = category.icon;

        return (
          <div key={category.id} className="mb-1">
            {/* Level 1: Top Category */}
            <button
              onClick={() => toggleL1(category.id)}
              className={`group flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm font-medium transition-colors ${
                pathname.startsWith(category.href)
                  ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                  : "text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-800/50"
              }`}
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0" />
                <span>{category.name}</span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  ({category.totalCount})
                </span>
              </span>
              {expanded ? (
                <ChevronDownIcon className="h-4 w-4 shrink-0 text-neutral-400" />
              ) : (
                <ChevronRightIcon className="h-4 w-4 shrink-0 text-neutral-400" />
              )}
            </button>

            {/* Level 2: Subcategories */}
            {expanded && (
              <div className="ml-3 mt-1 space-y-0.5 border-l border-neutral-200 pl-3 dark:border-neutral-700">
                {category.subcategories.map((subcat) => {
                  const subcatKey = `${category.id}-${subcat.name}`;
                  const subcatExpanded = isL2Expanded(subcatKey);

                  return (
                    <div key={subcatKey}>
                      <button
                        onClick={() => toggleL2(subcatKey)}
                        className="group flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-sm transition-colors text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800/50"
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{subcat.name}</span>
                          <span className="text-xs text-neutral-400 dark:text-neutral-500">
                            ({subcat.count})
                          </span>
                        </span>
                        {subcatExpanded ? (
                          <ChevronDownIcon className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                        ) : (
                          <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                        )}
                      </button>

                      {/* Level 3: Individual Items */}
                      {subcatExpanded && (
                        <div className="ml-3 mt-0.5 space-y-0.5 border-l border-neutral-200 pl-3 dark:border-neutral-700">
                          {subcat.items.map((item) => {
                            const itemPath = `${category.href}/${item.slug}`;
                            const isActive = pathname === itemPath;

                            return (
                              <Link
                                key={item.slug}
                                href={itemPath}
                                className={`block rounded-md px-2 py-1 text-sm transition-colors ${
                                  isActive
                                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:text-neutral-200"
                                }`}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
