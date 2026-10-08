# KeRaeva Website: Post-Refresh Correction & Quality Pass

Date: 8 October 2026 · Branch: `main` · Scope: fix, clean, verify, polish. The visual identity is unchanged: same orange `#F3651B`, type scale, components, spacing, radii and shadows.

---

## Internal comparison: original vs current vs approved direction

| Page | Original section | Current section | Change made | Matches approved direction? |
| --- | --- | --- | --- | --- |
| Home | Urgent Staffing (5 generic steps) | 4-step teaser + "Explore Urgent Staffing" | Shorter, links to the Organizations detail | YES |
| Home | "From Shift to Payment" (`$12,500 · Registered Nurse`, third-party logo, same nurse twice) | "From Opportunity to Completed Work", `$480 · RN Night Shift · Paid`, "Sample" label, 3 different people | Shared component, home copy, realistic sample | YES |
| Home | 4 app screenshots (same as Professionals) | "One Connected Ecosystem, Two Products": app vs recruiter platform + download card | Ecosystem overview instead of duplicate screenshots | YES |
| Home | "Interview Once with AI" | "Trust & Verification": verified profiles + structured interviews | Reframed as trust | YES |
| Home | "Your Next Career Move Starts Here." (same as Professionals) | "Find Your Next Healthcare Role" | De-duplicated | YES |
| Organizations | Urgent Staffing (shared copy) | Recruiter view: Create requirement → Eligible professionals → Notified → Responses → Fill the shift | Audience-specific; no speed guarantee | YES |
| Organizations | "From Shift to Payment" (own copy, `$12,500`) | Assigned shifts, check-ins, workforce activity, payment status | Shared component, org copy; no timesheet claims | YES |
| Professionals | Hero search bar did nothing | Same visual; submit opens Get the App; caption says search happens in the app | Option A | YES |
| Professionals | Urgent Shifts (shared steps) | Set availability → Matching alert → Review → Accept/Decline → Work the shift | Audience-specific | YES |
| Professionals | Home's payment section reused | "From Accepted Shift to Your Wallet": upcoming/active, check-in/out, wallet, withdrawals | Pro copy, Get the App CTA | YES |
| Professionals | Avatar stack of stock faces | Removed | Honesty | YES |
| About | Timeline 2021 to 2028 (2 rows) | Restored to the original 2021 to 2028 journey at the owner's request | No change from original | NEEDS REVIEW (see J.6) |
| About | Testimonials & FAQ, repeated pro journey | Story → Mission & Vision → Why KeRaeva → Team → CTA | Restructured | YES |
| Our Team | Stock faces under 4 real names; placeholder socials; empty "Management" tab | Initials on brand panel; socials only for real profiles; tab removed | Honesty | YES |
| Testimonials (3 pages) | 2 portraits reused under 13 names | Initials avatars; quotes untouched | Honesty | PARTIAL (authenticity unconfirmed, J.3) |
| Contact | Fake success | Real submission, validation, honest errors | P0 | YES |
| Support | Fake success, attachment with no backend | Real submission, attachment removed | P0 | YES |
| Help Center | Contact form + subset of the Support FAQ | Merged into Support (308 redirect) | Consolidated | YES |
| Careers | "Apply now" → `#` | Apply link only renders with a real URL; honest empty state | Fixed | YES |
| Blog | Template "Bone Cancer / Olivia Rhye" featured post | Removed; honest empty state | Fixed | YES |
| Pricing | Contact-sales model (earlier pass) | Unchanged | — | YES |

---

## A. Files changed

