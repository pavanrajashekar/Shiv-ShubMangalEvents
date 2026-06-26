"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Effects() {
  const chapterRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Chapter Indicator
      document.querySelectorAll('section[data-chapter]').forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (s) => {
            if (s.isActive && chapterRef.current) {
              const chap = (sec as HTMLElement).dataset.chapter;
              if (chap) chapterRef.current.textContent = chap;
            }
          }
        });
      });

      // Ambient Particles
      if (canvasRef.current) {
        const cvs = canvasRef.current;
        const cCtx = cvs.getContext('2d');
        if (cCtx) {
          cvs.width = window.innerWidth;
          cvs.height = window.innerHeight;
          let particles: any[] = [];
          
          for (let i = 0; i < 40; i++) {
            particles.push({
              x: Math.random() * cvs.width,
              y: Math.random() * cvs.height,
              r: Math.random() * 1.5,
              dx: (Math.random() - 0.5) * 0.2,
              dy: (Math.random() - 0.5) * 0.2,
              a: Math.random() * 0.5
            });
          }

          const animate = () => {
            cCtx.clearRect(0, 0, cvs.width, cvs.height);
            particles.forEach((p) => {
              p.x += p.dx;
              p.y += p.dy;
              if (p.x < 0 || p.x > cvs.width) p.dx = -p.dx;
              if (p.y < 0 || p.y > cvs.height) p.dy = -p.dy;
              cCtx.beginPath();
              cCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
              cCtx.fillStyle = `rgba(227, 199, 133, ${p.a})`;
              cCtx.fill();
            });
            requestAnimationFrame(animate);
          };
          animate();

          const handleResize = () => {
            cvs.width = window.innerWidth;
            cvs.height = window.innerHeight;
          };
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      <div className="fixed inset-0 pointer-events-none z-[101] mix-blend-multiply bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,3,4,0.6)_100%)]"></div>
      
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-50"></canvas>
    </>
  );
}
