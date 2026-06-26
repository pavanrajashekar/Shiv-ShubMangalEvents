"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Inquiry", desc: "You reach out and tell us about the event you're planning." },
  { num: "02", title: "Consultation", desc: "We listen to your needs, understand your budget, and discuss your ideas." },
  { num: "03", title: "Planning", desc: "We create a clear plan, map out the timeline, and set transparent budgets." },
  { num: "04", title: "Design", desc: "We design the look and feel, selecting the best vendors, decor, and lighting." },
  { num: "05", title: "Execution", desc: "Our team manages all the vendors and coordinates every detail behind the scenes." },
  { num: "06", title: "Celebration", desc: "The big day arrives and you get to relax and enjoy it with your family." },
  { num: "07", title: "Memories", desc: "The event is a huge success, leaving you with beautiful memories for a lifetime." }
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!trackRef.current || !progressRef.current) return;

      // Progress line scrubbing
      ScrollTrigger.create({
        trigger: trackRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        animation: gsap.fromTo(progressRef.current, { height: 0 }, { height: "100%", ease: "none" })
      });

      // Individual step triggers
      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        const dot = step.querySelector('.step-dot');
        const text = step.querySelector('.step-text');
        
        gsap.set(dot, { scale: 0.3, backgroundColor: "transparent", borderColor: "rgba(201,164,76,0.3)" });
        // Start text slightly offset based on side (or just y-offset for mobile simplicity)
        gsap.set(text, { opacity: 0.2, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top center+=50",
            end: "bottom center-=150",
            toggleActions: "play reverse play reverse",
          }
        });

        tl.to(dot, { 
          scale: 1, 
          backgroundColor: "#c9a44c", 
          borderColor: "#c9a44c",
          boxShadow: "0 0 15px rgba(201,164,76,0.6)",
          duration: 0.4, 
          ease: "back.out(2)" 
        })
        .to(text, { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: "power3.out" 
        }, "<");
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="process" className="relative min-h-screen flex flex-col justify-center py-20 z-10 w-full overflow-hidden" data-chapter="— XIV —">
      <div className="section-head mb-24 px-6 md:px-14 text-center">
        <div className="eyebrow">Our Process</div>
        <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] mt-5 text-ivory">From the first call <em className="italic text-gold-soft">to the celebration.</em></h2>
        <p className="mt-6 text-ivory-soft font-light text-[17px] leading-relaxed max-w-[600px] mx-auto">
          We handle everything so you don't have to. Here is how we work.
        </p>
      </div>

      <div className="relative max-w-[900px] mx-auto px-6 md:px-14">
        {/* The Track */}
        <div ref={trackRef} className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-px bg-gold/10 -translate-x-1/2"></div>
        {/* The Progress Line */}
        <div ref={progressRef} className="absolute left-[38px] md:left-1/2 top-0 w-px bg-gold -translate-x-1/2 origin-top shadow-[0_0_10px_rgba(201,164,76,0.5)]"></div>

        <div className="py-10">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div 
                key={i} 
                ref={el => { stepsRef.current[i] = el; }}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-24 last:mb-0 ${isEven ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}
              >
                {/* Content */}
                <div className={`step-text md:w-1/2 pt-2 md:pt-0 pl-20 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="text-[12px] font-serif italic text-gold mb-3">— {step.num} —</div>
                  <h4 className="text-[22px] font-light text-ivory mb-3">{step.title}</h4>
                  <p className="text-[15px] text-ivory-soft/60 font-light leading-relaxed">{step.desc}</p>
                </div>
                
                {/* Dot */}
                <div className="step-dot absolute left-[38px] md:left-1/2 top-6 md:top-1/2 w-4 h-4 rounded-full border-2 border-gold/30 -translate-x-1/2 md:-translate-y-1/2 z-10 bg-bg-0"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
