"use client";

import { BentoGrid } from "../magicui/bento-grid";
import { BlurFade } from "../magicui/blur-fade";
import ResumeCard from "../resume-card";

import education from "./data";

const BLUR_FADE_DELAY = 0.04

export default function Education() {
  return (
    <BentoGrid className="flex flex-col gap-2">
      {education.map((exp, index) => (
        <BlurFade key={index} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
          <ResumeCard 
            logoUrl={exp["school-image"]}
            altText={""}
            jobCategory={exp["school-name"]}
            title={exp["school-subtitle"]}
            href={""}
            period={exp["school-period"]}
            description={exp["school-relevant-classes"]}
          />
        </BlurFade>
      ))}
    </BentoGrid>
  );
}
