import { Component, Input } from "@angular/core";
import { AppDiaDeLaSemana } from "../models/alarma-model";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-dias-semana",
  templateUrl: "./dias-semana.component.html",
  styleUrls: ["./dias-semana.component.scss"],
})
export class DiasSemanaComponent {
  @Input() dias: Array<AppDiaDeLaSemana> = [
    { label: "D", active: false, id: 0 },
    { label: "L", active: true, id: 1 },
    { label: "M", active: false, id: 2 },
    { label: "M", active: false, id: 3 },
    { label: "J", active: false, id: 4 },
    { label: "V", active: false, id: 5 },
    { label: "S", active: false, id: 6 },
  ];
  constructor() {}
  toogle(dia: any) {
    let index = this.dias.findIndex((x) => x.id === dia.id);
    if (index < 0) return;
    this.dias[index].active = !this.dias[index].active;
  }
}
