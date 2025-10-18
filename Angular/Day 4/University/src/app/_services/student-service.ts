import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    new Student(1, 'Joan Diddeon', 'nV2uA@example.com', 20),
    new Student(2, 'Sally Rooney', '9oXoK@example.com', 30),
    new Student(3, 'Gabrielle Zevin', '9oXoK@example.com', 31),
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(stdId: number) {
    return this.students.filter((std) => std.id === stdId)[0];
  }

  createStudent(std: Student) {
    this.students.push({ ...std });
  }
}
