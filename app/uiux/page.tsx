import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup, solutionUIUX } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "UI/UX Design | Zerone Global Digital Solution",
  description:
    "Zerone Global provides professional UI/UX Design services for apps and websites. Our digital design solutions ensure intuitive, comfortable, and engaging user experiences to boost customer trust and engagement.",
  alternates: {
    canonical: "https://www.zerone.id/uiux",
  },
  openGraph: {
    title: "UI/UX Design | Zerone Global Digital Solution",
    description:
      "Zerone Global UI/UX solutions help businesses build apps and websites with modern, intuitive, and user-centered designs.",
    url: "https://www.zerone.id/uiux",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design | Zerone Global Digital Solution",
    description:
      "Zerone Global UI/UX solutions help businesses build apps and websites with modern, intuitive, and user-centered designs.",
    images: ["https://www.zerone.id/assets/meta-image-zerone.webp"],
  },
};

export default function UIUX() {
  return (
    <div className="webApp pt-16 lg:pt-5 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2 leading-tight">
            UI/UX Design
          </h1>
          <h2 className="reveal-text text-justify text-[18px] md:text-[24px] text-gray-800">
            What Makes Your Applications and Websites Easy to Access
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed text-justify">
            UI stands for user interface. Meanwhile, UX stands for user
            experience. Both play a very important role in digital products
            such as applications and websites. UI functions to design the
            appearance so that your product is pleasing to the eye. UX ensures 
            your product feels intuitive, comfortable, and memorable. The better
            your UI/UX, the more confident and likely customers are to engage
            and purchase.
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
          <div className="hidden lg:block relative w-full max-w-[500px] h-[450px]">
            <Image
              src={mockup.uiux}
              alt="Professional UI/UX Design Mockup for Mobile and Web Apps by Zerone Global"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Transformation Section */}
      <div className="container mx-auto mt-10 mb-10 px-5">
        <h3 className="reveal-text text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
          Digital Transformation
          <br className="hidden md:inline" />
          &nbsp;Through User-Centered UI/UX Design
        </h3>
        <h4 className="reveal-text text-[16px] md:text-[18px] text-center px-4 text-gray-600">
          End-to-End Digital Product Design Solutions: UI/UX, User Research,
          Prototyping, and Design Systems. <br className="hidden md:inline" />
          &nbsp;Develop successful products with our team of experts.
        </h4>
      </div>

      {/* Portfolio Grid */}
      <section className="container mx-auto lg:px-32 px-5 bg-white pb-20">
        <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {[
            { src: solutionUIUX.uiux1, alt: "Dashboard Interface Design and Analytics Layout by Zerone Global" },
            { src: solutionUIUX.uiux2, alt: "Mobile App User Experience (UX) Design with Intuitive Navigation by Zerone Global" },
            { src: solutionUIUX.uiux3, alt: "Web Application UI Prototype and Interactive Design System by Zerone Global" },
            { src: solutionUIUX.uiux4, alt: "E-commerce Website User Interface Design with modern aesthetic by Zerone Global" },
            { src: solutionUIUX.uiux5, alt: "User-Centered Interface Design focusing on conversion and engagement by Zerone Global" },
            { src: solutionUIUX.uiux6, alt: "Comprehensive Digital Product Design Strategy and Branding by Zerone Global" },
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