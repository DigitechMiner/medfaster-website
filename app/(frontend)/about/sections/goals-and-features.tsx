import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { AccentText } from "@/components/ui/accent-text";
import type { AboutContent } from "@/content/pages/about";

// Why KeRaeva: numbered circles joined by a connector line
export function WhyKeRaevaSection({ content }: { content: AboutContent["whyKeRaeva"] }) {
  return (
    <Section className="bg-gray-50">
      <Heading as="h2" size="md" className="text-[#252B37] mb-12">
        <AccentText text={content.heading} />
      </Heading>

      <div className="relative">
        {/* Connector line - hidden on mobile, stops at last circle */}
        <div className="hidden lg:block absolute top-8 left-8 right-[calc(25%-2rem)] h-0.5 bg-gray-300 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {content.points.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg ${
                  index % 2 === 1 ? "bg-[#F3651B] text-white" : "bg-gray-200 text-[#717680]"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-2">
                <Paragraph size="lg" weight="semibold" className="text-[#252B37]">
                  {item.title}
                </Paragraph>
                <Paragraph size="sm" className="text-[#717680] leading-relaxed">
                  {item.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
