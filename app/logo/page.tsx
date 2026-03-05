import { Metadata } from "next";
import LogoPageClient from "../logo/LogoPage";

export const metadata: Metadata = {
  title: "Brand Assets & Guidelines | Zerone Global",
  description: "Download official logos and brand guidelines for Zerone Global and its products. strictly for authorized use.",
  keywords: ["Zerone Logo", "Edunav Logo", "Brand Assets", "Logo Download PNG", "Zerone Guidelines"],
  alternates: {
    canonical: "https://www.zerone.id/brand-assets",
  },
};

export default function Page() {
  return <LogoPageClient />;
}