# PRD: Developer Reference Restructure

## Introduction

Restructure the website's "Reference" section into a comprehensive "Developer Reference" with a persistent left sidebar navigation. This provides developers with a familiar, hierarchical navigation pattern (matching Stripe, GitHub, and Tailwind docs) to explore all toolkit components: agents, skills, scaffolds, agent templates, MCP servers, and automations.

The existing pages will be reused and wrapped in a new sidebar layout, with URLs moved under `/reference/*` for clean organization.

## Goals

- Rename "Reference" to "Developer Reference" across the site
- Add a persistent left sidebar with 3-level collapsible hierarchy
- Move all reference pages under `/reference/*` URL structure
- Provide individual detail pages for each toolkit item
- Support mobile with hamburger menu for sidebar
- Maintain existing page content while improving discoverability

## User Stories

### US-001: Create Reference Layout Component

**Description:** As a developer, I need a reusable layout component for all reference pages so that the sidebar is consistent across the section.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Create `ReferenceLayout` component with left sidebar + main content area
- [ ] Sidebar is 280px wide on desktop, collapsible
- [ ] Main content area scrolls independently from sidebar
- [ ] Sidebar is sticky/fixed during scroll
- [ ] Layout works with Next.js App Router nested layouts
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-002: Build Hierarchical Sidebar Navigation

**Description:** As a developer, I want to see a collapsible 3-level hierarchy in the sidebar so I can navigate to any toolkit component quickly.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Level 1: Top categories (Agents, Skills, Scaffolds, Agent Templates, MCP Servers, Automations)
- [ ] Level 2: Subcategories (e.g., Agents → Primary, Implementation, Testing, Critics, Operational)
- [ ] Level 3: Individual items (e.g., Primary → builder, planner, toolkit)
- [ ] Each category has an SVG icon (Heroicons or similar, not emojis)
- [ ] Each level shows item count in parentheses
- [ ] Sections are collapsible with expand/collapse chevron
- [ ] Current page is highlighted in sidebar
- [ ] Expand parent sections automatically when navigating to nested page
- [ ] Collapse state persists during navigation (not across sessions)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-003: Mobile Sidebar with Hamburger Menu

**Description:** As a mobile user, I want to access the reference navigation via a hamburger menu so I can navigate on small screens.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Sidebar hidden by default on screens < 1024px
- [ ] Hamburger button appears in reference header area on mobile
- [ ] Clicking hamburger opens sidebar as full-height overlay or slide-in panel
- [ ] Clicking outside sidebar or selecting an item closes it
- [ ] Body scroll is locked when sidebar is open
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser (mobile viewport)
- [ ] Works in both light and dark mode

---

### US-004: Update URL Structure to /reference/*

**Description:** As a developer, I want all reference pages under `/reference/*` so the URL structure is clean and consistent.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Move `/agents/primary` → `/reference/agents/primary`
- [ ] Move `/agents/sub` → `/reference/agents/sub`
- [ ] Move `/agents/[slug]` → `/reference/agents/[slug]`
- [ ] Move `/skills` → `/reference/skills`
- [ ] Move `/skills/[slug]` → `/reference/skills/[slug]`
- [ ] Move `/scaffolds` → `/reference/scaffolds`
- [ ] Move `/agent-templates` → `/reference/agent-templates`
- [ ] Move `/mcp` → `/reference/mcp`
- [ ] Move `/automations` → `/reference/automations`
- [ ] Add redirects from old URLs to new URLs (301 permanent)
- [ ] Update all internal links throughout the site
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-005: Create Reference Landing Page

**Description:** As a developer visiting `/reference`, I want to see an overview page that introduces the toolkit structure and provides quick links to each section.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Create `/reference` page with overview content
- [ ] Show cards or sections for each top-level category with counts
- [ ] Include brief description of what each category contains
- [ ] Link to first page of each category
- [ ] Page uses ReferenceLayout with sidebar visible
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-006: Create Individual Agent Detail Pages

