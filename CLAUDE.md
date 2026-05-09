# CLAUDE.md — Matheus Sena Portfolio

## Project Overview
Personal portfolio for Matheus Sena (Software Development Engineer). Built with React + Vite, deployable to GitHub Pages at `https://senavs.github.io/portfolio`.

## Commands
```bash
npm run dev        # local dev server
npm run build      # production build → dist/
npm run deploy     # build + push to gh-pages branch (GitHub Pages)
```

## Stack
- **React 18** + **Vite 4** (Node 18 compatible)
- **react-router-dom 6** — client-side routing with `basename="/portfolio"`
- **gh-pages 6** — deployment to GitHub Pages
- No CSS framework — plain CSS with custom properties

## Design
- **Palette:** white bg (`#ffffff`), surface (`#f5f5f5`), text (`#1a1a1a`), muted (`#6b6b6b`), border (`#e0e0e0`)
- **Fonts:** Cabinet Grotesk (headings, via Fontshare) + Satoshi (body, via Fontshare)
- **Motion:** CSS `@keyframes` on Hero load; `IntersectionObserver` scroll-reveal on sections (`.reveal` → `.reveal.visible`)
- CSS variables defined in `src/styles/global.css` — change palette/fonts there

## Project Structure
```
src/
├── data/               ← JSON content files (edit to update portfolio content)
│   ├── projects.json   — { id, title, description, tags[], liveUrl }
│   ├── experience.json — { id, company, role, period, bullets[] }
│   └── skills.json     — { category, items[] }
├── components/
│   ├── Navbar.jsx/css          — sticky nav, hamburger on mobile
│   ├── Hero.jsx/css            — two-column hero, avatar, CTA buttons
│   ├── ProjectCard.jsx/css     — individual project card with hover lift
│   ├── ProjectsSection.jsx/css — grid of ProjectCards, accepts `limit` prop
│   ├── ExperienceSection.jsx/css — tab selector (left) + detail panel (right)
│   ├── SkillsSection.jsx/css   — 4-col skills grid
│   ├── HistorySection.jsx/css  — reusable prose section, accepts `paragraphs[]` prop
│   └── Footer.jsx/css          — nav links, social icons, CTA row
├── pages/
│   ├── Home.jsx        — composes all sections; history paragraphs defined here
│   ├── Projects.jsx    — Coming Soon stub
│   ├── About.jsx       — Coming Soon stub
│   ├── Contact.jsx     — Coming Soon stub
│   └── ComingSoon.jsx  — shared stub component
├── hooks/
│   └── useScrollReveal.js — IntersectionObserver hook, adds `.visible` class
├── styles/
│   └── global.css      — CSS variables, reset, fonts, shared utilities
├── App.jsx             — BrowserRouter + Routes
└── main.jsx            — entry point, imports global.css
public/
└── avatar.jpg          — profile photo (replace to update)
```

## Updating Content
All three extensible sections are data-driven — no component changes needed:

- **Add a project:** append an object to `src/data/projects.json`
- **Add an experience:** append an object to `src/data/experience.json`
- **Add a skill category:** append an object to `src/data/skills.json`

## Routing
| Path        | Page              |
|-------------|-------------------|
| `/`         | Home (full page)  |
| `/projects` | Coming Soon       |
| `/about`    | Coming Soon       |
| `/contact`  | Coming Soon       |

## GitHub Pages Deployment
- `vite.config.js` sets `base: '/portfolio/'`
- All asset paths must use `/portfolio/` prefix (e.g. avatar: `/portfolio/avatar.jpg`)
- Deploy: `npm run deploy` — pushes `dist/` to the `gh-pages` branch

## Spec & Planning
- `spec/spec01_setup.md` — original requirements
- `spec/spec01_setup_plan.md` — implementation plan
- `spec/images/` — reference design screenshots
