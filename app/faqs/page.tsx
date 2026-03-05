import { Metadata } from "next";
import FaqClient from "./Faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Zerone Global",
  description: "Find answers to common questions about Zerone Global products like Edunav, Latihan.id, and our custom IT services.",
  keywords: ["FAQ", "Zerone Global", "Edunav FAQ", "IT Services Indonesia"],
};

export default function FaqPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="text-center mb-16">
          <h1 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Support Center</h1>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)]">Questions</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Everything you need to know about our ecosystem, security, and digital transformation services.
          </p>
        </div>
        
        <FaqClient />
      </div>
    </div>
  );
}