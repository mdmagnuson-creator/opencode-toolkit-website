---
createdBy: toolkit
date: 2026-03-13
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Soul Personality Layer

## Summary

Added a personality/soul layer to Builder and Planner agents. Each agent now has a `.soul.md` file defining tone, voice, communication style, and values. Agents load their soul via a read directive at session start.

## Changes

- Created: `agents/souls/builder.soul.md` — Builder personality: steady site lead, terse, direct, protective of scope
- Created: `agents/souls/planner.soul.md` — Planner personality: curious architect, conversational during refinement, structured in output
- Modified: `agents/builder.md` — Added 🧬 SOUL read directive after identity lock
- Modified: `agents/planner.md` — Added 🧬 SOUL read directive after identity lock

## Affected Website Pages

- [ ] Agent documentation page (Builder and Planner sections)
- [ ] Any page describing agent personality or communication style

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
