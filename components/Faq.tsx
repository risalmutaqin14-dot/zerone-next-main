"use client";

import React, { useState } from 'react';
// Pastikan path CSS ini sesuai dengan struktur Next.js Anda
import '../styles/css/Faq.css';

interface FaqItem {
  question: string;
  answer: React.ReactNode; // Menggunakan ReactNode karena ada elemen HTML di dalam jawaban
}

const faqs: FaqItem[] = [
  {
    question: 'What is Zerone Global Digital Solution?',
    answer: 'zerOne.id is an information technology company that provides integrated digital solutions. We develop systems that streamline administration, strengthen security, and support scalable operations for organizations across multiple sectors.'
  },
  {
    question: 'What products does Zerone Global Digital Solution offer?',
    answer: (
      <div className="space-y-3">
        <p>
          zerOne.id provides a complete ecosystem of digital platforms designed to support operations, administration, learning, assessments, events, and data management.
        </p>
        <p className="font-semibold text-gray-700">Our key products are:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Edunav Integrated School Information System</li>
          <li>Latihan.id Secure CBT and Assessment Platform</li>
          <li>Venti.id Event and Ticketing Management Platform</li>
          <li>WritingAide AI Writing and Feedback Assistant</li>
          <li>Rajin.id Tutoring and Learning Platform</li>
          <li>MariDukung.com Crowdfunding Platform</li>
          <li>JadwalKuliah.id College Directory and Schedule Platform</li>
        </ul>
        <p>
          These products are ready to use, cloud based, and built to support organizations across various sectors.
        </p>
      </div>
    )
  },
  {
    question: 'What IT services does Zerone Global Digital Solution provide?',
    answer: (
      <div className="space-y-3">
        <p>
          In addition to our products, we offer professional IT development services for organizations that need custom technology solutions. Our services include:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Custom Web Application Development</li>
          <li>CMS Development and Implementation</li>
          <li>UI and UX Design Services</li>
          <li>Payment Gateway Integration</li>
          <li>System Integration and API Development</li>
          <li>Data Migration and Digital Transformation Support</li>
        </ul>
        <p>
          These services allow organizations to build tailored systems that meet unique operational needs beyond our existing products.
        </p>
      </div>
    )
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list w-full space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={index} 
            className={`faq-item border-b border-gray-100 transition-all duration-300 ${isOpen ? 'bg-blue-50/30 rounded-xl px-4' : ''}`}
          >
            <div 
              className="faq-question flex items-center justify-between py-5 cursor-pointer group"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-500'}`}>
                {faq.question}
              </h3>
              <span className={`arrow transform transition-transform duration-300 text-blue-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
            
            <div
              className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;