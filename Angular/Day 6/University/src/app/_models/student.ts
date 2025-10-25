import { Department } from './department';

export class Student {
  _id: number;
  name: string;
  department: number;
  image?: string;

  constructor(_id: number = 0, name: string = '', department: number, image?: string) {
    this._id = _id;
    this.name = name;
    this.department = department;
    this.image = image;
  }
}
