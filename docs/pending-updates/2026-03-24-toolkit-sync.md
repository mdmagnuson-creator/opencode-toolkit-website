---
createdBy: toolkit
date: 2026-03-24
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Removed hardcoded `model: github-copilot/claude-opus-4.5` from 57 agent frontmatters so they inherit the default model from OpenCode configuration. Only 5 agents using `claude-sonnet-4` retain explicit model declarations.

## Changes

- Modified: 57 agent files in `agents/` — removed `model: github-copilot/claude-opus-4.5` from frontmatter
- Agents now inherit the default model from OpenCode instead of hardcoding it
- 5 agents retain explicit `model: github-copilot/claude-sonnet-4` (docs-writer, merge-coordinator, prd-impact-analyzer, session-status, tools-writer)
- 2 primary agents (builder, planner) already had no model specified

## Affected Website Pages

- [ ] Agent documentation page (if it lists model per agent)
- [ ] Architecture/configuration documentation (model inheritance behavior)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
