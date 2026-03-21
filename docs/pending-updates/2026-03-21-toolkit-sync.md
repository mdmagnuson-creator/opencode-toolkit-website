---
createdBy: toolkit
date: 2026-03-21
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Updated XCUITest testing infrastructure: added 3 new gotchas to the xcuitest skill, added `context.testing` awareness across 4 agents/skills, and added native Apple app routing to the UI verification skill.

## Changes

- Modified: `skills/ui-test-xcuitest/SKILL.md` — Added gotchas #6 (staticTexts value vs label in SwiftUI), #7 (pbxproj 4-place registration), #8 (NSPredicate timeout trap); added Step 5 to Phase 0 for project testing conventions
- Modified: `agents/tester.md` — Added context.testing awareness to Step 0 project context loading
- Modified: `agents/swift-dev.md` — Added context.testing awareness to Phase 0 Read Project Configuration
- Modified: `skills/builder-delegation/SKILL.md` — Added Project Testing Conventions section for test delegation context
- Modified: `skills/test-flow/SKILL.md` — Added pre-resolution step to read context.testing
- Modified: `skills/test-ui-verification/SKILL.md` — Added native Apple app (swiftui/appkit/uikit) routing in both determineVerificationStrategy and determineProbeTransport functions

## Affected Website Pages

- [ ] Skills documentation page (ui-test-xcuitest, test-flow, test-ui-verification, builder-delegation)
- [ ] Agent documentation page (tester, swift-dev)

## Source

- Commit (yo-go): pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
