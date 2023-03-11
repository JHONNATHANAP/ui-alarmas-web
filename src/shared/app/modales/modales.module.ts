import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { InputRadioModule } from "@shared/controls/inpu-radio/input-radio.module";
import { ModalBrainComponent } from "./brain/brain.component";
import { ModalFrecuenciaComponent } from "./frecuencia/frecuencia.component";
import { ModalMovimientoComponent } from "./movimiento/movimiento.component";
import { ModalSonidoComponent } from "./sonido/sonido.component";
import { ModalTeclaComponent } from "./tecla/tecla.component";

@NgModule({
  declarations: [
    ModalFrecuenciaComponent,
    ModalSonidoComponent,
    ModalTeclaComponent,
    ModalMovimientoComponent,
    ModalBrainComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    InputRadioModule,
    FormsModule,
  ],
  exports: [
    ModalFrecuenciaComponent,
    ModalSonidoComponent,
    ModalTeclaComponent,
    ModalMovimientoComponent,
    ModalBrainComponent
  ],
})
export class SharedModalsModule {}
