import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmasSugeridasRoutingModule } from './alarmas-sugeridas-routing.module';
import { AlarmasSugeridasComponent } from './alarmas-sugeridas.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [AlarmasSugeridasComponent],
  imports: [
    CommonModule,
    AlarmasSugeridasRoutingModule,
    SharedModule
  ]
})
export class AlarmasSugeridasModule { }
