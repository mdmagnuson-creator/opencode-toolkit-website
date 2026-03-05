---
createdBy: toolkit
date: 2026-03-05
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Fixed three bugs in Builder's ad-hoc analysis mode: Playwright probes can no longer be bypassed, probes must target actual pages being changed (not just public pages), and Builder must resolve authentication autonomously instead of asking the user for credentials.

## Changes

- Modified: `agents/builder.md` — Strengthened Authentication Configuration Check to be autonomous-first with prohibited behaviors list
- Modified: `skills/adhoc-workflow/SKILL.md` — Added PAGE TARGETING RULE requiring probes target actual change pages, added Autonomous Auth Resolution protocol, added NO-BYPASS RULE table
- Modified: `skills/auth-config-check/SKILL.md` — Rewrote Step 2b to attempt autonomous resolution via setup-auth before involving user
- Modified: `skills/test-ui-verification/SKILL.md` — Rewrote "Integration with Authentication" to require auth escalation ladder before skipping, added "NOT valid skip conditions" block

## Affected Website Pages

- [ ] Agent documentation page (builder.md changes)
- [ ] Skills documentation page (adhoc-workflow, auth-config-check, test-ui-verification changes)
- [ ] Authentication skills documentation (auth handling changes)

## Source

- Commits: c3c0b6d, 67323ab
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
