import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/font";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";
import { GlobalModals } from "@/components/global/modals";
import { Preloader } from "@/components/global/preloader";
import { ScrollReveal } from "@/components/global/scroll-reveal";
import { SITE_NAME, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body className="font-sans">
        <Preloader />
        {children}
        <GlobalModals />
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
      </body>
    </html>
  );
}
