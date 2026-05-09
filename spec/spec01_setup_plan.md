# Implementation Plan — Matheus Sena Portfolio

## Problem Statement
Build a responsive, GitHub Pages-deployable React/Vite portfolio for Matheus Sena (SDE) with a refined black/white/gray aesthetic, data-driven extensible sections, and a single Home page with stub routes for future pages.

## Requirements
- React + Vite, deployable to `https://senavs.github.io/portfolio`
- Black / white / gray color palette (no purple)
- Sections: Hero, Public Projects, Experience (tab selector), Skills, My History, Footer
- Public Projects, Skills, Experience driven by JSON data files — easy to extend
- Mobile responsive
- Nav with routes: Home (full), Public Projects (Coming Soon), About (Coming Soon), Contact (Coming Soon)
- Avatar from `public/avatar.jpg`
- Placeholder Lorem Ipsum content initially
- Typography: Cabinet Grotesk (headings) + Satoshi (body) via Fontshare

## Design Direction
- **Aesthetic:** Editorial/utilitarian, mirroring the reference layout without purple
- **Palette:** bg `#ffffff`, surface `#f5f5f5`, text `#1a1a1a`, muted `#6b6b6b`, border `#e0e0e0`
- **Fonts:** Cabinet Grotesk 700/800 (headings) + Satoshi 400/500 (body)
- **Motion:** Staggered CSS `@keyframes` on Hero load; `IntersectionObserver` scroll-reveal on sections
- **Section titles:** bold period-punctuated style (`Projects.`, `Experience.`)

## Project Structure
```
portfolio/
├── public/
│   └── avatar.jpg
├── src/
│   ├── data/
│   │   ├── projects.json
│   │   ├── experience.json
│   │   └── skills.json
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── ProjectCard.jsx / ProjectCard.css
│   │   ├── ProjectsSection.jsx / ProjectsSection.css
│   │   ├── ExperienceSection.jsx / ExperienceSection.css
│   │   ├── SkillsSection.jsx / SkillsSection.css
│   │   ├── HistorySection.jsx / HistorySection.css
│   │   └── Footer.jsx / Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx  ← Coming Soon
│   │   ├── About.jsx     ← Coming Soon
│   │   ├── Contact.jsx   ← Coming Soon
│   │   └── ComingSoon.jsx / ComingSoon.css
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js        ← base: '/portfolio/'
└── package.json          ← predeploy + deploy scripts
```

## Tasks Executed

### Task 1 — Scaffold & Configuration
- Initialized Vite 4 + React (`npm create vite@4`) — Vite 4 required for Node 18 compatibility
- Installed `react-router-dom@6` and `gh-pages@6`
- Set `base: '/portfolio/'` in `vite.config.js`
- Added `predeploy: "npm run build"` and `deploy: "gh-pages -d dist"` to `package.json`
- Created `src/styles/global.css` with CSS variables and Fontshare imports
- Copied avatar to `public/avatar.jpg`

### Task 2 — Routing + Navbar
- `App.jsx`: `<BrowserRouter basename="/portfolio">` with four routes
- `Navbar.jsx`: logo, `<NavLink>` with active underline, responsive hamburger via `useState`
- Stub pages (Projects, About, Contact) via shared `ComingSoon.jsx`

### Task 3 — Hero Section
- Two-column layout: greeting + heading + tagline + CTA buttons | circular avatar
- Staggered `animation-delay` CSS load animations per element
- Responsive: single column on mobile, avatar above text

### Task 4 — JSON Data Files
- `projects.json`: 4 entries `{ id, title, description, tags[], liveUrl }`
- `experience.json`: 4 entries `{ id, company, role, period, bullets[] }`
- `skills.json`: 4 entries `{ category, items[] }` — Backend, Frontend, DevOps & Cloud, Soft Skills

### Task 5 — Public Projects Section
- `ProjectCard.jsx`: surface bg, decorative CSS arc, title + ↗ link, tags, hover lift
- `ProjectsSection.jsx`: accepts `limit` prop, 2-col grid (1-col mobile)

### Task 6 — Experience Section
- `ExperienceSection.jsx`: left company tab list + right detail panel with `useState`
- Mobile: horizontal scrollable tabs above detail panel

### Task 7 — Skills Section
- `SkillsSection.jsx`: 4-col grid from `skills.json`
- Responsive: 2-col tablet, 1-col mobile

### Task 8 — History Section
- `HistorySection.jsx`: accepts `paragraphs[]` prop (HTML strings), reusable for About page

### Task 9 — Footer
- Nav links + GitHub/LinkedIn SVG icons
- "Interested in working together?" CTA row + copyright

### Task 10 — Home Assembly + Scroll Animations
- `Home.jsx`: composes Hero → ProjectsSection → ExperienceSection → SkillsSection → HistorySection → Footer
- `useScrollReveal.js`: `IntersectionObserver` hook adds `.visible` class to `.reveal` wrappers
- `RevealSection` wrapper component in `Home.jsx` applies reveal to each section
- Build verified: `npm run build` ✓

## Post-Plan Fixes
- Avatar path corrected from `.svg` to `.jpg` in `Hero.jsx`
- Fonts updated from Syne/DM Sans → Cabinet Grotesk/Satoshi (matches reference design)
- Grayscale filter removed from avatar image
