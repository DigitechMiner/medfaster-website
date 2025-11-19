import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/lib/font";
import { LoginModalProvider } from "@/contexts/login-modal-context";

export const metadata: Metadata = {
  title: "MedFaster",
  description: "MedFaster is a platform for finding healthcare jobs and candidates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body className="font-sans">
        <LoginModalProvider>
          {children}
        </LoginModalProvider>
      </body>
    </html>
  );
}
