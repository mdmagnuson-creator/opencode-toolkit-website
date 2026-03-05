---
createdBy: toolkit
date: 2026-03-05
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added Canonical Source Fidelity guardrails to prevent Developer agent from fabricating plausible-but-wrong field names when documenting toolkit internals. Also rewrote the architecture-aware-verification update template from step-by-step interactive prompts to an analyze-first pattern.

## Changes

- Modified: `agents/developer.md` — Added "Canonical Source Fidelity" section requiring READ → EXTRACT → REPRODUCE → VERIFY when tasks reference source files with specific field names or config schemas
- Modified: `skills/builder-delegation/SKILL.md` — Added "Canonical Content for Documentation Tasks" section with `canonicalSource` context block format for Builder to embed inline content when delegating documentation tasks
- Rewritten: `templates/updates/architecture-aware-verification.md` — Changed from step-by-step interactive Q&A to analyze-first pattern where Builder autonomously analyzes auth config, CLI tools, app architecture, and verification pipeline, then presents a single comprehensive dashboard for user review/approval

## Affected Website Pages

- [ ] Agent documentation page (developer agent section)
- [ ] Delegation patterns / Builder orchestration page (if documented)
- [ ] Update templates / project rollout documentation (if documented)

## Source

- Commit: d6b4248 (canonical source fidelity), pending (template rewrite)
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
