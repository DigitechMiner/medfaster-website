// Tracking & Analytics (Settings → Tracking & Analytics in the admin). Each code
// only loads on the public website when its ID is filled in, and only after the
// visitor accepts the cookie banner.
export const TRACKING_DEFAULTS = {
  trackingCodes: {
    googleTagManagerId: "GTM-K99PCL4X",
    googleAnalyticsId: "",
    googleAnalyticsPropertyId: "",
    metaPixelId: "",
  },
  // Shown when any tracking code is turned on
  cookieBanner: {
    message:
      "We use cookies to understand how people use our website and to measure our advertising. You can accept or decline analytics and marketing cookies.",
    acceptLabel: "Accept",
    declineLabel: "Decline",
    policyLinkLabel: "Privacy Policy",
    policyLink: "/privacy-policy",
    preferencesLabel: "Cookie preferences",
  },
};

export type TrackingSettings = typeof TRACKING_DEFAULTS;
