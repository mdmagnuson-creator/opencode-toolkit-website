---
createdBy: toolkit
date: 2026-03-05
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Temporary Files Policy

## Summary

Added explicit Temporary Files Policy to all 8 implementation subagents to prevent writing debug scripts and temp files to system `/tmp/` instead of project-local `.tmp/`. Also strengthened the global AGENTS.md guardrail with rationale.

## Changes

- Modified: `AGENTS.md` — Strengthened Temporary Files section with rationale (module resolution failures, permission prompts, macOS `/private/tmp/` mapping)
- Modified: `agents/developer.md` — Added Temporary Files section with AGENTS.md anchor and developer-specific rules
- Modified: `agents/hammer.md` — Added Temporary Files section with AGENTS.md anchor
- Modified: `agents/overlord.md` — Added Temporary Files section with AGENTS.md anchor
- Modified: `agents/go-dev.md` — Added `/tmp/` restriction to Scope Restrictions
- Modified: `agents/react-dev.md` — Added `/tmp/` restriction to Scope Restrictions
- Modified: `agents/java-dev.md` — Added `/tmp/` restriction to Scope Restrictions
- Modified: `agents/python-dev.md` — Added `/tmp/` restriction to Scope Restrictions
- Modified: `agents/playwright-dev.md` — Added `/tmp/` restriction to Important Notes

## Affected Website Pages

- [ ] Agent documentation page (all implementation agents updated)
- [ ] Global guardrails documentation

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
