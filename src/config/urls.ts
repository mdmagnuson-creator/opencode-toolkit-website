/**
 * Repository URL configuration
 *
 * Uses owner-neutral placeholders for public-facing documentation.
 * The <your-org> pattern matches the convention used in the toolkit source.
 *
 * For actual deployments, these placeholders are intended to be replaced
 * with the appropriate organization/username when forking or self-hosting.
 */

export const REPO_OWNER = "opencode-ai";
export const REPO_NAME = "ai-toolkit";

export const REPO_BASE = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
export const REPO_RAW_BASE = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main`;

export const INSTALL_SCRIPT_URL = `${REPO_RAW_BASE}/install.sh`;
export const RELEASES_URL = `${REPO_BASE}/releases`;

/**
 * Generate a commit URL for the toolkit repository
 */
export function getCommitUrl(commitHash: string): string {
  return `${REPO_BASE}/commit/${commitHash}`;
}

/**
 * Generate the curl install command with the current repo URL
 */
export function getInstallCommand(): string {
  return `curl -fsSL ${INSTALL_SCRIPT_URL} | bash`;
}
