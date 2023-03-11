import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmaRapidaRoutingModule } from './alarma-rapida-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AlarmaRapidaComponent } from './alarma-rapida.component';


@NgModule({
  declarations: [AlarmaRapidaComponent],
  imports: [
    CommonModule,
    AlarmaRapidaRoutingModule,
    SharedModule
  ]
})
export class AlarmaRapidaModule { }
