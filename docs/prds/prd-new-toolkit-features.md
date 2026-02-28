# PRD: New Toolkit Features Documentation (Feb 23–28, 2026)

## Introduction

Between Feb 23–28, 2026, the toolkit received a large batch of new skills, agent capability upgrades, and schema changes. None of these are currently documented on the website. This PRD covers documenting all new additions so the website reflects the current state of the toolkit.

## Goals

- Document all new skills added Feb 23–28 on the `/skills` index and detail pages (auto-sync via manifest covers some; static concept pages need manual updates)
- Document new agent capabilities: rate limit resilience, compaction resilience, commit gate, tool error recovery, identity locks, and root cause analysis requirements
- Document new `project.json` schema fields: `codeRoot`, `toolkitPath`, `environments`, `authentication`, `apps[]`, `git.autoCommit`
- Document the new authentication system (`setup-auth` skill + auth provider skills)
- Document Electron E2E testing support (`e2e-electron` skill + Electron schema fields)
- Document the cross-machine pending-updates registry system

## User Stories

### US-001: Document new skills (skills manifest sync)

**Description:** As a user browsing `/skills`, I want to see all newly added skills (including the auth skill family, `browser-debugging`, `vectorize`, `cve`, `e2e-electron`, `e2e-quality`, `git-sync`, `product-screenshots`, `marketing-copy`, `post-completion`) so I know what tools are available.

**Background:** The manifest is auto-generated at build time from the local toolkit. The `/skills` index and detail pages are data-driven — if the manifest is current, these pages will already reflect new skills. The task here is to verify the manifest extraction script picks up all new skills and that detail pages render correctly for each new skill.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Run the manifest extraction script and confirm all new skills appear in `toolkit-manifest.json`:
  - `setup-auth`, `auth-generic`, `auth-headless`, `auth-nextauth-credentials`, `auth-supabase-otp`, `auth-supabase-password`, `test-user-cleanup`
  - `browser-debugging`
  - `vectorize`
  - `cve`
  - `e2e-electron`
  - `e2e-quality`
  - `git-sync`
  - `product-screenshots`
  - `marketing-copy`
  - `post-completion`
- [ ] All 10+ new skills appear on the `/skills` index page under the correct type (Core vs Meta)
- [ ] Detail pages (`/skills/[slug]`) render correctly for each new skill with full markdown content
- [ ] Total skill count on the homepage and `/skills` page is updated to reflect the new total
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

### US-002: Document Agent Resilience Upgrades

**Description:** As a developer using the toolkit, I want the website to explain the new resilience features added to primary agents (rate limit handling, compaction resilience, tool error recovery) so I understand how agents behave under failure conditions.

**Background:** In late Feb 2026, all primary agents received: rate limit detection + graceful pause, `currentTask` state tracking for session resumability after compaction or interruption, a commit gate preventing skipping post-change workflow steps, and automatic tool error recovery for 499/timeout failures.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The `/concepts/the-human-in-the-loop` page (or an appropriate sub-section) includes a new **"Agent Resilience"** section or callout box explaining:
  - Rate limit handling: agents detect 429 errors, save state, and pause gracefully instead of retrying blindly
  - Session resumability: agents track `currentTask` in state files so work can resume after context compaction or interruption
  - Commit gate: Builder will not commit if post-change workflow steps are incomplete
  - Tool error recovery: 499/timeout errors are automatically retried with exponential backoff
- [ ] The explanation is written for end users (not toolkit developers) — focus on what the user experiences, not the internal implementation
- [ ] The section links to the `builder-state` skill documentation if applicable
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

### US-003: Document new project.json schema fields

**Description:** As a developer setting up a project, I want the `/concepts/projects` page to show all current `project.json` fields including the new ones added Feb 23–28, so I can configure my project correctly.

**Background:** New fields added: `codeRoot` (configurable code root directory), `toolkitPath` (configurable toolkit path), `environments[]` (multi-service dev environments), `authentication` (full auth configuration block), `apps[]` (multi-platform app support with per-app testing config), `git.autoCommit` (disable auto-commits from agents).

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The `/concepts/projects` page annotated `project.json` example is updated to include all new fields with inline comments explaining each:
  - `codeRoot` — "Directory where projects live (default: ~/code)"
  - `toolkitPath` — "Path to the opencode toolkit (default: ~/.config/opencode)"
  - `environments` — "Multi-service dev environments (e.g., separate API and web servers)"
  - `authentication` — "Auth provider configuration for headless testing and E2E"
  - `apps[]` — "Multi-platform app definitions (web, desktop, mobile)"
  - `git.autoCommit` — "Set to false to prevent agents from committing automatically"
- [ ] A new **"Multi-Platform Apps"** sub-section explains the `apps[]` field with examples for web + Electron configurations
- [ ] The `devPort: null` option is documented (for projects with no local runtime)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

### US-004: Document the Authentication System

**Description:** As a developer who wants E2E tests that require login, I want the website to explain the authentication system (setup-auth + auth provider skills) so I can configure my project for authenticated testing.

