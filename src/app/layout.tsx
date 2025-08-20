import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

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
  // TODO: Standardize name - one of Shivansh's Portfolio, Shivansh's Website, shivansh.io etc.
  // TODO: Use dedicated API for emailing in the contact form.
  // TODO: Dark mode.

  return (
    <html lang="en" className={`${geist.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
