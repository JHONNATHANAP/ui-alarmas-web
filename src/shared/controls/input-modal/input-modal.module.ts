import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { InputModalComponent } from "./input-modal.component";
import { InputModalDirective } from "./input-modal.directive";
import { InputModalTemplateComponent } from "./modal-template/modal-template.component";

@NgModule({
  declarations: [
    InputModalComponent,
    InputModalTemplateComponent,
    InputModalDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [InputModalComponent, InputModalDirective],
})
export class InputModalModule {}
