// Pricing page content (/subscriptions). These defaults are what the site shows
// until the page is edited in the admin panel (Pages → Pricing).
// Only publish prices that are real: organizations are routed to the team.
export const PRICING_DEFAULTS = {
  seo: {
    title: "Pricing | KeRaeva",
    description:
      "KeRaeva is free for healthcare professionals. Healthcare organizations get pricing tailored to their hiring and staffing needs. Talk to our team.",
  },
  hero: {
    heading: "Simple, Transparent **Pricing**",
    body: "Free for healthcare professionals. Healthcare organizations get pricing tailored to how they hire and staff. Talk to our team to find the right fit.",
  },
  plans: {
    items: [
      {
        audience: "For Healthcare Professionals",
        price: "Free",
        priceNote: "No cost to join or apply",
        features: [
          "Verified professional profile",
          "AI interview and scorecard",
          "Recommended jobs, urgent shifts and job invites",
          "Shift schedule, check-in and wallet",
          "Withdraw earnings to your bank account",
        ],
        cta: { label: "Get the App", link: "#get-app" },
        highlighted: false,
        badge: "",
      },
      {
        audience: "For Healthcare Organizations",
        price: "Custom",
        priceNote: "Pricing based on your hiring and staffing needs",
        features: [
          "Job and shift posting, including urgent shifts",
          "AI-ranked candidates and interview scorecards",
          "Candidate pipeline and calendar",
          "In-house staff pool and job invites",
          "Messaging and hiring dashboard",
        ],
        cta: { label: "Talk to Our Team", link: "#request-demo" },
        highlighted: true,
        badge: "Contact Sales",
      },
    ],
  },
};
