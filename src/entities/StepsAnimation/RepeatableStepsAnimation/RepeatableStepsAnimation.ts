import { Random } from "../../../utils/Random";
import { StepsAnimation } from "../StepsAnimation";

export class RepeatableStepsAnimation extends StepsAnimation {
  private availableActions = ["skew", "rotate"] as const;

  constructor(...props: ConstructorParameters<typeof StepsAnimation>) {
    super(...props);
  }

  override get(): Keyframe[] {
    const prevStepAction = this.getRandomAction();

    return this.keysDummy.map((n) => {
      const stepAction = prevStepAction === "skew" ? "rotate" : "skew";
      const transform = this.processRandomGeneration(n, stepAction);

      return {
        transform,
      };
    });
  }

  protected generateRandomAnimation(
    stepAction: ReturnType<typeof this.getRandomAction>,
  ) {
    return `${this.stepFallback} 
              ${stepAction === "skew" ? this.animations.getSkewAnimation() : ""} 
              ${this.animations.getRotateAnimation()}
              ${this.animations.getTranslateAnimation("X")}`;
  }

  private getRandomAction() {
    return this.availableActions[
      Random.pickInRange([0, this.availableActions.length - 1], "int")
    ];
  }
}
