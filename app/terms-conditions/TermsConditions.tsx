"use client";

import React, { useState } from "react";
import { Mail, Calendar, Globe, ChevronRight, Menu, ExternalLink } from "lucide-react";

export default function TermsConditionsClient() {
  const [language, setLanguage] = useState<"en" | "id">("en");

  const content = {
    en: {
      title: "Terms & Conditions",
      subtitle: "Please read these terms carefully before using our app",
      effectiveDate: "These terms and conditions are effective as of 2022-08-08",
      sections: [
        { id: "intro", title: "Introduction", content: `By downloading or using the app, these terms will automatically apply to you...` },
        { id: "changes", title: "Changes to the App", content: `Global Zerone Digital is committed to ensuring that the app is as useful and efficient as possible...` },
        { id: "security", title: "Data & Security", content: `The Edunav app stores and processes personal data that you have provided to us...` },
        { 
            id: "thirdparty", 
            title: "Third-Party Services", 
            content: `The app does use third-party services that declare their Terms and Conditions.`,
            list: [
                { text: "Google Play Services", url: "https://policies.google.com/terms" },
                { text: "Google Analytics for Firebase", url: "https://firebase.google.com/terms/analytics" }
            ]
        },
        { id: "limitations", title: "Limitations of Responsibility", content: `You should be aware that there are certain things that Global Zerone Digital will not take responsibility for...` },
        { id: "network", title: "Network Charges", content: `If you're using the app outside of an area with Wi-Fi, the terms of the agreement with your mobile network provider still apply...` },
        { id: "usage", title: "Usage Responsibility", content: `Global Zerone Digital cannot always take responsibility for the way you use the app (e.g., keeping your device charged).` },
        { id: "liability", title: "Liability", content: `Global Zerone Digital accepts no liability for any loss, direct or indirect, you experience as a result of relying on app functionality.` },
        { id: "termination", title: "Updates & Termination", content: `We may update the app. Requirements for Android & iOS may change, and you'll need to download updates to keep using the app.` },
        { id: "contact", title: "Contact Us", content: `If you have any questions or suggestions about our Terms and Conditions, contact us at:`, email: "info@zerone.info" }
      ]
    },
    id: {
      title: "Syarat & Ketentuan",
      subtitle: "Harap baca syarat ini dengan seksama sebelum menggunakan aplikasi kami",
      effectiveDate: "Syarat dan ketentuan ini berlaku sejak 08-08-2022",
      sections: [
        { id: "intro", title: "Pendahuluan", content: `Dengan mengunduh atau menggunakan aplikasi, ketentuan ini akan berlaku secara otomatis untuk Anda...` },
        { id: "changes", title: "Perubahan pada Aplikasi", content: `Global Zerone Digital berkomitmen untuk memastikan bahwa aplikasi seberguna dan seefisien mungkin...` },
        { id: "security", title: "Data & Keamanan", content: `Aplikasi Edunav menyimpan dan memproses data pribadi yang telah Anda berikan kepada kami...` },
        { 
            id: "thirdparty", 
            title: "Layanan Pihak Ketiga", 
            content: `Aplikasi menggunakan layanan pihak ketiga yang menyatakan Syarat dan Ketentuannya.`,
            list: [
                { text: "Google Play Services", url: "https://policies.google.com/terms" },
                { text: "Google Analytics for Firebase", url: "https://firebase.google.com/terms/analytics" }
            ]
        },
        { id: "limitations", title: "Batasan Tanggung Jawab", content: `Fungsi tertentu dari aplikasi akan membutuhkan koneksi internet yang aktif...` },
        { id: "network", title: "Biaya Jaringan", content: `Jika Anda menggunakan aplikasi di luar area Wi-Fi, ketentuan penyedia jaringan seluler Anda tetap berlaku...` },
        { id: "usage", title: "Tanggung Jawab Penggunaan", content: `Global Zerone Digital tidak selalu dapat bertanggung jawab atas cara Anda menggunakan aplikasi...` },
        { id: "liability", title: "Kewajiban", content: `Global Zerone Digital tidak menerima tanggung jawab atas kerugian apa pun sebagai akibat dari mengandalkan fungsionalitas aplikasi.` },
        { id: "termination", title: "Pembaruan & Penghentian", content: `Persyaratan untuk sistem Android & iOS dapat berubah, dan Anda perlu mengunduh pembaruan jika ingin terus menggunakan aplikasi.` },
        { id: "contact", title: "Hubungi Kami", content: `Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan kami, hubungi kami di:`, email: "info@zerone.info" }
      ]
    }
  };

  const current = content[language];

  const scrollToSection = (id : string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
        className="w-full pt-32 pb-20 md:pt-48 md:pb-32 text-white"
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

            {/* Language Toggle */}
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
              <div className="bg-slate-50 rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Menu size={18} className="text-blue-600" />
                  <h3 className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Quick Navigation</h3>
                </div>
                
                {/* Responsive Navigation: Scroll horizontal di mobile, list vertical di desktop */}
                <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 md:gap-4 pb-4 lg:pb-0 no-scrollbar">
                  {current.sections.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(s.id)}
                      className="whitespace-nowrap flex items-center gap-3 text-slate-500 font-bold text-xs md:text-sm hover:text-blue-600 transition-all group flex-shrink-0"
                    >
                      <ChevronRight size={14} className="text-blue-500 hidden lg:block opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      <span className="bg-white lg:bg-transparent px-5 py-2.5 lg:p-0 rounded-full border border-slate-200 lg:border-none shadow-sm lg:shadow-none">
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
                  <div key={index} id={section.id} className="scroll-mt-32 reveal-text">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-8">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-black text-lg flex-shrink-0 border border-blue-100">
                        {index + 1}
                      </div>
                      <div className="space-y-5 w-full">
                        <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-tight">
                          {section.title}
                        </h2>
                        <div className="text-slate-500 leading-relaxed text-base md:text-lg text-justify whitespace-pre-line">
                          {section.content}
                        </div>

                        {/* Special List for Third Party */}
                        {section.list && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {section.list.map((item, idx) => (
                              <a 
                                key={idx} 
                                href={item.url} 
                                target="_blank" 
                                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all group"
                              >
                                <span className="font-bold text-slate-700 text-sm">{item.text}</span>
                                <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                              </a>
                            ))}
                          </div>
                        )}
                        
                        {section.email && (
                          <a
                            href={`mailto:${section.email}`}
                            className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-[20px] font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 mt-6 group w-full md:w-fit justify-center"
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
              <div className="mt-20 p-8 md:p-12 rounded-[40px] bg-[#F5F9FF] border border-blue-100 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Calendar size={32} />
                </div>
                <div>
                  <h4 className="text-blue-900 font-black text-xl mb-2">Legal Information</h4>
                  <p className="text-blue-600/70 font-bold text-base md:text-lg leading-relaxed">{current.effectiveDate}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}