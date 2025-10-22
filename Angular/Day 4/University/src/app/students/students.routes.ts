import { Routes } from '@angular/router';
import { StudentList } from './student-list/student-list';
import { StudentDetails } from './student-details/student-details';
import { StudentCreate } from './student-create/student-create';
import { StudentUpdate } from './student-update/student-update';
import { StudentDelete } from './student-delete/student-delete';
import { NotFound } from '../not-found/not-found';

export const student_routes: Routes = [
  { path: '', component: StudentList },
  { path: 'create', component: StudentCreate },
  { path: 'update/:id', component: StudentUpdate },
  { path: 'delete/:id', component: StudentDelete },
  { path: ':id', component: StudentDetails },
  { path: '**', component: NotFound },
];
