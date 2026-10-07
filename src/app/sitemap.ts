import type { MetadataRoute } from "next";
import { createClient } from "@/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient();

  const { data: proyek } = await supabase
    .from("proyek")
    .select("id");

  const baseUrl = "https://www.vidic-virdiansyah.my.id";

  const projectUrls =
    proyek?.map((item) => ({
      url: `${baseUrl}/proyek/${item.id}`,
      lastModified: new Date(),
    })) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proyek`,
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}