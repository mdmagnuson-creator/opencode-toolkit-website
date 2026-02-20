# PRD: Landing Page

## Introduction

Create a single-page marketing website that explains the AI Toolkit system at a high level. The site targets novices to agentic loops and opencode, giving them a clear overview of what the toolkit offers and how to get started. Visitors who want more details are directed to the GitHub repository.

The design should be minimal and honest — clean typography, content-focused, no marketing fluff.

## Goals

- Explain what the AI Toolkit is and why it matters
- Showcase the scope of the system (agents, skills, categories with counts)
- Provide clear getting started instructions
- Drive visitors to the GitHub repo for deeper exploration
- Work beautifully in both light and dark mode

## User Stories

### US-001: Hero Section

**Description:** As a visitor, I want to immediately understand what the AI Toolkit is so I can decide if it's relevant to me.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Headline: "An Agent System for opencode"
- [ ] Subheadline: Brief description (e.g., "57 specialized agents working together to build software")
- [ ] Primary CTA button links to Getting Started section
- [ ] Secondary CTA links to GitHub repo (placeholder URL)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-002: What Is It Section

**Description:** As a novice to agentic loops, I want a simple explanation of what the toolkit does so I understand the concept before diving into details.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Brief explanation of agentic loops / AI agents concept
- [ ] Explains how the toolkit organizes agents for different tasks
- [ ] Uses simple language appropriate for beginners
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-003: Primary Agents Overview

**Description:** As a visitor, I want to see the main agents I'd interact with so I understand the entry points to the system.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Section highlighting the primary/orchestrator agents (e.g., @bildr, @ralph, @planner, @toolkit)
- [ ] Each primary agent has a name and one-line description
- [ ] Visual distinction showing these are the "main" agents
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-004: Agent Categories with Counts

**Description:** As a visitor, I want to see the categories of sub-agents with counts so I understand the breadth of the system.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Display agent categories: Critics (22), Developers (9), Testers (5), Other (21)
- [ ] Each category has a brief description of what those agents do
- [ ] Shows total count: 57 agents
- [ ] Clean card or grid layout
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-005: Skills Overview

**Description:** As a visitor, I want to see what skills are available so I understand the specialized workflows the toolkit supports.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Display skills count: 16 skills
- [ ] Brief explanation of what skills are (specialized workflows agents can load)
- [ ] List skill categories or example skill names
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-006: Getting Started Section

**Description:** As a visitor ready to try the toolkit, I want clear step-by-step instructions so I can get set up quickly.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Step 1: Download opencode UI (link: https://opencode.ai/download)
- [ ] Step 2: Connect GitHub to opencode
- [ ] Step 3: Upgrade GitHub Copilot to Pro Plus for best models
- [ ] Step 4: Run the setup script in opencode to prepare the environment
- [ ] Each step is numbered and clearly explained
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-007: Footer with Repo Link

**Description:** As a visitor, I want a footer with links to the repository so I can explore more.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] GitHub repo link (placeholder URL for now)
- [ ] Clean, minimal footer design
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-008: Responsive Layout

**Description:** As a mobile visitor, I want the page to work well on my phone so I can read about the toolkit anywhere.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] All sections readable on mobile (375px width)
- [ ] Navigation works on mobile if present
- [ ] No horizontal scrolling
- [ ] Touch-friendly tap targets
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser (mobile viewport)
- [ ] Works in both light and dark mode

---

### US-009: Dark Mode Toggle

**Description:** As a visitor, I want to toggle between light and dark mode so I can read comfortably in any lighting.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Toggle button visible in header or floating position
- [ ] Respects system preference on first load
- [ ] Persists preference in localStorage
- [ ] Smooth transition between modes
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-010: Agent Relationship Diagram

**Description:** As a visitor, I want to see a simple diagram showing how primary agents delegate to sub-agents so I understand the system architecture at a glance.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Simple diagram showing primary agents (bildr, ralph, planner, etc.) at top
- [ ] Arrows or lines showing delegation to sub-agent categories (critics, devs, testers)
- [ ] Clean, minimal visual style (not overly complex)
- [ ] Works as SVG or CSS-based (no heavy image files)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-011: Static Export for GitHub Pages

**Description:** As a developer, I need the site to build as static HTML so it can be hosted on GitHub Pages.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `next build` produces static export
- [ ] `next.config.js` configured with `output: 'export'`
- [ ] No server-side features that break static export
- [ ] Build succeeds without errors
- [ ] Typecheck passes
- [ ] Lint passes

## Functional Requirements

- FR-1: Single-page layout with smooth scroll navigation between sections
- FR-2: Hero section with "An Agent System for opencode" headline and two CTA buttons
- FR-3: "What Is It" section explaining agentic loops for beginners
- FR-4: Primary agents section highlighting 4-5 main orchestrator agents
- FR-5: Agent relationship diagram showing delegation from primary to sub-agents
- FR-6: Agent categories grid showing Critics (22), Developers (9), Testers (5), Other (21)
- FR-7: Skills section showing 16 skills with category examples
- FR-8: Getting Started section with 4 numbered steps
- FR-9: Footer with GitHub repo link
- FR-10: Dark mode toggle with system preference detection and persistence
- FR-11: Fully responsive design (mobile-first)
- FR-12: Static export compatible with GitHub Pages

## Non-Goals

- No individual agent detail pages (visitors go to repo for that)
- No search or filtering functionality
- No authentication or user accounts
- No blog or changelog
- No interactive demos or embedded terminals
- No database or CMS

## Design Considerations

- **Style:** Minimal and honest — no marketing fluff
- **Typography:** Clean, readable, developer-friendly
- **Colors:** Muted palette that works well in both light and dark mode
- **Sections:** Clear visual separation between sections
- **Inspiration:** Tailwind docs, Stripe docs — content-first, subtle design

## Technical Considerations

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4 with class-based dark mode
- **Export:** Static HTML for GitHub Pages (`output: 'export'`)
- **No backend:** All content is hardcoded in components

## Success Metrics

- Visitor understands what the toolkit is within 10 seconds of landing
- Getting Started steps are clear enough to follow without external help
- Page loads fast (< 2s on 3G)
- Looks professional and trustworthy

## Open Questions

- What is the exact GitHub repo URL to link to?
