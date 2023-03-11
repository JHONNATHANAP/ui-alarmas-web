import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmaPorVozRoutingModule } from './alarma-por-voz-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AlarmaPorVozComponent } from './alarma-por-voz.component';


@NgModule({
  declarations: [AlarmaPorVozComponent],
  imports: [
    CommonModule,
    AlarmaPorVozRoutingModule,
    SharedModule
  ],
  exports:[
    AlarmaPorVozComponent
  ]
})
export class AlarmaPorVozModule { }
