import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Auth",
   description: "Auth pages",
};

export default function AuthLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="flex flex-col h-screen justify-center items-center capitalize">
         {children}
         <Link href="/" className="text-red-400 underline">
            Home
         </Link>
      </div>
   );
}
