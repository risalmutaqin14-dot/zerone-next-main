import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { banner, ilustration, logos, sosialmedia } from "../../data";

export const metadata: Metadata = {
  title: "Writing Aide | AI-Powered Writing Assistant for TOEFL & IELTS",
  description:
    "Writing Aide by Zerone Global is an AI-powered platform designed to improve TOEFL, IELTS, and GCSE writing scores. Get instant feedback, practice questions, and exam strategies.",
  keywords: [
    "AI Writing Assistant",
    "TOEFL Preparation",
    "IELTS Writing",
    "GCSE English",
    "Essay Corrector",
    "Writing Aide",
    "Zerone Global",
  ],
  alternates: {
    canonical: "https://www.zerone.id/writing-aide",
  },
  openGraph: {
    title: "Writing Aide | AI-Powered Writing Assistant for TOEFL & IELTS",
    description:
      "Master your writing skills for TOEFL, IELTS, and GCSE with Writing Aide's AI technology. Get instant feedback and improve your scores.",
    url: "https://www.zerone.id/writing-aide",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function WritingAide() {
  return (
    <div className="webApp pt-20 lg:pt-5 bg-white overflow-x-hidden">
      {/* HERO BANNER - Desktop */}
      <div className="hidden sm:block container mx-auto lg:max-w-6xl mt-26 shadow-lg rounded-[20px] overflow-hidden">
        <Image
          src={banner.writingaide}
          alt="Writing Aide AI Dashboard Interface for Essay Correction"
          width={1200}
          height={600}
          layout="responsive"
          priority
          className="rounded-[20px]"
        />
      </div>

      {/* HERO BANNER - Mobile */}
      <div className="sm:hidden mt-2 container mx-auto max-w-[370px] drop-shadow-xl overflow-hidden">
        <Image
          src={banner.mobilewritingaide}
          alt="Writing Aide Mobile Application Interface"
          width={370}
          height={600}
          layout="responsive"
          className="rounded-[20px] mx-auto shadow-lg"
        />
      </div>

      {/* CALL TO ACTION SECTION */}
      <div className="flex justify-center mt-20">
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[220px]">
          <Link
            href="https://writing-aide.zerone.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-6 py-4"
          >
            <span className="flex items-center bg-white/20 rounded-full p-1 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </span>
            <span className="text-white font-bold text-sm">Try it for free</span>
          </Link>
        </div>
      </div>

      {/* SOCIAL MEDIA SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-7 sm:px-20 lg:px-40 my-32">
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-[350px] mx-auto">
            <Image
              src={sosialmedia.socialWritingAide}
              alt="Writing Aide Community and Tips"
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
            Improve your TOEFL, IELTS, and GCSE scores! Follow Writing Aide
            for writing tips and tricks, the latest practice questions, and
            test-passing strategies. Make writing a skill, not a barrier.
          </p>

          <Link
            href="https://www.instagram.com/aidee_edtech/"
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
          Boost Your Test Scores with AI-Powered <br className="hidden md:inline" />
          Writing Assistance for TOEFL and IELTS Success
        </h1>
      </div>

      {/* FEATURES GRID */}
      <div className="container mx-auto lg:px-40 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {[
            { img: ilustration.iluswriting1, title: "TOEFL" },
            { img: ilustration.iluswriting2, title: "IELTS" },
            { img: ilustration.iluswriting3, title: "GCSE" },
            { img: ilustration.iluswriting4, title: "Custom Test" }
          ].map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center cursor-pointer">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image 
                    src={feature.img} 
                    alt={`${feature.title} preparation`} 
                    fill 
                    className="object-contain transition-transform group-hover:scale-110" 
                />
              </div>
              <h3 className="text-slate-800 font-bold text-lg uppercase tracking-wider">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}