import content from "~/public/content.json";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
    return (
        <footer className="mt-20">
            {/*
                mt-20: margin top 5rem (80px) - creates generous space from contact section
            */}
            <div className="max-w-screen-md mx-auto">
                {/*
                    max-w-screen-md: max width 768px (consistent with other sections)
                    mx-auto: margin left/right auto (centers the element)
                */}
                <Separator />
                {/*
                    Separator: shadcn/ui component providing a clean horizontal line
                    Uses design system border color and styling
                */}
                <div className="py-6 text-center">
                    {/*
                        py-6: padding top/bottom 1.5rem (24px) - balanced spacing around text
                        text-center: center align text horizontally
                    */}
                    <span className="text-muted-foreground">
                        {/*
                            text-muted-foreground: uses muted text color from design system
                            Creates subtle, unobtrusive appearance appropriate for footer
                        */}
                        &copy; {new Date().getFullYear()} {content.firstName} {content.lastName}. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;