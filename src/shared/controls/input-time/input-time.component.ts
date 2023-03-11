import {
  Component,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { AppControl } from "@shared/app/models/alarma-model";
import * as moment from "moment";

@Component({
  selector: "app-input-time",
  templateUrl: "./input-time.component.html",
  styleUrls: ["./input-time.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTimeComponent),
      multi: true,
    },
  ],
})
export class InputTimeComponent implements OnInit, ControlValueAccessor {
  @Input() control: AppControl = {
    label: "Label",
    placeholder: "placeholder",
    value: "value",
  };
  @Output() changed = new EventEmitter<string>();

  value: string = "";
  isDisabled: boolean = false;
  picker: any;

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
  dateValue(): Date | null {
    return this.value ? new Date(moment(this.value).toDate()) : null;
  }

  onBlur(): void {
    this.propagateTouched();
  }
  controlChange(event: any) {
    console.log(event);
    this.control.value = event;
    this.control.valueText = this.control.value;
    this.value = this.control.value;
  }
  onChangeMaterial(event: any) {
    this.control.value = moment(event.value).format("DD/MM/YYYY");
  }
  onClosed(): void {
    /*    this.propagateTouched();
    this.closed.emit(); */
  }
}
