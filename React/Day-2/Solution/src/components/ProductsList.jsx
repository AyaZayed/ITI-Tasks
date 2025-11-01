import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import ProductCard from "./ProductCard";

export default function ProductsList() {
   const products = [
      { id: 1, name: "brown chair design", price: 100, img: f1 },
      { id: 2, name: "double bed design", price: 200, img: f2 },
      { id: 3, name: "house chair design", price: 300, img: f3 },
      { id: 4, name: "brown table design", price: 400, img: f4 },
      { id: 5, name: "blue chair design", price: 500, img: f5 },
      { id: 6, name: "brown table design", price: 600, img: f6 },
   ];
   return (
      <section className="p-10 flex flex-col items-center gap-6">
         <h2 className="text-2xl font-bold uppercase">our furniture</h2>
         <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            expedita sint odio consequuntur animi corporis.
         </p>
         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </section>
   );
}
