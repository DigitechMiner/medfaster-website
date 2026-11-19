// Site-wide settings. These defaults are used until they are changed in the
// admin panel (Settings → Site Settings), and when the CMS is not configured.
export const SITE_DEFAULTS = {
  contact: {
    email: "support@keraeva.com",
    phone: "(403) 919-6824",
    location: "KeRaeva Canada Head Office",
  },
  apps: {
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.keraeva",
    appStoreUrl: "",
    iosComingSoonLabel: "Coming soon on iOS",
    recruiterRegistrationUrl: "https://recruiter.keraeva.com/registration",
  },
  social: {
    linkedinUrl: "",
    facebookUrl: "",
    instagramUrl: "",
  },
  pages: {
    showOurTeamPage: false,
  },
  company: {
    legalName: "MedFaster Health Tech Inc.",
  },
  // Analytics and marketing tracking. Each tracker only loads on the public website
  // when its ID is filled in, and only after the visitor accepts the cookie banner.
  tracking: {
    googleAnalyticsId: "",
    googleAnalyticsPropertyId: "",
    metaPixelId: "",
  },
  // Cookie banner shown when Google Analytics or the Meta Pixel is turned on
  cookieBanner: {
    message:
      "We use cookies to understand how people use our website and to measure our advertising. You can accept or decline analytics and marketing cookies.",
    acceptLabel: "Accept",
    declineLabel: "Decline",
    policyLinkLabel: "Privacy Policy",
    policyLink: "/privacy-policy",
    preferencesLabel: "Cookie preferences",
  },
  // Messages shared by every form on the website (shown when a form can't be sent)
  forms: {
    invalidEmailMessage: "Please enter a valid email address.",
    missingFieldsMessage: "Missing required fields: {fields}",
    sendFailedMessage: "Something went wrong. Please try again or email support@keraeva.com.",
    notConnectedMessage: "This form isn't connected yet. Please email support@keraeva.com.",
    networkErrorMessage: "Network error. Please check your connection and try again.",
  },
  // Logos and brand images used across the site. Each keeps the built-in file
  // until a new image is uploaded here. SVG and ICO files are stored as they are.
  branding: {
    logo: "/images/ui/KeRaeva-logo.svg",
    whiteLogo: "/images/company/white-logo.svg",
    faviconImage: "/favicon.ico",
    shareImage: "/opengraph-image",
    appQrCodeImage: "/images/ui/qr-google-play.png",
    placeholderImage: "/images/ui/logo-mark-gray.svg",
  },
};

// Absolute URL for brand images used outside the page (structured data, share cards)
export function absoluteUrl(path: string, siteUrl: string) {
  return /^https?:\/\//.test(path) ? path : `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

export type SiteSettings = typeof SITE_DEFAULTS;
