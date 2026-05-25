# SanskaTots™ Brand Website — Aggressive Technical Specification
**Version:** 1.0  
**Date:** May 25, 2026  
**Prepared for:** Deethya Enterprises / SanskaTots™  
**Deployment Target:** GitHub Pages (Static)  
**Status:** READY TO BUILD — NO AMBIGUITY ALLOWED

---

## EXECUTIVE BRIEF — WHAT THIS WEBSITE MUST DO

This is NOT a generic product website. This is the **primary brand home** for SanskaTots™ — India's premium Montessori, screen-free learning brand for children aged 1–6. Every pixel, every word, every interaction must communicate one thing: **this brand is elite, Indian-made, and built for parents who care deeply about their child's development.**

The website has ONE conversion goal: **get visitors to click "Buy on Amazon" and purchase.**

There is no cart. No checkout. No login. No backend. This is a pure static marketing site. The complexity is in the brand execution and performance — not in server-side logic.

**If a developer looks at this website and says "nice little shop" — you have failed. If they say "this looks like a premium international brand" — you have won.**

---

## 1. TECH STACK — HARD REQUIREMENTS

### Framework
- **HTML5 + CSS3 + Vanilla JavaScript** — Zero heavy frameworks unless justified
- OR **Next.js / Astro with static export** — If you want component-based architecture and better SEO control
- **Recommended: Astro** (zero JS by default, static-first, fastest GitHub Pages deploys)
- **Do NOT use**: WordPress, Webflow, Wix, Squarespace — you need full code control

### Styling
- **Tailwind CSS** (utility-first, small bundle, mobile-first by default)
- Custom CSS variables for brand tokens (defined in Section 3)
- **No Bootstrap** — it is bloated and produces generic-looking UIs

### Animations
- **GSAP (GreenSock)** for scroll-triggered reveal animations
- **Lottie** for any micro-animations (optional, only if you have .lottie files)
- CSS transitions/keyframes for hover effects and simple state changes
- **Framer Motion** only if using React/Next.js

