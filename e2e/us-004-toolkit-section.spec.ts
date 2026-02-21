import { test, expect } from '@playwright/test';

/**
 * US-004: Toolkit Section Content
 * 
 * E2E Scope: Verifies the Working with Toolkit section renders with clear
 * toolkit-vs-project guidance, what toolkit changes, when to use each,
 * pending-updates handoff flow, practical prompts, and pro tips.
 */

test.describe('US-004: Toolkit Section', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/concepts/human-work-modes');
  });

  test.describe('Section structure and header', () => {
    
    test('displays Working with Toolkit section heading', async ({ page }) => {
      const sectionHeading = page.getByRole('heading', { level: 2, name: 'Working with Toolkit' });
      await expect(sectionHeading).toBeVisible();
    });

    test('displays section subtitle about agents and skills', async ({ page }) => {
      // Scope to #toolkit section to avoid matching overview card
      await expect(
        page.locator('#toolkit').getByText('Evolve agents, skills, and scaffolds safely')
      ).toBeVisible();
    });

    test('explains Toolkit operates at a different level', async ({ page }) => {
      await expect(
        page.getByText('Toolkit operates at a different level than Planner and Builder')
      ).toBeVisible();
    });

    test('explains changes ripple across projects', async ({ page }) => {
      await expect(
        page.getByText('Changes here ripple across every project that uses the toolkit')
      ).toBeVisible();
    });
  });

  test.describe('The Key Distinction: Toolkit vs Project', () => {
    
    test('displays The Key Distinction heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'The Key Distinction: Toolkit vs Project' })
      ).toBeVisible();
    });

    test('explains understanding which level prevents confusion', async ({ page }) => {
      await expect(
        page.getByText('Understanding which level you\'re working at prevents confusion')
      ).toBeVisible();
    });

    test('displays Project Level card with heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Project Level' })
      ).toBeVisible();
    });

    test('displays Toolkit Level card with heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Toolkit Level' })
      ).toBeVisible();
    });

    test('Project Level describes project-specific changes', async ({ page }) => {
      await expect(
        page.getByText('Changes that affect one project')
      ).toBeVisible();
    });

    test('Project Level mentions @planner and @builder', async ({ page }) => {
      await expect(
        page.getByText('Features, bug fixes, refactoring—all handled by @planner and @builder')
      ).toBeVisible();
    });

    test('Project Level shows docs/prd.json path', async ({ page }) => {
      await expect(
        page.locator('#toolkit code').filter({ hasText: 'docs/prd.json' })
      ).toBeVisible();
    });

    test('Project Level shows docs/project.json path', async ({ page }) => {
      await expect(
        page.locator('#toolkit code').filter({ hasText: 'docs/project.json' })
      ).toBeVisible();
    });

    test('Project Level shows docs/progress.txt path', async ({ page }) => {
      await expect(
        page.locator('#toolkit code').filter({ hasText: 'docs/progress.txt' })
      ).toBeVisible();
    });

    test('Toolkit Level describes all-project changes', async ({ page }) => {
      await expect(
        page.getByText('Changes that affect all projects')
      ).toBeVisible();
    });

    test('Toolkit Level mentions @toolkit', async ({ page }) => {
      await expect(
        page.getByText('Agent behavior, skill definitions, scaffold templates—handled by @toolkit')
      ).toBeVisible();
    });

    test('Toolkit Level shows agents/*.md path', async ({ page }) => {
      // Path appears in both comparison card and What Toolkit Changes section; verify first instance (card)
      await expect(
        page.locator('#toolkit code').filter({ hasText: 'agents/*.md' }).first()
      ).toBeVisible();
    });

    test('Toolkit Level shows skills/*/SKILL.md path', async ({ page }) => {
      // Path appears in both comparison card and What Toolkit Changes section; verify first instance (card)
      await expect(
        page.locator('#toolkit code').filter({ hasText: 'skills/*/SKILL.md' }).first()
      ).toBeVisible();
    });

    test('Toolkit Level shows scaffolds/* path', async ({ page }) => {
      // Path appears in both comparison card and What Toolkit Changes section; verify first instance (card)
      await expect(
        page.locator('#toolkit code').filter({ hasText: 'scaffolds/*' }).first()
      ).toBeVisible();
    });
  });

  test.describe('What Toolkit Changes', () => {
    
    test('displays What Toolkit Changes heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'What Toolkit Changes' })
      ).toBeVisible();
    });

    test('explains Toolkit owns the meta layer', async ({ page }) => {
      await expect(
        page.getByText('Toolkit owns the "meta" layer')
      ).toBeVisible();
    });

    test('displays Agents item with heading', async ({ page }) => {
      // Use exact match to get the subsection heading, not card titles
      await expect(
        page.locator('#toolkit').getByRole('heading', { name: 'Agents', exact: true })
      ).toBeVisible();
    });

    test('Agents item describes instruction sets', async ({ page }) => {
      await expect(
        page.getByText('The instruction sets that define how each agent thinks and acts')
      ).toBeVisible();
    });

    test('displays Skills item with heading', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('heading', { name: 'Skills', exact: true })
      ).toBeVisible();
    });

    test('Skills item describes specialized workflows', async ({ page }) => {
      await expect(
        page.getByText('Specialized workflows agents can load on demand')
      ).toBeVisible();
    });

    test('displays Scaffolds item with heading', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('heading', { name: 'Scaffolds', exact: true })
      ).toBeVisible();
    });

    test('Scaffolds item describes project templates', async ({ page }) => {
      await expect(
        page.getByText('Templates for new projects')
      ).toBeVisible();
    });

    test('displays Data Files item with heading', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('heading', { name: 'Data Files', exact: true })
      ).toBeVisible();
    });

    test('Data Files item describes configuration data', async ({ page }) => {
      await expect(
        page.getByText('Configuration and reference data')
      ).toBeVisible();
    });

    test('Data Files shows data/*.json path', async ({ page }) => {
      await expect(
        page.locator('#toolkit code').filter({ hasText: 'data/*.json' })
      ).toBeVisible();
    });
  });

  test.describe('When to Use Toolkit vs Project Flows comparison table', () => {
    
    test('displays When to Use Toolkit vs Project Flows heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'When to Use Toolkit vs Project Flows' })
      ).toBeVisible();
    });

    test('displays comparison table with Scenario column', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('columnheader', { name: 'Scenario' })
      ).toBeVisible();
    });

    test('displays comparison table with Agent column', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('columnheader', { name: 'Agent' })
      ).toBeVisible();
    });

    test('displays comparison table with Why column', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('columnheader', { name: 'Why' })
      ).toBeVisible();
    });

    test('shows Builder for fixing a bug', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Fix a bug in your app' })
      ).toBeVisible();
      
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Project-specific change' })
      ).toBeVisible();
    });

    test('shows Toolkit for improving Builder behavior', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Improve how Builder handles tests' })
      ).toBeVisible();
      
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Changes agent behavior globally' })
      ).toBeVisible();
    });

    test('shows Planner for planning a feature', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Plan a new feature' })
      ).toBeVisible();
      
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Project-specific requirements' })
      ).toBeVisible();
    });

    test('shows Toolkit for adding a new skill', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Add a new skill for form handling' })
      ).toBeVisible();
      
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Reusable across projects' })
      ).toBeVisible();
    });

    test('shows Builder for project-specific docs', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Add project-specific docs' })
      ).toBeVisible();
      
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Lives in project repo' })
      ).toBeVisible();
    });

    test('shows Toolkit for updating scaffold templates', async ({ page }) => {
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Update scaffold templates' })
      ).toBeVisible();
      
      await expect(
        page.locator('#toolkit').getByRole('cell', { name: 'Affects new project creation' })
      ).toBeVisible();
    });

    test('displays rule of thumb guidance', async ({ page }) => {
      await expect(
        page.getByText('Rule of thumb:', { exact: false })
      ).toBeVisible();
      
      await expect(
        page.getByText('If your change affects only the current project, use @planner or @builder')
      ).toBeVisible();
    });
  });

  test.describe('The Pending-Updates Handoff Flow', () => {
    
    test('displays The Pending-Updates Handoff Flow heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'The Pending-Updates Handoff Flow' })
      ).toBeVisible();
    });

    test('explains project agents cannot modify toolkit files directly', async ({ page }) => {
      await expect(
        page.getByText('Project agents can\'t modify toolkit files directly')
      ).toBeVisible();
    });

    test('explains they queue requests for @toolkit', async ({ page }) => {
      await expect(
        page.getByText('they queue requests that @toolkit reviews and applies')
      ).toBeVisible();
    });

    test('shows step 1: @builder discovers a toolkit gap', async ({ page }) => {
      await expect(
        page.getByText('@builder discovers a toolkit gap while working')
      ).toBeVisible();
    });

    test('shows step 1 example about Playwright', async ({ page }) => {
      await expect(
        page.getByText('Example: "This project uses Playwright but there\'s no E2E skill"')
      ).toBeVisible();
    });

    test('shows step 2: @builder writes request to pending-updates/', async ({ page }) => {
      await expect(
        page.getByText('@builder writes request to')
      ).toBeVisible();
      
      // Verify the pending-updates/ code path is mentioned in step 2
      const step2 = page.locator('#toolkit').getByText('@builder writes request to').locator('..');
      await expect(step2.locator('code').filter({ hasText: 'pending-updates/' })).toBeVisible();
    });

    test('shows step 2 file format pattern', async ({ page }) => {
      await expect(
        page.getByText('File format:', { exact: false })
      ).toBeVisible();
      
      await expect(
        page.locator('code').filter({ hasText: 'YYYY-MM-DD-agent-description.md' })
      ).toBeVisible();
    });

    test('shows step 3: You invoke @toolkit to review', async ({ page }) => {
      await expect(
        page.getByText('You invoke @toolkit to review pending updates')
      ).toBeVisible();
    });

    test('shows step 3 asks what to do with each', async ({ page }) => {
      await expect(
        page.getByText('@toolkit shows queued requests and asks what to do with each')
      ).toBeVisible();
    });

    test('shows step 4: @toolkit applies approved changes', async ({ page }) => {
      await expect(
        page.getByText('@toolkit applies approved changes to toolkit repo')
      ).toBeVisible();
    });

    test('shows step 4 archives the request', async ({ page }) => {
      await expect(
        page.getByText('Updates agents, skills, or scaffolds; archives the request')
      ).toBeVisible();
    });

    test('shows step 5: All projects get improved agents', async ({ page }) => {
      await expect(
        page.getByText('All projects get improved agents on next session')
      ).toBeVisible();
    });

    test('shows step 5 propagation via toolkit config', async ({ page }) => {
      await expect(
        page.getByText('Changes propagate automatically via toolkit config')
      ).toBeVisible();
    });

    test('displays Why this indirection note', async ({ page }) => {
      await expect(
        page.getByText('Why this indirection?', { exact: false })
      ).toBeVisible();
    });

    test('explains preventing accidental regressions', async ({ page }) => {
      await expect(
        page.getByText('review each change before it affects all projects, preventing accidental regressions')
      ).toBeVisible();
    });
  });

  test.describe('Practical Prompts for Toolkit Sessions', () => {
    
    test('displays Practical Prompts heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Practical Prompts for Toolkit Sessions' })
      ).toBeVisible();
    });

    test('shows copy-ready prompts intro text', async ({ page }) => {
      await expect(
        page.getByText(/copy-ready prompts for common Toolkit scenarios/i)
      ).toBeVisible();
    });

    test('displays Review prompt', async ({ page }) => {
      await expect(
        page.getByText('Reviewing and applying queued updates')
      ).toBeVisible();
    });

    test('displays New Skill prompt', async ({ page }) => {
      await expect(
        page.getByText('Creating a new skill for a common pattern')
      ).toBeVisible();
    });

    test('displays Agent Update prompt', async ({ page }) => {
      await expect(
        page.getByText('Improving an agent\'s behavior')
      ).toBeVisible();
    });

    test('displays Scaffold prompt', async ({ page }) => {
      await expect(
        page.getByText('Creating a scaffold for a new stack')
      ).toBeVisible();
    });

    test('displays Audit prompt', async ({ page }) => {
      await expect(
        page.getByText('Checking toolkit coverage for a project')
      ).toBeVisible();
    });

    test('shows @toolkit mentions in prompt code blocks', async ({ page }) => {
      // Find all @toolkit mentions in the Toolkit section prompts
      const toolkitMentions = page.locator('#toolkit span').filter({ hasText: '@toolkit' });
      // 5 prompt examples + mentions in the pending-updates flow steps
      await expect(toolkitMentions).toHaveCount(7);
    });
  });

  test.describe('Pro Tips for Working with Toolkit', () => {
    
    test('displays Pro Tips heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Pro Tips for Working with Toolkit' })
      ).toBeVisible();
    });

    test('shows Batch your reviews tip', async ({ page }) => {
      await expect(
        page.getByText('Batch your reviews:', { exact: false })
      ).toBeVisible();
    });

    test('shows Test on one project first tip', async ({ page }) => {
      await expect(
        page.getByText('Test on one project first:', { exact: false })
      ).toBeVisible();
    });

    test('shows Document skill triggers tip', async ({ page }) => {
      await expect(
        page.getByText('Document skill triggers:', { exact: false })
      ).toBeVisible();
    });

    test('shows Keep agents focused tip', async ({ page }) => {
      await expect(
        page.getByText('Keep agents focused:', { exact: false })
      ).toBeVisible();
    });
  });

  test.describe('Dark mode support', () => {
    
    test('Toolkit section remains visible in dark mode', async ({ page }) => {
      // Enable dark mode
      await page.evaluate(() => {
        document.documentElement.classList.add('dark');
      });

      // Verify key section elements remain visible
      await expect(
        page.getByRole('heading', { level: 2, name: 'Working with Toolkit' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'The Key Distinction: Toolkit vs Project' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Project Level' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Toolkit Level' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'What Toolkit Changes' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'When to Use Toolkit vs Project Flows' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'The Pending-Updates Handoff Flow' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Practical Prompts for Toolkit Sessions' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Pro Tips for Working with Toolkit' })
      ).toBeVisible();
    });
  });
});
