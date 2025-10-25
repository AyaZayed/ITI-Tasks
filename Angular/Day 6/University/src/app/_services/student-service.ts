import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:8000/students/';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE3NjEzMTcxNzAsImV4cCI6MTc2MTMyMDc3MH0.nghaVHkvYZh3726K-yDr19FA3-rJU_F_ryH_kat9T-Y`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<Student[]>(this.apiUrl, { headers });
  }

  getStdById(id: number): Observable<Student> {
    return this.http.get<Student>(this.apiUrl + id);
  }

  createStd(std: FormData): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, std);
  }

  updateStd(std: Student): Observable<Student> {
    return this.http.put<Student>(this.apiUrl + std._id, std);
  }

  deleteStd(id: number): Observable<Student> {
    return this.http.delete<Student>(this.apiUrl + id);
  }
}
