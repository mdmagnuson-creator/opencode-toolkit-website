---
createdBy: toolkit
date: 2026-03-04
priority: normal
updateType: sync
---

# Sync Toolkit Documentation - Token Optimization

## Summary

Major token optimization update: split monolithic test-flow skill (133KB) into 7 focused sub-skills, extracted Builder inline documentation to skills, and implemented PRD archive rolling window.

## Changes

### New Skills Added (10 total)

**Test sub-skills (7):**
- `skills/test-activity-resolution/SKILL.md` — Resolves test activity from project.json commands
- `skills/test-verification-loop/SKILL.md` — 3-pass stability verification and automated fix loop
- `skills/test-prerequisite-detection/SKILL.md` — Detect and classify test prerequisites and blockers
- `skills/test-e2e-flow/SKILL.md` — E2E test generation and execution workflow
- `skills/test-ui-verification/SKILL.md` — UI verification test patterns and flaky test handling
- `skills/test-quality-checks/SKILL.md` — Quality checks beyond tests (lint, type-check, build)
- `skills/test-failure-handling/SKILL.md` — Test failure logging, manual fallback, and skip flows

**Builder utility skills (3):**
- `skills/builder-cli/SKILL.md` — CLI tool detection and proactive usage
- `skills/builder-delegation/SKILL.md` — Sub-agent delegation patterns
- `skills/test-doc-sync/SKILL.md` — Test documentation sync workflow

### Modified Files

- `skills/test-flow/SKILL.md` — Now a slim 5.6KB orchestrator (was 133KB, 96% reduction)
- `agents/builder.md` — Reduced from 2,910 to 2,073 lines with skill references
- `schemas/prd-registry.schema.json` — Added rolling window support (archived array, archiveStats)
- `skills/prd-workflow/SKILL.md` — Added rolling window archive behavior and "show PRD history" command

### Token Savings

| Component | Before | After | Savings |
|-----------|--------|-------|---------|
| test-flow initial load | 133KB (~33K tokens) | 5.6KB (~1.4K tokens) | 96% |
| Typical test usage | 133KB | ~31KB | 77% |
| builder.md | 2,910 lines | 2,073 lines | 29% |

## Affected Website Pages

- [ ] Skills listing page (10 new skills)
- [ ] test-flow skill documentation (now references sub-skills)
- [ ] Builder agent documentation (skill loading protocol updated)
- [ ] Schema documentation (prd-registry.schema.json changes)

## Source

- Commit: pending
- PRD: docs/prds/prd-token-optimization.md
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
