import ProductCard from "@/components/products/ProductCard";
import React from "react";
import Product from "@/types/product";

export default async function Products() {
   const res = await fetch("https://fakestoreapi.com/products");
   const products: Product[] = await res.json();

   return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {products.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </section>
   );
}
