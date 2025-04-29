import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import { Montserrat } from "next/font/google";

// ✅ Use Next.js font optimization
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// ✅ SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://find-now-nextjs.vercel.app"),
  title: {
    default: "Findric",
    template: "%s - Free Inventory & Marketplace Management System",
  },
  description:
    "Findric provides a comprehensive marketplace and inventory management system, designed to support service providers, small businesses, and global retailers with POS integrations, real-time analytics, and streamlined operations.",
  keywords: [
    "inventory management",
    "marketplace system",
    "POS solution",
    "business management",
    "global reach",
    "Findric",
    "service providers",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Findric - Free Inventory & POS Solution",
    description:
      "A versatile platform for inventory management and marketplace solutions with POS support.",
  },
  other: {
    "google-site-verification": "ICYHTpLPY5OCwiF87Y2JBH9862VsZs9KJlj_9L7sWbM",
  },
  openGraph: {
    title: "Findric - Integrated POS and business solutions in one platform.",
    description:
      "Explore Findric's free, user-friendly inventory management system and marketplace platform. Flexible and built for businesses worldwide.",
    url: "https://find-now-nextjs.vercel.app",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Findric - POS and Inventory Management",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased min-h-screen flex flex-col`}>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}