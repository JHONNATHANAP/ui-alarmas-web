import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ModalBrainComponent } from '@shared/app/modales/brain/brain.component';
import { ModalFrecuenciaComponent } from '@shared/app/modales/frecuencia/frecuencia.component';
import { ModalMovimientoComponent } from '@shared/app/modales/movimiento/movimiento.component';
import { ModalSonidoComponent } from '@shared/app/modales/sonido/sonido.component';
import { ModalTeclaComponent } from '@shared/app/modales/tecla/tecla.component';
import { AppObjectControls } from '@shared/app/models/alarma-model';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-form-alarma',
  templateUrl: './form-alarma.component.html',
  styleUrls: ['./form-alarma.component.scss'],
})
export class FormAlarmaComponent implements OnInit {
  form: any;
  formKeys: Array<string> = [];
  controls!: AppObjectControls;
  edit:boolean=false;
  templateTecla = ModalTeclaComponent;
  templateBrain = ModalBrainComponent;
  templateMovimiento = ModalMovimientoComponent;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    public appService: AppServiceService
  ) {
    this.buildForm()
    appService.getEditMode().subscribe((edit) => {
      console.log(edit)
      this.edit = edit;
      this.buildForm()
    });
    
  }
buildForm(){
  let form: any = {};
    this.controls = {
      name: {
        label: 'Nombre alarma',
        placeholder: 'Ejemplo: Alarma de trabajo',
        value: this.edit ? 'Alarma de trabajo' : '',
        valueText: this.edit ? 'Alarma de trabajo' : '',
        formControlName: 'name',
        type: 'string',
        colums: 6,
      },
      hora: {
        label: 'Hora',
        placeholder: 'Seleccionar hora...',
        value: this.edit ? '' : '',
        valueText: this.edit ? '5:25 am' : '',
        formControlName: 'hora',
        type: 'time',
        colums: 6,
      },
      dias: {
        label: 'Días de la semana',
        placeholder: '',
        value: this.edit ? '' : '',
        valueText: this.edit ? '' : '',
        formControlName: 'dias',
        colums: 6,
        dias: this.edit
          ? [
              { label: 'D', active: false, id: 0 },
              { label: 'L', active: true, id: 1 },
              { label: 'M', active: true, id: 2 },
              { label: 'M', active: true, id: 3 },
              { label: 'J', active: true, id: 4 },
              { label: 'V', active: true, id: 5 },
              { label: 'S', active: false, id: 6 },
            ]
          : undefined,
        type: 'dias',
      },
      frecuancia: {
        label: 'Frecuencia',
        placeholder: 'Seleccionar frecuencia...',
        value: '',
        valueText: this.edit ? 'Cada 5 horas' : '',
        formControlName: 'frecuancia',
        component: ModalFrecuenciaComponent,
        type: 'modal',
        colums: 6,
      },
      fechaInicio: {
        label: 'Fecha de inicio',
        placeholder: 'Seleccionar fecha...',
        value: this.edit ? '05/25/2022' : '',
        valueText: this.edit ? '05/25/2022' : '',
        formControlName: 'fechaInicio',
        type: 'date',
        colums: 6,
      },
      fechaFin: {
        label: 'Fecha fin',
        placeholder: 'Seleccionar fecha...',
        value: this.edit ? '' : '',
        valueText: this.edit ? '05/30/2022' : '',
        formControlName: 'fechaFin',
        type: 'date',
        colums: 6,
      },
      sonido: {
        label: 'Sonido',
        placeholder: 'Seleccionar sonido...',
        value: this.edit ? '' : '',
        valueText: this.edit ? 'Gallo' : '',
        formControlName: 'sonido',
        type: 'modal',
        component: ModalSonidoComponent,
        colums: 6,
      },
      alarmaSuave: {
        label: 'Alarma suave',
        placeholder: 'Seleccionar hora...',
        value: this.edit ? '' : '',
        formControlName: 'alarmaSuave',
        type: 'slider',
        colums: 6,
      },
      tipoApagado: {
        label: 'Tipo de apagado',
        placeholder: 'Seleccionar hora...',
        value: '',
        formControlName: 'tipoApagado',
      },
    };
    this.formKeys = Object.keys(this.controls);
    this.formKeys.forEach((element) => {
      let control = this.controls[element];
      if (!control?.formControlName) return;
      form[control?.formControlName] = [control?.value, []];
    });
    this.form = this.formBuilder.group(form);

}
  ngOnInit() {}
  close() {
    localStorage.clear();
    this.router.navigate(['./mis-alarmas']);
  }
  submitForm() {
    this.appService.view = 'INICIO';
    this.close();
    this._snackBar.open('Se ha programado tu alarma con éxito', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'custom-snack',
      duration: 3000,
    });
  }
  tipoApagadoChange(value: any, tipo: string) {
    console.log(value, tipo);
  }
}
