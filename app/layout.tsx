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
      </head>
      <AOSInit />
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="font-Domine antialiased min-h-screen flex flex-col"
      >
        <Analytics />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
