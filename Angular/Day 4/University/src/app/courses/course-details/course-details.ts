import { Component } from '@angular/core';
import { Course } from '../../_models/course';
import { Subject } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../_services/course-service';

@Component({
  selector: 'app-course-details',
  imports: [RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  course: Course | null = null;
  private destroy$ = new Subject<void>();

  constructor(public router: ActivatedRoute, public courseServ: CourseService) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.loadCourse(id);
    });
  }

  loadCourse(id: number) {
    this.course = this.courseServ.getCourseById(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
