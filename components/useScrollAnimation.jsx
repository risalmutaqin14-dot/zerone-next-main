// useScrollAnimation.js
import { useEffect } from 'react';
import "../css/Animasi.css";

/**
 * Hook untuk trigger animasi saat elemen masuk viewport
 * Gunakan class 'animate-on-scroll' dan data-animation='animate-fadein' (atau animasi lain)
 * 
 * Contoh:
 * <div className="animate-on-scroll" data-animation="animate-slideinup">
 *   Content...
 * </div>
 */
const useScrollAnimation = () => {
  useEffect(() => {
    // 1. Siapkan IntersectionObserver dengan threshold 0.1 (trigger saat 10% elemen terlihat)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ambil nama animasi dari data attribute (default: animate-fadein)
            const animationClass = entry.target.dataset.animation || 'animate-fadein';
            
            // Tambah class animasi saat muncul
            entry.target.classList.add(animationClass);
            
            // Stop pantau agar hemat memori
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger saat 10% elemen terlihat
    );

    // 2. Cari semua elemen dengan class 'animate-on-scroll'
    const targets = document.querySelectorAll('.animate-on-scroll');
    
    // 3. Mulai observasi setiap elemen
    targets.forEach((el) => observer.observe(el));

    // Cleanup saat unmount atau component pergi
    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;