import { Component, OnInit } from '@angular/core';
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
export class DeptDelete implements OnInit {
  dept: Department | null = null;
  constructor(public router: ActivatedRoute, public deptServ: DeptService, public nav: Router) {}

  deleteDept() {
    this.deptServ
      .deleteDept(this.router.snapshot.params['id'])
      .subscribe(() => this.nav.navigate(['departments']));
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.loadDepartment(id);
    });
  }

  loadDepartment(id: number) {
    this.deptServ.getById(id).subscribe({
      next: (data) => (this.dept = data),
      error: (err) => console.error(err),
    });
  }
}
