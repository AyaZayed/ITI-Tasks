import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import PrimaryButton from "./PrimaryButton";

export default function Footer() {
   const phoneNum = "+91 1234567890";
   const email = "demo@example.com";

   const imgs = [f1, f2, f3, f4, f5, f6];

   const socials = [
      { id: 1, icon: faFacebook, link: "#" },
      { id: 2, icon: faTwitter, link: "#" },
      { id: 3, icon: faLinkedin, link: "#" },
      { id: 4, icon: faInstagram, link: "#" },
   ];

   return (
      <footer className="bg-dark-blue text-white p-10 py-16">
         <div className="contact grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 items-center">
               <FontAwesomeIcon icon={faPhone} size="lg" />
               <p>
                  Call: <span>{phoneNum}</span>
               </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
               <FontAwesomeIcon icon={faEnvelope} size="lg" />
               <p>
                  Email: <span>{email}</span>
               </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
               <FontAwesomeIcon icon={faLocationDot} size="lg" />
               <p>Location</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-10 mt-10">
            <div className="links w-full">
               <h2 className="uppercase mb-6 text-xl">quick links</h2>
               <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col ga-4">
                     <a href="#">Home</a>
                     <a href="#">Furniture</a>
                     <a href="#">Contact Us</a>
                  </div>
                  <div className="flex flex-col ga-4">
                     <a href="#">About</a>
                     <a href="#">Blog</a>
                  </div>
               </div>
            </div>

            <div className="feeds">
               <h3 className="uppercase text-xl mb-5">Intagram Feeds</h3>
               <div className=" grid grid-cols-3 gap-2">
                  {imgs.map((img) => (
                     <img
                        src={img}
                        alt="img"
                        key={img}
                        className="w-[100px] bg-white h-[100px] p-4"
                     />
                  ))}
               </div>
            </div>

            <div className="newsletter flex flex-col gap-4">
               <h4 className="text-xl uppercase mb-6">
                  sign up to our newsletter
               </h4>
               <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-3 py-2 bg-white outline-0 focus:outline-1 focus:outline-blue text-dark-blue"
               />
               <PrimaryButton
                  color="blue"
                  className="capitalize bg-blue hover:text-blue">
                  Subscribe
               </PrimaryButton>
               <div className="icons flex gap-3 mt-4">
                  {socials.map((social) => (
                     <a
                        href={social.link}
                        key={social.id}
                        className="text-blue outline-1 outline-blue p-2 rounded-sm hover:text-white hover:bg-blue transition-all duration-300">
                        <FontAwesomeIcon icon={social.icon} size="lg" />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
}
