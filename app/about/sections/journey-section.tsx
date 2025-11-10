import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { TimelineCard } from "@/components/card/timeline-card";

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
  {
    year: "2026",
    title: "The Question",
    description:
      "MedFaster began with a simple question: 'Why should healthcare still struggle with time?' Founded by doctors and technologists, we saw how traditional staffing delayed care.",
  },
  {
    year: "2027",
    title: "The Concept",
    description:
      "What started as a concept to fill last-minute hospital shifts and test our AI models.",
  },
  {
    year: "2028",
    title: "The Ecosystem",
    description:
      "Evolved into a full-scale digital ecosystem that merges AI recruitment, real-time workforce matching, and patient access.",
  },
];

// Reusable Heartbeat Line Component
const HeartbeatLine = () => (
  <div
    className="flex-1 min-w-8 xl:min-w-12 2xl:min-w-16 h-4"
    style={{
      backgroundImage: "url(/images/patterns/lifeline.svg)",
      backgroundRepeat: "repeat-x",
      backgroundSize: "auto 100%",
      backgroundPosition: "center",
    }}
  />
);

export function JourneySection() {
  return (
    <Section
      padding={false}
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(244,120,27,0.3) 100%)",
      }}
    >
      <Heading
        as="h2"
        size="md"
        className="text-[#252B37] p-4 md:p-8 lg:p-16"
      >
        Our <span className="text-[#F4781B]">Journey</span>
      </Heading>
      <div className="relative p-4 md:py-8 lg:py-16 md:px-4 lg:px-8 overflow-hidden">
        {/* Heading - Unchanged */}

        {/* Desktop Layout - Now 80% width */}
        <div className="hidden lg:block relative w-4/5 ml-30">
          {/* Top Row: 4 Cards in Straight Line */}
          <div className="flex items-center justify-start mb-8 -ml-7 scale-120 relative">
            <HeartbeatLine />
            {TIMELINE.slice(0, 4).map((item, index) => (
              <div key={index} className="contents">
                <TimelineCard
                  title={item.title}
                  year={item.year}
                  description={item.description}
                  variant="desktop"
                  showConnector={index === 3}
                  connectorHeight={
                    index === 3 ? "calc(8rem + 128px)" : undefined
                  }
                  className={
                    index === 0
                      ? "relative"
                      : index === 3
                      ? "relative z-20"
                      : undefined
                  }
                />
                {index < 3 && <HeartbeatLine />}
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Cards Starting from Right */}
          <div className="flex items-center justify-end mt-32 mr-0 scale-110 relative">
            {TIMELINE.slice(4, 7)
              .reverse()
              .map((item, index) => (
                <div key={index} className="contents">
                  <TimelineCard
                    title={item.title}
                    year={item.year}
                    description={item.description}
                    variant="desktop"
                    className={index === 2 ? "relative" : undefined}
                  />
                  {index < 2 && <HeartbeatLine />}
                </div>
              ))}
          </div>
        </div>

        {/* Tablet & Mobile: Vertical column with one card per row, all 7 cards */}
        <div className="lg:hidden w-full mx-auto max-w-md">
          {TIMELINE.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center relative ${
                index < TIMELINE.length - 1 ? "mb-6" : ""
              }`}
            >
              <TimelineCard
                title={item.title}
                year={item.year}
                description={item.description}
                variant="mobile"
                showConnector={index < TIMELINE.length - 1}
                connectorHeight="3rem"
                className="relative z-20"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
