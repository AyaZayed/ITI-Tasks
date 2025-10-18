import { Routes } from '@angular/router';
import { DeptList } from './dept-list/dept-list';
import { NotFound } from '../not-found/not-found';
import { DeptCreate } from './dept-create/dept-create';
import { DeptUpdate } from './dept-update/dept-update';
import { DeptDetails } from './dept-details/dept-details';
import { DeptDelete } from './dept-delete/dept-delete';

export const dept_routes: Routes = [
  {
    path: '',
    component: DeptList,
    children: [
      { path: 'create', component: DeptCreate },
      { path: 'update/:id', component: DeptUpdate },
      { path: 'delete/:id', component: DeptDelete },
      { path: ':id', component: DeptDetails },
    ],
  },
  { path: '**', component: NotFound },
];
