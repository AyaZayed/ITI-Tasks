import Link from "next/link";
import React from "react";

export default function Navbar() {
   const links1 = [
      {
         title: "Home",
         href: "/",
      },
      {
         title: "Products",
         href: "/products",
      },
      {
         title: "Users",
         href: "/users",
      },
   ];

   const links2 = [
      {
         title: "Login",
         href: "/login",
      },
      {
         title: "Register",
         href: "/register",
      },
   ];
   return (
      <header className="p-6 bg-white border-b border-neutral-300 flex flex-wrap gap-2 items-center justify-between z-100">
         <nav className="flex gap-6 order-2 lg:order-0">
            {links1.map((link) => (
               <Link
                  key={link.title}
                  href={link.href}
                  className="capitalize hover:text-fuchsia-600 transition-colors duration-300">
                  {link.title}
               </Link>
            ))}
         </nav>
         <div className="logo order-1 lg:order-0">
            <Link href="/" className="text-fuchsia-600 font-serif text-xl">
               Commercy
            </Link>
         </div>
         <nav className="flex gap-6 items-center order-2 lg:order-0">
            {links2.map((link) => (
               <Link
                  key={link.title}
                  href={link.href}
                  className="capitalize first:bg-fuchsia-600 first:text-white first:px-4 first:py-1 first:rounded-lg first:hover:bg-fuchsia-700 hover:not-first:text-fuchsia-600 transition-colors duration-300">
                  {link.title}
               </Link>
            ))}
         </nav>
      </header>
   );
}
