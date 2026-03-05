import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { banner, ilustration, logos } from "../../data";

export const metadata: Metadata = {
  title: "Latihan.id | Secure Computer Based Test (CBT) Platform by Zerone Global",
  description:
    "Latihan.id is the ultimate secure CBT platform for schools. Features include Safe Exam Browser (SEB) support, anti-cheating AI, and seamless Edunav LMS integration.",
  keywords: [
    "CBT platform",
    "Online Exam System",
    "Safe Exam Browser",
    "Ujian Online Aman",
    "School Assessment Tool",
    "Edunav Integration",
  ],
  alternates: {
    canonical: "https://www.zerone.id/latihan",
  },
  openGraph: {
    title: "Latihan.id | Secure CBT & Online Exam Platform",
    description:
      "Conduct fair and secure exams with Latihan.id. The integrated CBT solution with advanced anti-cheating technology and SEB support.",
    url: "https://www.zerone.id/latihan",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function Latihan() {
  return (
    <div className="webApp pt-20 lg:pt-5 bg-white overflow-x-hidden">
      {/* HERO IMAGE SECTION - Desktop */}
      <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px] overflow-hidden">
        <Image
          src={banner.latihan}
          alt="Dashboard of Latihan.id - Secure Computer Based Test (CBT) Platform"
          width={1200}
          height={600}
          layout="responsive"
          priority
          className="rounded-[20px]"
        />
      </div>

      {/* HERO IMAGE SECTION - Mobile */}
      <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl overflow-hidden">
        <Image
          src={banner.mobilelatihan}
          alt="Latihan.id Mobile App Interface for Online Exams"
          width={370}
          height={600}
          layout="responsive"
          className="rounded-[20px] mx-auto"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20">
        <div className="lg:w-1/3">
          <span className="block text-lg lg:text-xl text-blue-600 mb-4 font-bold uppercase tracking-wider">
            Our Product
          </span>
          <h1 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
            What is <br className="hidden md:inline" /> Latihan.id?
          </h1>
        </div>

        <div className="lg:w-2/3">
          <p className="text-justify text-base lg:text-lg text-slate-500 leading-relaxed font-medium">
            Latihan.id is a secure and integrated{" "}
            <strong className="text-slate-900">CBT (Computer Based Test)</strong> solution for exams,
            daily quizzes, and assessments. It connects directly with the
            Edunav LMS and provides advanced security features such as
            cheating prevention controls, auto kick detection, server-based
            camera capture, and full support for{" "}
            <strong className="text-slate-900">Safe Exam Browser (SEB)</strong>.
          </p>
        </div>
      </div>

      {/* BUTTON REQUEST DEMO & DOWNLOAD */}
      <div className="md:flex container mx-auto justify-center gap-8 items-center mt-[60px] px-4">
        {[
          {
            href: "https://play.google.com/store/apps/details?id=id.zerone.latihanid",
            img: logos.playstore,
            text: "Download on Playstore",
            width: "w-5"
          },
          {
            href: "https://play.google.com/store/apps/details?id=id.zerone.latihanid",
            img: logos.appStore,
            text: "Download on AppStore",
            width: "w-5"
          }
        ].map((btn, idx) => (
          <div key={idx} className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white border-2 border-[#00A9E8] w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <Link
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3"
            >
              <span className="flex items-center rounded-full mr-3">
                <img src={btn.img} className={btn.width} alt="store icon" />
              </span>
              <span className="font-bold text-slate-800 text-sm">{btn.text}</span>
            </Link>
          </div>
        ))}

        {/* WhatsApp Demo Button */}
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
          <Link
            href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I+want+to+ask+about+Latihan.id+service"
            target="_blank"
            className="flex items-center border-2 bg-[linear-gradient(90deg,#1c76d2,#3498db)] border-[#00A9E8] rounded-[50px] px-6 py-3"
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

      {/* SECTION TITLE */}
      <div className="container mx-auto px-5 mt-20">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 text-center leading-[1.2]">
          The Most Secure and Reliable Exam Platform <br className="hidden md:inline" />
          for a Seamless and Fair Testing Experience
        </h2>
      </div>

      {/* FEATURES GRID 1 */}
      <div className="container mx-auto lg:px-40 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { img: ilustration.iluslatihan1, title: "Flexible and Efficient Online Exams" },
            { img: ilustration.iluslatihan2, title: "Secure and Trusted Online Exam System" },
            { img: ilustration.iluslatihan3, title: "Easy-to-Use Interface" }
          ].map((feature, idx) => (
            <div key={idx} className="group p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center cursor-pointer">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image src={feature.img} alt="feature" fill className="object-contain" />
              </div>
              <span className="text-slate-700 font-bold leading-relaxed block">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES GRID 2 */}
      <div className="container mx-auto lg:px-40 pb-32 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-4xl mx-auto">
          {[
            { img: ilustration.iluslatihan4, title: "Safe Exam Browser Support" },
            { img: ilustration.iluslatihan5, title: "Multiple Question Types" }
          ].map((feature, idx) => (
            <div key={idx} className="group p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center cursor-pointer">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image src={feature.img} alt="feature" fill className="object-contain" />
              </div>
              <span className="text-slate-700 font-bold leading-relaxed block">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}