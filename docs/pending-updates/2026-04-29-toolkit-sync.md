---
createdBy: toolkit
date: 2026-04-29
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — @agent-unleashed

## Summary

Added a new primary agent `@agent-unleashed` — an unrestricted general-purpose agent with full tool access and minimal forced process. Designed for users who want maximum LLM judgment and on-the-fly delegation rather than the prescribed workflows of `@builder` / `@planner` / `@developer`.

## Changes

- Added: `agents/agent-unleashed.md` — new primary agent
  - `mode: primary`, `tools: "*": true`, `temperature: 0.2`
  - No identity lock, no PRD lifecycle, no session logging requirements
  - Capability menu listing sub-agents (by category) and skills (by category)
  - Inherits all `AGENTS.md` global guardrails (toolkit protection, git workflow, protected resources, etc.)
  - One-paragraph trust-the-LLM operating principle
- Updated: `toolkit-structure.json` — agent count 65 → 66, new entry under `primary` category, changelog refreshed
- Updated: `README.md` — agent count 65 → 66

## Affected Website Pages

- [ ] Agents index / overview page (add `@agent-unleashed` to primary agents listing)
- [ ] If individual agent pages exist: create one for `agent-unleashed`
- [ ] Total agent count anywhere it appears (65 → 66)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
