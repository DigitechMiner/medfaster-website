"use client";

import { useState } from "react";
import Image from "@/components/ui/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = TESTIMONIALS;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev - 2 < 0 ? testimonials.length - 2 : prev - 2
    );
  };

  return (
    <Section>
      <div className="max-w-7xl mx-auto gap-2 md:gap-4 lg:gap-6 xl:gap-8">
        {/* Header */}
        <div>
          <Heading as="h2" size="md" className="text-[#252B37] mb-4">
            What Our Professionals Are Saying About{" "} <br />
            <span className="text-[#F3651B]">KeRaeva</span>
          </Heading>
          <ResponsiveParagraph size="sm" className="text-[#717680] max-w-3xl">
            Real experiences from nurses, specialists and therapists using
            KeRaeva to find roles and shifts that fit their lives.
          </ResponsiveParagraph>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          {testimonials
            .slice(currentIndex, currentIndex + 2)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white  rounded-2xl p-8  flex flex-col"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'text-[#F3651B]' 
                          : 'text-gray-200'
                      }`}
                      fill="currentColor"
                      aria-hidden="true" 
                    />
                  ))}
                </div>

                {/* Review Text - flex-1 pushes user info to bottom */}
                <ResponsiveParagraph size="base" className="text-[#252B37] mb-6 leading-relaxed flex-1">
                  &ldquo;{testimonial.review}&rdquo;
                </ResponsiveParagraph>

                {/* User Info - stays at bottom */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Heading as="h4" size="xs" className="text-[#252B37]">
                      {testimonial.name}
                    </Heading>
                    <Paragraph size="sm" className="text-[#717680]">{testimonial.role}</Paragraph>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border-2 border-neutral-100 flex items-center justify-center hover:bg-[#F3651B] hover:text-white transition-all group"
            aria-label="Previous testimonials"
          >
            <ArrowLeft className="w-6 h-6 text-[#F3651B] group-hover:text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border-2 border-neutral-100 flex items-center justify-center hover:bg-[#F3651B] hover:text-white transition-all group"
            aria-label="Next testimonials"
          >
            <ArrowRight className="w-6 h-6 text-[#F3651B] group-hover:text-white" />
          </button>
        </div>
      </div>
    </Section>
  );
}
