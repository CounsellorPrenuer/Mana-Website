import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/why-mana",
  "/who-should-join",
  "/certification",
  "/curriculum",
  "/faculty",
  "/orientation",
  "/testimonials",
  "/success-stories",
  "/fees",
  "/coming-soon",
  "/faqs",
  "/contact",
  "/downloads",
  "/bridge-programme",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://certifications.mentoria.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/orientation" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/orientation" ? 0.9 : 0.6,
  }));
}
