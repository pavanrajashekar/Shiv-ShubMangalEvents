"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FloatingChat() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Small ambient floating animation
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <a
      ref={btnRef}
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[120] w-14 h-14 bg-gold rounded-full flex items-center justify-center text-ink shadow-[0_4px_20px_rgba(201,164,76,0.4)] hover:scale-110 hover:shadow-[0_6px_25px_rgba(201,164,76,0.6)] transition-all duration-300 cursor-none group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-bg-1 border border-ivory/10 text-ivory text-[10px] tracking-widest uppercase rounded opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
