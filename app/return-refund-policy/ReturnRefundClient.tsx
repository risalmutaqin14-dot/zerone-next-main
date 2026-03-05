"use client";

import React, { useState } from "react";
import { Mail, Calendar, Globe, ChevronRight, Menu } from "lucide-react";

export default function ReturnRefundClient() {
  const [language, setLanguage] = useState<"en" | "id">("en");

  const content = {
    en: {
      title: "Return & Refund Policy",
      subtitle: "Information regarding refunds and cancellations for our services",
      effectiveDate: "This policy is effective as of 2022-08-08",
      sections: [
        { id: "intro", title: "Introduction", content: `At Global Zerone Digital, we strive to ensure that our clients and users are satisfied with our services and products...` },
        { id: "software", title: "Software Development Services", content: `For custom software development projects (including web apps, mobile apps, and enterprise solutions):...` },
        { id: "subscription", title: "Subscription Services", content: `For our subscription-based products (such as our SaaS platforms):...` },
        { id: "digital", title: "Digital Products", content: `For downloadable digital products (e.g., templates, assets, or one-time purchase software):...` },
        { id: "request", title: "Requesting a Refund", content: `To request a refund or cancellation, please contact our support team with your order details...` },
        { id: "contact", title: "Contact Us", content: `If you have any questions about our Return & Refund Policy, please contact us at:`, email: "info@zerone.info" }
      ]
    },
    id: {
      title: "Kebijakan Pengembalian & Dana",
      subtitle: "Informasi mengenai pengembalian dana dan pembatalan layanan kami",
      effectiveDate: "Kebijakan ini berlaku sejak 08-08-2022",
      sections: [
        { id: "intro", title: "Pendahuluan", content: `Di Global Zerone Digital, kami berusaha memastikan bahwa klien dan pengguna kami puas dengan layanan dan produk kami...` },
        { id: "software", title: "Layanan Pengembangan Perangkat Lunak", content: `Untuk proyek pengembangan perangkat lunak kustom (termasuk aplikasi web, aplikasi seluler, dan solusi perusahaan):...` },
        { id: "subscription", title: "Layanan Berlangganan", content: `Untuk produk berbasis langganan kami (seperti platform SaaS kami):...` },
        { id: "digital", title: "Produk Digital", content: `Untuk produk digital yang dapat diunduh (misalnya, templat, aset, atau perangkat lunak):...` },
        { id: "request", title: "Mengajukan Pengembalian Dana", content: `Untuk mengajukan pengembalian dana, harap hubungi tim dukungan kami dengan detail pesanan Anda...` },
        { id: "contact", title: "Hubungi Kami", content: `Jika Anda memiliki pertanyaan tentang Kebijakan Pengembalian & Dana kami, silakan hubungi kami di:`, email: "info@zerone.info" }
      ]
    }
  };

  const current = content[language];

  // Fungsi untuk scroll halus ke target ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Jarak aman agar tidak tertutup Navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section 
        className="w-full pt-32 pb-20 md:pt-48 md:pb-20 text-white"
        style={{ background: 'linear-gradient(90deg, #00BBD7 0%, #0092D7 50%, #6E92D7 100%)' }}
      >
        <div className="container mx-auto px-6 lg:px-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              {current.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl">
              {current.subtitle}
            </p>

            <div className="flex bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/20 w-fit">
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  language === "en" ? "bg-white text-[#0092D7] shadow-lg" : "text-white hover:bg-white/10"
                }`}
              >
                <Globe size={16} /> EN
              </button>
              <button
                onClick={() => setLanguage("id")}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  language === "id" ? "bg-white text-[#0092D7] shadow-lg" : "text-white hover:bg-white/10"
                }`}
              >
                ID
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            
            {/* Sidebar / Quick Links */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <Menu size={18} className="text-blue-600" />
                  <h3 className="text-slate-900 font-black uppercase tracking-widest text-xs">Quick Links</h3>
                </div>
                
                {/* Horizontal scroll di mobile, list vertical di desktop */}
                <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 md:gap-4 pb-2 lg:pb-0 scrollbar-hide">
                  {current.sections.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(s.id)}
                      className="whitespace-nowrap flex items-center gap-3 text-slate-500 font-bold text-xs md:text-sm hover:text-blue-600 transition-all group flex-shrink-0"
                    >
                      <ChevronRight size={14} className="text-blue-500 hidden lg:block opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      <span className="bg-white lg:bg-transparent px-4 py-2 lg:p-0 rounded-full border border-slate-200 lg:border-none shadow-sm lg:shadow-none">
                        {s.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <div className="space-y-16">
                {current.sections.map((section, index) => (
                  <div key={index} id={section.id} className="scroll-mt-32">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-black text-base md:text-lg flex-shrink-0 border border-blue-100">
                        {index + 1}
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                          {section.title}
                        </h2>
                        <div className="text-slate-500 leading-relaxed text-base md:text-lg whitespace-pre-line text-justify">
                          {section.content}
                        </div>
                        
                        {section.email && (
                          <a
                            href={`mailto:${section.email}`}
                            className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 mt-4 group w-full md:w-fit justify-center"
                          >
                            <Mail size={18} className="group-hover:rotate-12 transition-transform" />
                            {section.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Effective Date Card */}
              <div className="mt-20 p-6 md:p-8 rounded-[32px] bg-[#F5F9FF] border border-blue-100 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-blue-900 font-black text-lg leading-none mb-2 md:mb-1">Last Update</p>
                  <p className="text-blue-600/70 font-bold text-sm md:text-base">{current.effectiveDate}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}