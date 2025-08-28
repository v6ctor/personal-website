"use client"
import slugs from "./data";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04

export default function TechStack() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="flex flex-wrap gap-1">
            {images.map((image, index) => (
            <BlurFade key={index} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
              <Badge key={index} className="px-2 py-1 text-[12px] font-bold">
                <span className="flex items-center gap-2">
                    <img src={images[index]} alt={images[index]} className="w-4 h-4" />
                    <p>{slugs[index]}</p>
                </span>
              </Badge>
            </BlurFade>
            ))}
          </div>
    )
}