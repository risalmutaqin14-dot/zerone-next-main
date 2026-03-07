import { MetadataRoute } from "next";
import { products } from "./shop/products";

const BASE_URL = "https://zerone.id";

const staticPages = [
  "/",
  "/about",
  "/ai-app-automation-development",
  "/client-brief-form",
  "/cms",
  "/contact",
  "/digital-marketing",
  "/digital-strategy-consulting",
  "/Edunav",
  "/faqs",
  "/graphic-design",
  "/jadwal-kuliah",
  "/latihan",
  "/logo",
  "/mari-dukung",
  "/mobile-app",
  "/payment-gateway",
  "/portfolio",
  "/rajin",
  "/return-refund-policy",
  "/shop",
  "/terms-conditions",
  "/uiux",
  "/venti",
  "/web-app",
  "/wordpress-dev",
  "/writing-aide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "daily" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/shop/produk-setup-fee/${product.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...productEntries];
}