**Background:** A full authentication system was added Feb 25: the `setup-auth` skill walks through interactive configuration and writes auth config to `project.json`. Auth provider skills (`auth-supabase-otp`, `auth-supabase-password`, `auth-nextauth-credentials`, `auth-generic`, `auth-headless`) provide provider-specific authentication flows for E2E tests. `test-user-cleanup` handles cleanup after tests.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] A new page or major section documents the authentication system:
  - What it's for: letting E2E tests authenticate so they can test protected pages
  - How to set it up: invoke `setup-auth` skill, it detects your auth provider and configures `project.json`
  - Provider matrix: table showing supported providers (Supabase OTP, Supabase password, NextAuth credentials, generic form, headless API injection)
  - How agents use it: once configured, E2E test agents automatically authenticate before running tests
  - `test-user-cleanup`: explains how test users are cleaned up after E2E runs
- [ ] The page or section is linked from the Getting Started guide and from the `/skills` detail page for `setup-auth`
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

### US-005: Document Electron E2E Testing Support

**Description:** As a developer building an Electron desktop app, I want the website to explain how to configure and run E2E tests for Electron using the toolkit, so I can use the full quality pipeline for desktop apps.

**Background:** Full Electron E2E testing support was added Feb 27: the `e2e-electron` skill (uses Playwright Electron API), plus new `project.json` schema fields (`apps[*].type: "electron"`, `testing.framework: "playwright-electron"`, `executablePath`, `devLaunchArgs`).

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The testing concepts page (or a new sub-page) includes an **"Electron Desktop Testing"** section explaining:
  - How to configure `project.json` with an Electron app entry (example `apps[]` config shown)
  - That the `e2e-electron` skill is automatically loaded when Playwright runs in Electron mode
  - The difference between Playwright web and Playwright Electron API
  - `executablePath` and `devLaunchArgs` fields explained with examples
- [ ] The section includes a minimal working `project.json` example for an Electron app
- [ ] The `e2e-electron` skill detail page (auto-generated from manifest) links back to this section
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

### US-006: Document cross-machine pending-updates registry

**Description:** As a toolkit user working across multiple machines, I want the website to explain the cross-machine pending-updates system so I know how toolkit updates propagate to my projects automatically.

**Background:** Added Feb 27: a central registry (`~/.config/opencode/data/update-registry.json`) allows toolkit updates to be distributed to matching projects via affinity rules. Agents check this registry on startup and apply matching updates. This replaces the previous per-project `project-updates/` folder with a more scalable pull-based system.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] A new section in the `/concepts/workflow` page or a dedicated page explains the pending-updates system:
  - How it works: agents check the central registry on startup, match updates to the current project via affinity rules, and apply them
  - The three sources: project-local (`docs/pending-updates/`), central registry, and legacy per-project folder
  - `applied-updates.json`: how updates are tracked to avoid re-application
  - Who writes updates: toolkit maintainers write updates to the registry; agents discover and apply them
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

### US-007: Document git.autoCommit and identity lock improvements

**Description:** As a developer who wants more control over when agents commit, I want the website to document the `git.autoCommit: false` option and the improved identity lock system, so I know what controls exist.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The `/concepts/projects` page (or workflow page) documents `git.autoCommit: false`:
  - When to use it: when you prefer to review and commit changes manually
  - What it does: agents stage files but do not create commits; they report what would be committed
- [ ] A brief note on the Human-in-the-Loop or workflow page mentions that primary agents have hardened identity locks to prevent role drift (e.g., Planner will never write code, Builder will never skip quality gates)
- [ ] Root cause analysis requirement is mentioned: agents are now required to identify root causes before fixing bugs (no band-aid patches)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

## Functional Requirements

- FR-1: Manifest extraction script must correctly extract all new skills added Feb 23–28
- FR-2: All new `project.json` fields must appear in the annotated example on the projects concept page
- FR-3: The authentication system must be documented with a provider matrix table
- FR-4: Electron E2E testing must be documented with a working `project.json` example
- FR-5: No new documentation may reference removed or non-existent features

## Non-Goals

- No changes to the data extraction pipeline beyond confirming new skills are picked up
- No new top-level nav pages (new content goes into existing concept pages or new sub-sections)
- No changes to agent or skill markdown files
- No changelog page updates (that page auto-syncs from git history)

## Technical Considerations

- Most of the `/skills` index and detail pages are auto-generated from `toolkit-manifest.json` — verify the extraction script (`scripts/extract-toolkit-data.ts`) picks up the new skill directories correctly before touching page code
- The `authentication` section in `project.json` is a nested object — the annotated example on the projects page should show a realistic but minimal config (not every field)
- The `/concepts/the-human-in-the-loop` page is already long (~1030 lines) — the resilience section should be a compact callout or info box, not a full section

## Credential & Service Access Plan

No external credentials required for this PRD.

## Definition of Done

Implementation is complete when:

1. All seven user stories pass their acceptance criteria
2. The manifest extraction script correctly outputs all new skills in `toolkit-manifest.json`
3. New skills appear on the `/skills` index and have working detail pages
4. The `/concepts/projects` page shows all new `project.json` fields with explanations
5. The authentication system is documented with provider matrix
6. Electron E2E testing is documented with a working example
7. The pending-updates registry system is documented
8. Lint, typecheck, and build all pass
9. Manual browser verification in both light and dark mode
