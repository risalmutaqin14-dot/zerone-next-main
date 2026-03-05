import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TextAnimation from "@/components/TextAnimation";
import { Partner } from "@/components/partners";
import Counter from "@/components/counter";
import ProductSection from "@/components/ProductSection";
import Faq from "@/components/Faq";
import Workingproces from "@/components/workingproces";
import ProgresBar from "@/components/ProgresBar";
import Stack from "@/components/stack";
import Testimonials from "@/components/testimonial";
import VisionMissionSection from "@/components/VisionMissionSection";
import HomeSectionAnimations from "@/components/HomeSectionAnimations";

import { heroImage, servicesFeatures, whychoose } from "../data";

// FontAwesome untuk Next.js (Disarankan menggunakan @fortawesome/react-fontawesome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faPaperPlane,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// Metadata API (Pengganti Helmet)
export const metadata: Metadata = {
  title:
    "Zerone.id | Transform Your Institution with Zerone Global Digital Solution",
  description:
    "Zerone Global: Trusted, secure, and scalable digital solutions for schools, organizations, and communities across Southeast Asia.",
  openGraph: {
    title: "Zerone Global | Trusted & Scalable Digital Solutions",
    description:
      "Your trusted technology partner for modernizing education management.",
    url: "https://www.zerone.id",
    type: "website",
    images: [{ url: "https://www.zerone.id/assets/meta-image-zerone.webp" }],
  },
  alternates: { canonical: "https://www.zerone.id" },
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <HomeSectionAnimations />

      {/* Hero Section */}
      <section className="hero relative overflow-hidden bg-white">
        <TextAnimation />
        <div className="hero-line flex flex-col justify-start items-center w-full min-h-[92vh] sm:min-h-[100vh] md:min-h-[1100px] relative ">
          <Image
            src={heroImage.bgHero}
            alt="Zerone Global background pattern"
            fill
            priority
            className="object-cover z-0"
          />

          <div className=" hero-content relative z-10 text-center">
            <h1 className="main-title mx-auto slide-fade text-3xl md:text-5xl font-bold mt-28 md:mt-50">
              Transform Your Institution with Zerone <br />
              Global Digital Solution.
            </h1>
            <h2 className="tagline text-xl md:text-2xl mt-6">
              Trusted | Secure | Scalable.
            </h2>
            <h3 className="description max-w-2xl mx-auto mt-4">
              Your trusted technology partner for modernizing education
              management and enterprise operations across Southeast Asia.
            </h3>

            <div className="button flex justify-center items-center mt-8">
              <Link
                href="#our-solution"
                className="transition duration-300 hover:scale-105 flex items-center border-2 bg-white border-[#00A9E8] rounded-[50px] pl-4 pr-6 py-3"
              >
                <span className="bg-[#0092d7] rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill="#fff"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-[#0092d7] font-semibold">
                  Explore Our Solution
                </span>
              </Link>
            </div>

            <div className="device-mockup mt-8 md:mt-12 flex justify-center">
              <Image
                src={heroImage.image}
                alt="Zerone Global digital dashboard mockup"
                width={1000}
                height={400}
                priority
                className="object-contain px-5"
              />
            </div>
          </div>
        </div>
        <div className="bottom-gradient absolute bottom-0 w-full h-42 bg-gradient-to-t from-white to-transparent z-50"></div>
      </section>

      {/* Partners Section */}
      <Suspense
        fallback={<div className="p-10 text-center">Loading Partners...</div>}
      >
        <Partner />
      </Suspense>

      {/* Vision Mission */}
      <VisionMissionSection />

      {/* Counter Section */}
      <section className="py-20 bg-white">
        <Counter />
      </section>

      {/* Services Section */}
      <section className="pb-26 bg-white" id="our-solution">
        <div className="container mx-auto px-6 lg:px-32">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 items-start">
            {/* Kolom Kiri: Menambahkan flex flex-col agar gap-2 bisa bekerja */}
            <div className="os-header-left lg:w-1/2 flex flex-col gap-2">
              <span className="text-gray-600 text-xl font-medium">
                Our Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Tailored Solutions for Your Business
              </h2>
            </div>

            {/* Kolom Kanan */}
            <p className="os-header-right lg:w-1/2 justify-center text-gray-500 text-lg md:text-xl leading-relaxed lg:mt-auto">
              We provide a wide range of digital solutions designed to help your
              business grow and stay ahead in the modern era.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(servicesFeatures).map(([key, src], index) => (
              <div
                key={index}
                className="os-card relative group overflow-hidden rounded-[40px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200"
              >
                <Image
                  src={src}
                  alt={`${key} service`}
                  width={400}
                  height={500}
                  className="os-card-image w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110 brightness-100 group-hover:brightness-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Tech Stack */}
      <div className="bg-white">
        <div className="container mx-auto">
          <ProductSection />
          <Workingproces />
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="service bg-white">
          <div className="tech-stack container mx-auto lg:flex items-center lg:px-32 p-8 bg-white lg:pt-20 pb-20">
            <div className="lg:w-1/2">
              <span className="block md:text-[18px] mb-3 text-left text-gray-600 lg:mt-5 font-medium uppercase tracking-wide">
                Why Choose Us
              </span>

              <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6">
                Zerone Global Solution
              </h2>

              <p className="md:text-[18px] text-left text-gray-600 mb-6 lg:mt-5 md:pr-[100px] leading-relaxed">
                Client satisfaction is our greatest focus. We deliver
                professional, responsive, and tailored service to ensure every
                clientâ€™s needs are fully addressed.
              </p>

              <ProgresBar />
            </div>

            <div className="lg:w-1/2 flex justify-center mt-[50px] md:mt-0">
              <Image
                src={whychoose.whychooseus}
                alt="Illustration of Zerone Global Solution team delivering professional and tailored digital services"
                width={550}
                height={400}
                className="w-[550px] mx-auto pl-[20px] object-contain"
              />
            </div>
          </div>
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="service bg-white">
          <div className="tech-stack container mx-auto lg:flex items-center lg:px-32 md:p-8 bg-white lg:pt-10 pb-20">
            <div className="lg:w-1/2 px-8">
              <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6 lg:mt-16">
                Built With <br className="hidden md:block" />
                Modern Technologies
              </h2>

              <p className="md:text-[18px] md:mb-20 text-left text-gray-600 lg:mt-5 md:pr-[100px] leading-relaxed">
                Our solutions are built using modern technologies that adapt to
                your business processes.
              </p>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <Stack />
            </div>
          </div>
        </div>
      </Suspense>

      {/* Contact Section */}
      <section className="relative py-24 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="container mx-auto px-6 lg:px-32 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest text-[#0092D7] uppercase bg-white/80 rounded-lg mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-4 text-white text-lg max-w-2xl mx-auto">
              Reach out for project discussions, partnerships, or product support.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 bg-white/90 p-6 md:p-12 rounded-[2rem] border border-white shadow-[0_25px_60px_-20px_rgba(2,132,199,0.22)] backdrop-blur-md">
            <div className="lg:w-1/2 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.695270344299!2d106.6529124!3d-6.303710199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbecde2cc1b1%3A0xa154bae00576df77!2sPT.%20Global%20Zerone%20Digital!5e0!3m2!1sid!2sid!4v1772695049507!5m2!1sid!2sid"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-4">
                {[
                  {
                    icon: faPhoneVolume,
                    label: "Phone",
                    text: "(021) 2784 6241",
                    href: "tel:02127846241",
                  },
                  {
                    icon: faWhatsapp,
                    label: "WhatsApp",
                    text: "+62 813-7000-0299",
                    href: "https://wa.me/6281370000299",
                  },
                  {
                    icon: faPaperPlane,
                    label: "Email",
                    text: "info@zerone.id",
                    href: "mailto:info@zerone.id",
                  },
                  {
                    icon: faLocationDot,
                    label: "Office",
                    text: "My Republic Plaza, Wing A, Zone 6 Green Office Park, BSD City, Tangerang, Banten - Indonesia",
                    href: "https://maps.app.goo.gl/mFgngYBM7wE5JWLk7",
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg"
                  >
                    <span className="mt-0.5 w-11 h-11 bg-[linear-gradient(140deg,#06b6d4,#0284c7)] text-white flex items-center justify-center rounded-xl shadow-md shadow-cyan-500/20">
                      <FontAwesomeIcon icon={item.icon} className="text-[15px]" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-base md:text-lg text-slate-700 group-hover:text-sky-700 transition-colors">
                        {item.text}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-32 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Frequently <br /> Asked Questions
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Faq />
            <Link
              href="/faqs"
              className="inline-flex mt-8 items-center bg-[#0092d7] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
            >
              See More FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

