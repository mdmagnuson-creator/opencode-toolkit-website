# Conventions

> Coding conventions for the Toolkit Website project.
> AI agents should follow these patterns to maintain consistency.

## Overview

This is a public-facing website explaining the AI toolkit system. It prioritizes:
- Clear, scannable content
- Fast page loads
- Accessibility
- Dark mode support

## File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `AgentCard.tsx` |
| Pages | lowercase with hyphens | `getting-started/page.tsx` |
| Utilities | camelCase | `formatAgentData.ts` |
| Types | PascalCase | `AgentDefinition.ts` |

## Styling

### Framework: Tailwind CSS v4

### Dark Mode

**Strategy:** class-based (`.dark` on html element)

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Content adapts to theme
</div>
```

**Always include dark mode variants for:**
- Background colors
- Text colors
- Border colors
- Any color that could affect readability

### Design Tokens

Use semantic color names when available:
- `bg-primary`, `text-primary` for brand colors
- `bg-surface`, `bg-surface-secondary` for backgrounds
- `text-muted` for secondary text

## Components

### File Structure

```
components/
├── ui/                    # Generic UI components
│   ├── Button.tsx
│   └── Card.tsx
├── layout/                # Layout components
│   ├── Header.tsx
│   └── Footer.tsx
└── sections/              # Page sections
    ├── AgentList.tsx
    └── SkillCategories.tsx
```

### Component Pattern

```tsx
interface Props {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function ComponentName({ title, description, children }: Props) {
  return (
    <div className="...">
      {/* Implementation */}
    </div>
  );
}
```

## Content

### Headings

- H1: Page title only (one per page)
- H2: Major sections
- H3: Subsections
- Keep hierarchy logical for accessibility

### Agent/Skill Descriptions

When displaying agent or skill information:
- Use consistent card layouts
- Include: name, description, trigger phrases (for skills)
- Group by category where appropriate

## Performance

- Use Next.js Image component for images
- Lazy load below-fold content
- Minimize client-side JavaScript
- Prefer static generation where possible
