"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useTracking } from "@/components/providers/tracking";
import { CONSENT_EVENT, cleanContainerId, cleanMeasurementId, cleanPixelId, saveConsent, subscribeConsent, readConsent, type Consent } from "@/lib/tracking";

// Google Tag Manager, Google Analytics and the Meta Pixel, behind a cookie banner.
// Nothing loads and no banner shows until an ID is filled in under
// Settings → Tracking & Analytics.
export function Tracking() {
  const { trackingCodes, cookieBanner } = useTracking();
  const gtmId = cleanContainerId(trackingCodes.googleTagManagerId);
  const gaId = cleanMeasurementId(trackingCodes.googleAnalyticsId);
  const pixelId = cleanPixelId(trackingCodes.metaPixelId);
  const enabled = Boolean(gtmId || gaId || pixelId);

  // The saved choice lives in the browser; "pending" while the page is server-rendered
  const consent = useSyncExternalStore(subscribeConsent, () => readConsent() ?? "unset", () => "pending" as const);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const reopen = () => setReopened(true);
    window.addEventListener(CONSENT_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_EVENT, reopen);
  }, [enabled]);

  if (!enabled) return null;
  const bannerOpen = consent === "unset" || reopened;

  const choose = (value: Consent) => {
    const wasGranted = consent === "granted";
    saveConsent(value);
    setReopened(false);
    // Turning tracking off after it was on: remove its cookies and reload without the scripts
    if (value === "denied" && wasGranted) {
      for (const name of document.cookie.split(";").map((c) => c.split("=")[0].trim())) {
        if (/^(_ga|_gid|_gat|_fbp|_fbc)/.test(name)) {
          const host = window.location.hostname.replace(/^www\./, "");
          for (const domain of ["", `; domain=${host}`, `; domain=.${host}`]) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
          }
        }
      }
      window.location.reload();
    }
  };

  return (
    <>
      {consent === "granted" && gtmId && <GoogleTagManager id={gtmId} />}
      {consent === "granted" && gaId && <GoogleAnalytics id={gaId} />}
      {consent === "granted" && pixelId && <MetaPixel id={pixelId} />}
      {bannerOpen && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-[#E9EAEB] bg-white p-4 shadow-lg sm:inset-x-6 sm:bottom-6 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm leading-relaxed text-[#535862]">
              {cookieBanner.message}{" "}
              {cookieBanner.policyLink && (
                <Link href={cookieBanner.policyLink} className="font-medium text-[#C44408] underline underline-offset-2">
                  {cookieBanner.policyLinkLabel}
                </Link>
              )}
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="flex-1 rounded-full border border-[#D5D7DA] px-5 py-2.5 text-sm font-medium text-[#252B37] hover:bg-[#FAFAFA] sm:flex-none"
              >
                {cookieBanner.declineLabel}
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="flex-1 rounded-full bg-[#F3651B] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 sm:flex-none"
              >
                {cookieBanner.acceptLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Google Tag Manager container (the official loader). Tags inside the container are managed in Tag Manager.
function GoogleTagManager({ id }: { id: string }) {
  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}

// GA4 records page changes itself (enhanced measurement), so only the config call is needed
function GoogleAnalytics({ id }: { id: string }) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}

// The loader records the first PageView; later page changes are sent from here
function MetaPixel({ id }: { id: string }) {
  const pathname = usePathname();
  const firstView = useRef(true);
  useEffect(() => {
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);
  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${id}');fbq('track','PageView');`}
    </Script>
  );
}
