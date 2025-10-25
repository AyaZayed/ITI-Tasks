export class Department {
  _id: number;
  name: string;
  location: string;

  constructor(_id: number = 0, name: string = '', location: '') {
    this._id = _id;
    this.name = name;
    this.location = location;
  }
}
