# KeRaeva Website Review: Images, Content and Quality

**Date:** 8 October 2026
**Scope:** All 15 public pages, reviewed on a production build at 1280px and 375px.
**Method:**
- Automated inventory of every image and every heading/paragraph across pages (repeats, resolution, alt text).
- Link crawl.
- Contrast measurements.
- Visual pass through each page.
- Source check of the underlying files.

Items are prioritized:
- **P0:** misleading or broken. Fix before promoting the site.
- **P1:** noticeably hurts quality, trust or SEO.
- **P2:** polish.

---

## 1. Summary

| Area | Status | Headline |
|---|---|---|
| Functionality | 🔴 | Contact and Support forms tell visitors their message was sent, but nothing is delivered |
| Images | 🟠 | 119 images on screen but only 44 unique files; 2 portraits stand in for about a dozen different people; 4 team members shown with stock photos |
| Content | 🟠 | Same blocks repeated word-for-word across pages; About timeline shows future years; leftover template text |
| SEO | 🟠 | 6 pages titled just "KeRaeva"; no sitemap, robots file or social share image |
| Accessibility | 🟠 | Brand orange used for small text and button labels fails WCAG AA contrast (3.14:1) |
| Performance | 🟢 | Images optimized (homepage ~311 KB of images); lazy loading and preloader in place |
| Brand consistency | 🟢 | One palette, one type scale, one icon set, unified buttons |

### Top 10 fixes, in order
1. **P0:** Connect the Contact and Support forms to the lead endpoint (or remove the "sent" message). *(Section 3.1)*
2. **P0:** Replace stock photos on 4 named team members with real photos. *(Section 2.2)*
3. **P0:** Remove the duplicated About timeline entries dated 2026, 2027 and 2028. *(Section 3.2)*
4. **P0:** Fix the `/about_us` 404 in the Careers and Our Team breadcrumbs. *(Section 3.1)*
5. **P0:** Real, approved testimonials with distinct photos, or remove them. *(Section 2.1)*
6. **P1:** Professionals hero search bar: make it work or remove it. *(Section 3.1)*
7. **P1:** Titles and descriptions for the 6 pages without them, plus a sitemap and robots file. *(Section 5)*
8. **P1:** Darker shade of orange for small text and button labels (accessibility). *(Section 6)*
9. **P1:** De-duplicate the repeated sections across Home, Organizations and Professionals. *(Section 3.3)*
10. **P1:** Fresh Recruiter Platform screenshots (old "MedFasterrrr" footer, placeholder data). *(Section 2.4)*

---

## 2. Images

### 2.1 Testimonial portraits: 2 photos, about a dozen identities (P0)
Only two portrait files are used for every testimonial on the site:

| File | Used | Shown as |
|---|---|---|
| `testimonials/sarah-m.webp` | 13× | Sarah M., Emily R., Sarah Chen, Priya S., Tom Bishop, plus the avatar stack in the Professionals hero |
| `testimonials/michael-k.webp` | 13× | David L., Michael K., Marcus Cole, Amelie Dubois, plus the hero avatar stack |

The same face appears under several different names, sometimes on the same page. Visitors notice this and it undermines trust. The testimonials themselves are also unverified (see the audit).

**Recommendation:** Use real, consented testimonials with real photos. Until then, remove photos (use initials avatars) or remove the testimonial sections. Replace the "social proof" avatar stack in the Professionals hero with something verifiable, such as the app's Play Store rating once there is one, or remove it.

### 2.2 Team page: stock photos for named people (P0)
On **Our Team** (and the About "Meet our Team" preview), four named team members are shown with generic stock photos (`team/member-2, -3, -4, -6.webp`):

| Team member | Photo file |
|---|---|
| Yash Prajapati | `member-4.webp` (stock) |
| Deep Desai | `member-2.webp` (stock) |
| Sanket Patel | `member-6.webp` (stock) |
| Rahul Nishad | `member-3.webp` (stock) |

Kewal, Rutvij, Kevin, Vaibhav and Srujan appear to have genuine portraits.

