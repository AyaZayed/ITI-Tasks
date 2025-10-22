import { Component } from '@angular/core';
import { Course } from '../../_models/course';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../_services/course-service';

@Component({
  selector: 'app-course-delete',
  imports: [],
  templateUrl: './course-delete.html',
  styleUrl: './course-delete.css',
})
export class CourseDelete {
  course: Course | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    public router: ActivatedRoute,
    public courseServ: CourseService,
    public nav: Router
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.loadCourse(id);
    });
  }

  loadCourse(id: number) {
    this.course = this.courseServ.getCourseById(id);
  }

  deleteCourse() {
    if (this.course) {
      this.courseServ.deleteCourse(this.course.id);
      this.nav.navigate(['/courses']);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
