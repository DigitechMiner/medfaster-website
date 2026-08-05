import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/font";
import GoogleOAuthProviderWrapper from "@/components/providers/GoogleOAuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "KeRaeva",
  description: "KeRaeva is a platform for finding healthcare jobs and candidates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body className="font-sans">
        <GoogleOAuthProviderWrapper>
          {children}
        </GoogleOAuthProviderWrapper>
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
