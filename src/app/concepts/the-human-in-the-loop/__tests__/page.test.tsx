import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HumanWorkModesPage from '../page'

// Mock the Breadcrumbs component to avoid usePathname issues in tests
jest.mock('@/components/Breadcrumbs', () => ({
  Breadcrumbs: () => <nav data-testid="breadcrumbs">Breadcrumbs</nav>,
}))

describe('HumanWorkModesPage - US-001: New concept entry page', () => {
  it('renders the page title', () => {
    render(<HumanWorkModesPage />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'The Human in the Loop (you)' })
    ).toBeInTheDocument()
  })

  it('displays the introduction text', () => {
    render(<HumanWorkModesPage />)

    expect(
      screen.getByText(/Working with AI agents is a collaboration, not a handoff/i)
    ).toBeInTheDocument()
  })

  it('renders the three primary agent cards', () => {
    render(<HumanWorkModesPage />)

    // Check for each agent card heading (multiple headings exist due to Quick Start Prompts section)
    const plannerHeadings = screen.getAllByRole('heading', { name: 'Planner' })
    const builderHeadings = screen.getAllByRole('heading', { name: 'Builder' })
    const toolkitHeadings = screen.getAllByRole('heading', { name: 'Toolkit' })

    expect(plannerHeadings.length).toBeGreaterThanOrEqual(1)
    expect(builderHeadings.length).toBeGreaterThanOrEqual(1)
    expect(toolkitHeadings.length).toBeGreaterThanOrEqual(1)
  })

  it('displays Planner description in overview card', () => {
    render(<HumanWorkModesPage />)

    // The overview card has the longer description with additional context
    expect(
      screen.getByText(/Turn ideas into implementation-ready PRDs\. Refine scope, clarify requirements/i)
    ).toBeInTheDocument()
  })

  it('displays Builder description', () => {
    render(<HumanWorkModesPage />)

    // The overview card has the longer description with additional context
    const builderDescriptions = screen.getAllByText(/Execute PRDs or handle ad-hoc tasks/i)
    // One in overview card, one in section header
    expect(builderDescriptions.length).toBeGreaterThanOrEqual(2)
  })

  it('displays Toolkit description', () => {
    render(<HumanWorkModesPage />)

    // Toolkit description appears in both overview card and section header
    const toolkitDescriptions = screen.getAllByText(/Evolve agents, skills, and scaffolds safely/i)
    expect(toolkitDescriptions.length).toBeGreaterThanOrEqual(2)
  })

  it('shows all three primary agent sections with full content', () => {
    render(<HumanWorkModesPage />)

    // All three agents now have full sections (no more "Coming Soon")
    expect(
      screen.getByRole('heading', { level: 2, name: 'Working with Planner' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Working with Builder' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Working with Toolkit' })
    ).toBeInTheDocument()
  })

  it('renders breadcrumbs component', () => {
    render(<HumanWorkModesPage />)

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument()
  })
})

