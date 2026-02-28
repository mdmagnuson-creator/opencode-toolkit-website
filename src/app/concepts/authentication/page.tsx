import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | yo, go",
  description: "Configure authentication for E2E testing. Learn about provider skills, test user management, and authenticated screenshot capture.",
  openGraph: {
    title: "Authentication | yo, go",
    description: "Configure authentication for E2E testing. Learn about provider skills, test user management, and authenticated screenshot capture.",
    images: ["/og/concepts-authentication.png"],
  },
};

const PAGE_SECTIONS = [
  { id: "why-authentication", label: "Why Authentication?" },
  { id: "setup-auth", label: "Setup Auth Skill" },
  { id: "provider-matrix", label: "Provider Matrix" },
  { id: "configuration", label: "Configuration" },
  { id: "how-agents-use-auth", label: "How Agents Use Auth" },
  { id: "test-user-cleanup", label: "Test User Cleanup" },
];

export default function AuthenticationConceptPage() {
  return (
    <main className="min-h-screen">
      {/* On This Page Navigation */}
      <OnThisPageNav sections={PAGE_SECTIONS} />

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Authentication for E2E Testing
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 sm:text-xl dark:text-neutral-400">
            Most applications require login to access their features. The authentication
            system lets agents run E2E tests, capture screenshots, and explore your app
            as a logged-in user.
          </p>
        </div>
      </section>

      {/* Why Authentication */}
      <section id="why-authentication" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Why Authentication?
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            When agents need to test protected pages, capture screenshots of dashboards,
            or verify user-specific functionality, they must authenticate first. Without
            proper auth configuration, agents can only test public pages.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">E2E Testing</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Test user flows that require login — onboarding, settings, dashboards,
                and protected features.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Screenshots</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Capture screenshots of authenticated pages for documentation,
                marketing, and visual regression testing.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">QA Exploration</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Let QA agents explore your app as a real user would, finding bugs
                in authenticated experiences.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Browser Debugging</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Debug issues by having agents navigate to protected pages and
                inspect the live UI state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Auth Skill */}
      <section id="setup-auth" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Setup Auth Skill
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            The easiest way to configure authentication is using the{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">setup-auth</code>{" "}
            skill. It scans your codebase, detects your auth provider, and walks you through configuration:
          </p>

          <div className="mt-8 rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 dark:bg-neutral-950">
            <span className="text-blue-400">@toolkit</span>{" "}
            <span className="text-neutral-400">setup authentication for E2E tests</span>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Provider Detection
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  The skill scans your codebase for auth libraries (NextAuth, Supabase Auth,
                  Auth0, etc.) and identifies your provider.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Configuration Questions
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  You&apos;ll be asked about login URL, test credentials, and any
                  provider-specific settings.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Config Generation
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  The skill writes the authentication block to your{" "}
                  <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">project.json</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Matrix */}
      <section id="provider-matrix" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Provider Matrix
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Different auth providers require different authentication strategies. The
            toolkit includes specialized skills for each:
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">Provider</th>
                  <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">Method</th>
                  <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-neutral-50">Skill</th>
                  <th className="py-3 font-semibold text-neutral-900 dark:text-neutral-50">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                <tr>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">Supabase</td>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">Email/Password</td>
                  <td className="py-3 pr-4">
                    <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">auth-supabase-password</code>
                  </td>
                  <td className="py-3 text-neutral-500 dark:text-neutral-400">Standard email/password login</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">Supabase</td>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">Passwordless OTP</td>
                  <td className="py-3 pr-4">
                    <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">auth-supabase-otp</code>
                  </td>
                  <td className="py-3 text-neutral-500 dark:text-neutral-400">Email code verification</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">NextAuth.js</td>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">Credentials</td>
                  <td className="py-3 pr-4">
                    <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">auth-nextauth-credentials</code>
                  </td>
                  <td className="py-3 text-neutral-500 dark:text-neutral-400">NextAuth credentials provider</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">Custom</td>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">Form-based</td>
                  <td className="py-3 pr-4">
                    <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">auth-generic</code>
                  </td>
                  <td className="py-3 text-neutral-500 dark:text-neutral-400">Any standard login form</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">API</td>
                  <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">Headless</td>
                  <td className="py-3 pr-4">
                    <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">auth-headless</code>
                  </td>
                  <td className="py-3 text-neutral-500 dark:text-neutral-400">Direct API + cookie injection (fastest)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
            <h3 className="font-semibold text-green-900 dark:text-green-100">
              Headless Authentication (Recommended)
            </h3>
            <p className="mt-2 text-sm text-green-800 dark:text-green-200">
              When possible, use <code className="rounded bg-green-100 px-1 text-xs dark:bg-green-900">auth-headless</code>{" "}
              for fastest test execution. It authenticates via direct API calls and injects session
              cookies, skipping the UI login flow entirely. This is especially useful for large
              test suites.
            </p>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section id="configuration" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Configuration
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Authentication is configured in your{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">project.json</code>:
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-900 dark:border-neutral-700">
            <pre className="p-6 text-sm leading-relaxed text-neutral-100">
{`{
  "authentication": {
    "provider": "supabase",      // supabase | nextauth | custom
    "method": "email-password",  // provider-specific method
    "loginUrl": "/login",        // URL to the login page
    "headless": true,            // Enable headless auth if supported
    
    "credentials": {
      "email": "test@example.com",
      "password": "env:TEST_PASSWORD"  // Use env: prefix for secrets
    },
    
    // Optional: test user cleanup
    "cleanup": {
      "enabled": true,
      "retainDays": 1
    }
  }
}`}
            </pre>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
              <h3 className="font-semibold text-amber-900 dark:text-amber-100">
                Secrets with env: Prefix
              </h3>
              <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
                Never hardcode passwords in <code className="rounded bg-amber-100 px-1 text-xs dark:bg-amber-900">project.json</code>.
                Use the <code className="rounded bg-amber-100 px-1 text-xs dark:bg-amber-900">env:</code> prefix to reference
                environment variables. The agent reads the value from your environment at runtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Agents Use Auth */}
      <section id="how-agents-use-auth" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            How Agents Use Auth
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            Once configured, agents automatically authenticate when needed:
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">1. Skill Loading</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                When an agent needs to access a protected page, it loads the appropriate
                auth skill based on your <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">authentication.provider</code>{" "}
                and <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">authentication.method</code>.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">2. Authentication Flow</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                The skill executes the login flow — either via UI automation (filling forms,
                clicking buttons) or headless API calls. Session cookies are captured.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">3. Session Reuse</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Authenticated sessions are cached and reused across tests in the same run,
                avoiding repeated logins.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">4. Protected Access</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                With valid session cookies, the agent can navigate to any protected page,
                capture screenshots, run tests, and interact with authenticated features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Test User Cleanup */}
      <section id="test-user-cleanup" className="border-t border-neutral-200 px-6 py-16 sm:px-8 lg:px-12 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Test User Cleanup
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-400">
            E2E tests often create test users that need to be cleaned up. The{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">test-user-cleanup</code>{" "}
            skill handles this automatically:
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-900 dark:border-neutral-700">
            <pre className="p-6 text-sm leading-relaxed text-neutral-100">
{`{
  "authentication": {
    // ... other config ...
    
    "cleanup": {
      "enabled": true,
      "retainDays": 1,           // Keep users created in last N days
      "identifierPattern": "^e2e-.*@test\\\\.com$"  // Match test emails
    }
  }
}`}
            </pre>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">When Cleanup Runs</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Cleanup can be triggered manually or configured to run after test suites
                complete. It removes test users older than <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">retainDays</code>.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Safety Patterns</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Use <code className="rounded bg-neutral-100 px-1 text-xs dark:bg-neutral-800">identifierPattern</code> to ensure
                only test users are deleted. The regex must match the email or identifier
                of test accounts.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950">
            <h3 className="font-semibold text-red-900 dark:text-red-100">
              Use a Dedicated Test Database
            </h3>
            <p className="mt-2 text-sm text-red-800 dark:text-red-200">
              Always run E2E tests against a staging or test database, never production.
              Configure separate <code className="rounded bg-red-100 px-1 text-xs dark:bg-red-900">environments</code> in
              your project.json to ensure tests don&apos;t affect real users.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
