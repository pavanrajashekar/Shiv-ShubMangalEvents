"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Nav() {
  const [shrunk, setShrunk] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 50) {
        setShrunk(true);
      } else {
        setShrunk(false);
      }
    });
  }, [scrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[120] flex justify-between items-center px-14 text-white transition-all duration-400",
        shrunk ? "py-4" : "py-7"
      )}
    >
      <div className="font-display text-lg tracking-[0.42em] uppercase">
        Shubh<span className="text-gold italic">·</span>Mangal
      </div>
      
      <ul className="hidden md:flex gap-10 list-none text-[11px] tracking-[0.32em] uppercase font-normal">
        <li><a href="#story" className="hover:text-gold transition-colors duration-300">About Us</a></li>
        <li><a href="#services" className="hover:text-gold transition-colors duration-300">Services</a></li>
        <li><a href="#portfolio" className="hover:text-gold transition-colors duration-300">Gallery</a></li>
        <li><a href="#process" className="hover:text-gold transition-colors duration-300">Process</a></li>
      </ul>

      <Link
        href="#contact"
        className="hidden md:block text-[11px] tracking-[0.32em] uppercase border border-current px-4 py-2 opacity-80 hover:opacity-100 transition-opacity"
      >
        Begin
      </Link>
    </nav>
  );
}
