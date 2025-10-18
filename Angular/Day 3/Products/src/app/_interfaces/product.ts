export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  stock: number;
  rating: number;
  images: string[];
  discountPercentage: number;
}
