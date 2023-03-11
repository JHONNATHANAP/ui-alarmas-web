import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleComponent } from './ripple.component';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    RippleComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [
    RippleComponent
  ]
})
export class RippleModule { }
