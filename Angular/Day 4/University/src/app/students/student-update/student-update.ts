import { Component } from '@angular/core';
import { Student } from '../../_models/student';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../_services/student-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  imports: [FormsModule],
  templateUrl: './student-update.html',
  styleUrl: './student-update.css',
})
export class StudentUpdate {
  student: Student | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    public router: ActivatedRoute,
    public studentServ: StudentService,
    public nav: Router
  ) {}

  updateStd() {
    if (this.student) {
      this.studentServ.updateStudent(this.student);
      this.nav.navigate(['/students']);
    }
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.loadStudent(id);
    });
  }

  loadStudent(id: number) {
    this.student = this.studentServ.getStudentById(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
