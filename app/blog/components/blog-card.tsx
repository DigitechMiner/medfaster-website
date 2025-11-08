import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { type BlogPost } from "../constants";

// Tag color mapping with dark text and light backgrounds
const getTagColors = (tag: string) => {
  const tagLower = tag.toLowerCase();
  
  // Product/SaaS - Blue theme
  if (tagLower.includes('product') || tagLower.includes('saas')) {
    return { text: '#0369A1', bg: '#E0F2FE' }; // dark blue / light blue
  }
  // Tools - Pink theme
  if (tagLower.includes('tools') || tagLower.includes('tech')) {
    return { text: '#BE185D', bg: '#FCE7F3' }; // dark pink / light pink
  }
  // Software/Development/AI - Green theme
  if (tagLower.includes('software') || tagLower.includes('development') || tagLower.includes('ai')) {
    return { text: '#15803D', bg: '#DCFCE7' }; // dark green / light green
  }
  // Leadership/Design - Orange theme
  if (tagLower.includes('leadership') || tagLower.includes('design') || tagLower.includes('training')) {
    return { text: '#C2410C', bg: '#FFEDD5' }; // dark orange / light orange
  }
  // Management - Purple theme
  if (tagLower.includes('management') || tagLower.includes('workforce') || tagLower.includes('staffing')) {
    return { text: '#6B21A8', bg: '#F3E8FF' }; // dark purple / light purple
  }
  // Research - Indigo theme
  if (tagLower.includes('research') || tagLower.includes('science')) {
    return { text: '#3730A3', bg: '#E0E7FF' }; // dark indigo / light indigo
  }
  // Frameworks - Amber theme
  if (tagLower.includes('frameworks') || tagLower.includes('protocols')) {
    return { text: '#B45309', bg: '#FEF3C7' }; // dark amber / light amber
  }
  // Medical/Healthcare - Teal theme
  if (tagLower.includes('medical') || tagLower.includes('healthcare') || tagLower.includes('health')) {
    return { text: '#0F766E', bg: '#CCFBF1' }; // dark teal / light teal
  }
  // Innovation/Technology - Cyan theme
  if (tagLower.includes('innovation') || tagLower.includes('technology') || tagLower.includes('digital')) {
    return { text: '#0E7490', bg: '#CFFAFE' }; // dark cyan / light cyan
  }
  // Quality/Safety - Emerald theme
  if (tagLower.includes('quality') || tagLower.includes('safety') || tagLower.includes('compliance')) {
    return { text: '#047857', bg: '#D1FAE5' }; // dark emerald / light emerald
  }
  // Wellness - Rose theme
  if (tagLower.includes('wellness') || tagLower.includes('mental')) {
    return { text: '#BE123C', bg: '#FFE4E6' }; // dark rose / light rose
  }
  // Data/Analytics - Violet theme
  if (tagLower.includes('data') || tagLower.includes('analytics')) {
    return { text: '#6D28D9', bg: '#EDE9FE' }; // dark violet / light violet
  }
  // Policy/Regulations - Slate theme
  if (tagLower.includes('policy') || tagLower.includes('regulations')) {
    return { text: '#475569', bg: '#F1F5F9' }; // dark slate / light slate
  }
  
  // Default - Orange theme (MedFaster brand)
  return { text: '#C2410C', bg: '#FFEDD5' };
};

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <Paragraph size="xs" className="text-[#717680]">
          {post.author} • {post.date}
        </Paragraph>

        <Heading
          as="h3"
          size="xs"
          className="text-[#252B37] group-hover:text-[#F4781B] transition-colors"
        >
          {post.title}
        </Heading>

        <Paragraph size="xs" className="text-[#717680]">
          {post.excerpt}
        </Paragraph>

        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => {
            const colors = getTagColors(tag);
            return (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  color: colors.text,
                  backgroundColor: colors.bg,
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
