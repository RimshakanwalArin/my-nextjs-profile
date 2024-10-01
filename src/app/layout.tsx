import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import image from '../../image/image.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <header>
        <div className="img1">
          
        <Image src={image} alt="logo" width={100}  height={100} />
        </div>
        <div className="link">
          <a href="http://localhost:3000">Home</a>
          <a href="http://localhost:3000/about">About us</a>
          <a href="http://localhost:3000/contect">Contect us</a>
        </div>
       </header> 
      </body>
    </html>
  );
}
