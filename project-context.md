# Design Token Test — Design System Pilot

A pnpm + Turborepo monorepo housing a shared React component library (`@workspace/ui`), a Next.js demo app, and a Storybook documentation site. The goal is to validate a design token workflow using Tailwind CSS v4 and a token-studio JSON file.

---

## Tech Stack & Key Dependencies

| Layer | Technology |
|---|---|
| Monorepo | Turborepo 2.x + pnpm 10.7.0 workspaces |
| Framework | Next.js 15.2.4 (App Router, Turbopack in dev) |
| UI library | React 19, Radix UI primitives, `@radix-ui/react-slot`, `@radix-ui/react-dialog` |
| Styling | Tailwind CSS v4.1.3 — `@tailwindcss/vite` (Storybook/Vite), `@tailwindcss/postcss` (Next.js/webpack) |
| Variants | class-variance-authority (CVA) |
| Utilities | clsx + tailwind-merge (`cn()`) |
| Icons | lucide-react |
| Docs | Storybook 8.6.18 (`@storybook/react-vite`) |
| Language | TypeScript 5.8 throughout |

---

## Folder Structure

```
Design-token-test/
├── .github/
│   └── workflows/
│       ├── deploy-storybook.yml   # builds & deploys Storybook to GitHub Pages
│       └── nextjs.yml             # CI build-check for the Next.js app (no deploy)
├── design-system-pilot/           # monorepo root
│   ├── apps/
│   │   ├── storybook/             # Storybook 8 docs site
│   │   └── web/                   # Next.js 15 demo app
│   ├── packages/
│   │   └── ui/                    # @workspace/ui — shared component library
│   │       └── src/
│   │           ├── components/    # button, card, dialog, input, tag
│   │           ├── styles/        # globals.css (Tailwind v4 entry + design tokens)
│   │           └── lib/           # cn() utility
│   ├── turbo.json
│   ├── pnpm-workspace.yaml
│   └── pnpm-lock.yaml
└── design_tokens_json[samp-1].json  # Token Studio export (source of truth for tokens)
```

---

## Key Commands

All commands run from `design-system-pilot/` unless noted.

```bash
# Development
pnpm dev                          # run all apps in parallel (Turbo)
pnpm dev --filter=web             # Next.js app only  (http://localhost:3000)
pnpm storybook                    # Storybook only    (http://localhost:6006)

# Build
pnpm build                        # build all packages
pnpm build --filter=web           # Next.js production build
pnpm build --filter=storybook     # Storybook static build → storybook-static/

# Quality
pnpm lint                         # ESLint across all packages (zero warnings policy)
pnpm format                       # Prettier across all TS/TSX/MDX

# Scaffolding
pnpm --filter=@workspace/ui generate:component   # Turbo gen scaffold for a new component
```

---

## Important Links

| Resource | URL |
|---|---|
| GitHub repo | https://github.com/sharathj7/Design-token-test |
| Storybook (GitHub Pages) | https://sharathj7.github.io/Design-token-test/ |
| Figma | _not yet linked — add when available_ |
| Issue tracker | https://github.com/sharathj7/Design-token-test/issues |

---

## Architecture Notes

### How the pieces fit together

```
Token Studio JSON
      │
      ▼
globals.css  (:root CSS vars → @theme inline → Tailwind utilities)
      │
      ├──▶  @workspace/ui/components/*.tsx   (CVA + Tailwind classes)
      │              │
      │     exported via package.json wildcard: "./components/*"
      │              │
      ├──────────────┼──▶  apps/web  (Next.js, imports globals.css via @workspace/ui)
      │              │
      └──────────────┴──▶  apps/storybook  (imports globals.css in preview.ts)
```

### Tailwind v4 plugin split (important)
Tailwind v4 does **not** use a single PostCSS plugin anymore. Each build tool needs its own adapter:
- **Vite** (Storybook): `@tailwindcss/vite` — configured in `.storybook/main.ts` `viteFinal`
- **Webpack/PostCSS** (Next.js `build`): `@tailwindcss/postcss` — configured in `apps/web/postcss.config.mjs`

### Design token flow
1. `globals.css` defines raw `oklch(...)` values as `--token-name` CSS variables in `:root`
2. `@theme inline` maps them to `--color-token-name` so Tailwind generates `bg-*` / `text-*` utilities
3. Components use `bg-token-name` / `text-token-name` — **never** raw Tailwind palette classes like `bg-gray-300`

### GitHub Pages deployment
Both Storybook and Next.js previously competed for the same GitHub Pages slot. Currently:
- **Storybook** deploys to Pages via `deploy-storybook.yml` ✅
- **Next.js** is a CI build-check only (`nextjs.yml`) — no Pages deploy, no conflict

---

## Coding Conventions & Constraints

- **CVA for all variants** — every component uses `cva()` from `class-variance-authority`
- **Token-first colours** — all colours must go through `globals.css` design tokens; never use raw Tailwind palette classes inside components
- **`data-slot` attribute** — every component root element has `data-slot="component-name"` for styling hooks
- **`cn()` utility** — always use `cn()` from `@/lib/utils` to merge classes
- **No border by default** — components are borderless unless explicitly required
- **Single-size tags** — Tag component is fixed at `h-6` (24px); no multi-size variant
- **Storybook story naming** — never export a story named `Error`, `Promise`, or other JS globals; use `ErrorVariant` with `name: "Error"` instead
- **Zero warnings policy** — `pnpm lint` enforces `--max-warnings 0`
- **Branch convention** — feature work on `claude/<description>-<id>` branches

---

## Custom Skills (Claude Code)

Installed in `~/.claude/skills/`:

| Skill | Invoke | Purpose |
|---|---|---|
| `create-component` | `/create-component` | Scaffold a new design system component end-to-end (tokens + component + stories) |
| `audit-system` | `/audit-system` | Audit token coverage, component patterns, story completeness, CI health |
| `session-start-hook` | `/session-start-hook` | Set up SessionStart hooks for Claude Code on the web |
