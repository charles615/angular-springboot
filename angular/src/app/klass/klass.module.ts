import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { SharedModule } from '../shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { KlassAddComponent } from './klass-add/klass-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
  {
    path: '',
    component: IndexComponent
  }, {
    path: 'add',
    component: KlassAddComponent
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    KlassAddComponent,

  ],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class KlassModule { }
