import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { type BlogPost } from "../constants";

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
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-orange-50 text-[#F4781B] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

