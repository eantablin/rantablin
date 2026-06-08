# Richard Antablin — Portfolio

Personal site for **Richard Antablin, EIT** — Project Engineer at Swinerton and
FE-certified Architectural Engineer. Built as a single-page React + Vite app with
an industrial-construction theme (concrete + safety orange + blueprint motifs).

🌐 **Live:** [richard.antablin.com](https://richard.antablin.com)

## Tech

- **React 18 + Vite** — fast, dependency-light static build
- **Framer Motion** — scroll reveals, parallax, animated counters
- **Canvas** — animated blueprint grid / structural-joint lattice in the hero
- Custom surveyor's-reticle cursor, hazard-stripe dividers, animated marquee

## Develop

```bash
npm install      # one-time
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

All copy lives in one file: [`src/data/content.js`](src/data/content.js).
Edit experience, projects, skills, credentials, contact links, etc. there —
no component changes needed.

## Adding the headshot

Drop a photo at **`public/richard.jpg`** and it appears automatically in the
About section. Until then a blueprint-styled "RA" monogram is shown as a
fallback. (A 4:5 portrait crop works best.)

## Deployment

Pushing to `main` triggers the GitHub Actions workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)), which builds the
site and publishes it to GitHub Pages.

**One-time setup in the repo settings:**

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. **Settings → Pages → Custom domain:** `richard.antablin.com`
3. Add a **CNAME DNS record** at your domain host:
   `richard` → `eantablin.github.io`
   (The [`public/CNAME`](public/CNAME) file is already committed.)
4. Enable **Enforce HTTPS** once the certificate is issued.
