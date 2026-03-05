import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { banner, ilustration, logos, sosialmedia } from "../../data";

export const metadata: Metadata = {
  title: "MariDukung | Trusted Fundraising & Donation Platform by Zerone Global",
  description:
    "MariDukung is a fundraising and donation platform by Zerone Global. We provide a secure, transparent, and easy solution to support social, educational, and humanitarian campaigns.",
  keywords: [
    "Online Donation",
    "Fundraising Platform",
    "Crowdfunding Indonesia",
    "Social Campaign",
    "Charity",
    "MariDukung",
    "Zerone Global",
  ],
  alternates: {
    canonical: "https://www.zerone.id/mari-dukung",
  },
  openGraph: {
    title: "MariDukung | Fundraising & Donation Platform by Zerone Global",
    description:
      "Facilitating kindness through a secure and transparent fundraising platform. Support social campaigns easily with MariDukung.",
    url: "https://www.zerone.id/mari-dukung",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function MariDukung() {
  return (
    <div className="webApp pt-20 lg:pt-5 bg-white overflow-x-hidden">
      {/* HERO SECTION - Desktop */}
      <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px] overflow-hidden">
        <Image
          src={banner.maridukung}
          alt="MariDukung Fundraising Platform Dashboard Banner"
          width={1200}
          height={600}
          layout="responsive"
          priority
          className="rounded-[20px]"
        />
      </div>

      {/* HERO SECTION - Mobile */}
      <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl overflow-hidden">
        <Image
          src={banner.mobilemaridukung}
          alt="MariDukung Mobile Donation App Interface"
          width={370}
          height={600}
          layout="responsive"
          className="rounded-[20px] mx-auto shadow-lg"
        />
      </div>

      {/* CTA BUTTON SECTION */}
      <div className="flex justify-center mt-20">
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[280px]">
          <Link
            href="https://maridukung.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 bg-[linear-gradient(90deg,#1c76d2,#3498db)] border-[#00A9E8] rounded-[50px] px-6 py-4"
          >
            <span className="flex items-center bg-[#00A9E8] rounded-full p-1 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </span>
            <span className="text-white font-bold text-sm tracking-wide">
              Create Your Fundraising
            </span>
          </Link>
        </div>
      </div>

      {/* SOCIAL MEDIA SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-7 sm:px-20 lg:px-40 my-32">
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-[350px] mx-auto">
            <Image
              src={sosialmedia.socialMaridukung}
              alt="MariDukung Community and Social Impact"
              width={350}
              height={350}
              className="rounded-[32px]"
            />
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <span className="block text-lg lg:text-xl text-blue-600 mb-2 font-bold uppercase tracking-wider">
            Follow Us On
          </span>
          <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 leading-snug">
            Social Media
          </h2>
          <p className="text-justify text-base lg:text-lg text-slate-500 leading-relaxed font-medium mb-8">
            Let&apos;s make real change happen! Follow MariDukung to discover
            inspiring fundraising stories, donation impact updates, and easy
            ways to support causes you care about.
          </p>

          <Link
            href="https://www.instagram.com/mari.dukung/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#00A9E8] text-slate-800 rounded-full font-bold hover:bg-blue-50 transition-all shadow-md"
          >
            <img src={logos.instagram} className="w-5" alt="Instagram" />
            Follow Instagram
          </Link>
        </div>
      </div>

      {/* MAIN HEADLINE SECTION */}
      <div className="container mx-auto px-5 mb-12">
        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 text-center leading-[1.2]">
          Empowering Change with Easy and Secure <br className="hidden md:inline" />
          Fundraising and Donation Solutions
        </h1>
      </div>

      {/* FEATURES GRID */}
      <div className="container mx-auto lg:px-40 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { img: ilustration.ilusmaridukung1, title: "Donation" },
            { img: ilustration.ilusmaridukung2, title: "Fundraising" },
            { img: ilustration.ilusmaridukung3, title: "Assistance" }
          ].map((feature, idx) => (
            <div key={idx} className="group p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center cursor-pointer">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image 
                  src={feature.img} 
                  alt={`${feature.title} feature`} 
                  fill 
                  className="object-contain transition-transform group-hover:scale-110" 
                />
              </div>
              <h3 className="text-slate-800 font-bold text-xl leading-relaxed">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}