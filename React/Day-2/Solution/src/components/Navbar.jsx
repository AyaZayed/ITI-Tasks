import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
   return (
      <header className="flex p-6 px-10 justify-between items-center uppercase font-sans tracking-wide">
         <a href="#" className="font-bold">
            NEWHOME
         </a>
         <ul className="md:flex hidden gap-10 ">
            <li>
               <a href="#">Home</a>
            </li>
            <li>
               <a href="#">About</a>
            </li>
            <li>
               <a href="#">Furniture</a>
            </li>
            <li>
               <a href="#">Blog</a>
            </li>
            <li>
               <a href="#">Contact us</a>
            </li>
         </ul>
         <div className="account">
            <a href="#">
               login <FontAwesomeIcon icon={faUser} />
            </a>
            <a href="#" className="ms-3">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
         </div>
      </header>
   );
}
