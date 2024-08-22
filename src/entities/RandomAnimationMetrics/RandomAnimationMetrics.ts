import { PlasmaRange } from "../../types";
import { Random } from "../../utils/Random";

export class RandomAnimationMetrics {
  constructor(
    private skewRange: PlasmaRange,
    private rotateRange: PlasmaRange,
    private translatePercentRange: PlasmaRange,
  ) {}

  getSkewDeg = () => Random.pickInRange(this.skewRange);
  getRotateDeg = () => Random.pickInRange(this.rotateRange);
  getTranslatePercent = () => Random.pickInRange(this.translatePercentRange);
}
