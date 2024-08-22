import { PlasmaColorTuple } from "./PlasmaColorTuple";
import { PlasmaConfig } from "./PlasmaConfig";

export interface PlasmaControls {
  changeColor: (color: PlasmaColorTuple) => void;
  changeSpeed: (speed: number) => void;
  changeOpacity: (opacity: number) => void;
  changeBlur: (blur: number) => void;
  updateConfig: (config: Partial<PlasmaConfig>) => void;
  shake: (duration: number) => void;
}
