import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-alarma-por-voz',
  templateUrl: './alarma-por-voz.component.html',
  styleUrls: ['./alarma-por-voz.component.scss'],
})
export class AlarmaPorVozComponent implements OnInit {
  constructor(private router: Router, private appService: AppServiceService) {}

  ngOnInit() {}
  navigate() {
    this.appService.changeEditMode(true);
    this.appService.view = 'CONFIRMAR_ALARMA';
  
  }
}
