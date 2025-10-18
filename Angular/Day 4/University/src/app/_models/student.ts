export class Student {
  id: number;
  name: string;
  email: string;
  age: number;

  constructor(id: number = 0, name: string = '', email: string = '', age: number = 20) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }
}
