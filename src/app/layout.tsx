import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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

// SEO Metadata - Handled automatically by Next.js in Next 13+ with the app directory
export const metadata: Metadata = {
  title: "FindNow - Complete POS and Inventory Management System",
  description: "FindNow is a powerful marketplace and inventory management system designed for businesses worldwide.",
  openGraph: {
    title: "FindNow - Complete POS Solution",
    description: "Complete POS and inventory management system, flexible and tailored for global customers.",
    url: "https://findnow-app.com",
    // Remove the type property if it causes errors
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <meta
          name="google-site-verification"
          content="ICYHTpLPY5OCwiF87Y2JBH9862VsZs9KJlj_9L7sWbM"
        />
        <meta property="og:title" content={String(metadata.openGraph?.title ?? "Default Title")} />
        <meta
          property="og:description"
          content={String(metadata.openGraph?.description ?? "Default Description")}
        />
        <meta property="og:url" content={String(metadata.openGraph?.url ?? "https://default-url.com")} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={String(metadata.openGraph?.url ?? "https://default-url.com")} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
