import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { AOSInit } from "./_components/aos";
import { Analytics } from "@vercel/analytics/react";

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

export const metadata: Metadata = {
  title: "Colin Chambachan",
  description: "Colin's Dev Portfolio",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#ffffff",
  openGraph: {
    title: "Colin Chambachan",
    description: "Cloud, Data & AI Developer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colin Chambachan",
    description: "Cloud, Data & AI Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cmyk">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <AOSInit />
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="font-Domine antialiased min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50"
      >
        <Analytics />
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-8 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
