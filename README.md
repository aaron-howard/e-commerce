# Digital Atelier — E-commerce MVP

**SvelteKit + Tailwind v4** storefront demo with mock catalog, cart, checkout, and account flows. UI is ported from the Stitch design artifacts in [`stitch_e-commerce/stitch/`](stitch_e-commerce/stitch/) and aligned with [`stitch_e-commerce/stitch/everest_commerce/DESIGN.md`](stitch_e-commerce/stitch/everest_commerce/DESIGN.md) (Architectural Editorial / Digital Atelier system).

> **Suggested GitHub repository description (About field):**  
> *SvelteKit e-commerce MVP with mock data—Digital Atelier design system, cart, checkout, and localStorage-backed orders.*

## Features

- Product catalog (`/shop`) with search, category filters, and `?collection=` deep links from Collections
- Product detail (`/product/[slug]`) with quantity and add-to-cart
- Cart and two-step checkout (shipping → mock payment) creating a persisted mock order
- Mock sign-in / sign-up and profile (`/account`)
- Order confirmation (`/orders/[id]`, client-only)
- Static marketing routes: `/`, `/collections`, `/about`, `/journal`

Data and state are **entirely client-side mock** (no payment processor, no API, no database).

## Prerequisites

- Node.js 20+ (recommended)
- npm (or use your preferred package manager with equivalent commands)

## Setup

```sh
npm install
```

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Dev server ([http://localhost:5173](http://localhost:5173)) |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Typecheck with `svelte-check` |

## Project layout

| Path | Role |
|------|------|
| `src/routes/` | Pages and layouts |
| `src/lib/data/` | Mock products, collections, user |
| `src/lib/stores/` | Cart, checkout, auth, orders (`localStorage`) |
| `src/routes/layout.css` | Tailwind v4 `@theme` tokens (Stitch palette) |
| `stitch_e-commerce/stitch/` | Original HTML / design reference (not executed by the app) |

## Publishing to GitHub

The repository must exist under your account (for example **`e-commerce`**). If it is empty:

```sh
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/e-commerce.git
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub login. Use SSH instead if you prefer:  
`git@github.com:YOUR_GITHUB_USERNAME/e-commerce.git`

After the first push, open the repo on GitHub → **Settings** → set the **Description** (About) to the suggested line at the top of this README.

Optional: add the same URL to `package.json` as a `repository` field for npm metadata.

## License

See [LICENSE](LICENSE) (MIT).
