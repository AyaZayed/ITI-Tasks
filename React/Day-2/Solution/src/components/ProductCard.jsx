export default function ProductCard({ product }) {
   return (
      <div className="flex flex-col bg-light-blue p-6 py-10 gap-4 w-full">
         <div className="p-4 flex justify-center">
            <img src={product.img} alt={product.name} className="h-[30vh]" />
         </div>
         <h3 className="uppercase">{product.name}</h3>
         <div className="flex justify-between items-center">
            <p>
               <span className="text-blue">$ </span>
               {product.price.toFixed(2)}
            </p>
            <a href="#" className="text-blue uppercase">
               buy now
            </a>
         </div>
      </div>
   );
}
