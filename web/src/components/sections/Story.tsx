"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal items
      gsap.utils.toArray('.tl-item').forEach((it: any) => {
        gsap.to(it, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: it, start: 'top 80%' } });
      });

      // Progress line
      if (trackRef.current && progressRef.current) {
        ScrollTrigger.create({
          trigger: trackRef.current,
          start: 'top 60%',
          end: 'bottom 70%',
          scrub: 1,
          animation: gsap.fromTo(progressRef.current, { height: 0 }, { height: '100%', ease: 'none' })
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="story" className="relative px-6 md:px-14 min-h-screen flex flex-col justify-center py-20 z-10 w-full" data-chapter="— VIII —">
      <div className="section-head mb-24 px-6 md:px-14">
        <div className="eyebrow left">Our Story</div>
        <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] mt-5 text-ivory">Over a decade of <em className="italic text-gold-soft">successful events.</em></h2>
      </div>

      <div ref={trackRef} className="relative max-w-[800px] mx-auto py-10">
        <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-px bg-gold/15 -translate-x-1/2"></div>
        <div ref={progressRef} className="absolute left-[38px] md:left-1/2 top-0 w-px bg-gold -translate-x-1/2 origin-top"></div>

        {[
          { yr: "2014", title: "A small idea. A big heart.", desc: "Founded in a one-room studio with a single laptop, a leather notebook, and one wedding to plan." },
          { yr: "2016", title: "A sunset in Udaipur.", desc: "Three days. Seven ceremonies. A baraat on elephant-back and a bride who still writes us, every year." },
          { yr: "2019", title: "Two hundred and fifty stories.", desc: "A growing family of designers, florists, chefs, choreographers and quiet, patient storytellers." },
          { yr: "2022", title: "Beyond celebrations.", desc: "Tech launches, leadership offsites and brand spectacles produced with the same devotion." },
          { yr: "2025", title: "Today. And tomorrow.", desc: "1,200+ celebrations across 14 cities. One belief: every moment deserves to be remembered." }
        ].map((item, i) => (
          <div key={item.yr} className={`tl-item relative flex flex-col md:flex-row items-start md:items-center justify-between mb-24 opacity-0 translate-y-8 ${i % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
            <div className={`md:w-1/2 pt-2 md:pt-0 pl-20 md:pl-0 ${i % 2 !== 0 ? 'md:pr-14' : 'md:pl-14'}`}>
              <div className="text-gold font-serif italic text-2xl mb-3">{item.yr}</div>
              <h3 className="text-2xl text-ivory font-light mb-3">{item.title}</h3>
              <p className="text-ivory-soft/70 font-light text-[15px] leading-relaxed">{item.desc}</p>
            </div>
            <div className="absolute left-[38px] md:left-1/2 top-6 md:top-1/2 w-[9px] h-[9px] bg-bg-0 border border-gold rounded-full -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_12px_rgba(201,164,76,0.4)]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
