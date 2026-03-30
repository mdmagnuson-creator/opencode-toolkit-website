---
createdBy: toolkit
date: 2026-03-30
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added "Investigation order: Code first, logs second" guidance to Builder's bug investigation protocol.

## Changes

- Modified: `agents/builder.md` — Added investigation order callout block after bug investigation protocol. Requires @explore to read source code before grepping logs, preventing log-correlation-based narratives that lack code understanding.

## Affected Website Pages

- [ ] Agent documentation page (Builder section)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
