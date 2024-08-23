import { useEffect, useRef, useState } from "react";

import { usePlasmaContext } from "./usePlasmaContext";
import { PlasmaKeyframeType } from "../types";
import { PlasmaBlockAnimation } from "../entities";
import { useAnimationConfiguration } from "./useAnimationConfiguration";

export const usePlasmaBlockAnimation = (animationType: PlasmaKeyframeType) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const [blockAnimation, setBlockAnimation] = useState<PlasmaBlockAnimation>();

  const {
    config: { speed },
  } = usePlasmaContext();
  const {
    animationConfiguration: { keyframesConfig },
  } = useAnimationConfiguration();

  useEffect(() => {
    if (blockAnimation) {
      blockAnimation.updateSpeed(speed * 1000);
    }
  }, [speed]);

  useEffect(() => {
    setBlockAnimation(
      new PlasmaBlockAnimation(
        blockRef.current!,
        animationType,
        keyframesConfig,
        speed * 1000,
      ),
    );
  }, []);

  return { blockRef, blockAnimation };
};
