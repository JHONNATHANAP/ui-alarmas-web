import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApagarPorTeclaComponent } from './apagar-por-tecla.component';

const routes: Routes = [
  {
    path: '',
    component:ApagarPorTeclaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApagarPorTeclaRoutingModule { }
