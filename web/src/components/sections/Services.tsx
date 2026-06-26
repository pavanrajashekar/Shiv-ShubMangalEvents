"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Gift, Briefcase, Baby, Home, Infinity, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Weddings", desc: "Sangeet, mehendi, haldi, baraat, pheras — every ritual designed as its own little film." },
  { id: "02", title: "Birthdays", desc: "From a child's wonderland to a milestone gala — the celebration that's truly you." },
  { id: "03", title: "Corporate", desc: "Launches, conferences, offsites and award nights produced with brand precision." },
  { id: "04", title: "Baby Shower", desc: "Soft, intimate and joyful — celebrations as gentle as a first heartbeat." },
  { id: "05", title: "Housewarming", desc: "Rangoli, diya, dhol and blessings to welcome a new chapter home." },
  { id: "06", title: "Anniversary", desc: "Romantic, private dinners or grand reunions — celebrating your years together." },
  { id: "07", title: "Custom Events", desc: "Have a specific theme in mind? Bring us your idea and we'll handle the rest." },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-item", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".svc-grid", start: "top 75%" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="relative px-6 md:px-14 min-h-screen flex flex-col justify-center py-20 z-10 w-full" data-chapter="— X —">
      <div className="section-head mb-20 max-w-[700px]">
        <div className="eyebrow left">Our Services</div>
        <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] mt-5 text-ivory">What we <em className="italic text-gold-soft">offer.</em></h2>
        <p className="mt-6 text-ivory-soft font-light text-[17px] leading-relaxed max-w-[600px]">
          We design every event end-to-end. We manage the venue, vendors, décor, food, lighting, and all the behind-the-scenes details.
        </p>
      </div>

      <div className="svc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.slice(0, 6).map((svc) => (
          <div key={svc.id} className="svc-item relative p-8 md:p-10 bg-bg-1 border border-ivory/5 transition-colors duration-400 hover:bg-bg-0 hover:border-gold/20 cursor-none">
            <span className="absolute top-8 right-8 font-display text-2xl text-ivory/10 transition-colors duration-400">{svc.id}</span>
            <div className="text-gold w-10 h-10 mb-8 opacity-80 transition-opacity">
              {svc.id === "01" && <Heart strokeWidth={1} className="w-10 h-10" />}
              {svc.id === "02" && <Gift strokeWidth={1} className="w-10 h-10" />}
              {svc.id === "03" && <Briefcase strokeWidth={1} className="w-10 h-10" />}
              {svc.id === "04" && <Baby strokeWidth={1} className="w-10 h-10" />}
              {svc.id === "05" && <Home strokeWidth={1} className="w-10 h-10" />}
              {svc.id === "06" && <Infinity strokeWidth={1} className="w-10 h-10" />}
            </div>
            <h3 className="text-xl text-ivory font-light mb-4">{svc.title}</h3>
            <p className="text-[14px] text-ivory-soft/60 font-light leading-relaxed">{svc.desc}</p>
          </div>
        ))}
        
        {/* 7th item spans full width */}
        <div className="svc-item relative p-8 md:p-10 bg-bg-1 border border-ivory/5 transition-colors duration-400 hover:bg-bg-0 hover:border-gold/20 cursor-none lg:col-span-3 md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="text-gold w-10 h-10 mb-6 opacity-80 transition-opacity">
              <Sparkles strokeWidth={1} className="w-10 h-10" />
            </div>
            <h3 className="text-2xl text-ivory font-light mb-4">{services[6].title}</h3>
            <p className="text-[15px] text-ivory-soft/60 font-light leading-relaxed max-w-xl">{services[6].desc}</p>
          </div>
          <span className="font-display text-6xl text-ivory/5 md:text-ivory/10">{services[6].id}</span>
        </div>
      </div>
    </section>
  );
}
