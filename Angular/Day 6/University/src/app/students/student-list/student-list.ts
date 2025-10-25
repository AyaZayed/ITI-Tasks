import { Component, OnInit } from '@angular/core';
import { Student } from '../../_models/student';
import { StudentService } from '../../_services/student-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {
  students: Student[] = [];

  constructor(public stdServ: StudentService) {}

  ngOnInit(): void {
    this.stdServ
      .getStudents()
      .subscribe((students) => ((this.students = students), console.log(students)));
  }
}
