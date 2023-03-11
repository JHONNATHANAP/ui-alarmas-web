import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent  {
  @Input() checked:boolean=true;
  constructor() {
   
  }


}
