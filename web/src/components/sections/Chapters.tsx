"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  { id: "wedding", chapter: "— II —", eyebrow: "Weddings", title: "Where two families", em: "unite.", desc: "We plan every detail of your wedding, from the morning rituals to the final pheras, ensuring a perfect day.", bg: "/images/bg/chap_wedding_bg.png" },
  { id: "birthday", chapter: "— III —", eyebrow: "Birthdays", title: "Celebrate your", em: "milestones.", desc: "From a fun kids party to a grand milestone event, we make your birthdays special.", bg: "/images/bg/chap_birthday_bg.png" },
  { id: "corporate", chapter: "— IV —", eyebrow: "Corporate", title: "Professional & grand", em: "events.", desc: "Launches, offsites, and conferences executed with perfect brand precision.", bg: "/images/bg/chap_corporate_bg.png" },
  { id: "baby", chapter: "— V —", eyebrow: "Baby Showers", title: "Welcoming", em: "new life.", desc: "Beautiful and elegant baby showers for your family to enjoy.", bg: "/images/bg/chap_baby_bg.png" },
  { id: "house", chapter: "— VI —", eyebrow: "Housewarming", title: "Grand & traditional", em: "ceremonies.", desc: "Welcoming prosperity to your new home with flawless traditional setups.", bg: "/images/bg/chap_house_bg.png" },
  { id: "anniversary", chapter: "— VII —", eyebrow: "Anniversaries", title: "Romantic & memorable", em: "celebrations.", desc: "A private dinner or a grand reunion to celebrate your years together.", bg: "/images/bg/chap_anniv_bg.png" }
];

export default function Chapters() {
  const containerRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((sec, i) => {
        if (!sec) return;
        const bg = sec.querySelector('.chapter-bg');
        const text = sec.querySelector('.chapter-text');

        // Parallax BG
        if (bg) {
          gsap.to(bg, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }

        // Reveal Text
        if (text) {
          gsap.fromTo(text, 
            { y: 50, opacity: 0 }, 
            { 
              y: 0, opacity: 1, duration: 1.5, ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 60%"
              }
            }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef as any} className="relative w-full z-10">
      {chapters.map((chap, i) => (
        <section 
          key={chap.id}
          id={chap.id}
          ref={el => { sectionsRef.current[i] = el; }}
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
          data-chapter={chap.chapter}
        >
          {/* Background Image with Parallax */}
          <div 
            className="chapter-bg absolute inset-0 w-full h-[115%] -top-[10%] bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${chap.bg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bg-0 via-bg-0/60 to-bg-0"></div>
          </div>
          
          {/* Foreground Text */}
          <div className="chapter-text relative z-10 text-center px-6 max-w-[800px] mix-blend-screen">
            <div className="eyebrow mb-6">{chap.eyebrow}</div>
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-light text-ivory mb-6 leading-tight">
              {chap.title} <br/> <em className="italic text-gold-soft">{chap.em}</em>
            </h2>
            {chap.desc && (
              <p className="text-ivory-soft font-light text-[17px] leading-relaxed max-w-[600px] mx-auto mt-4">
                {chap.desc}
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
