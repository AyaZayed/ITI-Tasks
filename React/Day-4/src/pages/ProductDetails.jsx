import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";

export default function ProductDetails() {
   const params = useParams();
   const { id } = params;

   const [product, setProduct] = useState({});
   const [loading, setLoading] = useState(true);
   const [errorMsg, setErrorMsg] = useState("");

   useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
         .then((res) => res.json())
         .then((data) => {
            setProduct(data);
            setLoading(false);
         })
         .catch((err) => setErrorMsg(err.message));
   }, [id]);

   if (loading) return <Loader />;
   if (errorMsg) return <p>{errorMsg}</p>;

   return (
      <section className="min-h-screen flex flex-col items-center justify-center p-12 py-30">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="img p-12 outline-1 outline-neutral-200 max-h-[70vh]">
               <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full"
               />
            </div>

            <div className="details capitalize flex flex-col gap-4">
               <h1 className="text-3xl font-bold">{product.title}</h1>
               <p className="text-primary font-bold text-xl">
                  ${product.price}
               </p>
               <p>{product.description}</p>
               <button
                  className="border-0 bg-primary text-white p-2 px-6 uppercase w-fit mt-4 
               outline-[1.5px] outline-primary hover:bg-white hover:text-primary font-semibold transition-colors duration-300">
                  Add to Cart
               </button>
            </div>
         </div>
      </section>
   );
}
