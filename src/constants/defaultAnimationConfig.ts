import { PlasmaGradientPosition } from "../entities";
import { AnimationConfig } from "../types";

export const defaultAnimationConfig: AnimationConfig = {
  startPositions: [
    new PlasmaGradientPosition(40, 60),
    new PlasmaGradientPosition(60, 40),
    new PlasmaGradientPosition(50, 50),
  ],
  block: {
    widthRange: [600, 800],
    heightRange: [500, 700],
  },
  keyframesConfig: {
    skewRange: [10, 20],
    rotateRange: [150, 400],
    translatePercentRange: [-50, 50],
  },
};
