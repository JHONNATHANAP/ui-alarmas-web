import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApagarPorTeclaRoutingModule } from './apagar-por-tecla-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ApagarPorTeclaComponent } from './apagar-por-tecla.component';


@NgModule({
  declarations: [ApagarPorTeclaComponent],
  imports: [
    CommonModule,
    ApagarPorTeclaRoutingModule,
    SharedModule
  ]
})
export class ApagarPorTeclaModule { }
