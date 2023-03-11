import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { AppControl, AppDiaDeLaSemana } from "@shared/app/models/alarma-model";

@Component({
  selector: "app-input-dias-semana",
  templateUrl: "./input-dias-semana.component.html",
  styleUrls: ["./input-dias-semana.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDiasSemanaComponent),
      multi: true,
    },
  ],
})
export class InputDiasSemanaComponent implements OnInit, ControlValueAccessor {
  @Input() control: AppControl = {
    label: "Label",
    placeholder: "placeholder",
    value: "value",
  };
  dias: Array<AppDiaDeLaSemana> = [
    { label: "D", active: false, id: 0 },
    { label: "L", active: false, id: 1 },
    { label: "M", active: false, id: 2 },
    { label: "M", active: false, id: 3 },
    { label: "J", active: false, id: 4 },
    { label: "V", active: false, id: 5 },
    { label: "S", active: false, id: 6 },
  ];
  @Output() changed = new EventEmitter<string>();

  value: string = "";
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
