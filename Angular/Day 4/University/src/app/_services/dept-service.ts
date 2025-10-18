import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root',
})
export class DeptService {
  private depts: Department[] = [
    new Department(1, 'IT'),
    new Department(2, 'HR'),
    new Department(3, 'Sales'),
    new Department(4, 'Admin'),
    new Department(5, 'Finance'),
  ];

  getDepts() {
    return this.depts;
  }

  getDeptById(id: number): Department {
    return this.depts.filter((d) => d.id === id)[0];
  }

  createDept(dept: Department) {
    this.depts.push({ ...dept });
  }

  updateDept(dept: Department) {
    const index = this.depts.findIndex((d) => d.id === dept.id);
    this.depts[index] = { ...dept };
  }

  deleteDept(id: number) {
    const index = this.depts.findIndex((d) => d.id === id);
    this.depts.splice(index, 1);
  }
}