### Build & Deploy
- **GitHub Pages** — Deploy from `/docs` folder OR via `gh-pages` branch
- **GitHub Actions** CI/CD pipeline for automated builds on push to `main`
- Domain: Custom domain via `CNAME` file (e.g., `www.sanskatots.com`)
- HTTPS enforced by default on GitHub Pages (Let's Encrypt)

### Performance Targets (NON-NEGOTIABLE)
- **Lighthouse Performance Score: 90+** on mobile
- **Lighthouse SEO Score: 95+**
- **Lighthouse Accessibility Score: 90+**
- **LCP (Largest Contentful Paint): < 2.5 seconds** on 4G mobile
- **CLS (Cumulative Layout Shift): < 0.1**
- **FID / INP: < 200ms**

---

## 2. SITE ARCHITECTURE — PAGE MAP

```
/ (Home)
├── /products
│   ├── /montessori-busy-book
│   ├── /all-in-one-busy-book
│   ├── /animals-busy-book
│   ├── /pencil-control-tracing-book
│   ├── /learn-kannada-5-in-1
│   ├── /bhagavad-gita-for-kids
│   └── /shloka-board-book
├── /about
├── /contact (optional — simple mailto: link, no form backend)
└── 404.html (custom branded 404)
```

### Page Types
| Page | Purpose | Primary CTA |
|---|---|---|
| Home | Brand impression + product overview + hero story | "Shop on Amazon" |
| Product Detail | Deep product pitch — mirrors Amazon A+ quality | "Buy on Amazon →" |
| About | Brand story, Made in India, founder mission | "See Our Books" |
| 404 | Branded, on-theme error page | "Go to Home" |

---

## 3. DESIGN SYSTEM — THE BRAND BIBLE

### Color Palette (EXACT — No Deviation)
```css
:root {
  /* Primary Brand Colors */
  --color-saffron:      #F4A340;   /* Primary CTA, highlights, accents */
  --color-maroon:       #8C2A2A;   /* Headings, strong emphasis, footer */
  --color-teal:         #2BA8A0;   /* Secondary accents, icon fills, tags */
  --color-cream:        #FFF8EC;   /* Page backgrounds, card backgrounds */

  /* Extended Palette */
  --color-saffron-light: #FDE4B5;  /* Hover states, light badges */
  --color-saffron-dark:  #D4892A;  /* CTA button hover state */
  --color-maroon-light:  #C44C4C;  /* Subheadings, highlighted text */
  --color-teal-light:    #A8E6E3;  /* Badge backgrounds, chip fills */
  --color-charcoal:      #2A2A2A;  /* Body text — never pure black */
  --color-white:         #FFFFFF;
  --color-off-white:     #FAF6F0;  /* Alternative section backgrounds */
  --color-border:        #E8DCC8;  /* Subtle borders, dividers */

  /* Semantic Colors */
  --color-bg-primary:    var(--color-cream);
  --color-bg-section-alt: var(--color-off-white);
  --color-text-primary:  var(--color-charcoal);
  --color-text-heading:  var(--color-maroon);
  --color-text-accent:   var(--color-saffron);
  --color-cta-primary:   var(--color-saffron);
  --color-cta-hover:     var(--color-saffron-dark);
}
```

### Typography
```css
/* Font Stack */
/* Heading Font: Playfair Display — Elegant, Premium, Indian Cultural Gravity */
/* Body Font: Inter — Clean, Modern, Readable at all sizes */
/* Accent Font: Poppins — Buttons, tags, UI labels */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap');

:root {
  --font-heading:  'Playfair Display', Georgia, serif;
  --font-body:     'Inter', system-ui, sans-serif;
  --font-ui:       'Poppins', 'Inter', sans-serif;

  /* Type Scale */
  --text-xs:    0.75rem;   /* 12px */
  --text-sm:    0.875rem;  /* 14px */
  --text-base:  1rem;      /* 16px */
  --text-lg:    1.125rem;  /* 18px */
  --text-xl:    1.25rem;   /* 20px */
  --text-2xl:   1.5rem;    /* 24px */
  --text-3xl:   1.875rem;  /* 30px */
  --text-4xl:   2.25rem;   /* 36px */
  --text-5xl:   3rem;      /* 48px */
  --text-6xl:   3.75rem;   /* 60px */
  --text-hero:  clamp(2.5rem, 6vw, 5rem);  /* Fluid hero heading */

  /* Line Heights */
  --leading-tight:  1.2;
  --leading-snug:   1.35;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;

  /* Letter Spacing */
  --tracking-wide:   0.04em;
  --tracking-wider:  0.08em;
  --tracking-widest: 0.15em;
}
```

### Spacing System
```css
:root {
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
}
```

### Border Radius
```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  32px;
  --radius-full: 9999px;
}
```

### Shadows
```css
:root {
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.08);
  --shadow-lg:  0 12px 32px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08);
  --shadow-xl:  0 24px 48px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.10);
  --shadow-saffron: 0 8px 24px rgba(244,163,64,0.35);  /* CTA glow shadow */
  --shadow-card:    0 2px 8px rgba(140,42,42,0.08), 0 8px 24px rgba(0,0,0,0.06);
}
```

---

## 4. COMPONENT LIBRARY — BUILD THESE EXACTLY

### 4.1 Navigation / Header

**Behavior:**
- Sticky on scroll (adds `backdrop-filter: blur(12px)` + background tint after 80px scroll)
- Mobile: Hamburger menu → full-screen overlay slide-in from right
- Desktop: Horizontal nav with dropdown for "Books" category
- Logo: SVG (never PNG for nav — must be crisp at all sizes)
- Height: 72px desktop, 60px mobile

**Structure:**
```
[SanskaTots Logo]    [Books ▾] [About] [Contact]    [Buy on Amazon →]
```

**"Buy on Amazon" button in nav:**
- Saffron background `#F4A340`, maroon text `#8C2A2A`, bold Poppins
- Amazon arrow icon (→) inline
- On hover: Slight scale `transform: scale(1.03)`, shadow intensifies
- Opens Amazon seller page in new tab (`target="_blank" rel="noopener noreferrer"`)

**Mobile Nav Overlay:**
- Full viewport height
- Background: Maroon `#8C2A2A` with subtle diagonal texture
- Links: Large (28px), cream colored, stacked vertically
- "Buy on Amazon" button: Full-width at bottom of overlay, saffron fill
- Close button: Top-right corner, cream × icon

---

### 4.2 Hero Section (Homepage)

**Layout:** Full-viewport-height (100vh) split layout  
- **Left (60% on desktop, 100% on mobile):** Text content  
- **Right (40% on desktop, hidden on mobile hero):** Product showcase image  

**Required Elements:**
1. **Pre-headline tag (pill badge):**  
   ```
   🇮🇳  Made in India · Screen-Free · Montessori
   ```
   Style: Cream background, teal border, teal text, `border-radius: 999px`, small caps

2. **Hero Headline (H1):**  
   ```
   Where India's Youngest  
   Learners Begin Their Story.
   ```
   Font: Playfair Display 800, fluid `clamp(2.5rem, 6vw, 5rem)`  
   Color: Maroon `#8C2A2A`  
   Line 2 has saffron underline decoration (CSS `text-decoration` or pseudo-element)

3. **Sub-headline:**  
   ```
   Premium Montessori books for children aged 1–6.  
   Reusable. Screen-free. Proudly Indian.
   ```
   Font: Inter 400, 1.2rem, charcoal, line-height 1.75

4. **CTA Button Group:**  
   - Primary: `"Explore Books"` → scrolls to product section  
     Style: Saffron background, maroon text, 56px height, 28px horizontal padding  
   - Secondary: `"Buy on Amazon →"` → opens Amazon store in new tab  
     Style: Transparent, saffron border, saffron text, same size

5. **Trust Badges (below CTAs):**
   ```
   ✓ 300 GSM Premium Quality  ·  ✓ Free Pen & Duster  ·  ✓ Ships Across India
   ```
   Font: Inter 500, size 13px, charcoal, spaced with `·` separators

6. **Scroll indicator:** Animated down-chevron, cream circle, positioned bottom-center

**Background:**  
- Cream `#FFF8EC` base
- Subtle hand-drawn botanical/pattern SVG overlay at 4% opacity (Indian motif — lotuses, paisleys, dots)
- NO stock photography in background

**Right panel (desktop only):**
- Floating product book mockup with soft drop shadow
- 3–4 product images rotating in a gentle CSS carousel (one product every 4 seconds, fade transition)
- Small "NEW" badge in saffron on the featured product

---

### 4.3 Brand Story Strip (Homepage — Below Hero)

**Layout:** Full-width background with centered text  
**Background:** Maroon `#8C2A2A`  
**Text Color:** Cream `#FFF8EC`  

```
"In a world of screens, we put a book in your child's hand."
— SanskaTots, Designed in India by Indian educators.
```

Font: Playfair Display Italic, 1.75rem  
Width: Max 680px, centered  
Padding: 64px top/bottom  

Optional: Subtle animated wavy underline under the quote text (CSS animation, saffron color)

---

### 4.4 Feature Pillars Section (Homepage)

**Layout:** 4-column grid on desktop, 2-column on tablet, 1-column on mobile  
**Background:** Cream `#FFF8EC`  
**Section Heading:** "Why Parents Choose SanskaTots™"

**4 Pillar Cards:**
Each card has: Icon (SVG, 48px, teal) + Bold title + 2-line description

| Icon | Title | Description |
|---|---|---|
| ♾️ | Infinitely Reusable | Write, wipe, and repeat. 300 GSM laminated pages last for years, not days. |
| 🧩 | Velcro Montessori System | Interactive Velcro activities on every concept — real hands-on learning, not passive tracing. |
| 📵 | 100% Screen-Free | No app. No Wi-Fi. No battery. Pure tactile learning that pediatricians actually recommend. |
| 🇮🇳 | Proudly Made in India | Designed by Indian educators, for Indian children and Indian homes. |

**Card Style:**
- White background with `--shadow-card`
- `border-radius: 16px`
- Top-left saffron accent border (4px, left side only, `border-left`)
- Hover: Card lifts `transform: translateY(-4px)`, shadow deepens
- Transition: `0.25s ease`

---

### 4.5 Product Grid Section (Homepage + /products page)

**Section Title:** "Our Books"  
**Sub-title:** "7 books. Infinite learning. All available on Amazon India."

**Layout:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column (full-width cards)
- Gap: 28px

**Product Card Anatomy:**
```
┌─────────────────────────────────┐
│  [Category Badge: "BUSY BOOK"]  │
│  ┌─────────────────────────┐    │
│  │  Product Cover Image    │    │
│  │  (4:3 ratio, object-fit │    │
│  │   cover, lazy loaded)   │    │
│  └─────────────────────────┘    │
│                                 │
│  ★★★★★  "Ages 1+"              │
│                                 │
│  SanskaTots Montessori          │
│  Busy Book                      │
│  [H3, Playfair Display 600]     │
│                                 │
│  Velcro activities · 11 topics  │
│  300 GSM · Free pen & duster    │
│  [tag chips, small text]        │
│                                 │
│  ₹399                           │
│  [Price, Poppins 600, Maroon]   │
│                                 │
│  [ Buy on Amazon → ]            │
│  [Full-width saffron button]    │
└─────────────────────────────────┘
```

**Product Card Specs:**
- Background: White
- Border-radius: `--radius-xl` (24px)
- Box shadow: `--shadow-card`
- Hover: `transform: translateY(-6px) scale(1.01)`, shadow amplifies
- Transition: `0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Image: Lazy loaded (`loading="lazy"`), `aspect-ratio: 4/3`, `object-fit: cover`
- Image hover: Subtle `transform: scale(1.04)` with overflow hidden on container

**Category Badge Variants:**
- "BUSY BOOK" → Teal background, white text
- "TRACING BOOK" → Saffron background, maroon text
- "MYTHOLOGY" → Maroon background, cream text
- "LANGUAGE" → Teal background, white text

**"Buy on Amazon →" Button:**
- Full width of card
- Saffron `#F4A340` background, Maroon `#8C2A2A` text
- Poppins 600, 16px
- Height: 52px
- Border radius: `--radius-md` (8px)
- Amazon logo favicon as inline icon (16px, left of text)
- `target="_blank" rel="noopener noreferrer"` — MANDATORY
- Hover: `background: var(--color-saffron-dark)`, `box-shadow: var(--shadow-saffron)`

---

### 4.6 Product Detail Page

Each product gets its own dedicated page. This is NOT a lightbox popup. It is a full page. It should feel like an Apple product page crossed with a premium Indian brand page.

**URL Structure:** `/products/montessori-busy-book/`

**Page Sections (in order):**

---

#### Section A — Product Hero (Above the Fold)

**Layout:** 2-column, 50/50 split  
- **Left:** Image gallery  
- **Right:** Product info + CTA  

**Left — Image Gallery:**
- Main image: Large (560px width on desktop), square aspect ratio
- Thumbnail strip below: 4–5 smaller images, click to switch main
- All images: Lazy loaded, `object-fit: contain`, white or cream background
- Smooth fade transition between images (300ms ease)
- Mobile: Swipeable horizontal carousel (CSS scroll snapping OR Swiper.js)
- Pinch-to-zoom on mobile: Use `<img>` with medium-zoom library OR native `touch-action: manipulation`

**Right — Product Info Panel:**

1. **Brand tag:** `SanskaTots™` — Small, Poppins 500, teal, letter-spaced
2. **Product Name (H1):** Full product title, Playfair Display 700, maroon, max 2 lines
3. **Rating row:** ★★★★★ stars (rendered as SVG stars, saffron), review count link
4. **Price:** `₹399` — Poppins 700, 32px, maroon. Strikethrough MRP if discounted.
5. **Tag chips row:** 
   - `300 GSM` · `Write & Wipe` · `FREE Pen + Duster` · `Age 2+` · `Made in India 🇮🇳`
   - Style: Pill shape, cream background, teal border, teal text, 12px font
6. **Short description:** 3–4 sentences, benefit-led. Inter 400, 16px, line-height 1.75
7. **Buy Button (PRIMARY CTA):**
   ```
   [amazon icon] Buy on Amazon →
   ```
   - Full width (desktop: capped at 380px)
   - Height: 60px
   - Font: Poppins 700, 18px
   - Background: `#F4A340` saffron
   - Color: `#8C2A2A` maroon
   - Border-radius: `--radius-lg` (16px)
   - Box-shadow: `var(--shadow-saffron)` — makes button POP
   - Hover: `background: #D4892A`, shadow intensifies, scale `1.02`
   - Opens Amazon product listing URL in new tab
   - **Add UTM parameters to the Amazon URL for tracking:**
     `?tag=sanskatots-21&utm_source=website&utm_medium=organic&utm_campaign=product-page`

8. **Trust signals strip (below button):**
   ```
   🔒 Secure Amazon Checkout  ·  🚚 Free Delivery on ₹499+  ·  ↩️ Easy Returns
   ```
   Font: Inter 400, 12px, color `#666`

9. **Social share micro-row:**
   - WhatsApp share link (critical for Indian market — people share products in family groups)
   - Copy link button
   - No Facebook/Twitter required for core launch

---

#### Section B — Product Features Deep-Dive

**Layout:** Full-width alternating text/image sections (like Apple product pages)

For each key feature, create a section:
- Alternating: Image left + text right → text left + image right
- Text: H2 in Playfair Display, body in Inter
- Image: Actual product photos or designed infographics
- Background alternates: Cream → White → Cream
- Each section has at minimum 1 "scroll reveal" animation (fade in + slight upward movement)

**Required Feature Sections per Product:**
1. **The Write-Wipe-Repeat System** (if applicable) — 3-panel visual: Write → Wipe → Clean
2. **Velcro Activities** (if applicable) — Child's hand + close-up Velcro interaction
3. **What's Inside** — Full content breakdown with icons
4. **300 GSM Quality** — Cross-section visual, quality callout badges
5. **Free Bundle** — Flat-lay of book + pen + duster

---

#### Section C — YouTube Video Embed

**If a YouTube video exists for the product:**

```html
<div class="video-section">
  <h2>See It In Action</h2>
  <div class="video-wrapper" data-youtube-id="YOUTUBE_VIDEO_ID">
    <!-- Lazy YouTube Embed — Critical for performance -->
    <img 
      src="https://i.ytimg.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg" 
      alt="SanskaTots [Product Name] — Product Demo"
      loading="lazy"
      class="video-thumbnail"
    />
    <button class="video-play-btn" aria-label="Play video">
      <!-- Custom play button SVG — NOT YouTube's default embed -->
    </button>
  </div>
</div>
```

**CRITICAL — LAZY YOUTUBE LOADING:**  
Never use `<iframe src="https://youtube.com/embed/...">` directly. This loads YouTube scripts on page load, which DESTROYS your Lighthouse performance score (adds ~500KB, blocks render, tanks LCP by 1–2 seconds).

**Implementation:**
- Show YouTube thumbnail + custom play button as static HTML
- ONLY inject the `<iframe>` into the DOM when the user CLICKS the play button
- Use `lite-youtube-embed` npm package OR implement this manually with 15 lines of JS
- This alone can improve Lighthouse performance by 20–30 points

**Video Section Styling:**
- Max width: 900px, centered
- 16:9 aspect ratio container (`aspect-ratio: 16/9`)
- Border-radius: `--radius-xl` (24px)
- Box shadow: `--shadow-xl`
- Play button: 80px circle, white background, maroon play icon, centered over thumbnail
- Play button hover: Scale 1.1, saffron background

---

#### Section D — Product Specifications Table

**Layout:** Clean two-column table  
**Style:** Zebra striping with cream/white rows, teal left accent border, no outer border

```
| Attribute        | Value              |
|------------------|--------------------|
| Paper Quality    | 300 GSM, Laminated |
| Type             | Write-Wipe-Repeat  |
| What's Included  | Book + Pen + Duster|
| Target Age       | 2+ years           |
| Dimensions       | A5 (148 × 210 mm)  |
| Origin           | Made in India 🇮🇳  |
```

---

#### Section E — FAQ Accordion

**For each product, include 5–7 FAQs from the Amazon listing FAQ section**

**Style:**
- Each FAQ: Collapsed by default, click to expand
- Smooth CSS `max-height` transition (0ms → auto equivalent)
- Arrow icon rotates 180° when open
- Question: Poppins 600, charcoal
- Answer: Inter 400, charcoal, line-height 1.75
- Border-bottom separator between items
- Active (open) question: Saffron left border `border-left: 3px solid var(--color-saffron)`

**Important:** Add JSON-LD `FAQPage` schema markup for each FAQ section:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can my 2-year-old really use this independently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The toddler-grip pen..."
      }
    }
  ]
}
```

---

#### Section F — Cross-Sell / Related Products

**Section Title:** "Complete Your Learning Bundle"  
**Layout:** Horizontal scrollable product strip (3 visible on desktop, 1.5 on mobile — hint of next card)  
**Show:** 3 other SanskaTots products  
**Card:** Simplified version of main product card (image + name + price + CTA only)

---

#### Section G — Buy Again CTA Banner (Bottom of Page)

**Full-width saffron banner, before footer:**
```
Ready to Start Your Child's Learning Journey?

