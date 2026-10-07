# KeRaeva Website Refresh — Audit & Gap Report

**Prepared:** 7 October 2026
**Scope:** `medfaster-website` repository (Next.js 15, App Router, Tailwind v4) compared with the KeRaeva Candidate App source (`KeRaeva` React Native, v1.1.0).
**Status:** Audit only. Apart from the footer credit and the README, no page content or visual design was changed. Every recommendation below waits for review.

> **Rule for every recommendation:** grow the existing KeRaeva website. Do not redesign it.
> Everything proposed here reuses the current `Section`, `Heading`, `Paragraph`, `CustomButton`, `FeatureCard`, the orange pattern panels, the neutral-100 page canvas, and the current header and footer.

---

## Progress log

| Date | Phase | Status |
|---|---|---|
| 7 Oct 2026 | Audit, README, footer credit | Merged (PR #5, #6) |
| 7 Oct 2026 | **Homepage refresh** (task 4) + shared modals + lead endpoint | Branch `feat/homepage-refresh` (see below) |

**Homepage refresh: what changed**
- Hero: workforce positioning, with working **Find Opportunities** (Get the App modal) and **Start Hiring** (recruiter registration) buttons.
- Journey section: 3 cards became 8 lifecycle steps (Profile → Verify → AI Interview → Match → Hire/Fill → Work → Get Paid → Stay in the Loop). Same white cards; they swipe on mobile.
- **New: Urgent Staffing section** (two-panel layout from `VerifiedSection` plus the step list from `HiredSection`), covering requirement → eligible professionals → alert → accept/decline → confirmed.
- AI section: 6 verified capabilities (removed "Predictive Availability" and the "100% verified" claim). "AI Recruiter Features" → `/medical-organizations`.
- Verified section becomes **AI Interview + Verified Scorecard**. Fixed the "get snooze Faster" typo and removed the unverified "recruiters see only verified candidates" claim.
- App section: descriptions match real app features. The QR codes are now real (see below).
- "Manage Payments" becomes **From Shift to Payment**: shift → check-in → attendance verified → wallet → withdraw.
- Closing CTAs wired: Create Free Profile opens Get the App, Schedule Demo opens Request Demo. Only one `<h1>` per page.
- Shared: `Get Started` chooser / `Get the App` modal, `Request Demo` modal, `POST /api/leads`. Footer newsletter (both footers) now really submits. Fixed footer links (`/coming_soon`, `#refund`, `#data-protection`, `#mission-vision`). Removed "HIPAA/GDPR" from the footer label.
- SEO/a11y: homepage metadata and Open Graph (the page is now a server component), root description, mobile menu `aria-label`/`aria-expanded`, keyboard focus ring on `CustomButton`, labelled form fields, and dialogs with Escape, focus handling and scroll lock.

**New findings from this phase**
- The original QR images (`qr-code-1.png`, `qr-code-2.png`) both encode the literal text `app store`, so they never linked anywhere. `qr-google-play.png` now encodes the live listing `https://play.google.com/store/apps/details?id=com.keraeva` (verified by decoding). The iOS app is **not on the App Store** yet (`iosAppStoreId: null` in the app, and it can't be found in any CA/US/IN storefront), so the App Store badge shows "Coming soon on iOS".
- The hero image `healthCare.png` has a "40k +" statistic baked into the artwork. It needs a source, or an updated image.
- Correction to A.3: the live homepage shows 6 AI cards and 4 app cards (from `utils/constant/index.ts`), not 5 and 5.

**Still open for the homepage:** real Candidate App screenshots for the Urgent Staffing and AI Interview sections, verified testimonials and logos, and `LEADS_WEBHOOK_URL` configured in Vercel.

---

## 0. Executive summary: what is still missing

| Area | Count | Highlights |
|---|---|---|
| Pages missing | 9 | Urgent Staffing, KeRaeva AI (the footer links to it but it returns 404), Workforce Management, How It Works, Trust & Verification, Contact Sales/Request Demo, Blog article detail, Careers job detail/apply, Refund Policy, Data Protection |
| Broken links / 404s | 8 | `/coming_soon`, `/nearby-jobs`, `/about_us`, `/team/:id`, `#refund`, `#data-protection`, `#mission-vision`, careers "Apply now" → `#` |
| Dead CTAs (no action) | 17 | "Get Started Now", "Request Demo", "Schedule Demo" (×3), "Show Demo" (Orgs, data-driven), "Create Free Profile", "Download app", "AI Recruiter Features", the job-search bar, and others |
| Fake form submissions | 5 | Newsletter (×2 footers), Contact form, Support issue form, Coming-soon "Notify Me". Each shows success or logs to the console, but nothing is ever sent |
| Modals / popups missing | 7 | Request Demo modal, App-download modal (store links + QR), Get Started role chooser, Job-search results handoff, Careers apply modal, Cookie consent banner, Newsletter double-opt-in confirmation |
| Built but unused modal | 1 | `LoginModal` (OTP) is mounted in the header but nothing ever opens it. It also defaults to a **Patient** tab, which is a future ecosystem feature |
| Product capabilities in the app but not on the site | 15+ | Urgent/instant jobs with Accept/Decline, Job Invites, In-house (internal pool) requests, AI interview scorecard + transcript, self-interview credits, shift lifecycle and check-in window, Stripe-linked withdrawals, referral rewards, chat, saved jobs, widgets and live shift status, identity verification (face scan / fingerprint) |
| Content that is placeholder or risky | 9 | Placeholder blog posts ("Migrating to Linear 101"), placeholder careers ("Accountant" ×n), pricing copied from a booking/EMR product, "HIPAA/GDPR compliant" claim, unverified stats (10,000+, 90%, 100%), "Why MedFaster?" heading, reused testimonial photos, partner logos that need permission |

---

## A. Current website audit

### A.1 Tech and design system (source of truth for visual identity)

| Item | Current implementation |
|---|---|
| Framework | Next.js 15.5 App Router, React 19, TypeScript |
| Styling | Tailwind v4 (`app/globals.css`, shadcn "new-york" zinc tokens). Brand colours are hard-coded hex values, not tokens |
| Font | Inter Variable (local, `lib/font.tsx` → `--font-main`) |
| Brand orange | `#F3651B` (Home, Professionals, About, inner pages) and `#F4781B` (Organizations, Professionals sections). Organizations also uses the gradient `linear-gradient(225deg, #EB001B 0%, #F79E1B 100%)` |
| Text colours | `#252B37` headings, `#717680` body, `#E9EAEB` dividers |
| Page canvas | `Screen` → `bg-neutral-100` with responsive gutters `p-2 md:p-4 lg:p-6 xl:p-8` and section gaps of the same scale |
| Section card | `Section` → white rounded panel. Orange panels use `orange-pattern-1/2.png` with `background-blend-mode: overlay` |
| Buttons | `CustomButton`: pill-shaped, orange or white, with a round icon "chip" on the right (`rightIcon`, `iconContainerClassName`) |
| Cards | `FeatureCard` (icon or screenshot + title + description). White `rounded-2xl p-6` cards on orange panels |
| Motion | Marquee logo strip (`animate-scroll`), hover lift on social icons, `tw-animate-css` available |
| Header | White rounded panel that wraps the hero (`<Header>{hero}</Header>`). Grey pill nav with an orange active state, "Our Platforms" dropdown, "Login as Recruiter" CTA, and a mobile drawer below `xl` |
| Footer | Newsletter row, logo, contact, three link columns, copyright and social icons. **Two copies exist:** `components/global/footer.tsx` and `components/global/otpModal/landing-footer.tsx` (the second is used only on `/medical-organizations`) |

**Code-structure debt (not visible to users):** primitives are duplicated in `components/ui/*` and `components/custom/*` (heading, paragraph, section, custom-button, feature-card all differ slightly). Constants are duplicated in `lib/constants.ts`, `utils/constant/index.ts` and `utils/constant/landingPage.ts`. `CompanyLogos`, testimonials and the "Manage Payments" demo block are copy-pasted across pages. A future refactor should consolidate them **without visual change**.

### A.2 Routes that exist today (17)

| Route | Purpose | Header/Footer | Metadata |
|---|---|---|---|
| `/` | Dual-audience landing page | Header + Footer | Inherits the generic root title |
| `/medical-organizations` | Recruiter landing page | Header + **LandingFooter** | None |
| `/medical-professionals` | Candidate landing page | Header + Footer | None |
| `/about` | Company story, stats, team, FAQ | Header + Footer | Yes |
| `/our-team` | Team grid with filters | Header + Footer | None |
| `/careers` | KeRaeva's own job openings (placeholder data) | Header + Footer | None |
| `/blog` | Blog listing (placeholder data, no detail pages) | Header + Footer | None |
| `/subscriptions` | Pricing (Free / Pro / Enterprise) | Header + Footer | None |
| `/contact-us` | Contact info + form | Header + Footer | None |
| `/help_center` | Contact + 4 FAQs | Header + Footer | None |
| `/support` | Issue form + 9 FAQs (shifts, payments, check-in, referrals) | Header + Footer | None |
| `/coming-soon` | Generic "Stay Tuned" | Header + Footer | Yes |
| `/privacy-policy`, `/terms-conditions` | Legal | Header + Footer | None |
| `/mobile-about-us`, `/mobile-privacy-policy`, `/mobile-terms-conditions` | Header-less copies for the in-app WebView | None | Partial |

### A.3 Homepage (current section order)

1. **Header + Hero:** "Find Your Next Healthcare Role, Or Your Next Great Hire". Buttons: Get Started Now (dead), Post a Job (→ recruiter registration). Static hero photo.
2. **CompanyLogos:** marquee of 4 Canadian healthcare logos.
3. **GetHiredSection (orange):** "A Simpler Path To Success For Everyone", 3 white cards, Get Started (dead).
4. **AIHelpsSection:** "Intelligent AI…", 5 AI feature cards (Resume Parsing, Smart Matching, Predictive Availability, Confidential AI Feedback, Verified Opportunities). The "AI Recruiter Features" button is dead.
5. **AllInOneSection:** 5 app-screen cards (Resume Upload, Document Verification, Map View, Job Marketplace, Wallet) + a download card with 2 QR codes.
6. **VerifiedSection:** verified badge + AI scorecard (`verified-card.svg`). The copy has a typo: "get snooze Faster".
7. **BookADemo (orange):** "Manage Payments Seamlessly", payment bubble "$12,500 Registered Nurse Paid", Show Demo (→ YouTube).
8. **TestimonialsSection:** 4 candidate testimonials.
9. **NextCareer:** two orange cards: Create Free Profile (dead), Post a Job, Schedule Demo (dead).
10. **Footer**

---

## B. Product-to-website gap analysis

Evidence key: **[App]** = found in the Candidate App source, **[Site]** = already stated on the site, **[FAQ]** = only stated in the site's own Support FAQ.

| Capability | Evidence | On website today? | Gap |
|---|---|---|---|
| Resume upload + AI-assisted profile setup | [App] `UploadResume`, `ProfileSetup` (education, work experience, social links) | Yes (Resume Parsing, Resume Upload) | Keep. Explain the full profile, not just parsing |
| Credential and document upload | [App] `UploadDocument`, `UploadProfessionalDocument`, `Documents` | Yes (Document Verification) | Expand: licences, certifications, verification status |
| Identity verification (face scan / fingerprint) | [App] `Verification/FaceScanScreen`, `FingerprintVerificationScreen` | **No** | Add to Trust & Verification (benefit-led, no biometric internals) |
| AI virtual interview | [App] `AIVirtualInterview`, `InterviewSetup` + mic check (voice AI) | Partial ("AI interview", "behavioural interviews") | **Expand:** "Meet your AI interviewer" story |
| Interview scorecard | [App] `InterviewScorecard`: overview, summary, scorecard categories, risk flags, transcript, uploaded docs, work experience | Partial (static `verified-card.svg`) | **Expand:** what recruiters see; use a real scorecard screenshot |
| Reusable self-interview + recruiter default | [App] SELF interviews, "set which completed SELF interview recruiters see by default", self-interview credits | **No** | Add: "Interview once, reuse it" |
| Job-specific interview requests | [App] `InterviewRequestCard`, interview bookings tied to jobs | **No** | Add for both audiences |
| Recommended jobs | [App] home tab "Recommended Jobs" | Yes (Smart Job Matching) | Keep |
| **Urgent jobs** | [App] home tab "Urgent Jobs", `GET /candidate/jobs/urgent` | **No (mentioned only in Support FAQ)** | **Major addition** |
| **Instant job dispatch + Accept / Decline** | [App] `jobs/instant/dispatched`, `accept`, `reject` | **No** ([FAQ] "first-accept basis") | **Major addition:** urgent staffing flow |
| Job Invites (recruiter → professional) | [App] home tab "Job Invites", invite kind toggle | **No** | Add |
| Hiring Organizations directory | [App] home tab "Hiring Organizations", `OrganizationCard` | **No** | Add to Professionals page |
| In-house / internal pool requests | [App] `Profile/InHouse`, in-house requests accept/reject | **No** | Add: "Bring your own staff" for organizations |
| Map-based discovery + radius | [App] `MapTab`, radius in location utils and widgets | Yes (Map View) | Expand with radius-based matching |
| Saved jobs | [App] `SavedJob` screen | **No** | Add |
| Rotation schedules on jobs | [App] `RotationScheduleSection` | **No** | Add to "Shift & schedule" |
| Application statuses | [App] `applied`, `invited`, `interview`, `accepted`, `rejected`, `withdrawn` | **No** | Add "Know where you stand" using **these exact labels** |
| Availability toggle | [App] `is_available` profile flag | Partial ("Predictive Availability") | Reframe as "You control when you're available". **Do not** claim prediction until verified |
| Shift lifecycle (My Work) | [App] Upcoming / Active / Completed / Missed / Cancelled tabs, `ShiftCard` | **No** | **Major addition:** workforce operations |
| Check-in / check-out window | [App] `ShiftCard`, `JobInfoHeader`; [FAQ] check-in opens 30 min before and closes 30 min after start | **No** | Add as attendance verification |
| Timesheets (submit → approve) | **Not found in the Candidate App** (0 matches) | No | **Do not market** until the Recruiter Platform confirms it. Use "attendance-verified shifts" instead |
| Wallet, transactions, transaction detail | [App] `Wallet`, `AllTransactions`, `TransactionDetail` (credit/debit/hold/release/refund/fee) | Yes (Wallet & Payment History) | Expand |
| Withdrawals to a linked bank (Stripe) | [App] `WithdrawSheet`, `LinkedBankAccounts`, Stripe verification | **No** | Add "get paid to your bank". **Do not** promise settlement times (Stripe Connect status is unresolved) |
| Referral rewards | [App] `ReferralCodeModal`, `referral.service`; [FAQ] | **No** | Add as a small Professionals section |
| In-app chat with recruiters | [App] `Chat`, `Conversation` (socket) | Partial ("Communication Tools" image) | Expand on both pages |
| Notifications + notification settings | [App] `Notifications`, `NotificationSettings`, rich notification actions | Partial ("instant alerts") | Expand |
| Home-screen widgets, live shift status, interview countdown, app shortcuts | [App] feature flags ON (Phase 1/2) | **No** | Optional "Built for your phone" strip |
| Reliability / profile rating | [FAQ] no-shows and cancellations affect rating; app code is ambiguous | No | **UNKNOWN:** confirm before marketing |
| Recruiter: pipeline, AI ranking, interview scheduling, analytics, notes, communication | [Site] dashboard images only. Recruiter source **not available** for this audit | Yes (images) | Verify against the Recruiter Platform; replace SVG mock-ups with real screenshots |
| Recruiter: billing / invoices / team / multi-location | Not verifiable | Enterprise plan lists "Multi-Location & Staff Management" | **UNKNOWN** |

---

## C. KEEP / MODIFY / EXPAND / REMOVE / ADD matrix

### C.1 Homepage `/`

| Section | Action | Problem / gap | Recommended change | Reuse | New component | Asset needed | Desktop / Mobile impact |
|---|---|---|---|---|---|---|---|
| Hero | **MODIFY** | Says only "role or hire". "Get Started Now" is dead | Headline in the current voice, e.g. "Healthcare Workforce, Powered by Intelligence", with orange emphasis on the last phrase. Wire the CTAs: **Find Opportunities** (→ app download modal) and **Start Hiring** (→ recruiter registration) | `HeroSection`, `CustomButton` | None | Optionally swap the hero photo for a real app/dashboard composite | None (same layout) |
| CompanyLogos | **KEEP** (confirm logo rights) | Logos may imply partnerships | Keep only logos you have permission to use | `CompanyLogos` | None | — | — |
| GetHiredSection | **EXPAND** | 3 steps undersell the lifecycle | Turn the 3 cards into a lifecycle strip: Discover → Verify → Assess → Match → Fill → Work → Get Paid → Analyze (same white cards; scroll-snap on mobile) | Orange `Section` + white cards | None | — | Desktop 4×2 grid; mobile horizontal scroll |
| **NEW: Urgent Staffing** | **ADD** | Biggest differentiator is invisible | Left: copy + flow (Urgent requirement → Eligible & available professionals → Notification → Accept → Shift confirmed). Right: real "Urgent Jobs" app screen. CTA → `/urgent-staffing` | `VerifiedSection` 2-column layout | None | Candidate App: Urgent Jobs tab + Accept/Decline sheet | Stacks on mobile |
| AIHelpsSection | **MODIFY** | "Predictive Availability" is unverified. The dead "AI Recruiter Features" button should go to `/keraeva-ai` | Reframe the 6 cards as Profile, Matching, Interview, Scorecard, Availability, Workforce Intelligence | `FeatureCard` | None | Existing icons | — |
| **NEW: AI Interview** | **ADD** | Interview + scorecard is under-told | "Meet Your AI Interviewer": two short rows (Professional: Interview → Scorecard → Better matches; Recruiter: Structured assessment → Insight → Decision) | `VerifiedSection` (replaces or extends it) | None | Interview screen + scorecard screenshot | — |
| AllInOneSection | **EXPAND** | Missing Saved Jobs, Applications, My Work, Chat | Add cards: My Shifts, Application Status, Saved Jobs, Chat. Keep the download card, add **store badges + links** | `FeatureCard` grid | None | 4 new app screenshots + store URLs | Grid already responsive |
| VerifiedSection | **MODIFY** | Typo "get snooze Faster". The claim "recruiters see only verified candidates" needs confirmation | Fix the copy and add identity-verification and credential-status bullets | Same | None | Real verified profile screenshot | — |
| **NEW: Workforce Operations** | **ADD** | The site stops at hiring | "From Hire to Paid": Shift assigned → Check-in → Shift completed → Attendance verified → Wallet credited → Withdraw | Orange `Section` + steps list (pattern from `HiredSection`) | None | My Work + Wallet screenshots | — |
| BookADemo ("Manage Payments") | **MODIFY** | "$12,500" with no context | Fold into the Workforce Operations section or relabel as an example. Keep the visual | `BookADemo` | None | — | — |
| Testimonials | **KEEP / VERIFY** | Possibly placeholder: the same photo is reused for 2 people | Use only real, consented testimonials | `TestimonialsSection` | None | Real photos | — |
| NextCareer | **MODIFY** | 2 of 3 buttons are dead | Wire Create Free Profile → app download modal, Schedule Demo → demo modal | Same | Modals (below) | — | — |
| Footer | **MODIFY** | Broken links, fake newsletter, generic socials | Fix the links and add Urgent Staffing, KeRaeva AI, Trust links. **Credit added (this commit)** | `Footer` | None | Real social URLs | — |

### C.2 `/medical-organizations` (Healthcare Organizations)

| Section | Action | Recommended change |
|---|---|---|
| Hero | **MODIFY** | Wire "Request Demo" (dead) to the Request Demo modal. Hero copy can expand to "Hire, fill urgent shifts and manage your healthcare workforce" |
| CompanyLogos | KEEP | — |
| HiredSection (5 steps) | **MODIFY** | Keep the steps. Replace "Predictive Insights" ("forecast performance") with "AI Scorecards", and qualify "performance rating history from past roles" until verified |
| OneDashboard | **EXPAND / REPLACE ASSETS** | 3 of 6 cards reuse `feature-candidate-pipeline.svg` (Notes & Logs and Communication Tools show the wrong image even though `.png` versions exist). The subtitle is candidate-facing ("connect you with your next role"). Fix it and add cards: Urgent Dispatch, Job Invites, In-house Pool, Shift Management |
| BookADemo | KEEP | Same component as Home. Deduplicate later |
| DataDrivenHiring | **MODIFY** | "Show Demo" is a raw `<button>` with no handler. Switch to `CustomButton` and open the demo modal |
| HireWithConfidence | **EXPAND** | Add identity, credentials, AI scorecard and organization verification |
| **NEW: Urgent Staffing teaser** | **ADD** | Reuse the homepage section, recruiter-facing |
| **NEW: Workforce Operations** | **ADD** | Shift calendar, live shift status, attendance, payments |
| Testimonials | VERIFY | One testimonial has 3 stars. Confirm they are real |
| StartHiring | **MODIFY** | Wire "Schedule Demo" (dead) |
| Footer | **MODIFY** | Uses `LandingFooter`, which differs from the other pages (heading "Career Insights & Job Alerts" is candidate-facing on the recruiter page). Consolidate on one footer |

### C.3 `/medical-professionals` (Healthcare Professionals)

| Section | Action | Recommended change |
|---|---|---|
| Hero search bar | **MODIFY** | The inputs and search button do nothing, and "Browse Nearby Jobs" → `/nearby-jobs` returns 404. Either route the search to the app download modal (deep link) or build a public jobs page (see D). Avatar stack loads from Unsplash: replace with local assets |
| Hero copy | MODIFY | "verified healthcare service providers … and many more Canada" has a grammar error. "No recruiters, no hassle" conflicts with the recruiter platform. Soften it |
| GetHiredSection (3 steps) | **EXPAND** | Show the full journey: Create Profile → Verify → AI Interview → Discover → Apply/Accept → Work → Get Paid |
| AIHelpsSection | MODIFY | Same reframe as Home |
| AllInOneSection | **EXPAND** | Add My Work, Applications, Saved Jobs, Chat, Referral |
| VerifiedSection | KEEP + expand | Add self-interview reuse ("interview once, recruiters see your best") |
| **NEW: Urgent Opportunities** | **ADD** | "You're in control of when you're available": availability toggle → urgent jobs near you → Accept/Decline |
| **NEW: Know Where You Stand** | **ADD** | Application statuses: Applied · Invited · Interview · Accepted · Rejected · Withdrawn |
| **NEW: Your Shifts** | **ADD** | Upcoming / Active / Completed, check-in window, live shift status widget |
| **NEW: Earnings** | **ADD** | Wallet, transactions, withdraw to bank, referral rewards |
| CareerOnTheGo | MODIFY | QR codes have no alt context and no store links. Add App Store / Google Play badges |
| NextCareer "Download app" | **MODIFY** | Dead. Open the app download modal |

### C.4 Other existing pages

| Page | Action | Notes |
|---|---|---|
| `/about` | **MODIFY** | Heading "Why **MedFaster?**" should be "Why KeRaeva?". The FAQ claims "fully HIPAA and GDPR compliant" and "24/7 support". The stats (10,000+ verified professionals, 90% faster, 100% verified) need sources or should be removed. "Get Started Now" is dead. "Revolutionizing Healthcare Hiring" in the title goes against the copy rule |
| `/our-team` | **MODIFY** | `TeamProfileCard` links to `/team/:id` (404). All socials are `twitter.com` / `linkedin.com` placeholders. No metadata |
| `/careers` | **MODIFY** | Placeholder jobs ("Accountant", "Staff Manager" ×n). "Apply now" → `#`. Breadcrumb → `/about_us` (404). Needs a job detail page + apply flow, or a link to an ATS |
| `/blog` | **REPLACE CONTENT** | All posts are template content (e.g. "Migrating to Linear 101", "PM mental models", "The Future of Telemedicine"). No `/blog/[slug]` route. Needs an article page + real posts or a CMS |
| `/subscriptions` | **REPLACE** | The plans describe a **booking/appointment product** ("Commission per booking", "EMR/API integration", "Lab Chains", "Appointment & Schedule Management"), which conflicts with the Support FAQ ("we only charge hospitals to post vacancies"). The monetization model is unresolved, so replace it with **Contact Sales / Request Pricing** until pricing is decided |
| `/contact-us` | **MODIFY** | Form never sends (only `console.log`). Message limited to 100 characters. Address is a placeholder ("KeRaeva Canada Head Office"). Labels are not tied to inputs |
| `/help_center` | MODIFY | Duplicates the Contact page with only 4 FAQs. Merge with the `/support` FAQs (9) or make it a searchable FAQ hub |
| `/support` | **MODIFY** | Issue form only logs to the console, with no validation or confirmation. Placeholder "Wrong prescription listed…" is off-product. A second `<h1>` is used for the form title |
| `/coming-soon` | KEEP (utility) | "Notify Me" does nothing. Nothing should link here once `/keraeva-ai` exists |
| `/privacy-policy` | **MODIFY** | "MedFaster **Heath** Tech Inc." typo. References patients and patient services (future ecosystem). Uses HIPAA/GDPR language: review against PIPEDA and provincial law. No metadata |
| `/terms-conditions` | VERIFY | Contains patient-care language that suits staffing terms. Consider splitting into Professional terms and Organization terms. No metadata |
| `/mobile-*` | KEEP | WebView copies. Keep them in sync with the web versions. Add `robots: noindex` to avoid duplicate content |

---

## D. Missing pages, flows, modals and popups

### D.1 Pages missing

| # | Page | Why | Priority | Reuse |
|---|---|---|---|---|
| 1 | `/keraeva-ai`: **KeRaeva AI** | The footer already links to it (broken). Profile → Matching → Interview → Scorecard → Availability → Workforce intelligence | P0 | Header hero pattern, `FeatureCard`, `VerifiedSection` layout |
| 2 | `/urgent-staffing`: **Urgent Staffing** | Headline differentiator, built in the app | P0 | Orange `Section` steps, 2-column screenshot layout |
| 3 | `/workforce-management`: **Workforce Management** | Shifts, check-in, attendance, payments, analytics | P1 | Same |
| 4 | `/how-it-works`: **How It Works** | Two tabs or two stacked journeys (Organization / Professional) | P1 | Pill tab toggle from `/subscriptions` and `/our-team` |
| 5 | `/trust-and-verification`: **Trust & Verification** | Identity, credentials, AI assessment, organization verification, data protection | P1 | `HireWithConfidence`, `VerifiedSection` |
| 6 | `/contact-sales` (or replace `/subscriptions`) | Pricing unresolved: "Talk to our team" | P0 | Contact form + info panel |
| 7 | `/blog/[slug]`: **Blog article** | The listing has no detail page | P2 | `Section`, `Heading`, `Paragraph` |
| 8 | `/careers/[id]` + apply | "Apply now" is `#` | P2 | `JobCard`, form styles |
| 9 | `/refund-policy`, `/data-protection` (or one `/security`) | Linked from the footer, 404 today | P1 | Legal page template |
| 10 | `not-found.tsx` (custom 404) | No branded 404. Several links already 404 | P1 | `ComingSoon` layout |
| 11 | `/cookie-policy` | Needed if analytics or cookies extend beyond Vercel Analytics | P2 | Legal template |
| — | Audience pages (Hospitals, LTC, Home Care, Staffing Agencies) | **Not yet.** There isn't enough differentiated content. Revisit later | — | — |

### D.2 Flows missing or broken

| Flow | Current state | Required |
|---|---|---|
| **Professional sign-up** | "Get Started", "Create Free Profile" and "Download app" do nothing. QR codes have no store links | One shared action: open the **App Download modal** (store badges, QR, and an SMS/email link on mobile). Detect iOS or Android to deep link |
| **Organization sign-up** | "Post a Job" → `recruiter.keraeva.com/registration` works | Keep. Add UTM/source params. Make "Start Hiring" a consistent label |
| **Request demo / schedule demo** | 5 buttons. Two open YouTube, three are dead | **Request Demo modal** (name, org, role, email, phone, org size, province) → real endpoint or calendar link. Keep the YouTube video as a secondary "Watch overview" |
| **Contact form** | Fake submit | Wire to an API route or form service. Success and error states, spam protection |
| **Support ticket** | Fake submit, file input unused | Wire up, upload the attachment, return a ticket ID |
| **Newsletter** | Fake success in both footers | Wire to an email provider with double opt-in, or remove the form |
| **Job search (public)** | Inputs do nothing; `/nearby-jobs` returns 404 | Option A: redirect to the app download modal with a deep link. Option B: public `/jobs` list from `GET /jobs` (needs a public API) |
| **Recruiter login** | Works (external) | Keep |
| **Professional login on web** | `LoginModal` exists but never opens. It has a **Patient** tab | Decide: remove the modal, or repurpose it as "Professional login → open app". Remove the Patient tab (future ecosystem) |
| **Careers apply** | `#` | Apply modal or ATS link |
| **Header nav** | "Why KeRaeva?" → `/about`. No KeRaeva AI or Urgent Staffing | Extend the existing "Our Platforms" dropdown (see E) |

### D.3 Modals / popups missing

| Modal | Trigger(s) | Style reuse |
|---|---|---|
| **Request Demo** | Request Demo, Schedule Demo, Show Demo (data-driven), Contact Sales | `LoginModal` shell (rounded white card, logo, close button), `Input`, `CustomButton` |
| **Get the App** | Get Started (pro), Create Free Profile, Download app, Find Opportunities, job search | Same shell + QR images + store badges |
| **Get Started: choose your path** | Home hero "Get Started Now", About "Get Started Now", Careers CTA | Two white cards (Professional / Organization) on the modal shell |
| **Careers Apply** | `/careers` "Apply now" | Modal shell + contact form fields + resume upload |
| **Cookie / consent banner** | First visit (only if non-essential cookies are added) | Bottom pill bar, `CustomButton` |
| **Newsletter confirmation** | After subscribing | `react-toastify` (already installed) or an inline message |
| **Form success toasts** | Contact, Support | `react-toastify` (already mounted in `layout.tsx`, never used by forms) |

---

## E. Proposed sitemap (extends current navigation, same header component)

```
Header (existing grey pill nav, same styling)
├── Home                                   /
├── Our Platforms ▾   (existing dropdown, add 4 items)
│   ├── Healthcare Organizations            /medical-organizations   (keep URL, relabel)
│   ├── Healthcare Professionals            /medical-professionals   (keep URL, relabel)
│   ├── Urgent Staffing            NEW      /urgent-staffing
│   ├── KeRaeva AI                 NEW      /keraeva-ai
│   └── Workforce Management       NEW      /workforce-management
├── Why KeRaeva? ▾  (convert to dropdown)
│   ├── About KeRaeva                        /about
│   ├── How It Works               NEW       /how-it-works
│   └── Trust & Verification       NEW       /trust-and-verification
├── Contact Us                               /contact-us
└── [Login as Recruiter]  (existing CTA)

Footer (existing layout, 3 columns)
├── Platform: Organizations · Professionals · Urgent Staffing · KeRaeva AI · Workforce Management · Pricing/Contact Sales
├── Company:  About · How It Works · Our Team · Careers · Blog · Contact Us
└── Support:  Help Centre · Support · Trust & Verification · Privacy · Terms · Refund Policy · Data Protection
    + "Designed & Developed by Digitech Miner"  (done)
```

**CTA hierarchy:** Primary for organizations: **Start Hiring / Post a Job** (→ recruiter registration). Secondary: **Request Demo** (modal). Primary for professionals: **Find Opportunities / Download the App** (modal).

**Internal linking:** Home sections each link to their deep page (Urgent → `/urgent-staffing`, AI → `/keraeva-ai`, Operations → `/workforce-management`, Verified → `/trust-and-verification`). Each deep page ends with the existing two-card `NextCareer` CTA (one card per audience).

---

## F. Homepage before → after

| # | Current | Refreshed | Existing / New | Component reused |
|---|---|---|---|---|
| 1 | Hero: "Role or Great Hire" | Hero: workforce positioning, Find Opportunities / Start Hiring | Existing (copy + wiring) | `HeroSection` |
| 2 | Company logos | Company logos | Existing | `CompanyLogos` |
| 3 | "A Simpler Path" (3 cards) | Lifecycle strip (8 short steps) | Existing (expanded) | `GetHiredSection` |
| 4 | — | **Urgent Staffing** | New section | 2-column `VerifiedSection` layout |
| 5 | Intelligent AI (5 cards) | KeRaeva AI (6 intelligence cards) + link | Existing (modified) | `AIHelpsSection`, `FeatureCard` |
| 6 | Verified badge | **AI Interview + Verified Scorecard** | Existing (expanded) | `VerifiedSection` |
| 7 | All-in-one app (5 + download) | All-in-one app (8 + store badges) | Existing (expanded) | `AllInOneSection` |
| 8 | Manage Payments (demo) | **From Hire to Paid** (operations steps + payment bubble) | Existing (merged) | `BookADemo` + `HiredSection` steps |
| 9 | Testimonials | Testimonials (verified only) | Existing | `TestimonialsSection` |
| 10 | NextCareer (2 cards) | NextCareer (wired CTAs) | Existing | `NextCareer` |
| 11 | Footer | Footer (fixed links + credit) | Existing | `Footer` |

Net change: **2 new sections, 0 new visual patterns.** The anti-redesign check passes because every new block reuses a layout that already exists on the page.

---

## G. Existing component reuse plan

| New content | Reuse exactly |
|---|---|
| Urgent Staffing section and page | `Section` (white) + 2-column grid from `VerifiedSection`. Flow steps use the white cards from `GetHiredSection` |
| Lifecycle strip | `GetHiredSection` orange panel + white `rounded-2xl p-6` cards |
| Workforce Operations | `HiredSection` (orange gradient panel, icon + title + description rows, border-white/20 dividers) |
| AI intelligence cards | `FeatureCard` with the existing `/images/icons/ai-*.svg` |
| App feature additions | `FeatureCard` with `imageFullWidth imageCenter` |
| Inner page headers | The existing title + breadcrumb block (`/about`, `/contact-us`). Also extract it into `PageHeader` (`app/about/sections/page-header.tsx` already exists and is unused) |
| Tabs (How It Works) | Pill toggle from `/subscriptions` (`bg-white rounded-full p-1`, active `bg-[#F3651B]`) |
| FAQs | `FreqAskQuest` accordion |
| CTAs | `CustomButton` with the white-on-orange icon-chip variants. `NextCareer` two-card block |
| Modals | `components/global/otpModal` shell (overlay, card, `Logo`, `CloseButton`) |
| Toasts | `react-toastify` (already configured) |

---

## H. Product asset requirements (real UI only, no fabricated dashboards)

**Candidate App screenshots** (capture from the iOS/Android build, light mode, 1179×2556 or similar):
1. Home: Recommended Jobs tab
2. Home: **Urgent Jobs** tab
3. Instant job: **Accept / Decline** sheet
4. Home: Job Invites tab
5. Map tab with radius
6. Job detail with rotation schedule
7. Saved Jobs
8. AI Interviews list (requests / completed / self-interview credits)
9. AI Virtual Interview in progress
10. **Interview Scorecard** (overview + categories)
11. My Work: Upcoming / Active shift card with check-in
12. Wallet: balance + transactions
13. Withdraw sheet / linked bank
14. Profile completion progress + verification status
15. Chat conversation
16. iOS widget / live shift status (optional)

**Recruiter Platform screenshots** (need access; the source was not available to this audit):
1. Organization dashboard
2. Job / shift creation (incl. urgent / instant dispatch)
3. Candidate marketplace / AI-ranked list
4. Candidate pipeline
5. Candidate profile with AI scorecard
6. Urgent dispatch responses (who accepted)
7. Shift calendar / scheduling
8. In-house pool / invites
9. Analytics
10. Billing / payments (only if live)

**Other assets:** App Store + Google Play URLs and official badges, real social profile URLs, written permission for partner logos, real testimonial photos and consent.

---

## I. Feature status check (for website claims)

| Claim | Status | Basis |
|---|---|---|
| Resume upload + profile builder | **LIVE** | App screens + API |
| AI resume parsing (auto-fill) | **BUILT/TESTING** | Upload flow exists. Parsing quality not verified |
| Credential/document upload | **LIVE** | App |
| Identity verification (face / fingerprint) | **BUILT/TESTING** | App screens |
| AI virtual interview (voice) | **LIVE** | App (`AIVirtualInterview`, Vapi/Daily) |
| AI scorecard (categories, summary, risk flags, transcript) | **LIVE** | App |
| Reusable self-interview visible to recruiters | **LIVE** | App API |
| Recommended jobs / AI matching | **LIVE** | App tab. Algorithm not inspected |
| Urgent jobs list | **LIVE** | App tab + API |
| Instant dispatch + Accept / Decline | **LIVE** | App API |
| Urgent-job live progress (widget/live activity) | **PLANNED** | Feature flag OFF |
| Job invites | **LIVE** | App tab |
| In-house / internal pool | **LIVE** | App API |
| Map / radius discovery | **LIVE** | App |
| Saved jobs | **LIVE** | App |
| Application statuses | **LIVE** | applied / invited / interview / accepted / rejected / withdrawn |
| Availability toggle | **BUILT/TESTING** | `is_available` flag |
| "Predictive availability" | **UNKNOWN** | No evidence found. Remove or reword |
| Shifts: upcoming/active/completed/missed/cancelled | **LIVE** | App |
| Check-in / check-out attendance | **LIVE** | App + FAQ |
| Timesheet submit → approve | **UNKNOWN** | Not in the Candidate App |
| Wallet + transactions | **LIVE** | App |
| Withdraw to bank (Stripe) | **BUILT/TESTING** | App. Stripe Connect onboarding is an open item |
| Referral rewards | **LIVE** | App + FAQ |
| In-app chat | **LIVE** | App |
| Push notifications | **LIVE** | App (Firebase / Notifee) |
| Widgets / live shift status / app shortcuts | **BUILT/TESTING** | Flags ON |
| Reliability / profile rating | **UNKNOWN** | FAQ only |
| Recruiter: pipeline, AI ranking, scheduling, analytics, notes, chat | **UNKNOWN** | Images only. Recruiter source not inspected |
| Recruiter: billing, invoices, team, multi-location | **UNKNOWN** | — |
| Organization verification | **UNKNOWN** | Claimed in copy ("we verify every employer") |
| "100% verified", "10,000+ professionals", "90% faster" | **UNKNOWN** | No source. Remove until substantiated |
| HIPAA / GDPR compliance | **UNKNOWN / RISK** | Wrong jurisdiction for a Canadian launch. Legal review needed |
| Patient services, telemedicine | **PLANNED (future ecosystem)** | Must not appear as current (LoginModal Patient tab, privacy policy) |

---

## J. Accessibility and SEO findings

**Accessibility**
- The mobile menu toggle has no `aria-label` or `aria-expanded`. The desktop dropdown is click-only and has no keyboard or Escape handling.
- `<Link>` is nested inside `<Button>` in the header (interactive inside interactive).
- Several pages render multiple `<h1>` elements (`NextCareer`, `StartHiring`, the Support form title).
- Form labels are not associated with inputs (`htmlFor`/`id`) in the contact and support forms.
- Logo marquee and CSS animations ignore `prefers-reduced-motion`.
- QR code alt text is generic ("QR Code 1"). Several decorative images say "Doctor" for nurses.
- `objectFit` is passed to `next/image` (deprecated prop).

**SEO**
- Only 3 pages define `metadata`. Every other page inherits "KeRaeva" plus a one-line description.
- No `metadataBase`, canonical URLs, Open Graph or Twitter images, `sitemap.ts`, `robots.ts`, or JSON-LD (`Organization`, `SoftwareApplication`, `FAQPage`).
- `/mobile-*` duplicates should be `noindex`.
- Many landing pages are `'use client'` at page level (Home, Contact, Help, Support, Subscriptions, Our Team, Blog), so they cannot export `metadata`. Move `'use client'` down into the interactive sections.

---

## K. Questions / conflicts (genuine blockers)

1. **Pricing:** `/subscriptions` describes a booking/commission product. What is the current commercial model? Until it is decided, should the page become **Contact Sales**?
2. **Recruiter Platform access:** the source and screenshots are needed to confirm pipeline, scheduling, billing, team and analytics claims before they are marketed.
3. **Timesheets:** is there a timesheet submit/approve step on the recruiter side, or is attendance (check-in/out) the timesheet?
4. **Compliance language:** confirm wording to replace "HIPAA/GDPR compliant" (e.g. "designed with PIPEDA and provincial privacy requirements in mind"), pending legal review.
5. **Stats, logos and testimonials:** which are real and approved for publication?
6. **Brand orange:** `#F3651B` vs `#F4781B` / gradient. Which one is canonical? (No change made. Both are preserved for now.)
7. **Web login modal:** remove it, or repurpose it for professionals? The Patient tab should go either way.
8. **App store links:** live App Store / Google Play URLs.
9. **Public job search:** is there a public (unauthenticated) jobs API so `/jobs` could exist, or should search hand off to the app?

---

## L. Suggested implementation order (after approval)

1. **Fix what's broken (no design change):** broken links, dead CTAs → modals, fake forms → real endpoints or removal, typos, "Why MedFaster?", per-page metadata, custom 404.
2. **Homepage:** add the Urgent Staffing and AI Interview sections and expand the existing ones (section F).
3. **New pages:** `/keraeva-ai` → `/urgent-staffing` → `/workforce-management` → `/how-it-works` → `/trust-and-verification` → Contact Sales.
4. **Audience pages:** Organizations, then Professionals expansions.
5. **Content:** real blog and careers content, or hide those pages until ready.
6. **Housekeeping (no visual change):** merge `components/ui` and `components/custom`, single footer, single constants module, brand-colour tokens in `@theme`.
