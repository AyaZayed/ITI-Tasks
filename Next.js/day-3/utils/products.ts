import { IProduct } from "@/lib/types/product";

export async function getAllProducts() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
   const { products }: { products: IProduct[] } = await res.json();
   return products;
}

export async function getProductById(id: string) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);

   const { product }: { product: IProduct } = await res.json();
   return product;
}
