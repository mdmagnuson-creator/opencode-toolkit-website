---
createdBy: toolkit
date: 2026-04-11
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added new `session-monitor` skill for real-time Helm session observability via debug log tailing. Updated with multi-thread monitoring support.

## Changes

- Added: `skills/session-monitor/SKILL.md` — New skill enabling Builder to monitor active Helm sessions by tailing `[UI]` debug log lines. Provides polling loop protocol, status dashboard template, anomaly detection rules, and session state model.
- Modified: `skills/session-monitor/SKILL.md` — Added multi-thread monitoring section (disambiguation strategies for concurrent Build tabs sharing one opencode serve session), multi-thread state model, and updated troubleshooting for thread-awareness.

## Affected Website Pages

- [ ] Skills documentation page (add session-monitor to utilities listing)
- [ ] Agent documentation page (if skill reference table exists for Builder)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
