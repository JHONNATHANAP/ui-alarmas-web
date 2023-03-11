import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApagarPorMatematicasRoutingModule } from './apagar-por-matematicas-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ApagarPorMatematicasComponent } from './apagar-por-matematicas.component';


@NgModule({
  declarations: [ApagarPorMatematicasComponent],
  imports: [
    CommonModule,
    ApagarPorMatematicasRoutingModule,
    SharedModule
  ]
})
export class ApagarPorMatematicasModule { }
