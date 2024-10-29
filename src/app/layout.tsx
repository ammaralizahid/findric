import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
// import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer/Footer";

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
    template: "%s - Complete POS and Inventory Management System"
  },
  description: "FindNow is a powerful marketplace and inventory management system designed for businesses worldwide.",
  twitter: {
    card: "summary_large_image",
  },
  other: { "google-site-verification": "ICYHTpLPY5OCwiF87Y2JBH9862VsZs9KJlj_9L7sWbM" },
  openGraph: {
    title: "FindNow - Complete POS Solution",
    description: "Complete POS and inventory management system, flexible and tailored for global customers.",
    url: "https://find-now-nextjs.vercel.app",
    images: [
      {
        url: "/opengraph-image.png", // OpenGraph image
        width: 1200,
        height: 630,
        alt: "FindNow POS and Inventory Management"
      }
    ]
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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
