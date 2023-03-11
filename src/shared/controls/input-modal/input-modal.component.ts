import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { AppControl } from "@shared/app/models/alarma-model";
import { InputModalTemplateComponent } from "./modal-template/modal-template.component";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-input-modal",
  templateUrl: "./input-modal.component.html",
  styleUrls: ["./input-modal.component.scss"],
})
export class InputModalComponent {
  @Input() control: AppControl = {
    label: "Label",
    placeholder: "placeholder",
    value: "value",
  };
  @Input() component: any=InputModalTemplateComponent;
  component2=InputModalTemplateComponent;
  @Output() changed = new EventEmitter<string>();

  constructor() {}
  controlChange(event: any) {
    console.log(event)
    this.control.value=event.value;
    this.control.valueText=event.valueText;

  }
}
