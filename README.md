# Villa Joanna — property sale site

A small, fast, dependency-free single-page site to sell a house. Plain
HTML/CSS/JS, no backend, no build step. Hosted on GitHub Pages.

Available in **English, Dutch, German and Spanish** (the language switch is in
the top-right; it remembers the visitor's choice and auto-detects their browser
language on the first visit).

## Editing the content

**Everything you'd want to change lives in [`js/content.js`](js/content.js).**

- `PROPERTY` — language-independent facts: price, map coordinates, photo list,
  key stats and contact details.
- `I18N` — the translated copy for each language (`en`, `nl`, `de`, `es`).

Placeholder copy is written as `[[like this]]` — search for `[[` to find every
spot that still needs your words.

### Adding / changing photos

Originals are huge, so they get optimized into small web versions automatically:

1. Put your full-resolution originals in `images/_originals/`
   (`.jpg`/`.png`/`.heic`… — this folder is git-ignored, so the big files are
   never committed).
2. Run `make images`. This regenerates, for every original:
   - `images/photos/<name>.jpg` — full size (max 2400 px) shown in the lightbox
   - `images/photos/thumb/<name>.jpg` — thumbnail shown in the gallery grid
3. Reference them in `js/content.js` by **file name only** (e.g. `"kmal4642.jpg"`)
   in `PROPERTY.heroImage`, `PROPERTY.aboutImage` and the `PROPERTY.gallery` list.

Sizes/quality are tunable, e.g. `FULL_MAX=3000 make images`. Run `make help` to
see all commands.

### Adding / changing documents (PDFs)

1. Put the PDF in `documents/`.
2. Run `make docs` to generate a first-page preview image into
   `documents/previews/`.
3. Add an entry to `PROPERTY.documents` in `js/content.js` (`file`, `preview`
   and a `key`), and add the matching title under `documents.items` for each
   language. Leave the list empty to hide the Documents section entirely.

### The map

`PROPERTY.coords` holds the latitude/longitude of the marker, and
`PROPERTY.mapRadius` controls how far the embedded OpenStreetMap is zoomed out
(bigger = wider view). No API key needed.

## Previewing locally

It's just static files, so any static server works:

```bash
make serve            # serves at http://localhost:8000
# or: python3 -m http.server 8000
```

## Publishing on GitHub Pages

1. Merge this branch into `main`.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
   builds and publishes the site on every push to `main`.

### Custom domain

Once you've chosen a domain:

1. Create a file named `CNAME` in the repo root containing just the domain,
   e.g. `villajoanna.com`.
2. At your domain registrar, point DNS at GitHub Pages:
   - **Apex domain** (`example.com`): four `A` records to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153` (and/or the equivalent `AAAA` records).
   - **Subdomain** (`www.example.com`): a `CNAME` record to
     `<your-github-username>.github.io`.
3. In **Settings → Pages**, enter the custom domain and enable
   **Enforce HTTPS**.
