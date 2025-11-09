import type { Metadata } from "next";
import { Poppins, Young_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppinsSans = Poppins({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   variable: "--font-poppins-sans",
});

const youngSerif = Young_Serif({
   subsets: ["latin"],
   weight: ["400"],
   variable: "--font-young-serif",
});

export const metadata: Metadata = {
   title: "E-Commerce",
   description: "Practice project",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${poppinsSans.variable} ${youngSerif.variable} bg-background text-foreground font-sans antialiased  px-6 md:px-8`}>
            <Navbar />
            <main className="py-10">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
