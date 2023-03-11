import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputModalComponent } from './input-modal.component';
import { InputModalTemplateComponent } from './modal-template/modal-template.component';

@Directive({
  selector: '[appInputModal]',
})
export class InputModalDirective {
  @Input() data: any;
  @Input() component: any = InputModalTemplateComponent;

  @Output() changed = new EventEmitter<string | string[]>();

  constructor(private dialog: MatDialog) {}

  @HostListener('click', ['event']) onClick() {
    this.openDialog();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(this.component, {
      width: 'fit-content !important',
      height: 'fit-content',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.changed.emit(result || null);
    });
  }
}
