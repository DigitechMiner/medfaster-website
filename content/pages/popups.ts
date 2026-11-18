// Text in the site-wide pop-ups (Pages → Pop-ups). App store and recruiter links
// come from Site Settings → Apps.
export const POPUPS_DEFAULTS = {
  getStarted: {
    heading: "How will you use **KeRaeva**?",
    body: "Choose your path to get started.",
    professionalTitle: "I'm a Healthcare Professional",
    professionalDescription: "Build a verified profile, find jobs and urgent shifts, and get paid through the KeRaeva app.",
    hiringTitle: "I'm Hiring",
    hiringDescription: "Post jobs, fill urgent shifts and review AI-assessed, verified professionals.",
    demoPrompt: "Want a walkthrough first?",
    demoLinkLabel: "Request a demo",
  },
  getApp: {
    heading: "**Download** the App",
    body: "Create your free profile, complete your AI interview and start finding opportunities near you.",
    backLabel: "Back",
  },
  requestDemo: {
    heading: "Request a **Demo**",
    body: "See how KeRaeva helps your organization hire, fill urgent shifts and manage your healthcare workforce.",
    submitLabel: "Request Demo",
    messageLabel: "What would you like to see?",
    messagePlaceholder: "e.g. urgent shift staffing, AI interviews, onboarding our team",
    organizationTypes: ["Hospital", "Clinic", "Long-Term Care", "Home Care", "Staffing Agency", "Other"],
    successHeading: "Thanks, we'll be in touch",
    successBody: "Our team will contact you shortly to schedule your KeRaeva demo.",
  },
};

export type PopupsContent = typeof POPUPS_DEFAULTS;
