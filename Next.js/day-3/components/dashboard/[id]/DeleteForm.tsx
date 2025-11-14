"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function DeleteForm({ id }: { id: string }) {
   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
         method: "DELETE",
      });
      redirect("/dashboard");
   }
   return (
      <form
         className="border border-neutral-300 py-8 px-10 rounded-xl"
         onSubmit={handleSubmit}>
         <p className="mb-4 font-semibold">
            Are you sure you want to delete this product?
         </p>
         <div className="flex gap-2">
            <button
               type="submit"
               className="border border-fuchsia-600 text-fuchsia-600 rounded-lg py-2 px-4 w-fit self-end hover:text-fuchsia-900 text-sm cursor-pointer">
               Delete
            </button>
            <Link
               href="/dashboard"
               className="border border-neutral-500 text-neutral-500 rounded-lg py-2 px-4 w-fit self-end hover:text-neutral-900 text-sm">
               Cancel
            </Link>
         </div>
      </form>
   );
}
