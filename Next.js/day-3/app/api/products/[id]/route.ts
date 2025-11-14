import Product from "@/lib/models/product";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
   request: Request,
   {
      params,
   }: {
      params: Promise<{ id: string }>;
   }
) {
   try {
      await connectDB();
      const { id } = await params;
      const product = await Product.findById(id);

      if (!product) {
         return NextResponse.json(
            { message: "Product not found" },
            { status: 404 }
         );
      }
      return NextResponse.json({ product }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}

export async function PUT(
   request: Request,
   {
      params,
   }: {
      params: Promise<{ id: string }>;
   }
) {
   try {
      const body = await request.json();
      await connectDB();
      const { id } = await params;
      const product = await Product.findByIdAndUpdate(id, body, { new: true });
      return NextResponse.json({ product }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}

export async function DELETE(
   request: Request,
   {
      params,
   }: {
      params: Promise<{ id: string }>;
   }
) {
   try {
      await connectDB();
      const { id } = await params;
      await Product.findByIdAndDelete(id);
      return NextResponse.json(
         { message: "Product deleted successfully" },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}
