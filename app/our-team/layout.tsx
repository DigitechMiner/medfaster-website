import type { Metadata } from "next";

// Metadata lives here because the page itself is a client component
export const metadata: Metadata = {
  title: "Our Team | KeRaeva",
  description:
    "Meet the team building KeRaeva, the AI-powered healthcare workforce platform for Canada.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
