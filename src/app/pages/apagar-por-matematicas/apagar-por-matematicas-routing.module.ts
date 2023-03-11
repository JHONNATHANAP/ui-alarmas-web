import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApagarPorMatematicasComponent } from './apagar-por-matematicas.component';

const routes: Routes = [
  {
    path: '',
    component:ApagarPorMatematicasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApagarPorMatematicasRoutingModule { }
