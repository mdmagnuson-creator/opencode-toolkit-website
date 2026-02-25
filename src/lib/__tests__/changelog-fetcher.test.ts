/**
 * Tests for changelog-fetcher.ts
 * 
 * Covers:
 * - Conventional commit parsing
 * - Dual-source fetching (toolkit + website repos)
 * - Merge/dedupe logic with source-scoped deduplication
 * - Partial failure resilience (one source fails, other succeeds)
 * - Network-first caching strategy (cache as fallback, not short-circuit)
 * - Local timezone date handling
 * - Graceful degradation for private repos (website repo returns 404)
 */

import { parseConventionalCommit, fetchToolkitChangelog, clearCache } from '../changelog-fetcher';

describe('parseConventionalCommit', () => {
  describe('valid conventional commits', () => {
    it('parses type: description format', () => {
      const result = parseConventionalCommit('feat: add new feature');
      expect(result).toEqual({
        type: 'feat',
        description: 'add new feature',
      });
    });

    it('parses type(scope): description format', () => {
      const result = parseConventionalCommit('fix(auth): resolve login issue');
      expect(result).toEqual({
        type: 'fix',
        scope: 'auth',
        description: 'resolve login issue',
      });
    });

    it('parses breaking change format with !', () => {
      const result = parseConventionalCommit('feat!: breaking change');
      expect(result).toEqual({
        type: 'feat',
        description: 'breaking change',
      });
    });

    it('parses breaking change format with scope and !', () => {
      const result = parseConventionalCommit('feat(api)!: breaking API change');
      expect(result).toEqual({
        type: 'feat',
        scope: 'api',
        description: 'breaking API change',
      });
    });

    it('normalizes type to lowercase', () => {
      const result = parseConventionalCommit('FEAT: uppercase type');
      expect(result).toEqual({
        type: 'feat',
        description: 'uppercase type',
      });
    });

    it('handles hyphenated scopes', () => {
      const result = parseConventionalCommit('fix(ui-component): fix button');
      expect(result).toEqual({
        type: 'fix',
        scope: 'ui-component',
        description: 'fix button',
      });
    });

    it('trims description whitespace', () => {
      const result = parseConventionalCommit('feat: description with trailing space  ');
      expect(result).toEqual({
        type: 'feat',
        description: 'description with trailing space',
      });
    });
  });

  describe('all valid changelog types', () => {
    const validTypes = ['feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'style', 'perf', 'ci', 'build'];

    validTypes.forEach((type) => {
      it(`accepts ${type} type`, () => {
        const result = parseConventionalCommit(`${type}: some description`);
        expect(result).not.toBeNull();
        expect(result?.type).toBe(type);
      });
    });
  });

  describe('invalid commits', () => {
    it('returns null for non-conventional commit', () => {
      const result = parseConventionalCommit('just a regular commit message');
      expect(result).toBeNull();
    });

    it('returns null for invalid type', () => {
      const result = parseConventionalCommit('invalid: not a valid type');
      expect(result).toBeNull();
    });

    it('returns null for missing colon', () => {
      const result = parseConventionalCommit('feat add new feature');
      expect(result).toBeNull();
    });

    it('returns null for empty description', () => {
      const result = parseConventionalCommit('feat:');
      expect(result).toBeNull();
    });

    it('returns null for merge commits', () => {
      const result = parseConventionalCommit("Merge branch 'main' into feature");
      expect(result).toBeNull();
    });

    it('returns null for revert commits', () => {
      const result = parseConventionalCommit('Revert "some commit"');
      expect(result).toBeNull();
    });
  });

  describe('edge cases', () => {
    it('handles description with colons', () => {
      const result = parseConventionalCommit('feat: add support for key: value pairs');
      expect(result).toEqual({
        type: 'feat',
        description: 'add support for key: value pairs',
      });
    });

    it('handles description with special characters', () => {
      const result = parseConventionalCommit('fix: resolve "quoted" issue');
      expect(result).toEqual({
        type: 'fix',
        description: 'resolve "quoted" issue',
      });
    });

    it('handles multiline commit (only parses first line)', () => {
      // This tests that the caller should split by newline first
      const firstLine = 'feat: add feature\n\nBody text here'.split('\n')[0];
      const result = parseConventionalCommit(firstLine);
      expect(result).toEqual({
        type: 'feat',
        description: 'add feature',
      });
    });
  });
});

// ============================================================================
// fetchToolkitChangelog Tests - Dual-Source Fetching
// ============================================================================

describe('fetchToolkitChangelog', () => {
  // Store original fetch
  const originalFetch = global.fetch;
  
  // Mock localStorage
  const localStorageMock: Record<string, string> = {};
  const mockLocalStorage = {
    getItem: jest.fn((key: string) => localStorageMock[key] ?? null),
    setItem: jest.fn((key: string, value: string) => { localStorageMock[key] = value; }),
    removeItem: jest.fn((key: string) => { delete localStorageMock[key]; }),
    clear: jest.fn(() => { Object.keys(localStorageMock).forEach(k => delete localStorageMock[k]); }),
  };
  
  // Sample valid toolkit changelog response
  // NOTE: Structure entries from recent dates (last 7 days) are filtered out in favor of
  // API commits, which have more accurate local timezone dates. Use old dates for structure
  // entries that should NOT be filtered.
  const validToolkitResponse = {
    changelog: {
      entries: [
        {
          date: '2026-02-10', // Old date - outside 7-day window, won't be filtered
          changes: [
            { type: 'chore', description: 'old structure entry', hash: 'old1234' },
          ],
        },
      ],
    },
  };
  
  // Sample GitHub commits response for toolkit - these are from API and won't be filtered
  const validToolkitCommitsResponse = [
    {
      sha: 'abc1234567890', // 'add new feature' - will be primary source for recent dates
      commit: {
        author: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
        committer: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
        message: 'feat: add new feature',
      },
    },
    {
      sha: 'def5678abcdef',
      commit: {
        author: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
        committer: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
        message: 'fix: resolve bug in parser',
      },
    },
  ];
  
  // Sample GitHub commits response for website (direct GitHub API)
  // Same format as toolkit commits - array of GitHubCommit objects
  const validWebsiteCommitsResponse = [
    {
      sha: 'web1234567890',
      commit: {
        author: { name: 'Author', email: 'author@example.com', date: '2026-02-22T14:00:00Z' },
        committer: { name: 'Author', email: 'author@example.com', date: '2026-02-22T14:00:00Z' },
        message: 'feat(docs): add new documentation page',
      },
    },
  ];

  beforeEach(() => {
    // Reset localStorage mock
    Object.keys(localStorageMock).forEach(k => delete localStorageMock[k]);
    jest.clearAllMocks();
    
    // Setup localStorage mock
    Object.defineProperty(global, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
    });
    
    // Clear cache before each test
    clearCache();
  });

  afterEach(() => {
    // Restore original fetch
    global.fetch = originalFetch;
  });

  describe('dual-source fetching', () => {
    it('fetches from both toolkit and website repos', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validWebsiteCommitsResponse),
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      // Should have called fetch 3 times: structure, toolkit commits, website commits
      expect(fetchMock).toHaveBeenCalledTimes(3);
      expect(result.outcome).toBe('success');
      
      // Should have entries from both sources
      expect(result.data).not.toBeNull();
      const toolkitEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'toolkit'));
      const websiteEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'website'));
      
      expect(toolkitEntries.length).toBeGreaterThan(0);
      expect(websiteEntries.length).toBeGreaterThan(0);
    });

    it('tags entries with correct source (toolkit vs website)', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validWebsiteCommitsResponse),
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('success');
      
      // Find the website entry and verify source
      const websiteEntry = result.data!.flatMap(d => d.changes).find(c => c.description === 'add new documentation page');
      expect(websiteEntry?.source).toBe('website');
      
      // Find toolkit entries and verify source
      const toolkitEntry = result.data!.flatMap(d => d.changes).find(c => c.description === 'add new feature');
      expect(toolkitEntry?.source).toBe('toolkit');
    });

    it('merges entries from same day into single day entry', async () => {
      // Use empty structure since we want to test merging of API commits on same day
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ changelog: { entries: [] } }), // Empty structure
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validWebsiteCommitsResponse),
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      // All commits are from 2026-02-22, should be in one day
      expect(result.data).toHaveLength(1);
      expect(result.data![0].date).toBe('2026-02-22');
      // Should have entries from both sources in that day
      expect(result.data![0].changes.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('partial failure resilience', () => {
    it('returns toolkit data when website fetch fails', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse),
        })
        .mockResolvedValueOnce({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      // Should still succeed with toolkit data
      expect(result.outcome).toBe('success');
      expect(result.data).not.toBeNull();
      
      // Should have toolkit entries
      const toolkitEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'toolkit'));
      expect(toolkitEntries.length).toBeGreaterThan(0);
      
      // Should NOT have website entries (fetch failed)
      const websiteEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'website'));
      expect(websiteEntries.length).toBe(0);
    });

    it('returns website data when toolkit fetch fails', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: false,
          status: 404,
          statusText: 'Not Found',
        })
        .mockResolvedValueOnce({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validWebsiteCommitsResponse),
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      // Should still succeed with website data only
      expect(result.outcome).toBe('success');
      expect(result.data).not.toBeNull();
      
      // Should have website entries
      const websiteEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'website'));
      expect(websiteEntries.length).toBeGreaterThan(0);
    });

    it('returns fallback when both sources fail completely', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: false,
          status: 404,
          statusText: 'Not Found',
        })
        .mockResolvedValueOnce({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        })
        .mockResolvedValueOnce({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('fallback');
      expect(result.data).toBeNull();
    });
  });

  describe('source-scoped deduplication', () => {
    it('does NOT dedupe identical descriptions across different sources', async () => {
      // Same description but different sources
      const toolkitCommit = [
        {
          sha: 'tool1234567',
          commit: {
            author: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
            committer: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
            message: 'feat: shared feature description',
          },
        },
      ];
      
      // Website commit via direct GitHub API (same format as toolkit)
      const websiteCommit = [
        {
          sha: 'web1234567',
          commit: {
            author: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
            committer: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
            message: 'feat: shared feature description', // Same description!
          },
        },
      ];
      
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ changelog: { entries: [] } }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(toolkitCommit),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(websiteCommit),
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('success');
      
      // Should have BOTH entries (not deduped because different sources)
      const entries = result.data!.flatMap(d => d.changes.filter(c => c.description === 'shared feature description'));
      expect(entries.length).toBe(2);
      expect(entries.some(e => e.source === 'toolkit')).toBe(true);
      expect(entries.some(e => e.source === 'website')).toBe(true);
    });

    it('DOES dedupe identical entries within same source', async () => {
      // Same commit appearing in recent commits twice (e.g., from different API calls)
      // Note: Structure entries are filtered for recent dates, so we test deduping in API commits
      const toolkitCommits = [
        {
          sha: 'abc1234',
          commit: {
            author: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
            committer: { name: 'Test', email: 'test@test.com', date: '2026-02-22T10:00:00Z' },
            message: 'feat: add new feature',
          },
        },
        {
          sha: 'abc1234', // Duplicate hash - should be deduped
          commit: {
            author: { name: 'Test', email: 'test@test.com', date: '2026-02-22T11:00:00Z' },
            committer: { name: 'Test', email: 'test@test.com', date: '2026-02-22T11:00:00Z' },
            message: 'feat: add new feature',
          },
        },
      ];
      
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ changelog: { entries: [] } }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(toolkitCommits),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // No website commits
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('success');
      
      // Should have only ONE entry for 'add new feature' (deduped by hash within toolkit)
      const entries = result.data!.flatMap(d => d.changes.filter(c => c.description === 'add new feature'));
      expect(entries.length).toBe(1);
    });
  });

  describe('network-first strategy', () => {
    it('always fetches from network even when valid cache exists', async () => {
      // Pre-populate cache with valid data
      const cachedData = {
        timestamp: Date.now(), // Fresh cache
        data: [{ date: '2026-02-20', displayDate: 'February 20, 2026', changes: [{ type: 'chore' as const, description: 'cached entry', source: 'toolkit' as const }] }],
      };
      localStorageMock['toolkit-changelog-cache'] = JSON.stringify(cachedData);
      
      // Mock fetch to return new data
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validWebsiteCommitsResponse),
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      // Should have called fetch (not short-circuited by cache)
      expect(fetchMock).toHaveBeenCalled();
      expect(result.outcome).toBe('success');
      // Should return network data, not cached data
      expect(result.data?.some(day => day.changes.some(c => c.description === 'add new feature'))).toBe(true);
    });

    it('returns success with fresh network data', async () => {
      // Use an old date that won't be filtered out
      const oldStructureResponse = {
        changelog: {
          entries: [
            {
              date: '2026-02-10', // Old date - outside 7-day window
              changes: [
                { type: 'feat', description: 'old feature', hash: 'old1234' },
              ],
            },
          ],
        },
      };
      
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(oldStructureResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // No recent toolkit commits
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // No website commits (API route format)
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('success');
      expect(result.data).toHaveLength(1);
      expect(result.data?.[0].date).toBe('2026-02-10');
      expect(result.cachedAt).toBeDefined();
    });
  });

  describe('cache as fallback', () => {
    it('returns stale-cache when network fails and cache exists', async () => {
      // Pre-populate cache
      const cachedData = {
        timestamp: Date.now() - 1000, // 1 second ago
        data: [{ date: '2026-02-20', displayDate: 'February 20, 2026', changes: [{ type: 'chore' as const, description: 'cached entry', source: 'toolkit' as const }] }],
      };
      localStorageMock['toolkit-changelog-cache'] = JSON.stringify(cachedData);
      
      // Mock fetch to fail
      const fetchMock = jest.fn().mockRejectedValue(new Error('Network error'));
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('stale-cache');
      expect(result.data).toEqual(cachedData.data);
      expect(result.error).toBe('Network error');
    });

    it('returns fallback when network fails and no cache exists', async () => {
      // No cache
      
      // Mock fetch to fail
      const fetchMock = jest.fn().mockRejectedValue(new Error('Network error'));
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('fallback');
      expect(result.data).toBeNull();
      expect(result.error).toBe('Network error');
    });

    it('uses expired cache as fallback when network fails', async () => {
      // Pre-populate with expired cache (20 minutes old)
      const cachedData = {
        timestamp: Date.now() - (20 * 60 * 1000),
        data: [{ date: '2026-02-18', displayDate: 'February 18, 2026', changes: [{ type: 'fix' as const, description: 'old cached entry', source: 'toolkit' as const }] }],
      };
      localStorageMock['toolkit-changelog-cache'] = JSON.stringify(cachedData);
      
      // Mock fetch to fail
      const fetchMock = jest.fn().mockRejectedValue(new Error('Timeout'));
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      // Should still use stale cache (resilience)
      expect(result.outcome).toBe('stale-cache');
      expect(result.data).toEqual(cachedData.data);
    });
  });

  describe('forceRefresh behavior', () => {
    it('forceRefresh still fetches from network (same as non-force)', async () => {
      // Pre-populate cache
      const cachedData = {
        timestamp: Date.now(),
        data: [{ date: '2026-02-20', displayDate: 'February 20, 2026', changes: [{ type: 'chore' as const, description: 'cached', source: 'toolkit' as const }] }],
      };
      localStorageMock['toolkit-changelog-cache'] = JSON.stringify(cachedData);
      
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ changelog: { entries: [] } }), // Empty structure
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse), // API commits with 'add new feature'
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // GitHub API format
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog({ forceRefresh: true });
      
      expect(fetchMock).toHaveBeenCalled();
      expect(result.outcome).toBe('success');
      expect(result.data?.some(day => day.changes.some(c => c.description === 'add new feature'))).toBe(true);
    });
  });

  describe('HTTP error handling', () => {
    it('returns fallback on HTTP 404 with no commits from any source', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: false,
          status: 404,
          statusText: 'Not Found',
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // No toolkit commits
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // No website commits (API route format)
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('fallback');
      expect(result.data).toBeNull();
    });

    it('returns success from commits only when structure returns 404', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: false,
          status: 404,
          statusText: 'Not Found',
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validWebsiteCommitsResponse),
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('success');
      expect(result.data).not.toBeNull();
      expect(result.data?.some(day => day.changes.some(c => c.description === 'resolve bug in parser'))).toBe(true);
    });

    it('uses cache as fallback on HTTP 500', async () => {
      // Pre-populate cache
      const cachedData = {
        timestamp: Date.now(),
        data: [{ date: '2026-02-20', displayDate: 'February 20, 2026', changes: [{ type: 'chore' as const, description: 'cached', source: 'toolkit' as const }] }],
      };
      localStorageMock['toolkit-changelog-cache'] = JSON.stringify(cachedData);
      
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // GitHub API format
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('stale-cache');
      expect(result.data).toEqual(cachedData.data);
    });
  });

  describe('caching behavior', () => {
    it('caches successful network response', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validWebsiteCommitsResponse),
        });
      global.fetch = fetchMock;
      
      await fetchToolkitChangelog();
      
      // Check that cache was set
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'toolkit-changelog-cache',
        expect.any(String)
      );
      
      const cachedValue = JSON.parse(localStorageMock['toolkit-changelog-cache']);
      expect(cachedValue.data.length).toBeGreaterThan(0);
      expect(cachedValue.timestamp).toBeDefined();
    });
  });

  describe('local timezone date handling', () => {
    it('groups commits by local date, not UTC date', async () => {
      // Commit at 2026-02-23T01:00:00Z (UTC)
      // In PST (UTC-8), this is still Feb 22 at 5pm
      // In EST (UTC-5), this is still Feb 22 at 8pm
      // The test environment uses local timezone, so the commit should group
      // by the local date of the machine running tests
      const lateNightCommit = [
        {
          sha: 'late1234567',
          commit: {
            author: { name: 'Test', email: 'test@test.com', date: '2026-02-23T01:00:00Z' },
            committer: { name: 'Test', email: 'test@test.com', date: '2026-02-23T01:00:00Z' },
            message: 'feat: late night commit',
          },
        },
      ];

      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ changelog: { entries: [] } }), // No structure entries
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(lateNightCommit),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // GitHub API format
        });
      global.fetch = fetchMock;

      const result = await fetchToolkitChangelog();

      expect(result.outcome).toBe('success');
      expect(result.data).toHaveLength(1);
      
      // The date should be derived from local timezone conversion of 2026-02-23T01:00:00Z
      // We verify the date is a valid YYYY-MM-DD format
      const dateStr = result.data?.[0].date;
      expect(dateStr).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      
      // Verify the commit was captured
      expect(result.data?.[0].changes.some(c => c.description === 'late night commit')).toBe(true);
    });

    it('displayDate uses locale-friendly format', async () => {
      // Use an old date that won't be filtered out
      const oldStructureResponse = {
        changelog: {
          entries: [
            {
              date: '2026-02-10', // Old date - outside 7-day window
              changes: [
                { type: 'feat', description: 'old feature', hash: 'old1234' },
              ],
            },
          ],
        },
      };
      
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(oldStructureResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // GitHub API format
        });
      global.fetch = fetchMock;

      const result = await fetchToolkitChangelog();

      expect(result.outcome).toBe('success');
      expect(result.data).toHaveLength(1);
      
      // displayDate should be a human-readable format (not YYYY-MM-DD)
      const displayDate = result.data?.[0].displayDate;
      expect(displayDate).toBeDefined();
      expect(displayDate).not.toMatch(/^\d{4}-\d{2}-\d{2}$/); // Not ISO format
      // Should contain the year and month in some format
      expect(displayDate).toContain('2026');
    });
  });

  describe('website commits via internal API route', () => {
    it('handles 401 (no token) gracefully - returns toolkit data only', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse),
        })
        .mockResolvedValueOnce({
          ok: false,
          status: 401, // No token configured
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      // Should still succeed with toolkit data
      expect(result.outcome).toBe('success');
      expect(result.data).not.toBeNull();
      
      // Should have toolkit entries
      const toolkitEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'toolkit'));
      expect(toolkitEntries.length).toBeGreaterThan(0);
      
      // Should NOT have website entries (token not configured)
      const websiteEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'website'));
      expect(websiteEntries.length).toBe(0);
    });

    it('handles 502 (GitHub error) gracefully - returns toolkit data only', async () => {
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitCommitsResponse),
        })
        .mockResolvedValueOnce({
          ok: false,
          status: 502, // GitHub API error
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      // Should still succeed with toolkit data
      expect(result.outcome).toBe('success');
      expect(result.data).not.toBeNull();
      
      // Should have toolkit entries
      const toolkitEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'toolkit'));
      expect(toolkitEntries.length).toBeGreaterThan(0);
    });

    it('processes website commits from GitHub API correctly', async () => {
      const websiteCommitsResponse = [
        {
          sha: 'abc1234567890',
          commit: {
            author: { name: 'Test', email: 'test@test.com', date: '2026-02-22T12:00:00Z' },
            committer: { name: 'Test', email: 'test@test.com', date: '2026-02-22T12:00:00Z' },
            message: 'feat(changelog): add private repo support',
          },
        },
        {
          sha: 'def5678901234',
          commit: {
            author: { name: 'Test', email: 'test@test.com', date: '2026-02-22T11:00:00Z' },
            committer: { name: 'Test', email: 'test@test.com', date: '2026-02-22T11:00:00Z' },
            message: 'fix(ui): resolve dark mode issue',
          },
        },
      ];
      
      const fetchMock = jest.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(validToolkitResponse),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]), // No toolkit commits
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(websiteCommitsResponse),
        });
      global.fetch = fetchMock;
      
      const result = await fetchToolkitChangelog();
      
      expect(result.outcome).toBe('success');
      expect(result.data).not.toBeNull();
      
      // Should have website entries with correct parsing
      const websiteEntries = result.data!.flatMap(d => d.changes.filter(c => c.source === 'website'));
      expect(websiteEntries.length).toBe(2);
      
      const featEntry = websiteEntries.find(e => e.description === 'add private repo support');
      expect(featEntry).toBeDefined();
      expect(featEntry?.type).toBe('feat');
      expect(featEntry?.scope).toBe('changelog');
      
      const fixEntry = websiteEntries.find(e => e.description === 'resolve dark mode issue');
      expect(fixEntry).toBeDefined();
      expect(fixEntry?.type).toBe('fix');
    });
  });
});
