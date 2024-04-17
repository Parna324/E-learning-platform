import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Smartcraze by Suraj Vishwakarma: Full Stack Developer and Code Enthusiast",
  description: "Welcome to Smartcraze by Suraj Vishwakarma! Explore the world of a passionate full stack developer, where code meets creativity. Get insights into development projects, tutorials, and technology trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="shortcut icon" href="smartcraze.png" />
      </Head>
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
