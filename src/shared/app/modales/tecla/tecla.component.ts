import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppObjectControls } from "@shared/app/models/alarma-model";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-tecla",
  templateUrl: "./tecla.component.html",
  styleUrls: ["./tecla.component.scss"],
})
export class ModalTeclaComponent {
  controls: AppObjectControls = {
    sonido: {
      label: "",
      placeholder: "",
      value: "3",
      formControlName: "frecuenciaTiempo",
      type: "radio",
      options: [
        { label: "Tecla en pantalla", value: "0" },
        { label: "Botón de apagado", value: "1" },
        { label: "Botón volumen +", value: "2" },
        { label: "Botón volumen -", value: "3" },
      ],
    },
  };
  constructor(
    private dialogRef: MatDialogRef<ModalTeclaComponent>,
    // private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  emitClick(event: any) {
    console.log(this.controls);

    let value = this.controls["sonido"]?.value;
    let valueText = this.controls["sonido"]?.options?.filter(
      (e) => e.value === value
    )[0]?.label;
    console.log({ value: value, valueText: valueText })
    this.dialogRef.close({ value: value, valueText: valueText });
  }
}
