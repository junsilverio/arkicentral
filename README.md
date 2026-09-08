# ArkiCentral

ArkiCentral is an Angular Progressive Web App (PWA) for finding the right architect for your dream project. Connect with verified architects, explore inspiring projects, and bring your vision to life.

## Features

- **PWA support** — installable, offline-capable via Angular service worker
- **Responsive layout** — optimized for desktop, tablet (≤1024px), and mobile (≤640px)
- Landing page with hero search, featured professionals, project categories, brand partners, recent projects, and a "How it works" guide

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
```

> Note: the service worker is only enabled in production builds.

## Build

```bash
npm run build    # production build in dist/arkicentral
```

Serve the production build locally to test the PWA:

```bash
npx http-server dist/arkicentral/browser
```
