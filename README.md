# Alvin Yuan — Portfolio

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** — no Tailwind, no component library, full control
- **Vercel** for deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

**Everything content-related lives in one file:**

```
lib/data.ts
```

Edit your name, projects, experience, skills, and links there. The whole site re-renders from that file — you never need to touch the component code to update content.

## Adding your resume

Drop `resume.pdf` into the `/public` folder. It's already linked in the nav.

## Deployment (Vercel — recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at vercel.com and it deploys automatically on every push.

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx      # root layout, metadata
│   ├── page.tsx        # main page (hero, projects, experience, skills, contact)
│   ├── page.module.css # all page styles
│   └── globals.css     # design tokens, reset, fonts
├── components/
│   ├── Nav.tsx         # sticky nav
│   └── Nav.module.css
├── lib/
│   └── data.ts         # ← edit this to update content
└── public/
    └── resume.pdf      # drop your resume here
```

## Design notes

- **Palette**: off-white base (`#F8F7F4`), dark ink, amber signal (`#D97706`)
- **Type**: IBM Plex Mono (display + UI) + Inter (body copy)
- **Aesthetic**: monospace-forward, minimal, terminal-adjacent — fits embedded/firmware roles
- No JavaScript frameworks beyond React, no animation libraries
