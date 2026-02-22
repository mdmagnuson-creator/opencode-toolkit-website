import { test, expect } from '@playwright/test';

/**
 * US-003: Builder Section Content
 * 
 * E2E Scope: Verifies the Working with Builder section renders with clear
 * mode guidance (PRD vs ad-hoc), update flow visibility, expected outcomes,
 * and practical prompts.
 */

test.describe('US-003: Builder Section', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/concepts/the-human-in-the-loop');
  });

  test.describe('Section structure and header', () => {
    
    test('displays Working with Builder section heading', async ({ page }) => {
      const sectionHeading = page.getByRole('heading', { level: 2, name: 'Working with Builder' });
      await expect(sectionHeading).toBeVisible();
    });

    test('displays section subtitle about PRDs and ad-hoc tasks', async ({ page }) => {
      // The section has a subtitle explaining Builder's purpose
      await expect(
        page.getByText('Execute PRDs or handle ad-hoc tasks', { exact: true })
      ).toBeVisible();
    });

    test('explains Builder as implementation partner', async ({ page }) => {
      await expect(
        page.getByText('Builder is your implementation partner')
      ).toBeVisible();
    });
  });

  test.describe('Two Operating Modes guidance', () => {
    
    test('displays Two Operating Modes heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Two Operating Modes' })
      ).toBeVisible();
    });

    test('explains mode selection for best results', async ({ page }) => {
      await expect(
        page.getByText('Choose the right mode to get the best results')
      ).toBeVisible();
    });

    test('displays PRD Mode card with heading', async ({ page }) => {
      // Use exact match to avoid matching "PRD Mode Outcomes"
      await expect(
        page.getByRole('heading', { name: 'PRD Mode', exact: true })
      ).toBeVisible();
    });

    test('displays Ad-hoc Mode card with heading', async ({ page }) => {
      // Use exact match to avoid matching "Ad-hoc Mode Outcomes"
      await expect(
        page.getByRole('heading', { name: 'Ad-hoc Mode', exact: true })
      ).toBeVisible();
    });

    test('PRD Mode describes story-by-story execution', async ({ page }) => {
      await expect(
        page.getByText('Systematic story-by-story execution')
      ).toBeVisible();
    });

    test('PRD Mode mentions auto-generated tests', async ({ page }) => {
      await expect(
        page.getByText('Auto-generates tests after each story')
      ).toBeVisible();
    });

    test('PRD Mode mentions progress tracking in prd.json', async ({ page }) => {
      await expect(
        page.getByText('Tracks progress in prd.json')
      ).toBeVisible();
    });

    test('Ad-hoc Mode describes immediate execution', async ({ page }) => {
      await expect(
        page.getByText('Immediate execution')
      ).toBeVisible();
    });

    test('Ad-hoc Mode mentions batch/verify/ship workflow', async ({ page }) => {
      await expect(
        page.getByText('batch/verify/ship workflow')
      ).toBeVisible();
    });

    test('Ad-hoc Mode mentions good for bug fixes', async ({ page }) => {
      await expect(
        page.getByText('Great for bug fixes and refactoring')
      ).toBeVisible();
    });
  });

  test.describe('When to Use Each Mode comparison table', () => {
    
    test('displays When to Use Each Mode heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'When to Use Each Mode' })
      ).toBeVisible();
    });

    test('displays comparison table with Task column', async ({ page }) => {
      await expect(
        page.getByRole('columnheader', { name: 'Task' })
      ).toBeVisible();
    });

    test('displays comparison table with Mode column', async ({ page }) => {
      await expect(
        page.getByRole('columnheader', { name: 'Mode' })
      ).toBeVisible();
    });

    test('displays comparison table with Why column', async ({ page }) => {
      // Scope to #builder section to avoid conflict with Planner table
      await expect(
        page.locator('#builder').getByRole('columnheader', { name: 'Why' })
      ).toBeVisible();
    });

    test('shows PRD mode for multi-story feature', async ({ page }) => {
      // Scope to #builder section; use exact match for Builder's table
      await expect(
        page.locator('#builder').getByRole('cell', { name: 'Multi-story feature', exact: true })
      ).toBeVisible();
      
      await expect(
        page.locator('#builder').getByRole('cell', { name: 'Structured execution with progress tracking' })
      ).toBeVisible();
    });

    test('shows Ad-hoc mode for quick bug fix', async ({ page }) => {
      // Scope to #builder section to avoid conflict with Planner table
      await expect(
        page.locator('#builder').getByRole('cell', { name: 'Quick bug fix' })
      ).toBeVisible();
      
      await expect(
        page.locator('#builder').getByRole('cell', { name: 'No planning overhead for simple changes' })
      ).toBeVisible();
    });

    test('shows Ad-hoc mode for code refactoring', async ({ page }) => {
      await expect(
        page.getByRole('cell', { name: 'Code refactoring' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('cell', { name: 'Technical work with implicit requirements' })
      ).toBeVisible();
    });

    test('shows PRD mode for launching new feature', async ({ page }) => {
      await expect(
        page.getByRole('cell', { name: 'Launch a new feature' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('cell', { name: 'Multiple stories, acceptance criteria needed' })
      ).toBeVisible();
    });
  });

  test.describe('The Update Flow visibility', () => {
    
    test('displays The Update Flow heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'The Update Flow' })
      ).toBeVisible();
    });

    test('explains update flow purpose', async ({ page }) => {
      await expect(
        page.getByText('Builder participates in a continuous improvement cycle')
      ).toBeVisible();
    });

    test('shows step 1: Agent discovers a gap', async ({ page }) => {
      await expect(
        page.getByText('Agent discovers a gap or improvement')
      ).toBeVisible();
    });

    test('shows step 2: Queues update in pending-updates', async ({ page }) => {
      await expect(
        page.getByText(/Queues update in/)
      ).toBeVisible();
      
      // Verify the pending-updates/ code path is mentioned; scope to #builder to avoid conflict with Toolkit section
      await expect(
        page.locator('#builder code').filter({ hasText: 'pending-updates/' })
      ).toBeVisible();
    });

    test('shows step 3: @toolkit reviews changes', async ({ page }) => {
      await expect(
        page.getByText('@toolkit reviews and applies toolkit changes')
      ).toBeVisible();
    });

    test('shows step 4: @builder applies project updates', async ({ page }) => {
      await expect(
        page.getByText('@builder applies project updates when you work')
      ).toBeVisible();
    });

    test('displays user control note', async ({ page }) => {
      await expect(
        page.getByText('You stay in control:', { exact: false })
      ).toBeVisible();
      
      await expect(
        page.getByText(/Updates are queued, not applied automatically/)
      ).toBeVisible();
    });
  });

  test.describe('Expected Outcomes visibility', () => {
    
    test('displays Expected Outcomes heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Expected Outcomes' })
      ).toBeVisible();
    });

    test('displays PRD Mode Outcomes heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'PRD Mode Outcomes' })
      ).toBeVisible();
    });

    test('displays Ad-hoc Mode Outcomes heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Ad-hoc Mode Outcomes' })
      ).toBeVisible();
    });

    test('PRD Mode shows story committed separately', async ({ page }) => {
      await expect(
        page.getByText('Each story implemented and committed separately')
      ).toBeVisible();
    });

    test('PRD Mode shows unit tests auto-generated', async ({ page }) => {
      await expect(
        page.getByText('Unit tests auto-generated after each story')
      ).toBeVisible();
    });

    test('PRD Mode shows E2E tests queued', async ({ page }) => {
      await expect(
        page.getByText('E2E tests queued for affected UI areas')
      ).toBeVisible();
    });

    test('PRD Mode shows progress tracked', async ({ page }) => {
      await expect(
        page.getByText('Progress tracked in prd.json and progress.txt')
      ).toBeVisible();
    });

    test('PRD Mode shows feature branch ready', async ({ page }) => {
      await expect(
        page.getByText('Feature branch ready for PR when complete')
      ).toBeVisible();
    });

    test('Ad-hoc Mode shows quick completion', async ({ page }) => {
      await expect(
        page.getByText('Task completed and committed quickly')
      ).toBeVisible();
    });

    test('Ad-hoc Mode shows tests on request', async ({ page }) => {
      await expect(
        page.getByText('Tests generated on request or at completion')
      ).toBeVisible();
    });

    test('Ad-hoc Mode shows quality gates enforced', async ({ page }) => {
      await expect(
        page.getByText('Quality gates still enforced (lint, typecheck)')
      ).toBeVisible();
    });

    test('Ad-hoc Mode shows no PRD overhead', async ({ page }) => {
      await expect(
        page.getByText('No PRD overhead for simple changes')
      ).toBeVisible();
    });

    test('Ad-hoc Mode shows ready to push', async ({ page }) => {
      await expect(
        page.getByText('Ready to push or create PR immediately')
      ).toBeVisible();
    });
  });

  test.describe('Practical Prompts for Builder Sessions', () => {
    
    test('displays Practical Prompts heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Practical Prompts for Builder Sessions' })
      ).toBeVisible();
    });

    test('shows copy-ready prompts intro text', async ({ page }) => {
      await expect(
        page.getByText(/copy-ready prompts for common Builder scenarios/i)
      ).toBeVisible();
    });

    test('displays PRD Mode start prompt', async ({ page }) => {
      await expect(
        page.getByText('Starting implementation of a ready PRD')
      ).toBeVisible();
    });

    test('displays PRD Mode continue prompt', async ({ page }) => {
      await expect(
        page.getByText('Continuing work on the next story')
      ).toBeVisible();
    });

    test('displays Ad-hoc bug fix prompt', async ({ page }) => {
      await expect(
        page.getByText('Fixing a bug without a PRD')
      ).toBeVisible();
    });

    test('displays Ad-hoc refactoring prompt', async ({ page }) => {
      await expect(
        page.getByText('Quick refactoring task')
      ).toBeVisible();
    });

    test('displays Ad-hoc new endpoint prompt', async ({ page }) => {
      await expect(
        page.getByText('Adding a new API endpoint')
      ).toBeVisible();
    });

    test('shows @builder mentions in prompt code blocks', async ({ page }) => {
      // Find all @builder mentions in the Builder section prompts
      // Includes 5 prompt examples + 1 in update flow step 4
      const builderMentions = page.locator('#builder span').filter({ hasText: '@builder' });
      await expect(builderMentions).toHaveCount(6);
    });
  });

  test.describe('Pro Tips for Working with Builder', () => {
    
    test('displays Pro Tips heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Pro Tips for Working with Builder' })
      ).toBeVisible();
    });

    test('shows Let it commit tip', async ({ page }) => {
      await expect(
        page.getByText('Let it commit:', { exact: false })
      ).toBeVisible();
    });

    test('shows Check progress.txt tip', async ({ page }) => {
      await expect(
        page.getByText('Check progress.txt:', { exact: false })
      ).toBeVisible();
    });

    test('shows Quality gates are automatic tip', async ({ page }) => {
      await expect(
        page.getByText('Quality gates are automatic:', { exact: false })
      ).toBeVisible();
    });

    test('shows Start with PRD mode tip', async ({ page }) => {
      await expect(
        page.getByText('Start with PRD mode:', { exact: false })
      ).toBeVisible();
    });
  });

  test.describe('Dark mode support', () => {
    
    test('Builder section remains visible in dark mode', async ({ page }) => {
      // Enable dark mode
      await page.evaluate(() => {
        document.documentElement.classList.add('dark');
      });

      // Verify key section elements remain visible
      await expect(
        page.getByRole('heading', { level: 2, name: 'Working with Builder' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Two Operating Modes' })
      ).toBeVisible();
      
      // Use exact match to avoid matching "PRD Mode Outcomes" / "Ad-hoc Mode Outcomes"
      await expect(
        page.getByRole('heading', { name: 'PRD Mode', exact: true })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Ad-hoc Mode', exact: true })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'The Update Flow' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Expected Outcomes' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Practical Prompts for Builder Sessions' })
      ).toBeVisible();
    });
  });
});
