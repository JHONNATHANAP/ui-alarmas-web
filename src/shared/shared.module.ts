import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDateFormats,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListaAlarmasModule } from '@shared/app/lista-alarmas/lista-alarmas.module';
import { SharedModalsModule } from '@shared/app/modales/modales.module';
import { ButtonModule } from '@shared/buttons';
import { CardModule } from '@shared/card/card.module';
import { InputModule } from '@shared/controls';
import { InputRadioModule } from '@shared/controls/inpu-radio/input-radio.module';
import { InputDateModule } from '@shared/controls/input-date/input-date.module';
import { InputDiasSemanaModule } from '@shared/controls/input-dias-semana/input-dias-semana.module';
import { InputModalModule } from '@shared/controls/input-modal/input-modal.module';
import { InputSlideModule } from '@shared/controls/input-slide/input-slide.module';
import { InputTimeModule } from '@shared/controls/input-time/input-time.module';
import { RippleModule } from '@shared/ripple/ripple.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
  },
  display: {
    dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    InputModule,
    InputModalModule,
    InputDiasSemanaModule,
    InputDateModule,
    InputSlideModule,
    CardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SharedModalsModule,
    InputRadioModule,
    RippleModule,
    ListaAlarmasModule,
    MatSnackBarModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/icons/icons.json',
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    ButtonModule,
    InputModule,
    InputModalModule,
    InputDateModule,
    InputSlideModule,
    InputDiasSemanaModule,
    InputTimeModule,
    CardModule,
    RippleModule,
    ListaAlarmasModule,
    AngularSvgIconModule,
    AngularSvgIconPreloaderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
