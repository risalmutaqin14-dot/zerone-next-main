import { Metadata } from "next";
import Image from "next/image";
import { heroImage, ilustration, ourteam, whychoose } from "../../data";
// Pastikan path CSS sudah sesuai dengan struktur Next.js Anda
import "../../styles/css/About.css";

// Pengganti React Helmet (Server-side SEO)
export const metadata: Metadata = {
  title: "About Zerone Global | Secure & Scalable Digital Solutions",
  description: "Discover Zerone Global, your trusted digital transformation partner in Southeast Asia. We deliver innovation through high-quality software engineering for education and business.",
  keywords: ["Software House Indonesia", "Digital Transformation", "Education Technology", "Web Development", "Mobile App Development", "Zerone Global"],
  alternates: {
    canonical: "https://www.zerone.id/about",
  },
  openGraph: {
    title: "About Zerone Global | Secure & Scalable Digital Solutions",
    description: "Zerone Global is the trusted digital partner for schools, organizations, and companies in Southeast Asia.",
    url: "https://www.zerone.id/about",
    type: "website",
    images: [
      {
        url: "https://www.zerone.id/assets/meta-image-zerone.webp",
        width: 1200,
        height: 630,
        alt: "Zerone Global Meta Image",
      },
    ],
  },
};

export default function About() {
  return (
    <div className="about-page bg-white pt-15 md:pt-40">
      {/* Deskripsi Zerone */}
      <section className="features-section container mx-auto lg:px-35 px-8 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between md:space-y-8 lg:space-y-0 px-6">
          <div className="lg:w-1/3">
            <span className="block md:text-[24px] text-left text-gray-600 mb-2 font-semibold">
              About Us
            </span>
            <h1 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-3 md:mb-6">
              Zerone Global <br />
              Digital Solution
            </h1>
          </div>

          <div className="lg:w-2/3 text-left text-gray-500">
            <p className="text-justify md:text-[18px] mb-4">
              Zerone is a digital solution company focused on helping and
              ensuring business entities grow and accelerate their potential
              by using a high-quality software engineering method.
            </p>
            <p className="text-justify md:text-[18px]">
              Founded in 2021 by education technologies and developers,
              zerone.id has solid and creative team members that have proven
              to deliver high-quality software applications.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="container mx-auto grid lg:grid-cols-2 lg:px-35 p-8 bg-white md:pt-20">
        <div className="flex items-center justify-left mt-[50px] p-7 md:mt-0">
          <Image
            src={whychoose.whychooseus}
            alt="Why choose Zerone Global"
            width={450}
            height={450}
            className="max-w-full h-auto"
            priority // Menandakan gambar ini penting untuk LCP
          />
        </div>

        <div>
          <div className="vision shadow-lg rounded-[20px] p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-[24px] md:text-[30px] font-bold text-gray-600 mb-4">
              Our Vision
            </h3>
            <p className="md:text-[18px] text-justify text-gray-600">
              To become the most trusted digital partner for education and community innovation in Southeast Asia.
            </p>
          </div>
          <br />
          <div className="mission shadow-lg rounded-[20px] p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-[24px] md:text-[30px] font-bold text-gray-600 mb-4">
              Our Mission
            </h3>
            <ul className="custom-list list-disc list-inside space-y-2">
              <li className="md:text-[18px]">Simplify digital transformation for schools & institutions</li>
              <li className="md:text-[18px]">Empower learning with modern, integrated platforms</li>
              <li className="md:text-[18px]">Enable efficient community engagement and event management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Core Values */}
      <div className="container mx-auto lg:px-30 lg:mt-10">
        <div
          className="mt-10 md:p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] py-20 relative"
          style={{ backgroundImage: `url(${heroImage.bgHorizontal})` }}
        >
          {/* Box 1 */}
          <div className="w-full text-center my-2 px-10">
            <Image
              src={ilustration.ilusAbout1}
              width={80}
              height={80}
              className="mx-auto pb-5"
              alt="Customer Oriented Service Icon"
            />
            <h3 className="text-[20px] font-semibold text-white">Customer Oriented</h3>
            <p className="text-center md:text-[16px] text-white">
              Clients speak up about their wishes, We make it happen.
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-full text-center my-2 px-10">
            <Image
              src={ilustration.ilusAbout2}
              width={80}
              height={80}
              className="mx-auto pb-5"
              alt="Collaborative Teamwork Icon"
            />
            <h3 className="text-[20px] font-semibold text-white">Collaborative</h3>
            <p className="text-center md:text-[16px] text-white">
              Our team works collaboratively with clients to deliver high-quality solutions.
            </p>
          </div>

          {/* Box 3 */}
          <div className="w-full text-center my-2 px-10">
            <Image
              src={ilustration.ilusAbout3}
              width={80}
              height={80}
              className="mx-auto pb-5"
              alt="24/7 Technical Support Icon"
            />
            <h3 className="text-[20px] font-semibold text-white">Support 24/7</h3>
            <p className="text-center md:text-[16px] text-white">
              Whenever you need us, we are always on hand.
            </p>
          </div>
        </div>
      </div>

      {/* Section Our Team */}
      <div className="container mx-auto lg:px-30 px-5 lg:mt-20 mb-20">
        <div className="text-center my-20">
          <span className="block md:text-[24px] text-gray-600 mb-1 font-semibold">Our Team</span>
          <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6">
            Experts Behind Your Project Success
          </h2>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4">
          {Object.entries(ourteam).map(([key, src]) => (
            <div key={key} className="relative aspect-[3/4] w-full">
              <Image
                src={src}
                alt={`Team Member - ${key}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}