# PRD: Hybrid Changelog Sync and Merge

## Introduction

The changelog currently updates when the website runs its data preparation/build pipeline. This means toolkit updates are not visible until the website is rebuilt.

This PRD introduces a **hybrid sync model**:

1. Render a stable baseline from build-time data (current behavior)
2. Optionally fetch fresher toolkit changelog data at runtime
3. Merge runtime toolkit entries with website-local changelog entries
4. Fall back cleanly to baseline data when runtime fetch fails

## Goals

- Show newer toolkit changelog entries without requiring a website rebuild
- Keep website-local changelog entries in the merged timeline
- Preserve fast, readable changelog UX with graceful fallback behavior
- Avoid breaking static deployment constraints
- Minimize GitHub rate-limit risk with sensible caching and refresh rules

## User Stories

### US-001: Define hybrid architecture contract

**Description:** As a maintainer, I want a clear hybrid source strategy so changelog freshness improves without introducing brittle behavior.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Document baseline source (build-time manifest) and runtime refresh source (GitHub)
- [ ] Define precedence rules: runtime toolkit data overrides baseline toolkit data when successful
- [ ] Define fallback rules when runtime fetch is unavailable
- [ ] Typecheck passes
- [ ] Lint passes

### US-002: Build runtime refresh fetcher for toolkit changelog

**Description:** As a visitor, I want the page to refresh toolkit changelog data from GitHub so I can see updates soon after they land in ai-toolkit.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Add runtime fetch utility for toolkit changelog entries from public GitHub source
- [ ] Validate and normalize external payload shape before merge
- [ ] Handle network failures safely without crashing UI
- [ ] Typecheck passes
- [ ] Lint passes

### US-003: Merge hybrid toolkit data with website entries

**Description:** As a visitor, I want one combined timeline so I can see toolkit and website updates in a single chronological view.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Merge selected toolkit changelog source (runtime if fresh, baseline otherwise) with `websiteChangelog`
- [ ] Keep source badges (`toolkit`, `website`) for each entry
- [ ] Merge by day and sort newest to oldest
- [ ] Typecheck passes
- [ ] Lint passes

### US-004: Add loading, stale, and fallback states

**Description:** As a visitor, I want the changelog page to remain usable even if runtime fetch is slow or unavailable.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Show a loading state while runtime changelog fetch resolves
- [ ] Show a fallback mode using baseline manifest + website changelog if runtime fetch fails
- [ ] Display brief freshness/error messaging when fallback is active
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-005: Add TTL caching and explicit refresh control

**Description:** As a maintainer, I want lightweight caching so we reduce repeated GitHub requests and avoid rate-limit pressure.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Cache runtime toolkit payload in browser with 15-minute default TTL
- [ ] Respect cached data before issuing a new fetch when TTL is valid
- [ ] Add manual refresh action to force a fresh runtime fetch
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-006: Instrument and validate hybrid sync behavior

**Description:** As a maintainer, I want confidence that runtime sync works in production-like conditions.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Log/track runtime fetch outcome categories (success, stale-cache, fallback, failure)
- [ ] Validate behavior with normal network, slow network, and failed network scenarios
- [ ] Confirm page remains readable and functional in all scenarios
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

## Functional Requirements

- FR-1: `/changelog` renders immediately from baseline build-time data
- FR-2: `/changelog` can refresh toolkit changelog data at runtime from GitHub
- FR-3: Runtime toolkit data is merged with website-local changelog entries
- FR-4: Page gracefully degrades to baseline data when runtime fetch fails
- FR-5: Hybrid sync includes TTL caching (default 15 minutes) to reduce request volume
- FR-6: Existing changelog visual structure and source badging are preserved

## Non-Goals

- No migration away from static hosting in this phase
- No authenticated GitHub API integration requiring secrets
- No edits to ai-toolkit repository workflows as part of this PRD

## Design Considerations

- Keep initial content render fast and avoid large layout shifts
- Use concise status text for loading/fallback freshness state
- Preserve existing changelog card hierarchy and badges

## Technical Considerations

- Current site is static-export oriented; runtime fetch must be client-safe
- Prefer `raw.githubusercontent.com` or equivalent public endpoint for changelog source
- Keep payload validation defensive to prevent malformed external data from breaking UI
- Baseline build-time data remains source of truth when runtime fetch is unavailable
- Runtime refresh should run automatically on page load after cache evaluation
- Cache TTL should be configurable, with a default of 15 minutes

## Success Metrics

- Toolkit changelog updates become visible without a website rebuild
- Runtime refresh succeeds in normal browsing conditions with graceful fallback on failure
- User-reported confusion about stale changelog data decreases

## Open Questions

None. Runtime refresh behavior and TTL defaults are decided.
