# Sanidhya Singh — portfolio

A personal portfolio for a full-stack developer and AI product builder. Dark,
typography-led, with a counted preloader, a rotating role line, project cards
linked to live demos and source, an in-progress section for QueueLess and Oddly,
a skills breakdown, education and job simulations, and a contact section with
working email, LinkedIn, GitHub and résumé links.

## Run it

```sh
bun install
bun run dev        # http://localhost:5173
bun run build      # dist/client (assets) + dist/portfolio/index.js (Worker)
```

## Content

- `src/data/site.ts` is the whole site: profile, links, projects, in-progress
  products, skills, education and simulations. Project copy and links are drawn
  from the existing portfolio, the SS-Portfolio repository and `public/resume.pdf`.
- `public/resume.pdf` is the current résumé. The download button saves it as
  `Sanidhya_Singh_Resume.pdf`.
- `public/images` holds the real project screenshots (CodeSense, InvoiceAI,
  Lost & Found). Anveshak has no screenshot in the repository, so its visual is
  a generated SVG (`src/app/components/art.tsx`) rather than a stock image.

## Notes

- QueueLess is presented as an MVP in development and Oddly as frontend complete
  with the backend in progress. Neither is described as launched.
- No testimonials, client work, awards, CGPA or usage metrics are shown, because
  none of those are verified in the source material.
- There is no contact form: the page links straight to email, so no message can
  silently disappear.

## Deploy with Freebuff Sites

`deploy.json` points at the build output. After `bun run build`, deploy with
the `sites_deploy` tool from this directory.
