# oz-ui

OpZero's shared design system — UI components, design tokens, and utilities extracted from OpZero.sh.

## Package Manager: Bun

```bash
bun install      # Install dependencies
bun run build    # Build with tsup
bun run dev      # Watch mode
bun run typecheck # Type check without emitting
```

## Architecture

- **Components**: `src/components/ui/` — shadcn/ui primitives built on Radix UI + CVA
- **MDX Components**: `src/components/mdx/` — Callout, Chart, Stats, Tabs for blog/docs
- **Hooks**: `src/hooks/` — useMobile, useToast
- **Tokens**: `src/styles/tokens.css` — CSS custom properties for colors, effects, animations
- **Tailwind Config**: `tailwind.config.ts` — color mappings, border radius, container settings
- **Utility**: `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Publishing

Published to npm as `@opzero/oz-ui`. Build output goes to `dist/`.

## Usage in consuming projects

```tsx
import { Button, Card, cn } from "@opzero/oz-ui";
import "@opzero/oz-ui/tokens.css";
```

Consuming projects must also have `react`, `react-dom`, `tailwindcss`, `next-themes`, and `react-hook-form` installed.
