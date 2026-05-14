# Silent Watch Investigation — Website

## Project Structure

```
silent-watch/
├── index.html          ← Main landing page (single-file entry point)
├── css/
│   └── style.css       ← All styles (variables, layout, components, responsive)
├── js/
│   └── main.js         ← All interactions (navbar, slider, counters, FAQ, form, popup)
├── images/
│   └── logo.png        ← Official client logo (also embedded as base64 in HTML)
├── pages/              ← Reserved for future inner pages
│   ├── about.html      (to be created)
│   ├── services.html   (to be created)
│   ├── contact.html    (to be created)
│   └── faq.html        (to be created)
└── README.md           ← This file
```

## Sections on index.html

1. **Navbar** — Fixed, scroll-aware, logo + links + mobile drawer
2. **Hero** — Full-viewport with real logo, CTA buttons, animated rings
3. **Ticker** — Scrolling services marquee
4. **Why Choose Us** — 6 cards with real relevant images per card
5. **Stats Counters** — Animated number counters on scroll
6. **Services (What We Offer)** — 6 service cards with relevant images
7. **Process** — 4-step process with numbered rings
8. **Industries** — 8 client type cards
9. **Testimonials** — Auto-sliding testimonial cards with controls
10. **FAQ** — Accordion + sidebar contact card
11. **CTA Band** — Full-width banner with contact buttons
12. **Contact** — Info column + inquiry form (sends via WhatsApp)
13. **Footer** — Logo, links, social, disclaimer
14. **Floating WhatsApp** — Fixed button with pulse animation
15. **Popup** — Appears after 20 seconds idle

## Features

- Real logo (your exact logo embedded)
- Relevant Unsplash images on "Why" and "Services" cards
- Scroll-triggered fade-up animations
- Animated counters
- Auto-rotating testimonial slider
- FAQ accordion
- Form submits directly to WhatsApp with pre-filled message
- Mobile responsive (hamburger + drawer)
- Popup after 20 seconds
- Back-to-top button
- Active nav highlighting on scroll
- Gold/Black/White luxury theme throughout

## Colours

| Token     | Value     |
|-----------|-----------|
| Gold      | #D4AF37   |
| Black     | #050505   |
| Dark bg   | #0D0D0D   |
| White     | #FFFFFF   |

## Fonts (Google Fonts)

- **Headings:** Playfair Display (serif, elegant)
- **Body:** Poppins (sans-serif, clean)

## Deployment

1. Upload the entire `silent-watch/` folder to your hosting (Hostinger, cPanel, etc.)
2. Point domain (e.g. silentwatchinvestigation.com) to the folder
3. Replace Unsplash images with your own professional photos
4. Update phone number / email if needed in index.html and js/main.js

## Contact Details in Site

- Phone / WhatsApp: **0333 4648051**
- Email: **info@silentwatchinvestigation.com**
- Location: **Lahore, Pakistan**

---

*All services displayed are conducted in accordance with applicable Pakistani laws and ethical standards.*
