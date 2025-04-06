import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Investopro",
  description: "financially driving digitalization",
};

const links = [
  {
    name: "Home",
    pathname: "/",
  },
  {
    name: "About us",
    pathname: "/about-us",
  },
  {
    name: "Packages",
    pathname: "/packages",
  },
  {
    name: "Dashboard",
    pathname: "/dashboard",
  },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full! flex justify-center">
          <div className="container w-full h-30 p-4 flex flex-row justify-between items-center font-[family-name:var(--font-geist-sans)] text-lg">
            <div>Investpro</div>
            <div className="flex flex-row gap-6 items-center">
              {links.map((link, index) => (
                <Link key={link.name + "-" + index} href={link.pathname}>
                  {link.name}
                </Link>
              ))}

              <Button>Log in</Button>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
