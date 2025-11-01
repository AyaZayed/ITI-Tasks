export default function Section({
   img,
   alt,
   title,
   desc,
   children,
   className = "",
}) {
   return (
      <section
         className={`min-h-[90vh] px-10 flex flex-col justify-center items-center ${className}`}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="content flex flex-col gap-8">
               <h1 className="uppercase font-bold text-3xl">{title}</h1>
               <p className="w-full">{desc}</p>
               <div className="buttons flex gap-3 text-nowrap text-white">
                  {children}
               </div>
            </div>
            <div className="img">
               <img src={img} alt={alt} className="w-full" />
            </div>
         </div>
      </section>
   );
}
