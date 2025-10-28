export default function Navbar() {
   return (
      <header className="flex p-5 px-12 justify-between items-center font-bold text-lg sticky h-[100px] tracking-wide">
         <a href="#" className="logo">
            <img src="logo.svg" alt="riley logo" />
         </a>
         <ul className=" gap-5 text-purple hidden md:flex">
            <li>
               <a href="#">Features and Pricing</a>
            </li>
            <li>
               <a href="#">Blog</a>
            </li>
            <li>
               <a href="#">What's New?</a>
            </li>
         </ul>
         <a className="primary-btn">Get Started For Free</a>
      </header>
   );
}
