---
createdBy: toolkit
date: 2026-04-13
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Multiple toolkit updates: added YAML frontmatter to 13 skills, added deep-investigation skill, broadened deep-investigation to all ad-hoc requests (not just bugs), made Playwright/E2E verification opt-in for ad-hoc mode, and added Planner state hygiene + structured question format.

## Changes

### Skills frontmatter (discoverability fix)
- Fixed: `skills/helm-test-cleanup/SKILL.md` — Added YAML frontmatter (name + description) so skill is registered
- Fixed: `skills/agent-onboard/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/auth-config-check/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/critic-dispatch/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/dynamic-reassignment/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/electron-build-deploy/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/self-correction/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/session-state/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/spec-analyzer/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/stack-advisor/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/ui-test-full-app-audit/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/vercel-supabase-alignment/SKILL.md` — Added YAML frontmatter
- Fixed: `skills/verification-contracts/SKILL.md` — Added YAML frontmatter

### Deep investigation skill
- Added: `skills/deep-investigation/SKILL.md` — New skill for multi-track investigation with evidence classification (CONFIRMED/INFERRED/ASSUMED), parallel investigation tracks, hypothesis scoring, and investigation dashboard
- Modified: `skills/deep-investigation/SKILL.md` — Broadened from bug-only to ALL ad-hoc requests (feature additions, refactoring, changes). Updated description, triggers, and examples.

### Playwright opt-in for ad-hoc mode
- Modified: `skills/adhoc-workflow/SKILL.md` — Removed pre-analysis screenshots (Step 0.0a), Playwright probe (Step 0.1b), and Playwright validation (Step 0.1d). Cleaned up stale step references. Updated completion report examples to show Playwright as "not requested" by default.
- Modified: `skills/test-flow/SKILL.md` — Added Playwright opt-in gate for ad-hoc mode (Playwright only runs if user explicitly requests it)
- Modified: `agents/builder.md` — Removed "Playwright probes" from auth config check section; Analysis Gate no longer checks probeStatus

### Planner updates
- Modified: `agents/planner.md` — Added state hygiene (incremental decision persistence, lockedDecisions, resumePrompt) and structured question format (numbered questions, lettered options, recommendations)

## Affected Website Pages

- [ ] Skills documentation page (13 skills now discoverable + 1 new skill: deep-investigation)
- [ ] Agent documentation page (builder skills table, planner state hygiene + question format)
- [ ] Workflow documentation (adhoc-workflow Playwright opt-in, deep-investigation routing for all ad-hoc)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
