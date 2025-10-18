import { Component, inject, Input, OnInit } from '@angular/core';
import { StudentService } from '../../_services/student-service';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails implements OnInit {
  @Input() stdId: number = 0;
  stdServ = inject(StudentService);
  std: Student | null = null;

  ngOnInit(): void {
    this.std = this.stdServ.getStudentById(this.stdId);
  }
}
