"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, LinkedIn } from "@/components/icons";
import { Mail, Send } from "lucide-react";
import content from "~/public/content.json";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const subject = `Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:${content.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Reset form
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="relative min-h-screen px-6 flex items-center justify-center">
            {/*
                relative: position relative (for absolute positioned children)
                min-h-screen: minimum height 100vh (full viewport height)
                px-6: padding left/right 1.5rem
                flex: display flex
                items-center: align items to center vertically
                justify-center: center items horizontally
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
                        Contact
                    </Badge>

                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        {/*
                            text-4xl: font size 2.25rem (36px)
                            sm:text-5xl: font size 3rem (48px) on small screens and up
                            font-bold: font weight 700
                            tracking-tight: letter spacing -0.025em
                        */}
                        Let&apos;s Connect
                    </h2>

                    <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
                        {/*
                            text-muted-foreground: muted text color from theme
                            mt-2: margin top 0.5rem
                            sm:mt-4: margin top 1rem on small screens and up
                            text-lg: font size 1.125rem (18px)
                        */}
                        Ready to collaborate? Reach out and let&apos;s build something amazing together.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-md mx-auto mb-8">
                    {/*
                        max-w-md: max width 28rem (448px)
                        mx-auto: margin left/right auto (centers the element)
                        mb-12: margin bottom 3rem
                    */}
                    <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                        {/*
                            overflow-hidden: hides content that overflows the card bounds
                            transition-all: smooth transitions for all animatable properties
                            hover:shadow-lg: larger shadow on hover for elevation effect
                            hover:border-primary/50: subtle border color change on hover
                        */}
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* space-y-6: vertical space 1.5rem between child elements */}
                                <div className="space-y-2">
                                    {/* space-y-2: vertical space 0.5rem between child elements */}
                                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                                    {/* text-sm: font size 0.875rem, font-medium: font weight 500 */}
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="rounded-full border-muted-foreground/20 focus:border-primary"
                                    />
                                    {/*
                                        rounded-full: fully rounded corners
                                        border-muted-foreground/20: border with muted foreground color at 20% opacity
                                        focus:border-primary: primary border color on focus
                                    */}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="rounded-full border-muted-foreground/20 focus:border-primary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project or just say hello!"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="rounded-xl border-muted-foreground/20 focus:border-primary resize-none"
                                    />
                                    {/*
                                        rounded-xl: extra large border radius
                                        resize-none: disable textarea resizing
                                    */}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full rounded-full"
                                    disabled={isSubmitting}
                                >
                                    {/* w-full: width 100%, rounded-full: fully rounded corners */}
                                    <Send className="mr-2 h-4 w-4" />
                                    {/* mr-2: margin right 0.5rem, h-4: height 1rem, w-4: width 1rem */}
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Separator */}
                <div className="flex items-center justify-center mb-6 max-w-xs mx-auto">
                    {/*
                        flex: display flex
                        items-center: align items to center vertically
                        justify-center: center items horizontally
                        mb-6: margin bottom 1.5rem
                        max-w-xs: max width 20rem (320px)
                        mx-auto: margin left/right auto (centers the element)
                    */}
                    <Separator className="flex-1" />
                    {/*
                        Separator: shadcn/ui component providing consistent design system styling
                        flex-1: takes available space
                    */}
                    <span className="px-4 text-sm text-muted-foreground">or</span>
                    {/*
                        px-4: padding left/right 1rem
                        text-sm: font size 0.875rem
                        text-muted-foreground: muted text color from theme
                    */}
                    <Separator className="flex-1" />
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4">
                    {/*
                        flex: display flex
                        items-center: align items to center vertically
                        justify-center: center items horizontally
                        gap-4: gap 1rem between child elements
                    */}
                    <Button variant="outline" className="rounded-full shadow-none" size="icon" asChild>
                        {/*
                            rounded-full: fully rounded corners
                            shadow-none: remove default shadow
                            size="icon": icon button size
                            asChild: render as child element (anchor tag)
                        */}
                        <a href={content.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <LinkedIn className="h-5 w-5" />
                            {/* h-5: height 1.25rem, w-5: width 1.25rem */}
                        </a>
                    </Button>

                    <Button variant="outline" className="rounded-full shadow-none" size="icon" asChild>
                        <a href={content.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>

                    <Button variant="outline" className="rounded-full shadow-none" size="icon" asChild>
                        <a href={`mailto:${content.email}`} aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;