import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../_interfaces/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, CurrencyPipe, FontAwesomeModule],
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product: Product | null = null;

  faStar = faStar;
  faStarSolid = faStarSolid;

  getStarsArr(count: number = 0) {
    return Array.from({ length: count }, (_, index) => index + 1);
  }
}
