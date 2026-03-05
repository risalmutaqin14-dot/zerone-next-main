"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const visionCards = [
  {
    id: "01",
    title: "Innovation First",
    desc: "Adaptive technology for modern needs.",
  },
  {
    id: "02",
    title: "Secure & Trusted",
    desc: "Ensuring data integrity and privacy.",
  },
  {
    id: "03",
    title: "Scalable Systems",
    desc: "Growing alongside your institution.",
  },
  {
    id: "04",
    title: "Region Wide",
    desc: "Empowering communities across SE Asia.",
  },
];

export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".vm-badge", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".vm-title",
          {
            y: 28,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".vm-desc",
          {
            y: 24,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".vm-card",
          {
            y: 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision-mission"
      className="relative md:px-12 py-24 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] overflow-hidden bg-no-repeat bg-cover bg-center"
    >
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
            <div className="vm-badge flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-gray-600" />
              <span className="text-white text-xl font-semibold tracking-wide">
                Our Core Philosophy
              </span>
            </div>

            <h2 className="vm-title text-4xl md:text-5xl font-black text-white leading-tight">
              We create digital <br />
              <span className="text-white">solutions that matter.</span>
            </h2>

            <p className="vm-desc text-lg text-white/90 font-light leading-relaxed my-8">
              PT Global Zerone Digital provides cutting-edge digital solutions
              for education, institutions, and community engagement across
              Southeast Asia.
            </p>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {visionCards.map((item) => (
              <div key={item.id} className="vm-card h-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/20 hover:border-blue-400/50 transition-all duration-500 group h-full shadow-2xl">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-500/30 flex items-center justify-center text-blue-300 font-black text-xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {item.id}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-white font-extrabold text-xl mb-1 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
