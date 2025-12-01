import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { AOSInit } from "./_components/aos";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Caveat } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";

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
    <html lang="en" data-theme="cmyk" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <AOSInit />
      <body
        className={`${inter.variable} ${caveat.variable} font-sans antialiased min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <ThemeProvider>
          {/* Background grid pattern */}
          <div
            className="fixed inset-0 pointer-events-none opacity-50 dark:opacity-15"
            style={{
              background: "radial-gradient(#d0d0d0 1.5px, transparent 0.9px)",
              backgroundSize: "22px 22px",
            }}
          ></div>

          {/* Optional paper texture */}
          <div
            className="pointer-events-none fixed inset-0 opacity-10 dark:opacity-5"
            style={{
              background: "url(/textures/paper.png)",
            }}
          ></div>

          <Analytics />
          <Navbar />
          <main className="flex-grow flex items-center justify-center py-8 w-full relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
