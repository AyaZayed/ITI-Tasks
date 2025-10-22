import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../_services/student-service';
import { Student } from '../../_models/student';
import { Subject } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [RouterLink],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails implements OnInit {
  student: Student | null = null;
  private destroy$ = new Subject<void>();

  constructor(public router: ActivatedRoute, public studentServ: StudentService) {}

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
