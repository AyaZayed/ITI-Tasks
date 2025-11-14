import { Document } from "mongoose";

export interface IProduct {
   id: string;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   rating?: {
      rate: number;
      count: number;
   };
}

// MongoDB document type
export interface IProductDocument extends Document {
   _id: string;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   rating?: {
      rate: number;
      count: number;
   };
   createdAt: Date;
   updatedAt: Date;
}
