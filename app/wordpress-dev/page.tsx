import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, ilustration, solutionWordpress } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "WordPress Development | Zerone Global Digital Solution",
  description:
    "Zerone Global provides professional Website & WordPress development services. Our digital solutions help build reputation, increase customer trust, and deliver secure and flexible web designs.",
  alternates: {
    canonical: "https://www.zerone.id/wordpress-dev",
  },
  openGraph: {
    title: "WordPress Development | Zerone Global Digital Solution",
    description:
      "Zerone Global WordPress solutions help businesses build professional, secure, and flexible websites to improve reputation and customer trust.",
    url: "https://www.zerone.id/wordpress-dev",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function WordpressDev() {
  return (
    <div className="webApp pt-16 lg:pt-5 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[30px] font-bold text-black mb-6 pt-2 leading-tight">
            Website/WordPress
            <br />
            Development
          </h1>
          <h2 className="reveal-text text-[18px] md:text-[24px] text-gray-800">
            Make Your Business More Trustworthy with a Website/WordPress
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed text-justify">
            A website/WordPress is an online site that presents its owner's
            content. For example, if you are a clothing business owner, your
            website/WordPress will contain clothing products. Similarly, if
            you are a shoe business owner, your website/WordPress will contain
            a variety of shoe options.
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
              src={mockup.wordpress}
              alt="Custom WordPress Website Development Mockup by Zerone Global"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <h3 className="reveal-text text-[24px] md:text-[36px] text-center font-bold text-black mb-6 pt-24">
        The advantages of having a <br />
        website/WordPress for business people
      </h3>

      <div className="container mx-auto lg:px-32 lg:mt-5">
        <div className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-no-repeat bg-cover rounded-[20px] py-5">
          {[
            { img: ilustration.ilusAbout1, text: "Convincing potential customers about product quality", alt: "Customer Trust Illustration" },
            { img: ilustration.ilusAbout2, text: "Promotions that appear professional", alt: "Professional Collaboration Illustration" },
            { img: ilustration.ilusAbout3, text: "Prospective customers are free to choose product variants", alt: "Product Variety Illustration" },
            { img: ilustration.ilusAbout3, text: "Store and seller reputation", alt: "Business Reputation Illustration" },
          ].map((box, i) => (
            <div key={i} className="reveal-img w-full text-center m-2">
              <div className="relative w-20 h-20 mx-auto mb-5">
                <Image
                  src={box.img}
                  alt={box.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="block text-center text-[16px] text-gray-600 leading-relaxed px-2">
                {box.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Title & Description Section */}
      <div className="container mx-auto mt-16 mb-10 bg-white px-5">
        <h3 className="reveal-text text-[24px] md:text-[36px] font-bold text-center text-black pb-3 pt-2">
          Professional WordPress Web Design
          <br className="hidden md:inline" />
          &nbsp;The Best Digital Solution for Your Business
        </h3>
        <h5 className="reveal-text text-[16px] md:text-[18px] text-center text-gray-600">
          Secure and flexible WordPress web design solutions, reflecting your{" "}
          <br className="hidden md:inline" />
          &nbsp; brand identity. Every project is a work of art designed for
          real results.
        </h5>
      </div>

      {/* Portfolio Grid */}
      <section className="container mx-auto lg:px-32 px-5 bg-white pb-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {[
            { src: solutionWordpress.webpres1, alt: "Pakar Belia Islamic Boarding School WordPress Website Design by Zerone Global" },
            { src: solutionWordpress.webpres2, alt: "HIBISCUS International School Professional WordPress Design by Zerone Global" },
            { src: solutionWordpress.webpres3, alt: "Competition Event Management Website Solution by Zerone Global" },
            { src: solutionWordpress.webpres4, alt: "Kesatuan Bangsa School Educational WordPress Website by Zerone Global" },
            { src: solutionWordpress.webpres5, alt: "EduNav.net High-Converting Landing Page Design by Zerone Global" },
            { src: solutionWordpress.webpres6, alt: "Semesta School Modern WordPress Web Design by Zerone Global" },
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