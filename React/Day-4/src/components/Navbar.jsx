import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return (
      <header
         className={`p-6 px-12 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-transparent"
         }`}>
         <div className="logo">
            <Link to="/">
               <img src="/logo.svg" alt="hanger logo" width={45} />
            </Link>
         </div>
         <div className="cart">
            <Link to="/cart">
               <ShoppingBag size={28} />
            </Link>
         </div>
      </header>
   );
}
