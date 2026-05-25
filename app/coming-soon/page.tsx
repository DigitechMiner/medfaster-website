import { Metadata } from "next";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { ComingSoon } from "@/components/global/coming-soon";
import { Screen } from "@/components/global/screen";

export const metadata: Metadata = {
  title: "Coming Soon | KeRaeva",
  description:
    "Something exciting is coming to KeRaeva. Stay tuned for updates!",
};

export default function ComingSoonPage() {
  return (
    <Screen>
      <Header>
        <ComingSoon />
      </Header>
      <Footer />
    </Screen>
  );
}
