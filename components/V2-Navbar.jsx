"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logos } from "@/data";
import "@/styles/NavbarTop.css";

// 1. Definisikan Data Menu di luar komponen atau di file terpisah
const solutionLinks = [
  { to: "/ai-app-automation-development", label: "AI App & Automation Development" },
  { to: "/web-app", label: "Web App Development" },
  { to: "/mobile-app", label: "Mobile App Development" },
  { to: "/wordpress-dev", label: "Wordpress Development" },
  { to: "/cms", label: "Content Management System" },
  { to: "/uiux", label: "UIUX Design" },
  { to: "/digital-marketing", label: "Digital Marketing & SEO" },
  { to: "/payment-gateway", label: "Payment Gateway Integration" },
  { to: "/graphic-design", label: "Graphic & Video Production" },
  { to: "/digital-strategy-consulting", label: "Digital Strategy Consulting" },
];

const productLinks = [
  { to: "/Edunav", label: "EduNav" },
  { to: "/venti", label: "Venti" },
  { to: "/latihan", label: "Latihan.id" },
  { to: "/rajin", label: "Rajin.id" },
  { to: "/writing-aide", label: "Writing Aide" },
  { to: "/mari-dukung", label: "MariDukung.com" },
  { to: "/jadwal-kuliah", label: "Jadwal Kuliah" },
];

const Navbar = () => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 2. Gunakan satu state untuk melacak dropdown mana yang aktif
  // null = tertutup, 'solution' = solution buka, 'product' = product buka
  const [activeDropdown, setActiveDropdown] = useState(null); 

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const menuRef = useRef(null);

  // Helper untuk menutup semua menu
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Toggle Dropdown Helper
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Click Outside Handler
  useEffect(() => {
    const handleOutside = (e) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest(".md:hidden")) {
        closeAllMenus();
      }
    };

    if (isMenuOpen) {
      window.addEventListener("mousedown", handleOutside);
      window.addEventListener("touchstart", handleOutside);
    }
    return () => {
      window.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("touchstart", handleOutside);
    };
  }, [isMenuOpen]);

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated Underline Logic (Optimized for React ref)
  useEffect(() => {
    if (!menuRef.current) return;
    
    const updateUnderline = () => {
        // Cek apakah ada elemen dengan class 'active' di dalam menu
        const hasActive = menuRef.current.querySelector(".nav-item.active");
        if (hasActive) {
            menuRef.current.classList.add("underline-visible");
        } else {
            menuRef.current.classList.remove("underline-visible");
        }
    };

    // Jalankan segera dan saat resize
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [pathname, isMenuOpen]);

  return (
    <div
      className={`navbar absolute top-0 z-[999] py-4 px-4 md:px-16 lg:px-32 transition-all duration-300 ${
        isScrolled ? "scrolled" : ""
      } ${!isHomePage ? "non-home" : ""}`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="logo cursor-pointer">
          <Link href="/">
            <img
                src={isHomePage && !isScrolled ? logos.whitelogo : logos.bluelogo}
                alt="Zerone Logo"
                className="w-[90px] md:w-[105px] h-[36px] md:h-[42px] object-contain"
            />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden z-50 p-2 text-current"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          id="main-navigation"
          ref={menuRef}
          className={`menu md:flex md:items-center md:gap-8 fixed md:static md:flex-1 md:justify-end 
            ${isMenuOpen 
                ? "top-20 left-0 right-0 opacity-100 bg-white flex flex-col p-4 z-40 shadow-lg max-h-[80vh] overflow-y-auto" 
                : "top-[-100%] opacity-0 md:opacity-100 md:bg-transparent"
            } transition-all duration-300 ease-in-out`}
        >
          <Link href="/" className={`nav-item${pathname === "/" ? " active" : ""}`} onClick={closeAllMenus}>
            Home
          </Link>
          
          <Link href="/about" className={`nav-item${pathname === "/about" ? " active" : ""}`} onClick={closeAllMenus}>
            About Us
          </Link>

          {/* Solution Dropdown */}
          <div className="relative group">
            <button
              className={`nav-item flex items-center gap-1 ${activeDropdown === 'solution' ? 'text-blue-600' : ''}`}
              onClick={() => toggleDropdown('solution')}
            >
              Solution
              {/* Optional: Add chevron icon */}
              <span className="text-xs">▼</span>
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'solution' ? "open block" : "hidden"} md:absolute md:top-full md:left-0 md:bg-white md:shadow-md md:rounded-md md:min-w-[250px]`}>
              {solutionLinks.map((link) => (
                <Link key={link.to} href={link.to} className="dropdown-item block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Product Dropdown */}
          <div className="relative group">
            <button
              className={`nav-item flex items-center gap-1 ${activeDropdown === 'product' ? 'text-blue-600' : ''}`}
              onClick={() => toggleDropdown('product')}
            >
              Our Product
              <span className="text-xs">▼</span>
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'product' ? "open block" : "hidden"} md:absolute md:top-full md:left-0 md:bg-white md:shadow-md md:rounded-md md:min-w-[200px]`}>
              {productLinks.map((link) => (
                <Link key={link.to} href={link.to} className="dropdown-item block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/portfolio" className={`nav-item${pathname === "/portfolio" ? " active" : ""}`} onClick={closeAllMenus}>
            Portfolio
          </Link>

          <Link href="/blog" className={`nav-item${pathname === "/blog" ? " active" : ""}`} onClick={closeAllMenus}>
            Blog
          </Link>
          
          <Link href="/contact" className={`nav-item${pathname === "/contact" ? " active" : ""}`} onClick={closeAllMenus}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;