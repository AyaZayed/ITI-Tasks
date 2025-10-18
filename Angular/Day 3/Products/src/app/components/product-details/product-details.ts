import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../_interfaces/product';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiscountPipe } from '../../_pipes/discount-pipe';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-details',
  imports: [FontAwesomeModule, DiscountPipe, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  productId!: string;
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private prodServ: ProductService,
    private cartServ: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.prodServ.getProductById(id).subscribe((product) => {
        this.product = product;
      });
    });
  }

  addToCart() {
    if (this.product) {
      this.cartServ.addToCart(this.product.id);
    }
  }

  faStar = faStar;
  faStarSolid = faStarSolid;

  getStarsArr(count: number = 0) {
    return Array.from({ length: count }, (_, index) => index + 1);
  }
}
