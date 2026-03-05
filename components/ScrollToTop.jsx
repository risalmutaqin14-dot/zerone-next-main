// src/components/ScrollToTop.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Komponen utilitas yang memastikan halaman menggulir ke atas (0,0)
 * setiap kali path URL berubah.
 */
function ScrollToTop() {
  // Dapatkan pathname saat ini dari Next.js
  const pathname = usePathname();

  // Jalankan efek ini setiap kali 'pathname' berubah
  useEffect(() => {
    // Scroll ke koordinat (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Dependensi: hanya berjalan saat path berubah

  // Komponen ini tidak me-render elemen apapun
  return null;
}

export default ScrollToTop;