"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===============================
    DATA
================================= */
const bentoData = [
  {
    title: "Countries",
    desc: "Zerone solutions are trusted across multiple countries worldwide.",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1400",
    overlay: "from-[#00BBD7] via-[#0092d7]/90 to-transparent",
    textColor: "text-white",
    end: 5,
    suffix: "+",
  },
  {
    title: "Schools",
    desc: "Partnered with schools to empower digital transformation.",
    image:
      "https://images.unsplash.com/photo-1592066575517-58df903152f2?q=80&w=1996&auto=format&fit=crop",
    overlay: "from-[#6E92D7] via-[#0092d7]/90 to-transparent",
    textColor: "text-white",
    end: 70,
    suffix: "+",
  },
  {
    title: "Users",
    desc: "Active users leveraging our platforms every single day.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop",
    overlay: "from-[#6E92D7] via-[#0092d7]/90 to-transparent",
    textColor: "text-white",
    end: 42000,
    suffix: "+",
  },
  {
    title: "Products",
    desc: "Innovative digital products designed for real impact.",
    image:
      "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1170&auto=format&fit=crop",
    overlay: "from-[#00BBD7] via-[#0092d7]/90 to-transparent",
    textColor: "text-white",
    end: 7,
    suffix: "+",
  },
];

/* ===============================
    COUNTER
================================= */
function Counter({
  start = 0,
  end,
  duration = 2,
  suffix = "+",
}: {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const obj = { value: start };

    gsap.to(obj, {
      value: end,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      onUpdate: () => {
        el.textContent = Math.floor(obj.value).toLocaleString("id-ID");
      },
    });
  }, [start, end, duration]);

  return (
    <div className="tabular-nums">
      <span
        ref={numberRef}
        className="text-4xl md:text-5xl font-black tracking-tighter"
      >
        0
      </span>
      <span className="text-2xl ml-1 font-bold opacity-70">{suffix}</span>
    </div>
  );
}

/* ===============================
    BENTO CARD
================================= */
function BentoCard({
  title,
  desc,
  image,
  overlay,
  textColor,
  end,
  suffix,
}: any) {
  return (
    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-100">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
      />
      <div
        className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-r ${overlay}`}
      />
      <div
        className={`relative z-10 p-8 flex flex-col justify-between h-full ${textColor}`}
      >
        <div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
          <p className="text-xs md:text-sm font-medium opacity-80 leading-relaxed max-w-[220px]">
            {desc}
          </p>
        </div>
        <Counter end={end} suffix={suffix} />
      </div>
    </div>
  );
}

/* ===============================
    MAIN SECTION
================================= */
export default function CounterBentoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Cards Animation
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Content Animation
      gsap.from(contentRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Button Pop Animation
      const ctaButtons = ctaWrapRef.current?.querySelectorAll(".cta-btn");
      if (ctaButtons?.length) {
        gsap.fromTo(
          ctaButtons,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
            delay: 0.3,
            immediateRender: false,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT - BENTO */}
          <div className="w-full lg:w-[60%] order-2 lg:order-1">
            <div className="flex flex-wrap -m-3">
              {bentoData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="w-full md:w-1/2 p-3 h-[250px]"
                >
                  <BentoCard {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div
            ref={contentRef}
            className="w-full lg:w-[40%] space-y-8 text-center lg:text-left order-1 lg:order-2"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest text-[#0092D7] uppercase bg-blue-50 rounded-lg">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Global Digital Solution
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We drive meaningful digital transformation that enables people,
                businesses, and institutions to achieve lasting impact through
                technology.
              </p>
            </div>

            <div
              ref={ctaWrapRef}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <Link
                href="/about"
                className="transition duration-300 hover:scale-105 flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-transparent rounded-[50px] pl-4 pr-8 py-3 group"
              >
                <span className="bg-white rounded-full p-2 mr-4 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0092D7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h12" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>

                <span className="text-white font-semibold tracking-wide">
                  About Us
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="cta-btn transition duration-300 hover:scale-105 flex items-center border-2 border-[#0092D7] bg-white rounded-[50px] px-10 py-3 text-[#0092D7] font-semibold"
              >
                Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