[Product Name] is available exclusively on Amazon India.

  [ Buy on Amazon → ]    [ View All Books ]
```

Background: Saffron `#F4A340`  
Text: Maroon `#8C2A2A`  
Buttons: Maroon background, cream text (inverted from normal CTA)  

---

### 4.7 About Page

**Structure:**
1. **Hero:** Full-width image (Indian child learning) + headline `"Built in India. For India's Children."`
2. **Brand Story Section:**  
   - 3-paragraph narrative in 2-column layout (large decorative quote pull-out on right)
   - Content: Origin of SanskaTots, Montessori philosophy, Made in India mission
3. **Mission Strip:** Dark maroon full-width — `"Every book we make is a small rebellion against screen time."`
4. **Values Grid:** 4 cards — Quality, Culture, Education, Sustainability
5. **Team / Founder Section (optional):** Simple photo + name + 1-line bio
6. **CTA:** Link to product page

---

### 4.8 Footer

**Layout:** 4-column on desktop, 2-column on tablet, stacked on mobile  
**Background:** Maroon `#8C2A2A`  
**Text Color:** Cream `#FFF8EC`

**Columns:**
1. **Brand Column:** Logo (cream SVG version) + 1-line tagline + Made in India badge
2. **Our Books:** Links to all 7 product pages
3. **Quick Links:** Home, About, Contact, Amazon Store
4. **Connect:** Instagram link, YouTube link, WhatsApp business link

