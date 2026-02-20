# PRD: Comprehensive Documentation Site with Auto-Sync

## Introduction

Transform the toolkit website from a simple landing page into a comprehensive educational resource that explains the entire AI toolkit system. The site should help people understand *how* agentic AI development works — from technical developers to non-technical stakeholders. 

The site will automatically stay in sync with the ai-toolkit GitHub repository, regenerating whenever the toolkit is updated so agent counts, skill lists, and content are always current.

**Core insight:** People need to *understand* the system to believe in it. Seeing isn't enough — you have to grok how the pieces connect.

## Goals

- Educate technical and non-technical audiences on how agentic AI development works
- Explain the interconnected nature of agents, skills, scaffolds, templates, and workflows
- Provide complete reference documentation for every agent and skill (auto-generated)
- Keep the site automatically synchronized with the ai-toolkit repo
- Make the content accessible without dumbing it down — respect the reader's intelligence
- Render agent/skill markdown beautifully (not as code blocks)

## User Stories

### US-001: Cross-repo build trigger

**Description:** As a toolkit maintainer, I want the website to automatically rebuild when I push to the ai-toolkit repo, so the documentation is always current.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] GitHub Action in ai-toolkit repo triggers `repository_dispatch` to toolkit-website repo on push to main
- [ ] Website repo has workflow that responds to `repository_dispatch` event
- [ ] Trigger includes commit SHA for traceability
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-002: Build-time data extraction

**Description:** As a developer, I need the build process to clone the ai-toolkit repo and extract structured data from all agents, skills, scaffolds, and templates.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Build script clones ai-toolkit repo (or uses GitHub API)
- [ ] Parses all agent markdown files, extracts: name, description, category, full content
- [ ] Parses all skill markdown files, extracts: name, description, triggers, full content
- [ ] Parses scaffolds and templates directories
- [ ] Generates `src/data/toolkit-manifest.json` with structured data
- [ ] Counts are accurate (currently ~57 agents, ~17 skills)
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-003: Landing page redesign

**Description:** As a visitor, I want the landing page to immediately convey what agentic AI development is and why it matters, so I'm motivated to learn more.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Hero communicates the core value proposition clearly
- [ ] "What is this?" section explains agentic AI for newcomers
- [ ] Visual overview shows how the pieces connect (agents → skills → projects)
- [ ] Clear navigation to deeper content
- [ ] Stats/counts are pulled from generated manifest (not hardcoded)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-004: Concepts section - The Big Picture

**Description:** As someone new to the toolkit, I want a conceptual overview that explains how all the pieces fit together, so I understand the mental model before diving into specifics.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/concepts` page with overview of the system architecture
- [ ] Explains: agents, skills, scaffolds, templates, project.json, PRDs, multi-session coordination
- [ ] Visual diagrams showing relationships between concepts
- [ ] Written for technical people who may not write code
- [ ] Links to detailed pages for each concept
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-005: Concepts - Understanding Agents

**Description:** As a learner, I want to understand what agents are, how they work, and how they communicate with each other.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/concepts/agents` page explaining the agent model
- [ ] Covers: primary vs sub-agents, how agents are invoked, agent communication via files
- [ ] Explains the delegation pattern (builder → ralph → critics)
- [ ] Shows real examples from the toolkit
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-006: Concepts - Understanding Skills

**Description:** As a learner, I want to understand what skills are and how they differ from agents.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/concepts/skills` page explaining the skill model
- [ ] Covers: skills vs agents, when skills are loaded, skill triggers
- [ ] Explains meta-skills that generate project-specific skills
- [ ] Shows real examples from the toolkit
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-007: Concepts - Project Setup

**Description:** As a learner, I want to understand how projects are configured for the agent system.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/concepts/projects` page explaining project configuration
- [ ] Covers: project.json structure, docs/ directory layout, conventions
- [ ] Explains: PRD registry, session locks, quality gates
- [ ] Shows example project.json with annotations
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-008: Concepts - The Workflow Loop

**Description:** As a learner, I want to understand the typical development workflow with agents.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/concepts/workflow` page explaining the build-review-ship loop
- [ ] Covers: PRD creation → story implementation → review → testing → commit
- [ ] Explains multi-session coordination (planner + builder sessions)
- [ ] Visual flowchart of the workflow
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-009: Agent reference index page

**Description:** As a user, I want to browse all available agents in a searchable, categorized list.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/agents` page listing all agents from the manifest
- [ ] Agents grouped by category (Primary, Critics, Developers, Testers, etc.)
- [ ] Search/filter functionality
- [ ] Each agent shows: name, short description, category badge
- [ ] Click through to individual agent pages
- [ ] Agent count displayed and accurate
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-010: Individual agent detail pages

**Description:** As a user, I want to read the full documentation for any agent, rendered as rich content.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/agents/[slug]` dynamic pages for each agent
- [ ] Full agent markdown content rendered as rich HTML (not code block)
- [ ] Proper heading hierarchy, code syntax highlighting, lists, tables
- [ ] Navigation back to agent index
- [ ] "Related agents" section if applicable
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-011: Skills reference index page

**Description:** As a user, I want to browse all available skills in a searchable list.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/skills` page listing all skills from the manifest
- [ ] Skills grouped by type (Core skills vs Meta-skills)
- [ ] Search/filter functionality
- [ ] Each skill shows: name, description, trigger phrases
- [ ] Click through to individual skill pages
- [ ] Skill count displayed and accurate
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-012: Individual skill detail pages

