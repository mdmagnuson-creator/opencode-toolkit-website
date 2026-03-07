---
createdBy: toolkit
date: 2026-03-07
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Verification State Reset Fix

## Summary

Fixed a critical bug where top-level verification state (`verificationContract`, `verificationResults`, `pendingTests`) was not reset between ad-hoc tasks or across mode transitions (PRD → ad-hoc), causing test-flow to read stale contracts and skip real verification.

## Changes

- Modified: `skills/adhoc-workflow/SKILL.md` — Added verification state reset to Phase 0 init (entering ad-hoc mode), Task Spec completion, abandonment, and promotion flows
- Modified: `skills/prd-workflow/SKILL.md` — Added verification state reset to PRD cleanup (post-merge) flow
- Modified: `agents/builder.md` — Added per-story verification state reset to Story Processing Pipeline Step 1
- Modified: `skills/builder-state/SKILL.md` — Added "Verification State Reset" lifecycle section documenting all mandatory reset points; updated "When to Write State" table with reset entries
- Modified: `skills/test-flow/SKILL.md` — Added staleness check to Verification Contract Integration: contracts predating the current story are discarded

## Affected Website Pages

- [ ] Agent documentation page (builder.md changes)
- [ ] Skills documentation page (adhoc-workflow, prd-workflow, builder-state, test-flow changes)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