describe('HumanWorkModesPage - US-002: Planner section', () => {
  describe('Planner section with planning responsibilities', () => {
    it('renders Working with Planner section header', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 2, name: 'Working with Planner' })
      ).toBeInTheDocument()
    })

    it('displays Planner section subtitle in Working with Planner', () => {
      render(<HumanWorkModesPage />)

      // The section subtitle is the shorter one without the extra details
      const subtitles = screen.getAllByText(/Turn ideas into implementation-ready PRDs/i)
      // One in overview card, one in section header
      expect(subtitles.length).toBeGreaterThanOrEqual(2)
    })

    it('explains Planner as a partner for requirements engineering', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Planner is your partner for requirements engineering/i)
      ).toBeInTheDocument()
    })
  })

  describe('Draft refinement explanations', () => {
    it('renders The Draft-to-Ready Journey subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'The Draft-to-Ready Journey' })
      ).toBeInTheDocument()
    })

    it('displays all four journey steps', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByRole('heading', { name: 'Create a Draft PRD' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Refine Requirements' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Clarify Scope' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Mark as Ready' })).toBeInTheDocument()
    })

    it('explains draft PRD creation and location', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Draft PRDs live in/i)
      ).toBeInTheDocument()
      // docs/prds/ appears multiple times (in the step and in a prompt example)
      const prdPathRefs = screen.getAllByText(/docs\/prds\//i)
      expect(prdPathRefs.length).toBeGreaterThanOrEqual(1)
    })

    it('explains requirement refinement catches scope creep', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/catch scope creep before implementation begins/i)
      ).toBeInTheDocument()
    })

    it('renders Draft Refinement Tips subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Draft Refinement Tips' })
      ).toBeInTheDocument()
    })

    it('displays refinement tip cards', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByRole('heading', { name: 'Challenge the stories' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Split large stories' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /Define.*done.*clearly/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Check dependencies' })).toBeInTheDocument()
    })
  })

  describe('Scope clarification', () => {
    it('renders Clarifying Scope subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Clarifying Scope' })
      ).toBeInTheDocument()
    })

    it('displays In Scope section', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByRole('heading', { name: 'In Scope' })).toBeInTheDocument()
      expect(screen.getByText(/What features are included\?/i)).toBeInTheDocument()
      expect(screen.getByText(/Which user flows are covered\?/i)).toBeInTheDocument()
    })

    it('displays Out of Scope section', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByRole('heading', { name: 'Out of Scope' })).toBeInTheDocument()
      expect(screen.getByText(/What's explicitly excluded\?/i)).toBeInTheDocument()
      expect(screen.getByText(/What's deferred to future PRDs\?/i)).toBeInTheDocument()
    })

    it('displays Non-Goals pro tip', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Add a.*Non-Goals.*section to your PRD/i)
      ).toBeInTheDocument()
    })
  })

  describe('Practical prompts and examples', () => {
    it('renders Practical Prompts for Planning Sessions subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Practical Prompts for Planning Sessions' })
      ).toBeInTheDocument()
    })

    it('displays copy-ready prompts intro text', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/copy-ready prompts for common planning scenarios/i)
      ).toBeInTheDocument()
    })

    it('displays New Feature prompt example', () => {
      render(<HumanWorkModesPage />)

      // "New Feature" appears in multiple places (Planner prompts and Operating Loops)
      const newFeatureLabels = screen.getAllByText('New Feature')
      expect(newFeatureLabels.length).toBeGreaterThanOrEqual(1)
      expect(
        screen.getByText(/Starting a planning session for a new feature/i)
      ).toBeInTheDocument()
    })

    it('displays Refine Draft prompt example', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Refine Draft')).toBeInTheDocument()
      expect(
        screen.getByText(/Continuing to refine an existing draft PRD/i)
      ).toBeInTheDocument()
    })

    it('displays Edge Cases prompt example', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Edge Cases')).toBeInTheDocument()
      expect(
        screen.getByText(/Adding error handling and edge cases to stories/i)
      ).toBeInTheDocument()
    })

    it('displays Scope Check prompt example', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Scope Check')).toBeInTheDocument()
      expect(
        screen.getByText(/Verifying scope boundaries before marking ready/i)
      ).toBeInTheDocument()
    })

    it('displays Mark Ready prompt example', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Mark Ready')).toBeInTheDocument()
      expect(
        screen.getByText(/Finalizing and activating a PRD for implementation/i)
      ).toBeInTheDocument()
    })

    it('displays @planner mentions in prompt code blocks', () => {
      render(<HumanWorkModesPage />)

      const plannerMentions = screen.getAllByText('@planner')
      // Should have multiple @planner mentions across prompt examples
      expect(plannerMentions.length).toBeGreaterThanOrEqual(5)
    })
  })

  describe('When to Use Planner vs Builder comparison', () => {
    it('renders When to Use Planner vs Builder subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'When to Use Planner vs Builder' })
      ).toBeInTheDocument()
    })

    it('displays comparison table with situation column', () => {
      render(<HumanWorkModesPage />)

      // Multiple tables now have Situation column (Planner vs Builder, Operating Loops)
      const situationHeaders = screen.getAllByRole('columnheader', { name: 'Situation' })
      expect(situationHeaders.length).toBeGreaterThanOrEqual(1)
      // Multiple tables now have Agent column (Planner vs Builder, Builder modes, Toolkit vs Project)
      const agentHeaders = screen.getAllByRole('columnheader', { name: 'Agent' })
      expect(agentHeaders.length).toBeGreaterThanOrEqual(1)
      // There are multiple tables now
      const whyHeaders = screen.getAllByRole('columnheader', { name: 'Why' })
      expect(whyHeaders.length).toBeGreaterThanOrEqual(1)
    })

    it('displays Planner use case for new multi-story feature', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('New multi-story feature')).toBeInTheDocument()
      expect(screen.getByText('Needs requirements breakdown before code')).toBeInTheDocument()
    })

    it('displays Builder use case for quick bug fix', () => {
      render(<HumanWorkModesPage />)

      // "Quick bug fix" appears in both tables now
      const quickBugFixes = screen.getAllByText('Quick bug fix')
      expect(quickBugFixes.length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText('Scope is already clear, just needs implementation')).toBeInTheDocument()
    })

    it('displays Planner use case for uncertain requirements', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Uncertain requirements')).toBeInTheDocument()
      expect(screen.getByText('Need to explore and clarify before building')).toBeInTheDocument()
    })

    it('displays Builder use case for existing PRD ready', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Existing PRD ready')).toBeInTheDocument()
      expect(screen.getByText('Planning done, time to execute')).toBeInTheDocument()
    })
  })
})

