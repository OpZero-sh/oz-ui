# @opzero/oz-ui

OpZero's shared design system — UI components, design tokens, and utilities.

Built on [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://radix-ui.com), [Tailwind CSS](https://tailwindcss.com), and [CVA](https://cva.style).

## Install

```bash
npm install @opzero/oz-ui
# or
bun add @opzero/oz-ui
```

**Peer dependencies:** `react`, `react-dom`, `tailwindcss`, `next-themes`, `react-hook-form`

## Usage

```tsx
import { Button, Card, Input, cn } from "@opzero/oz-ui";
import "@opzero/oz-ui/tokens.css"; // design tokens (CSS variables)
```

### Tailwind config

Extend your project's Tailwind config with the shared theme:

```ts
// tailwind.config.ts
import ozConfig from "@opzero/oz-ui/tailwind.config";

export default {
  ...ozConfig,
  content: [
    ...ozConfig.content,
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@opzero/oz-ui/dist/**/*.js",
  ],
};
```

## What's included

**49 UI components** — Accordion, Alert, Badge, Button, Card, Carousel, Chart, Checkbox, Command, Dialog, Drawer, Dropdown, Form, Input, Label, Menubar, Navigation, Pagination, Popover, Progress, Radio, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast, Toggle, Tooltip, and more.

**Design tokens** — Hyper Cyan primary, Neural Violet accent, dark-first theme with light mode support. Glass effects, gradient text, glow borders, float animation.

**Hooks** — `useIsMobile`, `useToast`

**MDX components** — `Callout`, `MdxChart`, `Stats`, `MdxTabs`

## Brand colors

| Token | Light | Dark | Hex |
|-------|-------|------|-----|
| `--primary` | Hyper Cyan | Hyper Cyan | `#00F5FF` |
| `--accent` | Neural Violet | Neural Violet | `#8B5CF6` |
| `--background` | White | Synthetic Void | `#030305` |
| `--card` | White | Carbon Fiber | `#0C0C0F` |

## License

MIT
