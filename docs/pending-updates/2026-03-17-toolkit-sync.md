---
createdBy: toolkit
date: 2026-03-17
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — XCUITest Support

## Summary

Added XCUITest (Apple's native UI testing framework) support across the toolkit: new skill, updated agents, routing in tester, and skill-mapping fixes.

## Changes

### New Skill
- Added: `skills/ui-test-xcuitest/SKILL.md` — Comprehensive XCUITest skill (~1170 lines) covering test patterns, accessibility testing, CI integration (GitHub Actions + Xcode Cloud), SwiftUI/AppKit/UIKit strategies, performance testing, and project configuration

### Agent Updates
- Modified: `agents/swift-dev.md` — Added XCUITest test writing capability section (reads skill overlay when delegated by tester)
- Modified: `agents/swift-critic.md` — Added Section 8 "XCUITest Quality" review criteria for test code review
- Modified: `agents/tester.md` — Added Swift/XCUITest routing:
  - Step 0e: Detection for swiftui/appkit/uikit frameworks and xcuitest testing framework
  - Xcode project fallback detection (*.xcodeproj/*.xcworkspace)
  - Native Apple delegation prompt template (mirrors Electron pattern)
  - Routing table entries for native-desktop and native-mobile
  - Swift file detection in Step 3 (file-type routing)
  - xcodebuild test execution guidance

### Schema Updates
- Modified: `schemas/project.schema.json` — Added `swift`, `kotlin`, `dart` to language enum; updated framework description

### Skill Mapping
- Modified: `data/skill-mapping.json`:
  - Fixed bug: xcuitest mapped to nonexistent `e2e-ios-native`, now correctly maps to `ui-test-xcuitest`
  - Added 3 `platformSkills` entries: swiftui, appkit, uikit
  - Added `agentRouting` rule for native Apple apps → swift-dev + ui-test-xcuitest skill
  - Added `skillSuggestions` entry for Swift/Apple apps without XCUITest configured

## Affected Website Pages

- [ ] Agent documentation page (swift-dev, swift-critic, tester updated)
- [ ] Skills documentation page (new ui-test-xcuitest skill)
- [ ] Schema documentation (if any — language enum expanded)

## Source

- Commits: `c87e9e8` (skill + swift agents + schema) + pending commit (tester + skill-mapping)
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
