import { Component } from '@angular/core';
import { ITodoItem } from '../_models/todo-item';
import { FormsModule } from '@angular/forms';
import { TodoForm } from '../todo-form/todo-form';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-todo-wrapper',
  imports: [FormsModule, TodoForm, TodoList],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.css',
})
export class TodoWrapper {
  todos: ITodoItem[] = [];

  addTodo(todo: ITodoItem) {
    this.todos.push(todo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
