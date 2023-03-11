import { FocusMonitor } from "@angular/cdk/a11y";
import { Component, Inject } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-input-time",
  templateUrl: "./modal-template.component.html",
  styleUrls: ["./modal-template.component.scss"],
})
export class InputTimeModalTemplateComponent {
  form: any;
  selected: Date | null | undefined;
  meridiano = "AM";
  constructor(
    private dialogRef: MatDialogRef<InputTimeModalTemplateComponent>,
    private _focusMonitor: FocusMonitor,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      hora: ["", [Validators.required]],
      minutos: [
        "",
        [Validators.required, Validators.min(0), Validators.max(60)],
      ],
    });
    
  }
  change(event: any) {
    console.log(event);
  }
  emitClick(event: any) {
    console.log(`${this.form.controls["hora"].value} : ${this.form.controls["hora"].value}  ${this.meridiano}`);
    this.dialogRef.close(
      `${this.form.controls["hora"].value} : ${this.form.controls["minutos"].value}  ${this.meridiano}`
    );
  }
  onClose(): void {
    this.dialogRef.close();
  }
  autoFocusNext(
    control: AbstractControl,
    nextElement?: HTMLInputElement
  ): void {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, "program");
    }
  }
  _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    this.autoFocusNext(control, nextElement);
    //this.onChange(this.value);
  }
  changeMeriano(value: string) {
    this.meridiano = value;
  }
}
