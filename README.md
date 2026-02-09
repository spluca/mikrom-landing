# Mikrom Landing

Marketing and landing page for [Mikrom](https://www.mikrom.es), a microservices platform for Firecracker microVMs.

Built with **Astro 5** and deployed to **Cloudflare Workers**.

## Project Structure

```text
/
├── public/             # Static files (favicons)
├── src/
│   ├── assets/         # Images/SVGs processed by Astro
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layout wrappers
│   └── pages/          # File-based routing
├── astro.config.mjs    # Astro config (Cloudflare adapter)
└── wrangler.jsonc      # Cloudflare Workers config
```

## Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start dev server at `localhost:4321`         |
| `pnpm build`   | Build production site to `./dist/`           |
| `pnpm preview` | Preview production build locally             |

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to Cloudflare Workers automatically.

The workflow requires two repository secrets (Settings > Secrets and variables > Actions):

- `CLOUDFLARE_API_TOKEN` — API token with Workers edit permissions
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID

To deploy manually:

```sh
npx wrangler deploy
```
