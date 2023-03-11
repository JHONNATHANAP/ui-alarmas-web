import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppObjectControls } from "@shared/app/models/alarma-model";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-sonido",
  templateUrl: "./sonido.component.html",
  styleUrls: ["./sonido.component.scss"],
})
export class ModalSonidoComponent {
  controls: AppObjectControls = {
    sonido: {
      label: "",
      placeholder: "",
      value: "5",
      formControlName: "frecuenciaTiempo",
      type: "radio",
      options: [
        { label: "Pajaritos", value: "0" },
        { label: "Luz de luna", value: "1" },
        { label: "Las mañanitas", value: "2" },
        { label: "Pajaro loco", value: "3" },
        { label: "Navidad", value: "4" },
        { label: "Mil horas", value: "5" },
        { label: "Gallo", value: "6" },
        { label: "5 minutos más", value: "7" },
        { label: "No quiero trabajar", value: "8" },
        { label: "No quiero ir a estudiar", value: "9" },
      ],
    },
  };
  constructor(
    private dialogRef: MatDialogRef<ModalSonidoComponent>,
    // private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  emitClick(event: any) {
    console.log(this.controls);

    let value = this.controls["sonido"]?.value;
    let valueText = this.controls["sonido"]?.options?.filter(
      (e) => e.value === value
    )[0]?.label;
    this.dialogRef.close({ value: value, valueText: valueText });
  }
}
