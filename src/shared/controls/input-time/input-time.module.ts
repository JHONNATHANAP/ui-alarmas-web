import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { InputTimeComponent } from "./input-time.component";
import { InputTimeModalDirective } from "./input-time.directive";
import { InputTimeModalTemplateComponent } from "./modal-template/modal-template.component";
@NgModule({
  declarations: [
    InputTimeComponent,
    InputTimeModalTemplateComponent,
    InputTimeModalDirective,
  ],
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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MatDatepickerModule],
  exports: [
    MatDatepickerModule,
    MatDatepickerModule,
    InputTimeComponent,
    InputTimeModalDirective,
  ],
})
export class InputTimeModule {}
