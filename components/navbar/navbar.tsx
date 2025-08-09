import { Button } from "@/components/ui/button";
import { GithubLogo, LinkedInLogo } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full grid grid-cols-[1fr_auto_1fr] items-center mx-auto px-3">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block justify-self-center" />

        <div className="flex items-center gap-2 justify-self-end col-start-3">
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <LinkedInLogo className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <GithubLogo className="h-5! w-5!" />
          </Button>

          {/* Mobile Menu removed: links are hidden on mobile as requested */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
