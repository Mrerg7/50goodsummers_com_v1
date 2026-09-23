# 50 Good Summers

> *"As long as you live and how you live, you are only granted 50 good summers, no more, no less."*

A cinematic feature film screenplay in active development. This is the official landing site for **50 Good Summers** — a powerful meditation on time, legacy, and the radical decision to live fully.

**Live Site:** [50goodsummers.com](https://50goodsummers.com)

## Features

- ⚡️ **Astro 4** static site — lightning fast, zero JS bloat
- ☁️ **Cloudflare Pages** global edge deployment
- 🖼️ **Cloudflare Images CDN** (replace Unsplash placeholders with your CF delivery URLs)
- 🔍 **Full Structured Data** — `@graph` JSON-LD (WebSite, Organization, Person, Movie, FAQPage, AboutPage, BreadcrumbList)
- 📱 **Complete Open Graph & Twitter Cards** with image alt text
- 🗺️ **Static sitemap.xml + robots.txt** + IndexNow key for instant indexing
- 📄 **Supporting content pages** — About, FAQ, Press kit, Privacy, Terms (internal linking for topical authority)
- 🤖 **llms.txt** for LLM/answer-engine discovery
- ✉️ **Single Acquisition CTA** routed directly to `sales@desertrich.com`

## SEO

- Canonical URLs normalized to trailing slashes (matches `trailingSlash: 'always'`)
- HSTS, immutable asset caching, and sitemap XML content-type via `public/_headers`
- Path-level 301s for non-slash URLs via `public/_redirects` (www→apex and HTTP→HTTPS live at the Cloudflare zone level)
- IndexNow key: `public/1b2151a15ad17fdd6c236a587fa123c3.txt` — after deploy, submit `https://50goodsummers.com/sitemap.xml` to Google Search Console + Bing Webmaster Tools and ping IndexNow

## Tech Stack

- Astro 4 + TypeScript
- Tailwind CSS + custom cinematic design system
- View Transitions ready
- Google Fonts: Inter + Playfair Display

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The `dist/` folder is ready for Cloudflare Pages (or any static host).

## Deployment to Cloudflare Pages

1. Push this repo to GitHub
2. Connect the repository in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Add environment variable if needed (none required)

**Recommended:** After deployment, upload all hero/asset images to **Cloudflare Images** and update the image URLs in `src/pages/index.astro` (search for `TODO: Replace`).

## Image Strategy (Cloudflare Images)

All images in this project are currently using Unsplash for demo purposes. For production:

1. Upload to your Cloudflare Images account
2. Replace URLs with:
   ```
   https://imagedelivery.net/<YOUR_ACCOUNT_HASH>/<IMAGE_ID>/w=2000,quality=85
   ```
3. Use variants for responsive (`/w=800`, `/w=1200`, etc.)

## Acquisition

Interested in producing **50 Good Summers**?

Email: **sales@desertrich.com**

All worldwide rights available (theatrical, streaming, remake, television, etc.).

## Credits

- **Writer & Creator**: Eric R. Gutierrez
- **Production Company**: Desert Rich Productions
- **Site Design & Development**: Built with purpose using Astro + Cloudflare

---

*This site was created to honor the finite beauty of life. Every good summer counts.*

**© 2026 Desert Rich Productions. All rights reserved.**