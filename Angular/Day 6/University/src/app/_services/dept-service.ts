import { Injectable } from '@angular/core';
import { Department } from '../_models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeptService {
  private apiUrl = 'http://localhost:8000/departments/';

  constructor(private http: HttpClient) {}

  getDepts(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  getById(id: number): Observable<Department> {
    return this.http.get<Department>(this.apiUrl + id);
  }

  createDept(dept: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, dept);
  }

  updateDept(dept: Department): Observable<Department> {
    return this.http.put<Department>(this.apiUrl + dept._id, dept);
  }

  deleteDept(id: number): Observable<Department> {
    return this.http.delete<Department>(this.apiUrl + id);
  }
}
