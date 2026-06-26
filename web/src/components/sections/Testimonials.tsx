"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testys = [
  { text: "They didn't plan our wedding. They lived it with us — every laugh, every late night, every quiet pause.", who: "Aarya & Vikram", role: "Wedding · Udaipur, 2024" },
  { text: "Every detail felt like a love letter to my mother. I will never forget the silence in the room when the doors opened.", who: "The Mehra Family", role: "75th Birthday · Mumbai" },
  { text: "Our launch felt like a Broadway opening night. Our investors are still talking about it.", who: "Lumen Labs", role: "Product Reveal · Bengaluru" },
  { text: "My daughter still talks about her birthday. Two years on, she calls it 'the day the forest came inside.'", who: "Priya R.", role: "Child's Birthday · Pune" },
  { text: "Calm. That is the word. They turned what should have been the most chaotic week into the calmest one.", who: "Anand & Shruti", role: "Wedding · Goa" }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite marquee
      if (trackRef.current) {
        // Clone for seamless loop if needed, or simply animate the track
        gsap.to(trackRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 35,
          repeat: -1
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Double the array for seamless marquee
  const loopTestys = [...testys, ...testys];

  return (
    <section ref={containerRef} id="testimonials" className="relative min-h-screen flex flex-col justify-center py-20 z-10 w-full overflow-hidden" data-chapter="— XII —">
      <div className="section-head text-center mx-auto mb-20 max-w-[700px]">
        <div className="eyebrow">Client Reviews</div>
        <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] mt-5 text-ivory">What our clients <em className="italic text-gold-soft">say about us.</em></h2>
      </div>

      <div className="w-[200vw] sm:w-max">
        <div ref={trackRef} className="flex w-max cursor-none">
          {loopTestys.map((t, i) => (
            <div key={i} className="tcard w-[340px] md:w-[480px] p-8 md:p-12 shrink-0 border-r border-ivory/10 hover:bg-ivory/[0.02] transition-colors duration-400 group">
              <p className="font-serif italic text-[22px] md:text-[28px] text-ivory font-light leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity duration-400">"{t.text}"</p>
              <div className="text-[14px] text-gold tracking-wide uppercase mb-1">{t.who}</div>
              <div className="text-[12px] text-ivory-soft/40 uppercase tracking-widest">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
