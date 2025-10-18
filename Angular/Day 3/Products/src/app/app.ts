import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { ProductsList } from './components/products-list/products-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Products');
}
