"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Card {
  id: number;
  title: string;
  image: string;
  author: string;
  description: string;
  link: string;
}

const PortfolioHeader = () => (
  <div className="bg-white mx-auto pt-24 md:pt-32 pb-12 max-w-6xl px-6 lg:px-8">
    <div className="text-center">
      <div className="reveal-text inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
        Our Showcase
      </div>
      <h1 className="reveal-text text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
        Checkout Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Best Portfolio</span>
      </h1>
      <p className="reveal-text mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
        We bridge the gap between complex technology and intuitive design to create digital products people love.
      </p>
    </div>
  </div>
);

const PortfolioCard = ({ card }: { card: Card }) => (
  <div className="reveal-img group relative flex flex-col h-full bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 overflow-hidden">
    
    {/* Image Container with Floating Badge */}
    <div className="relative w-full h-72 overflow-hidden">
      <Image
        src={card.image}
        alt={`${card.title} portfolio`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
      />
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Category Badge */}
      <div className="absolute top-5 left-5 z-20">
        <span className="px-4 py-2 text-[10px] font-black uppercase tracking-[2px] text-white bg-slate-900/60 backdrop-blur-md rounded-full border border-white/20">
          {card.author}
        </span>
      </div>
    </div>
    
    {/* Content Area */}
    <div className="p-8 flex flex-col flex-grow relative bg-white">
      <h3 className="text-2xl font-black text-slate-900 mb-4 leading-[1.2] group-hover:text-blue-600 transition-colors duration-300">
        {card.title}
      </h3>
      <p className="text-slate-500 text-base leading-relaxed mb-8 flex-grow font-medium line-clamp-3">
        {card.description}
      </p>
      
      {/* Interactive Footer */}
      <div className="reveal-btn pt-6 border-t border-slate-50">
        <Link
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-between w-full group/btn"
        >
          <span className="text-sm font-bold text-slate-900 group-hover/btn:text-blue-600 transition-colors">
            View Case Study
          </span>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-900 group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all duration-300 transform group-hover/btn:rotate-45">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default function PortfolioClient({ cards }: { cards: Card[] }) {
  const ITEMS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleCards = useMemo(() => {
    return cards.slice(0, visibleCount);
  }, [visibleCount, cards]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <PortfolioHeader />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {visibleCards.map((card) => (
            <PortfolioCard key={card.id} card={card} />
          ))}
        </div>

        {visibleCount < cards.length && (
          <div className="flex justify-center mt-24">
            <button
              onClick={handleLoadMore}
              className="reveal-btn group relative flex items-center gap-8 pl-8 pr-4 py-4 bg-slate-900 rounded-full overflow-hidden transition-all duration-300 hover:pr-6 active:scale-95 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)]"
            >
              <span className="text-white font-bold tracking-tight uppercase text-xs">Explore More Projects</span>
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white transition-transform duration-500 group-hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="currentColor"
                >
                  <path d="M480-160 240-400l56-56 184 183 184-183 56 56-240 240Zm0-400L240-800l56-56 184 183 184-183 56 56-240 240Z" />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}