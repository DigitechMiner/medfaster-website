import type { Metadata } from "next";
import { JobListingsSection } from "./components/job-listings";
import { CareerCTASection } from "@/components/section/career";
import Header from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Screen } from "@/components/global/screen";
import { PageTitle } from "@/components/global/page-title";
import { stripAccents } from "@/components/ui/accent-text";
import { getJobs, getPageContent } from "@/lib/cms/content";

// Text comes from the admin panel (Pages → Careers); openings from Content → Job Openings
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPageContent("careers");
  return { title: stripAccents(seo.title), description: seo.description };
}

export default async function CareersPage() {
  const [content, jobs] = await Promise.all([getPageContent("careers"), getJobs()]);
  return (
    <Screen>
      <Header>
        <PageTitle
          title={content.pageHeader.title}
          crumbs={[{ label: content.pageHeader.parentLabel, href: "/about" }, { label: content.pageHeader.breadcrumb }]}
        />
      </Header>

      <JobListingsSection jobs={jobs} noOpenings={content.noOpenings} />

      {/* Career CTA */}
      {content.careerCta.show && <CareerCTASection content={content.careerCta} />}

      <Footer />
    </Screen>
  );
}
