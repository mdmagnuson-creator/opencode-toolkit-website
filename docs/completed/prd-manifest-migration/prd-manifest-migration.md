# PRD: Migrate to Toolkit Structure Manifest

## Introduction

The AI toolkit now publishes a machine-readable `toolkit-structure.json` manifest that is automatically maintained whenever the toolkit changes. This PRD migrates the website from its current custom extraction script (`scripts/extract-toolkit-data.ts`) to consuming the official manifest.

Currently, the website runs a 585-line TypeScript script that reads raw agent/skill files from `~/.config/opencode/` and parses frontmatter to generate `toolkit-manifest.json`. The new approach fetches the pre-built manifest from the toolkit repository, which:

1. **Eliminates drift** — The manifest is updated by @toolkit on every change
2. **Reduces complexity** — No more custom parsing logic to maintain
3. **Adds data** — The new manifest includes categorization, schema files, and more metadata
4. **Enables CI builds** — No local toolkit installation required

## Goals

- Replace custom extraction script with manifest fetch
- Maintain backwards compatibility with existing page components
- Add prominent "last synced" timestamp from manifest's `generatedAt` field
- Consume changelog from manifest (pending toolkit update)
- Simplify the CI/CD build process
- Improve agent categorization with clearer naming
- Update skills page with new category structure

## User Stories

### US-001: Fetch Toolkit Structure Manifest

**Description:** As a build system, I want to fetch the official toolkit-structure.json so I don't need custom extraction logic.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Create `scripts/fetch-toolkit-manifest.ts` that fetches from GitHub raw URL
- [ ] Fallback to local file at `~/code/ai-toolkit/toolkit-structure.json` for local development
- [ ] Handle network errors gracefully with helpful error messages
- [ ] Typecheck passes
- [ ] Lint passes

### US-002: Transform Manifest to Website Schema

**Description:** As a developer, I want the fetched manifest transformed to match the existing website data schema so existing pages continue working.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Create transformation layer that maps toolkit-structure.json to toolkit-manifest.json format
- [ ] Preserve all existing fields: `counts`, `categories`, `agents`, `skills`, `scaffolds`, `agentTemplates`
- [ ] Map toolkit categories to new website categories (see Technical Considerations)
- [ ] Extract agent descriptions from new format
- [ ] Existing pages render correctly with transformed data
- [ ] Typecheck passes
- [ ] Lint passes

### US-003: Add Prominent Last Synced Timestamp

**Description:** As a visitor, I want to see when the toolkit data was last updated prominently so I know the information is current.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Display `generatedAt` timestamp from manifest near page title on agents page
- [ ] Display timestamp on skills page in same position
- [ ] Format as human-readable relative time ("Updated 2 hours ago") with full date on hover
- [ ] Style prominently but not distractingly (near title, muted but visible)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-004: Consume Changelog from Manifest

**Description:** As a visitor, I want to continue seeing the changelog so I can track toolkit updates.

**Documentation:** No

**Tools:** No

**Dependency:** Requires toolkit update `2026-02-21-toolkit-changelog-in-manifest.md` to be completed first.

**Acceptance Criteria:**

