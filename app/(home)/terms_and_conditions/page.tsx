"use client";

import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { useState } from "react";

const TERMS_SECTIONS = [
  {
    id: 1,
    title: "What information do we collect?",
    content: `Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis nit bibendum diam. Tempor integer aliquam in vitae milesuda fringilla.

Elit nisl id eleifend sed nisl. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate possuere purus sit congue convallis alquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem st. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.

Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed velit, congue felis elit erat nam nibh orci.`
  },
  {
    id: 2,
    title: "How do we use your information?",
    content: `Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis nit bibendum diam. Tempor integer aliquam in vitae milesuda fringilla.

Elit nisl id eleifend sed nisl. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate possuere purus sit congue convallis alquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem st. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.

Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed velit, congue felis elit erat nam nibh orci.`
  },
  {
    id: 3,
    title: "Do we use cookies and other tracking technologies?",
    content: `Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.`
  },
  {
    id: 4,
    title: "How long do we keep your information?",
    content: `Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.`
  },
  {
    id: 5,
    title: "How do we keep your information safe?",
    content: `Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.`
  },
  {
    id: 6,
    title: "What are your privacy rights?",
    content: `Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.`
  },
  {
    id: 7,
    title: "How can you contact us about this policy?",
    content: `Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc sit. Eget diam eurutum mi ac. Auctor rutrum lacus malesuada massa ornare et. Volutate consectetur ac urticies at diam dui eget fringilla incidunt. Arcu sit dignissim erat cursus volutate gravida id. Sed quis auctor volutate hac elementum gravida cursus dlis.

1. Lectus id duis vitae porttitor enim gravida morbi.
2. Eu turpis possuere semper feugiat volutpat elit, ultricies suspendisse. Auctor vel in vitae placerat.
3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.`
  }
];

export default function TermsConditionsPage() {
  const [email, setEmail] = useState("");

  return (
    <>
        <main className="bg-neutral-100 flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-1 md:p-4 lg:p-6 xl:p-8 w-full">
                {/* Page Header Section */}
                <Section className="bg-white border-b border-gray-200">
                    <div className="">
                          <Header />
                    </div>
            <div className="max-w-7xl mx-auto px-4 py-12">
              <div className="space-y-4">
                <Heading as="h1" size="lg" className="text-[#252B37]">
                  Terms & Condition
                </Heading>

                <div className="flex items-center gap-2 text-sm">
                  <Link href="/" className="text-[#252B37] hover:text-[#F4781B]">
                    Home
                  </Link>
                  <ChevronRight className="w-4 h-4 text-[#717680]" />
                  <Paragraph size="sm" className="text-[#717680]">
                    Terms & Condition
                  </Paragraph>
                </div>
              </div>
            </div>
          </Section>

          {/* Content Section */}
          <Section className="bg-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
              <div className="space-y-12">
                {TERMS_SECTIONS.map((section) => (
                  <div key={section.id} className="space-y-4">
                    <Heading as="h2" size="sm" className="text-[#252B37] font-bold">
                      {section.title}
                    </Heading>

                    <Paragraph size="sm" className="text-[#717680] leading-relaxed whitespace-pre-line">
                      {section.content}
                    </Paragraph>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Newsletter Section */}
          <Section className="bg-white py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <Heading as="h2" size="md" className="text-[#252B37] mb-4">
                    Hiring Insights & Top Candidate <span className="text-[#F4781B]">Alerts</span>
                  </Heading>
                </div>

                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F4781B] text-[#252B37]"
                  />
                  <CustomButton
                    className="bg-[#F4781B] text-white hover:bg-[#E85C0F]"
                    rightIcon={ChevronRight}
                    iconClassName="text-white"
                    size="lg"
                  >
                    Subscribe
                  </CustomButton>
                </div>
              </div>
            </div>
          </Section>
        </main>

        <Footer />
    </>
  );
}
