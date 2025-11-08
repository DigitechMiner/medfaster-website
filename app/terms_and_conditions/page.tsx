import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Screen } from "@/components/global/screen";

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
  return (
    <Screen>
      <Header>
        <Section className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
          <div className="space-y-4">
            {/* Title */}
            <Heading
              as="h1"
              size="lg"
              weight="normal"
              className="text-[#252B37]"
            >
              Terms & Condition
            </Heading>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-[#252B37] hover:text-[#F4781B] transition-colors text-lg"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-[#717680]" />
              <Paragraph size="lg" className="text-[#717680]">
                Terms & Condition
              </Paragraph>
            </div>
          </div>
        </Section>
      </Header>

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

      {/* Footer */}
      <Footer />
    </Screen>
  );
}
