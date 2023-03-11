import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApagarPorFraseComponent } from './apagar-por-frase.component';

const routes: Routes = [
  {
    path: '',
    component:ApagarPorFraseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApagarPorFraseRoutingModule { }
