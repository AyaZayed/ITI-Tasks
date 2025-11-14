import EditProduct from "@/components/dashboard/[id]/EditProduct";
import { getProductById } from "@/utils/products";

export default async function EditProductPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const values = await getProductById(id);
   return <EditProduct id={id} values={values} />;
}
