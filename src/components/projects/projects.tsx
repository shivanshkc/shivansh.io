"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import content from "~/public/content.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import { useState } from "react";

const Projects = () => {
    const projects: ProjectCardProps[] = content.projects;

    return (
        <section id="projects" className="relative min-h-screen px-6 flex items-center justify-center scroll-mt-[20vh]">
            {/*
                relative: position relative (for absolute positioned children)
                min-h-screen: minimum height 100vh (full viewport height)
                px-6: padding left/right 1.5rem
                flex: display flex
                items-center: align items to center vertically
                justify-center: center items horizontally
                scroll-mt-[20vh]: scroll margin top 20% of viewport height (centers content better)
            */}
            <div className="max-w-screen-md mx-auto">
                {/*
                    max-w-screen-md: max width 768px
                    mx-auto: margin left/right auto (centers the element)
                */}
                <div className="text-center mb-12">
                    {/*
                        text-center: text align center
                        mb-12: margin bottom 3rem
                    */}
                    <Badge variant="secondary" className="mb-4">
                        {/* mb-4: margin bottom 1rem */}
                        Projects
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        {/*
                            text-4xl: font size 2.25rem (36px)
                            sm:text-5xl: font size 3rem (48px) on small screens and up
                            font-bold: font weight 700
                            tracking-tight: letter spacing -0.025em
                        */}
                        Featured Work
                    </h2>

                    <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
                        {/*
                            text-muted-foreground: muted text color from theme
                            mt-2: margin top 0.5rem
                            sm:mt-4: margin top 1rem on small screens and up
                            text-lg: font size 1.125rem (18px)
                        */}
                        Showcasing some of my best projects and technical achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*
                        grid: display grid
                        grid-cols-1: 1 column by default
                        md:grid-cols-2: 2 columns on medium screens and up (responsive layout)
                        gap-6: gap 1.5rem between grid items
                    */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

            </div>
        </section>
    );
};

/**
 * Props required by the ProjectCard component.
 */
interface ProjectCardProps {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 pt-0">
            {/*
                group: enables group-based hover states for child elements
                overflow-hidden: hides content that overflows the card bounds
                transition-all: smooth transitions for all animatable properties
                hover:shadow-lg: larger shadow on hover for elevation effect
                hover:border-primary/50: subtle border color change on hover
                pt-0: no padding on the top.
            */}

            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-accent">
                {/*
                    relative: position relative (for Next.js Image fill)
                    h-64: height 16rem (256px)
                    overflow-hidden: clips the image when it scales
                    bg-accent: fallback background color from theme
                */}
                <Image
                    src={props.image}
                    alt={props.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    priority
                />
                {/*
                    object-cover: maintains aspect ratio while covering container
                    transition-transform: smooth transform animations
                    duration-300: 300ms animation duration
                    group-hover:scale-105: scales image 5% larger on card hover
                    fill: fills the parent container (Next.js Image)
                */}
            </div>

            <CardContent className="flex-1 flex flex-col">
                {/*
                    flex-1: takes remaining space in flex container
                    flex: display flex
                    flex-col: flex direction column
                */}
                <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
                {/*
                    text-xl: font size 1.25rem (20px)
                    font-semibold: font weight 600
                    mb-2: margin bottom 0.5rem
                */}

                <p className="text-muted-foreground mb-4 flex-1">{props.description}</p>
                {/*
                    text-muted-foreground: muted text color from theme
                    mb-4: margin bottom 1rem
                    flex-1: takes available space, pushing buttons to bottom
                */}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {/*
                        flex: display flex
                        flex-wrap: allow items to wrap to next line
                        gap-2: gap 0.5rem between child elements
                    */}
                    {props.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-full">
                            {/* rounded-full: fully rounded corners (pill shape) */}
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="flex gap-3">
                {/*
                    flex: display flex
                    gap-3: gap 0.75rem between child elements
                */}
                <Button
                    variant="default"
                    className="rounded-full"
                    onClick={() => alert("This demo is currently under development. Please check back soon!")}
                >
                    {/*
                        variant="default": primary button style
                        rounded-full: fully rounded corners (pill shape)
                        onClick: shows under development message when clicked
                    */}
                    <ExternalLink className="mr-1 h-4 w-4" />
                    {/* mr-1: margin right 0.25rem, h-4: height 1rem, w-4: width 1rem */}
                    Live Demo
                </Button>
                <Button
                    variant="outline"
                    className="rounded-full shadow-none"
                    asChild
                >
                    {/* shadow-none: removes default button shadow */}
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        View Code
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Projects;
