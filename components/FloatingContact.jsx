// src/components/FloatingContact.tsx
"use client";

import React from "react";
import { logos } from "@/data";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-7 right-7 z-50 group">
      {/* Tombol Utama (Icon Chat/Pesan) */}
      <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 cursor-pointer relative z-20">
        {/* Menggunakan Icon Chat Bubble agar lebih relevan */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          <path d="M7 9h10v2H7zm0-3h10v2H7z" />
        </svg>
      </div>

      {/* Menu Item (Akan muncul saat hover) */}
      {/* Tambahkan 'mb-4' agar ada jarak dari tombol utama */}
      <div className="absolute bottom-14 right-0 flex flex-col items-center space-y-3 pb-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-5 group-hover:translate-y-0">
        {/* 1. WhatsApp (Path Lengkap dengan gagang telepon) */}
        <a
          href="https://wa.me/6281370000299?text=Hi%2C%20I%20want%20to%20ask%20about%20zerOne.id%20service"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        >
          <img src={logos.whatsappWhite} alt="" />
        </a>

        {/* 2. Instagram (Logo kamera lengkap) */}
        <a
          href="https://www.instagram.com/zerone.global"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Instagram"
          className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        >
          <img src={logos.instagramWhite} alt="" />
        </a>

        {/* 3. Email (Amplop tertutup) */}
        <a
          href="mailto:info@zerone.id"
          aria-label="Send Email"
          className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110"
        >
          <img src={logos.emailWhite} alt="" />
        </a>
      </div>
    </div>
  );
};

export default FloatingContact;
