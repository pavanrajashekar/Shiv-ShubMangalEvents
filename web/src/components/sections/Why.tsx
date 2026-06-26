"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Why() {
  const containerRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      countersRef.current.forEach((counter) => {
        if (!counter) return;
        const target = parseInt(counter.dataset.count || "0", 10);
        
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2.5,
              ease: "power2.out",
              snap: { innerHTML: 1 },
              onUpdate: function() {
                counter.innerHTML = Math.round(Number(this.targets()[0].innerHTML)).toString();
              }
            });
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="why" className="relative px-6 md:px-14 min-h-screen flex flex-col justify-center py-20 z-10 w-full" data-chapter="— XIII —">
      <div className="section-head text-center mx-auto mb-20 max-w-[700px]">
        <div className="eyebrow">Why Shubh Mangal Events</div>
        <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] mt-5 text-ivory">Our experience in <em className="italic text-gold-soft">numbers.</em></h2>
      </div>

      <div className="why-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-[1200px] mx-auto">
        {[
          { num: "1200", label: "Celebrations", desc: "Across weddings, milestones and corporate occasions, every one carried end to end." },
          { num: "14", label: "Cities", desc: "From Jaipur courtyards to Goa beachfronts. Wherever the moment lives, we travel." },
          { num: "98", label: "Net Promoter", desc: "Almost every family becomes our family — and quietly, our greatest referral." },
          { num: "11", label: "Years", desc: "A decade of practice, patience and a stubborn belief that every detail matters." }
        ].map((stat, i) => (
          <div key={i} className="why-stat p-8">
            <div 
              ref={el => { countersRef.current[i] = el; }} 
              data-count={stat.num}
              className="text-[64px] font-display text-gold mb-2"
            >
              0
            </div>
            <div className="text-[12px] tracking-[0.3em] uppercase text-ivory mb-4">{stat.label}</div>
            <p className="text-ivory-soft/60 font-light text-[14px] leading-relaxed max-w-[220px] mx-auto">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
