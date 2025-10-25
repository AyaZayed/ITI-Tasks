import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeptService } from '../../_services/dept-service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dept-update',
  imports: [FormsModule],
  templateUrl: './dept-update.html',
  styleUrl: './dept-update.css',
})
export class DeptUpdate implements OnInit {
  dept: Department | null = null;

  constructor(public router: ActivatedRoute, public deptServ: DeptService, public nav: Router) {}

  ngOnInit() {
    this.loadDepartment(this.router.snapshot.params['id']);
  }

  loadDepartment(id: number) {
    this.deptServ.getById(id).subscribe({
      next: (data) => (this.dept = data),
      error: (err) => console.error(err),
    });
  }

  updateDept(updateDeptForm: any) {
    this.deptServ.updateDept(this.dept!).subscribe((data) => this.nav.navigate(['departments']));
  }
}