**Recommendation:** Use real photos, or a consistent placeholder (initials on a soft orange circle) until they're available. Never show a different person's photo above someone's name.

Also on Our Team:
- **"Management & Operations" filter tab is empty.** No member has that category, so the tab shows nothing. Remove the tab or assign members (Hariprasad Thorve is commented out in the data).
- **Social icons on every team card** link to the generic `twitter.com` / `linkedin.com` home pages. Add real profile URLs or hide the icons.
- `kevin.webp` is only 352px wide and is shown at ~395px, so it looks soft next to the others. Use a higher-resolution photo.

### 2.3 Repeated and stock imagery (P1)

| Image | Where it repeats | Recommendation |
|---|---|---|
| `hero/nurse.webp` | 5× across Home and Professionals; twice inside the **same** payment-card bubble | Use three different people in the bubble, or redesign the card without faces |
| `hero/doctor.webp` | 3× (Home, Professionals hero, payment card) | Vary |
| Payment card "$12,500 · Registered Nurse · Paid" + "Canadian Health" logo | Home, Professionals, Organizations | $12,500 is implausible for a single nurse shift, and the logo looks like a real organization. Show a realistic example (e.g. "$480 · RN night shift · Paid") with KeRaeva or no logo |
| 4 app screenshots (resume, map, marketplace, wallet) | Home **and** Professionals, same order | Keep on Professionals; show a different set (or the recruiter dashboard) on Home |
| `features/confidence.webp`, `dashboard/feature-ai-ranking.webp` | Organizations **and** KeRaeva AI | Acceptable, but the AI page would benefit from a scorecard close-up or interview screen instead |
| `people/nurse-02.webp` | Twice on Organizations (payment bubble + closing CTA) | Vary |
| `hero/get-hired.webp` | Professionals and About | Vary |
| `team/girl-with-specs.webp` | Our Team and Careers CTA | Stock model; fine for a CTA, but avoid it on the Team page, where it reads as a team member |

**Hero photo (Home):** A stock photo of a doctor with an elderly patient. It's patient-care imagery for a workforce platform, and it shows nothing of the product. Consider a composition of real product UI (the app's Urgent Jobs screen next to the recruiter dashboard), which tells the story in the first second. The same applies to the **About** hero (stock office photo).

### 2.4 Product screenshots (P1)
- **Old branding:** the pipeline and calendar dashboard screenshots still contain a small "© copyright reserved by MedFasterrrr" footer.
- **Placeholder data:**
  - Dashboard screenshots show "Job Title", "Narayana Hospital" (an Indian hospital name on a Canada-focused site), "Hello, Toronto Hospital" and invented metrics (250 active jobs, 124 candidates).
  - App screenshots show "Job Title", "Hospital Name" and a **typo, "Totronto, ON"**, on the map screen.
- **Recommendation:** Re-export screenshots from the current Recruiter Platform and Candidate App using a realistic Canadian demo account (e.g. "Calgary General", real-looking roles, plausible numbers). Optionally label them "Sample data".

### 2.5 Resolution (P2)
These source files are smaller than their display size, so they look soft (especially on high-resolution screens):

| File | Source width | Shown at |
|---|---|---|
| `hero/doctor.webp` | 280px | up to 292px |
| `hero/nurse.webp` | 420px | up to 459px |
| `hero/get-hired.webp` | 600px | up to 608px |
| `team/kevin.webp` | 352px | 395px |
| `ui/badge-app-store.png` | 169px | 180px |

Phone screenshots (map, marketplace, wallet, resume) are tall portrait images inside landscape cards, so they render small with lots of empty space. Crop to the most telling part of each screen, or use a portrait card layout.

### 2.6 Alt text (P2)
- **"Doctor"** is used 9 times, including on nurse photos.
- **"Company Logo"** ×3 gives no information.
- The same portrait carries different names (see 2.1).
- **Recommendation:** Describe what each image shows. Use an empty `alt` for purely decorative images (photo bubbles, background people).

---

## 3. Content and functionality

