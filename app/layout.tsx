import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/font";
import GoogleOAuthProviderWrapper from "@/components/providers/GoogleOAuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";
import { GlobalModals } from "@/components/global/modals";
import { Preloader } from "@/components/global/preloader";
import { ScrollReveal } from "@/components/global/scroll-reveal";

export const metadata: Metadata = {
  title: "KeRaeva",
  description:
    "KeRaeva is an AI-powered healthcare workforce platform connecting healthcare organizations and professionals across Canada for hiring, urgent staffing, shifts and payments.",
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
        <GoogleOAuthProviderWrapper>
          {children}
        </GoogleOAuthProviderWrapper>
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
