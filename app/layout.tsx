import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display face for the hero. Ships a single 400 weight, so every size and
// emphasis has to come from scale and tracking. Roman only — the italic's
// capital R is a calligraphic swash form that reads as a broken glyph inline.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Abhinav | Portfolio",
  description:
    "Engineering student and developer building modern web applications with Next.js, TypeScript, and React.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-zinc-200">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
