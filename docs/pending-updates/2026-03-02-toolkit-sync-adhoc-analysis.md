---
createdBy: toolkit
date: 2026-03-02
priority: normal
updateType: sync
---

# Sync Toolkit Documentation: Ad-hoc Analysis Phase

## Summary

Major enhancement to Builder's ad-hoc mode adding mandatory analysis phase with alternatives/consequences, Task Spec generation with full lifecycle (like PRDs), and promotion flow to Planner.

## Changes

### New Schema

- Added: `schemas/task-registry.schema.json` — Schema for project-level Task Spec registry tracking ad-hoc task lifecycle (parallel to prd-registry)

### New Templates

- Added: `templates/task-spec.md` — Template for Task Spec documents generated during ad-hoc analysis
- Added: `templates/task-promotion.md` — Template for Task Spec to PRD promotion handoff documents

### Modified Skills

- Modified: `skills/adhoc-workflow/SKILL.md` — **Major rewrite** with full analysis phase:
  - 10-second time-boxed analysis with progress indicator
  - Single-round clarifying questions
  - 2-3 alternatives with recommendation
  - Downstream consequences with severity levels
  - Task Spec generation (TSK-### format in docs/tasks/)
  - Mid-PRD task injection
  - Completion and abandonment flows
  - Scope growth warning at 50%
  - Auto-promotion for medium/large tasks

### Modified Agents

- Modified: `agents/planner.md` — Added Task Spec promotion pickup section to startup flow:
  - Checks `docs/tasks/promotions/` directory on startup
  - Presents promotion files with scope assessment
  - Offers to convert to PRD or dismiss

### Updated Totals

- Schemas: 15 → 16

## Affected Website Pages

- [ ] Schema documentation (add task-registry)
- [ ] Templates documentation (add task-spec, task-promotion)
- [ ] Skills reference (update adhoc-workflow description)
- [ ] Ad-hoc workflow tutorial/guide (new section on analysis phase)
- [ ] Planner documentation (add promotion pickup)

## Source

- Commit: pending
- PRD: `docs/prds/prd-adhoc-analysis-phase.md`
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
