// components/card/team-profile-card.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type TeamProfileCardProps = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export function TeamProfileCard({ id, name, role, image }: TeamProfileCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[340px] md:h-[380px]">
      {/* Full-bleed photo */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      {/* Floating content box at bottom */}
      <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl px-4 py-7 shadow-md flex items-start justify-between gap-2">
        <div className="flex flex-col gap-3.5">
          <span className="text-[#252B37] font-semibold text-s leading-tight">
            {name}
          </span>
          <span className="text-[#252B37] text-s">{role}</span>
        </div>

        {/* Arrow link */}
        <Link
          href={`/team/${id}`}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center -mt-1"
        >
          <ArrowUpRight className="w-4 h-4 group-hover/arrow:text-white " />
        </Link>
      </div>
    </div>
  );
}
