"use client";

import React from "react";
import Image from "next/image";
import { Download, FileText, Info, Check, X } from "lucide-react";

// --- DATA CONFIGURATION ---
const logoData = {
  zerone: [
    {
      id: "z1",
      title: "Zerone Primary",
      description: "Corporate main logo. Use on a light/white background.",
      bg: "bg-white",
      src: "/assets/DownloadLogos/Zerone-biru.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/Zerone-biru.png" }],
    },
    {
      id: "z2",
      title: "Zerone White",
      description: "White (inverted) version of the logo. Required for dark backgrounds.",
      bg: "bg-slate-900",
      src: "/assets/DownloadLogos/Zerone-Putih.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/Zerone-Putih.png" }],
    },
    {
      id: "z3",
      title: "Zerone Black",
      description: "Black version of the logo. Recommended for light backgrounds.",
      bg: "bg-gray-50",
      src: "/assets/DownloadLogos/Zerone-Black.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/Zerone-Black.png" }],
    },
  ],
  others: [
    { id: "o1", title: "Edunav", description: "School Information System", bg: "bg-white", src: "/assets/DownloadLogos/edunav.png", files: [{ type: "PNG", url: "/assets/DownloadLogos/edunav.png" }] },
    { id: "o2", title: "Latihan.id", description: "Best online exam solutions", bg: "bg-white", src: "/assets/DownloadLogos/latihan.png", files: [{ type: "PNG", url: "/assets/DownloadLogos/latihan.png" }] },
    { id: "o3", title: "Venti", description: "Complete event management", bg: "bg-white", src: "/assets/DownloadLogos/venti.png", files: [{ type: "PNG", url: "/assets/DownloadLogos/venti.png" }] },
    { id: "o4", title: "Writing Aide", description: "AI Writing Assistant", bg: "bg-white", src: "/assets/DownloadLogos/Logo-Writing-Aide.png", files: [{ type: "PNG", url: "/assets/DownloadLogos/Logo-Writing-Aide.png" }] },
    { id: "o5", title: "Rajin.id", description: "Productivity platform", bg: "bg-white", src: "/assets/DownloadLogos/rajin.png", files: [{ type: "PNG", url: "/assets/DownloadLogos/rajin.png" }] },
    { id: "o6", title: "Mari Dukung", description: "Donation platform", bg: "bg-white", src: "/assets/DownloadLogos/MariDukung.png", files: [{ type: "PNG", url: "/assets/DownloadLogos/MariDukung.png" }] },
    { id: "o7", title: "Jadwal Kuliah", description: "Student scheduling app", bg: "bg-white", src: "/assets/DownloadLogos/Jadwal-Kuliah-logo.png", files: [{ type: "PNG", url: "/assets/DownloadLogos/Jadwal-Kuliah-logo.png" }] },
  ],
};

type LogoFile = { type: string; url: string };
type LogoItem = {
  id: string;
  title: string;
  description: string;
  bg: string;
  src: string;
  files: LogoFile[];
};

const LogoCard: React.FC<{ logo: LogoItem }> = ({ logo }) => {
  const getFileName = (path: string) => path.split("/").pop() || "";

  return (
    <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
      <div className={`w-full aspect-[4/3] flex items-center justify-center ${logo.bg} relative p-12`}>
        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
          <Image
            src={logo.src}
            alt={logo.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h4 className="font-black text-xl text-slate-900 mb-2">{logo.title}</h4>
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">{logo.description}</p>

        <div className="mt-auto">
          {logo.files.map((file, idx) => (
            <a
              key={idx}
              href={file.url}
              download={getFileName(file.url)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold bg-slate-50 text-slate-700 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              <Download size={18} />
              DOWNLOAD PNG
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function LogoPageClient() {
  return (
    <div className="bg-slate-50 min-h-screen pb-32 overflow-x-hidden">
      {/* HEADER */}
      <header className="bg-white pt-40 pb-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Brand <span className="text-[#0092D7]">Assets</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Official logos, product marks, and visual identity guidelines for Zerone Global.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-32 max-w-7xl -mt-10 relative z-10">
        {/* BRAND GUIDELINE BOX */}
        <div className="bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] rounded-[40px] p-8 md:p-12 shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-8 mb-24 relative overflow-hidden">
  
  {/* PERBAIKAN 1: Tambahkan z-0 agar dekorasi tetap di bawah */}
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0"></div>
  
  {/* PERBAIKAN 2: Tambahkan z-10 agar konten teks berada di atas dekorasi */}
  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
    <div className="p-5 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30">
      <FileText size={40} className="text-white" />
    </div>
    <div>
      <h2 className="text-2xl md:text-3xl font-black mb-3">Brand Identity Manual</h2>
      <p className="text-blue-50 max-w-lg text-base md:text-lg opacity-90 leading-relaxed">
        Guidelines on logo usage, spacing, and color systems to ensure consistency.
      </p>
    </div>
  </div>

  {/* PERBAIKAN 3: Tambahkan z-10 agar tombol berada di lapisan teratas dan bisa diklik */}
  <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
    {[
      { label: "Guideline (Zerone)", url: "https://drive.google.com/file/d/1BzvgPdTbdIG2bUP4TLqrvhodo3pc8ehW/view?usp=sharing" },
      { label: "Guideline (Edunav)", url: "https://drive.google.com/file/d/1L4MaEnIBRcsEZwzV0xyFDDrpSfdjkHJE/view?usp=drive_link" }
    ].map((link, i) => (
      <a 
        key={i} 
        href={link.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-white text-[#0092D7] hover:bg-blue-50 px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 cursor-pointer"
      >
        <Download size={20} />
        {link.label}
      </a>
    ))}
  </div>
</div>

        {/* SECTION: ZERONE */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Info size={24} />
            </div>
            <h3 className="text-3xl font-black text-slate-900">Zerone Logos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {logoData.zerone.map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>
        </div>

        {/* SECTION: OTHERS */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-200">
              <Info size={24} />
            </div>
            <h3 className="text-3xl font-black text-slate-900">Product Ecosystem</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {logoData.others.map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>
        </div>

        {/* GUIDELINES (DOs / DON'Ts) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-emerald-50/50 p-10 rounded-[40px] border border-emerald-100">
            <div className="flex items-center gap-4 font-black text-emerald-700 mb-8">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center"><Check size={20} /></div>
              <span className="text-xl uppercase tracking-widest">The Dos</span>
            </div>
            <ul className="space-y-5 text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5"></div>
                Use original vector assets for high-quality printing.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5"></div>
                Maintain the minimum clear space around the logo.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5"></div>
                Use the white logo version only on dark backgrounds.
              </li>
            </ul>
          </div>

          <div className="bg-rose-50/50 p-10 rounded-[40px] border border-rose-100">
            <div className="flex items-center gap-4 font-black text-rose-700 mb-8">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center"><X size={20} /></div>
              <span className="text-xl uppercase tracking-widest">The Don&apos;ts</span>
            </div>
            <ul className="space-y-5 text-slate-700 font-medium">
              <li className="flex items-start gap-3 text-rose-900/70">
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5"></div>
                Never stretch, squash, or distort logo proportions.
              </li>
              <li className="flex items-start gap-3 text-rose-900/70">
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5"></div>
                Do not swap or change brand colors with custom palettes.
              </li>
              <li className="flex items-start gap-3 text-rose-900/70">
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5"></div>
                Do not add drop shadows, outlines, or glow effects.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}