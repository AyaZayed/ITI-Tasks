import { Component, OnInit } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../_interfaces/user';
import { CommonModule } from '@angular/common';
import { SearchArrayPipe } from '../pipes/search-array-pipe';

@Component({
  selector: 'app-users-list',
  imports: [
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CardModule,
    ImageModule,
    CommonModule,
    SearchArrayPipe,
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList implements OnInit {
  users: IUser[] = [];
  searchEmail = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<IUser[]>('assets/users.json').subscribe((data) => {
      this.users = data;
    });
  }
}
