import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-card',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss'],
})
export class InputModalTemplateComponent  {

 
  constructor(
    private dialogRef: MatDialogRef<InputModalTemplateComponent>,
    // private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
 
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
