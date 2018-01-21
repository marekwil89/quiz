import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminQuizCreateComponent } from './components/admin/quiz/create/admin-quiz-create/admin-quiz-create.component';
import { AdminQuizListComponent } from './components/admin/quiz/list/admin-quiz-list/admin-quiz-list.component';

const routes: Routes = [
  {
    path: 'AdminQuizCreate',
    component: AdminQuizCreateComponent
  },
  { 
    path: '',    
    redirectTo: '/AdminQuizCreate', 
    pathMatch: 'full'  },
  {
    path: 'AdminQuizList',
    component: AdminQuizListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
