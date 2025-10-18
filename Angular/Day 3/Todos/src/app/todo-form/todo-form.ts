import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITodoItem } from '../_models/todo-item';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  todo: ITodoItem = { title: '', completed: false };

  @Output() onAddTodo = new EventEmitter();

  addTodo() {
    if (this.todo.title.trim()) {
      this.onAddTodo.emit({ ...this.todo });
      this.todo = { title: '', completed: false };
    }
  }
}
