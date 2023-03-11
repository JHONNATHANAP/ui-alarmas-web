import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlarmasComponent } from './lista-alarmas.component';
import { CardModule } from '@shared/card/card.module';
import { RippleModule } from '@shared/ripple/ripple.module';
import { DiasSemanaModule } from '../dias-semana/dias-semana.module';
import { SlideModule } from '@shared/controls/slide/slide.module';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    ListaAlarmasComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RippleModule,
    DiasSemanaModule,
    SlideModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/icons/icons.json',
    }),
  ],
  exports: [
    ListaAlarmasComponent
  ]
})
export class ListaAlarmasModule { }
