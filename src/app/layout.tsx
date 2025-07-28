import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "SDGs Class",
  description:
    " This website will be your guide for being Aware and Responsible for one of the main Challenges in the world today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` `}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
