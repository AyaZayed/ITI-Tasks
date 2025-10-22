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

  getDeptById(id: number): Department | null {
    return this.depts.find((d) => d.id === id) ?? null;
  }

  createDept(dept: Department) {
    if (!dept.name) {
      throw new Error('Please enter department name');
    }
    if (this.depts.some((d) => d.name === dept.name)) {
      throw new Error('Department name already exists');
    }
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
