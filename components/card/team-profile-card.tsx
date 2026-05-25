"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Twitter, User } from "lucide-react";

type TeamProfileCardProps = {
  id: number;
  name: string;
  role: string;
  image?: string | null;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
};

export function TeamProfileCard({
  id,
  name,
  role,
  image,
  social,
}: TeamProfileCardProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [image]);

  const showPlaceholder = !image || imgError;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#F8F8F8] shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-[280px] sm:h-[320px] lg:h-[340px] xl:h-[360px]">
        {showPlaceholder ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#F3F4F6] via-[#EAECEF] to-[#D9DDE3]">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-md backdrop-blur sm:h-28 sm:w-28">
              <User className="h-10 w-10 text-[#98A2B3] sm:h-12 sm:w-12" />
            </div>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      </div>

      <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 px-4 py-4 shadow-md backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:px-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold leading-tight text-[#252B37] sm:text-lg">
              {name}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-[#667085] sm:text-[15px]">
              {role}
            </p>

           
          </div>

          <Link
            href={`/team/${id}`}
            aria-label={`View ${name} profile`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3651B] text-white transition hover:scale-105 hover:bg-[#E85C0F]"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}