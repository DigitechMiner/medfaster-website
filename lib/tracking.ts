// Analytics and marketing tracking for the public website (Google Tag Manager,
// Google Analytics and the Meta Pixel). IDs come from Settings → Tracking &
// Analytics; trackers only load after the visitor accepts the cookie banner
// (components/global/tracking.tsx).

type Fn = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fn;
    gtag?: Fn;
    dataLayer?: unknown[];
  }
}

/** Only a bare Tag Manager Container ID (GTM-…) is ever used. */
export function cleanContainerId(id: string | null | undefined) {
  const value = (id ?? "").trim().toUpperCase();
  return /^GTM-[A-Z0-9]{4,12}$/.test(value) ? value : "";
}

/** True when any tracking code is filled in (the cookie banner is shown then). */
export function hasTrackingCodes(codes: { googleTagManagerId: string; googleAnalyticsId: string; metaPixelId: string }) {
  return Boolean(cleanContainerId(codes.googleTagManagerId) || cleanMeasurementId(codes.googleAnalyticsId) || cleanPixelId(codes.metaPixelId));
}

/** Only a bare Pixel ID (digits) is ever used. */
export function cleanPixelId(id: string | null | undefined) {
  const value = (id ?? "").trim();
  return /^\d{10,20}$/.test(value) ? value : "";
}

/** Only a bare GA4 Measurement ID (G-…) is ever used. */
export function cleanMeasurementId(id: string | null | undefined) {
  const value = (id ?? "").trim().toUpperCase();
  return /^G-[A-Z0-9]{4,20}$/.test(value) ? value : "";
}

export const CONSENT_KEY = "kr-cookie-consent";
export const CONSENT_EVENT = "kr:cookie-preferences";
export type Consent = "granted" | "denied";

// Used when the browser blocks storage (private mode): the choice lasts for this visit
let memoryConsent: Consent | null = null;
const consentListeners = new Set<() => void>();

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : memoryConsent;
  } catch {
    return memoryConsent;
  }
}

export function saveConsent(value: Consent) {
  memoryConsent = value;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // storage blocked: memoryConsent keeps it for this visit
  }
  consentListeners.forEach((listener) => listener());
}

/** For useSyncExternalStore: also follows changes made in other tabs. */
export function subscribeConsent(listener: () => void) {
  consentListeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    consentListeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/** Opens the cookie banner again (footer "Cookie preferences" link). */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

// Conversion events per form. Support requests come from existing users, so they are not tracked.
const CONVERSIONS: Record<string, { meta: string; label: string } | undefined> = {
  demo: { meta: "Lead", label: "request_demo" },
  contact: { meta: "Contact", label: "contact" },
  newsletter: { meta: "Lead", label: "newsletter" },
};

/** Records a form conversion in whichever trackers are running. Does nothing otherwise. */
export function trackConversion(formType: string, detail?: string) {
  if (typeof window === "undefined") return;
  const conversion = CONVERSIONS[formType];
  if (!conversion) return;
  const name = detail || conversion.label;
  window.fbq?.("track", conversion.meta, { content_name: name });
  if (window.gtag) {
    window.gtag("event", "generate_lead", { form_name: name });
  } else if (window.dataLayer) {
    // Tag Manager without the direct Google Analytics code: a trigger can use this event
    window.dataLayer.push({ event: "generate_lead", form_name: name });
  }
}
