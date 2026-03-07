"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import "../styles/css/workingproces.css";

gsap.registerPlugin(ScrollTrigger);

interface ProcessCard {
  color: string;
  icon: string;
  title: string;
  content: string;
}

const cardsData: ProcessCard[] = [
  {
    color: "#00bbd7",
    icon: "fa-solid fa-clipboard-list",
    title: "Requirement Analysis",
    content: "Deep dive analysis to fully understand your system requirements and business goals.",
  },
  {
    color: "#0092d7",
    icon: "fa-solid fa-pen-ruler",
    title: "UI/UX Design",
    content: "Crafting intuitive user journeys through wireframes and high-fidelity visuals.",
  },
  {
    color: "#00bbd7",
    icon: "fa-solid fa-layer-group",
    title: "Prototyping",
    content: "Creating interactive models to validate flow and functionality before coding.",
  },
  {
    color: "#0092d7",
    icon: "fa-solid fa-code",
    title: "Development",
    content: "Robust system engineering and coding based on the approved design specifications.",
  },
];

export default function WorkingProcess() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card-item");
      const hoverCleanup: Array<() => void> = [];

      // 1. Entrance Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current || containerRef.current,
          start: "top 90%", // Mulai lebih cepat saat heading masuk viewport
          toggleActions: "play none none none",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        headerRef.current,
        { y: 30, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        }
      ).fromTo(
        cards,
        { 
          y: 60, 
          opacity: 0, 
          scale: 0.9,
          transformOrigin: "center top",
          rotateX: -15 // Efek kemiringan 3D saat masuk
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
        },
        "-=0.4" // Overlap dengan animasi header
      );

      // 2. Interactive Hover States (GSAP optimized)
      cards.forEach((card) => {
        const icon = card.querySelector(".icon-wrapper");
        const number = card.querySelector(".step-number");

        const enterAnim = () => {
          gsap.to(icon, { 
            y: -12, 
            scale: 1.15, 
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
            duration: 0.4, 
            ease: "back.out(1.7)" 
          });
          gsap.to(number, { 
            opacity: 0.25, 
            scale: 1.1, 
            x: 10,
            duration: 0.5 
          });
          gsap.to(card, {
            y: -5,
            borderColor: "rgba(0, 146, 215, 0.3)",
            duration: 0.3
          });
        };

        const leaveAnim = () => {
          gsap.to(icon, { y: 0, scale: 1, boxShadow: "none", duration: 0.4, ease: "power2.out" });
          gsap.to(number, { opacity: 0.05, scale: 1, x: 0, duration: 0.4 });
          gsap.to(card, { y: 0, borderColor: "rgba(241, 245, 249, 1)", duration: 0.3 });
        };

        card.addEventListener("mouseenter", enterAnim);
        card.addEventListener("mouseleave", leaveAnim);
        hoverCleanup.push(() => {
          card.removeEventListener("mouseenter", enterAnim);
          card.removeEventListener("mouseleave", leaveAnim);
        });
      });

      // Recalculate trigger positions after route transition and layout shifts.
      const refresh = () => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      };
      const rafId = requestAnimationFrame(refresh);
      const t1 = window.setTimeout(refresh, 120);
      const t2 = window.setTimeout(refresh, 450);
      const t3 = window.setTimeout(refresh, 900);
      window.addEventListener("pageshow", refresh);
      window.addEventListener("load", refresh);
      window.addEventListener("resize", refresh);

      return () => {
        hoverCleanup.forEach((fn) => fn());
        cancelAnimationFrame(rafId);
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        window.removeEventListener("pageshow", refresh);
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
      };
    }, containerRef);

    return () => ctx.revert(); // Auto-cleanup
  }, [pathname]);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden perspective-1000">
      <div className="container mx-auto px-6 lg:px-20">
        <div ref={headerRef} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest text-[#0092D7] uppercase bg-blue-50 rounded-lg mb-4">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
            The Right Solution Through <br className="hidden md:block" /> a <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00BBD7,#0092D7)]">Clear Process</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover the proven workflow we apply to every project to deliver excellence through strategy and technology.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cardsData.map((card, index) => (
            <li 
              key={index} 
              className="process-card-item relative group list-none p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-colors duration-500 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,146,215,0.12)] overflow-hidden"
            >
              {/* Step Number Background */}
              <span className="step-number absolute -right-4 -bottom-6 text-9xl font-black text-[#00BBD7] opacity-[0.05] pointer-events-none select-none transition-all">
                0{index + 1}
              </span>

              {/* Icon Section */}
              <div 
                className="icon-wrapper w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all"
                style={{ backgroundColor: `${card.color}15` }}
              >
                <i className={`${card.icon} text-3xl transition-transform group-hover:rotate-12`} style={{ color: card.color }}></i>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-black text-2xl mb-4 text-slate-800 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                  {card.content}
                </p>
              </div>

              {/* Connector (Desktop only) */}
              {index < cardsData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-slate-200/50 z-0"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
