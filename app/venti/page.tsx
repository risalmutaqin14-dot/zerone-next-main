import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { banner, ilustration, logos, sosialmedia } from "../../data";

export const metadata: Metadata = {
  title: "Venti.id | Digital Event & Ticketing Management System by Zerone Global",
  description:
    "Maximize your event success with Venti.id. An all-in-one digital ticketing and event management system featuring real-time analytics, seating maps, secure payments, and attendance monitoring.",
  keywords: [
    "Event Management System",
    "Digital Ticketing",
    "Sistem Tiket Online",
    "Event Registration",
    "Venti.id",
    "Zerone Global",
  ],
  alternates: {
    canonical: "https://www.zerone.id/venti",
  },
  openGraph: {
    title: "Venti.id | Digital Event & Ticketing Management System",
    description:
      "The ultimate solution for digital events and ticketing. Supports registration, payments, attendance monitoring, and analytics for all event types.",
    url: "https://www.zerone.id/venti",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function Venti() {
  return (
    <div className="webApp pt-10 lg:pt-5 bg-white">
      {/* HERO BANNER SECTION - Desktop */}
      <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px] overflow-hidden">
        <Image
          src={banner.venti}
          alt="Dashboard Interface of Venti.id Event Management System"
          width={1200}
          height={600}
          layout="responsive"
          priority
          className="rounded-[20px]"
        />
      </div>

      {/* HERO BANNER SECTION - Mobile */}
      <div className="product-banner mt-14 container mx-auto md:hidden max-w-[370px] drop-shadow-xl overflow-hidden">
        <Image
          src={banner.mobileventi}
          alt="Venti.id Mobile Ticketing App for Attendees"
          width={370}
          height={600}
          layout="responsive"
          className="rounded-[20px] mx-auto"
        />
      </div>

      {/* PRODUCT EXPLANATION SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20">
        <div className="lg:w-1/3">
          <span className="block text-lg lg:text-xl text-blue-600 mb-4 font-bold uppercase tracking-wider">
            Our Product
          </span>
          <h1 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
            What is Venti.id?
          </h1>
        </div>

        <div className="lg:w-2/3">
          <p className="text-justify text-base lg:text-lg text-slate-500 leading-relaxed font-medium">
            Venti.id is a digital event and ticketing management system. It
            supports digital registration, payment processing, attendance
            monitoring, and analytics. Venti.id integrates with Strava for
            sport events and Latihan.id for academic competitions, includes
            seat mapping capabilities, and offers payment options through bank
            transfers, QRIS, and credit cards.
          </p>
        </div>
      </div>

      {/* DOWNLOAD & DEMO BUTTONS */}
      <div className="md:flex container mx-auto justify-center gap-8 items-center mt-[60px] px-4">
        {/* Playstore Button */}
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
          <Link
            href="https://play.google.com/store/apps/details?id=com.zerone.venti&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-[#00A9E8] rounded-[50px] px-6 py-3 bg-white"
          >
            <span className="flex items-center rounded-full mr-3">
              <img
                src={logos.playstore}
                className="w-5"
                alt="Google Play Store"
              />
            </span>
            <span className="font-bold text-slate-800 text-sm">Download on Playstore</span>
          </Link>
        </div>

        {/* Create Event Button */}
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
          <Link
            href="https://venti.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-6 py-3"
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
            <span className="text-white font-bold text-sm">Create Your Event</span>
          </Link>
        </div>
      </div>

      {/* SOCIAL MEDIA SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-7 sm:px-20 lg:px-40 my-32">
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-[350px] mx-auto">
            <Image
              src={sosialmedia.socialVenti}
              alt="Venti.id Event Community"
              width={350}
              height={350}
              className="rounded-[32px] "
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
            Want your event to be a success? Follow Venti for ticketing
            management tips, promotional strategies, and platform feature
            updates. The ultimate ticketing solution for all types of events
            and competitions.
          </p>

          <Link
            href="https://www.instagram.com/ventiid/"
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
          Efficient, All‑in‑One Event & Ticketing <br className="hidden md:inline" />
          Solution for Seamless Experiences
        </h2>
      </div>

      {/* FEATURES GRID */}
      <div className="container mx-auto lg:px-40 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { img: ilustration.ilusventi1, title: "Complete Event Management Solutions" },
            { img: ilustration.ilusventi2, title: "One Platform for Every Event" },
            { img: ilustration.ilusventi3, title: "Seamless Ticketing and Registration System" }
          ].map((feature, idx) => (
            <div key={idx} className="group p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image src={feature.img} alt="feature" fill className="object-contain" />
              </div>
              <h3 className="text-slate-700 font-bold leading-relaxed text-lg">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}