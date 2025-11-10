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
          background: "linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(244,120,27,0.3) 100%)",
      }}
    >
      <div className="w-full mx-auto px-6 py-12 md:py-16 lg:py-16 relative">
        {/* Heading - Unchanged */}
        <Heading as="h2" size="md" className="text-[#252B37] mb-32 ml-8">
          Our <span className="text-[#F4781B]">Journey</span>
        </Heading>

        {/* Desktop Layout - Now 80% width */}
        <div className="hidden lg:block relative w-4/5  ml-30">
          {/* Top Row: 4 Cards */}
          <div className="flex items-start justify-start mb-8 -ml-7 scale-120">
            {/* Lifeline before Card 1 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain mt-8"
              quality={100}
            />

            {/* Card 1 */}
            <div className="p-5 rounded-lg bg-white border border-gray-200 w-1/6">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2 whitespace-nowrap"
              >
                {TIMELINE[0].title} ({TIMELINE[0].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed overflow-hidden">
                {TIMELINE[0].description}
              </Paragraph>
            </div>

            {/* Lifeline 1 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain mt-8"
              quality={100}
            />

            {/* Card 2 */}
            <div className="p-3 rounded-lg bg-white border border-gray-200 w-1/6">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2 whitespace-nowrap"
              >
                {TIMELINE[1].title} ({TIMELINE[1].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed overflow-hidden">
                {TIMELINE[1].description}
              </Paragraph>
            </div>

            {/* Lifeline 2 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain mt-8"
              quality={100}
            />

            {/* Card 3 */}
            <div className="p-4 rounded-lg bg-white border border-gray-200 w-1/6">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2 whitespace-nowrap"
              >
                {TIMELINE[2].title} ({TIMELINE[2].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed overflow-hidden">
                {TIMELINE[2].description}
              </Paragraph>
            </div>

            {/* Lifeline 3 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain mt-8"
              quality={100}
            />

            {/* Card 4 */}
            <div className="p-3 rounded-lg bg-white border border-gray-200 w-1/6">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2 whitespace-nowrap"
              >
                {TIMELINE[3].title} ({TIMELINE[3].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed overflow-hidden">
                {TIMELINE[3].description}
              </Paragraph>
            </div>
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="flex items-start justify-start mt-32 ml-18 scale-110">
            {/* Card 5 */}
            <div className="p-5 rounded-lg bg-white border border-gray-200 w-1/5">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2 whitespace-nowrap"
              >
                {TIMELINE[4]?.title || TIMELINE[0].title} ({TIMELINE[4]?.year || TIMELINE[0].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed overflow-hidden">
                {TIMELINE[4]?.description || TIMELINE[0].description}
              </Paragraph>
            </div>

            {/* Lifeline 4 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain mt-8"
              quality={100}
            />

            {/* Card 6 */}
            <div className="p-5 rounded-lg bg-white border border-gray-200 w-1/4">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2 whitespace-nowrap"
              >
                {TIMELINE[5]?.title || TIMELINE[1].title} ({TIMELINE[5]?.year || TIMELINE[1].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed overflow-hidden">
                {TIMELINE[5]?.description || TIMELINE[1].description}
              </Paragraph>
            </div>

            {/* Lifeline 5 */}
            <Image
              src="/images/patterns/lifeline.svg"
              alt="lifeline"
              width={40}
              height={25}
              className="w-16 h-8 flex-shrink-0 object-contain mt-8"
              quality={100}
            />

            {/* Card 7 */}
            <div className="p-5 rounded-lg bg-white border border-gray-200 w-1/5">
              <Paragraph
                size="sm"
                weight="semibold"
                className="text-[#252B37] mb-2 whitespace-nowrap"
              >
                {TIMELINE[6]?.title || TIMELINE[2].title} ({TIMELINE[6]?.year || TIMELINE[2].year})
              </Paragraph>
              <Paragraph size="xs" className="text-[#717680] leading-relaxed overflow-hidden">
                {TIMELINE[6]?.description || TIMELINE[2].description}
              </Paragraph>
            </div>

            {/* Vertical Connector after Card 7 */}
            <Image
              src="/images/patterns/vertical.svg"
              alt="vertical arrow"
              width={50}
              height={150}
              className="w-40 h-60 object-contain -mt-47 -ml-6"
              quality={100}
            />
          </div>
        </div>

        {/* Tablet & Mobile: Simple Grid - Also 80% width */}
        <div className="lg:hidden w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
