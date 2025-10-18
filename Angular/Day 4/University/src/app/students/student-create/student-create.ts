import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../_models/student';
import { StudentService } from '../../_services/student-service';

@Component({
  selector: 'app-student-create',
  imports: [FormsModule],
  templateUrl: './student-create.html',
  styleUrl: './student-create.css',
})
export class StudentCreate {
  std = new Student();
  stdServ = inject(StudentService);

  addStd() {
    const stdsLength = this.stdServ.getStudents().length;
    this.std.id = stdsLength + 1;

    if (this.std.name && this.std.name.trim()) {
      this.stdServ.createStudent(this.std);
      this.std = new Student(0, '', '', 0);
    }
  }
}
