"use client";

import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import Image from "next/image";
import content from "~/public/content.json";
import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Section Component
 *
 * A full-screen hero section featuring:
 * - Animated grid pattern background
 * - Centered profile image
 * - Personal introduction text
 * - Call-to-action buttons
 *
 * @component
 */
const Hero = () => {
    /**
     * Smooth scroll to section
     */
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        const sectionId = href.replace('#', '');
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/*
                relative: position relative (for absolute positioned children)
                min-h-screen: minimum height 100vh (full viewport height)
                flex: display flex
                items-center: align items to center vertically
                justify-center: center items horizontally
                px-6: padding left/right 1.5rem
                pt-6: padding top 1.5rem
                overflow-hidden: hide overflow content
            */}

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 h-full skew-y-12"
                )}
            />
            {/*
                Background animated grid pattern with:
                - [mask-image:radial-gradient()]: creates a circular fade effect
                - inset-x-0: left and right inset 0
                - h-full: height 100%
                - skew-y-12: skew on Y axis by 12 degrees
            */}

            <div className="relative z-[1] text-center max-w-screen-md">
                {/*
                    relative: position relative
                    z-[1]: z-index 1 (above background)
                    text-center: text align center
                    max-w-screen-md: max width 768px
                */}
                {/* Profile Image */}
                <div className="flex justify-center">
                    {/*
                        flex: display flex
                        justify-center: center items horizontally
                    */}
                    <Image
                        src="/profile.jpg"
                        alt={`${content.firstName} headshot`}
                        width={200}
                        height={200}
                        className="rounded-full object-cover ring-1 ring-border bg-accent"
                        priority
                    />
                    {/*
                        rounded-full: fully rounded corners (circular)
                        object-cover: cover the container while maintaining aspect ratio
                        ring-1: 1px ring
                        ring-border: ring color from theme
                        bg-accent: background color from theme
                        priority: load image with high priority
                    */}
                </div>

                {/* Main Heading */}
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
                    {/*
                        mt-6: margin top 1.5rem
                        text-4xl: font size 2.25rem (36px)
                        sm:text-5xl: font size 3rem (48px) on small screens and up
                        md:text-6xl: font size 3.75rem (60px) on medium screens and up
                        font-bold: font weight 700
                        !leading-[1.2]: line height 1.2 (important)
                        tracking-tight: letter spacing -0.025em
                    */}
                    Hi, I&apos;m {content.firstName} {content.lastName}
                </h1>

                {/* Title and Bio */}
                <p className="mt-3 text-xl text-muted-foreground">{content.title}</p>
                {/*
                    mt-3: margin top 0.75rem
                    text-xl: font size 1.25rem (20px)
                    text-muted-foreground: muted text color from theme
                */}

                <p className="mt-6 text-[15px] md:text-base text-muted-foreground">{content.bio}</p>
                {/*
                    mt-6: margin top 1.5rem
                    text-[15px]: custom font size 15px
                    md:text-base: font size 1rem (16px) on medium screens and up
                    text-muted-foreground: muted text color from theme
                */}

                {/* Action Buttons */}
                <div className="mt-10 flex items-center justify-center gap-4">
                    {/*
                        mt-10: margin top 2.5rem
                        flex: display flex
                        items-center: align items to center vertically
                        justify-center: center items horizontally
                        gap-4: gap 1rem between child elements
                    */}
                    <Button size="lg" className="rounded-full text-base" asChild>
                        {/*
                            size="lg": large button size
                            rounded-full: fully rounded corners (pill shape)
                            text-base: font size 1rem (16px)
                            asChild: render as child element (anchor tag)
                        */}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            {/* mr-2: margin right 0.5rem, h-5: height 1.25rem, w-5: width 1.25rem */}
                            Contact Me
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full text-base" asChild>
                        {/*
                            variant="outline": outlined button style
                            Other classes same as above
                        */}
                        <a href="/shivansh-resume.pdf" target="_blank">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Open Resume
                        </a>
                    </Button>
                </div>

            </div>
        </div>
    );

};

export default Hero;