import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITodoItem } from '../_models/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() todos: ITodoItem[] = [];

  @Output() ontoggleTodo = new EventEmitter<number>();
  @Output() ondeleteTodo = new EventEmitter<number>();

  toggleTodo(index: number) {
    this.ontoggleTodo.emit(index);
  }

  deleteTodo(index: number) {
    this.ondeleteTodo.emit(index);
  }
}
