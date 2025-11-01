export default function Navbar() {
   return (
      <header className="p-6 px-12 flex justify-between">
         <div className="logo uppercase font-bold">Movies</div>
         <ul className="flex gap-10 outline-1 outline-black/50 p-2 px-6 rounded-xl">
            <li>
               <a href="#">Home</a>
            </li>
            <li>
               <a href="#">About</a>
            </li>
            <li>
               <a href="#">Contact</a>
            </li>
         </ul>
      </header>
   );
}
