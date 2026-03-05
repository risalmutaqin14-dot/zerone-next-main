import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, solutionAI } from "@/data"; // Pastikan path data sesuai dengan alias project Anda

// Pengganti Helmet - SEO Metadata
export const metadata: Metadata = {
  title: "AI App & Automation Development | Zerone Global Digital Solution",
  description:
    "Zerone.id provides AI app development and business automation services to increase efficiency, reduce errors, and accelerate your company's growth.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.zerone.id/ai-app-automation-development",
  },
  openGraph: {
    title: "AI App & Automation Development | Zerone Global Digital Solution",
    description:
      "AI solutions and business automation from Zerone.id for better efficiency and faster growth.",
    url: "https://www.zerone.id/ai-app-automation-development",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
        width: 1200,
        height: 630,
        alt: "Zerone AI Solutions",
      },
    ],
  },
};

export default function AiAppAutomation() {
  return (
    <div className="webApp pt-16 md:pt-4 bg-white pb-32">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2 items-center">
        <div className="pr-6">
          <h1 className="text-[30px] md:text-[36px] font-bold text-black pt-2 leading-tight">
            AI App &<br className="hidden md:inline" /> Automation Development
          </h1>
          <div className="mt-6 space-y-4">
            <p className="text-justify leading-relaxed text-gray-700">
              Zerone.id’s AI App & Automation Development service empowers
              businesses to build intelligent applications while automating
              critical workflows end-to-end. We combine advanced AI models,
              smart integrations, and process automation to eliminate manual
              work, reduce errors, and accelerate growth. From custom AI apps to
              fully automated business systems, we help organizations operate
              with greater efficiency and intelligence.
            </p>
            <div className="pt-4">
              <p className="text-[14px] italic text-gray-600">
                &quot;Efficiency is doing things right, effectiveness is doing
                the right things.&quot;
              </p>
              <p className="font-bold text-black">- Peter Drucker</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="flex mt-10">
            <div className="w-[240px]">
              <Link
                href="/contact"
                className="transition duration-300 ease-in-out hover:scale-105 flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3 shadow-md"
              >
                <span className="flex items-center bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0092d7"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-white pl-3 font-medium">
                  Get The Solution
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full hidden lg:block">
          <Image
            src="/assets/mockup/zeroneAI.webp"
            alt="Zerone AI Automation Mockup"
            fill
            // Tambahkan baris ini:
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Smart Integrations Section */}
      <div className="container mx-auto mt-20 mb-10 px-5">
        <h2 className="text-[24px] md:text-[36px] font-bold text-center text-black mb-3 leading-tight">
          Smart Integrations <br className="hidden md:inline" />
          &nbsp;to Reduce Errors and Manual Work
        </h2>
        <h3 className="text-[16px] md:text-[18px] text-center text-gray-600">
          Our solutions reduce manual work, minimize errors, and accelerate
          growth.
        </h3>
      </div>

      {/* Features Section */}
      <section className="container mx-auto lg:px-32 px-5 bg-white">
        {/* Menggunakan items-start agar aspek rasio asli tetap terjaga tanpa stretching */}
        <div className="mt-10 mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {[
            {
              src: solutionAI.ai1,
              alt: "AI-Powered Predictive Data Analytics Dashboard by Zerone Global Digital Solution",
            },
            {
              src: solutionAI.ai2,
              alt: "Natural Language Processing (NLP) System Implementation for Corporate Operations",
            },
            {
              src: solutionAI.ai3,
              alt: "Computer Vision and Automated Visual Inspection System for Industrial Digitization",
            },
            {
              src: solutionAI.ai4,
              alt: "Intelligent Robotic Process Automation (RPA) Workflow Solution for Efficiency",
            },
            {
              src: solutionAI.ai5,
              alt: "Enterprise Artificial Intelligence System Integration and Digital Transformation",
            },
            {
              src: solutionAI.ai6,
              alt: "Custom Generative AI and Machine Learning Solution for Creative Industries",
            },
          ].map((item, index) => (
            <div key={index} className="reveal-img group block">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-500 hover:shadow-2xl bg-slate-50 border border-gray-100">
                {/* MENGGUNAKAN UKURAN ASLI (Responsive Auto-Height) */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800} // Nilai dasar (fallback)
                  height={600} // Nilai dasar (fallback)
                  style={{ width: "100%", height: "auto" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                  priority={index < 3} // Optimasi LCP untuk baris pertama
                />

                {/* Overlay Efek Hover Minimalis (Sangat halus agar gambar asli tetap jelas) */}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Dekorasi Garis Halus saat Hover */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-[16px] transition-all duration-500 z-10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
