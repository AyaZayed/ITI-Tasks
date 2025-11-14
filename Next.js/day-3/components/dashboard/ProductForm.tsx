import { formValues } from "@/lib/types/formValues";
import { productSchema } from "@/lib/validation/product";
import { useState } from "react";

export default function ProductForm({
   onSubmit,
   values,
}: {
   onSubmit: (data: formValues) => void;
   values?: formValues;
}) {
   const [errors, setErrors] = useState<Record<string, string>>({});

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);

      const data: formValues = {
         title: form.get("title") as string,
         category: form.get("category") as string,
         price: Number(form.get("price")),
         description: form.get("description") as string,
         image: form.get("image") as string,
      };

      const result = productSchema.safeParse(data);

      if (!result.success) {
         const fieldErrors: Record<string, string> = {};

         result.error.issues.forEach((issue) => {
            const key = issue.path[0];
            if (typeof key === "string") {
               fieldErrors[key] = issue.message;
            }
         });

         setErrors(fieldErrors);
         return;
      }

      onSubmit(result.data);
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="product-form flex flex-col gap-3 md:w-1/2">
         <label htmlFor="title">Title</label>
         <input
            name="title"
            id="title"
            defaultValue={values?.title}
            placeholder="title"
         />
         {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
         )}

         <label htmlFor="category">Category</label>
         <input
            name="category"
            id="category"
            defaultValue={values?.category}
            placeholder="category"
         />
         {errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
         )}

         <label htmlFor="price">Price</label>
         <input
            type="number"
            name="price"
            id="price"
            defaultValue={values?.price}
            placeholder="price"
         />
         {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
         )}

         <label htmlFor="description">Description</label>
         <textarea
            name="description"
            id="description"
            rows={3}
            defaultValue={values?.description}
            placeholder="description"
         />
         {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
         )}

         <label htmlFor="image">Image URL</label>
         <input
            name="image"
            id="image"
            defaultValue={values?.image}
            placeholder="Image URL"
         />
         {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
         )}

         <button
            type="submit"
            className="text-fuchsia-600 border border-fuchsia-600 rounded-lg py-2 px-4 mt-6 w-fit hover:text-fuchsia-900 cursor-pointer">
            Save
         </button>
      </form>
   );
}
