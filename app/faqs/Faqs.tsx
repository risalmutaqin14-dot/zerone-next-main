"use client";

import React, { useState } from "react";
import { ChevronDown, Search, Globe } from "lucide-react";

// Definisikan tipe data untuk FAQ
type FAQContent = {
  question: string;
  answer: React.ReactNode;
};

type FAQItem = {
  en: FAQContent;
  id: FAQContent;
};

const faqs: FAQItem[] = [
  {
    en: {
      question: "What is zerone.id?",
      answer: <p>zerone.id is an information technology company that provides integrated digital solutions. We develop systems that streamline administration, strengthen security, and support scalable operations for organizations across multiple sectors.</p>
    },
    id: {
      question: "Apa itu zerone.id?",
      answer: <p>zerone.id adalah perusahaan teknologi informasi yang menyediakan solusi digital terintegrasi. Kami mengembangkan sistem yang menyederhanakan administrasi, memperkuat keamanan, dan mendukung operasional yang terukur bagi organisasi di berbagai sektor.</p>
    }
  },
  {
    en: {
      question: "What products does zerone.id offer?",
      answer: (
        <div className="space-y-2">
          <p>zerone.id provides a complete ecosystem of digital platforms:</p>
          <ul className="list-disc pl-5 space-y-1 font-medium">
            <li>Edunav: Integrated School Information System</li>
            <li>Latihan.id: Secure CBT and Assessment Platform</li>
            <li>Venti.id: Event and Ticketing Management Platform</li>
            <li>WritingAide: AI Writing and Feedback Assistant</li>
            <li>Rajin.id: Tutoring and Learning Platform</li>
            <li>MariDukung.com: Crowdfunding Platform</li>
            <li>JadwalKuliah.id: College Directory and Schedule Platform</li>
          </ul>
        </div>
      )
    },
    id: {
      question: "Produk apa saja yang ditawarkan zerone.id?",
      answer: (
        <div className="space-y-2">
          <p>zerone.id menyediakan ekosistem platform digital yang lengkap:</p>
          <ul className="list-disc pl-5 space-y-1 font-medium">
            <li>Edunav: Sistem Informasi Sekolah Terintegrasi</li>
            <li>Latihan.id: Platform CBT dan Asesmen Aman</li>
            <li>Venti.id: Platform Manajemen Event dan Tiketing</li>
            <li>WritingAide: Asisten Menulis dan Feedback AI</li>
            <li>Rajin.id: Platform Bimbel dan Pembelajaran</li>
            <li>MariDukung.com: Platform Crowdfunding</li>
            <li>JadwalKuliah.id: Platform Direktori dan Jadwal Kuliah</li>
          </ul>
        </div>
      )
    }
  },
  {
    en: {
      question: "What IT services does zerone.id provide?",
      answer: (
        <div className="space-y-2">
          <p>Our collaboration process includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Needs analysis and consultation</li>
            <li>Demo and product review</li>
            <li>Proposal and agreement</li>
            <li>System setup and onboarding</li>
            <li>Training for teams and users</li>
            <li>Launch and operational support</li>
          </ul>
        </div>
      )
    },
    id: {
      question: "Layanan IT apa yang disediakan zerone.id?",
      answer: (
        <div className="space-y-2">
          <p>Proses kolaborasi kami meliputi:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Analisis kebutuhan dan konsultasi</li>
            <li>Demo dan tinjauan produk</li>
            <li>Proposal dan kesepakatan</li>
            <li>Pengaturan sistem dan onboarding</li>
            <li>Pelatihan untuk tim dan pengguna</li>
            <li>Peluncuran dan dukungan operasional</li>
          </ul>
        </div>
      )
    }
  },
  {
    en: {
      question: "Does zerone.id provide onsite and online sessions?",
      answer: <p>Yes. We offer user training through online sessions for our products, and onsite training can be arranged with prior coordination to ensure effective implementation and localized support.</p>
    },
    id: {
      question: "Apakah zerone.id menyediakan sesi onsite dan online?",
      answer: <p>Ya. Kami menawarkan pelatihan pengguna melalui sesi online untuk produk kami, dan pelatihan di lokasi (onsite) dapat diatur dengan koordinasi sebelumnya untuk memastikan implementasi yang efektif dan dukungan langsung.</p>
    }
  },
  {
    en: {
      question: "Can zerone.id handle large clients or multi-branch organizations?",
      answer: <p>Yes. Our systems are designed for multi-unit structures with central dashboards. For example, Edunav provides an HQ Dashboard for institutions managing multiple schools, allowing management to monitor data from all campuses without individual logins.</p>
    },
    id: {
      question: "Dapatkah zerone.id menangani klien besar atau organisasi multi-cabang?",
      answer: <p>Ya. Sistem kami dirancang untuk struktur multi-unit dengan dashboard pusat. Sebagai contoh, Edunav menyediakan Dashboard HQ untuk institusi yang mengelola banyak sekolah, memungkinkan manajemen memantau data dari semua cabang tanpa perlu login satu per satu.</p>
    }
  },
  {
    en: {
      question: "Does zerone.id offer AI solutions?",
      answer: <p>Yes. zerone.id delivers AI functionality across its platforms, such as Edunav’s multi-curriculum AI Lesson Plan Generator and WritingAide’s AI-driven writing and evaluation tools.</p>
    },
    id: {
      question: "Apakah zerone.id menawarkan solusi AI?",
      answer: <p>Ya. zerone.id menghadirkan fungsionalitas AI di berbagai platformnya, seperti Generator Rencana Pembelajaran AI multi-kurikulum di Edunav dan alat penulisan serta evaluasi berbasis AI di WritingAide.</p>
    }
  },
  {
    en: {
      question: "Can zerone.id develop custom systems?",
      answer: <p>Yes. We provide custom development services for organizations that need specific workflows, unique integrations, or entirely new digital platforms tailored to their operational requirements.</p>
    },
    id: {
      question: "Dapatkah zerone.id mengembangkan sistem kustom?",
      answer: <p>Ya. Kami menyediakan layanan pengembangan kustom bagi organisasi yang membutuhkan alur kerja spesifik, integrasi unik, atau platform digital baru yang disesuaikan dengan kebutuhan operasional mereka.</p>
    }
  },
  {
    en: {
      question: "How does zerone.id protect user data?",
      answer: <p>All systems run on secure servers with encrypted data storage. We follow industry-standard security practices to ensure maximum confidentiality and data safety for all our clients.</p>
    },
    id: {
      question: "Bagaimana zerone.id melindungi data pengguna?",
      answer: <p>Semua sistem berjalan di server yang aman dengan penyimpanan data terenkripsi. Kami mengikuti praktik keamanan standar industri untuk memastikan kerahasiaan maksimal dan keamanan data bagi seluruh klien kami.</p>
    }
  },
  {
    en: {
      question: "Who owns the data stored in zerone.id systems?",
      answer: <p>Clients retain full ownership of their data. zerone.id only manages the technical system and does not use client data for any other purpose without explicit authorization.</p>
    },
    id: {
      question: "Siapa yang memiliki data yang tersimpan di sistem zerone.id?",
      answer: <p>Klien tetap memiliki kepemilikan penuh atas data mereka. zerone.id hanya mengelola sistem teknis dan tidak menggunakan data klien untuk tujuan lain apa pun tanpa otorisasi eksplisit.</p>
    }
  },
  {
    en: {
      question: "Is the system cloud-based?",
      answer: <p>Yes. Our products are cloud-based and accessible anywhere, ensuring high availability and seamless access across web and mobile platforms.</p>
    },
    id: {
      question: "Apakah sistemnya berbasis cloud?",
      answer: <p>Ya. Produk kami berbasis cloud dan dapat diakses di mana saja, memastikan ketersediaan tinggi dan akses mulus di berbagai platform web maupun seluler.</p>
    }
  },
  {
    en: {
      question: "Does zerone.id perform data backup?",
      answer: <p>Yes. zerone.id conducts daily data backups. We also offer deployment options that allow institutions to store data on their own private servers to meet specific compliance standards.</p>
    },
    id: {
      question: "Apakah zerone.id melakukan backup data?",
      answer: <p>Ya. zerone.id melakukan backup data harian secara otomatis. Kami juga menawarkan opsi instalasi yang memungkinkan institusi menyimpan data di server pribadi mereka sendiri untuk memenuhi standar kepatuhan tertentu.</p>
    }
  },
  {
    en: {
      question: "How does zerone.id structure its pricing?",
      answer: <p>Pricing depends on the product and organizational scale. We offer subscription-based models, per-user models, event-based pricing, and project-based costs for custom development.</p>
    },
    id: {
      question: "Bagaimana zerone.id mengatur struktur harga?",
      answer: <p>Harga bergantung pada jenis produk dan skala organisasi. Kami menawarkan model berbasis langganan, model per pengguna, harga berbasis acara, dan biaya berbasis proyek untuk pengembangan kustom.</p>
    }
  },
  {
    en: {
      question: "Are there additional fees?",
      answer: <p>Additional fees apply only if the client requires extra storage beyond the standard quota, highly specific custom features, or advanced third-party integrations.</p>
    },
    id: {
      question: "Apakah ada biaya tambahan?",
      answer: <p>Biaya tambahan hanya berlaku jika klien memerlukan kapasitas penyimpanan ekstra di luar kuota standar, fitur kustom yang sangat spesifik, atau integrasi pihak ketiga tingkat lanjut.</p>
    }
  },
  {
    en: {
      question: "Does zerone.id provide training for users?",
      answer: <p>Yes. We offer comprehensive user training through online sessions for all our products. Onsite training can also be arranged with prior coordination.</p>
    },
    id: {
      question: "Apakah zerone.id menyediakan pelatihan bagi pengguna?",
      answer: <p>Ya. Kami menawarkan pelatihan pengguna yang komprehensif melalui sesi online untuk semua produk kami. Pelatihan di lokasi juga dapat diatur dengan koordinasi sebelumnya.</p>
    }
  },
  {
    en: {
      question: "How can clients request technical support?",
      answer: <p>Clients may contact us through WhatsApp, e-mail, our dedicated ticketing channels, or directly via an assigned account manager.</p>
    },
    id: {
      question: "Bagaimana klien dapat meminta dukungan teknis?",
      answer: <p>Klien dapat menghubungi kami melalui WhatsApp, e-mail, saluran tiket khusus kami, atau secara langsung melalui manajer akun yang ditugaskan.</p>
    }
  },
  {
    en: {
      question: "Does zerone.id offer continuous assistance after implementation?",
      answer: <p>Yes. We provide ongoing support, system maintenance, and periodic reviews to ensure the long-term success of the digital transformation in your organization.</p>
    },
    id: {
      question: "Apakah zerone.id menawarkan bantuan berkelanjutan setelah implementasi?",
      answer: <p>Ya. Kami menyediakan dukungan berkelanjutan, pemeliharaan sistem, dan tinjauan berkala untuk memastikan keberhasilan jangka panjang dari transformasi digital di organisasi Anda.</p>
    }
  },
  {
    en: {
      question: "Is zerone.id only for schools?",
      answer: <p>No. Our solutions are designed for any organization needing digital transformation. Many products like Venti.id, WritingAide, and our IT services are used by corporate companies, events, and non-profits.</p>
    },
    id: {
      question: "Apakah zerone.id hanya untuk sekolah?",
      answer: <p>Tidak. Solusi kami dirancang untuk organisasi mana pun yang membutuhkan transformasi digital. Banyak produk seperti Venti.id, WritingAide, dan layanan IT kami digunakan oleh perusahaan korporat, penyelenggara acara, dan organisasi nirlaba.</p>
    }
  },
  {
    en: {
      question: "Can zerone.id integrate with external systems?",
      answer: <p>Yes. We provide integration services with third-party platforms through API connectivity and custom development to ensure your ecosystem works harmoniously.</p>
    },
    id: {
      question: "Dapatkah zerone.id berintegrasi dengan sistem eksternal?",
      answer: <p>Ya. Kami menyediakan layanan integrasi dengan platform pihak ketiga melalui konektivitas API dan pengembangan kustom untuk memastikan ekosistem Anda bekerja secara harmonis.</p>
    }
  },
  {
    en: {
      question: "Does zerone.id support payment gateways and notifications?",
      answer: <p>Yes. We offer integrations with leading payment providers, WhatsApp notification services, and multi-platform access for both web and mobile users.</p>
    },
    id: {
      question: "Apakah zerone.id mendukung gerbang pembayaran dan notifikasi?",
      answer: <p>Ya. Kami menawarkan integrasi dengan penyedia pembayaran terkemuka, layanan notifikasi WhatsApp, dan akses multi-platform bagi pengguna web maupun seluler.</p>
    }
  },
  {
    en: {
      question: "Can organizations request new modules or custom features?",
      answer: <p>Yes. Custom development is available based on project scope. Costs are determined by complexity, required resources, and the agreed timeline.</p>
    },
    id: {
      question: "Dapatkah organisasi meminta modul baru atau fitur kustom?",
      answer: <p>Ya. Pengembangan kustom tersedia berdasarkan cakupan proyek. Biaya ditentukan oleh kompleksitas, sumber daya yang dibutuhkan, dan lini masa yang disepakati.</p>
    }
  }
];

export default function FaqClient() {
  const [language, setLanguage] = useState<"en" | "id">("en");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter((item) =>
    item[language].question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Language & Search Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder={language === "en" ? "Search questions..." : "Cari pertanyaan..."}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-3.5 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-400 focus:outline-none transition-all shadow-sm"
          />
        </div>

        {/* Language Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setLanguage("en")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              language === "en" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              language === "id" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((item, index) => {
          const content = item[language];
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border-2 rounded-[24px] transition-all duration-300 ${
                isOpen ? "border-blue-400 bg-blue-50/20 shadow-md" : "border-slate-50 bg-white hover:border-slate-200"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <h3 className={`font-black text-base md:text-lg transition-colors ${isOpen ? "text-blue-600" : "text-slate-800"}`}>
                  {content.question}
                </h3>
                <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm md:text-base font-medium border-t border-blue-100/50 pt-4">
                  {content.answer}
                </div>
              </div>
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200">
            <p className="text-slate-500 font-bold">
              {language === "en" ? "No results found for your search." : "Tidak ada hasil yang ditemukan."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}