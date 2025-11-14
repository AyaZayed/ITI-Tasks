"use client";
import ProductForm from "@/components/dashboard/ProductForm";
import { formValues } from "@/lib/types/formValues";
import { redirect } from "next/navigation";

export default function NewProduct() {
   async function createProduct(data: formValues) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
         method: "POST",
         body: JSON.stringify(data),
         headers: { "Content-Type": "application/json" },
      });
      redirect("/dashboard");
   }
   return (
      <section className="flex flex-col justify-center items-center gap-4">
         <h1 className="font-serif text-2xl font-semibold">New Product</h1>
         <ProductForm onSubmit={createProduct} />
      </section>
   );
}
