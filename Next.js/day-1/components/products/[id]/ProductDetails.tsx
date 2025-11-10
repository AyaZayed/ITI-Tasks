import Product from "@/types/product";
import Image from "next/image";

export default function ProductDetails({
   product,
}: Readonly<{ product: Product }>) {
   return (
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[70vh]">
         <div className="border border-neutral-200 flex justify-center py-6 rounded-xl">
            <Image
               src={product.image}
               alt={product.title}
               width={300}
               height={300}
            />
         </div>
         <div className="flex flex-col gap-4 capitalize justify-center">
            <h2 className="font-serif text-2xl font-bold">{product.title}</h2>
            <p className="text-fuchsia-600 text-xl font-semibold">
               ${product.price}
            </p>
            <p className="text-neutral-400 text-justify">
               {product.description}
            </p>
            <h3 className="font-bold font-serif">{product.category}</h3>
            <button className="text-fuchsia-600 border border-fuchsia-600 w-fit py-2 px-4 rounded-lg hover:bg-fuchsia-600 hover:text-white transition-colors duration-300 cursor-pointer capitalize mt-4">
               Add to cart
            </button>
         </div>
      </section>
   );
}
