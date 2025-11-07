import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </Heading>

              <div className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-[#252B37] hover:text-[#F4781B]">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-[#717680]" />
                <Paragraph size="sm" className="text-[#717680]">
                  Privacy Policy
                </Paragraph>
              </div>
            </div>
          </div>
        </Section>

        {/* Content Section */}
        {/* Content Section */}
        <Section className="bg-white py-16">
          <div className="w-full">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="space-y-4">
                <Heading as="h2" size="xs" className="text-[#252B37]">
                  The standard Lorem Ipsum passage, used since the 1500s
                </Heading>

                <Paragraph size="sm" className="text-[#717680] leading-relaxed italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Paragraph>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <Heading as="h3" size="xs" className="text-[#252B37]">
                  Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                </Heading>

                <Paragraph size="sm" className="text-[#717680] leading-relaxed">
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisl ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </Paragraph>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <Heading as="h3" size="xs" className="text-[#252B37]">
                  1914 translation by H. Rackham
                </Heading>

                <Paragraph size="sm" className="text-[#717680] leading-relaxed">
                  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </Paragraph>
              </div>
            </div>
          </div>
        </Section>
        
      </main>

      <Footer />
    </>
  );
}
