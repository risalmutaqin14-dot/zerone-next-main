"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";

import { logos } from "../data";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState<{ [key: string]: boolean }>({});

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement }>({});
  const hoverTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const underlineRefs = useRef<{ [key: string]: HTMLSpanElement }>({});

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const getNavTextClass = (isActive: boolean) => {
    if (isActive) return "text-blue-600";
    if (isMenuOpen) return "text-gray-800 hover:text-blue-600";
    if (isHomePage && !isScrolled) return "text-white hover:text-blue-200";
    return "text-gray-700 hover:text-blue-600";
  };

  // Toggle dropdown untuk mobile (click only)
  const toggleDropdown = (name: string) => {
    if (window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  // Handle dropdown hover untuk desktop
  const handleDropdownHover = (name: string, isEntering: boolean) => {
    if (window.innerWidth >= 768) {
      // Clear any existing timeout
      if (hoverTimeouts.current[name]) {
        clearTimeout(hoverTimeouts.current[name]);
      }

      if (isEntering) {
        // Prevent double animation
        if (activeDropdown === name || isAnimating[name]) return;

        // Open dropdown immediately
        setActiveDropdown(name);
        animateDropdownOpen(name);
      } else {
        // Solution/Product dropdown: close immediately when no longer hovered.
        if (name === "solution" || name === "product") {
          if (activeDropdown === name && !isAnimating[name]) {
            animateDropdownClose(name);
          }
          return;
        }

        // Delay closing dropdown
        hoverTimeouts.current[name] = setTimeout(() => {
          if (activeDropdown === name && !isAnimating[name]) {
            animateDropdownClose(name);
          }
        }, 200);
      }
    }
  };

  // Handle dropdown click untuk desktop & mobile
  const handleDropdownClick = (name: string) => {
    // Prevent if currently animating
    if (isAnimating[name]) return;

    if (window.innerWidth >= 768) {
      if (activeDropdown === name) {
        animateDropdownClose(name);
        return;
      }

      if (activeDropdown && activeDropdown !== name && !isAnimating[activeDropdown]) {
        animateDropdownClose(activeDropdown);
      }

      setActiveDropdown(name);
      animateDropdownOpen(name);
      return;
    }

    if (activeDropdown === name) {
      animateDropdownClose(name);
    } else {
      if (activeDropdown && activeDropdown !== name) {
        animateDropdownClose(activeDropdown);
      }
      setActiveDropdown(name);
      animateDropdownOpen(name);
    }
  };

  // Animate dropdown open
  const animateDropdownOpen = (name: string) => {
    const dropdownEl = dropdownRefs.current[name];
    if (!dropdownEl) return;

    setIsAnimating((prev) => ({ ...prev, [name]: true }));

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating((prev) => ({ ...prev, [name]: false }));
      },
    });

    tl.set(dropdownEl, { display: "block" });

    tl.fromTo(
      dropdownEl,
      {
        opacity: 0,
        y: -15,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );

    const items = dropdownEl.querySelectorAll(".dropdown-item");
    tl.fromTo(
      items,
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.2"
    );
  };

  // Animate dropdown close
  const animateDropdownClose = (name: string) => {
    const dropdownEl = dropdownRefs.current[name];
    if (!dropdownEl) return;

    setIsAnimating((prev) => ({ ...prev, [name]: true }));

    gsap.to(dropdownEl, {
      opacity: 0,
      y: -10,
      scale: 0.95,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveDropdown((current) => (current === name ? null : current));
        dropdownEl.style.display = "none";
        setIsAnimating((prev) => ({ ...prev, [name]: false }));
      },
    });
  };

  // Animate underline on hover
  const handleNavItemHover = (key: string, isEntering: boolean) => {
    const underlineEl = underlineRefs.current[key];
    if (!underlineEl) return;

    if (isEntering) {
      gsap.to(underlineEl, {
        width: "100%",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(underlineEl, {
        width: "0%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  // Click Outside Handler
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;

      // Check if click is outside all dropdowns
      const isOutsideDropdown = !Object.values(dropdownRefs.current).some(
        (ref) => ref?.contains(target)
      );
      const isOutsideTrigger = !target.closest(".dropdown-trigger");
      const isOutsideMobileToggle = !target.closest(".mobile-toggle");

      if (isMenuOpen && menuRef.current && !menuRef.current.contains(target) && isOutsideMobileToggle) {
        closeAllMenus();
      }

      if (
        activeDropdown &&
        isOutsideDropdown &&
        isOutsideTrigger &&
        !isAnimating[activeDropdown]
      ) {
        animateDropdownClose(activeDropdown);
      }
    };

    window.addEventListener("mousedown", handleOutside);
    window.addEventListener("touchstart", handleOutside);

    return () => {
      window.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("touchstart", handleOutside);
    };
  }, [isMenuOpen, activeDropdown, isAnimating]);

  // Scroll Handler with GSAP
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show navbar on scroll
      if (navbarRef.current) {
        if (currentScroll > lastScroll && currentScroll > 150) {
          gsap.to(navbarRef.current, {
            y: -100,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(navbarRef.current, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial Animation
  useEffect(() => {
    if (!logoRef.current || !menuRef.current) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // Animate logo
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Animate nav items
    const navItems = menuRef.current.querySelectorAll(".nav-item, .dropdown-trigger");
    tl.fromTo(
      navItems,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  // Mobile menu animation
  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setActiveDropdown(null);
      }
      return next;
    });
  };

  return (
    <div
      ref={navbarRef}
      className={`navbar fixed top-0 left-0 w-full z-[999] py-4 px-4 md:px-16 lg:px-32 transition-all duration-300 ${
        isScrolled ? "scrolled bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      } ${!isHomePage ? "non-home bg-white/95 shadow-sm" : ""}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div ref={logoRef} className="flex items-center opacity-0">
          <Link href="/" onClick={closeAllMenus}>
            <Image
              src={isHomePage && !isScrolled ? logos.whitelogo : logos.bluelogo}
              alt="Zerone Logo"
              width={65}
              height={60}
              priority
              className="object-contain w-auto h-auto py-1"
            />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`mobile-toggle md:hidden z-50 p-2 transition-colors ${
            isHomePage && !isScrolled ? "text-white" : "text-gray-800"
          }`}
          onClick={toggleMobileMenu}
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

        {isMenuOpen && (
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] md:hidden z-30"
            onClick={closeAllMenus}
          />
        )}

        {/* Navigation Menu */}
        <div
          ref={menuRef}
          className={`menu md:flex md:items-center md:gap-6 lg:gap-8 fixed md:static md:z-auto 
            ${
              isMenuOpen
                ? "top-0 right-0 h-dvh w-[88%] max-w-sm bg-white shadow-2xl z-40 flex flex-col items-start justify-start gap-y-2 pt-24 px-6 pb-6 overflow-y-auto translate-x-0 opacity-100 pointer-events-auto"
                : "top-0 right-0 h-dvh w-[88%] max-w-sm bg-white z-40 flex flex-col items-start justify-start gap-y-2 pt-24 px-6 pb-6 overflow-y-auto translate-x-full opacity-100 pointer-events-none md:pointer-events-auto md:translate-x-0 md:opacity-100 md:bg-transparent md:w-auto md:max-w-none md:h-auto md:p-0 md:flex-row md:items-center md:justify-start md:overflow-visible"
            } transition-all duration-300 ease-out`}
        >
          <div
            className="relative"
            onMouseEnter={() => handleNavItemHover("home", true)}
            onMouseLeave={() => handleNavItemHover("home", false)}
          >
            <Link
              href="/"
              className={`nav-item opacity-0 font-medium transition-colors relative ${getNavTextClass(
                pathname === "/"
              )} ${isMenuOpen ? "text-base py-3 w-full border-b border-gray-100" : ""}`}
              onClick={closeAllMenus}
            >
              Home
              {pathname === "/" ? (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              ) : (
                <span
                  ref={(el) => {
                    if (el) underlineRefs.current["home"] = el;
                  }}
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${
                    isMenuOpen ? "hidden" : ""
                  }`}
                ></span>
              )}
            </Link>
          </div>

          <div
            className="relative mt-6  md:mt-0"
            onMouseEnter={() => handleNavItemHover("about", true)}
            onMouseLeave={() => handleNavItemHover("about", false)}
          >
            <Link
              href="/about"
              className={`nav-item opacity-0 font-medium transition-colors relative ${getNavTextClass(
                pathname === "/about"
              )} ${isMenuOpen ? "text-base py-2 w-full border-b border-gray-100" : ""}`}
              onClick={closeAllMenus}
            >
              About Us
              {pathname === "/about" ? (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              ) : (
                <span
                  ref={(el) => {
                    if (el) underlineRefs.current["about"] = el;
                  }}
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${
                    isMenuOpen ? "hidden" : ""
                  }`}
                ></span>
              )}
            </Link>
          </div>

          {/* Solution Dropdown */}
          <div
            className="relative group w-full md:w-auto text-left md:text-center"
            onMouseEnter={() => handleDropdownHover("solution", true)}
            onMouseLeave={() => handleDropdownHover("solution", false)}
          >
            <button
              className={`dropdown-trigger opacity-0 nav-item flex items-center md:justify-center justify-between gap-1 w-full font-medium transition-colors ${getNavTextClass(
                activeDropdown === "solution"
              )} ${isMenuOpen ? "text-base py-3 w-full border-b border-gray-100" : ""}`}
              onClick={() => handleDropdownClick("solution")}
            >
              Solution
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "solution" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              ref={(el) => {
                if (el) dropdownRefs.current["solution"] = el;
              }}
              className={`${
                isMenuOpen
                  ? activeDropdown === "solution"
                    ? "max-h-[500px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                  : "md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:mt-2"
              } 
              overflow-hidden transition-all duration-300 md:min-w-[280px] w-full md:w-auto hidden`}
              style={{ display: "none" }}
              onMouseEnter={() => handleDropdownHover("solution", true)}
              onMouseLeave={() => handleDropdownHover("solution", false)}
            >
              <div className="bg-gray-50 md:bg-white rounded-xl md:rounded-2xl md:shadow-2xl overflow-hidden">
                <div className="py-2">
                  {solutionLinks.map((link) => (
                    <Link
                      key={link.to}
                      href={link.to}
                      className="dropdown-item block px-4 md:px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all border-l-4 border-transparent hover:border-blue-600 md:hover:pl-8"
                      onClick={closeAllMenus}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Dropdown */}
          <div
            className="relative group w-full md:w-auto text-left md:text-center"
            onMouseEnter={() => handleDropdownHover("product", true)}
            onMouseLeave={() => handleDropdownHover("product", false)}
          >
            <button
              className={`dropdown-trigger opacity-0 nav-item flex items-center md:justify-center justify-between gap-1 w-full font-medium transition-colors ${getNavTextClass(
                activeDropdown === "product"
              )} ${isMenuOpen ? "text-base py-3 w-full border-b border-gray-100" : ""}`}
              onClick={() => handleDropdownClick("product")}
            >
              Our Product
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "product" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              ref={(el) => {
                if (el) dropdownRefs.current["product"] = el;
              }}
              className={`${
                isMenuOpen
                  ? activeDropdown === "product"
                    ? "max-h-[500px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                  : "md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:mt-2"
              } 
              overflow-hidden transition-all duration-300 md:min-w-[220px] w-full md:w-auto hidden`}
              style={{ display: "none" }}
              onMouseEnter={() => handleDropdownHover("product", true)}
              onMouseLeave={() => handleDropdownHover("product", false)}
            >
              <div className="bg-gray-50 md:bg-white rounded-xl md:rounded-2xl md:shadow-2xl overflow-hidden">
                <div className="py-2">
                  {productLinks.map((link) => (
                    <Link
                      key={link.to}
                      href={link.to}
                      className="dropdown-item block px-4 md:px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all border-l-4 border-transparent hover:border-blue-600 md:hover:pl-8"
                      onClick={closeAllMenus}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleNavItemHover("portfolio", true)}
            onMouseLeave={() => handleNavItemHover("portfolio", false)}
          >
            <Link
              href="/portfolio"
              className={`nav-item opacity-0 font-medium transition-colors relative ${getNavTextClass(
                pathname === "/portfolio"
              )} ${isMenuOpen ? "text-base py-3 w-full border-b border-gray-100" : ""}`}
              onClick={closeAllMenus}
            >
              Portfolio
              {pathname === "/portfolio" ? (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              ) : (
                <span
                  ref={(el) => {
                    if (el) underlineRefs.current["portfolio"] = el;
                  }}
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${
                    isMenuOpen ? "hidden" : ""
                  }`}
                ></span>
              )}
            </Link>
          </div>

          <div
            className="relative mt-3  md:mt-0"
            onMouseEnter={() => handleNavItemHover("blog", true)}
            onMouseLeave={() => handleNavItemHover("blog", false)}
          >
            <Link
              href="/shop"
              className={`nav-item opacity-0 font-medium transition-colors relative ${getNavTextClass(
                pathname === "/shop"
              )} ${isMenuOpen ? "text-base py-3 w-full border-b border-gray-100" : ""}`}
              onClick={closeAllMenus}
            >
              Shop
              {pathname === "/shop" ? (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              ) : (
                <span
                  ref={(el) => {
                    if (el) underlineRefs.current["blog"] = el;
                  }}
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${
                    isMenuOpen ? "hidden" : ""
                  }`}
                ></span>
              )}
            </Link>
          </div>

          <div
            className="relative mt-3 md:mt-0"
            onMouseEnter={() => handleNavItemHover("contact", true)}
            onMouseLeave={() => handleNavItemHover("contact", false)}
          >
            <Link
              href="/contact"
              className={`nav-item opacity-0 font-medium transition-colors relative ${getNavTextClass(
                pathname === "/contact"
              )} ${isMenuOpen ? "text-base py-3 w-full border-b border-gray-100" : ""}`}
              onClick={closeAllMenus}
            >
              Contact
              {pathname === "/contact" ? (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              ) : (
                <span
                  ref={(el) => {
                    if (el) underlineRefs.current["contact"] = el;
                  }}
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${
                    isMenuOpen ? "hidden" : ""
                  }`}
                ></span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
