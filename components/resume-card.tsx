"use client"

import { motion } from "framer-motion";
import { MagicCard } from "./magicui/magic-card";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useTheme } from "next-themes";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ResumeCardProps {
  logoUrl: string
  altText: string
  jobCategory?: string
  title: string
  href?: string
  period: string
  description?: string[]
}

export default function ResumeCard({
    logoUrl,
    altText,
    jobCategory,
    title,
    href,
    period,
    description,
}: ResumeCardProps) {
    const { theme } = useTheme();
    const [isExpanded, setIsExpanded] = React.useState(false)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (description) {
            e.preventDefault()
            setIsExpanded(!isExpanded)
        }
    }

    return (
        <Link
            href={href || "#"}
            className="block cursor-pointer"
            onClick={handleClick}
        >
            <Card className="flex p-0 w-full shadow-none border-none">
                <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-0"
                >
                    <div className="flex flex-row p-2">
                        <div className="flex-none m-auto mt-0">
                            <Avatar className="static border size-12 m-auto bg-muted-background dark:bg-foreground">
                                <AvatarImage
                                    src={logoUrl}
                                    alt={altText}
                                    className="object-contain"
                                />
                                <AvatarFallback>
                                    {altText[0]}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex-grow ml-0 group">
                            <CardHeader className="gap-0 pl-2 pr-2">
                                <div className="flex items-center justify-between gap-x-0 text-base">
                                <div className="flex items-center gap-x-1">
                                    <h3 className="font-semibold leading-none text-xs sm:text-sm">
                                    {jobCategory}
                                    </h3>
                                    {description?.length != 0 && <ChevronRightIcon
                                    className={cn(
                                        "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                                        isExpanded ? "rotate-90" : "rotate-0"
                                    )}
                                    />}
                                </div>
                                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                                    {period}
                                </div>
                                </div>

                                {title && <div className="font-sans text-xs">{title}</div>}
                            </CardHeader>

                            {description?.length != 0 && (
                                <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: isExpanded ? 1 : 0,
                                    height: isExpanded ? "auto" : 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="mt-2 text-xs sm:text-sm"
                                >
                                <ul className="list-disc ml-6">
                                    {description?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </MagicCard>
            </Card>
        
        </Link>
    )
}