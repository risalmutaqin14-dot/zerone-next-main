import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, solutionDesain } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "Graphic & Video Production | Zerone Global Digital Solution",
  description:
    "Zerone Global provides professional Graphic Design & Video Production services for branding, promotion, and content marketing. Our creative solutions help businesses attract customers with strong visuals and engaging videos.",
  alternates: {
    canonical: "https://www.zerone.id/graphic-design",
  },
  openGraph: {
    title: "Graphic & Video Production | Zerone Global Digital Solution",
    description:
      "Zerone Global Graphic Design & Video Production solutions help businesses improve branding and promotion with professional visual content.",
    url: "https://www.zerone.id/graphic-design",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function GrafikDesain() {
  return (
    <div className="webApp pt-16 lg:pt-2 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[30px] font-bold text-black mb-6 pt-2 leading-tight">
            Graphic and Video
            <br /> Production
          </h1>
          <h2 className="reveal-text md:text-justify text-[18px] md:text-[24px] text-gray-800">
            Video and Graphics That Captivate Your Prospective Customers
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed text-justify">
            Both videos and graphics are often relied upon in business.
            Introducing products, boosting branding, and maximizing sales are
            three of the goals. Through videos, your business will be more
            quickly and easily remembered by potential customers. Graphics
            deliver powerful messages fast through posters, billboards, and
            brochures.
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
              src={mockup.graphic}
              alt="Creative Graphic Design and Video Production Services by Zerone Global"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain relative lg:left-[-80px] mb-10"
              priority
            />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="container mx-auto mt-10 mb-10 px-5">
        <h3 className="reveal-text text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
          Professional Graphic Design & Video
          <br className="hidden md:inline" />
          &nbsp;Production Services
        </h3>
        <h5 className="reveal-text text-[16px] md:text-[18px] text-center px-4 text-gray-600">
          Boost your branding! Get professional graphic design and creative{" "}
          <br className="hidden md:inline" />
          &nbsp;video production services for promotional and marketing
          content.
        </h5>
      </div>

      {/* Portfolio Grid (Images & Videos) */}
      <section className="container mx-auto lg:px-32 px-5 bg-white pb-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {/* Graphic Design Portfolios */}
          {[
            { src: solutionDesain.desain1, alt: "Professional Social Media Graphic Design Portfolio by Zerone Global" },
            { src: solutionDesain.desain2, alt: "Brand Identity, Logo Design, and Corporate Branding by Zerone Global" },
            { src: solutionDesain.desain3, alt: "Marketing Collateral, Brochures, and Poster Design by Zerone Global" },
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

          {/* Video Production Portfolios (YouTube Embeds) */}
          {[
            { id: "gdbBQZeMSco", title: "Company Profile Video Production - Zerone Global" },
            { id: "YzgNGhSqhxQ", title: "Promotional Video Content - Zerone Global" },
            { id: "2PXPVu01XAo", title: "Creative Marketing Video - Zerone Global" },
          ].map((video, index) => (
            <div key={index} className="reveal-img relative group">
              <div className="overflow-hidden rounded-[20px] shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100 aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?si=ghIiIZeu5eOz3GwP&controls=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}