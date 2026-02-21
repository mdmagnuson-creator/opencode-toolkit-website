# PRD: Toolkit Documentation Sync Update

## Introduction

The AI toolkit has evolved significantly since the website was last updated. This PRD documents all the changes needed to bring the website into alignment with the current toolkit state, with particular focus on the testing system which has grown into a comprehensive, multi-agent architecture.

The website uses a build-time sync mechanism (`scripts/extract-toolkit-data.ts`) that generates `src/data/toolkit-manifest.json`. While the raw data is synced, the website's explanatory content, concepts pages, and documentation need to be updated to properly explain how these systems work together.

## Goals

- Update all website content to accurately reflect the current toolkit state
- Document the testing system architecture (10 agents, 2 skills, 3 operational modes)
- Explain the E2E quality patterns for catching issues beyond correctness
- Document the QA adversarial testing system with browser-use CLI
- Add new concepts for test flow automation and mutation testing requirements
- Ensure the testers category page properly explains the testing hierarchy

## User Stories

### US-001: Update Testing Architecture Overview

**Description:** As a visitor, I want to understand how the testing system is organized so I can use the right agent for my testing needs.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Create a "Testing System" section on the concepts page explaining the architecture
- [ ] Document the three tester modes: Story Mode, Ad-hoc Mode, Full Suite Mode
- [ ] Show the hierarchy: tester orchestrator → specialist testers → QA system
- [ ] Include a visual diagram or structured list showing agent relationships
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-002: Document Tester Orchestrator Agent

**Description:** As a visitor, I want to understand how the tester orchestrator works so I know when and how tests are automatically generated.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Add detailed documentation for the `tester` agent on the agents page
- [ ] Explain the three operational modes with examples:
  - Story Mode: During PRD implementation
  - Ad-hoc Mode: For direct requests
  - Full Suite Mode: Comprehensive test generation
- [ ] Document the routing logic to specialist testers (jest-tester, react-tester, go-tester)
- [ ] Explain test loop handling (max 3 attempts, then defer)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-003: Document Unit Test Specialists

**Description:** As a visitor, I want to understand the specialist testing agents so I know which one handles my stack.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Document `jest-tester`: Backend JavaScript/TypeScript testing
- [ ] Document `react-tester`: React component testing with React Testing Library
- [ ] Document `go-tester`: Go testing with testify and httptest
- [ ] Explain how projects can override global testers with project-specific versions
- [ ] Show the file patterns each specialist handles
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-004: Document E2E Testing Agents

**Description:** As a visitor, I want to understand the E2E testing system so I can use it effectively for UI testing.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Document `e2e-playwright`: Writes Playwright E2E tests for UI areas
- [ ] Document `e2e-reviewer`: Reviews UI changes and identifies areas needing E2E tests
- [ ] Document `playwright-dev`: Implements Playwright test automation tasks
- [ ] Document `e2e-tester`: Primary agent for running full E2E test suites
- [ ] Explain the workflow: reviewer identifies areas → playwright writes tests → tester runs them
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-005: Document QA Adversarial Testing System

**Description:** As a visitor, I want to understand the QA system so I can use it to find bugs through exploratory testing.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Document `qa` coordinator agent and its dispatch mechanism
- [ ] Document `qa-explorer`: Adversarial testing with browser-use CLI
- [ ] Document `qa-browser-tester`: Converting bug findings into Playwright tests
- [ ] Explain the flow: qa coordinates → explorer finds bugs → browser-tester creates regression tests
- [ ] Mention the browser-use CLI dependency and how it enables autonomous browsing
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-006: Document E2E Quality Patterns Skill

**Description:** As a visitor, I want to understand the E2E quality patterns so I can catch issues beyond basic correctness.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Add the `e2e-quality` skill to the skills documentation
- [ ] Document each pattern with examples:
  - `assertNeverAppears`: Verify elements never flash/flicker
  - `withPerformanceBudget`: Enforce performance constraints
  - `assertNoLayoutShift`: Prevent CLS issues
  - `assertStableRender`: Verify no intermediate bad states
  - `measureCLS`: Cumulative Layout Shift measurement
  - `assertStateStability`: Verify state doesn't regress
  - `expectMutualExclusivity`: States that can't coexist
