import { z } from "zod";

export const productSchema = z.object({
   title: z.string().min(3, "Title must be at least 3 characters"),
   category: z.string().min(2, "Category is required"),
   price: z.coerce.number().min(0.1, "Price must be greater than 0"),
   description: z
      .string()
      .min(10, "Description must be at least 10 characters"),
   image: z.url("Image must be a valid URL"),
});

export type ProductFormValues = z.infer<typeof productSchema>;
