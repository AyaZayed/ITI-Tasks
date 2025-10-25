import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Student } from '../../_models/student';
import { StudentService } from '../../_services/student-service';
import { Router } from '@angular/router';
import { DeptService } from '../../_services/dept-service';

@Component({
  selector: 'app-student-create',
  imports: [ReactiveFormsModule],
  templateUrl: './student-create.html',
  styleUrl: './student-create.css',
})
export class StudentCreate {
  studentForm!: FormGroup;
  departments: any[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private deptService: DeptService
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      _id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      department: ['', Validators.required],
      image: [null, Validators.required],
    });

    this.deptService.getDepts().subscribe({
      next: (data) => (this.departments = data),
      error: (err) => console.error(err),
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.studentForm.invalid) return;

    const formData = new FormData();
    formData.append('_id', this.studentForm.get('_id')?.value);
    formData.append('name', this.studentForm.get('name')?.value);
    formData.append('department', this.studentForm.get('department')?.value);
    formData.append('image', this.selectedFile);

    console.log(formData);

    this.studentService.createStd(formData).subscribe({
      next: () => {
        alert('Student added successfully!');
        this.router.navigate(['/students']);
      },
      error: (err) => console.error(err),
    });
  }
}
