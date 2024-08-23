import { PlasmaRange } from "../../types";

export class Random {
  static pickInRange(range: PlasmaRange, mode: "int" | "float" = "float") {
    const val = Math.random() * (range[1] - range[0]) + range[0];

    switch (mode) {
      case "int":
        return Math.round(val);
      default:
        return Number(val.toFixed(2));
    }
  }

  static generateId(length = 9): string {
    return Math.random().toString(36).substring(2, length);
  }
}
