# PRD: Build-Time Toolkit Sync

## Introduction

Currently, the toolkit website uses a committed `toolkit-manifest.json` file that contains a snapshot of the ai-toolkit repository. When the ai-toolkit repo changes and triggers a rebuild via `repository_dispatch`, the website rebuilds with stale data because the manifest is not refreshed.

This PRD implements build-time fetching of toolkit data so the website automatically reflects the latest toolkit content whenever it rebuilds.

## Goals

- Fetch fresh toolkit data during build instead of using a committed manifest
- Ensure every rebuild reflects the current state of the ai-toolkit repository
- Maintain fast build times (fetch only what's needed)
- Provide visibility into sync status (last synced timestamp, toolkit commit)
- Complete the ai-toolkit trigger workflow installation

## User Stories

### US-001: Create build-time manifest generation script

**Description:** As a developer, I need a script that fetches the ai-toolkit repository and generates a fresh manifest so the website always has current data.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Script at `scripts/generate-manifest.ts` that:
  - Accepts a toolkit path as argument (for local) or fetches from GitHub (for CI)
  - Reads agents, skills, scaffolds, templates from the toolkit
  - Generates the same manifest format as current `toolkit-manifest.json`
  - Outputs to `src/data/toolkit-manifest.json`
- [ ] Script runs successfully locally with `npx ts-node scripts/generate-manifest.ts ~/.config/opencode`
- [ ] Typecheck passes
- [ ] Lint passes

### US-002: Add GitHub fetch mode to manifest script

**Description:** As the CI system, I need to fetch toolkit data from GitHub when building so I don't need local filesystem access.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Script supports `--github` flag to fetch from GitHub API instead of local path
- [ ] Uses `TOOLKIT_REPO` env var (default: `mdmagnuson-creator/ai-toolkit`)
- [ ] Uses `GITHUB_TOKEN` env var for authenticated API access (higher rate limits)
- [ ] Fetches only necessary files (agents/, skills/, scaffolds/, agent-templates/, automations/, mcp/)
- [ ] Handles rate limiting gracefully with retry logic
- [ ] Typecheck passes
- [ ] Lint passes

### US-003: Update deploy workflow to generate fresh manifest

**Description:** As the CI system, I need to generate a fresh manifest before building so the deployed site has current data.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `.github/workflows/deploy.yml` updated to:
  - Run manifest generation script before `npm run build`
  - Pass `GITHUB_TOKEN` to the script for API access
  - Log the toolkit commit SHA that was synced
- [ ] Workflow succeeds on `push`, `workflow_dispatch`, and `repository_dispatch` triggers
- [ ] Built site contains fresh data from ai-toolkit repo

### US-004: Remove committed manifest from git tracking

**Description:** As a developer, I want the manifest to be gitignored so it's always generated fresh, avoiding stale data.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] `src/data/toolkit-manifest.json` added to `.gitignore`
- [ ] File removed from git tracking (but kept locally for dev)
- [ ] `npm run dev` still works (generates manifest if missing)
- [ ] Added `prebuild` script to `package.json` that generates manifest
- [ ] Typecheck passes
- [ ] Lint passes

### US-005: Add sync metadata to manifest and display on site

**Description:** As a user, I want to see when the toolkit data was last synced so I know how current the information is.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Manifest includes `syncedAt` (ISO timestamp) and `toolkitCommit` (short SHA) fields
- [ ] Footer displays "Last synced: [relative time] ([commit])"
- [ ] Sync info links to the toolkit commit on GitHub
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser
- [ ] Works in both light and dark mode

### US-006: Add fallback for local development without toolkit

**Description:** As a new contributor, I want the site to build even if I don't have the ai-toolkit cloned locally.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] If local toolkit path doesn't exist and not in CI, use bundled sample data
- [ ] Sample data at `src/data/sample-manifest.json` (subset of real data)
- [ ] Console warning: "Using sample data. Run scripts/generate-manifest.ts for full data."
- [ ] Site builds and runs with sample data
- [ ] Typecheck passes
- [ ] Lint passes

## Functional Requirements

- FR-1: The manifest generation script must parse all agent markdown files and extract: name, slug, description, mode (primary/subagent), category
- FR-2: The manifest generation script must parse all skill markdown files and extract: name, slug, description, type (regular/meta)
- FR-3: The manifest generation script must count and categorize all items for the `counts` and `categories` fields
- FR-4: The GitHub fetch mode must use the GitHub Contents API to read file contents
- FR-5: The build workflow must fail if manifest generation fails (no silent fallback to stale data)
- FR-6: Local development must support both auto-generation and manual generation workflows

## Non-Goals

- No webhook endpoint on the website (using repository_dispatch instead)
- No caching of toolkit data between builds (always fetch fresh)
- No incremental updates (full manifest regeneration each time)
- No admin UI for triggering syncs (use GitHub Actions manually)

## Technical Considerations

- **Framework:** Next.js with static export
- **API Access:** GitHub Contents API with token auth for higher rate limits
- **Build Integration:** prebuild npm script + GitHub Actions step
- **Data Format:** Keep existing manifest JSON structure for compatibility

### GitHub API Approach

```typescript
// Fetch directory listing
const response = await fetch(
  `https://api.github.com/repos/${repo}/contents/agents`,
  { headers: { Authorization: `Bearer ${token}` } }
);

// Fetch individual file content
const file = await fetch(
  `https://api.github.com/repos/${repo}/contents/agents/builder.md`,
  { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.raw' } }
);
```

### Rate Limiting

- Unauthenticated: 60 requests/hour
- Authenticated: 5,000 requests/hour
- With ~100 files to fetch, authenticated access is required

## Success Metrics

- Website reflects toolkit changes within 5 minutes of push to ai-toolkit main
- Build time increases by less than 30 seconds due to manifest generation
- Zero manual intervention required for routine toolkit updates
- Contributors can build site without ai-toolkit cloned locally

## Open Questions

- Should we cache GitHub API responses between workflow runs? (Probably not needed given rate limits)
- Should the manifest include full agent content or just metadata? (Currently includes full content)

## Dependencies

- **ai-toolkit repository** must have the trigger workflow installed (see separate toolkit update request)
- **GitHub token** with `repo` scope must be available as `GITHUB_TOKEN` secret
