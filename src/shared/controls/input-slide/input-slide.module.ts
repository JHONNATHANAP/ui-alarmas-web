import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputSlideComponent } from './input-slide.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppInputSlideComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [
    AppInputSlideComponent
  ]
})
export class InputSlideModule { }
