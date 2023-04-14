import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
import { IndexComponent } from './klass/index.component';
import { KlassAddComponent } from './klass/klass-add/klass-add.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'add', component: TeacherAddComponent },
  { path: 'edit/:id', component : TeacherEditComponent },
  { path: 'klass', 
  loadChildren: () => import('./klass/klass.module').then(mod => mod.KlassModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
