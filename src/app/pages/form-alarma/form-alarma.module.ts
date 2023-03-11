import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAlarmaRoutingModule } from './form-alarma-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormAlarmaComponent } from './form-alarma.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [FormAlarmaComponent],
  imports: [
    CommonModule,
    FormAlarmaRoutingModule,
    
    SharedModule
  ],
  exports:[FormAlarmaComponent]
})
export class FormAlarmaModule { }
