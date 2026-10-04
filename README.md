# Tachyon 26 — Halloween theme

React + Vite site modeled after [tachyon25.in](https://www.tachyon25.in/), with a bat fly-in intro and a restrained Halloween palette (no neon / “magnetic” gradients).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Customize

| Area | File |
|------|------|
| Events & nav | `src/data/events.ts` |
| Team, speakers, contact | `src/components/ContentSections.tsx` |
| Intro timing / bat count | `src/components/BatIntro.tsx` |
| Colors & typography | `src/index.css` (`:root`) |

Drop hero video, merch photos, event logos, and sponsor assets into `public/` and wire them in `Hero.tsx`, `Merchandise.tsx`, and `Events.tsx`.

## Stack

- React 19 + TypeScript
- [Framer Motion](https://www.framer.com/motion/) — intro & section motion
- [Lenis](https://lenis.darkroom.engineering/) — smooth scroll after intro
