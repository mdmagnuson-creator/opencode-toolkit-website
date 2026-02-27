"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface NavSection {
  id: string;
  label: string;
}

interface OnThisPageNavProps {
  sections: NavSection[];
  /** Optional title for the nav (defaults to "On this page") */
  title?: string;
}

/**
 * Floating/sticky "On this page" navigation component for long pages.
 * Shows section anchors and highlights the active section as user scrolls.
 * 
 * Desktop: Floating sticky sidebar on the right with collapse/expand toggle.
 *          Starts collapsed by default; user can expand/collapse manually.
 * Mobile: Compact jump list at the top (hidden by default, shown via toggle)
 *         Uses scroll detection to switch to fixed positioning when scrolled past.
 */
export function OnThisPageNav({ sections, title = "On this page" }: OnThisPageNavProps) {
  // Initialize with first section to avoid setState in effect
  const [activeId, setActiveId] = useState<string>(() => sections[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(true);
  // Track if mobile nav should be fixed (scrolled past initial position)
  const [mobileFixed, setMobileFixed] = useState(false);
  
  // Track if a click-initiated scroll is in progress to avoid URL update loops
  const isClickScrollingRef = useRef(false);
  // Track the mobile nav's initial offset for scroll detection
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileNavInitialOffsetRef = useRef<number | null>(null);

  // Simple toggle for desktop collapse state
  const handleDesktopCollapse = useCallback((collapsed: boolean) => {
    setDesktopCollapsed(collapsed);
  }, []);

  // Mobile: detect scroll position to switch to fixed positioning
  useEffect(() => {
    // Only run on mobile (lg:hidden means this only matters below 1024px)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (mediaQuery.matches) return; // Desktop, skip scroll detection

    const handleScroll = () => {
      if (!mobileNavRef.current) return;
      
      // Capture initial offset on first scroll (after initial render)
      if (mobileNavInitialOffsetRef.current === null) {
        const rect = mobileNavRef.current.getBoundingClientRect();
        // Store the initial offset from top of viewport when not scrolled
        // Account for any initial scroll position
        mobileNavInitialOffsetRef.current = rect.top + window.scrollY;
      }
      
      // Calculate threshold: when nav would scroll past top-16 (64px) position
      const threshold = mobileNavInitialOffsetRef.current - 64; // 64px = top-16
      const shouldBeFixed = window.scrollY > threshold;
      
      setMobileFixed(shouldBeFixed);
    };

    // Capture initial position on mount
    if (mobileNavRef.current) {
      const rect = mobileNavRef.current.getBoundingClientRect();
      mobileNavInitialOffsetRef.current = rect.top + window.scrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sections.length === 0) return;

    // Set up intersection observer to track active section
    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-80px 0px -70% 0px", // Trigger when section is near top
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const newId = entry.target.id;
          setActiveId(newId);
          
          // Update URL hash on scroll (replaceState to avoid polluting back-stack)
          // Skip if this is from a click-initiated scroll (click already set the hash)
          if (!isClickScrollingRef.current) {
            const currentHash = window.location.hash.slice(1);
            if (currentHash !== newId) {
              window.history.replaceState(null, "", `#${newId}`);
            }
          }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Mark that we're doing a click-initiated scroll
      isClickScrollingRef.current = true;
      
      // Update URL hash for shareable anchor links
      // Use history.pushState to avoid the browser's default jump behavior
      window.history.pushState(null, "", `#${id}`);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Clear the flag after smooth scroll completes (estimate ~500ms for smooth scroll)
      setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 600);
    }
  };

  if (sections.length === 0) return null;

  // Find the active section label for collapsed state
  const activeSection = sections.find((s) => s.id === activeId);

  return (
    <>
      {/* Desktop: Floating sticky nav on the right with collapse toggle */}
      <nav
        className="fixed right-8 top-32 hidden lg:block"
        aria-label="On this page navigation"
      >
        <div className="relative">
          {/* Collapsed state: minimal pill with expand button */}
          <button
            onClick={() => handleDesktopCollapse(false)}
            className={`group flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm transition-all duration-[350ms] ease-out hover:border-violet-300 hover:bg-violet-50 dark:border-neutral-700 dark:bg-neutral-900/90 dark:hover:border-violet-700 dark:hover:bg-violet-950 ${
              desktopCollapsed
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none translate-x-8 opacity-0"
            }`}
            aria-label="Expand page navigation"
            aria-hidden={!desktopCollapsed}
            tabIndex={desktopCollapsed ? 0 : -1}
          >
            <svg
              className="h-4 w-4 text-neutral-500 group-hover:text-violet-600 dark:text-neutral-400 dark:group-hover:text-violet-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="max-w-[120px] truncate text-xs font-medium text-neutral-600 group-hover:text-violet-700 dark:text-neutral-400 dark:group-hover:text-violet-300">
              {activeSection?.label ?? title}
            </span>
            <svg
              className="h-3 w-3 text-neutral-400 group-hover:text-violet-500 dark:text-neutral-500 dark:group-hover:text-violet-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Expanded state: full navigation panel */}
          <div
            className={`absolute right-0 top-0 origin-top-right overflow-hidden rounded-xl border border-neutral-200 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-[350ms] ease-out dark:border-neutral-700 dark:bg-neutral-900/80 ${
              desktopCollapsed
                ? "pointer-events-none w-0 translate-x-4 opacity-0"
                : "pointer-events-auto w-56 translate-x-0 opacity-100"
            }`}
            aria-hidden={desktopCollapsed}
          >
            {/* Header with collapse button */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3 dark:border-neutral-800">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {title}
              </h3>
              <button
                onClick={() => handleDesktopCollapse(true)}
                className="rounded p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                aria-label="Collapse page navigation"
                tabIndex={desktopCollapsed ? -1 : 0}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            {/* Section links */}
            <ul className="space-y-1 p-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(section.id);
                    }}
                    className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                      activeId === section.id
                        ? "bg-violet-100 font-medium text-violet-700 dark:bg-violet-900/40 dark:text-violet-300"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    }`}
                    tabIndex={desktopCollapsed ? -1 : 0}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile: Compact toggle-able jump list with scroll-triggered fixed positioning */}
      <div className="mb-6 lg:hidden" ref={mobileNavRef}>
        {/* Placeholder to prevent layout shift when nav becomes fixed */}
        {mobileFixed && <div className="h-[46px]" aria-hidden="true" />}
        
        <div
          className={`z-40 ${
            mobileFixed
              ? "fixed left-0 right-0 top-16 px-6 sm:px-8"
              : ""
          }`}
        >
          <div className={mobileFixed ? "mx-auto max-w-3xl" : ""}>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-white/90 px-4 py-2.5 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-300 dark:hover:bg-neutral-800"
              aria-expanded={mobileOpen}
              aria-controls="mobile-page-nav"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-neutral-500 dark:text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                {title}
              </span>
              <svg
                className={`h-4 w-4 text-neutral-500 transition-transform dark:text-neutral-400 ${
                  mobileOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {mobileOpen && (
              <div
                id="mobile-page-nav"
                className="absolute left-0 right-0 top-full mt-1 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
              >
                <ul className="space-y-0.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(section.id);
                        }}
                        className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          activeId === section.id
                            ? "bg-violet-100 font-medium text-violet-700 dark:bg-violet-900/40 dark:text-violet-300"
                            : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                        }`}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
