import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../_interfaces/product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard, CommonModule, FormsModule, RouterLink],
  standalone: true,
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {
  searchTerm: string = '';

  productService = inject(ProductService);
  products$ = this.productService.products$;

  ngOnInit() {
    this.productService.getProducts().subscribe();
  }

  onSearch() {
    this.productService.filterProducts(this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.productService.clearFilter();
  }
}
