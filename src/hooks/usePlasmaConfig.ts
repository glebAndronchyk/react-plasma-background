import { useState } from "react";
import { PlasmaConfig, PlasmaColorTuple, UsePlasmaReturn, InitialPlasmaConfig } from "../types";
import { defaultPlasmaConfig } from "../constants";

export const usePlasmaConfig = (
  initial: InitialPlasmaConfig,
): UsePlasmaReturn => {
  const [plasmaConfig, setPlasmaConfig] = useState<PlasmaConfig>({
    blocksColors: initial.blocksColors,
    speed: initial.speed || defaultPlasmaConfig.speed,
    opacity: initial.opacity || defaultPlasmaConfig.opacity,
    blur: initial.blur || defaultPlasmaConfig.blur,
  });

  const shake = (duration: number, colors?: PlasmaColorTuple) => {
    updateConfig({
      speed: plasmaConfig.speed / 3,
      blur: plasmaConfig.blur / 2.15,
      blocksColors: colors || plasmaConfig.blocksColors,
    });

    setTimeout(() => {
      updateConfig({ ...plasmaConfig });
    }, duration);
  };

  const updateConfig = (config: Partial<typeof plasmaConfig>) => {
    setPlasmaConfig({
      ...plasmaConfig,
      ...config,
    });
  };

  const changeColor = (blocksColors: PlasmaColorTuple) =>
    updateConfig({ blocksColors });
  const changeSpeed = (speed: number) => updateConfig({ speed });
  const changeOpacity = (opacity: number) => updateConfig({ opacity });
  const changeBlur = (blur: number) => updateConfig({ blur });

  return [
    plasmaConfig,
    {
      changeColor,
      changeSpeed,
      changeOpacity,
      changeBlur,
      updateConfig,
      shake,
    },
  ] as const;
};
