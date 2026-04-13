---
createdBy: toolkit
date: 2026-04-13
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added YAML frontmatter to 13 skills for discoverability. Added deep-investigation skill for hypothesis-driven bug analysis, updated adhoc-workflow to route bug tasks to it, and added state hygiene + structured question format rules to Planner.

## Changes

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
- Added: `skills/deep-investigation/SKILL.md` — New skill for multi-track bug investigation with evidence classification (CONFIRMED/INFERRED/ASSUMED), parallel investigation tracks, hypothesis scoring, and investigation dashboard
- Modified: `skills/adhoc-workflow/SKILL.md` — Added `bug-investigation` task type to Step 0.1a; routes unknown-root-cause bugs to deep-investigation skill
- Modified: `agents/builder.md` — Added deep-investigation to Skills Reference table and loading scenarios
- Modified: `agents/planner.md` — Added state hygiene (incremental decision persistence, lockedDecisions, resumePrompt) and structured question format (numbered questions, lettered options, recommendations)

## Affected Website Pages

- [ ] Skills documentation page (13 skills now discoverable + 1 new skill: deep-investigation)
- [ ] Agent documentation page (builder skills table, planner state hygiene + question format)
- [ ] Workflow documentation (adhoc-workflow bug investigation routing)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
