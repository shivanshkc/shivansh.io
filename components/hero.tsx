import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import content from "@/public/content.json";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt={`${content.name} headshot`}
            width={200}
            height={200}
            className="rounded-full object-cover ring-1 ring-border bg-accent"
            priority
          />
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Hi, I&apos;m {content.name}
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">{content.title}</p>
        <p className="mt-6 text-[15px] md:text-base text-muted-foreground">{content.bio}</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <a href="#" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-base" asChild>
            <a href={`mailto:${content.email}`}>
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
