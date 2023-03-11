import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppControl } from '@shared/app/models/alarma-model';

@Component({
  selector: 'mobile-apagar-por-matematicas',
  templateUrl: './apagar-por-matematicas.component.html',
  styleUrls: ['./apagar-por-matematicas.component.scss'],
})
export class ApagarPorMatematicasComponent  implements OnInit {
  control:AppControl={placeholder:'Escribe tu respuesta', label:'Respuesta', value:''}
  form: FormGroup;
  constructor(private router:Router, private formBuilder: FormBuilder,) { 
    this.form = this.formBuilder.group({
      repuesta: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],

    });
  }

  ngOnInit() {}
  onClickSubmit(){
    this.router.navigate(['./mis-alarmas'])
  }

}
