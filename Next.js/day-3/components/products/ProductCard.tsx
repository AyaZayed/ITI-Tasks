import { IProduct } from "@/lib/types/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
   product,
}: Readonly<{ product: IProduct }>) {
   return (
      <Link href={`/products/${product.id}`} className="flex flex-col gap-4">
         <div className="border border-neutral-200 flex justify-center py-6 rounded-xl h-[250px]">
            <Image
               src={product.image}
               alt={product.title}
               width={150}
               height={150}
            />
         </div>
         <h2 className="font-serif">{product.title}</h2>
         <p className="text-fuchsia-600">${product.price}</p>
      </Link>
   );
}