**Commit `d3a1339` (P0, pushed):** `app/api/leads/route.ts`, `utils/leads.ts`, `app/contact-us/components/form.tsx`, `app/support/components/form.tsx`, `app/support/page.tsx`, `app/careers/page.tsx`, `app/our-team/page.tsx`, `app/about/page.tsx`, `app/about/sections/{index,journey-section,team-section}.tsx`, `app/about/sections/testimonials-and-faq.tsx` (deleted), `app/mobile-about-us/page.tsx`, `components/card/team-member-card.tsx`, `components/card/team-profile-card.tsx` (deleted), `components/ui/initials-avatar.tsx` (new), testimonial sections on Home/Professionals/Organizations, `app/medical-professionals/sections/hero.tsx`, `lib/constants.ts`, `utils/constant/{index,landingPage}.ts`, 4 stock team photos and 4 testimonial portraits deleted.

**Earlier this pass:** `8a159dc` (.env.local untracked, ignored), `e243470` (unused login modal incl. Patient tab removed).

**P1 + polish commit:**
- New: `components/section/shift-to-payment.tsx`, `components/global/json-ld.tsx`, `lib/seo/site.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/{blog,contact-us,our-team,support}/layout.tsx`, `utils/constant/faqs.ts`, `docs/PRODUCT_SCREENSHOT_SPEC.md`, this report.
- Deleted: `app/(home)/sections/book-demo.tsx`, `app/medical-organizations/section/book-a-demo.tsx`, `app/help_center/*`, 7 unreferenced images.
- Modified: Home page + sections, Organizations/Professionals/KeRaeva AI pages, Professionals hero, About hero + journey, Contact info, Support page/FAQ/contact info, Careers job card, Blog page, Coming Soon, layout, globals.css, header, footer, legal document, modals, urgent-staffing, career CTA, `input-icon`, `section`, `next.config.ts`, constants.

## B. P0 fixes

1. **Contact form:** posts to `/api/leads`. It validates, shows a loading state and the real result, limits messages to 1000 characters, associates every label (5/5), and uses a honeypot. Delivery was verified end-to-end with a local webhook (200, correct payload). With no webhook configured it shows: "This form isn't connected yet. Please email support@keraeva.com."
2. **Support form:** same treatment. The attachment field is removed (no upload backend). No ticket ID is shown, because none is generated.
3. **`/about_us`:** breadcrumbs on Careers and Our Team now point to `/about`, and there is a 308 redirect for old links.
4. **About timeline:** restored to the original 2021 to 2028 journey at your request (see J.6).
5. **Duplicate testimonial photos:** replaced by initials avatars. Quotes are unchanged.
6. **Team stock photos:** replaced by initials. Generic social links and the empty filter are removed.
7. **Security:** see H.

## C. P1 fixes

- **Professionals search:** there is no public jobs API, so the bar is now a `role="search"` form with labelled inputs. Submitting opens Get the App, and the caption says search happens in the app.
- **Audience-specific copy:** see D.
- **Screenshots:** the replacement spec is in `docs/PRODUCT_SCREENSHOT_SPEC.md`. The payment card is labelled "Sample", and scorecard alts say "Sample".
- **SEO, social share, sitemap, robots:** see F.
- **Accessibility:** see G.
- **Contact/Help/Support:** Contact covers sales, partnerships, media and general questions. Support covers app and recruiter-platform help (accounts, verification, jobs, shifts, check-in, payments, AI interviews). Each page links to the other. `/help_center` and `/help-center` 308-redirect to `/support`; the candidate app has no links to them (checked). The footer now shows "Help & Support" and "FAQs" (`/support#faq`). Unverified promises are removed ("instant support", "We respond within 24 hours", "prioritized"). Support had two `<h1>`s; it now has one.

## D. Content de-duplication

