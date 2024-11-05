import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
// import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Head from "next/head";

// Load fonts locally
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://find-now-nextjs.vercel.app"),
  title: {
    default: "FindNow",
    template: "%s - Free Inventory & Marketplace Management System",
  },
  description:
    "FindNow provides a comprehensive marketplace and inventory management system, designed to support service providers, small businesses, and global retailers with POS integrations, real-time analytics, and streamlined operations.",
      // Additional metadata for SEO
  keywords: [
    "inventory management",
    "marketplace system",
    "POS solution",
    "business management",
    "global reach",
    "FindNow",
    "service providers",
  ],
  twitter: {
    card: "summary_large_image",
    title: "FindNow - Free Inventory & POS Solution",
    description: "A versatile platform for inventory management and marketplace solutions with POS support.",
  },
  other: {
    "google-site-verification": "ICYHTpLPY5OCwiF87Y2JBH9862VsZs9KJlj_9L7sWbM",
  },
  openGraph: {
    title: "FindNow - Integrated POS and business solutions in one platform.",
    description:
      "Explore FindNow's free, user-friendly inventory management system and marketplace platform. Flexible and built for businesses worldwide.",
    url: "https://find-now-nextjs.vercel.app",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FindNow - POS and Inventory Management",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
