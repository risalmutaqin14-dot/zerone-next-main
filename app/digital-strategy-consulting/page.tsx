import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, solutionDigitalStrategy } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "Digital Strategy Consulting | Zerone Global Digital Solution",
  description:
    "Zerone Global provides Digital Strategy Consulting services to help businesses, schools, and organizations transform with modern digital solutions. We help you leverage technology to increase efficiency and competitiveness.",
  alternates: {
    canonical: "https://www.zerone.id/digital-strategy-consulting",
  },
  openGraph: {
    title: "Digital Strategy Consulting | Zerone Global Digital Solution",
    description:
      "Zerone Global Digital Strategy solutions help businesses and organizations adapt to the digital era to increase efficiency and competitiveness.",
    url: "https://www.zerone.id/digital-strategy-consulting",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function DigitalStrategy() {
  return (
    <div className="webApp pt-16 lg:pt-5 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[30px] font-bold text-black mb-6 pt-2 leading-tight">
            Digital Strategy
            <br /> Consulting
          </h1>
          <h2 className="reveal-text md:text-justify text-[18px] md:text-[24px] text-gray-800">
            The King of Modern Business: Digitalization
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed text-justify">
            The term digital or digitization appears almost everywhere. In the
            business sector, government, education, and even tourism use this
            term. Simply put, digital or digitization is the application of 
            computerized systems to the way we work, produce, and even use 
            goods or services.
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
              src={mockup.digcon}
              alt="Digital Transformation and Strategy Consulting Illustration by Zerone Global"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain relative lg:left-[-80px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Insight Section */}
      <div className="container mx-auto px-5">
        <h3 className="reveal-text text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 text-gray-700 leading-relaxed">
          Digitalization can bring sellers and buyers together in a more
          effective way. This is because <br className="hidden md:inline" />
          both parties are in the same system.
        </h3>
        <h4 className="reveal-text text-[16px] lg:text-[20px] font-bold italic text-center pb-10 mt-4 text-gray-800">
          Consult and tell us your needs only with Zerone!
        </h4>
      </div>

      {/* Roadmap Section */}
      <section className="container mx-auto lg:px-32 px-5 bg-white pb-20">
        <div className="mt-5 mb-10 grid grid-cols-1">
          <div className="reveal-img relative w-full group cursor-pointer">
            <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl border border-gray-100 bg-slate-50">
              <Image
                src={solutionDigitalStrategy.digstra1}
                alt="Comprehensive Digital Business Strategy Roadmap and Transformation Framework by Zerone Global"
                width={1920}
                height={1080}
                style={{ width: "100%", height: "auto" }}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
                priority={false}
              />
              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}