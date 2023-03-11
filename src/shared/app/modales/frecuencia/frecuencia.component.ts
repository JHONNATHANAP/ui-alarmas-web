import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppObjectControls } from "@shared/app/models/alarma-model";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-frecuencia",
  templateUrl: "./frecuencia.component.html",
  styleUrls: ["./frecuencia.component.scss"],
})
export class ModalFrecuenciaComponent {
  controls: AppObjectControls = {
    frecuenciaTiempo: {
      label: "",
      placeholder: "",
      value: "Horas",
      formControlName: "frecuenciaTiempo",
      type: "radio",
      options: [
        { label: "Minutos", value: "Minutos" },
        { label: "Horas", value: "Horas" },
        { label: "Días", value: "Días" },
        { label: "Semanas", value: "Semanas" },
        { label: "Meses", value: "Meses" },
        { label: "Años", value: "Años" },
      ],
    },
    frecuenciaNumero: {
      label: "",
      placeholder: "",
      value: 10,
      formControlName: "frecuenciaNumero",
      type: "radio",
    },
  };
  constructor(
    private dialogRef: MatDialogRef<ModalFrecuenciaComponent>,
    // private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  emitClick(event: any) {
    console.log(this.controls);

    let value = {
      frecuenciaNumero: this.controls["frecuenciaNumero"]?.value,
      frecuenciaTiempo: this.controls["frecuenciaTiempo"]?.value,
    };
    let valueText = `Cada ${value.frecuenciaNumero} ${value.frecuenciaTiempo}`;
    this.dialogRef.close({ value: value, valueText: valueText });
  }
}