**Description:** As a developer, I want individual detail pages for each agent so I can see comprehensive information about a specific agent.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Create dynamic route `/reference/agents/[slug]` for individual agents
- [ ] Display agent name, description, mode (primary/subagent), and category
- [ ] Show full agent prompt content (if available in manifest)
- [ ] Include "Related Agents" section showing agents in same category
- [ ] Breadcrumb navigation (Reference > Agents > Primary > Builder)
- [ ] Previous/Next navigation to adjacent agents
- [ ] Sidebar highlights current agent
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-007: Create Individual Skill Detail Pages

**Description:** As a developer, I want individual detail pages for each skill so I can understand how to use a specific skill.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Create dynamic route `/reference/skills/[slug]` for individual skills
- [ ] Display skill name, description, category, and trigger phrases
- [ ] Show skill path in toolkit
- [ ] Include "Related Skills" section showing skills in same category
- [ ] Breadcrumb navigation (Reference > Skills > Workflow > prd-workflow)
- [ ] Previous/Next navigation to adjacent skills
- [ ] Sidebar highlights current skill
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-008: Update Header Navigation

**Description:** As a user, I want the header to show "Developer Reference" instead of "Reference" so the branding is consistent.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Rename "Reference" to "Developer Reference" in header nav
- [ ] Update dropdown items to use new `/reference/*` URLs
- [ ] Keep dropdown structure but update descriptions if needed
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-009: Update Footer Navigation

**Description:** As a user, I want the footer links updated to match the new Developer Reference structure.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Rename "Reference" section to "Developer Reference" in footer
- [ ] Update all links to use new `/reference/*` URLs
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-010: Build Sidebar Navigation Data from Manifest

**Description:** As a developer, I need the sidebar navigation to be generated from the toolkit manifest so it stays in sync with the toolkit structure automatically.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Create utility function to transform `toolkit-structure.json` into sidebar nav structure
- [ ] Agents grouped by category (primary, implementation, testing, critics, operational)
- [ ] Skills grouped by category (workflow, content, project, meta, utilities)
- [ ] Scaffolds, Agent Templates, MCP, Automations as flat lists under their categories
- [ ] Include counts at each level
- [ ] Navigation regenerates on each build (not runtime)
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-011: Add Search Within Reference Section

**Description:** As a developer, I want to quickly search/filter within the reference sidebar so I can find items without expanding every section.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Add search input at top of sidebar
- [ ] Search indexes: name (weight: 1.0), description (weight: 0.5), category (weight: 0.3)
- [ ] As user types, sidebar filters to show matching items
- [ ] Matching items show with their parent category/subcategory path preserved
- [ ] Non-matching categories collapse; matching categories auto-expand
- [ ] If match is in description but not name, show a subtle indicator (e.g., "..." or description snippet)
- [ ] Results sorted by relevance score (name matches rank higher than description matches)
- [ ] Minimum 2 characters to trigger search
- [ ] Highlight matching text in item names
- [ ] Clear button (×) to reset filter and restore full sidebar
- [ ] Keyboard shortcut `/` focuses search when in reference section
- [ ] Empty state message when no results found
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-012: Add Copy Link Button to Detail Pages

**Description:** As a developer, I want to copy a direct link to the current reference page so I can easily share it with teammates.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Add "Copy link" button in detail page header (near title or breadcrumbs)
- [ ] Button uses link/chain icon (e.g., `LinkIcon` from Heroicons)
- [ ] Clicking copies full URL to clipboard
- [ ] Show brief confirmation feedback (e.g., tooltip changes to "Copied!" for 2 seconds)
- [ ] Works with browser's clipboard API
- [ ] Graceful fallback if clipboard API unavailable (e.g., select text in prompt)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-013: Add View Source Link to Detail Pages

