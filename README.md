# Personal Portfolio Website

![GitHub Pages](https://img.shields.io/badge/deployment-GitHub%20Pages-black)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

Source code for my personal portfolio website — a lightweight static site deployed via GitHub Pages. Serves as a central hub for my projects, development work, and devlog.

**Live website:** https://mherreravsquez.github.io/

**Webpage Repository:** https://github.com/mherreravsquez/mherreravsquez.github.io

**Blog Posts Repository:** https://github.com/mherreravsquez/blog-posts

---

## Features

- Cyberpunk / neon aesthetic with dark background, green and pink accents
- Lightweight static architecture — no backend, no build step required
- Fast GitHub Pages deployment — every push to `main` goes live automatically
- **Full-screen background video carousel** in the hero — slides through project footage (video + images), auto-advances on video end, pauses when the tab is hidden
- **Tetris-style project grid** — magazine layout driven by inline JS, collapses gracefully to single column on mobile
- **i18n support (English / Spanish)** — language preference persisted in `localStorage`; all text, dates, status labels, and the CV download link update on switch
- Custom diamond cursor with animated ring (hidden on touch devices, pointer cursor restored)
- Scroll-triggered fade-in animations via `IntersectionObserver`
- **Devlog system** — posts fetched at runtime from a separate `blog-posts` repo; language-filtered previews on the homepage, full listing on `blog.html`, and related posts on each project page
- Fully responsive — single-column layout at ≤900px with further adjustments at ≤480px
- CSS split into four focused files for maintainability
- Minimal dependencies — no frameworks, no bundlers

---

## Tech Stack

- HTML5
- CSS3 (`core.css`, `components.css`, `sections.css`, `pages.css`)
- JavaScript (vanilla ES2020+)
- GitHub Pages

---

## How the Portfolio Works

This is a **static website**. All content lives directly in the repository.

When you push changes to `main`:

1. GitHub detects the update
2. GitHub Pages serves the updated files
3. The live site reflects the changes immediately

Dynamic content (devlog posts) is fetched at runtime from the separate `blog-posts` repository via `fetch()`. No server or build pipeline is required.

---

## Repository Structure

```
mherreravsquez.github.io/
├── assets/
│   ├── projects/
│   │   ├── boombastic/
│   │   │   ├── cover.mp4
│   │   │   └── thumb.mp4
│   │   ├── bubble-ggj2025/
│   │   │   ├── gallery/
│   │   │   │   └── 01.webp
│   │   │   ├── videos/
│   │   │   │   └── demo.mp4
│   │   │   ├── cover.mp4
│   │   │   └── thumb.webp
│   │   ├── car-loop/
│   │   │   ├── gallery/
│   │   │   │   └── 01.webp
│   │   │   ├── videos/
│   │   │   │   ├── tutorial1.mp4
│   │   │   │   ├── tutorial2.mp4
│   │   │   │   └── tutorial3.mp4
│   │   │   ├── cover.webp
│   │   │   └── thumb.webp
│   │   ├── hunters-awakening/
│   │   │   ├── gallery/
│   │   │   ├── videos/
│   │   │   └── thumb.webp
│   │   ├── hunters-vega/
│   │   │   ├── gallery/
│   │   │   └── videos/
│   │   └── tragones/
│   │       ├── gallery/
│   │       │   ├── 01.webp
│   │       │   └── 02.webp
│   │       ├── videos/
│   │       └── thumb.webp
│   ├── pfp.webp
│   ├── resume-marceloherrera-en.pdf
│   └── resume-marceloherrera-es.pdf
├── css/
│   ├── core.css        ← variables, reset, nav, footer, animations, responsive
│   ├── components.css  ← buttons, project cards, devlog cards, chips, timeline, tags
│   ├── sections.css    ← hero, projects grid, studio, devlog preview, about, contact
│   └── pages.css       ← blog list, single post, project detail pages
├── data/
│   ├── projects.json
│   └── translations.json
├── js/
│   ├── blogLoader.js     ← fetches posts from blog-posts repo, renders cards
│   ├── i18n.js           ← lightweight EN/ES system, persists to localStorage
│   ├── main.js           ← cursor, nav, fade-in, project grid, hero bg carousel
│   └── projectLoader.js  ← populates project.html from projects.json
├── README.md
├── blog.html
├── index.html
├── post.html
└── project.html
```

---

## CSS Architecture

The stylesheet is split into four files, each loaded in order:

| File | Responsibility |
|---|---|
| `core.css` | CSS variables, reset, base typography, nav, footer, animations, all responsive breakpoints |
| `components.css` | Reusable UI — buttons, project cards, devlog cards, tag chips, skill chips, timeline |
| `sections.css` | Homepage section styles — hero (bg carousel, ticker, text), projects grid, studio, devlog preview, about, contact |
| `pages.css` | Sub-page layouts and their responsive overrides — blog list, single post, project detail |

---

## Project Data

Projects are defined in `data/projects.json`. Each entry supports:

```json
{
  "id": "project-slug",
  "ratio": "16:9",
  "status": "released",
  "releaseDate": "2025-01-26",
  "engine": "Unity 6",
  "genre": "Metroidvania",
  "hasVideoThumb": false,
  "thumbClass": null,
  "tags": ["C#", "Global Game Jam 2025"],
  "title": { "en": "...", "es": "..." },
  "shortDesc": { "en": "...", "es": "..." },
  "fullDesc": { "en": "...", "es": "..." },
  "screenshots": ["01.webp"],
  "videos": ["demo.mp4"],
  "links": [{ "label": "Play on itch.io", "url": "...", "icon": "🎮" }]
}
```

**`releaseDate`** (`"YYYY-MM-DD"`) is formatted by `projectLoader.js` into "26 of January, 2025" (EN) or "26 de enero, 2025" (ES). Falls back to `year` if not set, or `—` for pre-production titles.

**`hasVideoThumb: true`** makes the card and project hero use `cover.mp4` as the thumbnail.

**`thumbClass`** applies a CSS pattern class (e.g. `thumb-pattern-2`) for projects without a thumbnail asset.

---

## Devlog System

Posts live in the separate [`blog-posts`](https://github.com/mherreravsquez/blog-posts) repository and are fetched at runtime by `blogLoader.js`.

### `index.json` post format

```json
{
  "posts": [
    {
      "slug": "2025-01-26-break-the-bubble",
      "title": { "en": "My Post", "es": "Mi Post" },
      "excerpt": { "en": "Short summary.", "es": "Resumen corto." },
      "date": "2025-01-26",
      "type": "update",
      "lang": "en",
      "project": "bubble-ggj2025",
      "tags": ["unity", "design"]
    }
  ]
}
```

### Language filtering

Posts render only if their `lang` field matches the active language. Posts with **no `lang` field** are language-neutral and appear in both EN and ES.

### Linking posts to projects

Set `"project": "project-id"` in `index.json` (matching the `id` in `projects.json`). The project page picks up all matching posts automatically.

### Where devlogs appear

| Location | Function | Limit |
|---|---|---|
| Homepage (`#devlog`) | `renderDevlogPreview()` | 4 most recent |
| Blog listing (`blog.html`) | `renderBlogList()` | All |
| Project page (`project.html`) | `loadRelatedDevlogs()` | 6 most recent |

---

## i18n System

`i18n.js` provides a minimal bilingual EN/ES system.

- Translations live in `data/translations.json`
- Elements with `data-i18n="key"` are updated automatically on language switch
- `data-i18n-html="true"` allows HTML content in translations (used for `<strong>`, `<span>` in bio text)
- The active language is persisted in `localStorage` under `mhv_lang`
- The CV download link (`assets/resume-marceloherrera-{lang}.pdf`) is swapped automatically on switch

---

## Deployment

Every push to `main` updates the live site automatically via GitHub Pages.

```
https://mherreravsquez.github.io/
```

---

## License

MIT License. You are free to use this as inspiration for your own portfolio.