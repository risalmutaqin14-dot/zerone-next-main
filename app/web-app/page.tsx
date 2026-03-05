import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, solutionWebApp } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "Web App Development | Zerone Global Digital Solution",
  description:
    "Zerone Global provides professional Web App Development services to improve online information systems. Our digital solutions help businesses access data faster, more efficiently, and securely.",
  alternates: {
    canonical: "https://www.zerone.id/web-app",
  },
  openGraph: {
    title: "Web App Development | Zerone Global Digital Solution",
    description:
      "Zerone Global Web App solutions help businesses and organizations optimize online information systems with efficiency and security.",
    url: "https://www.zerone.id/web-app",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function WebApp() {
  return (
    <div className="webApp pt-16 lg:pt-5 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[30px] font-bold text-black mb-6 pt-2 leading-tight">
            Web App
            <br className="hidden md:inline" /> Development
          </h1>
          <h2 className="reveal-text text-[24px] text-gray-800">
            Improve Information Systems Online
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed md:text-justify">
            To maximize the user experience, businesses need to develop online
            programmes. With online systems/programmes, it is easier and faster
            to access information about the company/institution&apos;s
            programmes and operations.
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
              src="/assets/mockup/webApp.webp"
              alt="Zerone Web App Development Interface Mockup"
              fill
              // Tambahkan baris ini untuk optimasi performa
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority // Tambahkan priority jika ini adalah gambar utama (Hero)
            />
          </div>
        </div>
      </div>

      {/* CTA Text */}
      <div className="container mx-auto px-5">
        <h3 className="reveal-text text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 text-gray-700">
          Interested in developing a web-based system that can help simplify
          your organization&apos;s tasks?
        </h3>
        <h3 className="reveal-text text-[16px] lg:text-[20px] font-bold italic text-center pb-10 text-gray-800">
          Don&apos;t hesitate to consult us about your digitization issues,
          Zerone is always ready to help!
        </h3>
      </div>

      {/* Portfolio Grid */}
      <section className="container mx-auto lg:px-32 px-5 bg-white">
        <div className="mt-10 mb-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {[
            {
              src: solutionWebApp.webApp1,
              alt: "EduNav - Integrated School Management System Dashboard developed by Zerone Global Digital Solution",
            },
            {
              src: solutionWebApp.webApp2,
              alt: "Latihan.id - Secure Online Exam and Learning Management System Platform by Zerone Global",
            },
            {
              src: solutionWebApp.webApp3,
              alt: "Venti.id - Event Management and Digital Ticketing Web Application Solution by Zerone Global",
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
