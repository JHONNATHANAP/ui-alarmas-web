import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppControl } from '@shared/app/models/alarma-model';

@Component({
  selector: 'mobile-apagar-por-frase',
  templateUrl: './apagar-por-frase.component.html',
  styleUrls: ['./apagar-por-frase.component.scss'],
})
export class ApagarPorFraseComponent  implements OnInit {
  control:AppControl={placeholder:'Escribe tu respuesta', label:'Respuesta', value:''}
  constructor(private router:Router) { }

  ngOnInit() {}
  onClickSubmit(){
    this.router.navigate(['./mis-alarmas'])
  }

}
