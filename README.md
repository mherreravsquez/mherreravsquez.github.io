# Personal Portfolio Website

![GitHub Pages](https://img.shields.io/badge/deployment-GitHub%20Pages-black)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

This repository contains the source code for my personal portfolio website, built as a lightweight static site and deployed using GitHub Pages.

**Live website:**
https://mherreravsquez.github.io/

**Repository:**
https://github.com/mherreravsquez/mherreravsquez.github.io

**Blog Posts:**
https://mherreravsquez.github.io/blog-posts

The site serves as a central hub to showcase my projects, development work, and tools.

---

## Features

- Modern developer portfolio layout with cyberpunk/neon aesthetic
- Lightweight static architecture — no backend required
- Fast GitHub Pages deployment
- **Hero section with 40/60 split layout** — text on the left, media carousel on the right
- **Imgur-powered hero carousel** — supports GIFs, JPEGs, and PNGs with auto-advance and manual navigation
- Simple project card system with tetris-style grid
- **i18n support (English / Spanish)** — all dynamic content (devlogs, project descriptions) updates on language switch
- Custom cursor with hover states
- Scroll-triggered fade-in animations
- **Devlog system** — language-filtered previews on homepage, full listing on `blog.html`, and related posts on each project page
- Easily customizable styles via CSS custom properties
- Minimal dependencies

---

## Tech Stack

- HTML
- CSS
- JavaScript (vanilla)
- GitHub Pages

---

## How the Portfolio Works

This project is a **static website**. All content is stored directly in the repository.

When you push changes to the repository:

1. GitHub detects the update
2. GitHub Pages rebuilds the site
3. The updated site becomes live automatically

---

## Repository Structure

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── blogLoader.js
│   ├── i18n.js
│   ├── main.js
│   └── projectLoader.js
├── assets/
│   └── resume-marceloherrera.pdf
├── data/
│   ├── projects.json
│   └── translations.json
├── admin.html
├── blog.html
├── post.html
├── project.html
└── README.md
```

### Key folders

**css/**
Contains all styling for the site UI and layout, including the hero split layout and carousel component.

**js/**
Handles animations, interactive behavior, project grid rendering, i18n, hero carousel, and the devlog system.

**assets/**
Static media, like the resume PDF.

**data/**
Content for portfolio projects. Devlog posts are stored in a separate public repository:
https://github.com/mherreravsquez/blog-posts/

```
/
├── index.json
├── en/
└── es/
```

---

## Hero Section

The hero is structured as a **40 / 60 horizontal split**:

- **Left (40%)** — name, role, CTAs, and stats
- **Right (60%)** — fullscreen media carousel

### Configuring the Carousel

Open `js/main.js` and find the `slides` array inside `initHeroCarousel()`:

```js
const slides = [
  { src: 'https://i.imgur.com/YOUR_ID.gif', label: 'Project Name' },
  { src: 'https://i.imgur.com/YOUR_ID.jpg', label: 'Project Name' },
];
```

Supports `.gif`, `.jpg`, and `.png` URLs. Add or remove objects freely — dots and counter update automatically. `AUTO_DELAY` (default `4500`ms) controls slide duration.

---

## Devlog System

Posts live in the separate `blog-posts` repository. The portfolio fetches them at runtime via `blogLoader.js`.

### `index.json` post format

```json
{
  "posts": [
    {
      "slug": "2025-01-15-my-post",
      "title": { "en": "My Post", "es": "Mi Post" },
      "excerpt": { "en": "Short summary.", "es": "Resumen corto." },
      "date": "2025-01-15",
      "type": "update",
      "lang": "en",
      "project": "hunters-vega",
      "tags": ["unity", "design"]
    }
  ]
}
```

### Language filtering

Posts are shown only if their `lang` field matches the active language. Posts with **no `lang` field** are treated as language-neutral and appear in both EN and ES. The filter applies everywhere: homepage preview, `blog.html` listing, and project page related devlogs.

### Linking posts to projects

Set `"project": "project-id"` in `index.json` (matching the `id` field in `projects.json`). The project page will automatically pick up all matching posts — no manual slug list required. The optional `"devlogs": ["slug-1"]` array in `projects.json` can be used as an explicit override if needed.

### Where devlogs appear

| Location | Source | Limit |
|---|---|---|
| Homepage (`#devlog`) | `renderDevlogPreview()` | 4 most recent |
| Blog listing (`blog.html`) | `renderBlogList()` | All |
| Project page (`project.html`) | `loadRelatedDevlogs()` | 6 most recent |

---

## Deployment

```
https://mherreravsquez.github.io/
```

Every push to the `main` branch automatically updates the live site.

---

## Contributing

This repository mainly serves as a personal portfolio, but suggestions and ideas are always welcome.

---

## License

This project is licensed under the MIT License.
You are free to use this project as inspiration for your own portfolio.
