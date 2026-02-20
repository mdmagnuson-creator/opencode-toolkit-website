"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

// Map of path segments to display names
const pathNames: Record<string, string> = {
  concepts: "Concepts",
  agents: "Agents",
  skills: "Skills",
  scaffolds: "Scaffolds",
  "getting-started": "Getting Started",
  workflow: "The Workflow Loop",
  projects: "Project Setup",
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();

  // If items are provided, use them; otherwise, auto-generate from pathname
  const breadcrumbs = items || generateBreadcrumbs(pathname);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
      {breadcrumbs.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          {index > 0 && <span>/</span>}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-neutral-900 dark:text-white">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-neutral-700 dark:hover:text-neutral-300">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ name: "Home", href: "/" }];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name = pathNames[segment] || formatSegment(segment);
    breadcrumbs.push({ name, href: currentPath });
  }

  return breadcrumbs;
}

function formatSegment(segment: string): string {
  // Convert kebab-case to Title Case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
