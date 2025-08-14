import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Github, LinkedIn } from "@/components/icons";

/**
 * Simple Navbar Component
 * 
 * A minimal navigation bar with:
 * - Left: Brand ("Shivansh K.")
 * - Center: Navigation links
 * - Right: Icon buttons
 * 
 * @component
 */
const Navbar = () => {
    /**
     * Navigation links
     */
    const links = [
        { label: "Experience", href: "/experience" },
        { label: "Projects", href: "/projects" },
        { label: "Skillset", href: "/skills" },
        { label: "Contact", href: "/contact" }
    ];

    return (
        <nav className="pt-6 px-4">
            <div className="relative flex items-center justify-between p-2.5 border rounded-full bg-background w-full max-w-3xl mx-auto">
                {/* Brand */}
                <div className="text-base sm:text-lg font-semibold tracking-tight">
                    Shivansh K.
                </div>

                {/* Navigation Links - Absolutely centered */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {links.map(link => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink asChild>
                                        <Link href={link.href}>{link.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Icon Buttons */}
                <div className="flex gap-2">
                    <Link href="#" target="_blank">
                        <Button
                            variant="outline"
                            className="rounded-full shadow-none"
                            size="icon"
                        >
                            <LinkedIn className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="#" target="_blank">
                        <Button
                            variant="outline"
                            className="rounded-full shadow-none"
                            size="icon"
                        >
                            <Github className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
