"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { logos } from "../data";
import "../styles/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-white text-white">
      <div className="container mx-auto mt-10 pb-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-6 lg:px-20 lg:justify-items-center">
        {/* Kolom Logo & Sosmed */}
        <div className="flex flex-col gap-4">
          <div className="footer-logo">
            <Image
              src="/assets/Zerone-Putih.png"
              alt="Zerone Global Logo"
              width={500} // Nilai asli file
              height={200} // Nilai asli file
              className="w-40 h-auto object-contain" // Tailwind akan mengatur proporsinya
            />
            <p className="text-lg opacity-80 leading-relaxed">
              Empowering innovation and enabling success for schools,
              organizations, and communities across Southeast Asia.
            </p>
          </div>

          <div className="footer-social mt-4">
            <div className="flex items-center gap-5">
              <SocialLink
                href="https://wa.me/6281370000299"
                icon="fa-whatsapp"
                color="text-[#25D366]"
                label="WhatsApp"
              />
              <SocialLink
                href="https://www.instagram.com/zerone.global/"
                icon="fa-instagram"
                color="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] bg-clip-text text-transparent"
                label="Instagram"
              />
              <SocialLink
                href="https://www.facebook.com/global.zerone"
                icon="fa-facebook"
                color="text-[#1877F2]"
                label="Facebook"
              />
              <SocialLink
                href="https://www.youtube.com/@zeroneglobal"
                icon="fa-youtube"
                color="text-[#FF0000]"
                label="YouTube"
              />
            </div>
          </div>
        </div>

        {/* Kolom Products */}
        <div className="footer-section lg:border-l lg:border-white/40 lg:pl-12">
          <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">
            Products
          </h3>
          <ul className="space-y-4">
            <FooterLink href="/edunav">Edunav</FooterLink>
            <FooterLink href="/latihan">Latihan.id</FooterLink>
            <FooterLink href="/venti">Venti</FooterLink>
            <FooterLink href="/writing-aide">WritingAide</FooterLink>
          </ul>
        </div>

        {/* Kolom Solutions */}
        <div className="footer-section lg:border-l lg:border-white/40 lg:pl-12">
          <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">
            Solutions
          </h3>
          <ul className="space-y-4">
            <FooterLink href="/ai-app-automation-development">
              AI Automation
            </FooterLink>
            <FooterLink href="/web-app">Web App Development</FooterLink>
            <FooterLink href="/uiux">UI/UX Design</FooterLink>
            <FooterLink href="/payment-gateway">Payment Gateway</FooterLink>
          </ul>
        </div>

        {/* Kolom Registered In */}
        <div className="footer-section lg:border-l lg:border-white/40 lg:pl-12">
          <h3 className="font-bold mb-4 text-white uppercase text-xs tracking-widest">
            Registered In
          </h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.edunav.net/wp-content/uploads/2024/02/TD-PSE-Tanda-Daftar-Penyelenggara-Sistem-Elektronik-EDUNAV-ZERONE-GLOBAL.pdf"
          >
            <Image
              src={logos.komdigi}
              alt="komdigi"
              width={120}
              height={60}
              className="mt-4 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>

      {/* Footer Bottom (Copyright & Policies) */}
      <div className="container mx-auto footer-bottom mt-9 pt-10 border-t border-white/40 flex flex-col md:flex-row items-center justify-between w-full pb-12 px-6 lg:px-20">
        {/* Copyright - Sisi Kiri */}
        <span className=" opacity-80">
          ©{new Date().getFullYear()} -{" "}
          <span className="font-semibold">zerone.id</span> | All rights reserved
        </span>

        {/* Policy Links - Sisi Kanan */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link
            href="/terms-conditions"
            className=" opacity-80  transition-all duration-300 hover:underline"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/return-refund-policy"
            className=" opacity-80 0 transition-all duration-300 hover:underline"
          >
            Return & Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

/* ─── GSAP HOVER LINK COMPONENT ─── */
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const linkRef = useRef(null);
  const underlineRef = useRef(null);

  const onMouseEnter = () => {
    gsap.to(linkRef.current, {
      x: 8,
      color: "#3b82f6",
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(underlineRef.current, {
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(linkRef.current, {
      x: 0,
      color: "#ffffff",
      opacity: 0.7,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(underlineRef.current, {
      width: "0%",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <li>
      <Link
        href={href}
        ref={linkRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative inline-block text-sm opacity-70 font-medium"
        style={{ color: "#ffffff" }}
      >
        {children}
        <span
          ref={underlineRef}
          className="absolute left-0 -bottom-1 h-[2px] bg-blue-500 w-0"
        />
      </Link>
    </li>
  );
};

/* ─── SOCIAL LINK COMPONENT ─── */
const SocialLink = ({
  href,
  icon,
  color,
  label,
}: {
  href: string;
  icon: string;
  color: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`${color} transition-all duration-300 hover:scale-125 opacity-80 hover:opacity-100`}
  >
    <i className={`fa-brands ${icon} text-2xl`}></i>
  </a>
);

export default Footer;
