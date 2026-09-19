# Keerthana S — Mechanical Engineering Portfolio

A static, dependency-free portfolio website. No build step, no framework, no backend — just HTML, CSS and JavaScript.

## Folder structure

```
├── index.html          # All page content and markup
├── css/
│   └── style.css        # All styling
├── js/
│   └── script.js        # Nav highlighting, mobile menu, scroll reveal
├── assets/
│   └── Keerthana_S_Resume.pdf   # Downloadable resume (linked from the Download Résumé buttons)
└── README.md
```

The only external resources are Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono), loaded over HTTPS from `fonts.googleapis.com`. Everything else is self-contained.

## Run it locally

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

### GitHub Pages
1. Create a new GitHub repository and push this folder's contents to it (with `index.html` at the repo root).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", pick the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

### Netlify
1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Deploy manually**.
2. Drag and drop this entire folder onto the upload area.
3. Netlify will publish it instantly and give you a live URL (you can rename it or attach a custom domain in Site settings).

### Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New → Project**.
2. Import this folder (or push it to a Git repo first and import that repo).
3. Leave the framework preset as "Other" — no build command is needed.
4. Deploy.

## Updating content

- Text and section content live directly in `index.html`.
- Colors, spacing, fonts and layout are controlled by CSS variables at the top of `css/style.css` (under `:root`).
- To swap the resume, replace `assets/Keerthana_S_Resume.pdf` with a new PDF of the same filename (or update the `href`/`download` attributes on the three "Download Résumé" links in `index.html` if you rename it).
