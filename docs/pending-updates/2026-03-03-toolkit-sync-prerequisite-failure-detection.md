---
createdBy: toolkit
date: 2026-03-03
priority: normal
updateType: sync
---

# Sync Toolkit Documentation: Prerequisite Failure Detection

## Summary

Implemented comprehensive prerequisite failure detection and automated fix loop system for verification tests. This enables Builder to distinguish between prerequisite failures (e.g., login broken) and feature failures (e.g., button missing), with automated fixing, 3-pass stability verification, and blocker tracking.

## Changes

### Test Flow Skill (`skills/test-flow/SKILL.md`)
- **Added:** "Prerequisite Failure Detection" section with classification algorithm
- **Added:** "Environment Prerequisite Detection" section with skill-based recovery
- **Added:** "3-Pass Stability Verification" section with pass counter and reset rules
- **Added:** "Automated Fix Loop" section with state tracking and stop conditions
- **Added:** "Failure Logging" section with `verification-failures.json` structure
- **Added:** "Manual Fallback Options" section with [M] Fix, [S] Skip, [A] Abandon
- **Added:** "Blocker Tracking" section with `test-debt.json` structure
- **Added:** "Bulk Re-verification" section for re-verifying blocked features

### Builder Agent (`agents/builder.md`)
- **Added:** "Prerequisite Failure Detection" section
- **Added:** "Environment Prerequisite Handling" section
- **Added:** "Skill Creation Request Flow" section for missing environment skills
- **Added:** "3-Pass Stability Verification" section
- **Added:** "Automated Fix Loop" section
- **Added:** "Failure Logging and Manual Fallback" section
- **Added:** "Blocker Tracking and Bulk Re-verification" section

### E2E Playwright Agent (`agents/e2e-playwright.md`)
- **Added:** `@prerequisites` and `@feature-assertions` markers to verification test format
- **Added:** "Prerequisite Markers for Failure Classification" section

### Project Schema (`schemas/project.schema.json`)
- **Added:** `agents.verification.requiredPasses` (default: 3)
- **Added:** `agents.verification.autoFixLoop` (default: true)
- **Added:** `agents.verification.fixAttemptTimeoutMinutes` (default: 5)
- **Added:** `agents.verification.runBroaderTestsAfterFix` (default: true)

## Affected Website Pages

- [ ] Agent documentation (builder, e2e-playwright)
- [ ] Skill documentation (test-flow)
- [ ] Schema reference (project.schema.json)
- [ ] Verification/testing workflow documentation

## Source

- Commit: pending
- PRD: `docs/prds/prd-prerequisite-failure-detection.md`
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
