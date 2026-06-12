import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HammetLabs — Building Safe AI for Africa",
  description:
    "HammetLabs is an African AI research and product company building safe, responsible AI products for Africa.",
  openGraph: {
    title: "HammetLabs — Building Safe AI for Africa",
    description:
      "HammetLabs is an African AI research and product company building safe, responsible AI products for Africa.",
    url: "https://hammetlabs.com",
    siteName: "HammetLabs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}