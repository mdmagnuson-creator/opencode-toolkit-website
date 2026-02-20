# PRD: Homepage Navigation Improvements

## Introduction

The homepage currently uses a different navigation structure than other pages (anchor links vs. site navigation), and sections showing agents/skills don't link to their dedicated pages. This creates a disjointed experience where valuable content is buried in the footer.

This PRD unifies navigation across all pages and adds contextual "View all" links to homepage sections, making it easy for visitors to explore deeper content.

## Goals

- Unify header navigation to be consistent across all pages (including homepage)
- Add "View all →" links to homepage sections that have dedicated pages
- Maintain the homepage's scrollable overview while making deeper content discoverable
- Improve conversion from homepage visitors to page explorers

## User Stories

### US-001: Use site navigation on homepage

**Description:** As a visitor on the homepage, I want to see the same navigation as other pages so I can easily find and navigate to any section of the site.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Homepage header shows site navigation (Concepts dropdown, Reference dropdown, Get Started, Changelog)
- [ ] Homepage no longer shows anchor-only navigation (What is it?, Primary Agents, etc.)
- [ ] Dropdown menus work the same as on other pages
- [ ] Mobile menu shows the same navigation structure
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-002: Add "View all agents" link to Primary Agents section

**Description:** As a visitor viewing Primary Agents, I want a link to browse all agents so I can explore beyond the featured ones.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] "View all agents →" link appears below the primary agents grid
- [ ] Link navigates to /agents page
- [ ] Link styling is consistent with site design (subtle but visible)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-003: Make Specialist Categories cards clickable

**Description:** As a visitor viewing the agent categories (Critics, Developers, Testers, Other), I want to click on a category to see those agents filtered.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Each category card is clickable
- [ ] Clicking navigates to /agents with that category pre-filtered (e.g., /agents?category=critics)
- [ ] Cards show hover state indicating they're clickable
- [ ] "Browse all agents →" link appears below the category grid
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-004: Add "View all skills" link to Skills Overview section

**Description:** As a visitor viewing the skills preview, I want a link to browse all skills so I can explore the full list.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] "View all skills →" link appears below the skills grid (replacing or augmenting "Plus N more" text)
- [ ] Link navigates to /skills page
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-005: Add link to full Getting Started page

**Description:** As a visitor reading the Getting Started section, I want a link to a more detailed guide if I need additional help.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] "Full getting started guide →" link appears at the end of the Getting Started section
- [ ] Link navigates to /getting-started page
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-006: Add "Learn more" link after "What is it?" section

**Description:** As a visitor who just read the "What is an agent system?" explanation, I want a link to deeper conceptual content.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] "Learn more about agents →" link appears at the end of the section
- [ ] Link navigates to /concepts/agents page
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-007: Update Agents page to support category filter from URL

**Description:** As a developer, I need the /agents page to read the category filter from URL params so links from homepage work correctly.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] /agents page reads `?category=critics` (or other category) from URL on load
- [ ] Pre-selects the corresponding category filter
- [ ] Works with direct navigation and client-side navigation
- [ ] Typecheck passes
- [ ] Lint passes

## Functional Requirements

- FR-1: Remove `homeNavigation` array and use `siteNavigation` for all pages
- FR-2: Remove the `isHomePage` conditional that switches navigation
- FR-3: Add "View all →" links to Primary Agents, Specialist Categories, Skills Overview, and Getting Started sections
- FR-4: Make the 4 category cards in Specialist Categories clickable links
- FR-5: Update /agents page to read and apply `category` URL parameter on initial load
- FR-6: Ensure all new links follow existing styling patterns

## Non-Goals

- No changes to the footer (it already has complete navigation)
- No changes to the content of individual sections (only adding links)
- No new pages or sections
- No changes to mobile breakpoints or responsive behavior beyond what's needed for the links

## Design Considerations

- "View all →" links should use a subtle style: `text-sm text-neutral-600 hover:text-neutral-900` with an arrow
- Links should appear at logical endpoints of sections (after grids, after descriptions)
- Category cards should gain cursor-pointer and hover:shadow-md to indicate clickability
- Follow existing link patterns in the codebase

## Technical Considerations

- **Framework:** Next.js with App Router
- **Styling:** Tailwind CSS v4
- The Header component already has both `homeNavigation` and `siteNavigation` defined; simplify to just `siteNavigation`
- Use `useSearchParams` from Next.js for reading URL params on /agents page
- Category filter already exists in state; just need to initialize from URL

## Success Metrics

- Visitors can reach any subpage within 1 click from homepage
- Bounce rate from homepage decreases (visitors explore more pages)
- No confusion about site structure—navigation is consistent everywhere

## Open Questions

- None—scope is clear based on user input

