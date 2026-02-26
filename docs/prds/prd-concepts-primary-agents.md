# PRD: Concepts Page - Primary Agents Sections

## Overview

Enhance the `/concepts` page to clearly explain how a person works with the AI toolkit through dedicated sections for each of the three primary agents: Planner, Builder, and Toolkit. The goal is to make it immediately clear what each agent does, how the user interacts with it, and how the agents interact with each other.

## Problem Statement

The current `/concepts` page provides a good system architecture overview but doesn't clearly explain the practical workflow from the user's perspective. While there is a "Human in the Loop" page that covers this in detail, the main concepts page should give visitors an immediate understanding of:

1. **What each primary agent does** - Clear, distinct responsibilities
2. **How you interact with each one** - Practical invocation and conversation patterns
3. **How they work together** - The handoff and coordination model

## Design Decisions

- **Content depth**: Keep it concise with summary cards. Link to "Human in the Loop", "The Agent Loop", and relevant primary agent detail pages for deeper information
- **Agent workflow visualization**: Use a numbered list workflow instead of a diagram (clearer and more accessible)
- **Page placement**: New section placed between "How It All Works Together" and "Explore Each Concept"

## User Stories

### US-001: Primary Agents Overview Section
**As a** visitor to the concepts page  
**I want to** see a clear visual section explaining the three primary agents  
**So that** I understand the distinct roles before diving into details

**Acceptance Criteria:**
- [ ] Section appears between "How It All Works Together" and "Explore Each Concept"
- [ ] Section title: "Working with the Primary Agents"
- [ ] Brief intro paragraph explaining these are your entry points to the system
- [ ] Uses a three-column layout (responsive to single column on mobile)
- [ ] Each agent card shows: icon, name, one-sentence purpose, and 3-4 bullet points of responsibilities
- [ ] Visual distinction between agents using existing color scheme:
  - Planner: violet
  - Builder: blue  
  - Toolkit: amber
- [ ] Each card links to relevant detail page

### US-002: Planner Agent Card
**As a** visitor to the concepts page  
**I want to** understand what Planner does at a glance  
**So that** I know when to use it

**Acceptance Criteria:**
- [ ] Card title: "Planner"
- [ ] One-liner: "Turn ideas into implementation-ready PRDs"
- [ ] Bullet points (3-4):
  - Creates and refines PRDs with user stories
  - Asks clarifying questions to tighten scope
  - Defines acceptance criteria
  - Never writes code—planning only
- [ ] "How you use it" snippet: `@planner I want to add [feature]...`
- [ ] Link to `/concepts/the-human-in-the-loop#planner` for details
- [ ] Uses violet color scheme

### US-003: Builder Agent Card
**As a** visitor to the concepts page  
**I want to** understand what Builder does at a glance  
**So that** I know when to use it

**Acceptance Criteria:**
- [ ] Card title: "Builder"
- [ ] One-liner: "Execute PRDs and handle ad-hoc tasks"
- [ ] Bullet points (3-4):
  - Implements user stories from PRDs
  - Delegates to specialist sub-agents
  - Runs quality gates and commits code
  - Handles quick fixes without PRDs
- [ ] "How you use it" snippet: `@builder Implement the PRD` or `@builder Fix the login bug`
- [ ] Link to `/concepts/the-human-in-the-loop#builder` for details
- [ ] Uses blue color scheme

### US-004: Toolkit Agent Card
**As a** visitor to the concepts page  
**I want to** understand what Toolkit does at a glance  
**So that** I know when to use it

**Acceptance Criteria:**
- [ ] Card title: "Toolkit"
- [ ] One-liner: "Evolve the agent system itself"
- [ ] Bullet points (3-4):
  - Processes pending updates from agents
  - Creates and modifies agents, skills, scaffolds
  - Maintains toolkit-wide consistency
  - Used less frequently than Planner/Builder
- [ ] "How you use it" snippet: `@toolkit Review pending updates`
- [ ] Link to `/concepts/the-human-in-the-loop#toolkit` for details
- [ ] Uses amber color scheme

### US-005: Agent Workflow List
**As a** visitor to the concepts page  
**I want to** understand how the agents work together  
**So that** I understand the coordination model

**Acceptance Criteria:**
- [ ] Appears below the three agent cards
- [ ] Title: "How They Work Together"
- [ ] Numbered list showing typical workflow:
  1. **Plan** — Start with `@planner` to create a PRD with user stories
  2. **Build** — Hand the ready PRD to `@builder` for implementation  
  3. **Improve** — Agents discover gaps and queue updates for `@toolkit`
  4. **Repeat** — Better agents lead to better planning and building
- [ ] Brief note: "This is the Agent Loop. Each phase has clear ownership between you and the agents."
- [ ] Link to `/concepts/workflow` (The Agent Loop page) for the full breakdown

### US-006: Quick Reference Table
**As a** visitor to the concepts page  
**I want to** see a quick reference comparing when to use each agent  
**So that** I can quickly decide which agent to invoke

**Acceptance Criteria:**
- [ ] Appears below the workflow list
- [ ] Title: "Which Agent Should I Use?"
- [ ] Table with columns: Scenario | Agent | Why
- [ ] Rows:
  - "New multi-story feature" → Planner → "Needs requirements before code"
  - "Quick bug fix" → Builder → "Scope is clear, just implement"
  - "Implement a ready PRD" → Builder → "Planning done, time to execute"
  - "Refine unclear requirements" → Planner → "Need to explore before building"
  - "Improve an agent's behavior" → Toolkit → "Meta-level toolkit change"
- [ ] Styled consistently with existing tables on the site
- [ ] Link to "Human in the Loop" page for more decision guidance

## Definition of Done

- [ ] All acceptance criteria for US-001 through US-006 are met
- [ ] New section integrates visually with existing page design
- [ ] Page remains responsive on mobile devices
- [ ] Dark mode styling is correct for all new elements
- [ ] All links work correctly:
  - `/concepts/the-human-in-the-loop#planner`
  - `/concepts/the-human-in-the-loop#builder`
  - `/concepts/the-human-in-the-loop#toolkit`
  - `/concepts/workflow`
- [ ] No regressions in existing functionality
- [ ] Lighthouse accessibility score maintains 90+

## Scope

### In Scope
- Adding new "Working with the Primary Agents" section to `/concepts` page
- Three agent cards with concise information
- Numbered workflow list
- Quick reference decision table
- Links to existing detailed pages

### Out of Scope
- Changes to other pages (Human in the Loop, Agents, Workflow, etc.)
- Adding new sub-pages
- Complex diagrams or animations
- Backend or API changes (static content only)

## Non-Goals
- This PRD does not aim to replace the "Human in the Loop" page—it provides a quick overview that links there for details
- Not adding interactive demos or animations beyond CSS transitions
- Not restructuring the entire concepts section

## Technical Notes
- Build on existing component patterns from the page
- Use Tailwind CSS with existing color palette (violet/blue/amber)
- Follow existing card styling patterns from the page
- No new dependencies required
- Single file modification: `src/app/concepts/page.tsx`

## Credential & Service Access Plan
No external credentials required for this PRD.

## Related Files
- `src/app/concepts/page.tsx` — Main file to modify
- `src/app/concepts/the-human-in-the-loop/page.tsx` — Reference for content and link targets
- `src/app/concepts/workflow/page.tsx` — Link target for Agent Loop
