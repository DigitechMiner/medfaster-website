import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function CareerCTASection() {
  return (
    <Section
      backgroundColor="bg-[#F4781B]"
      padding={false}
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
      className="overflow-hidden"
    >

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-stretch min-h-96 ">
          <Section backgroundColor="bg-transparent" className="lg:col-span-2">
            <Heading
              as="h2"
              size="lg"
              className="text-white mb-4 leading-tight"
            >
              Where Your Career Goals Meet Real Opportunity
            </Heading>

            <Paragraph
              size="base"
              className="text-white/90 mb-8 leading-relaxed"
            >
              Whether you&apos;re an ambitious professional seeking your next role or
              a healthcare institution building your dream team, we connect you
              with unparalleled opportunities and talent.
            </Paragraph>

            <CustomButton
              className="bg-white text-[#F4781B] py-1"
              rightIcon={ChevronRight}
              iconClassName="text-white"
              iconContainerClassName="bg-[#F4781B] rounded-full"
              size="lg"
            >
              Get Started Now
            </CustomButton>
          </Section>

          <div className="relative w-full h-96 lg:h-auto lg:col-span-1">
            <Image
              src="/images/team/girl-with-specs.svg"
              alt="Career opportunity"
              fill
              className="object-contain object-bottom object-center overflow-hidden"
              quality={100}
            />
          </div>
        </div>

    </Section>
  );
}

