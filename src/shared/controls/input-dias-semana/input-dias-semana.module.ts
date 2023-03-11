import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { DiasSemanaModule } from "@shared/app/dias-semana/dias-semana.module";
import { InputDiasSemanaComponent } from "./input-dias-semana.component";
@NgModule({
  declarations: [InputDiasSemanaComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, DiasSemanaModule],
  exports: [InputDiasSemanaComponent],
})
export class InputDiasSemanaModule {}
