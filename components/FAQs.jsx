// src/components/Faq.jsx
import React, { useState } from "react";
import "../css/Faq.css"; // Pastikan untuk menyertakan file CSS

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null); // Menyimpan indeks yang terbuka

  const faqs = [
    {
      question: "What is zerone.id?",
      answer: (
        <div>
          <p>
            zerone.id.id is an information technology company that provides
            integrated digital solutions. We develop systems that streamline
            administration, strengthen security, and support scalable operations
            for organizations across multiple sectors.
          </p>
        </div>
      ),
    },
    {
      question: "What products does zerone.id offer?",
      answer: (
        <div>
          <p>
            zerone.id provides a complete ecosystem of digital platforms
            designed to support operations, administration, learning,
            assessments, events, and data management.
          </p>
          <p>Our key products are:</p>
          <ul>
            <li>Edunav Integrated School Information System</li>
            <li>Latihan.id Secure CBT and Assessment Platform</li>
            <li>Venti.id Event and Ticketing Management Platform</li>
            <li>WritingAide AI Writing and Feedback Assistant</li>
            <li>Rajin.id Tutoring and Learning Platform</li>
            <li>MariDukung.com Crowdfunding Platform</li>
            <li>JadwalKuliah.id College Directory and Schedule Platform</li>
          </ul>
          <p>
            These products are ready to use, cloud based, and built to support
            organizations across various sectors.
          </p>
        </div>
      ),
    },
    {
      question: "What IT services does zerone.id provide?",
      answer: (
        <div>
          <p>The collaboration process includes</p>
          <ul>
            <li>Needs analysis and consultation</li>
            <li>Demo and product review</li>
            <li>Proposal and agreement</li>
            <li>System setup and onboarding</li>
            <li>Training for teams and users</li>
            <li>Launch and operational support</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Does zerone.id provide onsite and online sessions?",
      answer: (
        <div>
          <p>
            Yes. zerone.id can support large clients and multi branch
            organizations. Our systems are designed for multi unit structures
            with central dashboards and consolidated data. For example, in
            Edunav we provide an HQ Dashboard for institutions that manage
            multiple schools. The HQ Dashboard allows management to view and
            monitor data from all campuses without needing to log in to each
            individual Edunav tenant.
          </p>
        </div>
      ),
    },
    {
      question:
        "Can zerone.id handle large clients or multi branch organizations?",
      answer: (
        <div>
          <p>
            zerone.id.id is an information technology company that provides
            integrated digital solutions. We develop systems that streamline
            administration, strengthen security, and support scalable operations
            for organizations across multiple sectors.
          </p>
        </div>
      ),
    },

    {
      question: "Does zerone.id offer AI solutions?",
      answer: (
        <div>
          <p>
            Yes. zerone.id delivers AI functionality across its platforms, such
            as Edunav’s multi curriculum AI Lesson Plan Generator and
            WritingAide’s AI driven writing and evaluation tools. We are
            continuously expanding our AI capabilities to provide smarter, data
            driven support for organizations.
          </p>
        </div>
      ),
    },

    {
      question: "Can zerone.id develop custom systems?",
      answer: (
        <div>
          <p>
            Yes. We provide custom development services for organizations that
            need specific workflows, integrations, or new digital platforms.
          </p>
        </div>
      ),
    },

    {
      question: "How does zerone.id protect user data?",
      answer: (
        <div>
          <p>
            All systems run on secure servers with encrypted data storage. We
            follow industry standard security practices to ensure
            confidentiality and data safety.
          </p>
        </div>
      ),
    },

    {
      question: "Who owns the data stored in zerone.id systems?",
      answer: (
        <div>
          <p>
            Clients retain full ownership of their data. zerone.id only manages
            the system and does not use client data for any other purpose.
          </p>
        </div>
      ),
    },
    {
      question: "Is the system cloud based?",
      answer: (
        <div>
          <p>Yes. Our products are cloud based and accessible anywhere.</p>
        </div>
      ),
    },
    {
      question: "Does zerone.id perform data backup?",
      answer: (
        <div>
          <p>
            Yes. zerone.id conducts daily data backups and can supply raw data
            when needed. We also offer deployment options that allow
            institutions to store their data on their own private server
            infrastructure to meet operational or compliance standards.
          </p>
        </div>
      ),
    },
    {
      question: "How does zerone.id structure its pricing?",
      answer: (
        <div>
          <p>
            Pricing depends on the product and the scale of the organization. We
            offer subscription based models, per user models, event based
            pricing, and project based costs for custom development.
          </p>
        </div>
      ),
    },
    {
      question: "Are there additional fees?",
      answer: (
        <div>
          <p>
            Only if the client requires extra storage, custom features, or
            advanced integrations.
          </p>
        </div>
      ),
    },
    {
      question: "Does zerone.id provide training for users?",
      answer: (
        <div>
          <p>
            Yes. We offer user training through online sessions for users of our
            products, and onsite training can be arranged with prior
            coordination.
          </p>
        </div>
      ),
    },
    {
      question: "How can clients request technical support?",
      answer: (
        <div>
          <p>
            Clients may contact us through WhatsApp, e-mail, ticketing channels,
            or an assigned account manager.
          </p>
        </div>
      ),
    },
    {
      question:
        "Does zerone.id offer continuous assistance after implementation?",
      answer: (
        <div>
          <p>
            Yes. We provide ongoing support and periodic reviews to ensure long
            term success.
          </p>
        </div>
      ),
    },
    {
      question: "Is zerone.id only for schools?",
      answer: (
        <div>
          <p>
            No. zerone.id’s solutions are designed for any organization that
            needs digital transformation. Many of our products such as Venti.id,
            Latihan.id, WritingAide, and our IT services are used by companies,
            events, communities, and non profit organizations.
          </p>
        </div>
      ),
    },
    {
      question: "Can zerone.id integrate with external systems?",
      answer: (
        <div>
          <p>
            Yes. We provide integration services with third party platforms
            through API and custom development.
          </p>
        </div>
      ),
    },
    {
      question:
        "Does zerone.id support payment gateways, notification systems, and multi platform access?",
      answer: (
        <div>
          <p>
            Yes. We offer integrations with payment providers, WhatsApp
            notification services, and multi platform access for both web and
            mobile.
          </p>
        </div>
      ),
    },
    {
      question: "Can organizations request new modules or custom features?",
      answer: (
        <div>
          <p>
            Yes. Custom development is available based on client requirements
            and project scope. Any custom features or solutions outside our
            standard products and services will be cost according to the
            complexity of the project, the resources required, and the agreed
            timeline.
          </p>
        </div>
      ),
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle jawaban
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        console.log(faq); // Log objek FAQ untuk memastikan semua ada
        return (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span
                className={openIndex === index ? "arrow-up" : "arrow-down"}
              ></span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {openIndex === index && faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQs;
