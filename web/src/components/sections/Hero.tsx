"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline();
      
      tl.from(bgRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 3,
        ease: "power3.inOut"
      })
      .from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2
      }, "-=1.5");

      // Parallax on Scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.to(bgRef.current, {
          y: "30%",
          scale: 1.05,
          ease: "none"
        })
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="opening" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" data-chapter="— I —">
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/bg/hero_bg.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-0/30 via-transparent to-bg-0"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 mix-blend-screen">
        <h1 className="hero-text text-[clamp(3.5rem,8vw,7rem)] font-display text-gold-soft leading-[0.9] mb-6">
          Shubh<span className="italic">·</span>Mangal
        </h1>
        <p className="hero-text text-[clamp(1rem,1.5vw,1.2rem)] tracking-[0.4em] uppercase text-ivory-soft/80 font-light max-w-2xl mx-auto">
          Creating unforgettable events and celebrations.
        </p>
      </div>
    </section>
  );
}
