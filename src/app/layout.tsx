import "~/styles/globals.css";

import { type Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { TopNavBar } from "~/components/layout/TopNavBar";
import { Footer } from "~/components/layout/Footer";

export const metadata: Metadata = {
  title: "Three Brothers Mediterranean Bar & Grill",
  description: "Experience the true taste of the Mediterranean.",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="bg-surface text-on-surface antialiased font-body-md selection:bg-primary-container selection:text-on-primary-container pt-[88px] min-h-screen flex flex-col">
        <TopNavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
