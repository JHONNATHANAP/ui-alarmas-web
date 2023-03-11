import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisAlarmasComponent } from './mis-alarmas.component';

const routes: Routes = [
  {
    path: '',
    component:MisAlarmasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisAlarmasRoutingModule { }
