import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmaPorVozComponent } from './alarma-por-voz.component';

const routes: Routes = [
  {
    path: '',
    component:AlarmaPorVozComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmaPorVozRoutingModule { }
