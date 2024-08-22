import { RandomAnimations } from "../RandomAnimations";

export abstract class StepsAnimation {
  protected stepFallback = "translate(-50%, -50%)";
  protected initialPos = "";

  constructor(
    protected animations: RandomAnimations,
    protected keysDummy: number[],
  ) {}

  get(): Keyframe[] {
    return this.keysDummy.map((n) => ({
      transform: this.processRandomGeneration(n),
    }));
  }

  protected abstract generateRandomAnimation(...args: unknown[]): string;

  protected processRandomGeneration(index: number, ...args: unknown[]) {
    const { isLast, isFirst } = this.getKeyStatus(index);
    const str = this.generateRandomAnimation(...args).replace(/\s+/g, " ");

    if (isFirst) this.initialPos = str;

    return isLast ? this.initialPos : str;
  }

  protected getKeyStatus(index: number) {
    return {
      isLast: this.keysDummy.length - 1 === index,
      isFirst: index === 0,
    };
  }
}
