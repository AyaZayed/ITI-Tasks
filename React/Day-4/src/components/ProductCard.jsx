import { Link } from "react-router";

export default function ProductCard({ product }) {
   return (
      <Link to={`/product/${product.id}`}>
         <div className="">
            <img
               src={product.image}
               alt={product.title}
               className="outline-1 outline-neutral-200 p-10 h-[50vh] mb-4 w-full"
            />
            <div className="flex flex-col gap-2 capitalize">
               <p className="text-neutral-500/80">{product.category}</p>
               <h3 className="font-semibold">{product.title}</h3>
               <p>$ {product.price.toFixed(2)}</p>
            </div>
         </div>
      </Link>
   );
}
