import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { banner, ilustration, logos, sosialmedia } from "../../data";

export const metadata: Metadata = {
  title: "Edunav | School Information System by Zerone Global",
  description:
    "Edunav is an integrated school information system by Zerone Global. It helps digitize academics, administration, finance, attendance, communication, and parent engagement in one unified platform.",
  keywords: [
    "School Information System",
    "SIS",
    "School Management Software",
    "Academic Digitization",
    "Edunav",
    "Zerone Global",
  ],
  alternates: {
    canonical: "https://www.zerone.id/edunav",
  },
  openGraph: {
    title: "Edunav | School Information System by Zerone Global",
    description:
      "Edunav helps schools operate more efficiently with an integrated information system for academics, administration, and communication.",
    url: "https://www.zerone.id/edunav",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function EduNav() {
  return (
    <div className="webApp pt-20 lg:pt-5 bg-white overflow-x-hidden">
      {/* Hero Section - Desktop */}
      <div className="hidden sm:block container mx-auto lg:max-w-6xl mt-26 shadow-lg rounded-[20px] overflow-hidden">
        <Image
          src={banner.edunav}
          alt="Edunav School Information System Dashboard Interface"
          width={1200}
          height={600}
          layout="responsive"
          priority
          className="rounded-[20px]"
        />
      </div>

      {/* Hero Section - Mobile */}
      <div className="sm:hidden mt-2 container mx-auto max-w-[370px] drop-shadow-xl overflow-hidden">
        <Image
          src={banner.mobileedunav}
          alt="Edunav Mobile App Interface for Students and Teachers"
          width={370}
          height={600}
          layout="responsive"
          className="rounded-[20px] shadow-lg"
        />
      </div>

      {/* Product Description */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20">
        <div className="lg:w-1/3 reveal-text">
          <span className="block text-lg lg:text-xl text-blue-600 mb-4 font-bold uppercase tracking-wider">
            Our Product
          </span>
          <h1 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
            What is Edunav?
          </h1>
        </div>

        <div className="lg:w-2/3 reveal-text">
          <p className="text-justify text-base lg:text-lg text-slate-500 leading-relaxed font-medium">
            Edunav is a comprehensive School Information System designed to
            digitize and streamline academic, administrative, and
            communication workflows in educational institutions. It provides
            integrated modules for academics, finance, attendance, guidance,
            health, reporting, communication, and parent engagement, all
            within one unified platform.
          </p>
        </div>
      </div>

      {/* App Store Buttons */}
      <div className="md:flex container mx-auto justify-center gap-8 items-center mt-[60px] px-4 reveal-btn">
        {[
          {
            href: "https://play.google.com/store/apps/details?id=com.zerone.venti",
            img: logos.playstore,
            text: "Download on PlayStore",
            alt: "PlayStore",
            width: "w-5"
          },
          {
            href: "https://apps.apple.com/id/app/edunav/id1616739654",
            img: logos.appStore,
            text: "Download on AppStore",
            alt: "AppStore",
            width: "w-6"
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
                <img src={btn.img} className={btn.width} alt={btn.alt} />
              </span>
              <span className="font-bold text-slate-800 text-sm">{btn.text}</span>
            </Link>
          </div>
        ))}

        {/* Request Demo Button */}
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
          <Link
            href="https://wa.me/6281370000299?text=Hi%2C%20I%20want%20to%20ask%20about%20Edunav%20Demo"
            target="_blank"
            className="flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-6 py-3"
          >
            <span className="flex items-center bg-white/20 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </span>
            <span className="text-white font-bold text-sm">Request App Demo</span>
          </Link>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-7 sm:px-20 lg:px-40 my-32">
        <div className="lg:w-1/2 reveal-img">
          <div className="relative w-full max-w-[350px] mx-auto">
            <Image
              src={sosialmedia.socialEdunav}
              alt="Edunav Social Media Community"
              width={350}
              height={350}
              className="rounded-[32px]"
            />
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 reveal-text">
          <span className="block text-lg lg:text-xl text-blue-600 mb-2 font-bold uppercase">
            Follow Us On
          </span>
          <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6">
            Social Media
          </h2>
          <p className="text-justify text-base lg:text-lg text-slate-500 leading-relaxed mb-8 font-medium">
            Improve your school&apos;s administrative efficiency! Follow Edunav on
            social media for system implementation tips, feature updates, and
            guides.
          </p>

          <Link
            href="https://www.instagram.com/edunav.sis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#00A9E8] text-slate-800 rounded-full font-bold hover:bg-blue-50 transition-all shadow-md"
          >
            <img src={logos.instagram} className="w-5" alt="Instagram" />
            Follow Instagram
          </Link>
        </div>
      </div>

      {/* Features Header */}
      <div className="container mx-auto px-5 mb-12">
        <h2 className="reveal-text text-3xl lg:text-4xl font-black text-slate-900 text-center leading-[1.2]">
          The Most Advanced and Complete <br className="hidden md:inline" />
          School Information System.
        </h2>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto lg:px-40 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { img: ilustration.ilusEdunav1, text: "Efficiency is the key to ease of teaching. Edunav provides that for teachers." },
            { img: ilustration.ilusEdunav2, text: "No more hassle, support and monitor the details of your child's studies through Edunav." },
            { img: ilustration.ilusEdunav3, text: "Enjoy every learning process with Edunav, making the school atmosphere memorable." }
          ].map((feature, idx) => (
            <div key={idx} className="reveal-img group p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image src={feature.img} alt="feature" fill className="object-contain transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-center text-slate-600 font-bold leading-relaxed">
                {feature.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}