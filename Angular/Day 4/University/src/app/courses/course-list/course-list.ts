import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../_models/course';
import { CourseService } from '../../_services/course-service';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses: Course[] = [];
  crsServ = inject(CourseService);

  ngOnInit(): void {
    this.courses = this.crsServ.getCourses();
  }
}
