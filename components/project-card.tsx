"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

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
  dates,
  slugs,
  description,
  link,
  links,
  image,
  video,
  className,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className="group flex flex-col overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ease-out h-full p-0 gap-0 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className={cn("block relative overflow-hidden", className)}>
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-48 w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-48 w-full overflow-hidden object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          )}
          {!video && !image && (
            <div className="h-24 w-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
              <span className="text-3xl opacity-50">💻</span>
            </div>
          )}
        </div>

        <CardHeader className="px-3 pt-3 pb-1">
          <div className="space-y-1">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
            </div>
            <time className="font-sans text-[10px] text-muted-foreground">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col px-3 pb-2">
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert leading-relaxed line-clamp-4">
            {description}
          </Markdown>
          {slugs && slugs.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {slugs?.map((slug, index) => (
                <Badge
                  key={index}
                  className="px-1.5 py-0 text-[9px] font-medium bg-secondary/80 hover:bg-secondary"
                  variant="secondary"
                >
                  {slug}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="px-3 pb-3 pt-1">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1.5">
              {links?.map(({ icon, type, href }, index) => (
                <Link
                  href={href || "#"}
                  key={index}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge className="flex gap-1 px-2 py-1 text-[10px] font-medium hover:bg-primary/90 transition-colors">
                    {icon}
                    {type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            <time className="text-sm text-muted-foreground">{dates}</time>
          </DialogHeader>

          {(video || image) && (
            <div className="relative overflow-hidden rounded-lg">
              {video && (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-h-80 object-cover object-top rounded-lg"
                />
              )}
              {image && !video && (
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={450}
                  className="w-full max-h-80 object-cover object-top rounded-lg"
                />
              )}
            </div>
          )}

          <div className="space-y-4">
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
              {description}
            </Markdown>

            {slugs && slugs.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {slugs?.map((slug, index) => (
                  <Badge
                    key={index}
                    className="px-2 py-0.5 text-xs font-medium bg-secondary/80"
                    variant="secondary"
                  >
                    {slug}
                  </Badge>
                ))}
              </div>
            )}

            {links && links.length > 0 && (
              <div className="flex flex-row flex-wrap items-start gap-2 pt-2">
                {links?.map(({ icon, type, href }, index) => (
                  <Link href={href || "#"} key={index} target="_blank">
                    <Badge className="flex gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-primary/90 transition-colors">
                      {icon}
                      {type}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
