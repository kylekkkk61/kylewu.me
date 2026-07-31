<div align="center">

# Kyle Wu — Personal Portfolio

**FinTech Builder · Product Strategy · Market Analysis**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-2.5.3-F8B334?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev/)

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.6.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](./package.json)

<p align="center">
A bilingual portfolio showcasing fintech product strategy, market analysis, venture building, and practical software execution through selected public projects.
</p>

<p align="center">
  <a href="https://kylewu.me">Live Site</a>
</p>

</div>

---

## Tech Stack

| Area                  | Choice                                       |
| :-------------------- | :------------------------------------------- |
| **Runtime / Core**    | `Node.js 24` + `Next.js 16.2.10 (App Router)` |
| **Language**          | `TypeScript 7.0.2` (strict)                   |
| **UI & Styling**      | `React 19.2.7` + `Tailwind CSS 4.3.2`         |
| **Component Library** | `shadcn/ui`                                   |
| **i18n**              | `next-intl` (`en` / `zh-TW`)                 |
| **Package Manager**   | `pnpm 11.6.0` (Corepack pinned)              |
| **Lint / Format**     | `Biome 2.5.3` (integrated Rust toolchain)    |
| **CI**                | GitHub Actions (parallel lint / typecheck / test / build) |
| **Automation**        | Dependabot (weekly, npm + github-actions)    |
| **Deployment**        | Vercel (Production / Preview)                |

## Design & Architecture

- **Dark Morandi Aesthetic**: A custom color palette balancing warm off-whites with deep grays and muted accents, enforcing a highly readable, premium interface.
- **Unified UI Surfaces**: All card components converge on a centralized `surfaceClass` architecture, ensuring consistent styles without background grid-bleed.
- **Code-Driven Visuals**: Project previews use lightweight React components and CSS to demonstrate execution and research workflows without shipping large screenshots.
- **Intersection-Aware Navigation**: A custom "Railway Timeline" track (`site-track.tsx`) automatically scales and color-binds to viewport scroll progression.

## Getting Started

### Prerequisites

- **Node.js 24** — pinned in [`.nvmrc`](./.nvmrc). Use a Node version manager like `nvm` or `fnm` to automatically select the correct version.
- **pnpm 11.6.0** — pinned via `packageManager` in [`package.json`](./package.json). Enable Corepack so the correct pnpm version is matched automatically:

  ```bash
  corepack enable
  ```

### Install and Run

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Then open:

- **English (Default)**: http://localhost:3000/
- **Traditional Chinese**: http://localhost:3000/zh-TW

## Validation & CI Checks

Before committing or submitting a PR, run the local validation pipeline:

```bash
pnpm validate   # Run Biome check, TypeScript typecheck, Vitest tests, and Next.js Build
```

Individual pipeline commands:

```bash
pnpm lint       # Lint and check code quality using Biome
pnpm format     # Format all code using Biome
pnpm typecheck  # Run TypeScript typechecker
pnpm test       # Run unit tests with Vitest
pnpm build      # Run a production Next.js build
```

## Project Structure

```text
src/
├── app/
│   ├── page.tsx               # Homepage
│   ├── resume/page.tsx        # Semantic HTML Resume
│   └── projects/[slug]/       # Dynamic Project Detail Pages
├── components/
│   ├── sections/              # Homepage UI sections
│   ├── project-artifacts/     # Detail page content & MDX-like components
│   ├── project-visuals/       # React-based dynamic visual previews
│   └── layout/                # Global layout (Header, Footer, site-track.tsx)
├── data/
│   ├── profile.ts             # Profile copy and capabilities
│   ├── projects.ts            # Project data models
│   └── links.ts               # Internal & external links
└── lib/
    └── utils.ts               # Core utilities and shared surfaceClasses
```

## Adding a New Project

1. Add a new project object to `src/data/projects.ts`.
2. Define the `slug`, `visual`, `capabilities`, `tags`, `links`, and nested `detail` sections.
3. Create a new dynamic preview component in `src/components/project-visuals` and map it in `project-visual.tsx`.
4. Verify the new page renders properly at `/projects/[slug]`.
5. Run `pnpm validate` to ensure linting, formatting, typechecking, tests, and build all pass before committing.

## License

This repository contains software and content under different terms:

- **Source code and technical documentation**: [MIT License](LICENSE)
- **Original Writing articles and diagrams**: [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
- **Resume, profile, case-study, and brand materials**: All rights reserved unless otherwise stated

See the [licensing page](https://kylewu.me/licensing) for the plain-language overview and the [LICENSE](LICENSE) file for the repository scope and legal terms.