- [ ] Explain when to use quality patterns vs basic assertions
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-007: Document Test Flow Skill

**Description:** As a visitor, I want to understand the test flow automation so I know how tests are generated and managed during development.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Add the `test-flow` skill to the skills documentation
- [ ] Document the automatic test generation triggers
- [ ] Explain the fix loop mechanism (attempt fixes up to 3 times)
- [ ] Document E2E deferral when tests can't be fixed immediately
- [ ] Show how test flow integrates with the tester agent
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-008: Add Mutation Testing Requirements Concept

**Description:** As a visitor, I want to understand the mutation testing requirements so I write tests that properly verify state changes.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Add a "Mutation Testing" concept explaining the 3-step pattern
- [ ] Document the three verification stages:
  1. Immediate state: Assert right after the action
  2. Stable state: Assert after any async operations settle
  3. Persistence: Assert after page reload or re-fetch
- [ ] Provide code examples showing the pattern
- [ ] Explain why each stage is necessary
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-009: Update Testers Category Page

**Description:** As a visitor, I want the testers category page to accurately reflect all 10 testing agents with their relationships.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Verify all 10 testers are listed with accurate descriptions
- [ ] Group testers by function: Orchestrator, Unit Specialists, E2E, QA
- [ ] Update category description to explain the testing system hierarchy
- [ ] Add cross-references between related agents (e.g., tester → jest-tester)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-010: Update Concepts Navigation

**Description:** As a visitor, I want to easily navigate to testing-related concepts from the main concepts page.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Add "Testing" section to concepts page with links to:
  - Testing Architecture Overview
  - E2E Quality Patterns
  - Test Flow Automation
  - Mutation Testing Requirements
- [ ] Ensure consistent navigation structure with other concept sections
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-011: Verify Build-Time Sync Accuracy

**Description:** As a developer, I want to verify the build-time sync correctly extracts all testing agents and skills.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Run `npm run sync` and verify toolkit-manifest.json contains all 10 testers
- [ ] Verify both testing skills (test-flow, e2e-quality) are extracted
- [ ] Check that agent descriptions match current agent files
- [ ] Fix any discrepancies in the extraction script
- [ ] Typecheck passes
- [ ] Lint passes

## Functional Requirements

- FR-1: The concepts page must include a "Testing System" section with architecture overview
- FR-2: Each of the 10 testing agents must have accurate documentation
- FR-3: The E2E quality patterns must be documented with code examples
- FR-4: The test flow automation must be explained with the fix loop mechanism
- FR-5: The mutation testing 3-step pattern must be documented with examples
- FR-6: The testers category must show agent relationships and hierarchy
- FR-7: Navigation must allow easy discovery of testing-related content
- FR-8: Build-time sync must accurately extract all testing agents and skills

## Non-Goals

- No new build-time sync features (just verify existing works correctly)
- No interactive testing demos or playgrounds
- No changes to the toolkit itself (documentation only)
- No real-time sync (continue using build-time approach)

## Design Considerations

- Follow existing website styling patterns (Tailwind v4, dark mode support)
- Use existing component library for cards, code blocks, navigation
- Consider using diagrams or structured lists for agent hierarchy visualization
- Maintain consistent information architecture with other agent categories

## Technical Considerations

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind v4 with dark mode (class strategy)
- **Data Source:** `~/.config/opencode` via build-time sync
- **Generated Data:** `src/data/toolkit-manifest.json`
- Update paths:
  - `src/app/concepts/page.tsx` - Add testing concepts
  - `src/app/agents/sub/page.tsx` - Update testers category
  - May need new concept pages in `src/app/concepts/testing/`

## Success Metrics

- All 10 testing agents documented with accurate descriptions
- Both testing skills (test-flow, e2e-quality) documented with examples
- Testing architecture clearly explained with hierarchy
- E2E quality patterns documented with code examples
- Visitors can understand how to use the testing system within 5 minutes

## Open Questions

- Should testing concepts be a separate top-level section or nested under concepts?
- Should we add a "Getting Started with Testing" quick-start guide?
- Should agent detail pages link to the actual agent source files in the toolkit?
