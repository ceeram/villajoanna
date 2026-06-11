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

### Adding real photos

1. Drop your image files into the [`images/`](images/) folder
   (`.jpg`/`.webp`/`.png` all work; the placeholders are `.svg`).
2. Update the file names in `PROPERTY.heroImage`, `PROPERTY.aboutImage` and the
   `PROPERTY.gallery` array in `js/content.js`.

Tip: keep photos around 1600 px wide and compressed (e.g. via
[squoosh.app](https://squoosh.app)) so the page stays fast.

### The map

`PROPERTY.coords` holds the latitude/longitude shown on the embedded
OpenStreetMap. No API key needed.

## Previewing locally

It's just static files, so any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
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