**Bottom bar:**
```
© 2026 Deethya Enterprises. All Rights Reserved. SanskaTots™ is a trademark of Deethya Enterprises.
```
Font: 12px, cream at 60% opacity

---

## 5. AMAZON REDIRECT — TECHNICAL REQUIREMENTS

### All "Buy on Amazon" Buttons Must:
1. Open Amazon product listing in a **new tab** — `target="_blank"`
2. Include `rel="noopener noreferrer"` — SECURITY REQUIREMENT (prevents tab-napping)
3. Use your **Amazon Affiliate tag** in the URL: `?tag=YOURAFFILIATETAGHERE`
4. Include **UTM parameters** for analytics:
   ```
   https://www.amazon.in/dp/ASIN_HERE?tag=sanskatots-21&utm_source=website&utm_medium=cta&utm_campaign=buy-now
   ```
5. Use the **correct ASIN** for each product — never a search URL, always the direct product URL

### Amazon URL Format (Template):
```
https://www.amazon.in/dp/[ASIN]?tag=[AFFILIATE_TAG]&utm_source=sanskatots-website&utm_medium=[PLACEMENT]&utm_campaign=[PAGE_NAME]
```

### UTM Placement Values (track where conversions come from):
- Nav button: `utm_medium=header-nav`
- Hero CTA: `utm_medium=hero-cta`
- Product card: `utm_medium=product-grid`
- Product detail button: `utm_medium=product-detail`
- Bottom banner: `utm_medium=bottom-banner`

