"use client"

import { BlurFade } from "../magicui/blur-fade";
import { ProjectCard } from "../project-card";
import projects from "./data";

const BLUR_FADE_DELAY = 0.04

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-max-[800px] mx-auto">
      {projects.map((project, index) => (
        <BlurFade key={index} delay={BLUR_FADE_DELAY * 12 + index * 0.05}>
          <ProjectCard key={index}
            title={project["project-title"]}
            link={project["project-link"]}
            href={project["project-href"]}
            dates={project["project-dates"]}
            slugs={project["project-stack"]}
            description={project["project-description"]}
            links={project["project-links"]}
            image={project["project-image"]}
            video={project["project-video"]}
          >
          </ProjectCard>
        </BlurFade>
      ))}
    </div>
  )
}