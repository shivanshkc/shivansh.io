import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { ThemeProvider, ThemedToaster } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Shivansh's Website",
  description: "",
};

const geist = Geist({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Update Readme.
  // TODO: Use dedicated API for emailing in the contact form.

  return (
    // next-themes may update the `class` on <html> after hydration (e.g. resolving "system"),
    // which can cause benign hydration mismatch warnings.
    // The "suppressHydrationWarning" flag suppresses these warnings.
    <html lang="en" suppressHydrationWarning className={`${geist.className} antialiased`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <ThemedToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
