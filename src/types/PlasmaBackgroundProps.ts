import { AnimationConfig } from "./AnimationConfig";
import { InitialPlasmaConfig } from "./InitialPlasmaConfig";

export interface PlasmaBackgroundProps {
  initial: InitialPlasmaConfig;
  animationConfiguration?: AnimationConfig;
}
