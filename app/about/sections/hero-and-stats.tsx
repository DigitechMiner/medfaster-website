import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";

// Hero Section
export function AboutHeroSection() {
  return (
    <Section padding={false} backgroundColor="!bg-neutral-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-stretch">
        {/* Left Column - Image (2 grid columns) */}
        <div className="relative w-full aspect-[16/10] rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden shadow-md lg:col-span-2">
          <Image
            src="/images/hero/hero-image-2.png"
            alt="MedFaster Team"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Column - Orange Card (1 grid column) */}
        <div
          className="relative bg-[#F4781B] rounded-3xl p-6 text-white shadow-lg flex flex-col justify-end lg:col-span-1 overflow-hidden"
          style={{
            backgroundImage: "url('/images/patterns/pattern-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            opacity: 1,
          }}
        >
          <div className="relative z-10 space-y-4" style={{ opacity: 1 }}>
            {/* Heading */}
            <h2 className="text-l font-bold leading-tight">
              The Future of Healthcare Staffing is Here.
            </h2>

            {/* Description */}
            <p className="text-sm font-light lg:text-sm leading-relaxed opacity-95">
              Welcome to Medfaster. We are Canada&apos;s AI-powered platform built to
              connect leading hospitals and clinics with verified, hire-ready
              healthcare professionals. We&apos;re rebuilding the foundation of
              healthcare staffing—making it faster, smarter, and more reliable.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Stats Section
export function StatsSection() {
  const STATS = [
    {
      number: "10,000+",
      label: "Verified Professionals",
      description:
        "A growing, active network of pre-screened, credentialed candidates.",
      icon: "/images/icons/people.svg",
    },
    {
      number: "90%",
      label: "Faster Time-to-Hire",
      description: "",
    },
    {
      number: "100%",
      label: "Verified Credentials",
      description: "",
    },
  ];

  return (
    <Section>
      {/* Header Section */}
      <div className="mb-16 lg:mb-24">
        <Heading
          as="h2"
          size="md"
          weight="medium"
          className="text-[#252B37] mb-6"
        >
          Where <span className="text-[#F4781B]">AI-Powered</span> Hiring Meets
          Human-Centric Care.
        </Heading>
        <ResponsiveParagraph
          size="lg"
          className="text-[#717680] max-w-full leading-relaxed"
        >
          Medfaster was founded by healthcare and tech veterans to fix staffing
          friction. Our platform bridges the gap between hospitals needing staff
          and professionals seeking good-fit jobs by automating verification,
          matching, and scheduling.
        </ResponsiveParagraph>
      </div>

      {/* Stats Grid with Horizontal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-stretch">
        {/* Left Box */}
        <div className="border border-gray-200 rounded-lg p-8 lg:p-10 flex flex-col justify-between">
          {STATS[0].icon && (
            <div className="mb-6">
              <Image
                src={STATS[0].icon}
                alt={STATS[0].label}
                width={64}
                height={64}
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
            </div>
          )}
          <div>
            <Heading
              as="h3"
              size="xl"
              weight="normal"
              className="text-[#252B37] mb-4"
            >
              {STATS[0].number}
            </Heading>
            <div className="grid grid-cols-2">
            <Paragraph
              size="lg"
              className="text-[#252B37] mb-6"
            >
              {STATS[0].label}
            </Paragraph>
            {STATS[0].description && (
              <ResponsiveParagraph
                size="base"
                className="text-[#717680] leading-relaxed"
              >
                {STATS[0].description}
              </ResponsiveParagraph>
            )}
            </div>
          </div>
        </div>

        {/* Right Column - Two Stacked Boxes */}
        <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-8 w-full h-full">
          {/* 90% Box */}
          <div className="border border-gray-200 rounded-lg p-6 lg:p-8 flex flex-col flex-1">
            <Heading
              as="h3"
              size="lg"
              weight="normal"
              className="text-[#252B37] mb-2"
            >
              {STATS[1].number}
            </Heading>
            <ResponsiveParagraph
              size="base"
              className="text-[#252B37]"
            >
              {STATS[1].label}
            </ResponsiveParagraph>
          </div>

          {/* 100% Box */}
          <div className="border border-gray-200 rounded-lg p-6 lg:p-8 flex flex-col flex-1">
            <Heading
              as="h3"
              size="lg"
              weight="normal"
              className="text-[#252B37] mb-2"
            >
              {STATS[2].number}
            </Heading>
            <ResponsiveParagraph
              size="base"
              className="text-[#252B37]"
            >
              {STATS[2].label}
            </ResponsiveParagraph>
          </div>
        </div>
      </div>
    </Section>
  );
}
