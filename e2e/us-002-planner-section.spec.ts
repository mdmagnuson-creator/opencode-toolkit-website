import { test, expect } from '@playwright/test';

/**
 * US-002: Planner Section Content
 * 
 * E2E Scope: Verifies the Working with Planner section renders with complete
 * guidance on draft refinement, scope clarification, move-to-ready flow,
 * and practical prompts/examples.
 */

test.describe('US-002: Planner Section', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/concepts/the-human-in-the-loop');
  });

  test.describe('Section structure and header', () => {
    
    test('displays Working with Planner section heading', async ({ page }) => {
      const sectionHeading = page.getByRole('heading', { level: 2, name: 'Working with Planner' });
      await expect(sectionHeading).toBeVisible();
    });

    test('displays section subtitle about implementation-ready PRDs', async ({ page }) => {
      // The section has a subtitle explaining the Planner's purpose (exact match to avoid overview card)
      await expect(
        page.getByText('Turn ideas into implementation-ready PRDs', { exact: true })
      ).toBeVisible();
    });

    test('explains Planner as requirements engineering partner', async ({ page }) => {
      await expect(
        page.getByText('Planner is your partner for requirements engineering')
      ).toBeVisible();
    });
  });

  test.describe('Draft refinement guidance', () => {
    
    test('displays The Draft-to-Ready Journey heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'The Draft-to-Ready Journey' })
      ).toBeVisible();
    });

    test('shows all four journey steps', async ({ page }) => {
      // Step 1: Create Draft
      await expect(
        page.getByRole('heading', { name: 'Create a Draft PRD' })
      ).toBeVisible();
      
      // Step 2: Refine
      await expect(
        page.getByRole('heading', { name: 'Refine Requirements' })
      ).toBeVisible();
      
      // Step 3: Clarify
      await expect(
        page.getByRole('heading', { name: 'Clarify Scope' })
      ).toBeVisible();
      
      // Step 4: Ready
      await expect(
        page.getByRole('heading', { name: 'Mark as Ready' })
      ).toBeVisible();
    });

    test('displays Draft Refinement Tips heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Draft Refinement Tips' })
      ).toBeVisible();
    });

    test('shows refinement tip cards', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Challenge the stories' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Split large stories' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: /Define.*done.*clearly/i })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Check dependencies' })
      ).toBeVisible();
    });
  });

  test.describe('Scope clarification guidance', () => {
    
    test('displays Clarifying Scope heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Clarifying Scope' })
      ).toBeVisible();
    });

    test('shows In Scope section with guiding questions', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'In Scope' })
      ).toBeVisible();
      
      await expect(
        page.getByText('What features are included?')
      ).toBeVisible();
    });

    test('shows Out of Scope section with guiding questions', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Out of Scope' })
      ).toBeVisible();
      
      await expect(
        page.getByText(/What's explicitly excluded\?/i)
      ).toBeVisible();
    });

    test('displays Non-Goals pro tip', async ({ page }) => {
      await expect(
        page.getByText(/Add a.*Non-Goals.*section to your PRD/i)
      ).toBeVisible();
    });
  });

  test.describe('Move-to-ready flow', () => {
    
    test('explains draft PRD file location', async ({ page }) => {
      await expect(
        page.getByText(/Draft PRDs live in/i)
      ).toBeVisible();
      
      // Verify docs/prds/ path is mentioned
      await expect(
        page.locator('code').filter({ hasText: 'docs/prds/' }).first()
      ).toBeVisible();
    });

    test('explains ready PRD moves to prd.json', async ({ page }) => {
      // Scope to #planner section to avoid conflict with Toolkit section
      await expect(
        page.locator('#planner code').filter({ hasText: 'docs/prd.json' })
      ).toBeVisible();
    });

    test('mentions scope creep prevention in refinement', async ({ page }) => {
      await expect(
        page.getByText(/catch scope creep before implementation begins/i)
      ).toBeVisible();
    });
  });

  test.describe('Practical prompts and examples', () => {
    
    test('displays Practical Prompts heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Practical Prompts for Planning Sessions' })
      ).toBeVisible();
    });

    test('shows copy-ready prompts intro text', async ({ page }) => {
      await expect(
        page.getByText(/copy-ready prompts for common planning scenarios/i)
      ).toBeVisible();
    });

    test('displays New Feature prompt example', async ({ page }) => {
      // Scope to #planner section to avoid conflicts with other sections
      await expect(page.locator('#planner').getByText('New Feature', { exact: true })).toBeVisible();
      await expect(
        page.getByText('Starting a planning session for a new feature')
      ).toBeVisible();
    });

    test('displays Refine Draft prompt example', async ({ page }) => {
      await expect(page.getByText('Refine Draft')).toBeVisible();
      await expect(
        page.getByText('Continuing to refine an existing draft PRD')
      ).toBeVisible();
    });

    test('displays Edge Cases prompt example', async ({ page }) => {
      await expect(page.getByText('Edge Cases', { exact: true })).toBeVisible();
      await expect(
        page.getByText('Adding error handling and edge cases to stories')
      ).toBeVisible();
    });

    test('displays Scope Check prompt example', async ({ page }) => {
      await expect(page.getByText('Scope Check')).toBeVisible();
      await expect(
        page.getByText('Verifying scope boundaries before marking ready')
      ).toBeVisible();
    });

    test('displays Mark Ready prompt example', async ({ page }) => {
      await expect(page.getByText('Mark Ready')).toBeVisible();
      await expect(
        page.getByText('Finalizing and activating a PRD for implementation')
      ).toBeVisible();
    });

    test('shows @planner mentions in prompt code blocks', async ({ page }) => {
      // Scope to #planner section to count only Planner's prompt examples
      const plannerMentions = page.locator('#planner span').filter({ hasText: '@planner' });
      // Should have at least 5 @planner mentions in prompt examples
      await expect(plannerMentions).toHaveCount(5);
    });
  });

  test.describe('When to Use Planner vs Builder comparison', () => {
    
    test('displays comparison section heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'When to Use Planner vs Builder' })
      ).toBeVisible();
    });

    test('displays comparison table with all columns', async ({ page }) => {
      // Scope to #planner section to avoid conflict with Builder section table
      await expect(
        page.locator('#planner').getByRole('columnheader', { name: 'Situation' })
      ).toBeVisible();
      
      await expect(
        page.locator('#planner').getByRole('columnheader', { name: 'Agent' })
      ).toBeVisible();
      
      await expect(
        page.locator('#planner').getByRole('columnheader', { name: 'Why' })
      ).toBeVisible();
    });

    test('shows Planner use case for new multi-story feature', async ({ page }) => {
      await expect(
        page.getByRole('cell', { name: 'New multi-story feature' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('cell', { name: 'Needs requirements breakdown before code' })
      ).toBeVisible();
    });

    test('shows Builder use case for quick bug fix', async ({ page }) => {
      // Scope to #planner section to avoid conflict with Builder section table
      await expect(
        page.locator('#planner').getByRole('cell', { name: 'Quick bug fix' })
      ).toBeVisible();
      
      await expect(
        page.locator('#planner').getByRole('cell', { name: 'Scope is already clear, just needs implementation' })
      ).toBeVisible();
    });

    test('shows Planner use case for uncertain requirements', async ({ page }) => {
      await expect(
        page.getByRole('cell', { name: 'Uncertain requirements' })
      ).toBeVisible();
    });

    test('shows Builder use case for existing PRD ready', async ({ page }) => {
      await expect(
        page.getByRole('cell', { name: 'Existing PRD ready' })
      ).toBeVisible();
    });
  });

  test.describe('Dark mode support', () => {
    
    test('Planner section remains visible in dark mode', async ({ page }) => {
      // Enable dark mode
      await page.evaluate(() => {
        document.documentElement.classList.add('dark');
      });

      // Verify key section elements remain visible
      await expect(
        page.getByRole('heading', { level: 2, name: 'Working with Planner' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'The Draft-to-Ready Journey' })
      ).toBeVisible();
      
      await expect(
        page.getByRole('heading', { name: 'Practical Prompts for Planning Sessions' })
      ).toBeVisible();
    });
  });
});