### 3.1 Broken or misleading behaviour (P0/P1)
| Issue | Where | Priority |
|---|---|---|
| Contact form waits 1 second, logs to the browser console and shows a success message. **Messages are never delivered.** Message length also capped at 100 characters | `/contact-us`, `/help_center` | P0 |
| Support issue form only logs to the console. No delivery, no confirmation; the file attachment is ignored | `/support` | P0 |
| Breadcrumb links to `/about_us`, which **404s** | `/careers`, `/our-team` | P0 |
| Hero search bar (job title + postal code + search button) does nothing | `/medical-professionals` | P1 |
| Support form subject placeholder says "Wrong prescription listed…" (pharmacy wording from another product) | `/support` | P1 |
| Contact location is a placeholder ("KeRaeva Canada Head Office") with no address | `/contact-us`, `/support` | P2 |
| `/coming-soon` is no longer linked from anywhere (KeRaeva AI has its own page now) | — | P2 |
| The login modal (OTP) is still mounted in the header, but nothing opens it, and it has a "Patient" tab | Header | P2 |

**Recommendation:** Route Contact and Support through the existing `/api/leads` endpoint (add `contact` and `support` types). Show honest success and error states, raise the message limit to ~1,000 characters, and upload the attachment or remove the field.

### 3.2 About page (P0/P1)
- **Timeline duplicates with future years.** "Our Journey" has 7 entries. The last three repeat "The Ecosystem", "The Concept" and "The Question" dated **2026, 2027 and 2028**. Keep the four real milestones (2021 → Today).
- **Testimonials repeat.** The same quote ("The AI matching is incredibly accurate… 48 hours") appears **6 times** (duplicated in the data and again by the scrolling carousel), with two identical entries.
- **Overlap with other pages.** The "Get Your Next Healthcare Job in 3 Easy Steps" block duplicates the Professionals page. "Why KeRaeva?" and "Core Goals" overlap. Consider trimming the About page to: story → mission and vision → why KeRaeva → team → CTA.

### 3.3 Repeated sections across pages (P1)
Word-for-word repeats found by the content scan:

| Block | Pages |
|---|---|
| Urgent Staffing 5-step flow (identical text) | Home, Organizations, Professionals |
| "From Shift to Payment, Seamlessly" + payment card | Home, Organizations, Professionals |
| "Your Next Career Move Starts Here." / "Start Hiring Smarter Today" CTA cards | Home, Professionals, KeRaeva AI |
| "Create Your Profile / Verify & Pre-Screen / Start Working" | Professionals, About |
| App feature cards (Map View, Job Marketplace…) | Home, Professionals |
| "Where Your Career Goals Meet Real Opportunity" CTA | Our Team, Careers |
| "We're here to make your healthcare journey easier…" intro | Contact, Help Center, Support |

Reusing a component is fine, but the **copy** should change per audience. For example, the Urgent Staffing steps on Professionals should read from the professional's side ("You get an alert…"). On Home, keep a short teaser that links to a dedicated Urgent Staffing page.

### 3.4 Page overlap: Contact vs Help Center vs Support (P1)
Three pages with the same intro. Two share the same contact form; two share the same FAQs.

**Recommendation:** Merge into **Contact** (sales/general, with the form) and **Support** (FAQs + issue form for app users). Redirect `/help_center` to `/support`.

### 3.5 Still to verify or decide (from the audit)
- Terms §3.10 ("freemium… automatic billing") contradicts "free for professionals" on Pricing and in the FAQ.
- Testimonials, partner logos and stats need approval.
- Social profile URLs and the App Store link are still missing.
- Careers and Blog are honest empty states. Consider hiding them from the footer until there's content.

### 3.6 Pages still missing (from the refresh plan)
These are only partly covered as sections on other pages:
- Urgent Staffing
- Workforce Management
- How It Works
- Trust & Verification

Individual blog article pages also don't exist yet.

---

## 4. Visual and UX observations
- **Professionals page is long** (~9,600px on desktop) and opens with the oldest content ("Find Healthcare Jobs Near You Instantly", a non-working search, the 3-step block). Consider leading with the newer, stronger sections (urgent shifts, AI interview, application status).
- **"Instantly"** in the Professionals hero and "Faster & Smarter" on Organizations are fine as tone, but avoid stacking speed claims without proof.
- **Orange panels back to back:** on Home, the journey panel, Urgent Staffing panel, payment panel and two CTA cards make the orange heavy in the lower half. Alternate with white sections.
- **Phone screenshots in landscape cards** look small (see 2.5).
- **Footer newsletter** sits above the footer on every page, including the legal pages. Fine, but consider hiding it on legal pages.