### Amazon Affiliate Program (MANDATORY — Set Up Before Launch):
- Register at: **Amazon Associates India** (affiliate.amazon.in)
- This converts every Amazon click into **additional commission revenue**
- You send traffic → customer buys → you earn 3–8% commission
- No integration complexity — just add `?tag=YOURTAG-21` to every Amazon URL

---

## 6. SEO — COMPLETE TECHNICAL REQUIREMENTS

### Meta Tags (Every Page)
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary SEO -->
  <title>[Page Title] | SanskaTots™ — Montessori Learning Books for Kids</title>
  <meta name="description" content="[150–160 chars, benefit-led, includes primary keyword]" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.sanskatots.com/[page-path]/" />
  
  <!-- Open Graph (Facebook, WhatsApp link previews) -->
  <meta property="og:title" content="[Page Title]" />
  <meta property="og:description" content="[Same as meta description]" />
  <meta property="og:image" content="https://www.sanskatots.com/images/og/[page-og-image].jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://www.sanskatots.com/[page-path]/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="SanskaTots™" />
  <meta property="og:locale" content="en_IN" />
  
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="[Page Title]" />
  <meta name="twitter:description" content="[Description]" />
  <meta name="twitter:image" content="[OG image URL]" />
  
  <!-- Structured Data — Product Pages -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "[Product Name]",
    "image": ["[image1 URL]", "[image2 URL]"],
    "description": "[Product description]",
    "brand": {
      "@type": "Brand",
      "name": "SanskaTots"
    },
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.amazon.in/dp/[ASIN]"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "142"
    }
  }
  </script>