**Description:** As a developer, I want to view the source file on GitHub for any agent or skill so I can see the full implementation.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Add "View source" link in detail page header
- [ ] Link uses GitHub icon or external link icon
- [ ] For agents: link to `agents/[name].md` in yo-go repo
- [ ] For skills: link to `skills/[name]/SKILL.md` in yo-go repo
- [ ] For scaffolds: link to `scaffolds/[name]/` directory
- [ ] For agent templates: link to `agent-templates/[category]/[name].md`
- [ ] Link opens in new tab (`target="_blank"` with `rel="noopener noreferrer"`)
- [ ] Use repo URL from toolkit manifest or config
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

## Functional Requirements

- FR-1: The Reference section must display a persistent left sidebar on all `/reference/*` pages
- FR-2: The sidebar must show a 3-level collapsible hierarchy derived from the toolkit manifest
- FR-3: The sidebar must display SVG icons (not emojis) for each top-level category
- FR-4: Each toolkit item (agent, skill, etc.) must have its own detail page at `/reference/[type]/[slug]`
- FR-5: Old URLs (`/agents/*`, `/skills/*`, etc.) must redirect to new `/reference/*` URLs with 301 status
- FR-6: The sidebar must be responsive, using a hamburger menu on mobile
- FR-7: The sidebar must highlight the current page and auto-expand parent sections
- FR-8: The sidebar must include weighted search (name > description > category) with smart filtering
- FR-9: All navigation data must be derived from the toolkit manifest at build time
- FR-10: Detail pages must include "Copy link" button for easy sharing
- FR-11: Detail pages must include "View source" link to the GitHub file

## Non-Goals

- No runtime API calls for navigation data (build-time only)
- No user customization of sidebar (pinning, reordering)
- No cross-section search (global search already exists in header)
- No versioning of reference content (single latest version)
- No comments or user feedback on reference pages

## Design Considerations

- Match existing site design language (neutral colors, clean typography)
- Sidebar width: 280px on desktop (similar to Tailwind/Stripe docs)
- Use existing components where possible (cards, badges, code blocks)
- Collapsible sections use subtle animations (150ms ease)
- Active item styling: blue accent color with light background
- Category icons: Use Heroicons or similar SVG icons (not emojis) for each category
- Icon suggestions:
  - Agents: `UserGroupIcon` or `CpuChipIcon`
  - Skills: `WrenchScrewdriverIcon` or `SparklesIcon`
  - Scaffolds: `Square3Stack3DIcon` or `CubeIcon`
  - Agent Templates: `DocumentDuplicateIcon`
  - MCP Servers: `ServerIcon`
  - Automations: `BoltIcon` or `PlayIcon`

## Technical Considerations

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4 with dark mode support
- **Data Source:** `src/data/toolkit-structure.json` (generated at build time)
- **Layout:** Use Next.js nested layouts with shared `ReferenceLayout`
- **Routing:** Dynamic routes with `generateStaticParams` for static generation
- **Redirects:** Configure in `next.config.js` for old → new URL mapping
- **State:** Collapse state managed with React useState (ephemeral)

## Success Metrics

- Developer can navigate from landing to any specific agent in ≤3 clicks
- Sidebar filter finds target item in <500ms
- All old URLs properly redirect (no 404s)
- Mobile navigation is discoverable and functional
- Page load performance is not degraded (same or better Lighthouse scores)

## Definition of Done

Implementation is complete when:

1. All user stories (US-001 through US-013) pass their acceptance criteria
2. All reference pages render with the sidebar layout
3. Sidebar displays SVG icons for each category
4. Old URLs redirect to new URLs with 301 status
5. Header and footer navigation updated
6. Sidebar navigation generated from toolkit manifest
7. Mobile hamburger menu functional
8. Weighted search/filter in sidebar functional
9. Copy link button works on all detail pages
10. View source links point to correct GitHub files
11. All pages work in light and dark mode
12. Typecheck, lint, and build pass
13. Manual browser verification on desktop and mobile viewports

## Open Questions

None — all questions resolved.

## Credential & Service Access Plan

No external credentials required for this PRD.
