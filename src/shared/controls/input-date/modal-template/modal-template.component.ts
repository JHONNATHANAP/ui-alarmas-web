import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-input-date',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss'],
})
export class InputDateModalTemplateComponent  {

  selected: Date | null | undefined;
  constructor(
    private dialogRef: MatDialogRef<InputDateModalTemplateComponent>,
    // private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
 
  }
  change(event:any){
    console.log(event)
  }
  emitClick(event:any){
    console.log(this.selected)
    this.dialogRef.close(this.selected);
  }
  onClose(): void {
    this.dialogRef.close();
  }
}
