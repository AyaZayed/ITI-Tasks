import { Component, inject } from '@angular/core';
import { DeptService } from '../../_services/dept-service';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-create',
  imports: [FormsModule],
  templateUrl: './dept-create.html',
  styleUrl: './dept-create.css',
})
export class DeptCreate {
  deptServ = inject(DeptService);
  dept = new Department();

  constructor(public router: Router) {}

  addDept() {
    const deptsLength = this.deptServ.getDepts().length;
    this.dept.id = deptsLength + 1;
    if (this.dept.name) {
      this.deptServ.createDept(this.dept);
      this.dept = { id: 0, name: '' };
      this.router.navigate(['/departments']);
    } else {
      alert('Please enter department name');
    }
  }
}
