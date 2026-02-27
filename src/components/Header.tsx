"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { SearchModal } from "./SearchModal";
import { manifest } from "@/data";

interface SubNavItem {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: SubNavItem[];
}

// Build navigation with dynamic counts from manifest
function buildNavigation(): NavItem[] {
  const primaryCount = manifest.counts.primaryAgents;
  const subagentCount = manifest.counts.subagents;
  const metaSkillCount = manifest.counts.metaSkills;
  const regularSkillCount = manifest.counts.skills - metaSkillCount;

  return [
    { name: "Home", href: "/" },
    {
      name: "Concepts",
      href: "/concepts",
      dropdown: [
        { name: "Overview", href: "/concepts", description: "The big picture" },
        { name: "Understanding Agents", href: "/concepts/agents", description: "Primary vs sub-agents" },
        { name: "Agent Workflows", href: "/concepts/agent-workflows", description: "Update queues & coordination" },
        { name: "Meta-Skills", href: "/concepts/meta-skills", description: "Generate project patterns" },
        { name: "Project Skills", href: "/concepts/skills", description: "Task-specific workflows" },
        { name: "Project Toolkit Structure", href: "/concepts/projects", description: "Configuration & structure" },
        { name: "The Agent Loop", href: "/concepts/workflow", description: "Plan-Build-Test-Ship cycle" },
        { name: "The Human in the Loop (you)", href: "/concepts/the-human-in-the-loop", description: "Control AI autonomy" },
      ],
    },
    {
      name: "Developer Reference",
      href: "/reference",
      dropdown: [
        { name: "Primary Agents", href: "/reference/agents/primary", description: `Entry points (${primaryCount} agents)` },
        { name: "Sub-Agents", href: "/reference/agents/sub", description: `Specialists (${subagentCount} agents)` },
        { name: "Meta-Skills", href: "/reference/skills?type=meta", description: `Pattern generators (${metaSkillCount} skills)` },
        { name: "Skills", href: "/reference/skills?type=regular", description: `Task workflows (${regularSkillCount} skills)` },
        { name: "Scaffolds", href: "/reference/scaffolds", description: "Project templates" },
        { name: "Agent Templates", href: "/reference/agent-templates", description: "Framework-specific agent patterns" },
        { name: "MCP Servers", href: "/reference/mcp", description: "External tools & integrations" },
        { name: "Automations", href: "/reference/automations", description: "GitHub Actions workflows" },
      ],
    },
    { name: "Get Started", href: "/getting-started" },
    { name: "Changelog", href: "/changelog" },
  ];
}

function DropdownMenu({ item, isOpen, onClose }: { item: NavItem; isOpen: boolean; onClose: () => void }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!item.dropdown || !isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
    >
      <div className="p-2">
        {item.dropdown.map((subItem) => (
          <Link
            key={subItem.href}
            href={subItem.href}
            onClick={onClose}
            className="block rounded-md px-3 py-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <div className="text-sm font-medium text-neutral-900 dark:text-white">
              {subItem.name}
            </div>
            {subItem.description && (
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {subItem.description}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  
  // Build navigation with dynamic counts from manifest
  const siteNavigation = useMemo(() => buildNavigation(), []);

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  // Robust body scroll lock when mobile menu is open
  // Uses position:fixed approach for iOS Safari compatibility
  useEffect(() => {
    if (mobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      
      // Lock body in place using position:fixed with negative top offset
      // This prevents background scrolling on iOS Safari where overflow:hidden fails
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = `-${scrollX}px`;
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      // Prevent overscroll bounce on the body itself
      document.body.style.overscrollBehavior = "none";
      
      // Cleanup function to restore scroll position
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.overscrollBehavior = "";
        // Restore scroll position after releasing fixed positioning
        window.scrollTo(scrollX, scrollY);
      };
    }
  }, [mobileMenuOpen]);

  const openSearch = useCallback(() => {
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
  }, []);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    }
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[70] border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            yo, go
          </span>
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            for opencode
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {siteNavigation.map((item) => {
            const hasDropdown = "dropdown" in item && item.dropdown;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            if (hasDropdown) {
              return (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <DropdownMenu
                    item={item}
                    isOpen={openDropdown === item.name}
                    onClose={() => setOpenDropdown(null)}
                  />
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right side: Search + Theme toggle (desktop) + Mobile menu */}
        <div className="flex items-center gap-2">
          {/* Search button - hidden on mobile, shown in hamburger menu */}
          <button
            onClick={openSearch}
            className="hidden items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-500 transition-colors hover:border-neutral-300 hover:bg-neutral-100 lg:flex dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
            <kbd className="rounded border border-neutral-300 bg-white px-1.5 py-0.5 text-xs font-medium text-neutral-400 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-500">
              ⌘K
            </kbd>
          </button>

          {/* Theme toggle - hidden on mobile, shown in hamburger menu */}
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100 lg:hidden dark:text-neutral-400 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Full screen overlay */}
      {mobileMenuOpen && (
        <div
          className="absolute inset-x-0 top-full z-[60] h-[calc(100dvh-65px)] overflow-y-auto overscroll-contain border-t border-neutral-200 bg-white lg:hidden dark:border-neutral-800 dark:bg-neutral-950"
          onClick={(e) => {
            // Close menu when clicking background (not links)
            if (e.target === e.currentTarget) {
              setMobileMenuOpen(false);
            }
          }}
        >
          <div className="min-h-full px-6 py-4">
            {/* Search and Theme Toggle */}
            <div className="mb-4 flex items-center gap-2 border-b border-neutral-200 pb-4 dark:border-neutral-800">
              <button
                onClick={() => {
                  openSearch();
                  setMobileMenuOpen(false);
                }}
                className="flex flex-1 items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-500 transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search...</span>
              </button>
              <ThemeToggle />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2">
              {siteNavigation.map((item) => {
                const hasDropdown = "dropdown" in item && item.dropdown;

                if (hasDropdown && item.dropdown) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 py-2">
                        {item.name}
                      </div>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={closeSearch} />
    </header>
  );
}
