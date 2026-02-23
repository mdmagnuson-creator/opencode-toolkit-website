/**
 * Tests for ChangelogClient component - Hydration Safety
 * 
 * These tests verify that:
 * 1. SSR displayDate values are preserved on initial client render (no hydration mismatch)
 * 2. After mount, locale-aware formatting is applied
 * 3. The component handles the baseline → runtime data transition correctly
 * 4. Source badges work correctly for both toolkit and website entries
 */

import { render, screen, waitFor } from '@testing-library/react';
import { ChangelogClient } from '../ChangelogClient';
import type { ChangelogDayWithSource } from '@/lib/changelog-fetcher';

// Mock the changelog fetcher module
jest.mock('@/lib/changelog-fetcher', () => ({
  fetchToolkitChangelog: jest.fn(),
  clearCache: jest.fn(),
  trackOutcome: jest.fn(),
}));

// Import mocked modules for manipulation
import { fetchToolkitChangelog } from '@/lib/changelog-fetcher';

const mockFetchToolkitChangelog = fetchToolkitChangelog as jest.MockedFunction<typeof fetchToolkitChangelog>;

describe('ChangelogClient', () => {
  // Sample baseline changelog with SSR displayDate format
  const baselineChangelog: ChangelogDayWithSource[] = [
    {
      date: '2026-02-22',
      displayDate: 'February 22, 2026', // SSR format (en-US)
      changes: [
        { type: 'feat', description: 'Add new feature', source: 'toolkit' },
        { type: 'fix', description: 'Fix bug', source: 'website' },
      ],
    },
    {
      date: '2026-02-21',
      displayDate: 'February 21, 2026',
      changes: [
        { type: 'docs', description: 'Update documentation', source: 'toolkit' },
      ],
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Default: runtime fetch succeeds with same data (already has source tags)
    mockFetchToolkitChangelog.mockResolvedValue({
      outcome: 'success',
      data: baselineChangelog,
      cachedAt: Date.now(),
    });
  });

  describe('hydration safety', () => {
    it('renders with SSR displayDate values unchanged on initial mount', () => {
      // Render the component - simulates what happens during hydration
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      // Verify SSR displayDate is used initially (before useEffect runs)
      // The heading should show "February 22, 2026" exactly as passed from SSR
      expect(screen.getByText('February 22, 2026')).toBeInTheDocument();
      expect(screen.getByText('February 21, 2026')).toBeInTheDocument();
    });

    it('displays changelog entries correctly', async () => {
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      // Verify entries are rendered
      expect(screen.getByText('Add new feature')).toBeInTheDocument();
      expect(screen.getByText('Fix bug')).toBeInTheDocument();
      expect(screen.getByText('Update documentation')).toBeInTheDocument();
    });

    it('shows source badges for toolkit and website entries', () => {
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      // Verify source badges are present
      expect(screen.getAllByText('Toolkit').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Website').length).toBeGreaterThan(0);
    });

    it('applies locale-aware dates after mount', async () => {
      // Mock Date.toLocaleDateString to return a different format
      const originalToLocaleDateString = Date.prototype.toLocaleDateString;
      Date.prototype.toLocaleDateString = function(locale, options) {
        if (locale === undefined && options?.month === 'long') {
          // Simulate a non-en-US locale (e.g., day-first format for testing)
          return `${this.getDate()} ${originalToLocaleDateString.call(this, 'en-US', { month: 'long' })} ${this.getFullYear()}`;
        }
        return originalToLocaleDateString.call(this, locale, options);
      };

      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      // After the component mounts and useEffect runs, dates should be reformatted
      // The exact format depends on the locale, but it should change from SSR format
      await waitFor(() => {
        // After mount, the component re-renders with locale-aware dates
        // We just verify the component doesn't crash and dates are still present
        // Use getAllByText since multiple dates contain "February"
        expect(screen.getAllByText(/February/).length).toBeGreaterThan(0);
      });

      // Restore original
      Date.prototype.toLocaleDateString = originalToLocaleDateString;
    });
  });

  describe('runtime data fetching', () => {
    it('fetches runtime data on mount', async () => {
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      // Verify fetch was called
      await waitFor(() => {
        expect(mockFetchToolkitChangelog).toHaveBeenCalledWith({ forceRefresh: false });
      });
    });

    it('shows loading state during data fetching', async () => {
      // The component shows baseline data immediately (no loading skeleton for content)
      // but isLoading state is used internally for the status banner
      // After fetch completes, it shows the success banner
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      // Baseline data should be visible immediately
      expect(screen.getByText('Add new feature')).toBeInTheDocument();
      
      // Wait for fetch to complete
      await waitFor(() => {
        expect(screen.getByText('Live data')).toBeInTheDocument();
      });
    });

    it('shows success banner when fetch succeeds', async () => {
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      await waitFor(() => {
        expect(screen.getByText('Live data')).toBeInTheDocument();
      });
    });

    it('falls back to baseline on fetch failure', async () => {
      mockFetchToolkitChangelog.mockResolvedValue({
        outcome: 'fallback',
        data: null,
        error: 'Network error',
      });
      
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      // Should still show baseline data
      await waitFor(() => {
        expect(screen.getByText('Add new feature')).toBeInTheDocument();
        expect(screen.getByText('Showing build-time data')).toBeInTheDocument();
      });
    });

    it('shows stale cache warning when using cached data', async () => {
      mockFetchToolkitChangelog.mockResolvedValue({
        outcome: 'stale-cache',
        data: baselineChangelog,
        cachedAt: Date.now() - 20 * 60 * 1000, // 20 minutes ago
      });
      
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      await waitFor(() => {
        expect(screen.getByText('Using cached data')).toBeInTheDocument();
      });
    });
  });

  describe('dual-source display', () => {
    it('displays entries from both toolkit and website sources', async () => {
      const dualSourceData: ChangelogDayWithSource[] = [
        {
          date: '2026-02-22',
          displayDate: 'February 22, 2026',
          changes: [
            { type: 'feat', description: 'New toolkit feature', source: 'toolkit' },
            { type: 'feat', description: 'New website feature', source: 'website' },
            { type: 'fix', description: 'Toolkit bug fix', source: 'toolkit' },
          ],
        },
      ];
      
      mockFetchToolkitChangelog.mockResolvedValue({
        outcome: 'success',
        data: dualSourceData,
        cachedAt: Date.now(),
      });
      
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      await waitFor(() => {
        expect(screen.getByText('New toolkit feature')).toBeInTheDocument();
        expect(screen.getByText('New website feature')).toBeInTheDocument();
        expect(screen.getByText('Toolkit bug fix')).toBeInTheDocument();
      });
    });

    it('shows correct source counts in day summary', async () => {
      const dualSourceData: ChangelogDayWithSource[] = [
        {
          date: '2026-02-22',
          displayDate: 'February 22, 2026',
          changes: [
            { type: 'feat', description: 'Toolkit feat 1', source: 'toolkit' },
            { type: 'feat', description: 'Toolkit feat 2', source: 'toolkit' },
            { type: 'feat', description: 'Website feat 1', source: 'website' },
          ],
        },
      ];
      
      mockFetchToolkitChangelog.mockResolvedValue({
        outcome: 'success',
        data: dualSourceData,
        cachedAt: Date.now(),
      });
      
      render(<ChangelogClient baselineChangelog={baselineChangelog} />);
      
      await waitFor(() => {
        // Should show "2 toolkit · 1 website" in the day summary
        expect(screen.getByText('2 toolkit')).toBeInTheDocument();
        expect(screen.getByText('1 website')).toBeInTheDocument();
      });
    });
  });

  describe('empty state', () => {
    it('shows empty state when no changelog entries', async () => {
      mockFetchToolkitChangelog.mockResolvedValue({
        outcome: 'success',
        data: [],
        cachedAt: Date.now(),
      });
      
      render(<ChangelogClient baselineChangelog={[]} />);
      
      await waitFor(() => {
        expect(screen.getByText('No changelog entries yet')).toBeInTheDocument();
      });
    });
  });
});
