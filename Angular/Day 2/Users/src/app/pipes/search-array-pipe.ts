import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../_interfaces/user';

@Pipe({
  name: 'searchArray',
})
export class SearchArrayPipe implements PipeTransform {
  transform(users: IUser[], searchEmail: string): IUser[] {
    if (!searchEmail || !searchEmail.trim()) return users;
    return users.filter((user) =>
      user.email.toLowerCase().includes(searchEmail.trim().toLowerCase())
    );
  }
}
