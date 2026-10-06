import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nextjs-v2-a7xsv5dn5-mvidicvirdiansyah-9115s-projects.vercel.app/sitemap.xml",
  };
}