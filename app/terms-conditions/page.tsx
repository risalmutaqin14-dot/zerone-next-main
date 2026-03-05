import { Metadata } from "next";
import TermsConditionsClient from "../terms-conditions/TermsConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions | Zerone Global Digital Solution",
  description: "Read the Terms and Conditions for using Zerone Global's applications and services. Learn about your rights and responsibilities.",
  keywords: ["Terms and Conditions", "Privacy", "Legal", "Zerone Global", "Edunav"],
  alternates: {
    canonical: "https://www.zerone.id/terms-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Zerone Global Digital Solution",
    description: "Read the Terms and Conditions for using Zerone Global's applications and services.",
    url: "https://www.zerone.id/terms-conditions",
    type: "website",
    images: [{ url: "https://www.zerone.id/assets/meta-image-zerone.webp" }],
  },
};

export default function Page() {
  return <TermsConditionsClient />;
}