import { Component } from '@angular/core';
import { Student } from '../../_models/student';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../_services/student-service';

@Component({
  selector: 'app-student-delete',
  imports: [],
  templateUrl: './student-delete.html',
  styleUrl: './student-delete.css',
})
export class StudentDelete {
  student: Student | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    public router: ActivatedRoute,
    public studentServ: StudentService,
    public nav: Router
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.loadStudent(id);
    });
  }

  loadStudent(id: number) {
    // this.student = this.studentServ.getStudentById(id);
  }

  deleteStudent() {
    // if (this.student) {
    //   this.studentServ.deleteStudent(this.student.id);
    //   this.nav.navigate(['/students']);
    // }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
