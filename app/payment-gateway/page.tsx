import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, solutionpayment } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "Payment Gateway Integration | Zerone Global Digital Solution",
  description:
    "Zerone Global provides Payment Gateway Integration services to streamline online transactions. Our solutions connect buyers and sellers with secure, fast, and integrated payment systems.",
  alternates: {
    canonical: "https://www.zerone.id/payment-gateway",
  },
  openGraph: {
    title: "Payment Gateway Integration | Zerone Global Digital Solution",
    description:
      "Zerone Global Payment Gateway solutions make it easy for businesses to provide secure and integrated online payment systems.",
    url: "https://www.zerone.id/payment-gateway",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function Payment() {
  return (
    <div className="webApp pt-16 lg:pt-5 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[30px] font-bold text-black mb-6 pt-2 leading-tight">
            Payment Gateway
            <br /> Integration
          </h1>
          <h2 className="reveal-text md:text-justify text-[18px] md:text-[24px] text-gray-800">
            Extra Simple Payment System
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed text-justify">
            Payment Gateway Integration is a third-party payment method that
            connects buyers and sellers on a single platform. Buyers do not
            need to leave the purchase page. The page provides easily
            accessible payment options that are integrated with various
            systems.
          </p>

          {/* Button */}
          <div className="reveal-btn flex mt-7">
            <div className="w-[240px] mb-4 sm:mb-0">
              <Link
                href="/contact"
                className="transition duration-300 ease-in-out hover:scale-105 flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-transparent rounded-[50px] px-3 py-3 shadow-lg group"
              >
                <span className="flex items-center bg-white rounded-full p-1 mr-2 transition-transform group-hover:rotate-12">
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
                <span className="text-white pl-3 font-semibold">
                  Get The Solution
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mockup Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="hidden lg:block relative w-full max-w-[500px] h-[400px]">
            <Image
              src={mockup.payment}
              alt="Secure Payment Gateway Integration System Mockup by Zerone Global"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain relative lg:left-[-80px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* CTA Text Section */}
      <div className="container mx-auto px-5">
        <h3 className="reveal-text text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 text-gray-700">
          Confused about how to make payments that are directly connected to
          the system? Payment Gateway is the answer.
        </h3>
        <h3 className="reveal-text text-[16px] lg:text-[20px] font-bold italic text-center pb-10 text-gray-800">
          Tell us your needs, and Zerone will make them happen, exactly as you
          want.
        </h3>
      </div>

      {/* Portfolio Grid */}
      <section className="container mx-auto lg:px-32 px-5 bg-white pb-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {[
            {
              src: solutionpayment.payment1,
              alt: "Secure Online Payment Processing Interface with Multi-channel Support by Zerone Global",
            },
            {
              src: solutionpayment.payment2,
              alt: "Integrated Mobile Banking and E-wallet Payment Gateway Solution by Zerone Global",
            },
            {
              src: solutionpayment.payment3,
              alt: "Real-time Transaction Monitoring and Financial Analytics Dashboard by Zerone Global",
            },
          ].map((item, index) => (
            <div key={index} className="reveal-img block group cursor-pointer">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-slate-50 border border-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  style={{ width: "100%", height: "auto" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 rounded-[16px] transition-all duration-500 z-10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}