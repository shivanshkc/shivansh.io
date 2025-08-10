import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { GithubLogo, LinkedInLogo } from "./icons";
import content from "@/public/content.json";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} {content.name}. All rights reserved.
          </span>

          <div className="hidden sm:flex items-center gap-5 text-muted-foreground">
            <Link href={content.github} target="_blank">
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link href={content.linkedin} target="_blank">
              <LinkedInLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
