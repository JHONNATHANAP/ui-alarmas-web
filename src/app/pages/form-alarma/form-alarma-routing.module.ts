import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAlarmaComponent } from './form-alarma.component';

const routes: Routes = [
  {
    path: '',
    component: FormAlarmaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAlarmaRoutingModule {}
