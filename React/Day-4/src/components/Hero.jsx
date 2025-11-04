export default function Hero() {
   return (
      <section
         className={`hero min-h-screen flex flex-col justify-center items-center`}>
         <div className="content text-neutral-800 uppercase flex flex-col gap-4 tracking-wider p-6 md:p-12">
            <p className="font-bold trend">Hot Trend</p>
            <h1 className="text-3xl md:text-7xl font-bold tracking-widest text-wrap">
               Fresh Fashion Finds
            </h1>
            <h2 className="text-3xl text-wrap md:text-7xl font-light">
               new collection
            </h2>
            <a
               href="#products"
               className="border-b-2 w-fit border-neutral-800 font-bold">
               discover more
            </a>
         </div>
      </section>
   );
}
