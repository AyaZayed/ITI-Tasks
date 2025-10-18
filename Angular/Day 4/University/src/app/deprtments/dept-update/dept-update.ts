import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeptService } from '../../_services/dept-service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dept-update',
  imports: [FormsModule],
  templateUrl: './dept-update.html',
  styleUrl: './dept-update.css',
})
export class DeptUpdate implements OnInit, OnDestroy {
  dept: Department | null = null;
  private destroy$ = new Subject<void>();

  constructor(public router: ActivatedRoute, public deptServ: DeptService) {}

  updateDept() {
    if (this.dept) {
      this.deptServ.updateDept(this.dept);
    }
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.loadDepartment(id);
    });
  }

  loadDepartment(id: number) {
    this.dept = this.deptServ.getDeptById(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
