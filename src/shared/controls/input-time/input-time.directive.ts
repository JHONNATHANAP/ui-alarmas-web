import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { InputTimeModalTemplateComponent } from "./modal-template/modal-template.component";

@Directive({
  selector: "[appInputTimeModal]",
})
export class InputTimeModalDirective {
  @Input() data: any;
  @Input() component: any = InputTimeModalTemplateComponent;

  @Output() changed = new EventEmitter<string | string[]>();

  constructor(private dialog: MatDialog) {}

  @HostListener("click", ["event"]) onClick() {
    this.openDialog();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(this.component, {
      width: "100%",
      height: "fit-content",
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (!result) return;
      this.changed.emit(result || null);
    });
  }
}
