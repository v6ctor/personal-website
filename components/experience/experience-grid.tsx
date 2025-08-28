"use client";

import { BentoGrid } from "../magicui/bento-grid";
import { BlurFade } from "../magicui/blur-fade";
import ResumeCard from "../resume-card";

import experience from "./data";

const BLUR_FADE_DELAY = 0.04

export default function Experience() {
  return (
    <BentoGrid className="flex flex-col gap-2">
      {experience.map((exp, index) => (
        <BlurFade key={index} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
          <ResumeCard 
            logoUrl={exp["job-image"]}
            altText={exp["job-alt-text"]}
            jobCategory={exp["job-category"]}
            title={exp["job-title"]}
            href={exp["job-href"]}
            period={exp["job-period"]}
            description={exp["job-description"]}
          />
        </BlurFade>
      ))}
    </BentoGrid>
  );
}
