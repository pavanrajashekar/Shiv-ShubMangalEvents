import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Italiana, Geist } from "next/font/google";
import "./globals.css";
import { ReactLenis } from 'lenis/react';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"]
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"]
});

const italiana = Italiana({ 
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Shubh Mangal Events — The Atelier of Celebrations",
  description: "A cinematic, scroll-driven storytelling experience for a premium event design atelier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, cormorant.variable, italiana.variable, "font-sans", geist.variable)}>
      <body className="antialiased font-sans bg-bg-0 text-ivory selection:bg-gold selection:text-ink overflow-x-hidden">
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
