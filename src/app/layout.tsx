import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.vidic-virdiansyah.my.id"
  ),

  title: {
    default: "Muhammad Vidic Virdiansyah - Portfolio",
    template: "%s | Muhammad Vidic Virdiansyah",
  },

  description:
    "Portfolio Muhammad Vidic Virdiansyah sebagai Web Developer.",

  openGraph: {
    title: "Muhammad Vidic Virdiansyah - Portfolio",
    description:
      "Portfolio Muhammad Vidic Virdiansyah sebagai Web Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}