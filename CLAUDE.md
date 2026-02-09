# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mikrom Landing is the marketing/landing page for Mikrom (a microservices platform for Firecracker microVMs). It is a static site built with Astro 5, deployed to Cloudflare Workers.

- **Site URL:** https://www.mikrom.es (also mikrom.es)
- **Framework:** Astro 5 with TypeScript (strict tsconfig)
- **Hosting:** Cloudflare Workers via `@astrojs/cloudflare` adapter
- **Package manager:** pnpm

## Commands

```bash
pnpm install            # Install dependencies
pnpm dev                # Dev server at localhost:4321
pnpm build              # Production build to ./dist/
pnpm preview            # Preview production build locally
```

### Deployment

Configured via `wrangler.jsonc`. Deploy with:

```bash
npx wrangler deploy
```

## Architecture

Standard Astro project structure:

- `src/pages/` — File-based routing (`.astro` files become pages)
- `src/layouts/` — Page layout wrappers (e.g., `Layout.astro` provides the HTML shell)
- `src/components/` — Reusable Astro components
- `src/assets/` — Images/SVGs processed by Astro's asset pipeline
- `public/` — Static files served as-is (favicons)
- `astro.config.mjs` — Astro config with Cloudflare adapter and `platformProxy` enabled
- `wrangler.jsonc` — Cloudflare Workers config (routes, smart placement, observability)
