import { PlasmaKeyframeType, AnimationConfig } from "../../types";
import { RandomAnimationMetrics } from "../RandomAnimationMetrics";
import { RandomAnimations } from "../RandomAnimations";
import {
  MoveStepsAnimation,
  RepeatableStepsAnimation,
} from "../StepsAnimation";

export class PlasmaKeyframes {
  private readonly randomAnimations: RandomAnimations;
  private keysDummy: number[];

  constructor(
    private type: PlasmaKeyframeType,
    config: AnimationConfig["keyframesConfig"],
  ) {
    this.randomAnimations = new RandomAnimations(
      new RandomAnimationMetrics(
        config.skewRange,
        config.rotateRange,
        config.translatePercentRange,
      ),
    );
    this.keysDummy = Array.from({
      length: this.type === "deformation" ? 5 : 6,
    }).map((_, i) => i);
  }

  getKeyFrameArray(): Keyframe[] {
    switch (this.type) {
      case "deformation":
        return new RepeatableStepsAnimation(
          this.randomAnimations,
          this.keysDummy,
        ).get();
      case "move":
        return new MoveStepsAnimation(
          this.randomAnimations,
          this.keysDummy,
        ).get();
      default:
        throw new Error(`No such keyframe type: ${this.type}`);
    }
  }
}
