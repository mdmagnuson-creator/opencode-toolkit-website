---
createdBy: toolkit
date: 2026-03-05
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added mandatory Playwright analysis probe to Builder's ad-hoc Analysis Gate, requiring live DOM verification before implementation begins.

## Changes

- Modified: `skills/test-ui-verification/SKILL.md` — Added "Analysis Probe Mode" section with lightweight ephemeral DOM assertions (6 assertion types, probe spec format, confidence impact rules, skip conditions, project configuration)
- Modified: `skills/adhoc-workflow/SKILL.md` — Added Step 0.1b "Playwright Analysis Confirmation" between code analysis and ANALYSIS COMPLETE dashboard, updated dashboard to show probe results with Playwright-confirmed badge, added probe configuration options
- Modified: `agents/builder.md` — Updated Analysis Gate guardrail to require Playwright probe as prerequisite, added probeStatus to state checkpoint enforcement, added analysis-probe skill trigger to Skills Reference table

## Affected Website Pages

- [ ] Agent documentation page (builder agent updated)
- [ ] Skills documentation page (test-ui-verification and adhoc-workflow skills updated)
- [ ] Workflow documentation (ad-hoc analysis flow now includes probe step)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
