import { PlasmaGradientPosition } from "../entities";
import { PlasmaRange } from "../types";

export interface AnimationConfig {
  startPositions: PlasmaGradientPosition[];
  block: {
    widthRange: PlasmaRange;
    heightRange: PlasmaRange;
  };
  keyframesConfig: {
    skewRange: PlasmaRange;
    rotateRange: PlasmaRange;
    translatePercentRange: PlasmaRange;
  };
}
