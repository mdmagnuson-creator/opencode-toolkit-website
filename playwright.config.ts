import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for opencode-toolkit-website E2E tests.
 * See https://playwright.dev/docs/test-configuration
 * 
 * IMPORTANT: No webServer config - the dev server should be started separately
 * and left running. This prevents Playwright from killing the server after tests.
 * 
 * Dev port is read from ~/.config/opencode/projects.json (devPort: 4004)
 * Builder ensures the dev server is running before executing E2E tests.
 */

// Read port from environment variable or use project default
const DEV_PORT = process.env.DEV_PORT || '4004';

export default defineConfig({
  testDir: './e2e',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? 'github' : 'list',
  
  /* Shared settings for all the projects below. */
  use: {
    /* Base URL from DEV_PORT env var or project default */
    baseURL: `http://localhost:${DEV_PORT}`,

    /* Collect trace when retrying the failed test. */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* 
   * NO webServer config here - dev server lifecycle is managed externally.
   * 
   * Local development: Builder/agents ensure server is running before tests.
   * CI: The CI workflow starts the server in a separate step.
   * 
   * This prevents Playwright from killing the dev server after tests complete,
   * keeping it available for subsequent work.
   */
});
