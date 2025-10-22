import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DeptService } from '../../_services/dept-service';
import { Department } from '../../_models/department';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dept-delete',
  imports: [RouterLink],
  templateUrl: './dept-delete.html',
  styleUrl: './dept-delete.css',
})
export class DeptDelete {
  dept: Department | null = null;
  private destroy$ = new Subject<void>();

  constructor(public router: ActivatedRoute, public deptServ: DeptService, public nav: Router) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.loadDepartment(id);
    });
  }

  loadDepartment(id: number) {
    this.dept = this.deptServ.getDeptById(id);
  }

  deleteDept() {
    if (this.dept) {
      this.deptServ.deleteDept(this.dept.id);
      this.nav.navigate(['/departments']);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
