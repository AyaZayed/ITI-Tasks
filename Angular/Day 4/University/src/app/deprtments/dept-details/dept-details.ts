import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeptService } from '../../_services/dept-service';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dept-details',
  imports: [FormsModule, RouterLink],
  templateUrl: './dept-details.html',
  styleUrl: './dept-details.css',
})
export class DeptDetails implements OnInit, OnDestroy {
  dept: Department | null = null;
  private destroy$ = new Subject<void>();

  constructor(public router: ActivatedRoute, public deptServ: DeptService) {}

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
