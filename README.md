# OpenCode Toolkit Website

Documentation website for the OpenCode AI Toolkit system.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4004](http://localhost:4004) to view the site.

## Data Synchronization

The site displays data from two repositories:
- **Toolkit repo** (`ai-toolkit`) - public, no authentication needed
- **Website repo** (`opencode-toolkit-website`) - private, requires token for changelog sync

### Build-time Changelog Sync

The changelog is synchronized at build time by `scripts/sync-changelog.ts`:

```bash
# Without token (toolkit commits only, website commits skipped)
npm run sync-changelog

# With token (full sync including website commits)
GITHUB_TOKEN=ghp_xxx npm run sync-changelog
```

### GitHub Actions

The deploy workflow automatically syncs the changelog using the repository's `GITHUB_TOKEN`:

```yaml
- name: Sync changelog
  run: npm run sync-changelog
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

The `GITHUB_TOKEN` is automatically provided by GitHub Actions and has read access to the repository.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_TOKEN` | Optional | GitHub personal access token or CI token. Enables fetching commits from private website repo. |

### Local Development

1. **Without token**: Changelog shows toolkit commits only. Website commits are skipped with a warning.
   
2. **With token**: Export `GITHUB_TOKEN` to include website commits:
   ```bash
   export GITHUB_TOKEN=ghp_your_token_here
   npm run dev
   ```

3. **Using cached data**: The `src/data/changelog.json` file is generated at build time. If it exists from a previous build, it will be used.

### Data Flow

```
Build Time (CI):
┌─────────────────────┐     ┌──────────────────────┐
│  GitHub API         │────▶│ sync-changelog.ts    │
│  (with GITHUB_TOKEN)│     │ (fetch commits)      │
└─────────────────────┘     └──────────┬───────────┘
                                       │
                                       ▼
                            ┌──────────────────────┐
                            │ src/data/changelog.json │
                            │ (static artifact)    │
                            └──────────┬───────────┘
                                       │
                                       ▼
                            ┌──────────────────────┐
                            │ Next.js Build        │
                            │ (static export)      │
                            └──────────────────────┘

Runtime (Browser):
┌─────────────────────┐     ┌──────────────────────┐
│  Build-time data    │────▶│ ChangelogClient      │
│  (changelog.json)   │     │ (initial render)     │
└─────────────────────┘     └──────────┬───────────┘
                                       │
                                       ▼
                            ┌──────────────────────┐
                            │ Runtime fetch        │
                            │ (enhancement only)   │
                            └──────────────────────┘
```

### Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (auto-syncs data) |
| `npm run build` | Build static site |
| `npm run sync-changelog` | Fetch and merge changelog from both repos |
| `npm run fetch-data` | Fetch toolkit manifest from GitHub |
| `npm run transform-data` | Transform toolkit structure to website format |
| `npm run prepare-data` | Run all data sync scripts |

## Architecture

- **Framework**: Next.js 16 with static export
- **Styling**: Tailwind CSS v4
- **Testing**: Jest + React Testing Library + Playwright

### Key Files

- `scripts/sync-changelog.ts` - Build-time changelog fetcher
- `src/data/changelog.json` - Generated combined changelog (gitignored)
- `src/data/index.ts` - Data access layer
- `src/lib/changelog-fetcher.ts` - Runtime changelog enhancement
- `src/app/changelog/` - Changelog page components

## Deployment

The site is deployed to GitHub Pages via the `.github/workflows/deploy.yml` workflow:

1. Checkout code
2. Install dependencies
3. Fetch toolkit manifest
4. Transform data
5. Sync changelog (with `GITHUB_TOKEN`)
6. Build static site
7. Deploy to GitHub Pages

## License

MIT
