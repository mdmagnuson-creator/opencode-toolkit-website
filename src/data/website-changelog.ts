/**
 * Website-specific changelog entries.
 * 
 * DEPRECATED: This file is kept for backwards compatibility but is no longer used.
 * Website changelog entries are now fetched at runtime from the GitHub API
 * alongside toolkit commits. See src/lib/changelog-fetcher.ts for the
 * dual-source runtime fetching implementation.
 * 
 * This file was previously used to manually track changes to the documentation
 * website itself, separate from the AI Toolkit repository changes.
 */
import type { ChangelogDay } from './types';

export const websiteChangelog: ChangelogDay[] = [
  {
    date: "2026-02-21",
    displayDate: "February 21, 2026",
    changes: [
      {
        type: "feat",
        description: "Add combined changelog showing both toolkit and website changes",
        scope: "changelog",
      },
      {
        type: "feat",
        description: "Add source badges to distinguish toolkit vs website changes",
        scope: "changelog",
      },
      {
        type: "feat",
        description: "Add Roadmap page with draft PRDs including PRD 004: Dynamic Verbosity Modes",
        scope: "concepts",
      },
      {
        type: "feat",
        description: "Add Minimal Startup Output documentation to primary agents page",
        scope: "agents",
      },
      {
        type: "docs",
        description: "Document /dev/tty prompt behavior for piped installer",
        scope: "getting-started",
      },
      {
        type: "fix",
        description: "Update CLAUDE.md references to AGENTS.md across documentation",
        scope: "scaffolds",
      },
    ],
  },
  {
    date: "2026-02-20",
    displayDate: "February 20, 2026",
    changes: [
      {
        type: "feat",
        description: "Add agent workflow concept page with interactive diagram",
        scope: "concepts",
      },
      {
        type: "feat",
        description: "Add searchable documentation with keyboard navigation",
        scope: "search",
      },
      {
        type: "fix",
        description: "Improve dark mode contrast for code blocks",
        scope: "styling",
      },
    ],
  },
  {
    date: "2026-02-19",
    displayDate: "February 19, 2026",
    changes: [
      {
        type: "feat",
        description: "Launch AI Toolkit documentation website",
      },
      {
        type: "feat",
        description: "Add agents reference pages with filtering",
        scope: "agents",
      },
      {
        type: "feat",
        description: "Add skills reference pages with category tabs",
        scope: "skills",
      },
      {
        type: "docs",
        description: "Add getting started guide with installation steps",
      },
    ],
  },
];
