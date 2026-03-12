# Personal Portfolio Website

![GitHub
Pages](https://img.shields.io/badge/deployment-GitHub%20Pages-black)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

This repository contains the source code for my personal portfolio
website, built as a lightweight static site and deployed using GitHub
Pages.

**Live website:**\
https://mherreravsquez.github.io/

**Repository:**\
https://github.com/mherreravsquez/mherreravsquez.github.io

The site serves as a central hub to showcase my projects, development
work, and tools.

------------------------------------------------------------------------

# Features

-   Modern developer portfolio layout
-   Lightweight static architecture
-   Fast GitHub Pages deployment
-   Simple project card system
-   Easily customizable styles
-   Minimal dependencies

------------------------------------------------------------------------

# Tech Stack

The portfolio is built using simple web technologies to keep it fast and
maintainable.

-   HTML
-   CSS
-   JavaScript
-   GitHub Pages

No backend server is required.

------------------------------------------------------------------------

# How the Portfolio Works

This project is a **static website**. All content is stored directly in
the repository.

When you push changes to the repository:

1.  GitHub detects the update
2.  GitHub Pages rebuilds the site
3.  The updated site becomes live automatically

This allows the portfolio to remain extremely simple while still being
easy to maintain.

------------------------------------------------------------------------

# Repository Structure

Example structure:

    /
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    ├── assets/
    │   ├── images
    │   └── icons
    ├── projects/
    └── README.md

### Key folders

**css/**\
Contains all styling for the site UI and layout.

**js/**\
Handles animations and interactive behavior.

**assets/**\
Images, icons, and other static media.

**projects/**\
Content related to portfolio projects.

------------------------------------------------------------------------

# Updating Portfolio Content

## Editing Personal Information

To update personal information such as:

-   Name
-   Bio
-   Social links
-   Skills
-   Tools

Edit the corresponding sections inside:

    index.html

------------------------------------------------------------------------

# Adding a New Project

To manually add a project:

1.  Locate the **Projects section** in the HTML.
2.  Copy an existing project card.
3.  Replace the placeholder content:

```{=html}
<!-- -->
```
    Project title
    Project description
    Technologies used
    Project link
    Project image

4.  Add the project image to:

```{=html}
<!-- -->
```
    assets/images

5.  Commit and push changes.

The project will appear on the live website after deployment.

------------------------------------------------------------------------

# Customizing the Design

The visual style can be modified in the CSS files.

Common customizations include:

-   Accent colors
-   Typography
-   Layout spacing
-   Panel styles
-   Animations

Many colors are controlled using CSS variables, making theme adjustments
easier.

------------------------------------------------------------------------

# Future Improvements

## Replace Placeholder Projects

Current projects use placeholder content.

Planned improvements:

-   Replace placeholders with real projects
-   Add screenshots and media
-   Link projects to GitHub repositories
-   Add detailed project pages

------------------------------------------------------------------------

## Admin Panel

A future implementation will introduce a **simple admin panel** to
manage portfolio projects.

The admin panel will allow:

-   Adding new projects
-   Editing existing projects
-   Managing project descriptions
-   Uploading project images

This panel would update a structured data file (such as JSON) that the
frontend reads to render projects dynamically.

Benefits:

-   No manual HTML editing
-   Faster updates
-   Easier long-term maintenance

------------------------------------------------------------------------

# Planned Roadmap

Possible future features:

-   Project filtering and tags
-   Markdown-based blog system
-   Search functionality
-   Analytics
-   Dark/light themes
-   Automated project generation from GitHub repositories

------------------------------------------------------------------------

# Deployment

The portfolio is deployed using **GitHub Pages**.

Deployment URL:

    https://mherreravsquez.github.io/

Every push to the main branch automatically updates the site.

------------------------------------------------------------------------

# Contributing

This repository mainly serves as a personal portfolio, but suggestions
and ideas are always welcome.

------------------------------------------------------------------------

# License

This project is licensed under the MIT License.

You are free to use this project as inspiration for your own portfolio.
