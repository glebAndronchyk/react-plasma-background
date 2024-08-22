import { PlasmaPercentString } from "../../types";

export class PlasmaGradientPosition {
  top: PlasmaPercentString;
  left: PlasmaPercentString;

  constructor(top: number, left: number) {
    this.top = `${top}%`;
    this.left = `${left}%`;
  }
}
