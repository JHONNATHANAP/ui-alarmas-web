import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmasSugeridasComponent } from './alarmas-sugeridas.component';

const routes: Routes = [
  {
    path: '',
    component:AlarmasSugeridasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmasSugeridasRoutingModule { }
