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

  getCourseById(id: number): Course | null {
    return this.courses.find((crs) => crs.id === id) ?? null;
  }

  createCourse(crs: Course) {
    if (!crs.name || !crs.duration) throw new Error('Please enter course details');
    if (this.courses.some((c) => c.name === crs.name)) {
      throw new Error('Course already exists');
    }
    this.courses.push({ ...crs });
  }

  updateCourse(crs: Course) {
    const index = this.courses.findIndex((crs) => crs.id === crs.id);
    this.courses[index] = { ...crs };
  }

  deleteCourse(id: number) {
    const index = this.courses.findIndex((crs) => crs.id === id);
    this.courses.splice(index, 1);
  }
}
