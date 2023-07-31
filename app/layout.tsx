import "./globals.css";
import type { Metadata } from "next";
import { Playfair, Open_Sans } from "next/font/google";
import Navbar from "./components/Navbar";

const playfair = Playfair({ subsets: ["latin"], variable: "--font-play-fair" });

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${playfair.variable}`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
