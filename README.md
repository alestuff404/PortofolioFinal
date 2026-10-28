# Nanda Valeri Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Inter + JetBrains Mono

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Requires Node.js 18.18+ (20+ recommended).

## Edit content

All text lives in `data/content.ts`. You never need to touch the components to update content.

## Add your photos

Put image files in the `public/images` folder using these exact names.
Until a file exists, a dashed placeholder shows where it will appear.

| What | File |
| --- | --- |
| Profile photo (hero) | `public/images/profile.jpg` |
| Lembar Janji | `public/images/projects/lembar-janji.png` |
| PulangKeMerek | `public/images/projects/pulangkemerek.png` |
| JejakHijau | `public/images/projects/jejakhijau.png` |
| Kuali | `public/images/projects/kuali.png` |
| bisasinema.id | `public/images/projects/bisasinema.png` |
| CIMB Niaga | `public/images/projects/cimb-niaga.png` |

Using a different file name or format (e.g. `.jpg`, `.webp`)? Change the path in `data/content.ts`
(`profile.photo` and each project's `image`).

Tips: profile photo square, at least 600×600 px. Project screenshots about 1600×1000 px (16:10), under 500 KB each.

## Still to fill in

- `profile.links.linkedin`: your LinkedIn URL
- `profile.links.github`: confirm the username
- `projects[].link`: GitHub or demo URL per project (the button shows up once filled)

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com). No configuration needed.
