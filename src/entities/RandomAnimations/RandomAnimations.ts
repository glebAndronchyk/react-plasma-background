import { RandomAnimationMetrics } from "../RandomAnimationMetrics";

export class RandomAnimations {
  constructor(private metrics: RandomAnimationMetrics) {}

  getRotateAnimation() {
    const { getRotateDeg } = this.metrics;

    return `
          rotate(${getRotateDeg()}deg)
    `;
  }

  getSkewAnimation() {
    const { getSkewDeg } = this.metrics;

    return `
      skew(${getSkewDeg()}deg, ${getSkewDeg()}deg)
    `;
  }

  getTranslateAnimation(axis?: "X" | "Y") {
    const { getTranslatePercent } = this.metrics;

    if (!axis) {
      return `translateX(${getTranslatePercent()}%) translateY(${getTranslatePercent()}%)`;
    }

    return `translate${axis}(${getTranslatePercent()}%)`;
  }
}
