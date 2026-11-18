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
};

export type SiteSettings = typeof SITE_DEFAULTS;
