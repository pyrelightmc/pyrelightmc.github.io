# Pyrelight

The Pyrelight landing page and documentation site — built with
[Fumadocs](https://fumadocs.vercel.app) on Next.js, statically exported for
GitHub Pages.

Docs content lives in `content/docs/`, one folder per plugin (`rlogin/`,
`rplugin/`). The landing page is `src/app/(home)/page.tsx`.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to see the result.

## Build

```bash
pnpm build
```

Produces a static export in `out/`, ready to serve from GitHub Pages.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.vercel.app)
