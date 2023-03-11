import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { InputDateComponent } from "./input-date.component";
import { InputDateModalDirective } from "./input-modal.directive";
import { InputDateModalTemplateComponent } from "./modal-template/modal-template.component";
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [InputDateComponent, InputDateModalTemplateComponent,InputDateModalDirective],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers:[
    MatDatepickerModule
  ],
  exports: [MatDatepickerModule,MatDatepickerModule,InputDateComponent,InputDateModalDirective],
})
export class InputDateModule {}
