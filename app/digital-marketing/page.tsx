import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, solutionDigmar } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "Digital Marketing & SEO | Zerone Global Digital Solution",
  description:
    "Zerone Global provides Digital Marketing & SEO services to increase your business visibility. Our solutions help place your website at the top of Google search results and accelerate business growth.",
  alternates: {
    canonical: "https://www.zerone.id/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing & SEO | Zerone Global Digital Solution",
    description:
      "Zerone Global Digital Marketing & SEO solutions help businesses increase online visibility and attract more customers.",
    url: "https://www.zerone.id/digital-marketing",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function DigmaSEO() {
  return (
    <div className="webApp pt-16 bg-white lg:pt-5">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[30px] font-bold text-black mb-6 pt-2 leading-tight">
            Digital Marketing
            <br /> and SEO
          </h1>
          <h2 className="reveal-text text-justify text-[18px] md:text-[24px] text-gray-800">
            Fast-Growing Business Tactics: Digital Marketing and SEO
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed text-justify">
            Digital marketing is advertising or promoting a business through
            digital systems such as maximizing the internet, using special
            applications, and reliable technological skills. Unlike
            conventional advertising, digital marketing can measure success with 
            numbers so that advertising is easy to evaluate. Meanwhile, SEO 
            (Search Engine Optimization) is a technique for placing websites 
            at the top of Google search results.
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
              src={mockup.digmar}
              alt="Digital Marketing and SEO Strategy Dashboard by Zerone Global"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="container mx-auto px-5">
        <div className="md:mx-[100px] reveal-text text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 text-gray-700 leading-relaxed">
          &ldquo;It is not the job of Search Engine Optimization to make a pig fly.
          It is the job of the SEO to genetically re-engineer the web
          site so that it becomes an eagle.&rdquo;
        </div>
        <h3 className="reveal-text text-[16px] lg:text-[20px] font-bold italic text-center pb-10 mt-4 text-gray-800">
          Bruce Clay
        </h3>
      </div>

      {/* Portfolio Grid */}
      <section className="container mx-auto lg:px-32 px-5 bg-white pb-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {[
            {
              src: solutionDigmar.digmar1,
              alt: "Comprehensive SEO Analysis and Keyword Strategy Dashboard by Zerone Global",
            },
            {
              src: solutionDigmar.digmar2,
              alt: "Social Media Marketing Campaign Results and Data Visualization by Zerone Global",
            },
            {
              src: solutionDigmar.digmar3,
              alt: "Advanced Google Analytics Performance Reporting and Business Insights by Zerone Global",
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