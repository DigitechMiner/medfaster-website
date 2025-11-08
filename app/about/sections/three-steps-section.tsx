import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    iconSrc: "/images/icons/create-profile.svg",
    title: "Create Your Profile",
    description:
      "Upload your resume and certificates, and let our AI auto-fill your details instantly.",
  },
  {
    iconSrc: "/images/icons/verify-screening.svg",
    title: "Verify & Pre-Screen",
    description:
      "Get your credentials verified and complete a short AI interview to showcase your skills to top employers.",
  },
  {
    iconSrc: "/images/icons/start-working.svg",
    title: "Start Working",
    description:
      "Apply for nearby shifts or full-time roles and get paid directly and reliably through the platform.",
  },
];

export function ThreeStepsSection() {
  return (
    <Section
      backgroundColor="bg-[#F4781B]"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/patterns/orange-pattern-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative">
        {/* Top Text Section */}
        <div className=" mb-8">
          <Heading className="text-white mb-4">
            Get Your Next Healthcare Job in 3 Easy Steps
          </Heading>
          <ResponsiveParagraph size="base" className="text-white max-w-2xl">
            Our AI-driven, step-by-step approach to get you verified and hired,
            faster.
          </ResponsiveParagraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-left">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/hero/get-hired.png"
                alt="Healthcare professional assisting patient"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="order-1 lg:order-2 text-white">
            <div className="space-y-6 mb-8">
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-white/20 pb-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-opacity-20 rounded-full flex items-center justify-center">
                    {/* Use Image component to render icon */}
                    <Image
                      src={step.iconSrc}
                      alt={step.title + " icon"}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <Heading
                      as="h3"
                      size="xs"
                      weight="medium"
                      className="text-white mb-2"
                    >
                      {step.title}
                    </Heading>
                    <ResponsiveParagraph
                      size="sm"
                      className="text-white text-opacity-90 leading-relaxed"
                    >
                      {step.description}
                    </ResponsiveParagraph>
                  </div>
                </div>
              ))}
            </div>

            <CustomButton
              className="bg-white text-black hover:bg-gray-100"
              rightIcon={ArrowRight}
              iconClassName="text-white"
              iconContainerClassName="bg-[#F4781B]"
            >
              Get Started
            </CustomButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
