import { Metadata } from "next";
import ReturnRefundClient from "../return-refund-policy/ReturnRefundClient";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Zerone Global Digital Solution",
  description: "Understand the Return and Refund Policy of Global Zerone Digital regarding software development services and digital products.",
  keywords: ["Return Policy", "Refund Policy", "Cancellation", "Global Zerone Digital"],
  alternates: {
    canonical: "https://www.zerone.id/return-refund-policy",
  },
  openGraph: {
    title: "Return & Refund Policy | Zerone Global Digital Solution",
    description: "Understand the Return and Refund Policy of Global Zerone Digital regarding software development services and digital products.",
    url: "https://www.zerone.id/return-refund-policy",
    type: "website",
    images: [{ url: "https://www.zerone.id/assets/meta-image-zerone.webp" }],
  },
};

export default function Page() {
  return <ReturnRefundClient />;
}