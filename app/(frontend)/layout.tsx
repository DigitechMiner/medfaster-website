import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/font";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";
import { Tracking } from "@/components/global/tracking";
import { GlobalModals } from "@/components/global/modals";
import { getPageContent } from "@/lib/cms/content";
import { Preloader } from "@/components/global/preloader";
import { ScrollReveal } from "@/components/global/scroll-reveal";
import { SITE_NAME, SITE_URL } from "@/lib/seo/site";
import { getSiteSettings } from "@/lib/cms/site";
import { getHeaderFooter } from "@/lib/cms/header-footer";
import { SiteSettingsProvider } from "@/components/providers/site-settings";
import { HeaderFooterProvider } from "@/components/providers/header-footer";
import { TrackingProvider } from "@/components/providers/tracking";
import { getTracking } from "@/lib/cms/tracking";

// Favicon comes from Settings → Site Settings → Branding
export async function generateMetadata(): Promise<Metadata> {
  const { branding } = await getSiteSettings();
  return {
    metadataBase: new URL(SITE_URL),
    title: "KeRaeva | AI-Powered Healthcare Workforce Platform in Canada",
    description:
      "KeRaeva is an AI-powered healthcare workforce platform connecting healthcare organizations and professionals across Canada for hiring, urgent staffing, shifts and payments.",
    // "./" resolves to each page's own URL
    alternates: { canonical: "./" },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      locale: "en_CA",
      url: "./",
    },
    twitter: { card: "summary_large_image" },
    icons: { icon: branding.faviconImage, shortcut: branding.faviconImage, apple: branding.faviconImage },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Shared by the header, footer, popups and buttons on every page
  const [siteSettings, headerFooter, popups, tracking] = await Promise.all([getSiteSettings(), getHeaderFooter(), getPageContent("popups"), getTracking()]);
  return (
    <html lang="en" className={fonts}>
      <body
        className="font-sans"
        // Loading placeholder for photos (Site Settings → Branding)
        style={{ "--kr-placeholder-image": `url("${siteSettings.branding.placeholderImage}")` } as React.CSSProperties}
      >
        <SiteSettingsProvider value={siteSettings}>
        <HeaderFooterProvider value={headerFooter}>
        <TrackingProvider value={tracking}>
        <Preloader />
        {children}
        <GlobalModals content={popups} />
        <ScrollReveal />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Analytics />
        {/* Tag Manager, Google Analytics and Meta Pixel (Settings → Tracking & Analytics), after cookie consent */}
        <Tracking />
        </TrackingProvider>
        </HeaderFooterProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
