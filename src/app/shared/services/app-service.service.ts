import { Injectable } from '@angular/core';
import { AppAlarmaModel } from '@shared/app/models/alarma-model';
import { Observable, Subject } from 'rxjs';
export type viewTypes =
  | 'INICIO'
  | 'NUEVA_ALARMA'
  | 'CONFIRMAR_ALARMA'
  | 'SUGERIDAS'
  | 'ALARMA_POR_VOZ'
  | 'ALARMA_RAPIDA';
@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  view: viewTypes = 'INICIO';
  private editModeSubjexct = new Subject<any>();
  misAlarmas: Array<AppAlarmaModel> = [
    {
      titulo: 'Trabajo',
      hora: '06:00 am',
      diasDelaSemana: [
        { label: 'D', active: false, id: 0 },
        { label: 'L', active: true, id: 1 },
        { label: 'M', active: true, id: 2 },
        { label: 'M', active: true, id: 3 },
        { label: 'J', active: true, id: 4 },
        { label: 'V', active: true, id: 5 },
        { label: 'S', active: false, id: 6 },
      ],
      active: true,
      tipoApagado: { tipo: 'MOVIMIENTO', value: { id: 1, label: 'Agitar' } },
    },
    {
      titulo: 'Universidad',
      hora: '06:00 am',
      diasDelaSemana: [
        { label: 'D', active: false, id: 0 },
        { label: 'L', active: true, id: 1 },
        { label: 'M', active: true, id: 2 },
        { label: 'M', active: true, id: 3 },
        { label: 'J', active: false, id: 4 },
        { label: 'V', active: true, id: 5 },
        { label: 'S', active: false, id: 6 },
      ],
      active: false,
      tipoApagado: { tipo: 'TECLA', value: { id: 1, label: 'Agitar' } },
    },
    {
      titulo: 'Clase de UX',
      hora: '06:00 am',
      diasDelaSemana: [
        { label: 'D', active: false, id: 0 },
        { label: 'L', active: true, id: 1 },
        { label: 'M', active: false, id: 2 },
        { label: 'M', active: false, id: 3 },
        { label: 'J', active: false, id: 4 },
        { label: 'V', active: true, id: 5 },
        { label: 'S', active: false, id: 6 },
      ],
      active: true,
      tipoApagado: {
        tipo: 'EJERCICO_MENTAL',
        value: { id: 1, label: 'Agitar' },
      },
    },
  ];
  alarmasSugeridas: Array<AppAlarmaModel> = [
    {
      titulo: 'Trabajo',
      hora: '06:00 am',
      diasDelaSemana: [
        { label: 'D', active: false, id: 0 },
        { label: 'L', active: true, id: 1 },
        { label: 'M', active: true, id: 2 },
        { label: 'M', active: true, id: 3 },
        { label: 'J', active: true, id: 4 },
        { label: 'V', active: true, id: 5 },
        { label: 'S', active: false, id: 6 },
      ],
      active: true,
      showSlider: false,
      tipoApagado: {
        tipo: 'EJERCICO_MENTAL',
        value: { id: 1, label: 'Agitar' },
      },
    },
    {
      titulo: 'Tomar agua',
      hora: '09:00 am',
      diasDelaSemana: [
        { label: 'D', active: false, id: 0 },
        { label: 'L', active: true, id: 1 },
        { label: 'M', active: true, id: 2 },
        { label: 'M', active: true, id: 3 },
        { label: 'J', active: false, id: 4 },
        { label: 'V', active: true, id: 5 },
        { label: 'S', active: false, id: 6 },
      ],
      active: false,
      showSlider: false,
      tipoApagado: { tipo: 'TECLA', value: { id: 1, label: 'Agitar' } },
    },
    {
      titulo: 'Medicamentos',
      hora: '10:00 am',
      diasDelaSemana: [
        { label: 'D', active: false, id: 0 },
        { label: 'L', active: true, id: 1 },
        { label: 'M', active: true, id: 2 },
        { label: 'M', active: true, id: 3 },
        { label: 'J', active: false, id: 4 },
        { label: 'V', active: true, id: 5 },
        { label: 'S', active: false, id: 6 },
      ],
      active: true,
      showSlider: false,
      tipoApagado: { tipo: 'TECLA', value: { id: 1, label: 'Agitar' } },
    },
    {
      titulo: 'Pausas activas',
      hora: '10:00 am',
      diasDelaSemana: [
        { label: 'D', active: false, id: 0 },
        { label: 'L', active: true, id: 1 },
        { label: 'M', active: true, id: 2 },
        { label: 'M', active: true, id: 3 },
        { label: 'J', active: false, id: 4 },
        { label: 'V', active: true, id: 5 },
        { label: 'S', active: false, id: 6 },
      ],
      active: true,
      showSlider: false,
      tipoApagado: { tipo: 'MOVIMIENTO', value: { id: 1, label: 'Agitar' } },
    },
  ];
  constructor() {}
  changeEditMode(edit: boolean) {
    console.log(edit)
    this.editModeSubjexct.next(edit);
  }
  getEditMode(): Observable<any> {
    return this.editModeSubjexct.asObservable();
  }
}
