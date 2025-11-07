import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function CareerCTASection() {
  return (
    <Section
      padding={false}
      style={{
        background: "linear-gradient(135deg, #F4781B 0%, #E85C0F 100%)",
      }}
      className="relative overflow-hidden rounded-3xl"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-96">
          <div className="px-6 lg:px-8 py-12 lg:py-16 flex flex-col justify-center">
            <Heading as="h2" size="lg" className="text-white mb-4 leading-tight">
              Where Your Career Goals Meet Real Opportunity
            </Heading>

            <Paragraph size="base" className="text-white/90 mb-8 leading-relaxed">
              Whether you're an ambitious professional seeking your next role or a healthcare institution building your dream team, we connect you with unparalleled opportunities and talent.
            </Paragraph>

            <div className="w-fit">
              <CustomButton
                className="bg-white text-[#F4781B] hover:bg-gray-100"
                rightIcon={ChevronRight}
                iconClassName="text-[#F4781B]"
                iconContainerClassName="bg-[#F4781B]/10 rounded-full"
                size="lg"
              >
                Get Started Now
              </CustomButton>
            </div>
          </div>

          <div className="relative w-full h-96 lg:h-auto flex items-center justify-center">
            <Image
              src="/images/team/girl-with-specs.svg"
              alt="Career opportunity"
              fill
              className="object-cover object-left lg:object-right scale-90 origin-center"
              quality={100}
            />
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url(/images/patterns/orange-pattern-2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Section>
  );
}
