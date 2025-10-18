import { Injectable } from '@angular/core';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    new Course(100, 'Intro to Js', 10),
    new Course(101, 'Intro to Angular', 20),
    new Course(102, 'Intro to React', 30),
  ];

  getCourses() {
    return this.courses;
  }

  getCourseById(id: number) {
    return this.courses.filter((crs) => crs.id === id);
  }

  createCourse(crs: Course) {
    this.courses.push({ ...crs });
  }
}
