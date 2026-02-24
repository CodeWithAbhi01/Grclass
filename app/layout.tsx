import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "GR Class | Maritime Classification Society",
  description:
    "GR Class is a Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS) supporting marine safety and compliance.",
  keywords: ["GR Class", "RO", "RSO", "Classification Society", "SOLAS", "MARPOL", "ISPS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
