import { Button } from "@/components/ui/button";
import { GithubLogo, LinkedInLogo } from "../icons";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import content from "@/public/content.json";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full grid grid-cols-[1fr_auto_1fr] items-center mx-auto px-3">
        {/* Branding */}
        <div className="text-base sm:text-lg font-semibold tracking-tight">
          {content.brand}
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block justify-self-center" />

        <div className="flex items-center gap-2 justify-self-end col-start-3">
          <Link href={content.linkedin} target="_blank">
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              size="icon"
            >
              <LinkedInLogo className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={content.github} target="_blank">
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              size="icon"
            >
              <GithubLogo className="h-5! w-5!" />
            </Button>
          </Link>

          {/* Mobile Menu removed: links are hidden on mobile as requested */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
