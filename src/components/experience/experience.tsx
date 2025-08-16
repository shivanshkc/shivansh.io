import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import content from "~/public/content.json";

const Experience = () => {
    const experience: ExperienceItemProps[] = content.experience;

    return (
        <section id="experience" className="relative py-20 px-6">
            <div className="max-w-screen-md mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">
                        Experience
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Professional Journey
                    </h2>

                    <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
                        A timeline of my professional growth.
                    </p>
                </div>

                <div className="relative">
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
        <div className="relative pl-8 not-last:pb-12">
            {/* Timeline line */}
            <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
                <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
            </div>

            {/* Content */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
                        <Building2 className="size-5 text-muted-foreground" />
                    </div>
                    <span className="text-lg font-semibold">{props.company}</span>
                </div>

                <div>
                    <h3 className="text-xl font-medium">{props.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                        <Calendar className="size-4" />
                        <span>{props.period}</span>
                    </div>
                </div>

                <p className="text-muted-foreground">{props.description}</p>

                <div className="flex flex-wrap gap-2">
                    {props.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-full">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;