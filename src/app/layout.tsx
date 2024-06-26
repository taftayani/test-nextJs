import NavbarKitaBisa from "@/components/Navigation/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kitabisa Frontend Test",
  description: "Aplikasi hanya sebatas untuk testing field terkait frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid gap-10">
          <NavbarKitaBisa />
          <div className="px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
