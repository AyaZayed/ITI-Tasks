import { IProduct } from "@/lib/types/product";
import { getAllProducts } from "@/utils/products";
import Link from "next/link";

export default async function DashboardPage() {
   const products = await getAllProducts();

   const tableHeaders = ["Title", "Category", "Price", "Actions"];

   return (
      <section className="flex flex-col gap-6">
         <h1 className="font-serif text-2xl font-bold">Dashboard</h1>
         <Link
            href={"/dashboard/new"}
            className="border border-fuchsia-600 text-fuchsia-600 rounded-lg py-2 px-4 w-fit self-end hover:text-fuchsia-900">
            + New Product
         </Link>
         <table className="products border-collapse">
            <thead className="border-b border-neutral-300">
               <tr>
                  {tableHeaders.map((header) => (
                     <th
                        key={header}
                        className="py-2 text-start last-of-type:text-end">
                        {header}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {products.map((product: IProduct) => (
                  <tr
                     key={product.id}
                     className="py-2 border-b border-neutral-300">
                     <td className="text-wrap w-1/2">{product.title}</td>
                     <td>{product.category}</td>
                     <td>${product.price}</td>
                     <td className="flex gap-2 justify-end">
                        <Link
                           href={`/dashboard/${product.id}`}
                           className="text-emerald-600 outline outline-emerald-600 py-0.5 px-2  hover:text-emerald-800 rounded-md">
                           Edit
                        </Link>
                        <Link
                           href={`/dashboard/${product.id}/delete`}
                           className="text-red-400 outline outline-red-400 py-0.5 px-2 hover:text-red-600 
                           rounded-md">
                           Delete
                        </Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   );
}
