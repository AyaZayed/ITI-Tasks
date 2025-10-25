import { Component, OnInit } from '@angular/core';
import { Department } from '../../_models/department';
import { DeptService } from '../../_services/dept-service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.html',
  styleUrl: './dept-list.css',
  imports: [RouterLink, RouterOutlet],
})
export class DeptList implements OnInit {
  depts: Department[] = [];
  constructor(public deptServ: DeptService) {}

  ngOnInit(): void {
    this.deptServ.getDepts().subscribe((depts) => ((this.depts = depts), console.log(depts)));
  }
}
