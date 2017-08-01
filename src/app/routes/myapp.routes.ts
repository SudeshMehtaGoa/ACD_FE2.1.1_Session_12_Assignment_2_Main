/* Router file */
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from 'app/component/student-component/student.component';
import { StudentListComponent } from "app/component/student-list/student-list.component";
import { PageNotFoundComponent } from 'app/component/page-not-found/page-not-found.component';

/* introduced default and wild card roots */

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'studentList', component: StudentListComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes);