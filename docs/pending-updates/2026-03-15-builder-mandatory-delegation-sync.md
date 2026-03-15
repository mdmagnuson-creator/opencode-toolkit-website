---
createdBy: toolkit
date: 2026-03-15
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Builder Mandatory Delegation Rules

## Summary

Builder agent updated with mandatory delegation rules — Builder now delegates all source code reading to @explore and all code writing to @developer, preserving its context window for orchestration.

## Changes

- Modified: `agents/builder.md` — Added mandatory delegation enforcement for code investigation and implementation
  - Identity Lock updated to include "You do NOT write code" and "You do NOT read source code"
  - New "Write Tool Scope Restriction" section defining allowed/disallowed paths for Write/Edit tools
  - Analysis Gate rewritten from "NEVER START IMPLEMENTATION" to "NEVER DELEGATE WITHOUT APPROVAL" (delegation-only framing)
  - Token Budget table updated — source code row now says "NEVER read directly — delegate to @explore"
  - @explore added to Primary Sub-Agents table as first entry
  - New "Mandatory Delegation for Code Investigation" section with allowed/disallowed read lists, wrong-vs-right examples, and bug investigation protocol
  - Chunk Transition and Within a Chunk sections updated to reference delegation instead of direct reads/writes
  - "What You Never Do" section updated with "never read source code" alongside existing write restriction

## Affected Website Pages

- [ ] Agent documentation page (Builder agent description and capabilities)
- [ ] Workflow documentation (if delegation patterns are documented)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
