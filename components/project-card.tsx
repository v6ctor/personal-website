"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface ProjectCardProps {
  title: string;
  href: string;
  dates: string;
  slugs: readonly string[];
  description: string;
  link: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
  video?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  dates,
  slugs,
  description,
  link,
  links,
  image,
  video,
  className,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full p-0 gap-2">
      <Link href={href || "#"} className={cn("block cursor-pointer", className)}>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {slugs && slugs.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {slugs?.map((slug, index) => (
              <Badge key={index} className="px-1 py-0 text-[10px]" variant="secondary">
                {slug}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map(({ icon, type, href }, index) => (
              <Link href={href} key={index} target="_blank">
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  {icon}
                  {type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
