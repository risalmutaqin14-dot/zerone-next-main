"use client";

import React from "react";
import Image from "next/image";
import { stackDev } from "@/data";
// Pastikan path CSS ini sesuai dengan struktur Next.js Anda
import "../styles/css/stack.css";

export default function StackSection() {
  // Mengonversi objek stackDev menjadi array images
  const images = Object.keys(stackDev).map((key) => ({
    src: stackDev[key as keyof typeof stackDev],
    alt: key,
  }));

  // Duplikasi gambar untuk efek scroll tanpa putus
  const duplicatedImages = [...images, ...images];
  
  // Baris kedua dengan urutan terbalik
  const images2 = [...images].reverse();
  const duplicatedImages2 = [...images2, ...images2];

  return (
    <section className="about-section overflow-hidden py-10">
      <div className="about-container max-w-7xl mx-auto">
        
        {/* Baris Pertama: Normal Scroll */}
        <div className="partners-carousel mb-6" aria-hidden="false">
          <div className="carousel-viewport overflow-hidden relative">
            <div className="carousel-track flex animate-scroll gap-6" role="list">
              {duplicatedImages.map((image, index) => (
                <div 
                  className="carousel-item flex-shrink-0 w-[120px] md:w-[150px] h-20 relative" 
                  key={`row1-${index}`} 
                  role="listitem"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 120px, 150px"
                    className="carousel-image object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Baris Kedua: Reverse Scroll */}
        <div
          className="partners-carousel partners-carousel--second"
          aria-hidden="false"
        >
          <div className="carousel-viewport overflow-hidden relative">
            <div className="carousel-track flex animate-scroll-reverse gap-6" role="list">
              {duplicatedImages2.map((image, index) => (
                <div
                  className="carousel-item flex-shrink-0 w-[120px] md:w-[150px] h-20 relative"
                  key={`row2-${index}`}
                  role="listitem"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 120px, 150px"
                    className="carousel-image object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}