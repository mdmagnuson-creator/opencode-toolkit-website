---
createdBy: toolkit
date: 2026-04-20
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Default Subagent Model

## Summary

The toolkit's default subagent model has been switched from `github-copilot/claude-opus-4.5` to `github-copilot/gpt-5.4`. Primary agents no longer pin a `model:` and now inherit the user's currently selected model.

## Changes

- **Modified (56 subagents):** Replaced `model: github-copilot/claude-opus-4.5` → `model: github-copilot/gpt-5.4` in every subagent that previously pinned opus-4.5. This includes all `*-dev`, `*-critic`, `*-tester`, and operational subagents (developer, hammer, overlord, debugger, qa, qa-explorer, felix, wall-e, prd, etc.)
- **Modified (2 primary agents):** Removed the `model:` line entirely from `agents/toolkit.md` and `agents/ui-test-full-app-auditor.md`. Primary agents now inherit the user's selected model rather than pinning a default.
- **Modified `opencode.json`:** The `explore` subagent override now uses `github-copilot/gpt-5.4` instead of opus-4.5.
- **Modified `agents/toolkit.md`:** Updated the "Determine the model" guidance for new agents to recommend `gpt-5.4` for subagents and to clarify that primary agents must NOT specify a `model:`.
- **Untouched:** The 5 sonnet-4 subagents (`docs-writer`, `merge-coordinator`, `prd-impact-analyzer`, `session-status`, `tools-writer`) keep `github-copilot/claude-sonnet-4`.

## Affected Website Pages

- [ ] Agent documentation page — update any references to the default subagent model
- [ ] Architecture / "How it works" page — if it mentions claude-opus-4.5 as the default model
- [ ] Any agent reference tables that show model per agent
- [ ] Primary vs subagent explainer — note the new convention that primary agents inherit the user's selected model

## Convention to Document

Going forward:

- **Primary agents** (mode: primary): do NOT specify `model:` — they inherit whatever model the user has selected in the OpenCode UI
- **Subagents** (mode: subagent): default to `github-copilot/gpt-5.4` for complex work, `github-copilot/claude-sonnet-4` for lighter-weight tasks (docs, status, simple coordination)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
