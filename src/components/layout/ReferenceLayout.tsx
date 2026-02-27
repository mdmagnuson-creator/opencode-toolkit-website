"use client";

import { ReactNode, useState, useEffect, useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface ReferenceLayoutProps {
  /** Content for the left sidebar navigation */
  sidebar: ReactNode;
  /** Sidebar content for mobile (with onNavigate support) */
  mobileSidebar?: ReactNode;
  /** Main content area */
  children: ReactNode;
}

/**
 * Layout component for Developer Reference pages.
 * Provides a persistent left sidebar (280px) with main content area.
 * 
 * Desktop (>=1024px): Sidebar visible and sticky, main content scrolls independently
 * Mobile (<1024px): Sidebar hidden behind hamburger menu, opens as overlay
 */
export function ReferenceLayout({ sidebar, mobileSidebar, children }: ReferenceLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl">
      {/* Sidebar - hidden on mobile, sticky on desktop */}
      <aside className="hidden w-70 shrink-0 border-r border-neutral-200 lg:block dark:border-neutral-800">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-6 py-8">
          {sidebar}
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 dark:bg-black/70"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Sidebar panel */}
          <aside className="absolute left-0 top-16 h-[calc(100%-4rem)] w-80 max-w-[85vw] overflow-y-auto bg-white px-6 py-8 shadow-xl dark:bg-neutral-900">
            {/* Close button */}
            <button
              onClick={closeMobileMenu}
              className="absolute right-4 top-4 rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
              aria-label="Close navigation menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            
            {/* Sidebar content - close menu only when clicking links, not expand buttons */}
            <div onClick={(e) => {
              // Only close menu if the click was on a link (navigation)
              const target = e.target as HTMLElement;
              if (target.closest('a')) {
                closeMobileMenu();
              }
            }}>
              {mobileSidebar ?? sidebar}
            </div>
          </aside>
        </div>
      )}

      {/* Main content area */}
      <div className="min-w-0 flex-1">
        {/* Mobile menu button - only visible on mobile */}
        <div className="sticky top-16 z-30 flex items-center border-b border-neutral-200 bg-white px-4 py-3 lg:hidden dark:border-neutral-800 dark:bg-neutral-950">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-sidebar"
          >
            <Bars3Icon className="h-5 w-5" />
            <span>Menu</span>
          </button>
        </div>

        <main className="px-6 py-8 sm:px-8 lg:px-12">
          {children}
        </main>
      </div>
    </div>
  );
}