</head>
```

### OG Images
- Dimensions: **1200 × 630px** (standard for all social/messaging platforms)
- One per page — designed images, NOT auto-generated
- Include: Product visual + SanskaTots logo + 1-line headline
- WhatsApp will use OG image for link preview — make it gorgeous

### SEO Content Requirements Per Product Page
- **H1:** One per page, contains primary keyword, matches product name
- **H2:** Section headings with semantic structure
- **Alt text:** Every image must have descriptive alt text with keywords
  - Bad: `alt="image1.jpg"`
  - Good: `alt="SanskaTots Montessori Busy Book - child doing Velcro alphabet activity"`
- **Internal linking:** Each product page links to 2–3 related products
- **Sitemap:** `/sitemap.xml` — auto-generated by build tool or manually created
- **robots.txt:** Allow all crawlers, reference sitemap

### Target Keywords Per Page

**Homepage:**
- `montessori learning books india`
- `screen free activity book toddler`
- `reusable tracing book kids`
- `best busy book toddler india`

**Montessori Busy Book:**
- `montessori busy book india`
- `velcro activity book toddler`
- `reusable activity book 1 year old`
- `busy book with pen and duster`

**Pencil Control Tracing Book:**
- `write and wipe tracing book`
- `pencil control book for kids`
- `reusable tracing book age 2`
- `alphabet number tracing book india`

---

## 7. PERFORMANCE — EVERY RULE IS MANDATORY

### Image Optimization
- **Format:** WebP for all product photos (30–50% smaller than JPEG, better quality)
- **Fallback:** JPEG for browsers that don't support WebP (use `<picture>` tag with `<source>`)
- **Dimensions:** Never serve an image larger than its display size
  - Hero image: Max 1200px wide
  - Product cards: Max 600px wide
  - Thumbnails: Max 200px wide
- **Loading:** `loading="lazy"` on ALL images BELOW the fold
  - Hero image: `loading="eager"` + `fetchpriority="high"`
- **Responsive images:** Use `srcset` and `sizes` attributes:
  ```html
  <img 
    src="product-600w.webp"
    srcset="product-300w.webp 300w, product-600w.webp 600w, product-1200w.webp 1200w"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
    alt="SanskaTots Montessori Busy Book"
    loading="lazy"
    width="600"
    height="600"
  />
  ```
  **Always include explicit `width` and `height` attributes to prevent CLS.**

### CSS Performance
- Critical CSS (above-the-fold styles) inlined in `<head>`
- Non-critical CSS loaded asynchronously:
  ```html
  <link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  ```
- Tailwind CSS: Use PurgeCSS / Tailwind's built-in content scanning — production build should have < 20KB of CSS
- No unused CSS in production

### JavaScript Performance
- No JavaScript framework in the critical rendering path
- All JS: `defer` or `async` attribute (never blocking)
- No third-party scripts unless absolutely necessary (no Facebook Pixel, no intercom chat widgets)
- Google Analytics 4: Use `async` loading, keep to one analytics tool only
- Total JS payload: < 50KB gzipped for initial load

### Font Performance
```html
<!-- Preconnect to Google Fonts origin -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load only the exact weights needed -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
```
- Use `font-display: swap` to prevent invisible text during load
- Consider self-hosting fonts (download from Google Fonts, serve from your own domain) for fastest TTFB

### Caching (GitHub Pages)
- GitHub Pages sets cache headers automatically but you can override via `_headers` file (if using Netlify or Cloudflare Pages — switch from GitHub Pages if you need this level of control)
- Recommended: Deploy to **Cloudflare Pages** instead of GitHub Pages — same free tier, but with:
  - Edge CDN (faster globally)
  - Custom cache headers
  - Better performance SLAs
  - Cloudflare Analytics (free, privacy-friendly)

---

## 8. RESPONSIVE DESIGN — BREAKPOINT SYSTEM

```css
/* Mobile-first breakpoints */
/* Default styles: Mobile (320px–639px) */
/* sm:  640px+ (large phones, small tablets) */
/* md:  768px+ (tablets) */
/* lg:  1024px+ (small laptops) */
/* xl:  1280px+ (desktops) */
/* 2xl: 1536px+ (large screens) */
```

### Critical Responsive Rules

**Navigation:**
- Mobile (< 768px): Hamburger → Full-screen overlay
- Desktop (≥ 768px): Horizontal sticky nav

**Hero Section:**
- Mobile: Single column, text above, no product image on right
- Desktop: 60/40 split with floating product image

**Product Grid:**
- Mobile: 1 column, full-width cards
- Tablet (640–1023px): 2 columns
- Desktop (1024px+): 3 columns

**Product Detail:**
- Mobile: Stacked — image gallery full-width top, product info below
- Desktop: 50/50 side-by-side

**Typography:**
- Use `clamp()` for fluid type sizes between mobile and desktop
- Minimum touch target for any tappable element: **44×44px** (Apple HIG / WCAG standard)
- Minimum font size: **14px** (13px allowed only for legal/footnote text)

**Images in Carousels (Mobile):**
- Use CSS `scroll-snap-type: x mandatory` for native swipe-scroll carousels
- No JavaScript-heavy carousel libraries (they're slow)
- `scroll-snap-align: start` on each item
- Overflow: `scroll`, scrollbar hidden via `scrollbar-width: none`

---

## 9. ACCESSIBILITY — WCAG 2.1 AA MINIMUM

- **Color contrast:** All text/background combinations must pass 4.5:1 ratio (use Colour Contrast Checker)
  - Maroon `#8C2A2A` on Cream `#FFF8EC` ✓ (passes)
  - Saffron `#F4A340` on White: **FAILS for text** — use maroon text ON saffron background, never saffron text on white