- [ ] Read changelog data from manifest's `changelog.entries` array
- [ ] Remove git-based changelog extraction from build script
- [ ] Changelog page continues to render correctly
- [ ] Handle missing changelog gracefully (show message if toolkit hasn't been updated yet)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-005: Update CI/CD Build Process

**Description:** As a developer, I want CI builds to fetch the manifest without needing a local toolkit clone.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Update GitHub Actions workflow to use fetch script instead of extraction script
- [ ] Remove `TOOLKIT_PATH` and `AI_TOOLKIT_GIT_PATH` environment variables from CI
- [ ] Remove git clone step for ai-toolkit repo
- [ ] Builds succeed without local toolkit installation
- [ ] Typecheck passes
- [ ] Lint passes

### US-006: Deprecate Old Extraction Script

**Description:** As a maintainer, I want the old extraction script removed once migration is complete.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Remove `scripts/extract-toolkit-data.ts` after migration verified
- [ ] Remove `scripts/generate-manifest.ts` if no longer needed
- [ ] Update `package.json` scripts to use new fetch approach
- [ ] Update any documentation referencing the old script
- [ ] Typecheck passes
- [ ] Lint passes

### US-007: Implement New Agent Category Structure

**Description:** As a visitor, I want to see agents organized with clearer category names so I can find what I need faster.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Add "Primary Agents" special section at top of agents page (builder, planner, toolkit, felix)
- [ ] Rename categories: Critics, Developers, Testers, Orchestrators, Utilities
- [ ] Map manifest categories to new structure (see Technical Considerations)
- [ ] Update category filter dropdown with new options
- [ ] Update category badges with appropriate colors
- [ ] Preserve backwards compatibility: existing URLs with `?category=critics` still work
- [ ] Add redirects or aliases for old category names if needed
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-008: Display Toolkit Version

**Description:** As a visitor, I want to see which toolkit version the website reflects so I can correlate with my local installation.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Display `version` field from manifest (e.g., "v1.0.0") near the timestamp
- [ ] Show in header area of agents/skills pages alongside "last updated"
- [ ] Link to toolkit repository releases page
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-009: Update Skills Page with New Categories

**Description:** As a visitor, I want to see skills organized by their official categories so I can understand the skill ecosystem.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Display skills in category groups: Workflow, Content, Project, Meta, Utilities
- [ ] Add category descriptions explaining each group's purpose
- [ ] Update skills filter dropdown with new category options
- [ ] Show "Last updated" timestamp matching agents page
- [ ] Show toolkit version matching agents page
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

## Functional Requirements

- FR-1: Fetch `toolkit-structure.json` from GitHub raw URL at build time
- FR-2: Transform fetched data to match existing `ToolkitManifest` TypeScript interface
- FR-3: Display `generatedAt` timestamp prominently on agent and skill listing pages
- FR-4: Display toolkit `version` alongside timestamp
- FR-5: Consume changelog from manifest (after toolkit update)
- FR-6: CI builds work without local toolkit installation
- FR-7: Existing page URLs and query parameters continue working
- FR-8: New agent categories: Primary (special), Critics, Developers, Testers, Orchestrators, Utilities
- FR-9: New skill categories: Workflow, Content, Project, Meta, Utilities

## Non-Goals

- No real-time sync (continue using build-time approach)
- No automatic rebuilds when toolkit updates (manual or scheduled)
- No changes to individual agent/skill detail pages beyond data source
- No schema validation (trust the toolkit-maintained manifest)

## Design Considerations

- **Timestamp placement:** Near page title, right-aligned or below subtitle
- **Format:** "Updated 2 hours ago" with tooltip showing full date/time
- **Version badge:** Small pill badge next to timestamp, links to releases
- **Primary agents section:** Visually distinct from categories (larger cards? hero treatment?)
- **Category colors:**
  - Critics: Amber (existing)
  - Developers: Blue (existing)
  - Testers: Green (existing)
  - Orchestrators: Purple (coordination/workflow vibe)
  - Utilities: Gray/Slate (tooling vibe)

## Technical Considerations

- **Manifest URL:** `https://raw.githubusercontent.com/mdmagnuson-creator/ai-toolkit/main/toolkit-structure.json`
- **Local fallback:** `~/code/ai-toolkit/toolkit-structure.json`

### Agent Category Mapping

| Manifest Category | Website Category | Notes |
|-------------------|------------------|-------|
| `primary` | **Primary** (special section) | builder, planner, toolkit, felix |
| `critics` | Critics | No change |
| `implementation` | Developers | Renamed for clarity |
| `testing` | Testers | No change |
| `operational` | Split → Orchestrators + Utilities | See below |

**Operational split logic:**
- Orchestrators: agents that coordinate other agents (qa, tester, critic, e2e-reviewer)
- Utilities: standalone tools (debugger, wall-e, session-status, docs-writer)

### Skill Category Mapping

| Manifest Category | Website Category |
|-------------------|------------------|
| `workflow` | Workflow |
| `content` | Content |
| `project` | Project |
| `meta` | Meta |
| `utilities` | Utilities |

- **Existing interface:** Must maintain compatibility with `src/data/types.ts` or migrate it

## Dependencies

- **US-004 depends on:** Toolkit update `2026-02-21-toolkit-changelog-in-manifest.md`

## Success Metrics

- Build time reduced (no parsing of 60+ markdown files)
- Zero regression in page functionality
- CI builds work without toolkit path configuration
- Data freshness visible to visitors (timestamp prominent)
- Clearer agent organization (fewer "what category is this?" questions)

## Open Questions

- ~~Should we add a "primary agents" section?~~ **Yes, special section at top**
- ~~Should skills use new categories?~~ **Yes**
- Should we poll for manifest updates or rely on manual rebuilds?
- Should individual agent detail pages show "last updated" for that specific agent?
