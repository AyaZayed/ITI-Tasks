import { inject, Injectable } from '@angular/core';
import { ProductService } from './product-service';
import { Product } from '../_interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  prodService = inject(ProductService);

  getCart() {
    return this.items;
  }

  addToCart(id: number) {
    this.prodService.getProductById(id).subscribe((product) => {
      if (product) {
        this.items.push(product);
      }
    });
  }
}
