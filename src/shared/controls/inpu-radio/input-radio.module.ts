import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { InputRadioComponent } from "./input-radio.component";
@NgModule({
  declarations: [InputRadioComponent],
  imports: [CommonModule, MatFormFieldModule, MatRadioModule,FormsModule],
  exports: [InputRadioComponent],
})
export class InputRadioModule {}
