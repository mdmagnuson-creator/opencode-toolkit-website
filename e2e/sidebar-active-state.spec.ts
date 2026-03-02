import { test, expect } from "@playwright/test";

test.describe("Sidebar Active State", () => {
  test("should highlight Builder in sidebar when on Builder page", async ({ page }) => {
    // Navigate to the Builder agent page
    await page.goto("/reference/agents/primary/builder");
    
    // Wait for sidebar to load
    await page.waitForSelector("nav[aria-label='Reference navigation']");
    
    // Debug: Log the current URL
    console.log("Current URL:", page.url());
    
    // Debug: Check if Agents section is expanded (should have chevron down)
    const agentsSection = page.locator("button", { hasText: "Agents" });
    await expect(agentsSection).toBeVisible();
    
    // Check if Agents section shows expanded (ChevronDown icon visible)
    const agentsExpanded = agentsSection.locator("svg.h-4.w-4");
    console.log("Agents button found");
    
    // Check if Primary subcategory is visible (indicates Agents is expanded)
    const primarySubcat = page.locator("text=Primary").first();
    const isPrimaryVisible = await primarySubcat.isVisible();
    console.log("Primary subcategory visible:", isPrimaryVisible);
    
    // If Primary is not visible, the Agents section is not expanded
    if (!isPrimaryVisible) {
      // Click to expand Agents
      await agentsSection.click();
      await page.waitForTimeout(500);
    }
    
    // Now check if Primary items are visible
    const builderLink = page.locator("nav[aria-label='Reference navigation']").locator("a", { hasText: "Builder" });
    const isBuilderVisible = await builderLink.isVisible();
    console.log("Builder link visible:", isBuilderVisible);
    
    // If Builder is not visible, Primary subcategory needs to be expanded
    if (!isBuilderVisible) {
      // Find and click the expand button for Primary
      const primaryExpandBtn = page.locator("button[aria-label='Expand Primary']");
      if (await primaryExpandBtn.isVisible()) {
        await primaryExpandBtn.click();
        await page.waitForTimeout(500);
      }
    }
    
    // Now Builder should be visible
    await expect(builderLink).toBeVisible();
    
    // Check if Builder has the active styling (blue background)
    // Active class: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
    const builderClasses = await builderLink.getAttribute("class");
    console.log("Builder link classes:", builderClasses);
    
    // Verify Builder has active styling
    expect(builderClasses).toContain("bg-blue-50");
  });

  test("debug: inspect pathname vs itemPath", async ({ page }) => {
    // Navigate to the Builder agent page
    await page.goto("/reference/agents/primary/builder");
    
    // Wait for page to load
    await page.waitForSelector("h1");
    
    // Get the pathname from the browser
    const pathname = await page.evaluate(() => window.location.pathname);
    console.log("Browser pathname:", pathname);
    
    // Expected itemPath
    const expectedItemPath = "/reference/agents/primary/builder";
    console.log("Expected itemPath:", expectedItemPath);
    
    // Check if they match (with normalization)
    const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    console.log("Normalized pathname:", normalizedPathname);
    console.log("Match:", normalizedPathname === expectedItemPath);
  });
});
