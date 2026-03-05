"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function TextAnimation() {
  useEffect(() => {
    // 1. Buat context untuk animasi di halaman ini
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ 
        defaults: { ease: "power3.out" } 
      });

      tl.from(".main-title", {
        y: 80,
        opacity: 0,
        duration: 1,
      })
      .from(".tagline", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(".description", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(".hero-content .flex.justify-center.items-center.mt-8", {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
      }, "-=0.5")
      .from(".device-mockup", {
        y: 80,
        opacity: 0,
        duration: 1,
      }, "-=0.7");
    });

    // 2. Cleanup function: Penting agar animasi jalan lagi saat balik ke page ini
    return () => ctx.revert(); 
  }, []); // [] memastikan efek jalan setiap kali komponen di-mount (pindah page)

  return null;
}