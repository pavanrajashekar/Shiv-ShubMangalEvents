"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const [completed, setCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const pctRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let progress = { value: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => setCompleted(true)
        });
      }
    });

    tl.to(markRef.current, { opacity: 1, duration: 1, ease: "power2.out" })
      .to(progress, {
        value: 100,
        duration: 2.5,
        ease: "power3.inOut",
        onUpdate: () => {
          if (barRef.current) barRef.current.style.width = `${progress.value}%`;
          if (pctRef.current) pctRef.current.textContent = `${Math.floor(progress.value).toString().padStart(2, '0')}`;
        }
      }, "-=0.5")
      .to(markRef.current, { y: -20, opacity: 0, duration: 0.8, ease: "power2.in" }, "+=0.2")
      .to(barRef.current, { opacity: 0, duration: 0.4 }, "-=0.6")
      .to(pctRef.current, { opacity: 0, duration: 0.4 }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, []);

  if (completed) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-ink flex flex-col items-center justify-center gap-8"
    >
      <div ref={markRef} className="font-display text-[42px] tracking-[0.4em] text-ivory opacity-0">
        Shubh<span className="text-gold italic">·</span>Mangal
      </div>
      <div className="w-[200px] h-px bg-ivory/15 overflow-hidden">
        <i ref={barRef} className="block h-full w-0 bg-gradient-to-r from-gold-deep to-gold-soft" />
      </div>
      <div ref={pctRef} className="text-[11px] tracking-[0.4em] text-ivory/55 font-sans font-light">
        00
      </div>
    </div>
  );
}
