import Product from "@/lib/models/product";
import { connectDB } from "@/lib/mongodb";
import { IProductDocument } from "@/lib/types/product";
import { NextResponse } from "next/server";

export async function GET() {
   try {
      await connectDB();

      const rawProducts = await Product.find({}).lean<IProductDocument[]>();
      const formatted = rawProducts.map((p) => ({
         ...p,
         id: p._id.toString(),
      }));

      return NextResponse.json({ products: formatted });
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}

export async function POST(req: Request) {
   try {
      const body = await req.json();
      const newProduct = new Product(body);
      await newProduct.save();
      return NextResponse.json(
         { message: "Product added successfully" },
         { status: 200 }
      );
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error }, { status: 500 });
   }
}
