import { Paragraph } from "@/components/ui/paragraph";
import Image from "@/components/ui/image";
import { Twitter, Linkedin, ArrowUpRight } from "lucide-react";

interface TeamMemberCardProps {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image?: string | null;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

// Only link to actual profiles, never to a network's generic home page
const isProfileUrl = (url?: string) =>
  Boolean(url && /^https:\/\/(www\.)?(linkedin\.com\/(in|company)\/|(twitter|x)\.com\/)[^/?#]+/.test(url));

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

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
      <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-3xl overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-3xl"
          />
        ) : (
          // No genuine photo yet: initials on the brand orange panel
          <div
            className="absolute inset-0 flex items-start justify-center pt-[22%] bg-[#F3651B]"
            style={{
              backgroundImage: "url(/images/patterns/orange-pattern-1.webp)",
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
            }}
            aria-hidden="true"
          >
            <span className="text-white text-7xl font-medium tracking-wide">{initialsOf(name)}</span>
          </div>
        )}

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
              {bio && (
                <Paragraph size="xs" className="text-white/80 leading-relaxed">
                  {bio}
                </Paragraph>
              )}

              {/* Social Icons: only real profile links */}
              {(isProfileUrl(social?.twitter) || isProfileUrl(social?.linkedin)) && (
                <div className="flex gap-3 pt-2">
                  {isProfileUrl(social?.twitter) && (
                    <a
                      href={social!.twitter}
                      className="inline-flex p-1.5 -m-1.5 text-white hover:text-white/70 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on X (Twitter)`}
                    >
                      <Twitter className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  )}
                  {isProfileUrl(social?.linkedin) && (
                    <a
                      href={social!.linkedin}
                      className="inline-flex p-1.5 -m-1.5 text-white hover:text-white/70 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

