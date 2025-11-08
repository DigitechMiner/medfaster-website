import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <Section
      backgroundColor="bg-[#F4781B]"
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading as="h2" size="lg" className="text-white mb-4 leading-tight">
        Find Your Next Hire. Or Your Next Job.
      </Heading>

      <ResponsiveParagraph size="base" className="text-white/90 mb-8">
        Join Canada&apos;s fastest-growing AI-powered healthcare staffing platform.
        Get started in minutes.
      </ResponsiveParagraph>

      {/* CTA Button */}
      <CustomButton
        className="bg-white text-black hover:bg-gray-100 border-1 py-1"
        rightIcon={ChevronRight}
        iconClassName="text-white"
        iconContainerClassName="bg-[#F4781B] rounded-full"
        size="lg"
      >
        Get Started Now
      </CustomButton>
    </Section>
  );
}
