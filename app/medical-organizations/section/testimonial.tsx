"use client";

import { useState } from "react";
import Image from "@/components/ui/image";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Paragraph, ResponsiveParagraph } from "@/components/ui/paragraph";
import { testimonials as landingTestimonials } from "@/utils/constant/landingPage";

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = landingTestimonials;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <Section>
      {/* Header */}
      <div className="mb-8 md:mb-12 lg:mb-16">
        <Heading className="text-[#252B37] mb-4">
          What Healthcare Teams Say About{" "}
          <span className="text-[#F3651B]">KeRaeva</span>
        </Heading>
        <Paragraph className="text-[#717680] max-w-3xl">
          Feedback from healthcare teams using KeRaeva to hire verified
          professionals, simplify compliance checks and fill shifts faster.
        </Paragraph>
      </div>

      {/* Testimonial Card */}
      <div className="relative p-4 md:p-8 lg:p-16 ">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Left Side - Quote Icon */}
          <div className="flex-shrink-0 w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16">
            <Quote className="w-full h-full text-[#F3651B]" fill="currentColor" strokeWidth={0} aria-hidden="true" />
          </div>

          {/* Right Side - Stars, Description, Author */}
          <div className="flex-1">
            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < currentTestimonial.rating ? "text-[#F3651B]" : "text-gray-200"
                  }`}
                      fill="currentColor"
                      aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote Text */}
            <ResponsiveParagraph size="lg" className=" text-[#252B37] leading-relaxed mb-8">
              {currentTestimonial.quote}
            </ResponsiveParagraph>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <Paragraph className="text-lg font-semibold text-[#252B37]">
                  {currentTestimonial.name}
                </Paragraph>
                <Paragraph className="text-sm text-[#717680]">
                  {currentTestimonial.role}
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border-2 border-neutral-100 flex items-center justify-center hover:bg-[#F3651B] hover:text-white transition-all group"
          aria-label="Previous testimonials"
        >
          <ArrowLeft className="w-6 h-6 text-[#F3651B] group-hover:text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border-2 border-neutral-100 flex items-center justify-center hover:bg-[#F3651B] hover:text-white transition-all group"
          aria-label="Next testimonials"
        >
          <ArrowRight className="w-6 h-6 text-[#F3651B] group-hover:text-white" />
        </button>
      </div>
    </Section>
  );
}