| Topic | Home | Organizations | Professionals |
| --- | --- | --- | --- |
| Urgent staffing | 4-step teaser: Urgent Need → Matching → Available Professional → Shift Filled. CTA: Explore Urgent Staffing (→ `/medical-organizations#urgent-staffing`) | Recruiter steps (create requirement → fill the shift). Response time depends on who's available; no speed promise | Professional steps (set availability → work the shift). CTA: Get the App |
| Shift → payment | "From Opportunity to Completed Work", 4 concise steps, Request a Demo | Assigned shifts, check-ins/outs, workforce activity, completed shifts, payment status. Request a Demo | Upcoming/active, check in, check out, wallet credit, bank withdrawal. Get the App |
| Product | Ecosystem: app vs recruiter platform | Dashboard, hiring | 4 app screenshots |
| Verification | Trust & Verification (documents + structured interview, both audiences) | Hire with confidence | "Earn a Verified Score" |
| Closing CTA | "Find Your Next Healthcare Role" / "Start Hiring Smarter Today" | Start Hiring | "Your Next Career Move Starts Here." |

## E. Screenshot / asset replacements needed

The full list is in `docs/PRODUCT_SCREENSHOT_SPEC.md`. The data set is Calgary, AB: RN/LPN/HCA, fictional organizations, a $480 RN night shift, no logos. Main offenders:

- Recruiter dashboards: "MedFasterrrr" footer, "Narayana Hospital", "Hello, Toronto Hospital", invented metrics.
- `mobile-screen.webp`: "Job Title", "Totronto, ON", third-party logo, $12k–$15k/month.
- `mobile-address.webp` (Professionals hero): "Hospital Name" placeholders on a map of Herräng, Sweden.
- `verified-card.webp`: placeholder phone and email.
- App feature screens: placeholder data.
- Also needed: genuine photos for 4 team members (currently initials), and a sharper `team/kevin.webp`.

## F. SEO changes

- Root: `metadataBase` (`NEXT_PUBLIC_SITE_URL`, default `https://keraeva.com`), default title/description, self-referencing canonical on every page, Open Graph (site name, `en_CA`, URL, image) and `summary_large_image` Twitter card.
- New metadata for Blog, Contact, Our Team, Support (via server layouts) and Careers.
- Generated 1200×630 brand share image (`/opengraph-image`). Pages with their own OG text keep the image via `BASE_OPEN_GRAPH`.
- `sitemap.xml` covers the 13 public pages. `robots.txt` allows everything except `/api/` and points to the sitemap.
- `noindex` on `/mobile-about-us` and `/coming-soon` (the mobile legal pages already had it).
- JSON-LD: Organization (legal name MedFaster Health Tech Inc.), WebSite and SoftwareApplication (Android, Google Play) on Home; FAQPage on Support, built from the same FAQ data the page shows. No ratings, prices or statistics.

## G. Accessibility changes

- Small orange text uses the deeper derivative `#C44408` (~5:1 on white): eyebrows, step numbers, badges, job meta, legal Show/Hide, the header's active menu item and the "Sample" label. Large heading accents and buttons keep `#F3651B`.
- Forms: labels associated, `aria-invalid` / `aria-describedby`, role status/alert results.
- Search inputs labelled, icons `aria-hidden`.
- FAQ accordion: `type="button"`, `aria-expanded`, `aria-controls` and region roles; an invalid `<p>` inside `<button>` is fixed.
- Global reduced-motion rule: transitions and animations become near-instant (scroll reveal was already handled). There are no autoplay carousels.
- Alt text fixes:
  - The About hero stock photo said "KeRaeva Team"; it is now decorative.
  - The tablet photo said "assisting patient"; it now describes a manager reviewing a dashboard.
  - "Professional doctor" → decorative.
  - Payment-card portraits → decorative (previously "Doctor" ×3).
  - Career CTA → decorative.
  - App Store badge → "App Store (coming soon)".
  - Scorecards → "Sample …".
- Phone and email on Contact/Support are now `tel:`/`mailto:` links.

## H. Security findings & actions (no credentials shown)

