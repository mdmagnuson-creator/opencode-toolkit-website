---
createdBy: toolkit
date: 2026-04-16
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added session-handoff skill and new "Session Handoff" section to the Planner agent, codifying the five-field structured handoff written to `planner-state.json` and a standard copy/paste resume message.

## Changes

- Added: `skills/session-handoff/SKILL.md` — new skill for producing Planner session handoffs using five structured fields (currentIntent, recentDecisions, nextAction, processState, activeConstraints) and the standard resume template.
- Modified: `agents/planner.md` — added "Session Handoff" section defining when to load the skill, the five required fields, and the standard copy/paste template pointing to `docs/planner-state.json` as the source of truth.

## Affected Website Pages

- [ ] Agent documentation page — Planner agent capabilities (new Session Handoff section)
- [ ] Skills documentation page — add session-handoff skill entry under workflow category
- [ ] Skills index count (72 → 73)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
