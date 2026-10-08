# KeRaeva Website

Marketing website for **KeRaeva**, the AI-powered healthcare workforce platform that connects healthcare organizations and healthcare professionals across Canada.

KeRaeva is operated by **MedFaster Health Tech Inc.** (Canada) with **MedFaster HealthTech Private Limited** (India).

- Recruiter Platform: [recruiter.keraeva.com](https://recruiter.keraeva.com)
- Candidate App: iOS and Android (KeRaeva)

## Tech Stack

| Area | Tooling |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui primitives, Inter Variable (local font) |
| Icons | lucide-react, react-icons, Heroicons |
| State / API | Zustand, Axios |
| Auth (OTP modal) | Google OAuth (`@react-oauth/google`) |
| Analytics | Vercel Analytics |
| Notifications | react-toastify |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_API_URL=<KeRaeva API base URL>
NEXT_PUBLIC_GOOGLE_CLIENT_ID=<Google OAuth client ID>
LEADS_WEBHOOK_URL=<webhook that receives demo requests and newsletter sign-ups>
```

`LEADS_WEBHOOK_URL` is server-only. `POST /api/leads` validates demo and newsletter submissions and forwards them as JSON to this URL (for example a CRM, Zapier/Make, Slack or Google Apps Script hook). Without it, the forms show a "not connected yet" message pointing to support@keraeva.com instead of a fake success.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build (Turbopack) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  (home)/                 Home page + sections
  medical-organizations/  Healthcare Organizations landing page
  medical-professionals/  Healthcare Professionals landing page
  about/ our-team/ careers/ blog/
  contact-us/ help_center/ support/ subscriptions/
  privacy-policy/ terms-conditions/
  mobile-*/               Header-less pages rendered inside the mobile app WebView
components/
  global/                 Header, Footer, Screen wrapper, OTP login modal
  global/modals/          Site-wide modals (Get Started / Get the App, Request Demo)
  ui/ custom/             Section, Heading, Paragraph, CustomButton, FeatureCard
  card/ section/          Shared cards and CTA sections
lib/ utils/constant/      Page content constants
stores/ api/              Zustand stores (incl. modalStore) and Axios client
app/api/leads/            Demo request + newsletter endpoint
public/images, public/img Brand, product and illustration assets
docs/                     Project documentation
```

## Design Conventions

Keep the existing KeRaeva visual identity. Build new sections from the existing components instead of adding a new design system.

- Page canvas: `Screen` (`bg-neutral-100`) with stacked white `Section` panels
- Brand orange `#F3651B` / `#F4781B`, headings `#252B37`, body text `#717680`
- Orange panels use `/images/patterns/orange-pattern-*.png` with an overlay blend
- Buttons: `CustomButton` (pill with an icon chip)
- Cards: `FeatureCard`, white `rounded-2xl` cards
- Modals: open with `useModalStore().openModal("get-started" | "get-app" | "request-demo")`

## Images

Use WebP for photos and screenshots, and keep SVG only for true vector art (logos, icons). To convert newly added PNG/JPG images (or SVGs that wrap a bitmap) into right-sized WebP files:

```bash
node scripts/optimize-images.mjs
```

Then reference the generated `.webp` files in the code. Avoid `quality={100}` and `unoptimized` on `next/image` so Next.js can serve optimized versions.

## Documentation

- [Website Refresh Audit & Gap Report](docs/KERAEVA_WEBSITE_REFRESH_AUDIT.md): missing pages, flows, modals, broken links, feature-status check and the proposed sitemap.

## Deployment

Hosted on [Vercel](https://vercel.com).

## Credits

Designed & Developed by **[Digitech Miner](https://digitechminer.in)**.

© KeRaeva. All rights reserved.
