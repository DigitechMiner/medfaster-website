"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ResponsiveParagraph, Paragraph } from "@/components/ui/paragraph";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    quote: "Medfaster's dashboard is a game-changer. We filled three critical nursing roles in one day with 100% verified candidates. It saved our team countless hours.",
    author: "David L.",
    role: "HR Manager, Vancouver General Hospital",
    company: "Canadian Hospital",
    companyLogo: "/images/company/canadian-health.png",
    avatar: "/images/testimonials/michael-k.png",
  },
  {
    id: 2,
    rating: 5,
    quote: "The 'Trust Layer' is what sold us. Knowing every candidate is 100% verified before the interview saves us critical time and eliminates compliance headaches.",
    author: "Sarah Chen",
    role: "Clinical Director, Trillium Health Partners",
    company: "Trillium",
    companyLogo: "/images/company/canadian-specialist-hospital.png",
    avatar: "/images/testimonials/sarah-m.png",
  },
  {
    id: 3,
    rating: 4,
    quote: "I love the flexibility. MedFaster gave me control over my schedule, getting verified shifts that work with my family.",
    author: "Marcus Cole",
    role: "Licensed Practical Nurse",
    company: "Partner Hospital",
    companyLogo: "/images/company/medical-canada.png",
    avatar: "/images/testimonials/michael-k.png",
  },
  {
    id: 4,
    rating: 3,
    quote: "The AI matching is incredibly accurate. I stopped wasting time scrolling through jobs that weren't a fit. I found my current full-time role in just 48 hours.",
    author: "Priya S.",
    role: "Registered Nurse (RN)",
    company: "Canadian Hospital",
    companyLogo: "/images/company/canadian-health.png",
    avatar: "/images/testimonials/sarah-m.png",
  },
  {
    id: 5,
    rating: 5,
    quote: "The AI matching is incredibly accurate. I stopped wasting time scrolling through jobs that weren't a fit. I found my current full-time role in just 48 hours.",
    author: "Amelie Dubois",
    role: "Respiratory Therapist (RRT)",
    company: "Partner",
    companyLogo: "/images/company/canadian-red-cross.png",
    avatar: "/images/testimonials/michael-k.png",
  },
  {
    id: 6,
    rating: 5,
    quote: "We had an urgent, last-minute need for three night shift nurses. Through MedFaster, we had all three positions confirmed with verified staff in under an hour.",
    author: "Tom Bishop",
    role: "Staffing Coordinator",
    company: "Partner Hospital",
    companyLogo: "/images/company/medical-canada.png",
    avatar: "/images/testimonials/sarah-m.png",
  },
];

const FAQS = [
  {
    question: "How does MedFaster's AI matching work?",
    answer:
      "Our AI analyzes professional profiles, skills, experience, and preferences to match them with opportunities that fit their career goals and lifestyle.",
  },
  {
    question: "Is my data secure on MedFaster?",
    answer:
      "Yes, we're fully HIPAA and GDPR compliant. Your sensitive information is encrypted and protected with enterprise-level security.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "With our AI-powered matching, many professionals get matched within days, compared to weeks with traditional methods.",
  },
  {
    question: "Can I update my profile anytime?",
    answer:
      "Absolutely! You can update your profile, preferences, and availability at any time through your dashboard.",
  },
  {
    question: "What if I have issues with a placement?",
    answer:
      "We have a dedicated support team available 24/7 to help resolve any issues or concerns with your placement.",
  },
];

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="bg-neutral-100 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow max-w-md flex-shrink-0">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < testimonial.rating ? "text-[#F4781B]" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <Paragraph size="sm" className="text-[#252B37] mb-6 leading-relaxed line-clamp-4">
        &quot;{testimonial.quote}&quot;
      </Paragraph>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        <div className="flex-1 min-w-0">
          <Paragraph size="sm" weight="semibold" className="text-[#252B37] truncate">
            {testimonial.author}
          </Paragraph>
          <Paragraph size="xs" className="text-[#717680] truncate">
            {testimonial.role}
          </Paragraph>
        </div>

        {/* Company Logo */}
        {testimonial.companyLogo && (
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image
              src={testimonial.companyLogo}
              alt={testimonial.company}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Testimonials Slider Section
export function TestimonialsSection() {
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  
  // max-w-md is 28rem = 448px, 50% is 224px
  const cardWidthOffset = 224;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset1((prev) => (prev + 1) % 360);
      setOffset2((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const firstRowTestimonials = TESTIMONIALS.filter((_, i) => i % 2 === 0);
  const secondRowTestimonials = TESTIMONIALS.filter((_, i) => i % 2 === 1);

  return (
    <Section className="bg-white py-12">
      <div className="space-y-6 px-4">
        {/* First Row - with gradient fade effect */}
        <div className="relative group">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(-${offset1}px)`,
              }}
            >
              {/* Original items */}
              {firstRowTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
              {/* Duplicate for infinite loop */}
              {firstRowTestimonials.map((testimonial) => (
                <TestimonialCard key={`${testimonial.id}-dup1`} testimonial={testimonial} />
              ))}
              {/* Second duplicate for seamless loop */}
              {firstRowTestimonials.map((testimonial) => (
                <TestimonialCard key={`${testimonial.id}-dup2`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - with gradient fade effect */}
        <div className="relative group">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(-${offset2 + cardWidthOffset}px)`,
              }}
            >
              {/* Original items */}
              {secondRowTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
              {/* Duplicate for infinite loop */}
              {secondRowTestimonials.map((testimonial) => (
                <TestimonialCard key={`${testimonial.id}-dup1`} testimonial={testimonial} />
              ))}
              {/* Second duplicate for seamless loop */}
              {secondRowTestimonials.map((testimonial) => (
                <TestimonialCard key={`${testimonial.id}-dup2`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// About Testimonials Wrapper
export function AboutTestimonialsSection() {
  return (
    <Section>

        <Heading as="h2" size="md" className="text-[#252B37] mb-4 text-center">
          What Our <span className="text-[#F4781B]">Professionals</span> Are Saying
        </Heading>
        <ResponsiveParagraph
          size="sm"
          className="text-[#717680] text-center max-w-2xl mx-auto mb-12"
        >
          Real results from healthcare partners who have transformed their hiring process. See how we help them save time, ensure compliance, and hire top-tier talent.
        </ResponsiveParagraph>

        <TestimonialsSection />

    </Section>
  );
}

// FAQ Item Component
function FAQItemComponent({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between hover:text-[#F4781B] transition-colors text-left"
      >
        <Paragraph size="base" weight="semibold" className="text-[#252B37]">
          {item.question}
        </Paragraph>
        <ChevronDown
          className={`w-5 h-5 text-[#F4781B] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="pb-4 pl-4">
          <Paragraph size="sm" className="text-[#717680] leading-relaxed">
            {item.answer}
          </Paragraph>
        </div>
      )}
    </div>
  );
}

// FAQ Section
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section >
     <Heading as="h2" size="md" className="text-[#252B37] mb-4">
          Have <span className="text-[#F4781B]">Questions?</span> We Have Answers
        </Heading>
        <ResponsiveParagraph
          size="sm"
          className="text-[#717680] max-w-2xl mb-12"
        >
          Before you reach out, see if we’ve already answered your question.<br />Our FAQ is fast, clear, and easy to follow.
        </ResponsiveParagraph>

        <div className="space-y-4 mt-12">
          {FAQS.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

    </Section>
  );
}
