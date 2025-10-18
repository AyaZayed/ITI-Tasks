import { Routes } from '@angular/router';
import { ProductsList } from './components/products-list/products-list';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { NotFound } from './components/not-found/not-found';
import { Cart } from './components/cart/cart';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
  { path: '', component: ProductsList },
  { path: 'products', component: ProductsList },
  { path: 'products/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', component: NotFound },
];
