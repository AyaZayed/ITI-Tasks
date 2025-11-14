import ProductCard from "@/components/products/ProductCard";
import { IProduct } from "@/lib/types/product";
import { getAllProducts } from "@/utils/products";

export default async function Products() {
   const products = await getAllProducts();

   return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </section>
   );
}
