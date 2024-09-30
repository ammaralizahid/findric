import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import "./globals.css";

// Load fonts locally
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "FindNow - Complete POS and Inventory Management System",
  description: "FindNow is a powerful marketplace and inventory management system designed for businesses worldwide.",
  other: { "google-site-verification": "pdDMsTpAk_4Cn2CznwocY6H3Sk2K9bGwNphPSt8_NHs" },
  openGraph: {
    title: "FindNow - Complete POS Solution",
    description: "Complete POS and inventory management system, flexible and tailored for global customers.",
    url: "https://find-now-nextjs.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
