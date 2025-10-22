import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';
import { authGuard } from './_guards/auth-guard';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'contact',
    canActivate: [authGuard],
    component: Contact,
  },
  {
    path: 'login',
    component: Login,
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
