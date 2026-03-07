---
createdBy: toolkit
date: 2026-03-06
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Electron Probe Transport

## Summary

Closed the final Playwright probe bypass path: Builder was running probes against `localhost` for desktop/Electron apps instead of using `playwright-electron` against the installed app binary. Added architecture-aware probe dispatch that reads `project.json` to determine the correct transport.

## Changes

- Modified: `skills/adhoc-workflow/SKILL.md` — Added mandatory "Determine probe transport" step (new step 2) with architecture detection table, critical callout against using `baseUrl` for desktop apps, and full Electron Probe Spec example alongside the existing Browser Probe Spec
- Modified: `skills/test-ui-verification/SKILL.md` — Added "Architecture-Aware Probe Dispatch (MANDATORY)" section, Electron Probe Spec format, and Electron Probe Flow (steps E1-E5: zombie cleanup, launch, authenticate, assert, cleanup)
- Modified: `agents/builder.md` — Added explicit prohibition: "Never use browser-based Playwright (baseUrl/localhost) to probe a desktop/Electron app" with example showing the wrong pattern

## Affected Website Pages

- [ ] Agent documentation page (builder agent updates)
- [ ] Skills documentation page (adhoc-workflow, test-ui-verification updates)
- [ ] Any probe/verification workflow documentation

## Source

- Commit: pending (Round 3 of probe bypass closure)
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
