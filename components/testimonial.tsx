"use client";

import { useEffect, useRef } from "react";
// Pastikan path CSS sesuai
import "../styles/css/Testimonial.css";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Reri Rahmat",
    title: "Sports Teacher",
    company: "Kharisma Bangsa School",
    content: "Edunav has streamlined teaching administration at Kharisma Bangsa School. Attendance, lesson plans, and grading—previously manual—are now automated and integrated. It allows me to monitor student progress easily and focus on the learning process.",
  },
  {
    name: "Adib",
    title: "Math Teacher & Counselor",
    company: "Fatih Bilingual School",
    content: "Edunav LMS supports learning both inside and outside the classroom. Teachers can easily track progress, while parents get real-time updates. With features for counseling and behavior monitoring, Edunav simplifies the entire educational process.",
  },
  {
    name: "Akbar Dermawan Sinaga",
    title: "Academic Staff",
    company: "Fatih Bilingual School",
    content: "Edunav provides a comprehensive academic system for Fatih Bilingual School. From lesson planning to grading, everything is centralized. Features like fingerprint attendance integration make school management seamless.",
  },
];

const loopData = [...testimonials, ...testimonials];
const ITEM_WIDTH = 550;
const GAP = 24;
const ITEM_FULL_WIDTH = ITEM_WIDTH + GAP;

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const transformXRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);

  useEffect(() => {
    const speed = 0.5; // Kecepatan gerak (pixel per frame)

    const step = () => {
      if (!trackRef.current) return;
      
      // Jalankan animasi jika tidak dipause
      if (!isPausedRef.current) {
        transformXRef.current -= speed;
        const totalOriginalWidth = testimonials.length * ITEM_FULL_WIDTH;

        // Reset posisi untuk loop tak terbatas
        if (Math.abs(transformXRef.current) >= totalOriginalWidth) {
          transformXRef.current = 0;
        }

        trackRef.current.style.transform = `translate3d(${transformXRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="bg-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-700 text-center">
          What do they say about us?
        </h2>
      </div>

      [Image of a user experience testimonial card design with quotes and author profile]

      <section 
        className="relative group"
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
      >
        {/* Shadow Gradients (Fades) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Carousel Container */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
          <div
            ref={trackRef}
            style={{ willChange: "transform" }}
            className="flex gap-6 w-max py-8"
          >
            {loopData.map((t, i) => (
              <article
                key={i}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-8 w-[320px] md:w-[550px] shrink-0 border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <h4 className="text-xs md:text-sm font-bold text-blue-500 uppercase tracking-widest mb-1">
                      {t.company}
                    </h4>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">{t.name}</h3>
                    <p className="text-xs md:text-sm text-gray-400 italic">{t.title}</p>
                  </div>
                  
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-4xl text-blue-100 font-serif">“</span>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10">
                      {t.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}