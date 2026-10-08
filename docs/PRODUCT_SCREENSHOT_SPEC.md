# Product Screenshot Replacement Spec

Status: **waiting on real exports.** The screenshots below must come from the
current KeRaeva Candidate App and Recruiter Platform. Do not mock them up, edit
text into them or generate them; re-export them from a demo account.

## 1. Demo account data (use everywhere)

Use one consistent, clearly fictional Canadian data set so every screen tells
the same story.

| Item | Value |
| --- | --- |
| City / province | Calgary, Alberta (postal codes starting T2/T3) |
| Organizations | "Sample Healthcare Organization", "Bow Valley Care Centre (sample)", "Prairie Clinic (sample)". **No real hospital names, no real logos.** Use the KeRaeva default avatar or initials. |
| Roles | Registered Nurse (RN), Licensed Practical Nurse (LPN), Health Care Aide (HCA) |
| Shifts | e.g. "RN Night Shift, 19:00 to 07:00", "LPN Day Shift, 07:00 to 15:00" |
| Pay | Plausible Alberta figures, e.g. RN $48 to $55/h, LPN $33 to $38/h, HCA $22 to $26/h. A completed RN night shift: **$480**, matching the sample payment card on the site. |
| People | Fictional names only (e.g. "Alex Morgan, RN"). No "Dr." titles for nurses. |
| Dashboard numbers | Small, believable counts (e.g. 6 open jobs, 14 applicants). No large invented metrics. |
| Copyright / footer | Must read KeRaeva. No "MedFaster" or "MedFasterrrr" anywhere. |

Spell-check every visible string (the current map screen says "Totronto, ON").

## 2. Screens to replace

| Site file | Used on | Problem today | Replace with (source) |
| --- | --- | --- | --- |
| `public/images/ui/mobile-screen.webp` | Professionals ("career on the go") | "Job Title" placeholders, "Totronto, ON", third-party logo, $12k to $15k/month | Candidate App job list, Applied tab (Candidate App) |
| `public/images/features/resume-upload.webp` | Professionals (app features) | Placeholder data | Profile and document upload screen (Candidate App) |
| `public/images/features/document-verification.webp` | Professionals | Placeholder data | Documents with verification status (Candidate App) |
| `public/images/features/map-view.webp` | Professionals | "Totronto" typo, "Hospital Name" | Map view centred on Calgary (Candidate App) |
| `public/images/features/job-marketplace.webp` | Professionals | "Job Title" placeholders | Job marketplace with urgent shift and invite (Candidate App) |
| `public/images/features/wallet-payment.webp` | Professionals | Placeholder data | Wallet with a $480 completed RN shift (Candidate App) |
| `public/images/hero/mobile-address.webp` | Professionals hero | "Hospital Name" placeholders on a map of Herräng, Sweden | Home or job detail screen (Candidate App) |
| `public/images/ui/verified-card.webp` | Home, Professionals | "Noah Liam, RN" with a placeholder phone ("+1 123 123 1213") and a personal-looking Gmail address | Profile with verified badge and AI interview scorecard, fictional RN (Candidate App) |
| `public/img/dashboard/dashboard-hero.webp` | Organizations hero | "Hello, Toronto Hospital", "Narayana Hospital", invented metrics, MedFaster footer | Recruiter dashboard for "Sample Healthcare Organization" (Recruiter Platform) |
| `public/img/dashboard/*` (pipeline, calendar) | Organizations | "© copyright reserved by MedFasterrrr" | Candidate pipeline and shift calendar (Recruiter Platform) |
| `public/img/features/confidence.webp` | Organizations, KeRaeva AI | Check data | Candidate profile with documents and scorecard (Recruiter Platform) |
| `public/img/dashboard/feature-ai-ranking.webp` | KeRaeva AI | Check data | AI interview scorecard close-up (Recruiter Platform) |

## 3. Export and optimization

- Export at 2x the largest displayed size, then convert to WebP (quality ~80)
  with `sharp`; keep the same file name so no code changes are needed. If the
  aspect ratio changes, update the `width`/`height` props where the image is used.
- Keep each phone screenshot under ~120 KB and dashboard screenshots under ~250 KB.
- Crop phone screens to the meaningful part when shown in landscape cards.

## 4. Labelling

- Add "Sample data" to the alt text (e.g. "Sample KeRaeva job marketplace in
  Calgary") and, where a caption fits the layout, a small "Sample data" caption
  under the image.
- Partner or customer logos only with written approval.
