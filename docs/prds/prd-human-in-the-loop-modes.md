# PRD: Human-in-the-Loop Modes

## Introduction

Create a new area called **Human-in-the-Loop Modes** that explains how a person uses the toolkit to accomplish real goals by working with each primary agent. The page should make the system feel practical, not abstract, by showing when to use Planner, Builder, and Toolkit, and how a human moves between them.

This content is aimed at users who understand software workflows but want a clear operating model for day-to-day execution.

## Goals

- Define a dedicated Human-in-the-Loop Modes area in the site information architecture
- Explain how to collaborate with each primary agent in a goal-oriented way
- Provide concrete mode-based flows users can follow immediately
- Reduce confusion about when to switch agents and why
- Keep guidance consistent with current toolkit behavior and terminology

## User Stories

### US-001: Add Human Work Modes concept entry point

**Description:** As a visitor, I want a clear entry point for Human-in-the-Loop Modes so I can discover the workflow guidance from the Concepts section.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Concepts area includes a Human Work Modes entry point
- [ ] Entry has clear title and short explanation of what the area covers
- [ ] Navigation path to the new area is obvious on desktop and mobile
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-002: Document how humans work with Planner

**Description:** As a user, I want Planner guidance so I know how to turn an idea into a refined, implementation-ready PRD.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Human Work Modes includes a Planner section focused on planning responsibilities
- [ ] Section explains draft refinement, clarifying scope, and moving PRDs to ready
- [ ] Section includes practical prompts/examples for starting planning sessions
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-003: Document how humans work with Builder

**Description:** As a user, I want Builder guidance so I can execute ready PRDs and ad-hoc tasks effectively.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Human Work Modes includes a Builder section focused on implementation responsibilities
- [ ] Section explains PRD mode vs ad-hoc mode and when to use each
- [ ] Section explains update flow usage and expected outcomes
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-004: Document how humans work with Toolkit

**Description:** As a toolkit maintainer, I want Toolkit guidance so I can evolve agents, skills, and scaffolds safely.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Human Work Modes includes a Toolkit section focused on toolkit-level changes
- [ ] Section explains when to use Toolkit versus project-level Builder/Planner flows
- [ ] Section covers pending-update handoff flow between toolkit and project repos
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-005: Define end-to-end human operating loops

**Description:** As a user, I want repeatable loops so I can move from idea to shipped change without guessing next steps.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Human Work Modes includes at least two concrete loops (for example: new feature loop, sync update loop)
- [ ] Each loop shows handoff points between Planner, Builder, and Toolkit where relevant
- [ ] Each loop defines clear completion outcomes
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-006: Add actionable quick-start prompts

**Description:** As a user, I want copy-ready prompts so I can start a session with the right agent without trial and error.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Human Work Modes includes copy-ready prompt examples per primary agent
- [ ] Prompts are concise and map to real tasks users perform
- [ ] Prompt examples align with current command/menu patterns in the toolkit docs
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

## Functional Requirements

- FR-1: Introduce Human Work Modes as a discoverable concept area
- FR-2: Include dedicated sections for Planner, Builder, and Toolkit collaboration patterns
- FR-3: Provide practical task loops with explicit handoffs and outcomes
- FR-4: Provide starter prompts users can copy and adapt
- FR-5: Keep terminology aligned with current toolkit docs and primary-agent behavior

## Non-Goals

- No runtime changes to agent behavior
- No changes to CLI command semantics
- No implementation of new agent capabilities in this PRD

## Design Considerations

- Keep the page highly scannable with clear sectioning and strong headings
- Use examples that reflect real tasks users already perform
- Prefer concise, action-oriented language over conceptual jargon

## Technical Considerations

- Framework: Next.js App Router
- Styling: Tailwind CSS v4
- Keep content and navigation consistent with existing Concepts patterns

## Success Metrics

- Users can identify the right primary agent for a task in under 30 seconds
- Users can start a session from provided prompts without clarification
- Reduced confusion about Planner vs Builder vs Toolkit responsibilities

## Open Questions

- None. Initial scope and stories are ready for implementation.
