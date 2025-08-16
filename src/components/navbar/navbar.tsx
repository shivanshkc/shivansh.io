import Link from "next/link";

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Github, LinkedIn } from "@/components/icons";
import content from "~/public/content.json";

/**
 * Simple Navbar Component
 *
 * A minimal navigation bar with:
 * - Branding on the far left.
 * - Navigation links in the center.
 * - Contact icon buttons on the right.
 *
 * @component
 */
const Navbar = () => {
    /**
     * Navigation links
     */
    const links = [
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Skillset", href: "#skillset" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <nav className="fixed top-6 left-0 right-0 z-5 px-4">
            {/*
                fixed: fixed position,
                top-6 left-0 right-0: Some distance from top
                z-5: high z-index
                px-4: Horizontal padding
            */}

            <div className="relative flex items-center justify-between p-2.5 border rounded-full bg-background w-full max-w-3xl mx-auto">
                {/*
                    relative: position relative (for absolute positioned children)
                    flex: display flex
                    items-center: align items to center vertically
                    justify-between: space items apart with space between
                    p-2.5: padding 0.625rem on all sides
                    border: 1px border
                    rounded-full: fully rounded corners (pill shape)
                    bg-background: background color from theme
                    w-full: width 100%
                    max-w-3xl: max width 48rem
                    mx-auto: margin left/right auto (centers the element)
                */}

                {/* Brand */}
                <Link href="#" className="text-base sm:text-lg font-semibold tracking-tight hover:text-primary transition-colors">
                    {/*
                        text-base: font size 1rem (16px)
                        sm:text-lg: font size 1.125rem (18px) on small screens and up
                        font-semibold: font weight 600
                        tracking-tight: letter spacing -0.025em
                        hover:text-primary: primary color on hover
                        transition-colors: smooth color transition
                    */}
                    {content.branding}
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    {/*
                        hidden: display none
                        md:block: display block on medium screens and up
                        absolute: position absolute
                        left-1/2: left position 50%
                        transform: enable CSS transforms
                        -translate-x-1/2: translate X by -50% (centers the element)
                    */}
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
                    {/*
                        flex: display flex
                        gap-2: gap 0.5rem between child elements
                    */}
                    <Link href={content.linkedin} target="_blank">
                        <Button
                            variant="outline"
                            className="rounded-full shadow-none"
                            size="icon"
                        >
                            {/*
                                rounded-full: fully rounded corners
                                shadow-none: remove default shadow
                            */}
                            <LinkedIn className="h-5 w-5" />
                            {/* h-5: height 1.25rem, w-5: width 1.25rem */}
                        </Button>
                    </Link>
                    <Link href={content.github} target="_blank">
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
