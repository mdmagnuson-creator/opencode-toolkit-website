import { test, expect } from '@playwright/test';

/**
 * US-001: Add The Human in the Loop (you) concept entry point
 * 
 * E2E Scope: Concepts navigation exposes and links to The Human in the Loop (you) entry.
 * Tests:
 * - Concepts page shows The Human in the Loop (you) entry
 * - Entry links to /concepts/the-human-in-the-loop
 * - Destination page renders title/intro and key sections
 */

test.describe('US-001: The Human in the Loop (you) Entry Point', () => {
  
  test('Concepts page displays The Human in the Loop (you) entry', async ({ page }) => {
    await page.goto('/concepts');
    
    // Verify the entry heading is visible
    const entryHeading = page.getByRole('heading', { name: 'The Human in the Loop (you)' });
    await expect(entryHeading).toBeVisible();
    
    // Verify description text is present
    await expect(
      page.getByText('Practical collaboration workflows for working with Planner, Builder, and Toolkit')
    ).toBeVisible();
  });

  test('The Human in the Loop (you) entry links to /concepts/the-human-in-the-loop', async ({ page }) => {
    await page.goto('/concepts');
    
    // Navigate by clicking the heading link (the heading itself is wrapped in a link)
    await page.getByRole('heading', { name: 'The Human in the Loop (you)' }).click();
    
    // Verify navigation to correct URL (with or without trailing slash)
    await expect(page).toHaveURL(/\/concepts\/the-human-in-the-loop\/?$/);
  });

  test('The Human in the Loop (you) page renders title and intro', async ({ page }) => {
    await page.goto('/concepts/the-human-in-the-loop');
    
    // Verify page title (H1)
    const pageTitle = page.getByRole('heading', { level: 1, name: 'The Human in the Loop (you)' });
    await expect(pageTitle).toBeVisible();
    
    // Verify intro paragraph
    await expect(
      page.getByText('Working with AI agents is a collaboration, not a handoff')
    ).toBeVisible();
  });

  test('The Human in the Loop (you) page renders key sections', async ({ page }) => {
    await page.goto('/concepts/the-human-in-the-loop');
    
    // Verify "What You'll Learn" section heading
    await expect(
      page.getByRole('heading', { name: "What You'll Learn" })
    ).toBeVisible();
    
    // Verify the three primary agent cards are displayed (first occurrence for each in overview cards)
    await expect(page.getByRole('heading', { name: 'Planner' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Builder' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Toolkit' }).first()).toBeVisible();
    
    // Verify agent card descriptions are present (use first() to target overview cards)
    await expect(
      page.getByText('Turn ideas into implementation-ready PRDs').first()
    ).toBeVisible();
    await expect(
      page.getByText('Execute PRDs or handle ad-hoc tasks').first()
    ).toBeVisible();
    await expect(
      page.getByText('Evolve agents, skills, and scaffolds safely').first()
    ).toBeVisible();
  });

  test('The Human in the Loop (you) page works in dark mode', async ({ page }) => {
    // Set dark mode by adding class to html element
    await page.goto('/concepts/the-human-in-the-loop');
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
    });
    
    // Verify content remains visible in dark mode
    await expect(
      page.getByRole('heading', { level: 1, name: 'The Human in the Loop (you)' })
    ).toBeVisible();
    // Use first() to target the overview card headings (which also appear in section headers)
    await expect(page.getByRole('heading', { name: 'Planner' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Builder' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Toolkit' }).first()).toBeVisible();
  });
});