describe('HumanWorkModesPage - US-003: Builder section', () => {
  describe('Builder section header and implementation responsibilities', () => {
    it('renders Working with Builder section header', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 2, name: 'Working with Builder' })
      ).toBeInTheDocument()
    })

    it('displays Builder section subtitle', () => {
      render(<HumanWorkModesPage />)

      // The section subtitle appears in both overview card and section header
      const subtitles = screen.getAllByText(/Execute PRDs or handle ad-hoc tasks/i)
      expect(subtitles.length).toBeGreaterThanOrEqual(2)
    })

    it('explains Builder as an implementation partner', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Builder is your implementation partner/i)
      ).toBeInTheDocument()
    })

    it('mentions Builder orchestrates specialist agents', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/orchestrates specialist agents/i)
      ).toBeInTheDocument()
    })

    it('mentions Builder runs quality gates', () => {
      render(<HumanWorkModesPage />)

      // "quality gates" appears in multiple places (overview card, intro text, outcomes)
      const qualityGatesMentions = screen.getAllByText(/quality gates/i)
      expect(qualityGatesMentions.length).toBeGreaterThanOrEqual(2)
    })

    it('mentions Builder commits working code', () => {
      render(<HumanWorkModesPage />)

      // "commits working code" appears in both overview card and intro text
      const commitsMentions = screen.getAllByText(/commits working code/i)
      expect(commitsMentions.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('PRD mode vs ad-hoc mode guidance', () => {
    it('renders Two Operating Modes subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Two Operating Modes' })
      ).toBeInTheDocument()
    })

    it('displays PRD Mode card with heading', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'PRD Mode' })
      ).toBeInTheDocument()
    })

    it('displays Ad-hoc Mode card with heading', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Ad-hoc Mode' })
      ).toBeInTheDocument()
    })

    it('explains PRD Mode implements from ready PRD', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/implementing features from a ready PRD/i)
      ).toBeInTheDocument()
    })

    it('displays PRD Mode feature: systematic story-by-story execution', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Systematic story-by-story execution')).toBeInTheDocument()
    })

    it('displays PRD Mode feature: auto-generates tests', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Auto-generates tests after each story')).toBeInTheDocument()
    })

    it('displays PRD Mode feature: tracks progress', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Tracks progress in prd.json')).toBeInTheDocument()
    })

    it('explains Ad-hoc Mode for quick fixes and direct requests', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/quick fixes, one-off tasks, and direct requests/i)
      ).toBeInTheDocument()
    })

    it('displays Ad-hoc Mode feature: immediate execution', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Immediate execution')).toBeInTheDocument()
    })

    it('displays Ad-hoc Mode feature: tests on request', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Tests on request or after completion')).toBeInTheDocument()
    })

    it('displays Ad-hoc Mode feature: great for bug fixes', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Great for bug fixes and refactoring')).toBeInTheDocument()
    })

    it('renders When to Use Each Mode subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'When to Use Each Mode' })
      ).toBeInTheDocument()
    })

    it('displays mode comparison table headers', () => {
      render(<HumanWorkModesPage />)

      // Find the second table (Builder section's When to Use Each Mode table)
      const tables = screen.getAllByRole('table')
      expect(tables.length).toBeGreaterThanOrEqual(2)
      
      // Check that Mode column exists
      const modeHeaders = screen.getAllByRole('columnheader', { name: 'Mode' })
      expect(modeHeaders.length).toBeGreaterThanOrEqual(1)
    })

    it('displays PRD mode for multi-story feature in Builder table', () => {
      render(<HumanWorkModesPage />)

      // 'Multi-story feature' appears in multiple tables now (Builder modes, Operating Loops)
      const multiStoryFeatures = screen.getAllByText('Multi-story feature')
      expect(multiStoryFeatures.length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText('Structured execution with progress tracking')).toBeInTheDocument()
    })

    it('displays Ad-hoc mode for quick bug fix in Builder table', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('No planning overhead for simple changes')).toBeInTheDocument()
    })

    it('displays Ad-hoc mode for code refactoring', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Code refactoring')).toBeInTheDocument()
      expect(screen.getByText('Technical work with implicit requirements')).toBeInTheDocument()
    })

    it('displays PRD mode for new user flow', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('New user flow')).toBeInTheDocument()
      expect(screen.getByText('Complex feature needing structured stories')).toBeInTheDocument()
    })

    it('displays Ad-hoc mode for adding API endpoint', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Add a new API endpoint')).toBeInTheDocument()
      expect(screen.getByText('Single-task, clear scope')).toBeInTheDocument()
    })
  })

  describe('Update flow usage and expected outcomes', () => {
    it('renders The Update Flow subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'The Update Flow' })
      ).toBeInTheDocument()
    })

    it('explains update flow as continuous improvement cycle', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/continuous improvement cycle/i)
      ).toBeInTheDocument()
    })

    it('displays update flow step 1: agent discovers gap', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Agent discovers a gap or improvement/i)
      ).toBeInTheDocument()
    })

    it('displays update flow step 2: queues in pending-updates', () => {
      render(<HumanWorkModesPage />)

      // Multiple pending-updates/ references on the page (Builder section and Toolkit section)
      const pendingUpdatesRefs = screen.getAllByText(/pending-updates\//i)
      expect(pendingUpdatesRefs.length).toBeGreaterThanOrEqual(1)
    })

    it('displays update flow step 3: toolkit reviews', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/@toolkit reviews and applies toolkit changes/i)
      ).toBeInTheDocument()
    })

    it('displays update flow step 4: builder applies project updates', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/@builder applies project updates when you work/i)
      ).toBeInTheDocument()
    })

    it('emphasizes user stays in control', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/You stay in control:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Updates are queued, not applied automatically/i)
      ).toBeInTheDocument()
    })

    it('renders Expected Outcomes subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Expected Outcomes' })
      ).toBeInTheDocument()
    })

    it('displays PRD Mode Outcomes card', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'PRD Mode Outcomes' })
      ).toBeInTheDocument()
    })

    it('displays Ad-hoc Mode Outcomes card', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Ad-hoc Mode Outcomes' })
      ).toBeInTheDocument()
    })

    it('lists PRD outcome: stories implemented separately', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Each story implemented and committed separately')
      ).toBeInTheDocument()
    })

    it('lists PRD outcome: unit tests auto-generated', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Unit tests auto-generated after each story')
      ).toBeInTheDocument()
    })

    it('lists PRD outcome: E2E tests queued', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('E2E tests queued for affected UI areas')
      ).toBeInTheDocument()
    })

    it('lists PRD outcome: progress tracked', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Progress tracked in prd.json and progress.txt')
      ).toBeInTheDocument()
    })

    it('lists PRD outcome: branch ready for PR', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Feature branch ready for PR when complete')
      ).toBeInTheDocument()
    })

    it('lists Ad-hoc outcome: task completed quickly', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Task completed and committed quickly')
      ).toBeInTheDocument()
    })

    it('lists Ad-hoc outcome: tests generated on request', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Tests generated on request or at completion')
      ).toBeInTheDocument()
    })

    it('lists Ad-hoc outcome: quality gates enforced', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Quality gates still enforced (lint, typecheck)')
      ).toBeInTheDocument()
    })

    it('lists Ad-hoc outcome: no PRD overhead', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('No PRD overhead for simple changes')
      ).toBeInTheDocument()
    })

    it('lists Ad-hoc outcome: ready to push', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Ready to push or create PR immediately')
      ).toBeInTheDocument()
    })
  })

  describe('Practical prompts for Builder', () => {
    it('renders Practical Prompts for Builder Sessions subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Practical Prompts for Builder Sessions' })
      ).toBeInTheDocument()
    })

    it('displays PRD Mode: Starting implementation prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Starting implementation of a ready PRD/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Start implementing docs\/prd\.json/i)
      ).toBeInTheDocument()
    })

    it('displays PRD Mode: Continue work prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Continuing work on the next story/i)
      ).toBeInTheDocument()
      // Text appears in both Practical Prompts and Quick Start Prompts sections
      const continuePrompts = screen.getAllByText(/Continue with the PRD/i)
      expect(continuePrompts.length).toBeGreaterThanOrEqual(1)
    })

    it('displays Ad-hoc: Bug fix prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Fixing a bug without a PRD/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Fix the login form validation/i)
      ).toBeInTheDocument()
    })

    it('displays Ad-hoc: Refactoring prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Quick refactoring task/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Extract the date formatting logic/i)
      ).toBeInTheDocument()
    })

    it('displays Ad-hoc: New endpoint prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Adding a new API endpoint/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Add a GET \/api\/users\/me endpoint/i)
      ).toBeInTheDocument()
    })

    it('displays @builder mentions in prompt code blocks', () => {
      render(<HumanWorkModesPage />)

      const builderMentions = screen.getAllByText('@builder')
      // Should have multiple @builder mentions across Builder prompt examples
      expect(builderMentions.length).toBeGreaterThanOrEqual(5)
    })
  })

  describe('Pro Tips for Working with Builder', () => {
    it('renders Pro Tips section', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Pro Tips for Working with Builder' })
      ).toBeInTheDocument()
    })

    it('displays tip about letting Builder commit', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Let it commit:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/creates clean, reviewable history/i)
      ).toBeInTheDocument()
    })

    it('displays tip about checking progress.txt', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Check progress\.txt:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/logs learnings here/i)
      ).toBeInTheDocument()
    })

    it('displays tip about automatic quality gates', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Quality gates are automatic:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Lint and typecheck run before commits/i)
      ).toBeInTheDocument()
    })

    it('displays tip about starting with PRD mode', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Start with PRD mode:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/better tracking and traceability/i)
      ).toBeInTheDocument()
    })
  })
})

