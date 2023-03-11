import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiasSemanaComponent } from './dias-semana.component';
import { CardModule } from '@shared/card/card.module';
import { RippleModule } from '@shared/ripple/ripple.module';


@NgModule({
  declarations: [
    DiasSemanaComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RippleModule
  ],
  exports: [
    DiasSemanaComponent
  ]
})
export class DiasSemanaModule { }
