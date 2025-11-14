import type { Metadata } from "next";
import Link from "next/link";
import "./dashboard.css";

export const metadata: Metadata = {
   title: "E-Commerce Dashboard",
   description: "Dashboard",
};

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <header className="border-b border-neutral-300 px-10 py-4 flex justify-center items-center">
            <Link href="/" className="text-fuchsia-600 font-serif text-2xl">
               Commercy
            </Link>
         </header>
         <main className="py-10 min-h-screen">{children}</main>
      </>
   );
}
