"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { banner as dataBanner } from "@/data";

const products = [
  {
    key: "edunav",
    title: "EduNav",
    alt: "Integrated School System",
    href: "/edunav",
  },
  {
    key: "latihan",
    title: "Latihan.id",
    alt: "Secure Online Exam",
    href: "/latihan",
  },
  {
    key: "rajin",
    title: "Rajin.id",
    alt: "Online Learning Platform",
    href: "/rajin",
  },
  {
    key: "venti",
    title: "Venti.id",
    alt: "Event & Ticketing Platform",
    href: "/venti",
  },
  {
    key: "jadwalkuliah",
    title: "JadwalKuliah",
    alt: "Academic Scheduling",
    href: "/jadwal-kuliah",
  },
  {
    key: "writingaide",
    title: "WritingAide",
    alt: "AI Writing Assistant",
    href: "/writing-aide",
  },
  {
    key: "maridukung",
    title: "MariDukung",
    alt: "Social Collaboration",
    href: "/mari-dukung",
  },
];

const ArrowIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 ${className}`}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function DynamicProductCarousel({
  banner,
}: { banner?: any } = {}) {
  const bannerData = banner ?? dataBanner;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const handleNext = () => {
    if (activeIndex < products.length - 1) setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const activeProduct = products[activeIndex];
  const activeBannerKey = isMobile
    ? `mobile${activeProduct.key}`
    : activeProduct.key;
  const activeBannerSrc =
    bannerData[activeBannerKey] ?? bannerData[activeProduct.key];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch min-h-[600px] md:h-[85vh]">
        {/* ─── KIRI: Navigasi (1/3) ─── */}
        <div className="w-full md:w-1/3 flex flex-col justify-center z-30 px-6 md:px-8 lg:px-16 bg-white py-10 md:py-0">
          <div className="mb-8 md:mb-10 md:pl-10 lg:pl-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 tracking-tight mb-4">
              The Future of Digital Innovation
            </h2>
            <div className="h-1 w-12 bg-blue-600 mb-6 rounded-full mx-auto md:mx-0" />
            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto md:mx-0">
              Scalable platforms built for modern organizations.
            </p>
          </div>

          {/* Navigasi Mobile: Menyamping & Scrollable | Desktop: Vertikal */}
          <nav
            className="w-full flex md:flex-col items-center md:items-start justify-start gap-2 md:gap-4 md:pl-10 lg:pl-20 overflow-x-auto overflow-y-hidden md:overflow-visible pb-4 md:pb-0 no-scrollbar snap-x snap-mandatory touch-pan-x"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {products.map((p, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={p.key}
                  onClick={() => setActiveIndex(i)}
                  className="group flex items-center shrink-0 snap-start outline-none transition-all duration-300"
                >
                  {/* Garis indikator hanya muncul di desktop */}
                  <span
                    className={`hidden md:block h-px transition-all duration-500 mr-4 ${
                      isActive
                        ? "w-10 bg-blue-600"
                        : "w-4 bg-gray-300 group-hover:bg-blue-400"
                    }`}
                  />
                  {/* Styling Pill untuk Mobile, Teks biasa untuk Desktop */}
                  <span
                    className={`px-4 py-2 md:px-0 md:py-0 rounded-full border md:border-none text-sm md:text-base font-bold transition-all duration-500 whitespace-nowrap ${
                      isActive
                        ? "text-blue-600 border-blue-600 bg-blue-50 md:bg-transparent md:translate-x-1"
                        : "text-gray-400 border-gray-200 hover:text-gray-600"
                    }`}
                  >
                    {p.title}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* ─── KANAN: Gambar (2/3) ─── */}
        <div className="w-full md:w-2/3 flex items-center relative bg-[#F8FAFC] md:rounded-l-[100px] shadow-[inset_20px_0_40px_-20px_rgba(0,0,0,0.1)] py-4 md:py-6">
          <div className="w-full h-full flex flex-col items-center justify-center px-4 py-0 md:p-12 lg:p-16">
            {/* Box Gambar */}
            <div className="relative w-full aspect-[9/16] md:aspect-[4/3] md:h-full md:max-h-[450px] flex items-center justify-center">
              <Image
                key={activeProduct.key}
                src={activeBannerSrc}
                alt={activeProduct.alt}
                fill
                sizes="(max-width: 767px) 100vw, 66vw"
                className="object-cover md:object-contain transition-all duration-700 ease-out animate-in fade-in slide-in-from-right-4"
                priority
              />
            </div>

            {/* Tombol Explore & Navigasi Panah */}
            <div className="mt-8 flex flex-col sm:flex-row items-center space-between gap-12 w-full max-w-sm px-4 md:px-12 mx-4 md:mx-0">
              <Link
                href={activeProduct.href}
                className="w-full sm:w-auto transition duration-300 hover:scale-105 flex items-center justify-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-transparent rounded-[50px]  pl-3 pr-8 py-2 group/btn shadow-lg"
              >
                <span className="bg-white rounded-full p-2 mr-4 shadow-md transition-transform duration-300 group-hover/btn:rotate-[360deg]">
                  <ArrowIcon className="text-[#0092d7]" />
                </span>
                <span className="text-white font-bold text-lg tracking-wide whitespace-nowrap">
                  Explore {activeProduct.title}
                </span>
              </Link>

              <div className="flex gap-4 p-2 rounded-full bg-gray-50/50 border border-gray-100 shadow-inner">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#00BBD7,#0092D7,#6E92D7)]" />
                  <ArrowIcon className="relative z-10 text-white rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeIndex === products.length - 1}
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#00BBD7,#0092D7,#6E92D7)]" />
                  <ArrowIcon className="relative z-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
