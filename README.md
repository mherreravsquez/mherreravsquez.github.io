# Personal Portfolio Website

![GitHub Pages](https://img.shields.io/badge/deployment-GitHub%20Pages-black)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

This repository contains the source code for my personal portfolio website, built as a lightweight static site and deployed using GitHub Pages.

**Live website:**
https://mherreravsquez.github.io/

**Repository:**
https://github.com/mherreravsquez/mherreravsquez.github.io

**Blog Posts**
https://github.com/mherreravsquez/blog-posts

The site serves as a central hub to showcase my projects, development work, and tools.

---

## Features

- Modern developer portfolio layout with cyberpunk/neon aesthetic
- Lightweight static architecture — no backend required
- Fast GitHub Pages deployment
- **Hero section with 40/60 split layout** — text on the left, media carousel on the right
- **Imgur-powered hero carousel** — supports GIFs, JPEGs, and PNGs with auto-advance and manual navigation
- Simple project card system with tetris-style grid
- i18n support (English / Spanish)
- Custom cursor with hover states
- Scroll-triggered fade-in animations
- Devlog system powered by a separate blog-posts repository
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
Handles animations, interactive behavior, project grid rendering, i18n, and the hero carousel.

**assets/**
Static media, like the resume PDF.

**data/**
Content for portfolio projects and devlogs. Devlog posts are stored in a separate public repository:
https://github.com/mherreravsquez/blog-posts/

```
/
├── index.json
├── en/
└── es/
```

---

## Deployment

The portfolio is deployed using **GitHub Pages**.

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
