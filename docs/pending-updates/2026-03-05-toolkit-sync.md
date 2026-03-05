---
createdBy: toolkit
date: 2026-03-05
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added Canonical Source Fidelity guardrails to prevent Developer agent from fabricating plausible-but-wrong field names when documenting toolkit internals. Also updated architecture-aware-verification commit hashes.

## Changes

- Modified: `agents/developer.md` — Added "Canonical Source Fidelity" section requiring READ → EXTRACT → REPRODUCE → VERIFY when tasks reference source files with specific field names or config schemas
- Modified: `skills/builder-delegation/SKILL.md` — Added "Canonical Content for Documentation Tasks" section with `canonicalSource` context block format for Builder to embed inline content when delegating documentation tasks

## Affected Website Pages

- [ ] Agent documentation page (developer agent section)
- [ ] Delegation patterns / Builder orchestration page (if documented)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
