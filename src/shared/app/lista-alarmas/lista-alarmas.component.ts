import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AppServiceService } from "src/app/shared/services/app-service.service";
import { AppAlarmaModel } from "../models/alarma-model";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-lista-alarmas",
  templateUrl: "./lista-alarmas.component.html",
  styleUrls: ["./lista-alarmas.component.scss"],
})
export class ListaAlarmasComponent {
  @Input() alarmas: Array<AppAlarmaModel>=[];
  constructor(private router:Router,private appService:AppServiceService) {
    
  }
  navigate(){
  this.appService.view='CONFIRMAR_ALARMA'
  }
}
