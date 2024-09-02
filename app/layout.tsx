import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/sections/footer";
import Nav from "@/sections/nav";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment",
  description: "Task - Next x Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
