---
createdBy: toolkit
date: 2026-03-05
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Two PRDs implemented: Session Unification (removes multiSession flag, makes coordination always-on with lazy heartbeat) and Builder Skill Extraction Phase 2 (extracts verification, dashboards, and error recovery from builder.md into 3 new skills).

## Changes

### Session Unification (PRD)
- Created: `skills/session-setup/SKILL.md` — New always-on session initialization skill (~120 lines)
- Modified: `skills/multi-session/SKILL.md` — Trimmed from 265→185 lines, added lazy heartbeat (local-only when solo, full git round-trip when multi)
- Modified: `agents/builder.md` — Removed solo/multi branching, added session-setup to Skills Reference table
- Modified: `agents/developer.md` — Made session coordination always-on, removed solo/multi branching
- Modified: `schemas/project.schema.json` — `agents.multiSession` marked `deprecated: true`
- Created: `data/update-registry.json` entry — Deprecation update for all projects
- Created: `templates/updates/deprecate-multi-session.md` — Update template
- Modified: `skills/builder-state/SKILL.md` — Replaced solo/multi section with always-on session coordination note

### Builder Skill Extraction Phase 2 (PRD)
- Created: `skills/builder-verification/SKILL.md` — 14KB verification handling skill (as-user verification, prerequisite failures, logging)
- Created: `skills/builder-dashboard/SKILL.md` — 5KB dashboard templates skill (fresh and resume formats)
- Created: `skills/builder-error-recovery/SKILL.md` — 4KB error recovery skill (transient errors, sub-agent failures, loop detection)
- Modified: `agents/builder.md` — Reduced from 2,061 to 1,459 lines (-602 lines total) by extracting to skills

### Totals
- Skills: 64 → 68 (4 new: session-setup, builder-verification, builder-dashboard, builder-error-recovery)
- builder.md: 2,082 → 1,459 lines (-623 lines, -30%)

## Affected Website Pages

- [ ] Agent documentation page (builder.md reduced significantly)
- [ ] Skill documentation page (4 new skills added)
- [ ] Skills count on overview/homepage

## Source

- Commit: 58e0a0a (latest) + 10 preceding commits
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
