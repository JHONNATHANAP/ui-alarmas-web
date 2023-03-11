import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatFormFieldModule,MatInputModule,MatIconModule],
  exports: [InputComponent],
})
export class InputModule {}
