import { Component, Input } from "@angular/core";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-ripple",
  templateUrl: "./ripple.component.html",
  styleUrls: ["./ripple.component.scss"],
})
export class RippleComponent {
  @Input() radio: number=30;
  @Input() color: string='rgba(#6485ab,0.5)';
  constructor() {}
  do(){}
}
