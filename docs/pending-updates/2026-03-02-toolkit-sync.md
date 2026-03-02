---
createdBy: toolkit
date: 2026-03-02
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added Project Extraction capability to Toolkit agent, enabling monorepo splitting and new project creation from existing code.

## Changes

- Modified: `agents/toolkit.md` — Added section "11. Project Extraction (New Project from Existing)" documenting:
  - Allowed operations: creating GitHub repos, cloning, copying files, bootstrapping project.json
  - Constraints: source unchanged, one-time operation, handoff to Builder
  - Workflow: 9-step process from repo creation to registration

## Affected Website Pages

- [ ] Agent documentation page (toolkit agent capabilities)
- [ ] Workflow documentation (if project extraction workflow is documented)

## Source

- Commit: pending (will be committed after this sync)
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
