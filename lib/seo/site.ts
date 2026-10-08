// Canonical site URL used for metadata, the sitemap and structured data.
// Set NEXT_PUBLIC_SITE_URL per environment; production defaults to keraeva.com.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://keraeva.com").replace(/\/$/, "");

export const SITE_NAME = "KeRaeva";

// Public, indexable pages (the /mobile-* pages are in-app views and stay out)
export const PUBLIC_ROUTES = [
  "/",
  "/medical-organizations",
  "/medical-professionals",
  "/keraeva-ai",
  "/about",
  "/our-team",
  "/careers",
  "/blog",
  "/subscriptions",
  "/contact-us",
  "/support",
  "/privacy-policy",
  "/terms-conditions",
];

// Pages that set their own openGraph replace the root one, so they spread this
// to keep the share image, URL and site details
export const BASE_OPEN_GRAPH = {
  siteName: SITE_NAME,
  type: "website" as const,
  locale: "en_CA",
  url: "./",
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "KeRaeva, the AI-powered healthcare workforce platform for Canada" }],
};
