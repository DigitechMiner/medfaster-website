import { Fragment } from "react";
import { Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { IconChip } from "@/components/ui/icon-chip";
import type { LegalDocumentData } from "@/lib/legal/types";

const LIST_MARKER = /^[•–]\s+/;

// Renders a content string: blank-line separated paragraphs, "• "/"– " lines as lists
function LegalContent({ content }: { content: string }) {
  const blocks = content.split(/\n\s*\n/);

  return (
    <div className="space-y-4">
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n").filter((line) => line.trim() !== "");
        const intro = lines.filter((line) => !LIST_MARKER.test(line.trim()));
        const items = lines.filter((line) => LIST_MARKER.test(line.trim()));

        return (
          <Fragment key={blockIndex}>
            {intro.length > 0 && (
              <Paragraph className="text-[#717680] leading-relaxed">
                {intro.join(" ")}
              </Paragraph>
            )}
            {items.length > 0 && (
              <ul className="space-y-2 pl-1">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#F3651B] flex-shrink-0" aria-hidden="true" />
                    <Paragraph className="text-[#717680] leading-relaxed">
                      {item.trim().replace(LIST_MARKER, "")}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export function LegalDocument({ document }: { document: LegalDocumentData }) {
  const hasParts = document.parts.some((part) => part.title);

  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto py-4 md:py-8 space-y-10">
        {/* Dates */}
        <Paragraph size="sm" className="text-[#717680]">
          Effective {document.effectiveDate} · Last updated {document.lastUpdated}
        </Paragraph>

        {/* Summary */}
        {document.summary && (
          <div className="bg-[#FDF3EC] rounded-2xl p-6 md:p-8 space-y-3">
            <Heading as="h2" size="xs" className="text-[#252B37]">
              Summary
            </Heading>
            <LegalContent content={document.summary} />
          </div>
        )}

        {/* Table of contents */}
        <details className="group border border-[#E9EAEB] rounded-2xl p-5 md:p-6" open>
          <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-[#252B37]">
            On this page
            <span className="text-[#C44408] text-sm font-medium group-open:hidden">Show</span>
            <span className="text-[#C44408] text-sm font-medium hidden group-open:inline">Hide</span>
          </summary>
          <nav aria-label="Table of contents" className="mt-4 space-y-4">
            {document.parts.map((part, partIndex) => (
              <div key={partIndex} className="space-y-2">
                {part.title && (
                  <p className="text-sm font-semibold text-[#252B37]">{part.title}</p>
                )}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  {part.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="inline-block py-1 text-sm text-[#717680] hover:text-[#F3651B] transition-colors"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </details>

        {/* Sections */}
        {document.parts.map((part, partIndex) => (
          <div key={partIndex} className="space-y-10">
            {part.title && (
              <div className="space-y-2 border-t border-[#E9EAEB] pt-8">
                <Heading as="h2" size="sm" className="text-[#252B37]">
                  {part.title}
                </Heading>
                {part.intro && (
                  <Paragraph className="text-[#717680]">{part.intro}</Paragraph>
                )}
              </div>
            )}
            {part.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <Heading as={hasParts ? "h3" : "h2"} size="xs" className="text-[#252B37]">
                  {section.title}
                </Heading>
                <LegalContent content={section.content} />
              </section>
            ))}
          </div>
        ))}

        {/* Contact */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-neutral-100 rounded-2xl p-6">
          <IconChip icon={Mail} variant="solid" />
          <div>
            <Paragraph weight="semibold" className="text-[#252B37]">
              Questions about this document?
            </Paragraph>
            <Paragraph size="sm" className="text-[#717680]">
              Contact our team at{" "}
              <a href="mailto:support@keraeva.com" className="text-[#F3651B] font-medium hover:underline">
                support@keraeva.com
              </a>
              .
            </Paragraph>
          </div>
        </div>
      </div>
    </Section>
  );
}
