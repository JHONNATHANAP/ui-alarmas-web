import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AlarmaPorVozModule } from '../alarma-por-voz/alarma-por-voz.module';
import { FormAlarmaModule } from '../form-alarma/form-alarma.module';
import { MisAlarmasRoutingModule } from './mis-alarmas-routing.module';
import { MisAlarmasComponent } from './mis-alarmas.component';

@NgModule({
  declarations: [MisAlarmasComponent],
  imports: [
    CommonModule,
    MisAlarmasRoutingModule,
    SharedModule,
    FormAlarmaModule,
    AlarmaPorVozModule,
  ],
  exports: [],
})
export class MisAlarmasModule {}