- **Focus states:** All interactive elements must have visible `:focus-visible` ring (saffron `#F4A340` 3px ring)
- **Skip link:** `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>` as first element in body
- **ARIA labels:** All icon-only buttons need `aria-label`
- **Image alt text:** Every `<img>` has meaningful alt, decorative images get `alt=""`
- **Heading hierarchy:** H1 → H2 → H3 — never skip levels
- **Form labels:** Any form elements (even simple contact forms) must have associated `<label>`

---

## 10. ANIMATIONS — GUIDELINES

### Scroll Reveal (Use Sparingly — Only for Key Sections)
```javascript
// Use IntersectionObserver — no library required
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

```css
[data-animate] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-animate].animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Respect user preference */
@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### Apply Animations To:
- Section headings (fade in + slide up)
- Product cards (staggered — 0ms, 100ms, 200ms delay per card)
- Feature pillar cards (same stagger)
- Buy CTA buttons (gentle pulse on first visible)

### Do NOT Animate:
- Navigation elements
- Text content the user is trying to read
- Any animation that repeats or loops without user action

---

## 11. GITHUB PAGES DEPLOYMENT — FULL SETUP

### Repository Structure
```
/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← CI/CD pipeline
├── src/                      ← Source files (if using build tool)
│   ├── index.html
│   ├── styles/
│   ├── scripts/
│   └── images/
├── public/                   ← Static assets (copied as-is)
│   └── images/
├── docs/                     ← Built output (GitHub Pages serves from here)
│   └── CNAME                 ← Custom domain config
├── CNAME                     ← www.sanskatots.com
├── 404.html                  ← Custom 404 page
└── README.md
```

### GitHub Actions CI/CD (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'  # or './docs' depending on build output
      
      - uses: actions/deploy-pages@v4
```

### CNAME Configuration
- File: `CNAME` in root of repository (no extension)
- Content: `www.sanskatots.com`
- DNS: Point your domain's CNAME record to `[your-username].github.io`
- Enable HTTPS in repository Settings → Pages → Enforce HTTPS

### 404 Page
- `404.html` in repo root
- Fully branded — SanskaTots header + footer
- Message: "Oops! This page seems to have wandered off..." (on-brand, gentle)
- CTA: "Explore Our Books" → `/products`
- GitHub Pages automatically serves `404.html` for all unmatched routes

### SPA Routing Fix (if using client-side routing)
GitHub Pages doesn't support SPA routing. Fix with:
- Copy `index.html` as `404.html` + add script to redirect properly
- OR use hash-based routing (`/#/products/...`)
- OR use Astro/Next.js with static export (generates individual HTML files per route — no routing issue)

---

## 12. ANALYTICS — TRACKING SETUP

### Google Analytics 4 (Free)
- Property: "SanskaTots Website"
- Enable Enhanced Measurement (scroll depth, outbound clicks, video plays)
- Configure outbound click tracking to capture all "Buy on Amazon" clicks
- **Custom Event — Buy Button Click:**
  ```javascript
  document.querySelectorAll('[data-amazon-cta]').forEach(btn => {
    btn.addEventListener('click', () => {
      gtag('event', 'amazon_click', {
        'product_name': btn.dataset.productName,
        'placement': btn.dataset.placement,
        'amazon_url': btn.href
      });
    });
  });
  ```

### Data to Track
- Outbound Amazon link clicks (per product, per placement)
- Video play events (if YouTube embeds used)
- Scroll depth on product pages
- Most-viewed product pages

---

## 13. CONTENT — WHAT TO PREPARE BEFORE DEVELOPMENT STARTS

Do not start building until you have ALL of this ready:

