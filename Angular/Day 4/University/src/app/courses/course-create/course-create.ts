import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../_models/course';
import { CourseService } from '../../_services/course-service';

@Component({
  selector: 'app-course-create',
  imports: [FormsModule],
  templateUrl: './course-create.html',
  styleUrl: './course-create.css',
})
export class CourseCreate {
  course = new Course();
  crsServ = inject(CourseService);

  addCourse() {
    this.crsServ.createCourse(this.course);
  }
}
