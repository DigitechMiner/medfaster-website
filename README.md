# KeRaeva Website

Marketing website for **KeRaeva**, the AI-powered healthcare workforce platform that connects healthcare organizations and healthcare professionals across Canada.

KeRaeva is operated by **MedFaster Health Tech Inc.** (Canada) with **MedFaster HealthTech Private Limited** (India).

- Recruiter Platform: [recruiter.keraeva.com](https://recruiter.keraeva.com)
- Candidate App: iOS and Android (KeRaeva)

## Tech Stack

| Area | Tooling |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript |
| Admin / CMS | [Payload CMS 3](https://payloadcms.com) with Postgres (served by the same Next.js app) |
| Styling | Tailwind CSS v4, shadcn/ui primitives, Inter Variable (local font) |
| Icons | lucide-react, react-icons, Heroicons |
| State | Zustand |
| Analytics | Vercel Analytics |
| Notifications | react-toastify |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the website and [http://localhost:3000/website](http://localhost:3000/website) for the admin panel.

### Environment variables

Copy `.env.example` to `.env` and fill in what you need. Every variable is optional: without the CMS settings the website runs on its built-in content and the admin panel is unavailable.

| Variable | Purpose |
|---|---|
| `DATABASE_URI` | Postgres connection string for the admin panel (e.g. a Neon database) |
| `PAYLOAD_SECRET` | Long random string that signs admin logins (`openssl rand -hex 32`) |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob token for image uploads in production (local uploads go to `./media`) |
| `NEXT_PUBLIC_SITE_URL` | Public site URL for SEO tags and admin login security |
| `ADMIN_HOST` | Optional subdomain for the admin panel, e.g. `manage.keraeva.com` (see below) |
| `LEADS_WEBHOOK_URL` | Optional webhook that also receives every website form submission |

`POST /api/leads` validates the Contact, Support, Request a Demo and newsletter forms, saves each submission to the admin **Inbox** and forwards it to `LEADS_WEBHOOK_URL` when set. If neither is configured the forms say they aren't connected yet, instead of showing a fake success.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run payload run scripts/cms/seed.ts` | Load the website's current content into the CMS |
| `ADMIN_EMAIL=… ADMIN_PASSWORD=… npm run payload run scripts/cms/create-admin.ts` | Create (or promote) an admin account |
| `npm run payload migrate:create <name>` | Create a database migration after changing collections or globals |
| `npm run generate:importmap` | Refresh the admin component import map after adding admin components |

## Admin Panel

- Lives at **`/website`** (there is no `/admin`). It is kept out of search engines by `robots.txt`, a `noindex` meta tag and an `X-Robots-Tag` header.
- To serve it from a subdomain instead, add the domain to the Vercel project and DNS, then set `ADMIN_HOST` (e.g. `manage.keraeva.com`). That host then opens the admin at `/`, and `keraeva.com/website` redirects there (`proxy.ts`).
- The design follows the "KeRaeva Admin – UI Design" Figma file: custom sidebar, dashboard, inbox, media grid and page editors in `components/admin/`, theme in `app/(payload)/custom.scss`. The sign-in screens are always light; the sun/moon switch appears after sign-in.
- Content model: `cms/` (collections, globals, access rules). Page defaults live in `content/` and are the fallback whenever the CMS has no value.
- Production applies migrations from `cms/migrations` automatically. Use a fresh database for production: a database previously used with `npm run dev` makes Payload stop and ask before migrating.

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

Hosted on [Vercel](https://vercel.com). To enable the admin panel in production: create a Postgres database, add `DATABASE_URI`, `PAYLOAD_SECRET` and `BLOB_READ_WRITE_TOKEN` to the Vercel project, redeploy, then create the first admin with the script above (or at `/website/create-first-user`) and run the seed script once.

## Credits

Designed & Developed by **[Digitech Miner](https://digitechminer.in)**.

© KeRaeva. All rights reserved.
