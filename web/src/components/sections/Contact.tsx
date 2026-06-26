"use client";

import { Send, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-14 min-h-screen flex flex-col justify-center py-20 z-10 w-full text-center" data-chapter="— XV —">
      <div className="section-head text-center mx-auto mb-16 max-w-[800px]">
        <div className="eyebrow">Get In Touch</div>
        <h2 className="text-[clamp(3rem,6vw,5rem)] mt-5 text-ivory leading-none">Ready to plan your <em className="italic text-gold-soft">next event?</em></h2>
      </div>
      
      <p className="text-ivory-soft/70 font-light text-[17px] max-w-[500px] mx-auto mb-16 leading-relaxed">
        Tell us what you're looking for, and we will get back to you to start planning.
      </p>

      <form className="max-w-[800px] mx-auto text-left space-y-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 border-b border-ivory/20 pb-2 relative group">
            <label className="block text-[11px] tracking-[0.2em] uppercase text-gold mb-2 transition-colors group-focus-within:text-gold-soft">Your Name</label>
            <input type="text" required className="w-full bg-transparent border-none outline-none text-ivory text-xl font-light placeholder:text-ivory/10" placeholder="E.g. Vikram" />
            <div className="absolute bottom-0 left-0 h-px bg-gold w-0 transition-all duration-500 group-focus-within:w-full"></div>
          </div>
          <div className="flex-1 border-b border-ivory/20 pb-2 relative group">
            <label className="block text-[11px] tracking-[0.2em] uppercase text-gold mb-2 transition-colors group-focus-within:text-gold-soft">Email</label>
            <input type="email" required className="w-full bg-transparent border-none outline-none text-ivory text-xl font-light placeholder:text-ivory/10" placeholder="hello@example.com" />
            <div className="absolute bottom-0 left-0 h-px bg-gold w-0 transition-all duration-500 group-focus-within:w-full"></div>
          </div>
        </div>
        
        <div className="border-b border-ivory/20 pb-2 relative group">
          <label className="block text-[11px] tracking-[0.2em] uppercase text-gold mb-2 transition-colors group-focus-within:text-gold-soft">Event Type & Date</label>
          <input type="text" className="w-full bg-transparent border-none outline-none text-ivory text-xl font-light placeholder:text-ivory/10" placeholder="Wedding, December 2025" />
          <div className="absolute bottom-0 left-0 h-px bg-gold w-0 transition-all duration-500 group-focus-within:w-full"></div>
        </div>
        
        <div className="border-b border-ivory/20 pb-2 relative group">
          <label className="block text-[11px] tracking-[0.2em] uppercase text-gold mb-2 transition-colors group-focus-within:text-gold-soft">A few words about your celebration</label>
          <textarea className="w-full bg-transparent border-none outline-none text-ivory text-xl font-light resize-none h-24 placeholder:text-ivory/10 pt-2" placeholder="Tell us your story..."></textarea>
          <div className="absolute bottom-0 left-0 h-px bg-gold w-0 transition-all duration-500 group-focus-within:w-full"></div>
        </div>
      </form>

      <div className="mt-20 flex flex-wrap justify-center gap-6 items-center">
        <button className="relative inline-flex items-center gap-4 px-8 py-4 text-[11px] tracking-[0.36em] uppercase text-ivory cursor-none transition-colors duration-400 font-normal border border-gold group hover:text-ink">
          <span className="absolute inset-0 bg-gold scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-x-100 group-hover:origin-left"></span>
          <span className="relative z-10 inline-flex items-center gap-4">
            <Send className="w-4 h-4 text-gold group-hover:text-ink transition-colors duration-500" />
            Send Inquiry
            <i className="inline-block w-8 h-px bg-current relative transition-all duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:w-12 after:content-[''] after:absolute after:-right-px after:-top-[3px] after:w-[7px] after:h-[7px] after:border-t after:border-r after:border-current after:rotate-45"></i>
          </span>
        </button>
        <a href="https://wa.me/910000000000" className="relative inline-flex items-center gap-3 px-6 py-4 text-[11px] tracking-[0.36em] uppercase text-ivory cursor-none transition-colors duration-400 font-normal border-0 bg-transparent group opacity-80 hover:opacity-100">
          <MessageCircle className="w-4 h-4 text-gold" />
          WhatsApp
          <i className="inline-block w-8 h-px bg-current relative transition-all duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:w-12 after:content-[''] after:absolute after:-right-px after:-top-[3px] after:w-[7px] after:h-[7px] after:border-t after:border-r after:border-current after:rotate-45"></i>
        </a>
        <a href="tel:+910000000000" className="relative inline-flex items-center gap-3 px-6 py-4 text-[11px] tracking-[0.36em] uppercase text-ivory cursor-none transition-colors duration-400 font-normal border-0 bg-transparent group opacity-80 hover:opacity-100">
          <Phone className="w-4 h-4 text-gold" />
          Call
          <i className="inline-block w-8 h-px bg-current relative transition-all duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:w-12 after:content-[''] after:absolute after:-right-px after:-top-[3px] after:w-[7px] after:h-[7px] after:border-t after:border-r after:border-current after:rotate-45"></i>
        </a>
      </div>
    </section>
  );
}
