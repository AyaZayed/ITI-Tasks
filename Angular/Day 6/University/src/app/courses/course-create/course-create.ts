import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../_models/course';
import { CourseService } from '../../_services/course-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-create',
  imports: [FormsModule],
  templateUrl: './course-create.html',
  styleUrl: './course-create.css',
})
export class CourseCreate {
  course = new Course();

  constructor(public router: Router, public crsServ: CourseService) {}

  addCourse() {
    const coursesLength = this.crsServ.getCourses().length;
    this.course.id = coursesLength + 1;
    this.crsServ.createCourse(this.course);
    this.router.navigate(['/courses']);
    this.course = { id: 0, name: '', duration: 1 };
  }
}
