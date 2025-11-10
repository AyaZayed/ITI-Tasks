import ProductDetails from "@/components/products/[id]/ProductDetails";
import Product from "@/types/product";

async function getAllProducts() {
   const res = await fetch("https://fakestoreapi.com/products");
   const products: Product[] = await res.json();
   return products;
}

async function getProductById(id: string): Promise<Product> {
   if (!id) throw new Error("Product ID is missing");

   const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 60 },
   });

   const data = await res.json();
   return data;
}

export async function generateStaticParams() {
   const products = await getAllProducts();
   const ids = products.map((product) => ({ id: product.id.toString() }));

   return ids;
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const product = await getProductById(id);
   return {
      title: product.title,
      description: product.description,
   };
}

export default async function DetailsPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   console.log(id);

   const product = await getProductById(id);
   return <ProductDetails product={product} />;
}
