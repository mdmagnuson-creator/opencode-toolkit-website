#!/usr/bin/env node

/**
 * Generate Open Graph images for all pages
 * Uses sharp to convert SVG templates to PNG
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../public/og');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// OG image dimensions (standard)
const WIDTH = 1200;
const HEIGHT = 630;

// Page definitions with titles and descriptions
const pages = [
  { slug: 'default', title: 'yo, go', subtitle: 'AI Agents for Software Development', description: '64 specialized agents working together' },
  { slug: 'home', title: 'yo, go', subtitle: 'AI Agents for Software Development', description: '64 specialized agents working together' },
  
  // Concepts
  { slug: 'concepts', title: 'Concepts', subtitle: 'yo, go', description: 'Core concepts behind AI agent development' },
  { slug: 'concepts-agents', title: 'Agents', subtitle: 'yo, go', description: 'Primary and sub-agents that build software' },
  { slug: 'concepts-skills', title: 'Skills', subtitle: 'yo, go', description: 'Extend agent capabilities with specialized knowledge' },
  { slug: 'concepts-workflow', title: 'Workflow', subtitle: 'yo, go', description: 'Plan → Build → Test → Ship' },
  { slug: 'concepts-agent-workflows', title: 'Agent Workflows', subtitle: 'yo, go', description: 'How agents communicate and collaborate' },
  { slug: 'concepts-testing', title: 'Testing System', subtitle: 'yo, go', description: 'Comprehensive test automation' },
  { slug: 'concepts-vectorization', title: 'Vectorization', subtitle: 'yo, go', description: 'Semantic search for code and schemas' },
  { slug: 'concepts-human-loop', title: 'Human in the Loop', subtitle: 'yo, go', description: 'How humans work with AI agents' },
  { slug: 'concepts-roadmap', title: 'Roadmap', subtitle: 'yo, go', description: 'Upcoming features and improvements' },
  { slug: 'concepts-projects', title: 'Projects', subtitle: 'yo, go', description: 'Project structure and configuration' },
  { slug: 'concepts-meta-skills', title: 'Meta-Skills', subtitle: 'yo, go', description: 'Generate project-specific patterns' },
  
  // Reference
  { slug: 'reference', title: 'Reference', subtitle: 'yo, go', description: 'Complete documentation for all agents and skills' },
  { slug: 'reference-agents', title: 'Agents Reference', subtitle: 'yo, go', description: '64 agents • 4 primary • 60 sub-agents' },
  { slug: 'reference-skills', title: 'Skills Reference', subtitle: 'yo, go', description: '43 skills for authentication, testing, and more' },
  { slug: 'reference-scaffolds', title: 'Scaffolds', subtitle: 'yo, go', description: 'Project templates for quick starts' },
  
  // Other pages
  { slug: 'getting-started', title: 'Getting Started', subtitle: 'yo, go', description: 'Set up and start building in minutes' },
  { slug: 'changelog', title: 'Changelog', subtitle: 'yo, go', description: 'Recent updates and improvements' },
  { slug: 'memo', title: 'Memo', subtitle: 'yo, go', description: 'In Claude We Trust' },
];

/**
 * Generate SVG for an OG image
 */
function generateSVG({ title, subtitle, description }) {
  // Escape HTML entities
  const escapeHtml = (str) => str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  
  const safeTitle = escapeHtml(title);
  const safeSubtitle = escapeHtml(subtitle);
  const safeDescription = escapeHtml(description);
  
  // Calculate font sizes based on title length
  const titleFontSize = title.length > 20 ? 72 : title.length > 15 ? 84 : 96;
  
  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a"/>
      <stop offset="100%" style="stop-color:#171717"/>
    </linearGradient>
    
    <!-- Accent gradient -->
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#2563eb"/>
    </linearGradient>
    
    <!-- Grid pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#262626" stroke-width="0.5"/>
    </pattern>
  </defs>
  
  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  
  <!-- Grid overlay -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" opacity="0.5"/>
  
  <!-- Accent bar at top -->
  <rect x="0" y="0" width="${WIDTH}" height="8" fill="url(#accent)"/>
  
  <!-- Decorative circles -->
  <circle cx="1100" cy="100" r="200" fill="#7c3aed" opacity="0.1"/>
  <circle cx="100" cy="530" r="150" fill="#2563eb" opacity="0.1"/>
  
  <!-- Content container -->
  <g transform="translate(80, 180)">
    <!-- Subtitle / brand -->
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="500" fill="#a855f7" letter-spacing="0.05em">
      ${safeSubtitle.toUpperCase()}
    </text>
    
    <!-- Main title -->
    <text x="0" y="${titleFontSize + 20}" font-family="system-ui, -apple-system, sans-serif" font-size="${titleFontSize}" font-weight="700" fill="#fafafa">
      ${safeTitle}
    </text>
    
    <!-- Description -->
    <text x="0" y="${titleFontSize + 90}" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="#a3a3a3">
      ${safeDescription}
    </text>
  </g>
  
  <!-- Bottom info bar -->
  <g transform="translate(80, 550)">
    <!-- Agent count badges -->
    <rect x="0" y="0" width="120" height="40" rx="8" fill="#262626"/>
    <text x="60" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#fafafa" text-anchor="middle">
      64 Agents
    </text>
    
    <rect x="135" y="0" width="100" height="40" rx="8" fill="#262626"/>
    <text x="185" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#fafafa" text-anchor="middle">
      43 Skills
    </text>
    
    <!-- URL -->
    <text x="${WIDTH - 160}" y="26" font-family="monospace" font-size="18" fill="#737373" text-anchor="end">
      opencode.ai
    </text>
  </g>
</svg>
`.trim();
}

/**
 * Generate PNG from SVG
 */
async function generatePNG(svg, outputPath) {
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);
}

/**
 * Main function
 */
async function main() {
  console.log('Generating OG images...\n');
  
  for (const page of pages) {
    const svg = generateSVG(page);
    const outputPath = path.join(outputDir, `${page.slug}.png`);
    
    await generatePNG(svg, outputPath);
    console.log(`  ✓ ${page.slug}.png`);
  }
  
  console.log(`\n✅ Generated ${pages.length} OG images in public/og/`);
}

main().catch(console.error);
