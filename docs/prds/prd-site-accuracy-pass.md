# PRD: Site-Wide Accuracy Pass

## Overview

Audit and correct all pages on the AI Toolkit website to ensure accurate, up-to-date information that matches the actual toolkit behavior. Verify content against the source of truth (`~/.config/opencode/`).

## Background

The website was built with placeholder/assumed content that doesn't match the actual toolkit behavior. Key issues identified:

1. **Getting Started prerequisites are misleading** - Lists Node.js and Git without explaining why, doesn't mention GitHub Copilot as LLM option
2. **Site-wide accuracy unknown** - Content across all 19 pages needs verification against actual toolkit files

## Source of Truth

All content accuracy should be verified against:
- `~/.config/opencode/` - The actual toolkit installation
- `https://opencode.ai/docs` - Official OpenCode documentation
- The toolkit's actual agent/skill/scaffold files

---

## User Stories

### US-001: Fix Getting Started Prerequisites

**As a** new user setting up the AI Toolkit  
**I want** accurate prerequisite information  
**So that** I can successfully install and use the toolkit

**Acceptance Criteria:**
- [ ] Prerequisites section reflects actual requirements:
  1. **OpenCode CLI** - The AI-powered development environment (install from opencode.ai)
  2. **Git** - Required to clone the toolkit repository
  3. **GitHub Account with Copilot Premium** (recommended) - For access to Claude, GPT, and other premium models. Alternative: OpenCode Zen or other LLM provider API keys.
- [ ] Remove Node.js from prerequisites (not required for toolkit usage)
- [ ] Each prerequisite explains *why* it's needed
- [ ] GitHub Copilot Premium is mentioned as the recommended path for best models
- [ ] Alternative LLM providers (Zen, API keys) are mentioned

---

### US-002: Audit Home Page Accuracy

**As a** visitor to the homepage  
**I want** accurate statistics and descriptions  
**So that** I understand what the toolkit offers

**Acceptance Criteria:**
- [ ] Agent count matches actual count from manifest
- [ ] Skill count matches actual count from manifest
- [ ] Primary/sub-agent breakdown is accurate
- [ ] Feature descriptions match actual toolkit capabilities
- [ ] Any "coming soon" items are still valid or updated

---

### US-003: Audit Agents Pages Accuracy

**As a** user browsing agents  
**I want** accurate agent information  
**So that** I understand what each agent does

**Acceptance Criteria:**
- [ ] `/agents` - Index page counts and categories match manifest
- [ ] `/agents/primary` - Lists correct primary agents with accurate descriptions
- [ ] `/agents/sub` - Lists correct sub-agents with accurate descriptions
- [ ] `/agents/[slug]` - Individual agent pages show correct:
  - Name and description from agent file
  - Category assignment
  - Mode (primary vs subagent)
  - Content preview/summary

---

### US-004: Audit Skills Pages Accuracy

**As a** user browsing skills  
**I want** accurate skill information  
**So that** I understand what each skill does

**Acceptance Criteria:**
- [ ] `/skills` - Index page counts match manifest (regular vs meta-skills)
- [ ] `/skills/[slug]` - Individual skill pages show correct:
  - Name and description from skill file
  - Trigger phrases
  - Meta-skill flag
  - Content preview/summary
- [ ] Meta-skills are clearly distinguished from regular skills

---

### US-005: Audit Concepts Pages Accuracy

**As a** user learning about the toolkit  
**I want** accurate conceptual explanations  
**So that** I understand how the system works

**Acceptance Criteria:**
- [ ] `/concepts` - Overview accurately describes the toolkit architecture
- [ ] `/concepts/agents` - Explains agents accurately, matches actual behavior
- [ ] `/concepts/skills` - Explains skills accurately, matches actual behavior
- [ ] `/concepts/meta-skills` - Explains meta-skills accurately with correct examples
- [ ] `/concepts/workflow` - Describes actual PRD workflow (planner → builder → critics)
- [ ] `/concepts/projects` - Explains project.json and agent system setup accurately

---

### US-006: Audit Scaffolds Page Accuracy

**As a** user looking for project templates  
**I want** accurate scaffold information  
**So that** I can choose the right template

**Acceptance Criteria:**
- [ ] `/scaffolds` - Lists all scaffolds from manifest
- [ ] Each scaffold shows accurate:
  - Name and description
  - Files included
  - Stack/technology information

---

### US-007: Audit Agent Templates Page Accuracy

**As a** user customizing agents  
**I want** accurate agent template information  
**So that** I can generate project-specific agents

**Acceptance Criteria:**
- [ ] `/agent-templates` - Lists all templates from manifest
- [ ] Categories match manifest (`templateCategories`)
- [ ] Each template shows accurate:
  - Name and description
  - Category
  - What it applies to
  - What it generates

---

### US-008: Audit Automations Page Accuracy

**As a** user learning about automation features  
**I want** accurate automation information  
**So that** I understand what's available

**Acceptance Criteria:**
- [ ] `/automations` - Content reflects actual toolkit automation capabilities
- [ ] Verify against any automation-related files in the toolkit
- [ ] Remove or update any speculative/placeholder content

---

### US-009: Audit MCP Page Accuracy

**As a** user configuring MCP servers  
**I want** accurate MCP information  
**So that** I can set up integrations correctly

**Acceptance Criteria:**
- [ ] `/mcp` - Content reflects actual MCP configuration in toolkit
- [ ] Verify against `opencode.json` MCP section
- [ ] Examples match actual usage patterns

---

## Out of Scope

- Adding new pages
- Major redesigns or new features
- Performance optimizations (unless blocking accuracy work)

## Dependencies

- Access to `~/.config/opencode/` (the actual toolkit)
- Access to OpenCode official docs for cross-reference

## Success Metrics

- `npm run build` succeeds with zero errors
- All pages load without runtime errors
- Content matches actual toolkit files (spot-check verification)

---

## Technical Notes

### Pages to Audit (19 total)

| Route | File | Priority |
|-------|------|----------|
| `/` | `src/app/page.tsx` | High |
| `/getting-started` | `src/app/getting-started/page.tsx` | High |
| `/changelog` | `src/app/changelog/page.tsx` | Low |
| `/agents` | `src/app/agents/page.tsx` | Medium |
| `/agents/primary` | `src/app/agents/primary/page.tsx` | Medium |
| `/agents/sub` | `src/app/agents/sub/page.tsx` | Medium |
| `/agents/[slug]` | `src/app/agents/[slug]/page.tsx` | Low |
| `/skills` | `src/app/skills/page.tsx` | Medium |
| `/skills/[slug]` | `src/app/skills/[slug]/page.tsx` | Low |
| `/concepts` | `src/app/concepts/page.tsx` | Medium |
| `/concepts/agents` | `src/app/concepts/agents/page.tsx` | Medium |
| `/concepts/skills` | `src/app/concepts/skills/page.tsx` | Medium |
| `/concepts/meta-skills` | `src/app/concepts/meta-skills/page.tsx` | Medium |
| `/concepts/workflow` | `src/app/concepts/workflow/page.tsx` | Medium |
| `/concepts/projects` | `src/app/concepts/projects/page.tsx` | Medium |
| `/scaffolds` | `src/app/scaffolds/page.tsx` | Medium |
| `/agent-templates` | `src/app/agent-templates/page.tsx` | Medium |
| `/automations` | `src/app/automations/page.tsx` | Low |
| `/mcp` | `src/app/mcp/page.tsx` | Low |
