# SanskaTots™ Brand Website

Premium brand website for SanskaTots™ — India's Montessori learning books for children aged 1–6.

## Quick Start

This is a static website. No build step required for development.

### Local Development

Open `index.html` in a browser, or use a local server:

```bash
# Using Python
cd website
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then open http://localhost:8000

## Structure

```
website/
├── index.html                          # Homepage
├── about.html                          # About page
├── 404.html                            # Custom 404 page
├── css/
│   └── style.css                       # Custom brand styles
├── js/
│   └── main.js                         # Interactivity (nav, gallery, FAQ, animations)
├── products/
│   ├── montessori-busy-book.html       # Product detail page
│   └── pencil-control-tracing-book.html # Product detail page
└── images/
    ├── montessori-busy-book/           # Product images
    └── pencil-control-tracing-book/    # Product images
```

## Deploy to GitHub Pages

1. Push this `website/` folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → select `main` → set folder to `/website`
4. (Optional) Add custom domain in CNAME file

Or use the root of a dedicated repository and point GitHub Pages to `/` (root).

## Before Going Live

Replace these placeholder values:
- `STORE_ID` → Your actual Amazon Storefront page ID
- `MONTESSORI_ASIN` → The real ASIN for Montessori Busy Book
- `PENCILCONTROL_ASIN` → The real ASIN for Pencil Control Tracing Book
- `sanskatots-21` → Your actual Amazon Associates affiliate tag

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **Tailwind CSS** (CDN) — Utility-first styling
- **Vanilla JavaScript** — Zero dependencies, <5KB
- **Google Fonts** — Playfair Display + Inter + Poppins

## Features

- Fully responsive (mobile-first)
- Scroll reveal animations (respects `prefers-reduced-motion`)
- Image gallery with thumbnail switching
- FAQ accordion
- Sticky navigation with blur effect
- Amazon CTA tracking (GA4-ready)
- SEO: JSON-LD structured data, Open Graph, meta tags
- Accessibility: Skip links, ARIA labels, contrast-safe colors
