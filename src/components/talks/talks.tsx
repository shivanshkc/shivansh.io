import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import content from "~/public/content.json";

const Talks = () => {
    const talks: TalkItemProps[] = content.talks;

    return (
        <section id="talks" className="relative md:min-h-screen px-6 py-16 flex items-center justify-center">
            {/*
                relative: position relative (for absolute positioned children)
                md:min-h-screen: minimum height 100vh on medium screens and up
                px-6: padding left/right 1.5rem
                py-16: padding top/bottom 4rem (ensures consistent spacing between sections)
                flex: display flex
                items-center: align items to center vertically
                justify-center: center items horizontally
            */}
            <div className="max-w-screen-md w-full mx-auto">
                {/*
                    max-w-screen-md: max width 768px
                    w-full: full width up to max-w-screen-md
                    mx-auto: margin left/right auto (centers the element)
                */}
                <div className="text-center mb-12">
                    {/*
                        text-center: text align center
                        mb-12: margin bottom 3rem
                    */}
                    <Badge variant="secondary" className="mb-4">
                        {/* mb-4: margin bottom 1rem */}
                        Talks
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        {/*
                            text-4xl: font size 2.25rem (36px)
                            sm:text-5xl: font size 3rem (48px) on small screens and up
                            font-bold: font weight 700
                            tracking-tight: letter spacing -0.025em
                        */}
                        Speaking &amp; Presentations
                    </h2>

                    <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
                        {/*
                            text-muted-foreground: muted text color from theme
                            mt-2: margin top 0.5rem
                            sm:mt-4: margin top 1rem on small screens and up
                            text-lg: font size 1.125rem (18px)
                        */}
                        Sharing insights on distributed systems and software engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 max-w-lg mx-auto">
                    {/*
                        grid: display grid
                        grid-cols-1: 1 column layout for video players
                        gap-6: gap 1.5rem between grid items
                        max-w-lg: max width 32rem (512px) to scale down card while preserving 16:9 aspect ratio
                        mx-auto: centers the grid horizontally
                    */}
                    {talks.map((talk, index) => (
                        <TalkCard key={index} {...talk} />
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Props required by the TalkCard component.
 */
interface TalkItemProps {
    title: string;
    location: string;
    videoUrl: string;
}

/**
 * Converts a standard YouTube URL into an embeddable URL.
 */
const getYouTubeEmbedUrl = (url: string): string => {
    try {
        const parsed = new URL(url);
        if (parsed.hostname === "youtu.be") {
            return `https://www.youtube.com/embed${parsed.pathname}`;
        }
        if (parsed.hostname.includes("youtube.com")) {
            if (parsed.pathname.startsWith("/embed/")) {
                return url;
            }
            const videoId = parsed.searchParams.get("v");
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }
        }
    } catch {
        // Fallback to original URL if parsing fails
    }
    return url;
};

const TalkCard = (props: TalkItemProps) => {
    const embedUrl = getYouTubeEmbedUrl(props.videoUrl);

    return (
        <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 pt-0">
            {/*
                group: enables group-based hover states for child elements
                overflow-hidden: hides content that overflows the card bounds
                transition-all: smooth transitions for all animatable properties
                hover:shadow-lg: larger shadow on hover for elevation effect
                hover:border-primary/50: subtle border color change on hover
                pt-0: no padding on the top
            */}

            {/* Video Player */}
            <div className="relative aspect-video w-full overflow-hidden bg-accent">
                {/*
                    relative: position relative
                    aspect-video: 16:9 aspect ratio
                    w-full: width 100%
                    overflow-hidden: clips video corners to card border radius
                    bg-accent: fallback background color from theme
                */}
                <iframe
                    src={embedUrl}
                    title={props.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>

            <CardContent className="flex flex-col">
                <h3 className="text-sm sm:text-base font-semibold">{props.title}</h3>
                {/*
                    text-sm: font size 0.875rem (14px)
                    sm:text-base: font size 1rem (16px) on small screens and up
                    font-semibold: font weight 600
                */}

                <div className="flex items-center gap-2 mt-1.5 text-xs sm:text-sm text-muted-foreground">
                    {/*
                        flex: display flex
                        items-center: align items to center vertically
                        gap-2: gap 0.5rem between child elements
                        mt-1.5: margin top 0.375rem
                        text-xs: font size 0.75rem (12px)
                        sm:text-sm: font size 0.875rem (14px) on small screens and up
                        text-muted-foreground: muted text color from theme
                    */}
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {/* size-3.5: width and height 0.875rem */}
                    <span>{props.location}</span>
                </div>
            </CardContent>
        </Card>
    );
};

export default Talks;
