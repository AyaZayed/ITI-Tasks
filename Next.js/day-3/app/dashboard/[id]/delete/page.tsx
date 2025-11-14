import DeleteForm from "@/components/dashboard/[id]/DeleteForm";

export default async function DeleteProduct({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;

   return (
      <section className="flex flex-col justify-center items-center min-h-[70vh]">
         <DeleteForm id={id} />
      </section>
   );
}
