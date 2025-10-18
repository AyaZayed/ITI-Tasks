import { Routes } from '@angular/router';
import { CourseList } from './course-list/course-list';
import { CourseDetails } from './course-details/course-details';
import { CourseCreate } from './course-create/course-create';
import { CourseUpdate } from './course-update/course-update';
import { CourseDelete } from './course-delete/course-delete';
import { NotFound } from '../not-found/not-found';

export const course_routes: Routes = [
  { path: '', component: CourseList },
  { path: 'departments', component: CourseList },
  { path: ':id', component: CourseDetails },
  { path: 'create', component: CourseCreate },
  { path: 'update/:id', component: CourseUpdate },
  { path: 'delete/:id', component: CourseDelete },
  { path: '**', component: NotFound },
];
