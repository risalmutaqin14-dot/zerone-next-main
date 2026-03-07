"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sections = [
  {
    key: "design",
    title: "Our Strengths",
    items: [
      { label: "Customizable", width: 94 },
      { label: "Detail Oriented", width: 92 },
      { label: "Ongoing Support", width: 94 },
      { label: "Innovation and Creativity", width: 88 },
    ],
  },
];

export default function SkillsChart() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray<HTMLDivElement>(".bar-inner");

      // 1. Animasi Bar Masuk (Reveal Animation)
      gsap.to(bars, {
        width: (i) => `${(bars[i] as HTMLElement).dataset.targetWidth}%`,
        duration: 2.5,
        ease: "expo.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // 2. Efek Hover Interaktif dengan GSAP
      bars.forEach((bar) => {
        const container = bar.closest(".group");
        
        container?.addEventListener("mouseenter", () => {
          gsap.to(bar, { 
            scaleY: 1.4, 
            boxShadow: "0 0 30px rgba(0, 187, 215, 0.6)", 
            duration: 0.4, 
            ease: "power2.out" 
          });
        });

        container?.addEventListener("mouseleave", () => {
          gsap.to(bar, { 
            scaleY: 1, 
            boxShadow: "0 0 15px rgba(0, 146, 215, 0.3)", 
            duration: 0.4, 
            ease: "power2.in" 
          });
        });
      });

      // 3. Animasi Fade In untuk Judul dan Kontainer
      gsap.from(".chart-item", {
        opacity: 0,
        x: -20,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
        }
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="w-full max-w-5xl mx-auto py-16 px-6 overflow-hidden">
      {sections.map((section) => (
        <div key={section.key} className="space-y-12">
          {/* Header */}
          <div className="chart-header text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] text-[#0092D7] bg-blue-50 rounded-lg mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
              {section.title}
            </h2>
          </div>

          {/* Grid Layout 2 Kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {section.items.map((item, idx) => (
              <div key={idx} className="chart-item group space-y-4">
                {/* Label Teks */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    {/* Aksen Garis Vertikal Dinamis */}
                    <div className="w-1 h-6 bg-gradient-to-b from-[#00BBD7] to-[#0092D7] rounded-full group-hover:scale-y-150 transition-transform duration-500 origin-center" />
                    <span className="text-base md:text-lg font-bold text-slate-700 tracking-tight group-hover:text-[#0092D7] transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Track Bar (Latar Belakang) */}
                <div className="h-[10px] w-full bg-slate-100 rounded-full relative shadow-inner border border-slate-200/50">
                  {/* Bar Inner (Bagian yang Terisi) */}
                  <div
                    className="bar-inner h-full w-0 rounded-full relative will-change-[width,scaleY]"
                    data-target-width={item.width}
                    style={{
                      background: 'linear-gradient(90deg, #00DDEB 0%, #0092D7 50%, #4F46E5 100%)',
                      boxShadow: '0 0 15px rgba(0, 146, 215, 0.3)',
                    }}
                  >
                    {/* Efek Kilauan (Shimmer) */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_4s_infinite]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}