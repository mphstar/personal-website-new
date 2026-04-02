# Mphstar — Personal Portfolio

A minimalist, monochrome personal portfolio & digital garden built with **Astro**, **Tailwind CSS v4**, and **TypeScript**.

> 🌐 Live: [mphstar.my.id](https://mphstar.my.id)

## ✨ Features

- **Home** — Professional summary, work experience, education, and contact links.
- **Portfolio** — Project showcase with interactive image gallery (custom lightbox).
- **Achievements** — Certifications & awards with image gallery support.
- **Notes** — A Markdown-based digital garden powered by Astro Content Collections.
  - macOS-styled code blocks with syntax highlighting (Shiki dual theme).
  - Copy-to-clipboard support on all code snippets.
  - Full Markdown rendering: tables, blockquotes, lists, images, and more.
- **Dark / Light Mode** — Theme toggle with system preference detection.
- **SEO Optimized** — Structured meta tags, sitemap, and semantic HTML.
- **Responsive** — Fully mobile-friendly across all pages.

## 🚀 Project Structure

```text
/
├── public/                     # Static assets (favicon, images)
├── src/
│   ├── assets/                 # Image assets
│   ├── components/             # Reusable Astro components
│   │   ├── Hero.astro          # Profile, experience, education, contact
│   │   ├── Portfolio.astro     # Project cards with gallery
│   │   └── Achievements.astro  # Achievement cards with gallery
│   ├── content/
│   │   └── notes/              # Markdown notes (folder = slug)
│   │       └── <slug>/
│   │           ├── index.md    # Note content
│   │           └── assets/     # Note-specific images
│   ├── layouts/
│   │   └── Layout.astro        # Global layout, nav, theme toggle, lightbox
│   ├── models/                 # TypeScript data models
│   │   ├── data_experience.ts
│   │   ├── data_education.ts
│   │   ├── data_contact.ts
│   │   └── data_portfolio.ts
│   ├── pages/                  # File-based routing
│   │   ├── index.astro
│   │   ├── portfolio.astro
│   │   ├── achievements.astro
│   │   └── notes/
│   │       ├── index.astro     # Notes listing page
│   │       └── [slug].astro    # Dynamic note detail page
│   ├── styles/
│   │   └── global.css          # Global styles & Tailwind config
│   └── content.config.ts       # Content collection definitions
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview production build locally             |

## 📝 Adding a New Note

1. Create a new folder inside `src/content/notes/` using your desired URL slug:
   ```
   src/content/notes/my-new-note/
   ```
2. Add an `index.md` file with frontmatter:
   ```markdown
   ---
   title: "My New Note"
   description: "A short summary of the note."
   date: "2026-04-02"
   ---

   Your markdown content here...
   ```
3. (Optional) Add images in an `assets/` subfolder and reference them in your markdown.
4. The note will automatically appear on the `/notes` page.

## 🛠️ Tech Stack

- [Astro](https://astro.build) v6 — Static site generator
- [Tailwind CSS](https://tailwindcss.com) v4 — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org) — Type-safe data models
- [Shiki](https://shiki.matsu.io) — Syntax highlighting (dual theme)
- [React](https://react.dev) — Available for interactive islands

## 📄 License

This project is for personal use. All rights reserved.