### Images Required (Per Product — 7 Products × 9 images = 63 images minimum)
| Image Slot | Spec | Purpose |
|---|---|---|
| Main product photo | 1200×1200px, white BG, WebP | Hero + cards |
| Lifestyle photo 1 | 1200×800px, natural home setting | Feature sections |
| Lifestyle photo 2 | 1200×800px, close-up detail | Feature sections |
| Infographic: What's inside | 1200×1200px | Feature sections |
| Write-Wipe demo (3-panel) | 1200×600px | Feature sections |
| Inside pages spread | 1200×1200px | Content showcase |
| Bundle flat-lay | 1200×1200px | Accessories section |
| OG image (each page) | 1200×630px | Social sharing |
| Product card thumbnail | 600×600px, WebP | Grid cards |

### Copy Required (Per Product)
- Short description (3–4 sentences, benefit-led)
- 5 feature section headlines + body paragraphs (can adapt from Amazon listing)
- FAQ questions + answers (from Amazon listing)
- Product specs table data
- SEO meta title + description

### Videos (Optional at Launch — Priority P1)
- One YouTube demo video per product
- Videos should already be published on YouTube channel before embedding

### Brand Assets
- SanskaTots logo: SVG (multiple variants — color, cream/white, monogram)
- Brand pattern/texture: SVG or subtle PNG for background use
- All product cover images as print-quality sources (export from Canva/design files)

---

## 14. PHASE DELIVERY PLAN

### Phase 1 — MVP (2–3 weeks)
- [ ] Homepage with hero, 4 pillars, product grid, brand story strip, footer
- [ ] Product detail pages for 2 flagship products (Montessori Busy Book + Pencil Control)
- [ ] All "Buy on Amazon" CTAs linked with UTM parameters
- [ ] Mobile responsive
- [ ] GitHub Pages deployed at custom domain
- [ ] Google Analytics 4 connected
- [ ] Lighthouse 90+ performance

### Phase 2 — Complete (1–2 additional weeks)
- [ ] All 7 product pages
- [ ] About page
- [ ] YouTube video embeds (lazy loaded)
- [ ] Full image optimization pipeline
- [ ] Full A+ content-equivalent feature sections per product
- [ ] SEO meta + JSON-LD for all pages
- [ ] Sitemap.xml + robots.txt
- [ ] OG images for social sharing

### Phase 3 — Polish (Ongoing)
- [ ] GSAP scroll animations
- [ ] WhatsApp share buttons
- [ ] Review/testimonial section (once Amazon reviews come in)
- [ ] Photo gallery improvements
- [ ] Performance audit + CLS fixes

---

## 15. WHAT NOT TO BUILD (SCOPE CONSTRAINTS)

**Do NOT build any of these (they add complexity with zero value at this stage):**

- ❌ Shopping cart or checkout (Amazon handles all of this)
- ❌ User accounts or login
- ❌ Product reviews/ratings on your website (use Amazon reviews)
- ❌ Email newsletter forms (requires backend, SMTP, GDPR compliance)
- ❌ Contact form with backend (use mailto: link for now)
- ❌ Blog/CMS (out of scope — focus on product pages)
- ❌ Multilingual support (English first, always)
- ❌ Live chat widget (adds 150KB JS payload, tanks performance)
- ❌ Push notifications
- ❌ Progressive Web App (PWA) features
- ❌ A/B testing framework

Everything above can be added in Phase 4+. The goal right now is a fast, beautiful, brand-establishing static site that converts visitors to Amazon buyers.

---

## FINAL QUALITY BAR — BEFORE THIS SITE IS ALLOWED TO GO LIVE

Run every single check below. If ANY fails, fix it first:

| Check | Tool | Pass Bar |
|---|---|---|
| Lighthouse Performance | Chrome DevTools | 90+ on mobile |
| Lighthouse SEO | Chrome DevTools | 95+ |
| Lighthouse Accessibility | Chrome DevTools | 90+ |
| No console errors | DevTools Console | Zero errors |
| Mobile rendering | Chrome DevTools Device Mode | Pixel-perfect on 375px, 390px, 428px |
| Tablet rendering | Chrome DevTools Device Mode | Clean on 768px, 1024px |
| Color contrast | webaim.org/resources/contrastchecker | All WCAG AA |
| Amazon links working | Manual | All open correct product page |
| UTM parameters present | Check URL bar | All 5 params present |
| Images load | Network tab | No 404 images |
| No FOUC | Disable cache, reload | No flash of unstyled content |
| Page speed | PageSpeed Insights (live URL) | 85+ on mobile after deploy |
| Social OG preview | LinkedIn Post Inspector | Correct image + title appears |
| WhatsApp link preview | Send to yourself | Correct OG image shows |

---

*This is not a suggestion list. Every item above is a launch requirement. A premium brand website that loads slowly, looks broken on mobile, or sends visitors to broken Amazon links is worse than no website at all.*

*Build it right. Build it once. Let it sell.*

---
**Document prepared by:** SanskaTots Brand Team  
**Last updated:** May 25, 2026  
**Next review:** Post Phase 1 launch — June 15, 2026
