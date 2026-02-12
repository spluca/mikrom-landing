# Mikrom Landing 🛡️🚀

[![Build & Deploy](https://github.com/spluca/mikrom-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/spluca/mikrom-landing/actions/workflows/deploy.yml)

The high-performance marketing and landing page for **[Mikrom](https://www.mikrom.es)**, a cutting-edge microservices platform based on Firecracker microVMs and Go.

## ✨ Features

- **🌍 Full i18n Support**: Native internationalization with Astro. Multi-language support (English/Spanish).
- **🐳 Dockerized**: Production-ready containerization for local development and deployment.
- **⚡ Ultra-fast**: Built with **Astro 5** for minimal JS and maximum speed.
- **🎨 Modern Design**: Beautiful, responsive UI with OKLCH colors, fluid animations (Scroll Reveal / Parallax), and Dark Mode support.
- **☁️ Cloudflare Ready**: Optimized for deployment on Cloudflare Workers.

## 🚀 Getting Started

### Using Docker (Recommended)

Run the entire stack instantly:

```bash
docker compose up -d --build
```

Access the site at:
- **Spanish**: [http://localhost:4321](http://localhost:4321)
- **English**: [http://localhost:4321/en](http://localhost:4321/en)

### Local Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (with OKLCH colors)
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) (Lucide)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Runtime**: [Docker](https://www.docker.com/)

## 📂 Project Structure

```text
/
├── public/             # Static assets (logos, icons)
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── layout/     # Header, Footer, Hero
│   │   ├── sections/   # Feature specific sections
│   │   └── ui/         # Theme/Lang toggles
│   ├── i18n/           # Translation dictionaries & utils
│   ├── layouts/        # Page layout wrappers
│   ├── pages/          # i18n routes (es, en)
│   └── lib/            # Shared types and utilities
├── astro.config.mjs    # Astro configuration
└── docker-compose.yml  # Docker orchestration
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
