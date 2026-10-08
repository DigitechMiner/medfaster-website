"use client";

import { useState } from "react";
import Image from "next/image";
import { submitLead } from "@/utils/leads";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await submitLead({ type: "newsletter", email, audience: "coming-soon" });
    setIsSubmitting(false);
    setMessage({ ok: result.ok, text: result.ok ? "Thanks! We'll let you know when it's ready." : result.message });
    if (result.ok) setEmail("");
  };

  return (
    <div className="m-4 md:m-8 lg:m-16 ">
      <Section className="!bg-neutral-100 flex-1 flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/features/coming-soon.svg"
              alt="Coming Soon"
              width={300}
              height={250}
              className="w-64 h-56 object-contain"
              priority
            />
          </div>

          <Heading as="h1" size="lg" className="text-[#252B37]">
            Stay Tuned
          </Heading>

          <ResponsiveParagraph
            size="base"
            className="text-[#717680] leading-relaxed"
          >
            Get the latest updates on the KeRaeva platform, exclusive
            invites, and early access for healthcare professionals and
            recruiters in Canada.
          </ResponsiveParagraph>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-12 mb-6"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              placeholder="Enter your email address"
              disabled={isSubmitting}
              className="w-full sm:flex-1 max-w-md px-4 py-3 border border-gray-300 text-[#252B37] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F3651B] bg-white !rounded-full"
            />
            <CustomButton
              type="submit"
              rightIcon={ArrowRight}
              size="md"
              disabled={isSubmitting}
              className="w-full sm:w-auto justify-center my-0"
            >
              {isSubmitting ? "Sending..." : "Notify Me"}
            </CustomButton>
          </form>
          {message && (
            <Paragraph size="sm" className={message.ok ? "text-green-600" : "text-red-600"}>
              <span role="status">{message.text}</span>
            </Paragraph>
          )}

          <Paragraph size="sm" className="text-[#717680]">
            Sign up and we&apos;ll email you when it launches.
          </Paragraph>
        </div>
      </Section>
    </div>
  );
}

