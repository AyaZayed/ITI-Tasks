import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

export default function Products() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [errorMsg, setErrorMsg] = useState("");

   async function getData() {
      try {
         const res = await fetch("https://fakestoreapi.com/products");
         const data = await res.json();
         setProducts(data);
         setLoading(false);
      } catch (err) {
         setErrorMsg(err.message);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getData();
   }, []);

   if (loading) return <Loader />;
   if (errorMsg)
      return (
         <section className="h-screen text-center flex items-center justify-center">
            <p className="text-xl">{errorMsg}</p>
         </section>
      );

   return (
      <section
         id="products"
         className="p-12 py-20 flex flex-col gap-12 items-center">
         <h2 className="text-4xl font-bold">Explore Our Products</h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </section>
   );
}
