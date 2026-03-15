---
createdBy: toolkit
date: 2026-03-15
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Revert Helm ADE Desktop Mode

## Summary

Reverted 4 recent commits that added Helm ADE desktop mode detection to builder.md and removed postChangeActions execution from builder + 5 skill files. These features were premature and need a proper PRD before being added.

## Changes

- Reverted: `agents/builder.md` — Removed Desktop Mode Detection section (env var checks, skip project selection, skip startup dashboard, projects.json registry lookup bypass). Restored full postChangeActions Step 4.5 pipeline and "terminal mode only" annotations.
- Reverted: `skills/adhoc-workflow/SKILL.md` — Restored Step 1.5 postChangeActions execution
- Reverted: `skills/builder-delegation/SKILL.md` — Restored Post-Change Actions context block
- Reverted: `skills/post-completion/SKILL.md` — Restored Step B post-change actions review
- Reverted: `skills/prd-workflow/SKILL.md` — Restored pipeline reference to postChangeActions
- Reverted: `skills/test-flow/SKILL.md` — Restored Section 5.5 postChangeActions execution logic

## Affected Website Pages

- [ ] Agent documentation page (if builder.md details are documented)
- [ ] Changelog (note the revert)

## Source

- Commit: 3adef55
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
