---
createdBy: toolkit
date: 2026-03-04
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Fix for Builder skipping mandatory test flow for CORS fix task — added browser verification requirements and CORS-specific test activity rules.

## Changes

- Modified: `data/test-activity-rules.json` — Added 9 new CORS/headers/security file patterns that trigger `e2e: "immediate"` and appropriate critics (security-critic, backend-critic-ts, network-critic, exploit-critic)
- Modified: `agents/builder.md` — Added "Never Use curl/wget for Browser Verification" section prohibiting curl for CORS verification (CORS is browser-enforced, curl bypasses it)
- Modified: `skills/adhoc-workflow/SKILL.md` — Added "User Summary Detection" section clarifying that user summaries accelerate analysis but do NOT skip verification

## Affected Website Pages

- [ ] Agent documentation page (builder updates)
- [ ] Skills documentation (adhoc-workflow updates)
- [ ] Test activity rules documentation (if applicable)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
