import { NgModule} from '@angular/core';
import { TeacherComponent } from './teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ]
})
export class TeacherModule{}
