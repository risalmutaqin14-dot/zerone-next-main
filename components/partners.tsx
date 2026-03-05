"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { partnerLogos } from "@/data";

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Sedikit lebih cepat untuk kesan modern

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset posisi ketika mencapai setengah konten (karena konten di-duplicate)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Kontrol Pause saat hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate logos untuk infinite scroll effect
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-0 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Overlay Gradients untuk efek Fade In/Out di pinggir */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="overflow-hidden whitespace-nowrap flex no-scrollbar"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
            }}
          >
            <div className="inline-flex gap-6 py-8">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="inline-flex items-center justify-center w-48 h-32 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 flex-shrink-0 group border border-gray-100"
                >
                  <div className="relative w-32 h-16">
                    <Image 
                      src={logo.image} 
                      alt={logo.name}
                      fill
                      sizes="180px"
                      className="object-contain filter transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS tipis untuk menyembunyikan scrollbar di Webkit */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export { LogoCarousel as Partner };