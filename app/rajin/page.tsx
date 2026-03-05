import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { banner, ilustration, logos, sosialmedia } from "../../data";

export const metadata: Metadata = {
  title: "Rajin.id | Tutoring & Tryout Platform by Zerone Global",
  description:
    "Rajin.id is a comprehensive learning platform by Zerone Global. Offering English courses, private tutoring, and secure online tryouts for UTBK-SNBT, TOEFL, and IELTS preparation.",
  keywords: [
    "Online Tutoring",
    "English Course",
    "UTBK Tryout",
    "SNBT Preparation",
    "Private Tutor",
    "Rajin.id",
    "Zerone Global",
  ],
  alternates: {
    canonical: "https://www.zerone.id/rajin",
  },
  openGraph: {
    title: "Rajin.id | Tutoring & Tryout Platform by Zerone Global",
    description:
      "Boost your academic performance with Rajin.id. Trusted English courses, private tutoring, and effective UTBK-SNBT tryout simulations.",
    url: "https://www.zerone.id/rajin",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function Rajin() {
  return (
    <div className="webApp pt-20 lg:pt-5 bg-white overflow-x-hidden">
      {/* HERO BANNER - Desktop */}
      <div className="hidden sm:block container mx-auto lg:max-w-6xl mt-26 shadow-lg rounded-[20px] overflow-hidden">
        <Image
          src={banner.rajin}
          alt="Rajin.id Learning Platform Dashboard Interface"
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
          src={banner.mobilerajin}
          alt="Rajin.id Mobile App for Students"
          width={370}
          height={600}
          layout="responsive"
          className="rounded-[20px] shadow-lg"
        />
      </div>

      {/* PRODUCT DESCRIPTION SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20">
        <div className="lg:w-1/3">
          <span className="block text-lg lg:text-xl text-blue-600 mb-4 font-bold uppercase tracking-wider">
            Our Product
          </span>
          <h1 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
            What is Rajin.id?
          </h1>
        </div>

        <div className="lg:w-2/3">
          <p className="text-justify text-base lg:text-lg text-slate-500 leading-relaxed font-medium">
            Rajin.id is a comprehensive learning and UTBK-SNBT tryout platform
            from Zerone Global. It provides English language courses, private
            tutoring services, and a secure, effective online tryout system
            designed to help students improve their scores in TOEFL, IELTS,
            and other academic exams.
          </p>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="md:flex container mx-auto justify-center gap-8 items-center mt-[60px] px-4">
        {/* Playstore Button */}
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
          <Link
            href="https://play.google.com/store/apps/details?id=com.zerone.rajin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-[#00A9E8] rounded-[50px] px-6 py-3 bg-white"
          >
            <span className="flex items-center rounded-full mr-3">
              <img src={logos.playstore} className="w-5" alt="Google Play Store" />
            </span>
            <span className="font-bold text-slate-800 text-sm">Download Aplikasi</span>
          </Link>
        </div>

        {/* Request Demo Button */}
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
          <Link
            href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I+want+to+ask+about+Rajin.id+service"
            target="_blank"
            className="flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-6 py-3"
          >
            <span className="flex items-center bg-white/20 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </span>
            <span className="text-white font-bold text-sm">Request Demo Aplikasi</span>
          </Link>
        </div>
      </div>

      {/* SOCIAL MEDIA SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-7 sm:px-20 lg:px-40 my-32">
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-[350px] mx-auto">
            <Image
              src={sosialmedia.socialRajin}
              alt="Rajin.id Community and Learning Tips"
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
          <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
            Social Media
          </h2>
          <p className="text-justify text-base lg:text-lg text-slate-500 leading-relaxed font-medium mb-8">
            Improve your TOEFL, IELTS, and GCSE scores! Follow Rajin.id
            for writing tips and tricks, the latest practice questions, and
            test-passing strategies. Make learning a skill, not a barrier.
          </p>

          <Link
            href="https://www.instagram.com/rajin_id/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#00A9E8] text-slate-800 rounded-full font-bold hover:bg-blue-50 transition-all shadow-md"
          >
            <img src={logos.instagram} className="w-5" alt="Instagram" />
            Follow Instagram
          </Link>
        </div>
      </div>

      {/* FEATURES HEADER */}
      <div className="container mx-auto px-5 mb-12">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 text-center leading-[1.2]">
          Your Ultimate Learning Companion for <br className="hidden md:inline" />
          Personalized Tutoring and Effective Tryouts
        </h2>
      </div>

      {/* FEATURES GRID */}
      <div className="container mx-auto lg:px-40 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { img: ilustration.ilusrajin1, title: "English Language Course", desc: "An English language course institution" },
            { img: ilustration.ilusrajin2, title: "Private Tutoring", desc: "Private tutoring institute" },
            { img: ilustration.ilusrajin3, title: "UTBK-SNBT Tryout", desc: "A UTBK-SNBT tryout platform" }
          ].map((feature, idx) => (
            <div key={idx} className="group p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center cursor-pointer">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image src={feature.img} alt={feature.title} fill className="object-contain transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-slate-800 font-bold leading-relaxed mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}