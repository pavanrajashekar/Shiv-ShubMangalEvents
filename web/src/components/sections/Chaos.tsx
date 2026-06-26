"use client";

export default function Chaos() {
  return (
    <section id="chaos" className="relative px-6 md:px-14 min-h-screen flex flex-col justify-center py-20 z-10 w-full" data-chapter="— IX —">
      <div className="section-head text-center mx-auto mb-20 max-w-[700px]">
        <div className="eyebrow">Why a Planner</div>
        <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] mt-5 text-ivory">The same day. <em className="italic text-gold-soft">Two very different worlds.</em></h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-16 md:gap-0 pt-10 md:px-8 max-w-[1100px] mx-auto">
        <div className="md:w-1/2 md:pr-16 mb-16 md:mb-0 text-left">
          <div className="eyebrow left">Why a Planner</div>
          <h3 className="text-[28px] font-light text-ivory mb-8 leading-snug">The difference a great <em className="italic text-gold-soft">planner makes.</em></h3>
          <ul className="space-y-4">
            {["Lost in vendor coordination", "Stressing over budgets and hidden costs", "Managing family dynamics and timelines", "Missing your own celebration"].map((item, i) => (
              <li key={i} className="text-[15px] text-ivory-soft/50 font-light flex items-start gap-4">
                <span className="text-ivory/20 mt-1">✕</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
        
        <div className="md:w-1/2 md:pl-16 text-left">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6 font-display border-b border-gold/20 pb-4">With Shubh Mangal Events</div>
          <h3 className="text-[28px] font-light text-ivory mb-8 leading-snug">A stress-free celebration <em className="italic text-gold-soft">for your family.</em></h3>
          <ul className="space-y-4">
            {["Everything planned and coordinated perfectly", "Clear budgets with no hidden costs", "A single point of contact for everything", "You get to relax and enjoy the event"].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-ivory font-light text-[15px]">
                <span className="w-[5px] h-[5px] bg-gold rounded-full mt-2 shrink-0 shadow-[0_0_8px_rgba(201,164,76,0.6)]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
