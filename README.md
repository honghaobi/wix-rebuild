# wix-rebuild

Rebuild of a Wix-style marketing site as a **React + TypeScript + Vite** app, styled with **Tailwind CSS** and animated with **Framer Motion**.

## Tech stack

- React 19 + TypeScript
- Vite (dev server + build)
- Tailwind CSS
- Framer Motion
- GitHub Pages deploy via GitHub Actions

## Getting started

### Prereqs

- Node.js **20+**
- npm

### Install

```bash
npm ci
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:

- runs on pushes to `main` or `master` (and on manual dispatch)
- installs with `npm ci`
- builds to `dist/`
- deploys `dist/` to GitHub Pages

Vite is configured to work for both local builds and GitHub Pages project sites by setting `base` automatically when running in GitHub Actions (`vite.config.ts`).

## Project structure

- `src/App.tsx`: page composition
- `src/components/`: UI sections/components
- `src/assets/`: images and static assets