- **Website:** `.env.local` was tracked. It contained only public `NEXT_PUBLIC_*` values (no secrets), and that dependency was removed together with the login modal. The file is now untracked and `.env*.local` is ignored (`8a159dc`).
- **Candidate App:** `Docs/keraeva-firebase-adminsdk.json` **is a Firebase service-account credential with a private key** (confirmed by field names only; the values were never printed). Actions taken:
  - Removed from source control on `feat-interview` (`f37bcca`, pushed). The file is kept locally and is now ignored.
  - `.gitignore` now covers `*firebase-adminsdk*.json`, `*-service-account*.json` and the exact path.
  - **History:** the key is in the history of `feat-interview` (not `main`). The repo is private.
- **Required, by you, now:**
  1. In Google Cloud Console → IAM → Service Accounts → the Firebase Admin SDK account for project `keraeva-ee0a5` → Keys: **delete the exposed key and create a new one**. Store it in a secret manager or CI secrets, never in the repo.
  2. After rotating, and only with your approval, purge history on a fresh mirror clone:
     ```bash
     git clone --mirror <repo-url> && cd <repo>.git
     git filter-repo --path Docs/keraeva-firebase-adminsdk.json --invert-paths
     git push --force --all && git push --force --tags
     ```
     Then everyone re-clones. Ask GitHub Support to purge cached views and PR refs if needed. Rotation is what actually closes the exposure; the purge is hygiene.

## I. QA results

| Check | Result |
| --- | --- |
| Build (`next build`) | **PASS**, 25/25 routes |
| Lint (`eslint .`) | **0 errors, 0 warnings** |
| Internal links (crawl from `/`, 13 pages + unlinked mobile pages) | **0 broken**; 31 images checked, 0 missing; redirects 308 OK |
| Dead CTAs (`href="#"` / empty) | **0** |
| Fake success states | **0**. All 5 forms (Contact, Support, newsletter, Coming Soon, Request Demo) use `/api/leads` and show the real result |
| Forms | Empty-submit validation ✔, labels 5/5 ✔, 1000-char limit ✔, honest 503 without a webhook ✔, 200 with a webhook ✔ |
| Responsive | No horizontal overflow at 375px on 9 key pages; new and changed sections reviewed at 1280px and 375px |
| Accessibility, remaining major | White text on `#F3651B` buttons and panels is 3.14:1, which fails AA for normal-size text (see J.1) |

## J. Remaining blockers

1. **Button and panel contrast:** white on `#F3651B` is 3.14:1. Fixing it means darkening the button orange (e.g. `#C44408` backgrounds) or using bold/large labels only. This changes the visual identity, so it is your call.
2. **Lead delivery:** set `LEADS_WEBHOOK_URL` in Vercel (e.g. a Zapier/Make/Slack/email webhook). Until then every form honestly says it isn't connected.
3. **Testimonials:** authenticity is unconfirmed. The heading "Real Results, Real Partnerships" overstates this. Confirm the testimonials or remove the sections.
4. **Real screenshots and team photos:** see E.
5. **`/mobile-location-policy`:** the candidate app links to it, but it returns 404 on the website. The legal text is needed (not drafted, to avoid inventing legal claims).
6. **About timeline:** restored to the original 2021 to 2028 journey at your request. The 2026, 2027 and 2028 cards repeat the 2021, 2022 and 2024 text ("The Question", "The Concept", "The Ecosystem"). Send the real milestones for those years and they can replace the repeated text.
7. **Firebase key rotation and history purge:** see H.
8. **`NEXT_PUBLIC_SITE_URL`:** set it if production is not `https://keraeva.com`.

## K. Recommended next phase (not started)

1. Replace screenshots and team photos per the spec, then add "Sample data" captions.
2. Decide on button contrast (J.1).
3. Build the deferred pages: Urgent Staffing, Workforce Management, How It Works, Trust & Verification. The home "Explore Urgent Staffing" link can then point to `/urgent-staffing`.
4. Add a real careers feed with apply URLs and real blog posts (the components are ready).
5. Publish the mobile location policy, and the App Store link once iOS is approved.
