import type { Metadata } from "next";

// Metadata lives here because the page itself is a client component
export const metadata: Metadata = {
  title: "Contact Us | KeRaeva",
  description:
    "Talk to KeRaeva about hiring healthcare professionals, partnerships, media or general questions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
