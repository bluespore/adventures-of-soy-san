# Soy-San — The Star of Club Bento

A Next.js site chronicling Soy-San, the singing fish, and his 1950s New York meet-and-greet tour.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

- `/` — hero plus the tour diary (mock data in `src/data/adventures.ts`)
- `/about` — biography, timeline, quotes (`src/data/about.ts`)
- `/downloads` — Suno tracks (`src/data/downloads.ts`)

## Adding tracks

Drop audio files into `public/downloads/` and add an entry to `src/data/downloads.ts`. Tracks stream inline and have a download link.

## Theme

Palette comes from the monochrome Club Bento artwork (ink, charcoal, silver, cream) plus a vibrant orange. Tokens live in `src/app/globals.css`.
