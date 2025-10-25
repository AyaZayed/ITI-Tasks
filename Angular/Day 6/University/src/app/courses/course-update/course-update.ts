import { Component } from '@angular/core';
import { Course } from '../../_models/course';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../_services/course-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-update',
  imports: [FormsModule],
  templateUrl: './course-update.html',
  styleUrl: './course-update.css',
})
export class CourseUpdate {
  course: Course | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    public router: ActivatedRoute,
    public courseServ: CourseService,
    public nav: Router
  ) {}

  updateCourse() {
    if (this.course) {
      this.courseServ.updateCourse(this.course);
      this.nav.navigate(['/courses']);
    }
  }

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
