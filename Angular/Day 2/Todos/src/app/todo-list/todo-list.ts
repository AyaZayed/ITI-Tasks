import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITodoItem } from '../_models/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todos: ITodoItem[] = [];
  todo = {
    title: '',
    completed: false,
  };

  addTodo() {
    if (this.todo.title.trim()) {
      this.todos.push({
        title: this.todo.title,
        completed: false,
      });
      this.todo.title = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
