# PRD: Memo Page

## Introduction

Create a `/memo` page that presents a manifesto on the future of software development and AI agents. This page contextualizes why AI toolkits exist now — and why that window may close.

The memo argues that the world has shifted from knowledge-constrained to context-constrained, and traces the trajectory toward a future where software as we know it dissolves entirely.

## Goals

- Create a compelling `/memo` page as a manifesto on AI and software
- Present the content in a readable, long-form essay format with observational voice (minimal "I" or "we")
- Include a publication date
- Match the existing site design language (clean, minimal, professional)
- Support both light and dark mode
- Add the page to header and footer navigation

## User Stories

### US-001: Create Memo Page Layout

**Description:** As a visitor, I want to read the memo in a clean, focused layout so I can absorb the ideas without distraction.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Create `/memo` route with page component
- [ ] Use centered content layout with max-width for readability (similar to concepts pages)
- [ ] Include Breadcrumbs component at top
- [ ] Hero section with title "Memo" (no subtitle, just the title)
- [ ] Display publication date below title (format: "February 2026")
- [ ] Main content area with prose styling for long-form text
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

### US-002: Write Memo Content

**Description:** As a visitor, I want to read a well-structured essay about the future of software so I understand the vision behind this toolkit.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Content structured with clear sections and headings
- [ ] Voice: Observational/third-person perspective (avoid "I" and minimize "we")
- [ ] Opening: "From Knowledge-Constrained to Context-Constrained"
  - The world is no longer limited by what is known, but by how much context can be provided
  - The cutting edge is giving enough context for machines to understand intent
  - Intent still matters — valuable software requires valuable intent
- [ ] Section: "Context Collapse"
  - Soon the context burden will diminish
  - Typical users will be able to request new features that solve their problems without breaking things
  - The build vs. buy decision collapses to zero
- [ ] Section: "Ambient Context"
  - Machines will have more context about us than could be typed or spoken
  - They'll understand ramifications of intent better than humans do
  - Decision-making over what software would be most valuable will be granted to them
- [ ] Section: "Software Dissolves"
  - UIs won't be designed — they'll be presentation layers devised to extract needed information
  - No UI designed by humans will be more efficient than a personal agent answering on their behalf
  - Software creation as understood today has no value proposition in this future
- [ ] Closing: "The Current Window"
  - This is why toolkits exist now — to navigate the transition
  - There's still value in the current moment, while context remains the constraint
  - No CTA, just the observation
- [ ] Prose uses clear, direct language throughout
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-003: Add Pull Quote Styling

**Description:** As a visitor, I want key phrases highlighted as pull quotes so the most important ideas stand out.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Style for pull quotes (larger text, distinctive styling)
- [ ] At least 3 pull quotes from the content:
  - "The build vs. buy decision just collapsed to zero"
  - "There is no UI you can design that would be more efficient than your personal agent just answering on your behalf"
  - "Software as we understand it dissolves"
- [ ] Pull quotes visually distinct but not jarring
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Works in both light and dark mode

---

### US-004: Add Navigation Link

**Description:** As a visitor, I want to find the memo from the site navigation so I can discover this content.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Add "Memo" link to header navigation (as standalone top-level item)
- [ ] Add "Memo" link to footer navigation
- [ ] Links point to `/memo`
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-005: Add On This Page Navigation

**Description:** As a visitor reading a long essay, I want section navigation so I can jump to specific parts.

**Documentation:** No

**Tools:** No

**Considerations:** none

**Credentials:** none

**Acceptance Criteria:**

- [ ] Add OnThisPageNav component with section links
- [ ] Sections match the content headings
- [ ] Navigation appears on the right side on desktop (matching other pages)
- [ ] Works on mobile (collapsible or hidden)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

---

## Functional Requirements

- FR-1: The memo page must be accessible at `/memo`
- FR-2: Content must be readable on all screen sizes
- FR-3: Pull quotes must be visually distinct from body text
- FR-4: Page must integrate with existing navigation structure
- FR-5: Page must support light and dark mode

## Non-Goals

- No comments or reactions on the memo
- No sharing buttons (users can copy URL manually)
- No versioning or edit history
- No author byline (this is a manifesto, not a personal letter)
- No email capture or newsletter signup on this page
- No call-to-action at the end

## Design Considerations

- Typography: Use prose styling for optimal readability (16-18px body, appropriate line height)
- Width: Max-width ~65-70 characters per line for readability
- Pull quotes: Consider left border accent, larger text, or indented block styling
- Date display: Subtle, beneath title (muted color, smaller text)
- Spacing: Generous whitespace between sections
- Tone: Manifesto — confident, observational, forward-looking
- Match existing page patterns (Breadcrumbs, OnThisPageNav, section borders)

## Technical Considerations

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4 with dark mode support
- **Components:** Reuse existing Breadcrumbs, OnThisPageNav components
- **Content:** Static content in the page component (no CMS needed)

## Success Metrics

- Page loads within performance budget (same as other content pages)
- Content is readable and visually appealing on mobile, tablet, and desktop
- Pull quotes are memorable and shareable
- Navigation is discoverable and functional

## Definition of Done

Implementation is complete when:

1. All user stories (US-001 through US-005) pass their acceptance criteria
2. Memo page renders at `/memo` with full content
3. Pull quotes are styled distinctively
4. Navigation links added to header and footer
5. OnThisPageNav works for section jumping
6. Page works in light and dark mode
7. Typecheck, lint, and build pass
8. Manual browser verification on desktop and mobile viewports

## Open Questions

None — all content direction provided.

## Credential & Service Access Plan

No external credentials required for this PRD.
