import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { banner, ilustration } from "../../data";

export const metadata: Metadata = {
  title: "JadwalKuliah | Smart College Schedule & Academic Management",
  description:
    "JadwalKuliah is a digital college schedule management platform by Zerone Global. Manage academic schedules easily with real-time notifications, flexible search, and student profiles.",
  keywords: [
    "College Schedule",
    "Academic Calendar",
    "Student Planner",
    "University Timetable",
    "JadwalKuliah",
    "Zerone Global",
  ],
  alternates: {
    canonical: "https://www.zerone.id/jadwalkuliah",
  },
  openGraph: {
    title: "JadwalKuliah | Smart College Schedule Management",
    description:
      "Optimize your academic life with JadwalKuliah. Features real-time schedule alerts, class search, and personalized student profiles.",
    url: "https://www.zerone.id/jadwalkuliah",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function JadwalKuliah() {
  return (
    <div className="webApp pt-20 lg:pt-5 bg-white overflow-x-hidden">
      {/* HERO BANNER - Desktop */}
      <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px] overflow-hidden">
        <Image
          src={banner.jadwalkuliah}
          alt="JadwalKuliah Desktop Dashboard Interface"
          width={1200}
          height={600}
          layout="responsive"
          priority
          className="rounded-[20px]"
        />
      </div>

      {/* HERO BANNER - Mobile */}
      <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl overflow-hidden">
        <Image
          src={banner.mobilejadwalkuliah}
          alt="JadwalKuliah Mobile App Interface"
          width={370}
          height={600}
          layout="responsive"
          className="rounded-[20px] mx-auto shadow-lg"
        />
      </div>

      {/* CTA BUTTON SECTION */}
      <div className="flex justify-center mt-20">
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[240px]">
          <Link
            href="https://jadwalkuliah.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 bg-[linear-gradient(90deg,#1c76d2,#3498db)] border-[#00A9E8] rounded-[50px] px-4 py-3"
          >
            <span className="flex items-center bg-[#00A9E8] rounded-full p-2 mr-3">
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
            <span className="text-white font-bold text-lg tracking-wide">
              Start Free Trial
            </span>
          </Link>
        </div>
      </div>

      {/* HEADLINE SECTION */}
      <div className="container mx-auto px-5 mt-16">
        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 text-center leading-[1.2]">
          Simplify Your College Life with Smart <br className="hidden md:inline" />
          Schedule Management and Academic Tools
        </h1>
      </div>

      {/* FEATURES GRID */}
      <div className="container mx-auto lg:px-40 pb-32 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { 
              img: ilustration.ilusjadwalkuliah1, 
              title: "Real-Time Notifications",
              alt: "Real-Time Schedule Notification Icon" 
            },
            { 
              img: ilustration.ilusjadwalkuliah2, 
              title: "Flexible Search Feature",
              alt: "Flexible Class Search Feature Icon" 
            },
            { 
              img: ilustration.ilusjadwalkuliah3, 
              title: "User Profile",
              alt: "Student User Profile Feature Icon" 
            }
          ].map((feature, idx) => (
            <div key={idx} className="group p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center cursor-pointer">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image 
                  src={feature.img} 
                  alt={feature.alt} 
                  fill 
                  className="object-contain transition-transform group-hover:scale-110" 
                />
              </div>
              <h3 className="text-slate-700 font-bold text-xl leading-relaxed">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}