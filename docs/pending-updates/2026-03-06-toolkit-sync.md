---
createdBy: toolkit
date: 2026-03-06
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Ops-Only Task Verification

## Summary

Builder now classifies ad-hoc tasks into three types (source-change, ops-with-runtime-impact, ops-only) and requires Playwright verification for ops-only tasks that fix browser-visible issues, closing a gap where deploys/secrets fixes were declared "done" without browser-level verification.

## Changes

- Modified: `skills/adhoc-workflow/SKILL.md` — Added Step 0.1a (Task Type Classification), VERIFICATION PLAN section to ANALYSIS COMPLETE dashboard with ops-only example, Step 1.2a (Post-Ops Verification Checkpoint)
- Modified: `agents/builder.md` — Added Step 7 (Ops-only task verification) to Verification Pipeline Resolution section, updated section header trigger description

## Key Concepts for Documentation

1. **Task Type Classification** — Three types: `source-change` (standard pipeline), `ops-with-runtime-impact` (skip typecheck/build, still run Playwright), `ops-only` (no verification needed)
2. **Verification Plan in Dashboard** — Every ANALYSIS COMPLETE dashboard now includes a VERIFICATION PLAN section making explicit what verification will run and why
3. **Post-Ops Checkpoint** — After ops commands complete, Builder checks if the task has runtime impact and runs Playwright against the affected behavior instead of declaring "done"
4. **Runtime Impact Detection** — "Was the user's original issue visible in the browser?" determines whether ops tasks need Playwright

## Affected Website Pages

- [ ] Agent documentation page (builder agent Verification Pipeline updated)
- [ ] Skills documentation page (adhoc-workflow updated)
- [ ] Any "how verification works" or "testing workflow" documentation

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
