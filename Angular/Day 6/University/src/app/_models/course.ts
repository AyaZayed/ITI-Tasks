export class Course {
  id: number;
  name: string;
  duration: number;

  constructor(id: number = 0, name: string = '', duration: number = 1) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
}
