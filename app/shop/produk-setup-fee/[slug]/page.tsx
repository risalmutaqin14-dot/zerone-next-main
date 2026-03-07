"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { products } from "../../products"; // shared data module
import { ArrowLeft, ShoppingBag, Info, X, School, User, Mail, Phone } from "lucide-react";

export default function ShopDetail() {
  const params = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === params.slug);

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found. Redirecting...</p>
        {setTimeout(() => router.push("/shop"), 2000)}
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Send data to Webhook
    try {
      await fetch("https://ai.zrone.link/webhook/zerone-shop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          product_id: product.id,
          product_title: product.title,
          price: product.price,
        }),
      });
    } catch (error) {
      console.error("Webhook error:", error);
    }

    // 2. Redirect to Xendit with Payer Data
    try {
      const paymentLink = product.paymentLink || "#";
      const url = new URL(paymentLink);
      if (formData.email) url.searchParams.append("payer_email", formData.email);
      if (formData.phone) url.searchParams.append("mobile_number", formData.phone);

      window.location.href = url.toString();
    } catch (err) {
      window.location.href = product.paymentLink || "#";
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative">
      
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-[32px] w-full max-w-lg p-8 shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button
              type="button"
              aria-label="Close customer information modal"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-black text-slate-900 mb-2">Customer Information</h2>
            <p className="text-sm text-slate-500 mb-8">
              Complete your details to purchase <strong>{product.title}</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <User size={14} /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00A9E8] outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <Mail size={14} /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00A9E8] outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <Phone size={14} /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00A9E8] outline-none transition-all"
                  placeholder="e.g. +62 812..."
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <School size={14} /> Institution / School
                </label>
                <input
                  type="text"
                  name="institution"
                  required
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00A9E8] outline-none transition-all"
                  placeholder="Enter school or company name"
                />
              </div>

              <button
                type="submit"
                className="w-full font-bold py-5 rounded-2xl shadow-xl hover:shadow-[#0092D7]/20 transition-all mt-6 text-white active:scale-95"
                style={{ background: 'linear-gradient(90deg, #00BBD7 0%, #0092D7 100%)' }}
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <Link href="/shop" className="inline-flex items-center text-slate-500 hover:text-[#0092D7] font-bold text-sm uppercase tracking-widest mb-12 group transition-colors">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="reveal-img relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Details Section */}
          <div className="reveal-text">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              {product.title}
            </h1>
            <p className="text-3xl font-bold text-[#0092D7] mb-8">
              {product.price}
            </p>

            <div className="text-slate-600 mb-10 text-justify leading-relaxed space-y-4">
              <p>{product.description}</p>
              <p>
                Completing this purchase will initiate the setup process for <strong>{product.title}</strong>.
                Our team will get in touch with you shortly after payment confirmation.
              </p>
              <p className="text-sm italic text-slate-400 pt-4 border-t border-slate-100">
                * Payment is processed securely via Xendit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-3 font-bold py-5 px-8 rounded-full shadow-xl hover:shadow-[#0092D7]/20 hover:scale-[1.03] transition-all text-white"
                style={{ background: 'linear-gradient(90deg, #00BBD7 0%, #0092D7 100%)' }}
              >
                <ShoppingBag size={20} />
                Buy Now
              </button>

              <Link
                href={product.learnMoreLink || "#"}
                className="flex-1 flex items-center justify-center gap-3 bg-white border-2 border-[#0092D7] text-[#0092D7] hover:bg-[#0092D7] hover:text-white font-bold py-5 px-8 rounded-full shadow-md hover:scale-[1.03] transition-all"
              >
                <Info size={20} />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