describe('HumanWorkModesPage - US-005: End-to-end human operating loops', () => {
  describe('Operating Loops section header and introduction', () => {
    it('renders End-to-End Operating Loops section header', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 2, name: 'End-to-End Operating Loops' })
      ).toBeInTheDocument()
    })

    it('displays section subtitle about repeatable workflows', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Repeatable workflows from idea to shipped change/i)
      ).toBeInTheDocument()
    })

    it('explains loops provide predictable path from idea to production', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/These loops give you a predictable path from idea to production/i)
      ).toBeInTheDocument()
    })

    it('mentions clear handoff points between agents', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/clear handoff points between agents/i)
      ).toBeInTheDocument()
    })

    it('mentions explicit completion criteria', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/explicit completion criteria/i)
      ).toBeInTheDocument()
    })
  })

  describe('New Feature Loop - concrete loop with handoffs', () => {
    it('renders New Feature Loop heading', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'New Feature Loop' })
      ).toBeInTheDocument()
    })

    it('explains when to use New Feature Loop', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Use this loop when building a new capability that requires planning/i)
      ).toBeInTheDocument()
    })

    it('shows Planner as first step (Plan with @planner)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Plan with @planner' })
      ).toBeInTheDocument()
    })

    it('shows explicit handoff from Planner to Builder (PRD marked ready)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Handoff: PRD marked ready/i)
      ).toBeInTheDocument()
    })

    it('shows Builder as second step (Implement with @builder)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Implement with @builder' })
      ).toBeInTheDocument()
    })

    it('shows optional handoff to Toolkit (Builder queues toolkit gaps)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Optional Handoff: Builder queues toolkit gaps/i)
      ).toBeInTheDocument()
    })

    it('shows optional Toolkit step for applying updates', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Apply toolkit updates (if queued)' })
      ).toBeInTheDocument()
    })

    it('shows completion handoff (All stories pass, PR ready)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Completion: All stories pass, PR ready/i)
      ).toBeInTheDocument()
    })

    it('shows Ship as final step', () => {
      render(<HumanWorkModesPage />)

      // Multiple "Ship" headings exist (one per loop), check first one in New Feature Loop context
      const shipHeadings = screen.getAllByRole('heading', { level: 4, name: 'Ship' })
      expect(shipHeadings.length).toBeGreaterThanOrEqual(1)
    })

    it('displays clear completion criteria for New Feature Loop', () => {
      render(<HumanWorkModesPage />)

      // Multiple "Loop Complete When:" headings exist (one per loop)
      const loopCompleteHeadings = screen.getAllByRole('heading', { level: 5, name: 'Loop Complete When:' })
      expect(loopCompleteHeadings.length).toBeGreaterThanOrEqual(1)
    })

    it('lists completion criterion: all stories have passes: true', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/All stories in prd\.json have/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText('passes: true')
      ).toBeInTheDocument()
    })

    it('lists completion criterion: all tests pass', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/All tests pass \(unit \+ E2E if applicable\)/i)
      ).toBeInTheDocument()
    })

    it('lists completion criterion: PR merged to main', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('PR merged to main branch')
      ).toBeInTheDocument()
    })

    it('lists completion criterion: PRD archived', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/PRD archived to docs\/prds\/archive\//i)
      ).toBeInTheDocument()
    })
  })

  describe('Quick Fix Loop - concrete loop for ad-hoc work', () => {
    it('renders Quick Fix Loop heading', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Quick Fix Loop' })
      ).toBeInTheDocument()
    })

    it('explains when to use Quick Fix Loop', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Use this loop for bug fixes, small improvements, and one-off tasks/i)
      ).toBeInTheDocument()
    })

    it('shows Builder ad-hoc mode as first step', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Fix directly with @builder (ad-hoc mode)' })
      ).toBeInTheDocument()
    })

    it('shows handoff indicating Builder implements and commits', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Builder implements \+ commits/i)
      ).toBeInTheDocument()
    })

    it('shows Verify step', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Verify the fix' })
      ).toBeInTheDocument()
    })

    it('shows completion handoff (Fix verified, ready to push)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Completion: Fix verified, ready to push/i)
      ).toBeInTheDocument()
    })

    it('displays clear completion criteria for Quick Fix Loop', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Fix implemented and committed')
      ).toBeInTheDocument()
    })

    it('lists completion criterion: quality gates pass', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Quality gates pass (lint, typecheck)')
      ).toBeInTheDocument()
    })

    it('lists completion criterion: changes pushed or PR created', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Changes pushed or PR created')
      ).toBeInTheDocument()
    })
  })

  describe('Toolkit Sync Loop - concrete loop with Toolkit handoff', () => {
    it('renders Toolkit Sync Loop heading', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Toolkit Sync Loop' })
      ).toBeInTheDocument()
    })

    it('explains when to use Toolkit Sync Loop', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Use this loop periodically to apply queued improvements/i)
      ).toBeInTheDocument()
    })

    it('shows Review step with @toolkit as first step', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Review pending updates with @toolkit' })
      ).toBeInTheDocument()
    })

    it('shows decision handoff (Approve changes to apply)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Decision: Approve changes to apply/i)
      ).toBeInTheDocument()
    })

    it('shows Apply approved changes step', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Apply approved changes' })
      ).toBeInTheDocument()
    })

    it('shows verify handoff to Builder (Test changes on a project)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Verify: Test changes on a project/i)
      ).toBeInTheDocument()
    })

    it('shows handoff from Toolkit to Builder for verification', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Test on a project with @builder' })
      ).toBeInTheDocument()
    })

    it('shows completion handoff (Toolkit updated, verified working)', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Completion: Toolkit updated, verified working/i)
      ).toBeInTheDocument()
    })

    it('shows Sync complete as final step', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Sync complete' })
      ).toBeInTheDocument()
    })

    it('displays clear completion criteria for Toolkit Sync Loop', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Pending updates reviewed \(applied, deferred, or skipped\)/i)
      ).toBeInTheDocument()
    })

    it('lists completion criterion: toolkit changes committed', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Toolkit changes committed')
      ).toBeInTheDocument()
    })

    it('lists completion criterion: changes verified on project', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('Changes verified on at least one project')
      ).toBeInTheDocument()
    })
  })

  describe('Choosing the Right Loop guidance', () => {
    it('renders Choosing the Right Loop heading', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Choosing the Right Loop' })
      ).toBeInTheDocument()
    })

    it('displays loop comparison table with Loop column', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByRole('columnheader', { name: 'Loop' })).toBeInTheDocument()
    })

    it('displays Agents Involved column', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByRole('columnheader', { name: 'Agents Involved' })).toBeInTheDocument()
    })

    it('shows New Feature loop for multi-story feature with Planner → Builder handoff', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Planner → Builder (→ Toolkit)')).toBeInTheDocument()
    })

    it('shows Quick Fix loop for bug fix with Builder only', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Bug fix or quick improvement')).toBeInTheDocument()
      expect(screen.getAllByText('Builder only').length).toBeGreaterThanOrEqual(1)
    })

    it('shows Toolkit Sync loop for improving agent behavior', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Improving agent behavior')).toBeInTheDocument()
      expect(screen.getAllByText('Toolkit → Builder (verify)').length).toBeGreaterThanOrEqual(1)
    })

    it('shows Toolkit Sync loop for weekly maintenance', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Weekly maintenance')).toBeInTheDocument()
    })
  })

  describe('Pro Tips for Operating Loops', () => {
    it('renders Pro Tips section for loops', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Pro Tips for Operating Loops' })
      ).toBeInTheDocument()
    })

    it('displays tip about not mixing loops', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Don't mix loops:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/pause and start a New Feature loop with proper planning/i)
      ).toBeInTheDocument()
    })

    it('displays tip about batching Toolkit Syncs', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Batch Toolkit Syncs:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Let 3-5 updates accumulate for context/i)
      ).toBeInTheDocument()
    })

    it('displays tip about checking progress.txt first', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Check progress\.txt first:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Codebase Patterns section to avoid repeating mistakes/i)
      ).toBeInTheDocument()
    })

    it('displays tip about trusting completion criteria', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Trust the completion criteria:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Partial completion leads to drift/i)
      ).toBeInTheDocument()
    })
  })
})

