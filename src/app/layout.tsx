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
  return (
    <html lang="en" className={`${geist.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
