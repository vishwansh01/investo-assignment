import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
// import Link from "next/link";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Choose the weights you need
  variable: "--font-manrope", // Optional: CSS variable
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Investo Assignment",
  description: "Investo Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body className={`${manrope.variable} antialiased ${manrope.className}`}>
        {children}
      </body>
    </html>
  );
}
