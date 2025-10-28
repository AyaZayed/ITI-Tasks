import React from "react";

export default function Footer() {
   return (
      <footer>
         <section className="footer-top min-h-screen bg-light-beige bg-[url('background-clouds.svg')] flex flex-col items-center justify-center gap-20 text-center p-12">
            <h2 className="text-[60px] leading-[78px] md:w-[70%] text-dark-text">
               We are raising a generation of confident parents.
            </h2>
            <a href="#" className="primary-btn">
               Get support that gets you
            </a>
            <img src="/mascots.svg" alt="mascots" />
         </section>
      </footer>
   );
}
