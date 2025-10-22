import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentService } from '../../_services/student-service';
import { StudentDetails } from '../student-details/student-details';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {
  students: Student[] = [];
  stdServ = inject(StudentService);

  ngOnInit(): void {
    this.students = this.stdServ.getStudents();
  }
}
