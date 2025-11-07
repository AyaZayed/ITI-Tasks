import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function Cart() {
   const cart = useSelector((state) => state.cart);
   return (
      <section className="min-h-screen p-6 flex flex-col justify-center items-center">
         <div className="cart md:w-1/2">
            <h1 className="text-2xl uppercase font-bold mb-6">Cart</h1>
            <div className="cart-items flex flex-col gap-4">
               {cart.items.length > 0 ? (
                  <div>
                     {cart.items.map((item) => (
                        <div
                           key={item.id}
                           className="flex gap-4 border-b-2 border-neutral-200 py-4 capitalize">
                           <img src={item.image} alt={item.title} width={80} />
                           <div className="cart-item-details flex flex-col justify-between">
                              <h3 className="font-semibold text-wrap">
                                 {item.title}
                              </h3>
                              <p className="text-primary font-semibold">
                                 ${item.price}
                              </p>
                           </div>
                        </div>
                     ))}

                     <p className="mt-6 font-semibold text-lg">
                        Total: ${cart.total}
                     </p>
                  </div>
               ) : (
                  <p className="mt-6 text-xl">
                     Cart is empty{" "}
                     <Link to="/" className="text-primary underline">
                        Shop Now
                     </Link>
                  </p>
               )}
            </div>
         </div>
      </section>
   );
}
