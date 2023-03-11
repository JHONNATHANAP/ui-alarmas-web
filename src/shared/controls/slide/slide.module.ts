import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    SlideComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [
    SlideComponent
  ]
})
export class SlideModule { }