**Description:** As a user, I want to read the full documentation for any skill, rendered as rich content.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/skills/[slug]` dynamic pages for each skill
- [ ] Full skill markdown content rendered as rich HTML (not code block)
- [ ] Proper heading hierarchy, code syntax highlighting, lists, tables
- [ ] Navigation back to skills index
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-013: Scaffolds reference page

**Description:** As a user, I want to see available project scaffolds and what stack they provide.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/scaffolds` page listing all scaffolds
- [ ] Each scaffold shows: name, description, included stack (languages, frameworks, etc.)
- [ ] Links to scaffold source on GitHub
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-014: Getting started guide

**Description:** As a new user, I want a clear step-by-step guide to set up and start using the toolkit.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/getting-started` page with installation instructions
- [ ] Prerequisites clearly listed
- [ ] Step-by-step with code snippets
- [ ] "First project" walkthrough
- [ ] Links to relevant concept pages for deeper understanding
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-015: Site navigation

**Description:** As a user, I want consistent navigation so I can easily move between sections.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Header navigation with dropdowns for Concepts, Agents, Skills, etc.
- [ ] Mobile-responsive navigation (hamburger menu)
- [ ] Breadcrumbs on interior pages
- [ ] Footer with quick links
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-016: Search functionality

**Description:** As a user, I want to search across all content to find what I need quickly.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Search input in header
- [ ] Searches agent names, skill names, and page content
- [ ] Results show relevant matches with context snippets
- [ ] Keyboard shortcut to open search (Cmd+K / Ctrl+K)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-017: MCP Server documentation

**Description:** As a user, I want to understand the MCP server component and how to set it up for semantic code search.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/mcp` page explaining what the MCP server is
- [ ] Covers: what MCP (Model Context Protocol) is, available tools (code_search)
- [ ] Setup instructions: building, running, configuration
- [ ] OAuth/authentication setup guide
- [ ] Integration examples (Claude Desktop config)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-018: Automations documentation

**Description:** As a user, I want to understand the GitHub Actions automations I can add to my repos.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/automations` page listing available automations
- [ ] Documents: triage (CI failure analysis), prd (PRD generation), release-notes
- [ ] Each automation shows: purpose, how to add to your repo, configuration options
- [ ] Example workflow YAML snippets
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-019: Agent templates documentation

**Description:** As a user, I want to understand how agent templates work and how to create project-specific agents.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/agent-templates` page explaining the template system
- [ ] Lists available templates by category (backend, frontend, testing, etc.)
- [ ] Explains: when to use templates, how project-specific agents are generated
- [ ] Shows example of template → generated agent transformation
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-020: Changelog / Recent updates

**Description:** As a user, I want to see recent changes to the toolkit so I know what's new.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `/changelog` page showing recent toolkit updates
- [ ] Pulls recent commits from ai-toolkit repo (last 20-30)
- [ ] Groups by date, shows commit message and affected files summary
- [ ] Highlights significant changes (new agents, new skills)
- [ ] Auto-updated on each build
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-021: Update data extraction for new content types

**Description:** As a developer, I need the build process to also extract MCP, automations, agent-templates, and git history data.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Extracts MCP README and tool definitions
- [ ] Extracts automation markdown files (triage.md, prd.md, etc.)
- [ ] Extracts agent-template files by category
- [ ] Fetches recent git commits for changelog
- [ ] All new data included in toolkit-manifest.json
- [ ] Typecheck passes
- [ ] Lint passes

## Functional Requirements

- FR-1: ai-toolkit repo must trigger website rebuild on push to main via `repository_dispatch`
- FR-2: Build process must clone/fetch ai-toolkit and extract all agent/skill/scaffold/mcp/automation/template data
- FR-3: All counts (agent count, skill count) must be derived from data, not hardcoded
- FR-4: Agent and skill markdown must be rendered as rich HTML with proper formatting
- FR-5: Site must be fully navigable with clear information architecture
- FR-6: All pages must support dark mode
- FR-7: Site must be statically exported for GitHub Pages deployment
- FR-8: Changelog must be auto-generated from git history on each build
- FR-9: MCP server documentation must include setup and integration instructions
- FR-10: Automations must include example workflow YAML for easy adoption

## Non-Goals

- No user authentication or accounts
- No interactive agent execution (can't run agents from the site)
- No commenting or discussion features
- No versioning of toolkit documentation (always shows latest main)
- No automated PR creation for toolkit updates

## Design Considerations

- Reuse existing neutral color palette and Tailwind styling
- Typography should prioritize readability for long-form content
- Code blocks need syntax highlighting
- Diagrams should be simple and clear (consider using SVG or React components)
- Mobile-first responsive design

## Technical Considerations

- **Framework:** Next.js with App Router
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages (static export)
- **Data:** Generated at build time from ai-toolkit repo
- **Markdown rendering:** Use remark/rehype or similar for rich rendering
- **Search:** Client-side search (Fuse.js or similar) since it's static

### Cross-Repo Workflow Architecture

```
ai-toolkit repo (on push to main)
    │
    ├── .github/workflows/notify-website.yml
    │   └── Sends repository_dispatch to toolkit-website
    │
    ▼
toolkit-website repo
    │
    ├── .github/workflows/deploy.yml
    │   ├── Triggered by: push to main OR repository_dispatch
    │   ├── Clones ai-toolkit repo
    │   ├── Runs data extraction script
    │   ├── Builds Next.js static site
    │   └── Deploys to GitHub Pages
    │
    └── scripts/extract-toolkit-data.ts
        └── Generates src/data/toolkit-manifest.json
```

## Success Metrics

- Visitors can understand what agentic AI is within 2 minutes of landing
- All agent/skill content is accessible and rendered properly
- Site rebuilds within 5 minutes of toolkit repo push
- Page load time under 2 seconds
- Zero hardcoded counts that drift from reality

## Open Questions

None — all questions resolved during planning.
