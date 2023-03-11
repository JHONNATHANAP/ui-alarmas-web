import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppObjectControls } from "@shared/app/models/alarma-model";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-movimiento",
  templateUrl: "./movimiento.component.html",
  styleUrls: ["./movimiento.component.scss"],
})
export class ModalMovimientoComponent {
  controls: AppObjectControls = {
    sonido: {
      label: "",
      placeholder: "",
      value: "0",
      formControlName: "frecuenciaTiempo",
      type: "radio",
      options: [
        { label: "Agitar", value: "0" },
        { label: "Voltear", value: "1" },
      ],
    },
  };
  constructor(
    private dialogRef: MatDialogRef<ModalMovimientoComponent>,
    // private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  emitClick(event: any) {
    console.log(this.controls);

    let value = this.controls["sonido"]?.value;
    let valueText = this.controls["sonido"]?.options?.filter(
      (e) => e.value === value
    )[0]?.label;
    console.log({ value: value, valueText: valueText });
    this.dialogRef.close({ value: value, valueText: valueText });
  }
}
