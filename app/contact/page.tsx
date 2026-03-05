import { Metadata } from "next";
import ContactClient from "../../components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Zerone Global Digital Solution",
  description: "Get in touch with Zerone Global for project inquiries, technical support, or collaboration. Find our phone number, WhatsApp, email, and office address in BSD City, Indonesia.",
  alternates: {
    canonical: "https://www.zerone.id/contact",
  },
  openGraph: {
    title: "Contact Us | Zerone Global Digital Solution",
    description: "Send us a message or contact us directly via WhatsApp/Phone. We are ready to assist with your digital projects.",
    url: "https://www.zerone.id/contact",
    type: "website",
    images: [{ url: "https://www.zerone.id/assets/meta-image-zerone.webp" }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}