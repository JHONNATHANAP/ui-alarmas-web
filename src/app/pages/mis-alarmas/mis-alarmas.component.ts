import { Component, OnInit } from '@angular/core';
import { AppAlarmaModel } from '@shared/app/models/alarma-model';
import { AppServiceService, viewTypes } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'mobile-mis-alarmas',
  templateUrl: './mis-alarmas.component.html',
  styleUrls: ['./mis-alarmas.component.scss'],
})
export class MisAlarmasComponent implements OnInit {

  menu: Array<{
    icono: string;
    label: string;
    class: string;
    view: viewTypes;
  }> = [
    {
      icono: 'sugeridas-web',
      label: 'Alarmas <br />sugeridas',
      class: '',
      view: 'SUGERIDAS',
    },
    {
      icono: 'clock-web',
      label: 'Nueva <br />alarma',
      class: '',
      view: 'NUEVA_ALARMA',
    },
    {
      icono: 'voice-web',
      label: 'Alarma <br />por voz',
      class: '',
      view: 'ALARMA_POR_VOZ',
    },
  ];
  
  constructor(public appService:AppServiceService) {}
  changeView(view: viewTypes) {
    this.appService.view = view;
  }
  ngOnInit() {}
}
