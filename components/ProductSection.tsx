"use client";

import { useEffect, useRef, useState } from "react";
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
const DESKTOP_SCROLL_TAIL_VH = 100;

const ArrowIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 -960 960 960"
    width="20px"
    fill="currentColor"
    className={className}
  >
    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
  </svg>
);

export default function DynamicProductCarousel({
  banner,
}: { banner?: any } = {}) {
  const bannerData = banner ?? dataBanner;
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProductKey, setActiveProductKey] = useState(products[0].key);
  const [isMobile, setIsMobile] = useState(false);
  const gsapRef = useRef<any>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let ctx: any;
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (!trackRef.current || !sectionRef.current) return;

        const slides = gsap.utils.toArray(".product-slide");
        const totalSlides = slides.length;

        gsapRef.current = gsap.to(trackRef.current, {
          xPercent: -100 * (totalSlides - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: false,
            scrub: 1,
            start: "top top",
            end: `+=${(totalSlides - 1) * 100}%`,
            snap: 1 / (totalSlides - 1),
            onUpdate: (self) => {
              const activeIndex = Math.round(self.progress * (totalSlides - 1));
              if (products[activeIndex]) {
                setActiveProductKey(products[activeIndex].key);
              }
            },
          },
        });
      }, sectionRef);
    };

    initGSAP();
    return () => {
      if (gsapRef.current?.scrollTrigger) gsapRef.current.scrollTrigger.kill();
      if (gsapRef.current) gsapRef.current.kill();
      gsapRef.current = null;
      if (ctx) ctx.revert();
    };
  }, [isMobile]);

  const scrollToProduct = (index: number) => {
    const st = gsapRef.current?.scrollTrigger;
    if (!st) return;
    const safeIndex = Math.max(0, Math.min(index, products.length - 1));
    const targetScroll =
      st.start + (safeIndex / (products.length - 1)) * (st.end - st.start);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const handleNext = () => {
    const currentIndex = products.findIndex((p) => p.key === activeProductKey);
    scrollToProduct(currentIndex + 1);
  };

  const handlePrev = () => {
    const currentIndex = products.findIndex((p) => p.key === activeProductKey);
    scrollToProduct(currentIndex - 1);
  };

  const activeIndex = products.findIndex((p) => p.key === activeProductKey);
  const safeActiveIndex = activeIndex < 0 ? 0 : activeIndex;
  const activeProduct = products[safeActiveIndex];

  if (isMobile) {
    return (
      <section className="w-full bg-white py-14">
        <div className="px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 tracking-tight">
              The Future of Digital Innovation
            </h2>
            <div className="h-1 w-12 bg-blue-600 mt-4 mb-4 rounded-full" />
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Scalable platforms built for modern organizations.
            </p>
          </div>

          <nav
            className="w-full flex gap-2 overflow-x-auto overflow-y-hidden pb-2 touch-pan-x snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
            aria-label="Product navigation"
          >
            {products.map((p) => {
              const isActive = activeProductKey === p.key;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setActiveProductKey(p.key)}
                  className={`shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  {p.title}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 rounded-3xl border border-gray-100 bg-[#F8FAFC] p-4 shadow-sm">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
              <Image
                src={bannerData[activeProduct.key]}
                alt={activeProduct.alt}
                fill
                className="object-contain p-3"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveProductKey(
                    products[Math.max(0, safeActiveIndex - 1)].key,
                  )
                }
                disabled={safeActiveIndex === 0}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-blue-600 disabled:opacity-30"
              >
                <ArrowIcon className="rotate-180" />
              </button>

              <Link
                href={activeProduct.href}
                className="flex-1 transition duration-300 flex items-center justify-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-transparent rounded-[50px] px-4 py-2.5 shadow-md"
              >
                <span className="text-white font-bold text-sm whitespace-nowrap">
                  Explore {activeProduct.title}
                </span>
              </Link>

              <button
                type="button"
                onClick={() =>
                  setActiveProductKey(
                    products[Math.min(products.length - 1, safeActiveIndex + 1)]
                      .key,
                  )
                }
                disabled={safeActiveIndex === products.length - 1}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-blue-600 disabled:opacity-30"
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    /* Perubahan Utama: 
       1. Menambahkan 'sticky top-0'
       2. Memastikan parent tidak memiliki 'overflow-hidden' yang merusak sticky (pindahkan overflow ke kontainer dalam)
    */
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${products.length * 100 + DESKTOP_SCROLL_TAIL_VH}vh` }} // Ruang ekstra di akhir agar sisa scroll terjadi setelah slide terakhir
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-white z-20">
        <div className="w-full h-full flex flex-col md:flex-row items-center">
          {/* ─── KIRI: Navigasi (1/3) ─── */}
          <div className="w-full md:w-1/3 md:h-full flex flex-col justify-center z-30 px-8 lg:px-16 bg-white shadow-xl md:shadow-none">
            <div className="mb-10 md:pl-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 tracking-tight mb-4 pt-10">
                The Future of Digital Innovation
              </h2>
              <div className="h-1 w-12 bg-blue-600 mb-6 rounded-full" />
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                Scalable platforms built for modern organizations.
              </p>
            </div>

            <nav className="space-y-4 md:pl-20">
              {products.map((p, i) => {
                const isActive = activeProductKey === p.key;
                return (
                  <button
                    key={p.key}
                    onClick={() => scrollToProduct(i)}
                    className="group flex items-center w-full text-left outline-none transition-all duration-300"
                  >
                    <span
                      className={`h-px transition-all duration-500 mr-4 ${isActive ? "w-10 bg-blue-600" : "w-4 bg-gray-300 group-hover:bg-blue-400"}`}
                    />
                    <span
                      className={`text-base font-bold transition-all duration-500 ${isActive ? "text-blue-600 translate-x-1" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      {p.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* ─── KANAN: Gambar (2/3) ─── */}
          <div className="w-full md:w-2/3 h-[75vh] md:h-full flex items-center relative bg-[#F8FAFC] rounded-bl-[100px] shadow-[inset_20px_0_40px_-20px_rgba(0,0,0,0.15)]">
            <div
              ref={trackRef}
              className="flex h-full w-full nominee-track will-change-transform"
            >
              {products.map((p, index) => (
                <div
                  key={p.key}
                  className="product-slide flex-shrink-0 w-full h-full flex items-center justify-center p-4 md:p-12 lg:p-16"
                >
                  <div className="relative w-full h-full rounded-[48px] px-8 border border-gray-100 flex items-center justify-center overflow-hidden group">
                    <div className="relative w-[92%] h-[92%] overflow-hidden rounded-[32px] transition-transform duration-1000 ease-out group-hover:scale-105">
                      <Image
                        src={bannerData[p.key]}
                        alt={p.alt}
                        fill
                        className="object-contain rounded-[32px]"
                        priority={index === 0}
                      />
                    </div>

                    <div className="absolute bottom-6 left-12 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <Link
                        href={p.href}
                        className="transition duration-300 hover:scale-105 flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-transparent rounded-[50px] pl-3 pr-8 py-2 group/btn shadow-lg"
                      >
                        <span className="bg-white rounded-full p-2 mr-4 shadow-md transition-transform duration-300 group-hover/btn:rotate-[360deg]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 -960 960 960"
                            width="20"
                            fill="#0092d7"
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          >
                            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                          </svg>
                        </span>
                        <span className="text-white font-bold text-lg tracking-wide whitespace-nowrap">
                          Explore {p.title}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── ARROW NAVIGATION ─── */}
            <div className="absolute bottom-8 right-8 md:bottom-24 md:right-30 flex gap-4 z-40">
              <button
                onClick={handlePrev}
                disabled={activeProductKey === products[0].key}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                <ArrowIcon className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                disabled={
                  activeProductKey === products[products.length - 1].key
                }
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
