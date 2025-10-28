export default function Hero() {
   return (
      <section className="min-h-screen px-12 grid grid-cols-1 md:grid-cols-2 top-0">
         <div className="content flex flex-col gap-10 h-full justify-center">
            <h1 className="font-bold text-[64px]">
               Parent Confidently with{" "}
               <img
                  src="HeroRiley.svg"
                  alt="riley logo"
                  className="inline w-12"
               />{" "}
               Riley
            </h1>
            <p className="text-xl">
               The only parenting app you'll ever need. 24/7 expert-backed
               support, smart tracking, and advice tailored to your life.{" "}
               <strong>
                  Smarter than every baby book, and adapted to you.
               </strong>
            </p>
            <a href="#" className="primary-btn w-fit font-bold text-base">
               Get Started For Free
            </a>
         </div>
         <div className="img">
            <img src="hello.png" alt="hello" className="min-w-[500px]" />
         </div>
      </section>
   );
}
