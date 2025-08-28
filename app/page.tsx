"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Experience from "@/components/experience/experience-grid";
import Education from "@/components/education/education";
import TechStack from "@/components/tech-stack/tech-stack-grid";
import ProjectStack from "@/components/projects/project-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Markdown from "react-markdown";
import { ConfettiButton } from "@/components/magicui/confetti";

const BLUR_FADE_DELAY = 0.04;

const DATA = {
  description: "I’m a software engineer living in Inglewood, California. \
  I enjoy automating the boring stuff and using tech to make life a little easier, for myself and others.",
  avatarUrl: "https://i.imgur.com/dxWNjWk.jpeg",
  name: "Victor Sumano Arango",
  initials: "VSA",
  summary: "I&apos;m a first-gen college grad class of 2025 from Oaxaca, Mexico, raised in Inglewood, California.\
  As a DACA recipient from a low-income, undocumented family, I learned early on how to adapt and problem-solve, whether it was navigating school with\
  limited guidance or finding ways to contribute financially at a young age. Those challenges not only taught me resilience but also shaped the\
  persistence and creativity I now bring into my work as a software dev!\
  I recently graduated from Swarthmore with a CS and Stats degree, [where I worked across IT, teaching, and research](/#work-experience).\
  Now, [I run a business that combines market analytics with custom tools I built in Python and Go](/#tech-stack).\
  Outside of work, I&apos;m a big horror fan. Check out my letterboxd in the dock below!"
}

export default function Homepage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="header">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm Victor 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
             <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-35 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about-me">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">
          About me
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full font-sans text-sm text-muted-foreground dark:prose-invert [&_a]:underline [&_a]:decoration-1 [&_a]:decoration-primary [&_a]:hover:decoration-primary">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work-experience">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">
              Work Experience
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <Experience />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">
              Education
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <Education />
          </BlurFade>
        </div>

      </section>
      <section id="tech-stack">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            <TechStack />
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  These are some of the projects I&apos;ve worked on!
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love building tools and software that solve problems. So, I&apos;ve developed CLI automation software, CRUD websites, and 
                  ML tools.
                </p>
              </div>
            </div>
          </BlurFade>
          <ProjectStack />
        </div>
      </section>
      <section id="contact-me">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                  Thanks for reading.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to talk more?
                </p>
                <div className="relative">
                  <a onClick={() => {navigator.clipboard.writeText("victorsumano17@gmail.com")}}>
                    <ConfettiButton>
                      Copy my email to your clipboard! 🎉
                    </ConfettiButton>
                  </a>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
