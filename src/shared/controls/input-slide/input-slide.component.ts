import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppControl } from '@shared/app/models/alarma-model';
export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-input-slide',
  templateUrl: './input-slide.component.html',
  styleUrls: ['./input-slide.component.scss'],
})
export class AppInputSlideComponent  {
  @Input() control: AppControl={label:'Label',placeholder:'placeholder',value:true};
  @Output() changed = new EventEmitter<string>();

  value: string = '';
  isDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onKeyup(event: Event): void {
    const { target } = event;
    this.value = (target as HTMLInputElement).value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }

}
