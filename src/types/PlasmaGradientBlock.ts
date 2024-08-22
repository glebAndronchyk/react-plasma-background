import { CSSProperties } from "react";
import { PlasmaKeyframeType } from "../types";

export type PlasmaGradientBlock = Required<
  Pick<CSSProperties, "zIndex" | "top" | "left" | "width" | "height">
> & { animationType: PlasmaKeyframeType };
