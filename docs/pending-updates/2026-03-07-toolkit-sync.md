---
createdBy: toolkit
date: 2026-03-07
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Verification State Reset + OAuth Diagnostic Skill

## Summary

1. Fixed a critical bug where top-level verification state (`verificationContract`, `verificationResults`, `pendingTests`) was not reset between ad-hoc tasks or across mode transitions (PRD → ad-hoc), causing test-flow to read stale contracts and skip real verification.

2. Added new `oauth-callback-diagnostic` skill for diagnosing OAuth redirect_uri mismatches across any provider (GitHub, Google, Azure AD, etc.) and any app type (desktop, web).

## Changes

### Verification State Reset Fix
- Modified: `skills/adhoc-workflow/SKILL.md` — Added verification state reset to Phase 0 init, Task Spec completion, abandonment, and promotion flows
- Modified: `skills/prd-workflow/SKILL.md` — Added verification state reset to PRD cleanup (post-merge) flow
- Modified: `agents/builder.md` — Added per-story verification state reset to Story Processing Pipeline Step 1
- Modified: `skills/builder-state/SKILL.md` — Added "Verification State Reset" lifecycle section; updated "When to Write State" table
- Modified: `skills/test-flow/SKILL.md` — Added staleness check to Verification Contract Integration

### New Skill
- Added: `skills/oauth-callback-diagnostic/SKILL.md` — Generalized OAuth callback URL mismatch diagnostic (67 total skills)

### New PRD Draft
- Added: `docs/drafts/prd-electron-build-deploy.md` — Automate Electron build-deploy cycle in test-flow

## Affected Website Pages

- [ ] Agent documentation page (builder.md changes)
- [ ] Skills documentation page (adhoc-workflow, prd-workflow, builder-state, test-flow changes + new skill)
- [ ] Skills index/listing (new skill added — 67 total)

## Source

- Commits: e942c76 (verification fix), pending (skill + PRD)
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
