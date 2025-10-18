import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { DeptList } from './deprtments/dept-list/dept-list';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'departments',
    loadChildren: () => import('./deprtments/departments.routes').then((r) => r.dept_routes),
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.routes').then((r) => r.course_routes),
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.routes').then((r) => r.student_routes),
  },
  { path: '**', component: NotFound },
];
