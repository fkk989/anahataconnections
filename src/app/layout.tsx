import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "./components/Navbar";
import { MobileNavbar } from "./components/MobileNavbar";
import Footer from "./components/Footer";

// const na = eva-maya ;
const inter = Inter({ subsets: ["latin"] });
const eva = localfont({
  src: [
    {
      path: "../../public/fonts/eva-mayasari.woff",
      weight: "700",
    },
  ],

  variable: "--font-eva", // Use '--font-eva' directly
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${eva.variable}`}>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <MobileNavbar />
        {children}
        <div className=" bg-no-repeat bg-cover">
          <Footer />
        </div>
      </body>
    </html>
  );
}
