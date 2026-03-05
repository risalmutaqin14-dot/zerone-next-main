import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, solutionAppDev } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "Mobile App Development | Zerone Global Digital Solution",
  description:
    "Zerone Global provides Mobile App Development services for Android & iOS. Our digital solutions help businesses build scalable, secure applications ready to compete in the global market.",
  alternates: {
    canonical: "https://www.zerone.id/mobile-app",
  },
  openGraph: {
    title: "Mobile App Development | Zerone Global Digital Solution",
    description:
      "Zerone Global Mobile App solutions help businesses build scalable, secure Android & iOS applications ready for the global market.",
    url: "https://www.zerone.id/mobile-app",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | Zerone Global Digital Solution",
    description:
      "Zerone Global Mobile App solutions help businesses build scalable, secure Android & iOS applications ready for the global market.",
    images: ["https://www.zerone.id/assets/meta-image-zerone.webp"],
  },
};

export default function MobileApp() {
  return (
    <div className="webApp pt-16 lg:pt-5 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[30px] font-bold text-black mb-6 pt-2 leading-tight">
            Mobile App &nbsp;
            <br className="hidden md:inline" />
            Development
          </h1>
          <h2 className="reveal-text text-[24px] text-gray-800">
            Building the World in Your Hands
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed text-justify">
            Mobile technology is currently in high demand due to its ease and
            speed of access. To achieve user satisfaction and accessibility,
            software that can be accessed anytime and anywhere using only a
            mobile device is required. Mobile application development is an
            effort to improve a system so that it can be accessed instantly by
            opening it through a mobile device, whether it be a smartphone or
            tablet.
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
          <div className="hidden lg:block relative w-full max-w-[500px] h-[450px]">
            <Image
              src={mockup.mobileapp}
              alt="Custom Android and iOS Mobile Application Development Mockup by Zerone Global"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain relative lg:left-[-40px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto mt-32 mb-16 px-5">
        <h3 className="reveal-text text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
          Digital Solutions that
          <br className="hidden md:inline" />
          &nbsp;Increase Business Productivity
        </h3>
        <h4 className="reveal-text text-[16px] md:text-[18px] text-center px-4 text-gray-600">
          We build scalable and secure Android & iOS applications, complete with
          Prototyping and Design Systems, <br className="hidden md:inline" />
          &nbsp;ready to compete in the global market.
        </h4>
      </div>

      {/* Portfolio Grid */}
      <section className="container mx-auto lg:px-32 px-5 bg-white pb-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {[
            {
              src: solutionAppDev.appDev1,
              alt: "Latihan.id - Mobile Learning App Interface for Android and iOS developed by Zerone Global",
            },
            {
              src: solutionAppDev.appDev2,
              alt: "Venti.id - Event and Ticketing Mobile Application Design by Zerone Global Digital Solution",
            },
            {
              src: solutionAppDev.appDev3,
              alt: "Rajin.id - Employee Management and Productivity Mobile App Solution by Zerone Global",
            },
          ].map((item, index) => (
            <div key={index} className="reveal-img block group cursor-pointer">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-slate-50 border border-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={1600} // Mobile mockups biasanya lebih tinggi (portrait)
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