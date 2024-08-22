import { AnimationConfig, PlasmaKeyframeType } from "../../types";
import { PlasmaKeyframes } from "../PlasmaKeyframes";

export class PlasmaBlockAnimation {
  private animation?: Animation;
  private easing = "cubic-bezier(0.1, 0, 0.9, 1)";
  private keyframes?: Keyframe[];
  private currentSpeed = 0;

  constructor(
    private ref: HTMLDivElement,
    animationType: PlasmaKeyframeType,
    keyframesConfig: AnimationConfig["keyframesConfig"],
    speedMs: number,
  ) {
    this.createKeyframes(animationType, keyframesConfig);
    this.updateAnimation(speedMs);
  }

  getAnimation = () => this.animation;

  updateSpeed(newSpeedMs: number) {
    const currentCompletionPercent = this.getCurrentCompletionPercent();
    this.updateAnimation(newSpeedMs, currentCompletionPercent * newSpeedMs);
  }

  private getCurrentCompletionPercent() {
    if (!this.animation) return 0;

    const currentAnimationTime = this.animation.currentTime as number;

    return !!this.currentSpeed
      ? (currentAnimationTime % this.currentSpeed) / this.currentSpeed
      : 0;
  }

  private updateAnimation(speedMs: number, startTime = 0) {
    const effect = this.createKeyframeEffect(speedMs);

    this.setAnimation(effect, startTime);
    this.currentSpeed = speedMs;
    this.animation!.play();
  }

  private setAnimation(effect: KeyframeEffect, startTime: number) {
    this.animation = new Animation(effect, document.timeline);
    this.animation.currentTime = startTime;
  }

  private createKeyframeEffect(speedMs: number) {
    if (!this.keyframes) throw new Error("Keyframes are not defined.");

    return new KeyframeEffect(this.ref, this.keyframes, {
      duration: speedMs,
      iterations: Infinity,
      easing: this.easing,
    });
  }

  private createKeyframes(
    animationType: PlasmaKeyframeType,
    keyframesConfig: AnimationConfig["keyframesConfig"],
  ) {
    this.keyframes = new PlasmaKeyframes(
      animationType,
      keyframesConfig,
    ).getKeyFrameArray();
  }
}
