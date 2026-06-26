"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const works = [
  { num: "01", tag: "Wedding · Hyderabad", title: "Aarya & Vikram", det: "3 days · 7 ceremonies · 800 guests", img: "/images/hyd_wedding.png" },
  { num: "02", tag: "Half-Saree · Jubilee Hills", title: "Kiara's Milestone", det: "Traditional elegance · 150 guests", img: "/images/hyd_birthday.png" },
  { num: "03", tag: "Corporate · HITEC City", title: "Lumen Launch '25", det: "Product reveal · 1,200 attendees", img: "/images/hyd_corporate.png" },
  { num: "04", tag: "Seemantham · Banjara Hills", title: "Little Cloud", det: "Traditional shower · intimate brunch", img: "/images/hyd_baby.png" },
  { num: "05", tag: "Housewarming · Gachibowli", title: "The Mehra Villa", det: "Rangoli, dhol & a hundred diyas", img: "/images/hyd_house.png" },
  { num: "06", tag: "Anniversary · Falaknuma", title: "25 Years of Us", det: "Palace dinner under the stars", img: "/images/hyd_anniv.png" }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (trackRef.current) {
        const amountToScroll = trackRef.current.scrollWidth - window.innerWidth + 120; // 120px padding approx
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "center center",
          end: `+=${amountToScroll}`,
          pin: true,
          animation: gsap.to(trackRef.current, {
            x: -amountToScroll,
            ease: "none"
          }),
          scrub: 1
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="portfolio" className="relative min-h-screen flex flex-col justify-center py-20 z-10 w-full overflow-hidden" data-chapter="— XI —">
      <div className="section-head px-6 md:px-14 mb-24 max-w-[700px]">
        <div className="eyebrow left">Our Gallery</div>
        <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] mt-5 text-ivory">Our Past <em className="italic text-gold-soft">Events.</em></h2>
      </div>

      <div className="pl-6 md:pl-14">
        <div ref={trackRef} className="flex gap-8 w-max pb-12 cursor-none">
          {works.map((w, i) => (
            <div key={i} className="pf-card relative w-[320px] md:w-[460px] h-[480px] md:h-[620px] group flex flex-col justify-end p-8 overflow-hidden bg-bg-1">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{ backgroundImage: `url(${w.img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-0 via-bg-0/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              <div className="absolute top-8 right-8 font-serif italic text-gold text-2xl">— {w.num} —</div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">{w.tag}</div>
                <h3 className="text-3xl text-ivory font-light mb-2">{w.title}</h3>
                <div className="text-[13px] text-ivory-soft/70 font-light">{w.det}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
