import { NgModule} from '@angular/core';
import { TeacherComponent } from './teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared/shared.module';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    TeacherComponent,
    TeacherAddComponent,
    TeacherEditComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule
  ]
})
export class TeacherModule{}
