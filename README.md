# संजय एजंसीज - Next.js Website

Exact Next.js 14 rebuild of [sanjayagencies.in](https://sanjayagencies.in/)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open **http://localhost:3000** in your browser.

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
sanjay-agencies/
├── app/
│   ├── layout.js        # HTML shell, Google Fonts, Bootstrap, AOS
│   ├── page.js          # Root page — assembles all sections
│   └── globals.css      # All styles (exact match to original)
├── components/
│   ├── Header.js        # Fixed navbar with scroll effect + mobile menu
│   ├── Hero.js          # Full-screen hero banner
│   ├── About.js         # Bilingual about + founder photos
│   ├── Services.js      # 3 service cards
│   ├── Plots.js         # Plots available (dark section)
│   ├── Gallery.js       # Photo grid with lightbox
│   ├── Contact.js       # Info boxes + Google Map + contact form
│   ├── Footer.js        # Footer with links
│   ├── BackToTop.js     # Scroll-to-top button
│   └── Scripts.js       # AOS & GLightbox initializer
├── next.config.js
└── package.json
```

## Sections (Same as Original)

1. **Floating Buttons** — Google Maps, Call, WhatsApp (fixed right side)
2. **Header** — Fixed navbar, transparent → dark on scroll, mobile hamburger
3. **Hero** — Full-screen background with Marathi welcome text + CTA
4. **About** — Bilingual (Marathi + English), founder photos (Late D.B. Ghatoriya, Mr. Ajay Ghatoriya)
5. **Services** — Plots for Investment / Building Houses / Commercial use
6. **Plots Available** — Dark blue section with all plot locations (2 columns)
7. **Gallery** — Photo grid with GLightbox zoom
8. **Contact** — Address/phone/email info boxes + Google Maps embed + contact form
9. **Footer** — Links, services, contact info, credits

## Notes

- Images are loaded from `sanjayagencies.in` (the live site). Works out of the box.
- To host images locally, download them and place in `/public/assets/img/`, then update `src` paths.
- Contact form is front-end only. Connect to an API route or service like [Resend](https://resend.com) or [EmailJS](https://www.emailjs.com) for real email sending.
