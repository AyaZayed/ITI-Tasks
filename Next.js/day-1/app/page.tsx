import Image from "next/image";

export default function Home() {
   return (
      <section className="z-0 relative">
         <div className="img">
            <Image
               src="/hero.avif"
               alt="woman carrying shopping bags"
               width={500}
               height={500}
               className="w-full h-full"
            />
         </div>
      </section>
   );
}
