import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";
import { X, Linkedin, ArrowUpRight } from "lucide-react";

interface TeamMemberCardProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export function TeamMemberCard({
  name,
  role,
  bio,
  image,
  social,
}: TeamMemberCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-3xl"
          quality={100}
        />

        {/* Floating Frosted Glass Card */}
        <div className="absolute inset-0 flex items-end justify-center p-6 rounded-3xl">
          <div className="w-full bg-white/20 backdrop-blur-md bg-gradient-to-b from-white/30 to-white/10 rounded-3xl p-6 border border-white/40 shadow-lg">
            {/* Content Inside Card */}
            <div className="space-y-4">
              {/* Name and Arrow */}
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <Paragraph
                    size="base"
                    weight="bold"
                    className="text-white leading-tight"
                  >
                    {name}
                  </Paragraph>
                  <Paragraph size="sm" weight="semibold" className="text-white/90 mt-1">
                    {role}
                  </Paragraph>
                </div>

                {/* Arrow icon */}
                <ArrowUpRight className="w-5 h-5 text-white flex-shrink-0 mt-1" strokeWidth={2.5} />
              </div>

              {/* Bio text */}
              <Paragraph size="xs" className="text-white/80 leading-relaxed">
                {bio}
              </Paragraph>

              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                {/* Twitter/X */}
                <a
                  href={social?.twitter || "#"}
                  className="text-white hover:text-white/70 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href={social?.linkedin || "#"}
                  className="text-white hover:text-white/70 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

