import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersList } from './users-list/users-list';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [UsersList],
})
export class App {
  protected readonly title = signal('Users');
}
