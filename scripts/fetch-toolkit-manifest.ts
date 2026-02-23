/**
 * Fetch toolkit-structure.json from GitHub or local fallback
 *
 * This script fetches the official toolkit-structure.json manifest from GitHub.
 * For local development, it falls back to a local file if the network request fails.
 */

import * as fs from 'fs';
import * as path from 'path';

const MANIFEST_URL =
  'https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json';
const LOCAL_FALLBACK_PATH = path.join(
  process.env.HOME || '',
  '.config/opencode/toolkit-structure.json'
);
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/toolkit-structure.json');
const CHECKED_IN_FALLBACK_PATH = OUTPUT_PATH;

interface FetchResult {
  success: boolean;
  source: 'remote' | 'local';
  data?: unknown;
  error?: string;
}

async function fetchFromRemote(): Promise<FetchResult> {
  try {
    console.log(`Fetching manifest from: ${MANIFEST_URL}`);
    const response = await fetch(MANIFEST_URL);

    if (!response.ok) {
      return {
        success: false,
        source: 'remote',
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    const data = await response.json();
    return { success: true, source: 'remote', data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { success: false, source: 'remote', error: message };
  }
}

function readFromLocal(): FetchResult {
  try {
    console.log(`Reading local fallback from: ${LOCAL_FALLBACK_PATH}`);

    if (!fs.existsSync(LOCAL_FALLBACK_PATH)) {
      return {
        success: false,
        source: 'local',
        error: `File not found: ${LOCAL_FALLBACK_PATH}`,
      };
    }

    const content = fs.readFileSync(LOCAL_FALLBACK_PATH, 'utf-8');
    const data = JSON.parse(content);
    return { success: true, source: 'local', data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { success: false, source: 'local', error: message };
  }
}

function readFromCheckedIn(): FetchResult {
  try {
    console.log(`Reading checked-in fallback from: ${CHECKED_IN_FALLBACK_PATH}`);

    if (!fs.existsSync(CHECKED_IN_FALLBACK_PATH)) {
      return {
        success: false,
        source: 'local',
        error: `File not found: ${CHECKED_IN_FALLBACK_PATH}`,
      };
    }

    const content = fs.readFileSync(CHECKED_IN_FALLBACK_PATH, 'utf-8');
    const data = JSON.parse(content);
    return { success: true, source: 'local', data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { success: false, source: 'local', error: message };
  }
}

async function main(): Promise<void> {
  console.log('Fetching toolkit-structure.json manifest...\n');

  // Try remote first
  let result = await fetchFromRemote();

  // Fall back to local if remote fails
  if (!result.success) {
    console.warn(`Remote fetch failed: ${result.error}`);
    console.log('Attempting local fallback...\n');
    result = readFromLocal();
  }

  // Fall back to checked-in manifest in CI and other environments
  if (!result.success) {
    console.warn(`Local fallback failed: ${result.error}`);
    console.log('Attempting checked-in fallback...\n');
    result = readFromCheckedIn();
  }

  if (!result.success) {
    console.error('\n❌ Failed to fetch toolkit manifest');
    console.error(`   Remote error: Could not fetch from ${MANIFEST_URL}`);
    console.error(`   Local error: ${result.error}`);
    console.error('\nTo fix this:');
    console.error('  1. Check your network connection');
    console.error('  2. Ensure toolkit is installed at ~/.config/opencode (for local fallback)');
    console.error('  3. Ensure src/data/toolkit-structure.json exists as checked-in fallback');
    process.exit(1);
  }

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the manifest
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result.data, null, 2));

  console.log(`\n✅ Successfully fetched manifest from ${result.source}`);
  console.log(`   Written to: ${OUTPUT_PATH}`);

  // Log some basic stats if available
  if (
    result.data !== null &&
    typeof result.data === 'object' &&
    !Array.isArray(result.data)
  ) {
    const manifest = result.data as Record<string, unknown>;
    if (manifest.version) {
      console.log(`   Version: ${manifest.version}`);
    }
    if (manifest.generatedAt) {
      console.log(`   Generated: ${manifest.generatedAt}`);
    }
  }
}

main();
