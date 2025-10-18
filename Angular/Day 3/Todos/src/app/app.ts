import { Component, signal } from '@angular/core';
import { TodoWrapper } from './todo-wrapper/todo-wrapper';

@Component({
  selector: 'app-root',
  imports: [TodoWrapper],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Todos');
}
