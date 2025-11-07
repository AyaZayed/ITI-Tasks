import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
   const cart = useSelector((state) => state.cart);

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
            <Link to="/cart" className="relative">
               <ShoppingBag size={28} />
               <span className="absolute -top-2 -right-2 p-2 py-0.5 rounded-full text-xs bg-red-500 text-white">
                  {cart.quantity}
               </span>
            </Link>
         </div>
      </header>
   );
}
