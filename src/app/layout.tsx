import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Header from "./layouts/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tech Suits",
  description: "The best shopping platform you will ever see",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex min-h-screen w-full flex-col bg-gray-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
