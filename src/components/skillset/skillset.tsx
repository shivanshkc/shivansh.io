import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Settings } from "lucide-react";
import content from "~/public/content.json";

const Skillset = () => {
    const skillset: SkillsetCategoryProps[] = content.skillset;

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Programming Languages":
                return <Code className="size-5 text-muted-foreground" />;
            case "Databases":
                return <Database className="size-5 text-muted-foreground" />;
            case "APIs & Protocols":
                return <Globe className="size-5 text-muted-foreground" />;
            case "Other Technologies":
                return <Settings className="size-5 text-muted-foreground" />;
            default:
                return <Code className="size-5 text-muted-foreground" />;
        }
    };

    return (
        <section id="skillset" className="relative py-20 px-6">
            {/*
                relative: position relative (for absolute positioned children)
                py-20: padding top/bottom 5rem
                px-6: padding left/right 1.5rem
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
                        Skillset
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        {/*
                            text-4xl: font size 2.25rem (36px)
                            sm:text-5xl: font size 3rem (48px) on small screens and up
                            font-bold: font weight 700
                            tracking-tight: letter spacing -0.025em
                        */}
                        Technical Expertise
                    </h2>

                    <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
                        {/*
                            text-muted-foreground: muted text color from theme
                            mt-2: margin top 0.5rem
                            sm:mt-4: margin top 1rem on small screens and up
                            text-lg: font size 1.125rem (18px)
                        */}
                        Technologies and tools I work with to build robust solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/*
                        grid: display grid
                        grid-cols-1: 1 column by default
                        md:grid-cols-2: 2 columns on medium screens and up (responsive layout)
                        gap-8: gap 2rem between grid items
                    */}
                    {skillset.map((category, index) => (
                        <SkillsetCategory key={index} {...category} icon={getCategoryIcon(category.category)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Props required by the SkillsetCategory component.
 */
interface SkillsetCategoryProps {
    category: string;
    skills: string[];
    icon?: React.ReactNode;
}

const SkillsetCategory = ({ category, skills, icon }: SkillsetCategoryProps) => {
    return (
        <div className="space-y-4">
            {/* space-y-4: vertical space 1rem between child elements */}
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
                    {icon}
                </div>
                <h3 className="text-lg font-semibold">{category}</h3>
                {/*
                    text-lg: font size 1.125rem (18px)
                    font-semibold: font weight 600
                */}
            </div>

            <div className="flex flex-wrap gap-2">
                {/*
                    flex: display flex
                    flex-wrap: allow items to wrap to next line
                    gap-2: gap 0.5rem between child elements
                */}
                {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full">
                        {/* rounded-full: fully rounded corners (pill shape) */}
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default Skillset;