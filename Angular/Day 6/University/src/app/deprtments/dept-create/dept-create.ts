import { Component } from '@angular/core';
import { DeptService } from '../../_services/dept-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-create',
  imports: [FormsModule],
  templateUrl: './dept-create.html',
  styleUrl: './dept-create.css',
})
export class DeptCreate {
  constructor(public router: Router, private deptServ: DeptService) {}

  addDept(createDeptForm: any) {
    this.deptServ
      .createDept(createDeptForm.value)
      .subscribe(() => this.router.navigate(['departments']));
  }
}
