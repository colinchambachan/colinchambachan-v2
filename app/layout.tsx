import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { AOSInit } from "./_components/aos";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

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
        className={`${inter.variable} ${caveat.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{
          background: "radial-gradient(#d0d0d0 1px, transparent 0.8px)",
          backgroundSize: "22px 22px",
          fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Optional paper texture */}
        <div
          style={{
            pointerEvents: "none",
            position: "fixed",
            inset: 0,
            background: "url(/textures/paper.png)",
            opacity: 0.1,
          }}
        ></div>
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
