---
createdBy: toolkit
date: 2026-02-28
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added test failure output policy to all testing agents and fixed website sync workflow to write updates to website project's repo for cross-machine sync.

## Changes

### Testing Agents — Test Failure Output Policy

Added "Never truncate test failure output" rule to 6 testing agents:

- Modified: `agents/tester.md` — Added Test Failure Output Policy section
- Modified: `agents/jest-tester.md` — Added Test Failure Output Policy section
- Modified: `agents/react-tester.md` — Added Test Failure Output Policy section
- Modified: `agents/go-tester.md` — Added Test Failure Output Policy section
- Modified: `agents/e2e-playwright.md` — Added Test Failure Output Policy section
- Modified: `agents/qa-browser-tester.md` — Added Test Failure Output Policy section

The policy ensures:
- Successful test runs can be summarized ("42 tests passed")
- Failed test runs show complete output — never truncated

### Toolkit Agent — Fixed Website Sync Location

- Modified: `agents/toolkit.md` — Post-change workflow Step 3 now writes pending updates to the **website project's repo** (`<website-project-path>/docs/pending-updates/`) instead of the toolkit's gitignored `project-updates/` folder
- This enables cross-machine sync via git (per enhanced pending-updates system from `prd-pending-updates-v2.md`)

### PRD Lifecycle

- Moved to completed: `prd-compaction-resilience.md` (fully implemented)
- Moved to completed: `toolkit-v2-plan.md` (all stories done)
- Moved to completed: `dynamic-output-verbosity-modes.md` (slimmed implementation)
- Archived: `prd-agent-model-tiering.md` (deprioritized)

## Affected Website Pages

- [ ] Testing agents documentation — mention test failure output policy
- [ ] Toolkit agent page — update post-change workflow description (website sync now goes to project repo)
- [ ] Any pages referencing verbosity modes — update to reflect automatic approach

## Source

- Commits: `540885b`, `337ce62`, `0208362`, `72d5f4d`, `7f5cb05`, `97c5253`
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