describe('HumanWorkModesPage - US-004: Toolkit section', () => {
  describe('Toolkit section header and content responsibilities', () => {
    it('renders Working with Toolkit section header', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 2, name: 'Working with Toolkit' })
      ).toBeInTheDocument()
    })

    it('displays Toolkit section subtitle', () => {
      render(<HumanWorkModesPage />)

      // The section subtitle appears in both overview card and section header
      const subtitles = screen.getAllByText(/Evolve agents, skills, and scaffolds safely/i)
      expect(subtitles.length).toBeGreaterThanOrEqual(2)
    })

    it('explains Toolkit operates at a different level than Planner and Builder', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Toolkit operates at a different level than Planner and Builder/i)
      ).toBeInTheDocument()
    })

    it('mentions Toolkit manages shared infrastructure', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/shared infrastructure.*agents, skills, scaffolds/i)
      ).toBeInTheDocument()
    })

    it('explains changes ripple across all projects', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Changes here ripple across every project/i)
      ).toBeInTheDocument()
    })
  })

  describe('The Key Distinction: Toolkit vs Project', () => {
    it('renders The Key Distinction subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'The Key Distinction: Toolkit vs Project' })
      ).toBeInTheDocument()
    })

    it('displays Project Level card', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Project Level' })
      ).toBeInTheDocument()
    })

    it('displays Toolkit Level card', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Toolkit Level' })
      ).toBeInTheDocument()
    })

    it('explains Project Level is handled by @planner and @builder', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/@planner and @builder/i)
      ).toBeInTheDocument()
    })

    it('explains Toolkit Level is handled by @toolkit', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/handled by @toolkit/i)
      ).toBeInTheDocument()
    })

    it('displays Project Level uses docs/prd.json', () => {
      render(<HumanWorkModesPage />)

      // Multiple instances of docs/prd.json appear on the page
      const prdJsonRefs = screen.getAllByText(/docs\/prd\.json/i)
      expect(prdJsonRefs.length).toBeGreaterThanOrEqual(1)
    })

    it('displays Project Level uses docs/project.json', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('docs/project.json')).toBeInTheDocument()
    })

    it('displays Toolkit Level manages agents/*.md', () => {
      render(<HumanWorkModesPage />)

      const agentPaths = screen.getAllByText('agents/*.md')
      expect(agentPaths.length).toBeGreaterThanOrEqual(1)
    })

    it('displays Toolkit Level manages skills/*/SKILL.md', () => {
      render(<HumanWorkModesPage />)

      const skillPaths = screen.getAllByText('skills/*/SKILL.md')
      expect(skillPaths.length).toBeGreaterThanOrEqual(1)
    })

    it('displays Toolkit Level manages scaffolds/*', () => {
      render(<HumanWorkModesPage />)

      const scaffoldPaths = screen.getAllByText('scaffolds/*')
      expect(scaffoldPaths.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('What Toolkit Changes', () => {
    it('renders What Toolkit Changes subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'What Toolkit Changes' })
      ).toBeInTheDocument()
    })

    it('explains Toolkit owns the meta layer', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Toolkit owns the.*meta.*layer/i)
      ).toBeInTheDocument()
    })

    it('displays Agents card with heading', () => {
      render(<HumanWorkModesPage />)

      // There are multiple Agents headings - one in the overview card and one in the What Toolkit Changes section
      const agentsHeadings = screen.getAllByRole('heading', { name: 'Agents' })
      expect(agentsHeadings.length).toBeGreaterThanOrEqual(1)
    })

    it('explains Agents are instruction sets', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/instruction sets that define how each agent thinks and acts/i)
      ).toBeInTheDocument()
    })

    it('displays Skills card with description', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Skills' })
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Specialized workflows agents can load on demand/i)
      ).toBeInTheDocument()
    })

    it('displays Scaffolds card with description', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Scaffolds' })
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Templates for new projects/i)
      ).toBeInTheDocument()
    })

    it('displays Data Files card with description', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Data Files' })
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Configuration and reference data/i)
      ).toBeInTheDocument()
    })
  })

  describe('When to Use Toolkit vs Project Flows comparison', () => {
    it('renders When to Use Toolkit vs Project Flows subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'When to Use Toolkit vs Project Flows' })
      ).toBeInTheDocument()
    })

    it('displays comparison table with Scenario column', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByRole('columnheader', { name: 'Scenario' })).toBeInTheDocument()
    })

    it('displays Builder use case for fixing a bug in your app', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Fix a bug in your app')).toBeInTheDocument()
      expect(screen.getByText('Project-specific change')).toBeInTheDocument()
    })

    it('displays Toolkit use case for improving Builder test handling', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Improve how Builder handles tests')).toBeInTheDocument()
      expect(screen.getByText('Changes agent behavior globally')).toBeInTheDocument()
    })

    it('displays Planner use case for planning a new feature', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Plan a new feature')).toBeInTheDocument()
      expect(screen.getByText('Project-specific requirements')).toBeInTheDocument()
    })

    it('displays Toolkit use case for adding a new skill', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Add a new skill for form handling')).toBeInTheDocument()
      expect(screen.getByText('Reusable across projects')).toBeInTheDocument()
    })

    it('displays Builder use case for adding project-specific docs', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Add project-specific docs')).toBeInTheDocument()
      expect(screen.getByText('Lives in project repo')).toBeInTheDocument()
    })

    it('displays Toolkit use case for updating scaffold templates', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText('Update scaffold templates')).toBeInTheDocument()
      expect(screen.getByText('Affects new project creation')).toBeInTheDocument()
    })

    it('displays rule of thumb guidance', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Rule of thumb:/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/If your change affects only the current project, use @planner or @builder/i)
      ).toBeInTheDocument()
    })
  })

  describe('Pending-Updates Handoff Flow', () => {
    it('renders The Pending-Updates Handoff Flow subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'The Pending-Updates Handoff Flow' })
      ).toBeInTheDocument()
    })

    it('explains project agents cannot modify toolkit files directly', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Project agents can't modify toolkit files directly/i)
      ).toBeInTheDocument()
    })

    it('explains requests are queued for @toolkit to review', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/they queue requests that @toolkit reviews and applies/i)
      ).toBeInTheDocument()
    })

    it('displays handoff flow step 1: @builder discovers a toolkit gap', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/@builder discovers a toolkit gap while working/i)
      ).toBeInTheDocument()
    })

    it('displays handoff flow step 1 example', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/This project uses Playwright but there's no E2E skill/i)
      ).toBeInTheDocument()
    })

    it('displays handoff flow step 2: writes to pending-updates/', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/@builder writes request to/i)
      ).toBeInTheDocument()
      // Multiple pending-updates/ references on the page
      const pendingUpdatesRefs = screen.getAllByText('pending-updates/')
      expect(pendingUpdatesRefs.length).toBeGreaterThanOrEqual(1)
    })

    it('displays pending-updates file format', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText('YYYY-MM-DD-agent-description.md')
      ).toBeInTheDocument()
    })

    it('displays handoff flow step 3: invoke @toolkit to review', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/You invoke @toolkit to review pending updates/i)
      ).toBeInTheDocument()
    })

    it('displays handoff flow step 4: @toolkit applies approved changes', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/@toolkit applies approved changes to toolkit repo/i)
      ).toBeInTheDocument()
    })

    it('displays handoff flow step 5: all projects get improved agents', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/All projects get improved agents on next session/i)
      ).toBeInTheDocument()
    })

    it('explains why the indirection exists', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Why this indirection\?/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Toolkit changes are high-impact/i)
      ).toBeInTheDocument()
    })
  })

  describe('Practical prompts for Toolkit', () => {
    it('renders Practical Prompts for Toolkit Sessions subsection', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 3, name: 'Practical Prompts for Toolkit Sessions' })
      ).toBeInTheDocument()
    })

    it('displays Review prompt for pending updates', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Reviewing and applying queued updates/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Review pending updates\. Show me what's queued/i)
      ).toBeInTheDocument()
    })

    it('displays New Skill prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Creating a new skill for a common pattern/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Create a skill for \[pattern name\]/i)
      ).toBeInTheDocument()
    })

    it('displays Agent Update prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Improving an agent's behavior/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Update @builder to \[describe the behavior change\]/i)
      ).toBeInTheDocument()
    })

    it('displays Scaffold prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Creating a scaffold for a new stack/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Create a scaffold for \[stack name\]/i)
      ).toBeInTheDocument()
    })

    it('displays Audit prompt', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByText(/Checking toolkit coverage for a project/i)
      ).toBeInTheDocument()
      // Text appears in both Practical Prompts and Quick Start Prompts sections
      const auditPrompts = screen.getAllByText(/Audit toolkit coverage for \[project path\]/i)
      expect(auditPrompts.length).toBeGreaterThanOrEqual(1)
    })

    it('displays @toolkit mentions in prompt code blocks', () => {
      render(<HumanWorkModesPage />)

      const toolkitMentions = screen.getAllByText('@toolkit')
      // Should have multiple @toolkit mentions across Toolkit prompt examples (5 prompts)
      expect(toolkitMentions.length).toBeGreaterThanOrEqual(5)
    })
  })

  describe('Pro Tips for Working with Toolkit', () => {
    it('renders Pro Tips section', () => {
      render(<HumanWorkModesPage />)

      expect(
        screen.getByRole('heading', { level: 4, name: 'Pro Tips for Working with Toolkit' })
      ).toBeInTheDocument()
    })

    it('displays tip about batching reviews', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Batch your reviews:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Let updates accumulate for a few days/i)
      ).toBeInTheDocument()
    })

    it('displays tip about testing on one project first', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Test on one project first:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/run a project through @builder to verify/i)
      ).toBeInTheDocument()
    })

    it('displays tip about documenting skill triggers', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Document skill triggers:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Good skills have clear trigger phrases/i)
      ).toBeInTheDocument()
    })

    it('displays tip about keeping agents focused', () => {
      render(<HumanWorkModesPage />)

      expect(screen.getByText(/Keep agents focused:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/If behavior gets complex, extract it to a skill/i)
      ).toBeInTheDocument()
    })
  })
})
