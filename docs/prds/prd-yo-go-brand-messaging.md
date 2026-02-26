# PRD: yo, go brand messaging refresh

## Introduction

Refresh site messaging to position the product as "yo, go" while preserving the existing visual direction. The updated copy should communicate the "yo" and "go" concept with playful, intuitive language instead of command-style instruction, while allowing small layout adjustments when needed to support the new messaging.

## Goals

- Establish "yo, go" as the only brand phrase across all user-facing pages.
- Convey the user mental model with implicit, fun phrasing rather than explicit command instructions.
- Preserve the current design language while allowing minor layout shifts needed for copy fit.
- Keep messaging balanced between playful brand voice and technical clarity.

## Scope Considerations

- permissions (required): not relevant
  - No role-based or authorization behavior changes are introduced.
- support-docs: relevant
  - User-facing messaging and terminology are changing.
  - Ensure wording stays consistent across primary pages.
- ai-tools: relevant
  - Messaging references agent behavior and execution commands.
  - Clarify whether command terminology should also appear in any AI-tooling explanation sections.

## User Stories

### US-001: define the yo, go messaging framework

**Description:** As a visitor, I want an immediately understandable brand narrative for "yo, go" so that I can grasp the product voice without reading command instructions.

**Documentation:** Yes (update: site messaging pages)

**Tools:** No

**Considerations:** support-docs, ai-tools

**Credentials:** none

**Acceptance Criteria:**

- [ ] A canonical copy framework is defined for "yo, go" with lowercase usage required in all user-facing contexts.
- [ ] The framework defines tone as balanced playful plus technical clarity.
- [ ] The framework avoids imperative command-tutorial phrasing and favors implicit concept framing.
- [ ] Typecheck passes.
- [ ] Lint passes.

### US-002: update homepage and key entry-point messaging

**Description:** As a new user, I want the homepage language to reflect the yo, go concept so that the product purpose feels clearer and more engaging.

**Documentation:** Yes (update: homepage content)

**Tools:** No

**Considerations:** support-docs

**Credentials:** none

**Acceptance Criteria:**

- [ ] Homepage headline/subheadline and supporting copy are updated to the yo, go narrative.
- [ ] Existing design language and component patterns are preserved.
- [ ] Minor layout adjustments are allowed only when needed to improve copy readability or hierarchy.
- [ ] No redesign-level design system or visual theme changes are introduced.
- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Verify in browser.
- [ ] Works in both light and dark mode.

### US-003: align all user-facing pages with yo, go terminology

**Description:** As a returning user, I want consistent terminology across all user-facing pages so that the brand and behavior model feel coherent.

**Documentation:** Yes (update: all user-facing marketing and product-copy pages)

**Tools:** No

**Considerations:** support-docs, ai-tools

**Credentials:** none

**Acceptance Criteria:**

- [ ] Brand and product references use "yo, go" terminology consistently.
- [ ] Navigation labels, section intros, and page-level messaging use consistent yo, go terminology.
- [ ] All user-facing pages in this repository are covered in scope for terminology alignment.
- [ ] Explanations of agent workflow still match actual product behavior.
- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Verify in browser.
- [ ] Works in both light and dark mode.

### US-004: validate copy quality and release readiness

**Description:** As a maintainer, I want a final quality pass on revised messaging so that the site ships with consistent, readable, and intentional tone.

**Documentation:** Yes (update: release notes/changelog entry if used)

**Tools:** No

**Considerations:** support-docs

**Credentials:** none

**Acceptance Criteria:**

- [ ] Revised copy is reviewed for consistency, grammar, and tone.
- [ ] There are no leftover conflicting brand phrases in user-facing pages.
- [ ] Key page metadata/title copy is aligned with yo, go naming where applicable.
- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Verify in browser.
- [ ] Works in both light and dark mode.

## Functional Requirements

- FR-1: User-facing content must frame the "yo, go" concept implicitly, without explicit command-tutorial language.
- FR-2: Homepage messaging must use yo, go terminology while preserving existing visual structure.
- FR-3: All user-facing pages in this repository must use consistent yo, go phrasing.
- FR-4: Existing design direction must be preserved, but minor layout adjustments are allowed when required by content changes.
- FR-5: Updated messaging must remain technically accurate with current product capabilities.
- FR-6: Final content pass must confirm there are no conflicting or legacy brand references in any user-facing page.

## Non-Goals

- No visual redesign, layout overhaul, or component architecture changes.
- No new feature implementation in runtime behavior.
- No authentication, permissions, billing, or backend capability expansion.
- No mandatory SEO strategy rewrite beyond direct naming consistency updates.

## Design Considerations

- Preserve the current website design system, spacing intent, and component usage patterns.
- Limit changes primarily to messaging, labels, and narrative framing.
- Allow minor layout adjustments only when needed to support readability and hierarchy after copy changes.
- Keep copy balanced between playful brand energy and technical clarity for first-time visitors.

## Technical Considerations

- Framework: Next.js App Router with TypeScript and Tailwind.
- Dark mode is enabled; updated copy must be verified in both themes.
- Existing lint and typecheck quality gates must pass.
- Prefer copy/content-source updates over structural refactors.

## Success Metrics

- Visitors can describe the yo, go concept from the homepage narrative without needing explicit command instructions.
- Brand references are consistent across all user-facing pages in scope.
- Messaging update ships with no regressions in build quality gates.

## Open Questions

- None.

## Credential & Service Access Plan

No external credentials required for this PRD.

## Definition of Done

- All in-scope stories (US-001 through US-004) are implemented and accepted.
- yo, go messaging is consistent across all user-facing pages in this repository.
- No redesign-level visual changes are introduced, and any layout adjustments remain minor and content-driven.
- Acceptance criteria for typecheck, lint, and browser verification are satisfied.
- Light and dark mode checks confirm copy remains legible and visually aligned.
- Any required user-facing documentation updates for changed messaging are completed.
