import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockup } from "../../data";

// Metadata menggantikan Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "CMS Development | Zerone Global Digital Solution",
  description:
    "Zerone Global provides Content Management System (CMS) development services to help businesses manage website content easily, securely, and flexibly. Our digital solutions improve your online efficiency and reputation.",
  alternates: {
    canonical: "https://www.zerone.id/cms",
  },
  openGraph: {
    title: "CMS Development | Zerone Global Digital Solution",
    description:
      "Zerone Global CMS solutions help businesses manage website content easily, securely, and flexibly.",
    url: "https://www.zerone.id/cms",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
      },
    ],
  },
};

export default function CMS() {
  return (
    <div className="webApp pt-16 lg:pt-5 bg-white">
      {/* Deskripsi Zerone */}
      <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="pr-6">
          <h1 className="reveal-text text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2 leading-tight">
            Content Management
            <br />
            System (CMS)
          </h1>
          <h2 className="reveal-text text-justify text-[18px] md:text-[24px] text-gray-800">
            CMS Solutions That Put You in Control
          </h2>
          <br />
          <p className="reveal-text text-gray-600 leading-relaxed text-justify">
            A website is the core of your business identity—a place where your
            products, values, and professionalism shine. A thoughtfully
            designed website helps you earn trust, attract customers, and open
            new business opportunities. That&apos;s why you need to maximize your
            Content Management System, an application or software for managing
            website content. You can manage your website content as you wish,
            with complete freedom.
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
              src={mockup.cms}
              alt="Custom Content Management System (CMS) Dashboard Interface by Zerone Global"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain relative lg:left-[-50px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="container mx-auto px-5">
        <h3 className="reveal-text text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 text-gray-700 italic">
          &ldquo;Content builds relationships. Relationships are built on trust.
          Trust drives revenue.&rdquo;
        </h3>
        <h3 className="reveal-text text-[16px] lg:text-[20px] font-bold text-center pb-10 text-gray-800">
          Andrew Davis
        </h3>
      </div>
    </div>
  );
}