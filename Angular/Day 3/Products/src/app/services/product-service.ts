import { Injectable } from '@angular/core';
import { Product } from '../_interfaces/product';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private allProducts: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>('https://dummyjson.com/products').pipe(
      map((res) => res.products),
      tap((products) => {
        this.allProducts = products;
        this.productsSubject.next(products);
      })
    );
  }

  filterProducts(searchTerm: string) {
    const filtered = this.allProducts.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.productsSubject.next(filtered);
  }

  clearFilter() {
    this.productsSubject.next(this.allProducts);
  }

  getProductById(id: number): Observable<Product | null> {
    if (this.allProducts.length > 0) {
      return of(this.allProducts.find((p) => p.id === id) ?? null);
    }
    return this.getProducts().pipe(map((products) => products.find((p) => p.id === id) ?? null));
  }
}
