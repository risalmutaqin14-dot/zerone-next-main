"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { products } from "./products"; // shared product data


const ShopHeader = () => (
  <div className="bg-white mx-auto pt-24 md:pt-32 pb-12 max-w-6xl px-6 lg:px-8">
    <div className="text-center">
      <div className="reveal-text inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
        Pricing & Packages
      </div>
      <h1 className="reveal-text text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
        Our Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Shop</span>
      </h1>
      <p className="reveal-text mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
        Seamlessly purchase setup packages for our premium digital solutions and start your transformation today.
      </p>
    </div>
  </div>
);

const ShopCard = ({ product }: { product: typeof products[0] }) => (
  <div className="reveal-img group relative flex flex-col h-full bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 overflow-hidden">
    
    {/* Product Image */}
    <div className="relative w-full h-64 overflow-hidden">
      <Image
        src={product.image}
        alt={`${product.title} - Zerone Global Product`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    
    {/* Product Content */}
    <div className="p-8 flex flex-col flex-grow bg-white">
      <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
        {product.title}
      </h3>
      <div className="text-xl font-bold text-[#0092D7] mb-4">
        {product.price === "Rp 0" ? "Free of Charge" : product.price}
      </div>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
        {product.description}
      </p>
      
      {/* Action Button */}
      <div className="reveal-btn pt-6 border-t border-slate-50">
        <Link
          href={`/shop/produk-setup-fee/${product.id}`}
          className="relative inline-flex items-center justify-between w-full group/btn px-6 py-3 border-2 border-[#00A9E8] rounded-full transition-all duration-300 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] text-white hover:scale-[1.02] shadow-md"
        >
          <span className="text-sm font-bold uppercase tracking-wider">
            View Details
          </span>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#0092D7] transition-transform duration-300 group-hover/btn:translate-x-1">
            <ArrowRight size={18} />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default function ShopClient() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <ShopHeader />

      <div className="container mx-auto max-w-6xl px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ShopCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}