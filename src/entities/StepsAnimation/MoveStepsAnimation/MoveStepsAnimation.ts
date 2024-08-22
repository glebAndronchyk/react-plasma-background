import { StepsAnimation } from "../StepsAnimation";

export class MoveStepsAnimation extends StepsAnimation {
  constructor(...props: ConstructorParameters<typeof StepsAnimation>) {
    super(...props);
  }

  protected generateRandomAnimation() {
    return `${this.stepFallback}
            ${this.animations.getTranslateAnimation()}`;
  }
}
