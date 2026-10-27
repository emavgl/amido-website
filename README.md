# Amido website

Static marketing, support and legal site for **Amido** — the AI food logger for
people with type 1 diabetes. Built with [Astro](https://astro.build) + Tailwind,
deployed as static files.

## Pages

| Route | What |
|-------|------|
| `/` | landing page |
| `/support` | help, feedback and donations |
| `/privacy` | privacy policy |
| `/terms` | terms & conditions |
| `/impressum` | provider information (Austria) |

## Commands

```sh
npm install
npm run dev        # local dev server
npm run build      # static output → dist/
npm run preview    # preview the build
```

## Deploy

`npm run build` emits a static site in `dist/`; serve it from any static host
(Caddy, GitHub Pages, Cloudflare Pages, …). The public URL is set in
`astro.config.mjs` (`site`) and, for GitHub Pages, in `public/CNAME`.

The accent colour (`#0f7a3f`) and branding live in `src/styles/global.css`;
the icon is `public/amido-icon.png` (kept in sync with the app icon in the
`emavgl/amido-food` repository).
