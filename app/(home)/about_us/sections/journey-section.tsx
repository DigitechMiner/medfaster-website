import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";

const TIMELINE = [
  {
    year: "2021",
    title: "The Question",
    description:
      "MedFaster began with a simple question: 'Why should healthcare still struggle with time?' Founded by doctors and technologists, we saw how traditional staffing delayed care.",
  },
  {
    year: "2022",
    title: "The Concept",
    description:
      "What started as a concept to fill last-minute hospital shifts and test our AI models.",
  },
  {
    year: "2024",
    title: "The Ecosystem",
    description:
      "Evolved into a full-scale digital ecosystem that merges AI recruitment, real-time workforce matching, and patient access.",
  },
  {
    year: "Today",
    title: "The Principle",
    description:
      "From prototype to a nationwide network, our growth is built on one principle: Speed saves lives.",
  },
];

export function JourneySection() {
  return (
    <Section
      padding={false}
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #FFF5F0 100%)",
      }}
    >
      <div className="w-full mx-auto px-6 py-12 md:py-16 lg:py-20 relative">
        {/* Heading */}
        <Heading as="h2" size="md" className="text-[#252B37] mb-16 ml-8">
          Our <span className="text-[#F4781B]">Journey</span>
        </Heading>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative pb-32">
          {/* Top Row: 4 Items */}
          <div className="flex items-center gap-1 mb-24">
            {/* Lifeline 1 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-18 h-10 flex-shrink-0 object-contain"
              quality={100}
            />

            <div className="flex-1 max-w-sm p-5 rounded-lg bg-white border border-gray-200">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2"
              >
                {TIMELINE[0].title} ({TIMELINE[0].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed">
                {TIMELINE[0].description}
              </Paragraph>
            </div>

            {/* Lifeline 2 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain"
              quality={100}
            />

            <div className="flex-1 max-w-sm p-5 rounded-lg bg-white border border-gray-200">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2"
              >
                {TIMELINE[1].title} ({TIMELINE[1].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed">
                {TIMELINE[1].description}
              </Paragraph>
            </div>

            {/* Lifeline 3 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain"
              quality={100}
            />

            <div className="flex-1 max-w-sm p-5 rounded-lg bg-white border border-gray-200">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2"
              >
                {TIMELINE[2].title} ({TIMELINE[2].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed">
                {TIMELINE[2].description}
              </Paragraph>
            </div>

            {/* Lifeline 4 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain"
              quality={100}
            />

            <div className="flex-1 max-w-sm p-5 rounded-lg bg-white border border-gray-200">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2"
              >
                {TIMELINE[3].title} ({TIMELINE[3].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed">
                {TIMELINE[3].description}
              </Paragraph>
            </div>
          </div>

          {/* Bottom Row: 3 Items - shifted right */}
          <div className="flex items-center absolute right-50">
            <div className="flex-1 max-w-3xs p-5 rounded-lg bg-white border border-gray-200">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2"
              >
                {TIMELINE[0].title} ({TIMELINE[0].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed">
                {TIMELINE[0].description}
              </Paragraph>
            </div>

            {/* Lifeline 2 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain"
              quality={100}
            />

            <div className="flex-1 max-w-3xs p-5 rounded-lg bg-white border border-gray-200">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2"
              >
                {TIMELINE[1].title} ({TIMELINE[1].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed">
                {TIMELINE[1].description}
              </Paragraph>
            </div>

            {/* Lifeline 3 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain"
              quality={100}
            />

            <div className="flex-1 max-w-3xs p-5 rounded-lg bg-white border border-gray-200">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2"
              >
                {TIMELINE[2].title} ({TIMELINE[2].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed">
                {TIMELINE[2].description}
              </Paragraph>
            </div>
          </div>

          {/* Vertical Arrow - Right side */}
          <div className="absolute right-29 top-1/5 h-80 flex items-start pointer-events-none">
            <Image
              src="/images/patterns/vertical.svg"
              alt="vertical arrow"
              width={50}
              height={300}
              className="w-21 h-80 object-contain"
              quality={100}
            />
          </div>
        </div>

        {/* Tablet & Mobile: Simple Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {TIMELINE.map((item) => (
            <div
              key={item.year}
              className="p-6 rounded-lg bg-white border border-gray-200"
            >
              <Paragraph size="sm" weight="semibold" className="text-[#252B37] mb-3">
                {item.title} ({item.year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed">
                {item.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