---

## 5. SEO (P1)
| Issue | Detail |
|---|---|
| Generic titles | `/our-team`, `/careers`, `/blog`, `/contact-us`, `/help_center`, `/support` are all titled just **"KeRaeva"** with the site-wide description. They're client components, so metadata must be added via a server `page.tsx` wrapper or `layout.tsx` |
| No `sitemap.xml` / `robots.txt` | Add `app/sitemap.ts` and `app/robots.ts` (and keep `/mobile-*` out of the sitemap) |
| No social share image | No Open Graph or Twitter image, so links shared on LinkedIn or WhatsApp show no preview image. Add `app/opengraph-image.png` (or per page) |
| No `metadataBase` / canonical URLs | Set `metadataBase` to the production domain so canonical and OG URLs are absolute |
| No app icons / manifest | Only `favicon.ico`. Add `apple-icon.png` and `icon.png` (the "+K" mark) |
| No structured data | Add `Organization` JSON-LD (name, logo, contact) and `FAQPage` on Support |
| URL naming | `/medical-organizations` and `/medical-professionals` vs the "Healthcare" wording everywhere else; `/help_center` uses an underscore. Optional: new URLs with 301 redirects |

---

## 6. Accessibility (P1)
Measured contrast (WCAG AA requires **4.5:1** for normal text and **3:1** for large text):

| Combination | Ratio | Result |
|---|---|---|
| White text on brand orange `#F3651B` (all primary buttons, text on orange panels) | **3.14** | ❌ fails for normal-size text |
| Brand orange on white (highlighted words, links, small labels, step numbers) | **3.14** | ❌ fails below ~24px |
| Grey body text `#717680` on white | 4.56 | ✅ just passes |
| Grey `#717680` on page background `#F5F5F5` | 4.18 | ❌ fails |
| Dark text `#252B37` on white | 14.2 | ✅ |

**Recommendation (keeps the brand):** keep `#F3651B` for large headings, icons and backgrounds. For **small text and button labels**, use a slightly deeper orange such as `#C44408` (5.0:1 both ways), or make button labels semibold at 18px+. Darken body grey on the grey page background slightly (e.g. `#62656E`).

Other items:
- Alt text: see 2.6.
- The Contact form's labels aren't programmatically tied to their inputs.
- The About testimonials slider auto-advances on a timer; add a pause control (WCAG 2.2.2) or pause it on hover and focus.

---

## 7. Technical housekeeping (P2)
- **`.env.local` is committed to git.** It only holds public `NEXT_PUBLIC_*` values today, but add it to `.gitignore` before any secret ends up there.
- **8 lint warnings**, all unused imports (e.g. `TeamProfileCard` in Our Team, `Header`/`Footer` in the `mobile-*` pages).
- **Separate repo:** the Candidate App repository still contains `Docs/keraeva-firebase-adminsdk.json` (a Firebase service-account private key). Rotate the key and remove it from git history.

---

## 8. Suggested next steps
1. **This week (P0):**
   - Wire up the Contact and Support forms.
   - Fix the `/about_us` link.
   - Remove the duplicate and future timeline entries.
   - Remove duplicate testimonials.
   - Replace team stock photos with real photos or initials.
   - Decide on testimonials.
2. **Next:**
   - Page metadata for the 6 pages, plus sitemap, robots and a share image.
   - Accessible orange for small text and buttons.
   - Per-audience copy for the repeated blocks.
   - Merge Help Center into Support.
3. **With the product team:**
   - Fresh, realistic Recruiter Platform and Candidate App screenshots (removes the old branding, placeholder data and the "Totronto" typo).
   - A product-led hero image.
4. **Then:** the missing pages (Urgent Staffing, Workforce Management, How It Works, Trust & Verification).
