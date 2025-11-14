"use client";

import { redirect } from "next/navigation";
import ProductForm from "../ProductForm";
import { formValues } from "@/lib/types/formValues";

export default function EditProduct({
   id,
   values,
}: {
   id: string;
   values?: formValues;
}) {
   async function handleSubmit(data: formValues) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
         method: "PUT",
         body: JSON.stringify(data),
         headers: { "Content-Type": "application/json" },
      });
      redirect("/dashboard");
   }

   return (
      <section className="flex flex-col justify-center items-center gap-4">
         <h1 className="font-serif text-2xl font-semibold">Edit Product</h1>
         <ProductForm onSubmit={handleSubmit} values={values} />
      </section>
   );
}
