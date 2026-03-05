"use client";

import { logos } from "@/data";

export default function NotFound() {
  return (
    <div className="mx-auto pt-[150px] md:pt-0 grid grid-cols-1 md:grid-cols-2 items-center justify-center md:h-screen bg-white px-10 md:px-24">
      <div className="flex justify-end">
        <img src={logos.img404} alt="Halaman 404 tidak ditemukan" className="w-[350px] md:w-[500px]" />
      </div>
      <div className="text-center md:text-left justify-start pl-0 md:pl-16">
        <h1 className="text-[70px] font-bold text-[#1c76d2]">Upsss!</h1>
        <h2 className="text-2xl font-semibold mt-2">We are Sorry...</h2>
        <p className="mt-4 text-gray-700">
          The page you're trying to access has restricted access. &bnsp;
          <br className="hidden md:inline" />
          Please refer to your system administration.
        </p>
        <div className="shadow-lg mt-5 mx-auto md:mx-0 rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[210px] ">
            <a
              href="/"
              className="download flex items-center border-2 bg-[linear-gradient(90deg,#1c76d2,#3498db)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              rel="noopener noreferrer"
            >
              <span className="button-icon flex items-center bg-[#00A9E8] rounded-full p-1 mr-2">
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
              <span className="text-white pl-3 font-medium">
                Back to Home
              </span>
            </a>
          </div>
      </div>
    </div>
  );
}