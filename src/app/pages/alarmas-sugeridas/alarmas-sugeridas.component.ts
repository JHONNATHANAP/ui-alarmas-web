import { Component, OnInit } from '@angular/core';
import { AppAlarmaModel } from '@shared/app/models/alarma-model';

@Component({
  selector: 'mobile-alarmas-sugeridas',
  templateUrl: './alarmas-sugeridas.component.html',
  styleUrls: ['./alarmas-sugeridas.component.scss'],
})
export class AlarmasSugeridasComponent  implements OnInit {
  alarmas: Array<AppAlarmaModel> = [
    {
      titulo: "Trabajo",
      hora: "06:00 am",
      diasDelaSemana: [
        { label: "D", active: false, id: 0 },
        { label: "L", active: true, id: 1 },
        { label: "M", active: true, id: 2 },
        { label: "M", active: true, id: 3 },
        { label: "J", active: true, id: 4 },
        { label: "V", active: true, id: 5 },
        { label: "S", active: false, id: 6 },
      ],
      active: true,
      showSlider:false,
      tipoApagado: { tipo: "EJERCICO_MENTAL", value: { id: 1, label: "Agitar" } },
    },
    {
      titulo: "Tomar agua",
      hora: "09:00 am",
      diasDelaSemana: [
        { label: "D", active: false, id: 0 },
        { label: "L", active: true, id: 1 },
        { label: "M", active: true, id: 2 },
        { label: "M", active: true, id: 3 },
        { label: "J", active: false, id: 4 },
        { label: "V", active: true, id: 5 },
        { label: "S", active: false, id: 6 },
      ],
      active: false,
      showSlider:false,
      tipoApagado: { tipo: "TECLA", value: { id: 1, label: "Agitar" } },
    },
    {
      titulo: "Medicamentos",
      hora: "10:00 am",
      diasDelaSemana: [
        { label: "D", active: false, id: 0 },
        { label: "L", active: true, id: 1 },
        { label: "M", active: true, id: 2 },
        { label: "M", active: true, id: 3 },
        { label: "J", active: false, id: 4 },
        { label: "V", active: true, id: 5 },
        { label: "S", active: false, id: 6 },
      ],
      active: true,
      showSlider:false,
      tipoApagado: { tipo: "TECLA", value: { id: 1, label: "Agitar" } },
    },
    {
      titulo: "Pausas activas",
      hora: "10:00 am",
      diasDelaSemana: [
        { label: "D", active: false, id: 0 },
        { label: "L", active: true, id: 1 },
        { label: "M", active: true, id: 2 },
        { label: "M", active: true, id: 3 },
        { label: "J", active: false, id: 4 },
        { label: "V", active: true, id: 5 },
        { label: "S", active: false, id: 6 },
      ],
      active: true,
      showSlider:false,
      tipoApagado: { tipo: "MOVIMIENTO", value: { id: 1, label: "Agitar" } },
    }
  ];
  constructor() { }

  ngOnInit() {}

}
