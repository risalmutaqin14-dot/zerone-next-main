import { Metadata } from "next";
import ShopClient from "./shop";

export const metadata: Metadata = {
  title: "Shop | Zerone Global Digital Solution",
  description: "Purchase setup packages for Zerone Global products: Edunav, Latihan.id, and Venti. Seamlessly purchase setup packages for our premium digital solutions.",
  alternates: {
    canonical: "https://www.zerone.id/shop",
  },
  openGraph: {
    title: "Shop | Zerone Global Digital Solution",
    description: "Purchase setup packages for Zerone Global products: Edunav, Latihan.id, and Venti.",
    url: "https://www.zerone.id/shop",
    type: "website",
    images: [{ url: "https://www.zerone.id/assets/meta-image-zerone.webp" }],
  },
};

export default function ShopPage() {
  return <ShopClient />;
}