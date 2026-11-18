import type { Metadata } from "next";

// Metadata lives here because the page itself is a client component
export const metadata: Metadata = {
  title: "Blog | KeRaeva",
  description:
    "News and insights from KeRaeva on healthcare hiring, staffing and the healthcare workforce in Canada.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
