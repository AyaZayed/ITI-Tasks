import mongoose from "mongoose";
import { IProductDocument } from "../types/product";

const productSchema = new mongoose.Schema<IProductDocument>(
   {
      title: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      category: { type: String, required: true },
      image: { type: String, required: true },
      rating: { rate: Number, count: Number },
   },
   { timestamps: true }
);

const Product =
   mongoose.models.Product ||
   mongoose.model<IProductDocument>("Product", productSchema);

export default Product;
