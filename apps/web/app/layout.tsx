import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "HOOK",

  description: "AI Marketing & Dev Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
className={`${inter.variable} h-full antialiased`}    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
