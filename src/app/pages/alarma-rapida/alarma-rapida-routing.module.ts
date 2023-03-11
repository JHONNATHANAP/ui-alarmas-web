import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmaRapidaComponent } from './alarma-rapida.component';


const routes: Routes = [
  {
    path: '',
    component:AlarmaRapidaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmaRapidaRoutingModule { }
