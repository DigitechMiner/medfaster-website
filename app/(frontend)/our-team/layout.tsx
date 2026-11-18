import { notFound } from "next/navigation";
import { getSiteSettings } from "@/lib/cms/site";

// The Our Team page is published only when Site Settings → Pages → "Show Our Team page" is on
export default async function Layout({ children }: { children: React.ReactNode }) {
  const { pages } = await getSiteSettings();
  if (!pages.showOurTeamPage) notFound();
  return children;
}
