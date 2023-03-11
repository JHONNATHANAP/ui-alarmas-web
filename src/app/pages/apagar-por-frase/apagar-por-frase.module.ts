import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApagarPorFraseRoutingModule } from './apagar-por-frase-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ApagarPorFraseComponent } from './apagar-por-frase.component';


@NgModule({
  declarations: [ApagarPorFraseComponent],
  imports: [
    CommonModule,
    ApagarPorFraseRoutingModule,
    SharedModule
  ]
})
export class ApagarPorFraseModule { }
