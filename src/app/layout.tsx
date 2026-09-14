import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GigaBase — Enterprise-Scale AI Infrastructure in 9 Months",
  description: "GigaBase is Giga Energy's pre-engineered, vertically integrated AI data center system designed to deploy 9MW modular compute clusters in 9 months.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#04070f] text-white antialiased selection:bg-[#3daeff]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
