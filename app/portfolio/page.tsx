import { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";
import cards from "../../data";

export const metadata: Metadata = {
  title: "Portfolio | Zerone Global Digital Solution",
  description: "Explore Zerone Global Digital Solution’s portfolio: innovative web design, branding, and digital solutions that elevate your business.",
  alternates: {
    canonical: "https://www.zerone.id/portfolio",
  },
  openGraph: {
    title: "Portfolio | Zerone Global Digital Solution",
    description: "Discover creative projects by Zerone Global Digital Solution: web design, branding, and digital innovation.",
    url: "https://www.zerone.id/portfolio",
    type: "website",
    images: [{ url: "https://www.zerone.id/assets/meta-image-zerone.webp" }],
  },
};

export default function PortfolioPage() {
  return <PortfolioClient cards={cards} />;
}