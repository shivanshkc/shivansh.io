import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import content from "~/public/content.json";

const Experience = () => {
    const experience: ExperienceItemProps[] = content.experience;

    return (
        <section id="experience" className="relative min-h-screen px-6 py-16 flex items-center justify-center">
            {/*
                relative: position relative (for absolute positioned children)
                min-h-screen: minimum height 100vh (full viewport height)
                px-6: padding left/right 1.5rem
                py-16: padding top/bottom 4rem (ensures consistent spacing between sections)
                flex: display flex
                items-center: align items to center vertically
                justify-center: center items horizontally
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
                        Experience
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        {/*
                            text-4xl: font size 2.25rem (36px)
                            sm:text-5xl: font size 3rem (48px) on small screens and up
                            font-bold: font weight 700
                            tracking-tight: letter spacing -0.025em
                        */}
                        Professional Journey
                    </h2>

                    <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
                        {/*
                            text-muted-foreground: muted text color from theme
                            mt-2: margin top 0.5rem
                            sm:mt-4: margin top 1rem on small screens and up
                            text-lg: font size 1.125rem (18px)
                        */}
                        A timeline of my professional growth.
                    </p>
                </div>

                <div className="relative" role="list" aria-label="Professional experience timeline">
                    {/* relative: position relative (for timeline line positioning) */}
                    {experience.map((experience, index) => (
                        <ExperienceItem key={index} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Props required by the ExperienceItem component.
 */
interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

const ExperienceItem = (props: ExperienceItemProps) => {
    return (
        <div className="relative pl-8 last:pb-0 pb-12" role="listitem">
            {/*
                relative: position relative (for absolute positioned timeline elements)
                pl-8: padding left 2rem (space for timeline)
                last:pb-0: padding bottom 0 on last child (removes extra space)
                pb-12: padding bottom 3rem (spacing between timeline items)
            */}
            {/* Timeline line */}
            <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted last:hidden" aria-hidden="true">
                {/*
                    absolute: position absolute
                    left-0: left position 0
                    top-2.5: top position 0.625rem (aligns with content)
                    h-full: height 100%
                    w-[2px]: custom width 2px (timeline line)
                    bg-muted: muted background color from theme
                    last:hidden: hide on last child (timeline ends)
                */}
                <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" aria-hidden="true" />
                {/*
                    absolute: position absolute
                    h-3: height 0.75rem
                    w-3: width 0.75rem
                    -left-[5px]: custom left -5px (centers on 2px line)
                    top-0: top position 0
                    rounded-full: fully rounded corners (circular dot)
                    border-2: 2px border
                    border-primary: primary border color from theme
                    bg-background: background color from theme
                */}
            </div>

            {/* Content */}
            <div className="space-y-3">
                {/* space-y-3: vertical space 0.75rem between child elements */}
                <div className="flex items-center gap-3">
                    {/*
                        flex: display flex
                        items-center: align items to center vertically
                        gap-3: gap 0.75rem between child elements
                    */}
                    <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center" aria-hidden="true">
                        {/*
                            flex-shrink-0: prevent shrinking
                            size-9: width and height 2.25rem
                            bg-accent: accent background color from theme
                            rounded-full: fully rounded corners (circular)
                            flex: display flex
                            items-center: align items to center vertically
                            justify-center: center items horizontally
                        */}
                        <Building2 className="size-5 text-muted-foreground" />
                        {/* size-5: width and height 1.25rem, text-muted-foreground: muted text color */}
                    </div>
                    <span className="text-lg font-semibold">{props.company}</span>
                    {/*
                        text-lg: font size 1.125rem (18px)
                        font-semibold: font weight 600
                    */}
                </div>

                <div>
                    <h3 className="text-xl font-medium">{props.title}</h3>
                    {/*
                        text-xl: font size 1.25rem (20px)
                        font-medium: font weight 500
                    */}
                    <div className="flex items-center gap-2 mt-1 text-sm">
                        {/*
                            flex: display flex
                            items-center: align items to center vertically
                            gap-2: gap 0.5rem between child elements
                            mt-1: margin top 0.25rem
                            text-sm: font size 0.875rem (14px)
                        */}
                        <Calendar className="size-4" aria-hidden="true" />
                        {/* size-4: width and height 1rem */}
                        <span>{props.period}</span>
                    </div>
                </div>

                <p className="text-muted-foreground">{props.description}</p>
                {/* text-muted-foreground: muted text color from theme */}

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
            </div>
        </div>
    );
}

export default Experience;