"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Send, Loader2, MessageSquare } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactClient() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const response = await fetch(
        "https://ai.zrone.link/webhook/1ab06478-fd60-4be0-a9b4-97a45fc6b896",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitMessage("✅ Thank you! Your message has been sent successfully.");
      setIsError(false);
      reset(); 
    } catch (err) {
      setSubmitMessage("❌ Oops, something went wrong. Please try again.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white pt-24 lg:pt-10">
      <div className="container mx-auto px-6 lg:px-32 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: Info */}
        <div className="reveal-text">
          <h1 className="text-[#00A9E8] font-bold uppercase tracking-[0.2em] text-xs mb-4">Contact Us</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Let’s Connect and <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)]">
              Collaborate with Zerone
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
            Connect with us for project inquiries, technical support, or general questions. We’ll respond as soon as possible.
          </p>

          <div className="space-y-1">
            {[
              { icon: <Phone size={20} />, label: "(021) 2784 6241", href: "tel:+02127846241" },
              { icon: <MessageSquare size={20} />, label: "+62 813-7000-0299", href: "https://wa.me/6281370000299" },
              { icon: <Mail size={20} />, label: "info@zerone.id", href: "mailto:info@zerone.id" },
              { 
                icon: <MapPin size={20} />, 
                label: "My Republic Plaza, Wing A, Zone 6 Green Office Park, BSD City, Tangerang, Banten – Indonesia", 
                href: "https://www.google.com/maps/place/PT.+Global+Zerone+Digital/@-6.3037102,106.6529124,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69fbecde2cc1b1:0xa154bae00576df77!8m2!3d-6.3037102!4d106.6529124!16s%2Fg%2F11pcd75mc4!5m1!1e2?hl=id&entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D" 
              },
            ].map((item, idx) => (
              <a key={idx} href={item.href} className="group flex items-center gap-5 p-2 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 group-hover:bg-[#0092D7] group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <span className="text-slate-700 font-bold group-hover:text-[#0092D7] transition-colors leading-snug">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Modern Form */}
        <div className="reveal-img relative">
          <div className="p-8 md:p-12 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] bg-[#F5F9FF] border border-[#00A9E8]/20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full h-[60px] px-6 rounded-[15px] border-2 border-[#00A9E8] bg-white focus:outline-none focus:ring-2 focus:ring-[#0092D7]/20 transition-all placeholder:text-slate-400 font-medium"
                />
                {errors.name && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                  })}
                  className="w-full h-[60px] px-6 rounded-[15px] border-2 border-[#00A9E8] bg-white focus:outline-none focus:ring-2 focus:ring-[#0092D7]/20 transition-all placeholder:text-slate-400 font-medium"
                />
                {errors.email && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full h-[60px] px-6 rounded-[15px] border-2 border-[#00A9E8] bg-white focus:outline-none focus:ring-2 focus:ring-[#0092D7]/20 transition-all placeholder:text-slate-400 font-medium"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.phone.message}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full p-6 rounded-[15px] border-2 border-[#00A9E8] bg-white focus:outline-none focus:ring-2 focus:ring-[#0092D7]/20 transition-all placeholder:text-slate-400 font-medium resize-none"
                />
                {errors.message && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.message.message}</p>}
              </div>

              <div className="flex pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-[240px] transition duration-300 ease-in-out hover:scale-105 flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-4 py-3 shadow-lg group ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <div className="flex items-center justify-center bg-white rounded-full p-1.5 mr-3 transition-transform group-hover:rotate-12">
                    {isSubmitting ? (
                      <Loader2 className="animate-spin text-[#0092D7]" size={20} />
                    ) : (
                      <Send className="text-[#0092D7]" size={20} />
                    )}
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">
                    {isSubmitting ? "Sending..." : "Talk to Our Team"}
                  </span>
                </button>
              </div>

              {submitMessage && (
                <div className={`mt-4 text-sm font-bold ${isError ? "text-red-600" : "text-green-600"}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-6 lg:px-32 mb-32">
        <div className="reveal-img rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.695270344299!2d106.6529124!3d-6.303710199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbecde2cc1b1%3A0xa154bae00576df77!2sPT.%20Global%20Zerone%20Digital!5e0!3m2!1sid!2sid!4v1772695049507!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Zerone Global Office Location"
          />
        </div>
      </div>
    </div>
  );
}